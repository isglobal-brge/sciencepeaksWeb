/**
 * SciencePeaks product illustration. Three.js is pinned and served locally.
 * Geometry is illustrative; the scene makes no clinical or live-data claims.
 * No model, image, font, CDN, or animation framework is downloaded at runtime.
 */
const vendorUrl = new URL('./vendor/three-0.186.1.min.js', import.meta.url);
vendorUrl.search = new URL(import.meta.url).search;
const {
  AmbientLight, BoxGeometry, BufferGeometry, CanvasTexture,
  CylinderGeometry, DirectionalLight, EquirectangularReflectionMapping,
  ExtrudeGeometry, Float32BufferAttribute, Group, Line, LineBasicMaterial,
  LineSegments, Mesh, MeshBasicMaterial, MeshPhysicalMaterial,
  MeshStandardMaterial, OrthographicCamera, PlaneGeometry, PMREMGenerator,
  Scene, Shape, SphereGeometry, SRGBColorSpace, Vector3,
  WebGLRenderer, ACESFilmicToneMapping, mergeGeometries,
} = await import(vendorUrl.href);

const TEAL = 0x087f8b;
const CYAN = 0x78ced8;
const INK = 0x143445;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function roundedGeometry(width, height, depth, radius = 0.15, bevel = 0.025) {
  const x = -width / 2;
  const y = -height / 2;
  const s = new Shape();
  s.moveTo(x + radius, y);
  s.lineTo(x + width - radius, y);
  s.quadraticCurveTo(x + width, y, x + width, y + radius);
  s.lineTo(x + width, y + height - radius);
  s.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  s.lineTo(x + radius, y + height);
  s.quadraticCurveTo(x, y + height, x, y + height - radius);
  s.lineTo(x, y + radius);
  s.quadraticCurveTo(x, y, x + radius, y);
  const g = new ExtrudeGeometry(s, {
    depth, bevelEnabled: bevel > 0, bevelSegments: 3,
    steps: 1, bevelSize: bevel, bevelThickness: bevel, curveSegments: 12,
  });
  g.translate(0, 0, -depth / 2);
  return g;
}

function studioTexture() {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 256;
  const ctx = c.getContext('2d');
  const base = ctx.createLinearGradient(0, 0, 0, 256);
  base.addColorStop(0, '#e8f7fb');
  base.addColorStop(0.38, '#829daa');
  base.addColorStop(0.62, '#253b4b');
  base.addColorStop(1, '#15232f');
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 512, 256);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(18, 22, 82, 115);
  ctx.fillRect(260, 25, 24, 140);
  ctx.fillStyle = '#d2f5fa';
  ctx.fillRect(370, 28, 83, 95);
  const t = new CanvasTexture(c);
  t.mapping = EquirectangularReflectionMapping;
  t.colorSpace = SRGBColorSpace;
  return t;
}

function line(points, color, opacity = 1) {
  const g = new BufferGeometry().setFromPoints(points.map(p => new Vector3(...p)));
  return new Line(g, new LineBasicMaterial({color, transparent: opacity < 1, opacity}));
}

function addBox(parent, material, width, height, depth, x, y, z, radius = 0.08) {
  const m = new Mesh(roundedGeometry(width, height, depth, radius), material);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

// Merge stationary detail by material; a strap's 18 ribs are one draw call.
function mergeStationaryDetail(parent, exclude = []) {
  const byMaterial = new Map();
  for (const child of [...parent.children]) {
    if (!child.isMesh || exclude.includes(child)) continue;
    const bucket = byMaterial.get(child.material) || [];
    bucket.push(child);
    byMaterial.set(child.material, bucket);
  }
  for (const [material, meshes] of byMaterial) {
    if (meshes.length < 2) continue;
    const copies = meshes.map(mesh => {
      mesh.updateMatrix();
      const copy = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
      return copy.applyMatrix4(mesh.matrix);
    });
    const merged = mergeGeometries(copies);
    for (const copy of copies) copy.dispose();
    if (!merged) continue;
    for (const mesh of meshes) {
      parent.remove(mesh);
      mesh.geometry.dispose();
    }
    parent.add(new Mesh(merged, material));
  }
}

function softShadow() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const grad = ctx.createRadialGradient(64, 64, 8, 64, 64, 64);
  grad.addColorStop(0, 'rgba(8,35,54,.30)');
  grad.addColorStop(0.45, 'rgba(8,35,54,.15)');
  grad.addColorStop(1, 'rgba(8,35,54,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  return new CanvasTexture(c);
}

/**
 * Attach a scene after the static hero is usable. The host owns loading policy.
 * Call dispose() before removing/replacing its container.
 */
export async function initScene({container, onReady = () => {}, onError = () => {}}) {
  if (!(container instanceof HTMLElement)) throw new TypeError('A scene container is required.');

  let renderer;
  try {
    renderer = new WebGLRenderer({
      alpha: true, antialias: true, powerPreference: 'low-power',
      preserveDrawingBuffer: false, failIfMajorPerformanceCaveat: true,
    });
  } catch (error) {
    onError(error);
    throw error;
  }

  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.outputColorSpace = SRGBColorSpace;
  // Only the one optical sheet uses transmission. Keep its offscreen pass small.
  renderer.transmissionResolutionScale = 0.5;
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none';
  canvas.dataset.scene = 'sciencepeaks';
  container.append(canvas);

  const scene = new Scene();
  const camera = new OrthographicCamera(-3.45, 3.45, 2.5, -2.5, 0.1, 30);
  camera.position.set(0.2, 0.12, 12);
  camera.lookAt(0.2, 0.12, 0);
  const objects = new Group();
  scene.add(objects);
  const ambient = new AmbientLight(0xe3f5fa, 1.9);
  const key = new DirectionalLight(0xffffff, 3.8);
  key.position.set(-3, 5, 6);
  const edge = new DirectionalLight(0x67cbd7, 2.8);
  edge.position.set(5, 0, -2);
  scene.add(ambient, key, edge);

  const environment = studioTexture();
  const pmrem = new PMREMGenerator(renderer);
  const envTarget = pmrem.fromEquirectangular(environment);
  scene.environment = envTarget.texture;
  environment.dispose();
  pmrem.dispose();

  const metal = new MeshStandardMaterial({color: 0x9cabb5, metalness: 0.97, roughness: 0.22});
  const darkMetal = new MeshStandardMaterial({color: 0x1b2c37, metalness: 0.72, roughness: 0.32});
  const strapMaterial = new MeshStandardMaterial({color: 0x162934, roughness: 0.72, metalness: 0.1});
  const ribMaterial = new MeshStandardMaterial({color: 0x243b48, roughness: 0.6, metalness: 0.1});
  const screen = new MeshPhysicalMaterial({
    color: 0x061823, metalness: 0.27, roughness: 0.09, clearcoat: 1, clearcoatRoughness: 0.04,
  });
  const tealMaterial = new MeshStandardMaterial({
    color: TEAL, metalness: 0.38, roughness: 0.2, emissive: 0x036470, emissiveIntensity: 0.12,
  });
  const lightTeal = new MeshStandardMaterial({color: CYAN, metalness: 0.25, roughness: 0.2});
  const mutedMaterial = new MeshStandardMaterial({color: 0x98b8c3, metalness: 0.2, roughness: 0.4});
  const glass = new MeshPhysicalMaterial({
    color: 0xe2f5fa, transmission: 0.58, thickness: 0.09, ior: 1.43,
    roughness: 0.1, metalness: 0, clearcoat: 1, envMapIntensity: 0.7,
    transparent: true, opacity: 0.94,
  });
  const whiteRim = new MeshStandardMaterial({
    color: 0xe3f9fb, metalness: 0.52, roughness: 0.22, transparent: true, opacity: 0.72,
  });
  const backplate = new MeshStandardMaterial({
    color: 0xe3f0f4, roughness: 0.5, metalness: 0.16, transparent: true, opacity: 0.95,
  });
  const navy = new MeshStandardMaterial({color: INK, metalness: 0.35, roughness: 0.25});

  // A generic third-party wearable: no manufacturer logo or invented product.
  const watch = new Group();
  watch.position.set(-1.63, 0.03, 0.42);
  watch.rotation.set(-0.17, 0.26, -0.18);
  objects.add(watch);
  const topStrap = addBox(watch, strapMaterial, 1.03, 1.82, 0.12, 0, 1.65, -0.18, 0.24);
  topStrap.rotation.x = -0.14;
  const lowerStrap = addBox(watch, strapMaterial, 1.03, 1.77, 0.13, 0, -1.64, -0.2, 0.23);
  lowerStrap.rotation.x = 0.13;
  // Fine strap ribs catch light without a texture or external image.
  for (const direction of [-1, 1]) {
    for (let n = 0; n < 9; n++) {
      addBox(watch, ribMaterial, 0.88, 0.032, 0.026, 0, direction * (1.13 + n * 0.14), -0.065, 0.012);
    }
  }
  // Strap perforations are dark inset geometry, deliberately small and regular.
  const holeMaterial = new MeshBasicMaterial({color: 0x07131d});
  for (let n = 0; n < 5; n++) {
    addBox(watch, holeMaterial, 0.19, 0.068, 0.013, 0, -1.38 - n * 0.2, -0.025, 0.027);
  }
  addBox(watch, metal, 1.72, 2.01, 0.24, 0, 0, 0.015, 0.37);
  addBox(watch, darkMetal, 1.58, 1.86, 0.075, 0, 0, 0.173, 0.31);
  addBox(watch, screen, 1.45, 1.73, 0.045, 0, 0, 0.233, 0.28);
  const button = new Mesh(new CylinderGeometry(0.1, 0.1, 0.17, 20), metal);
  button.rotation.z = Math.PI / 2;
  button.position.set(0.91, 0.37, 0.04);
  watch.add(button);
  addBox(watch, darkMetal, 0.09, 0.28, 0.09, 0.86, -0.32, 0.035, 0.025);
  // The screen is an illustrative record glyph, never a fabricated health score.
  const watchRecord = new Group();
  watchRecord.position.z = 0.3;
  watch.add(watchRecord);
  watchRecord.add(line([
    [-0.52,-0.15,0],[-0.43,-0.14,0],[-0.36,0.06,0],[-0.29,-0.02,0],
    [-0.21,0.21,0],[-0.13,-0.12,0],[-0.04,-0.05,0],[0.02,-0.03,0],
    [0.12,0.15,0],[0.21,0.02,0],[0.3,0.3,0],[0.4,-0.07,0],[0.5,-0.02,0],
  ], CYAN));
  watchRecord.add(line([[-0.51,-0.35,0],[0.51,-0.35,0]], 0x456774));
  for (let n = 0; n < 10; n++) {
    const marker = new Mesh(new BoxGeometry(0.054, 0.047, 0.004), n < 7 ? tealMaterial : mutedMaterial);
    marker.position.set(-0.46 + n * 0.103, -0.49, 0);
    watchRecord.add(marker);
  }
  addBox(watchRecord, tealMaterial, 0.55, 0.035, 0.008, -0.2, 0.52, 0, 0.013);
  addBox(watchRecord, ribMaterial, 0.33, 0.025, 0.008, -0.32, 0.41, 0, 0.01);
  mergeStationaryDetail(watch);
  mergeStationaryDetail(watchRecord);

  // A layered optical display turns the record into something tangible.
  const panel = new Group();
  panel.position.set(1.21, 0.13, -0.25);
  panel.rotation.set(0.07, -0.14, 0.07);
  objects.add(panel);
  addBox(panel, backplate, 3.21, 2.83, 0.08, 0, 0, -0.19, 0.23);
  addBox(panel, whiteRim, 3.28, 2.91, 0.054, 0, 0, -0.07, 0.24);
  addBox(panel, glass, 3.18, 2.81, 0.07, 0, 0, 0, 0.23);
  // Highlight the physical edge rather than covering the data with a white sheet.
  panel.add(line([[-1.44,1.26,0.08],[1.35,1.26,0.08]], 0xffffff, 0.84));
  panel.add(line([[1.48,1.14,0.08],[1.48,-1.1,0.08]], 0x91d5df, 0.5));
  addBox(panel, navy, 0.77, 0.052, 0.018, -0.8, 1.03, 0.09, 0.016);
  addBox(panel, mutedMaterial, 0.49, 0.022, 0.018, -0.94, 0.87, 0.09, 0.01);
  const gridPoints = [];
  for (let n = 0; n < 5; n++) {
    gridPoints.push(-1.31,-0.74 + n * 0.28,0.08, 1.31,-0.74 + n * 0.28,0.08);
  }
  for (let n = 0; n < 6; n++) {
    gridPoints.push(-1.29 + n * 0.51,-0.79,0.08, -1.29 + n * 0.51,0.57,0.08);
  }
  const gridGeometry = new BufferGeometry();
  gridGeometry.setAttribute('position', new Float32BufferAttribute(gridPoints, 3));
  panel.add(new LineSegments(gridGeometry, new LineBasicMaterial({color: 0x7aa5b4, transparent: true, opacity: 0.23})));
  panel.add(line([[-1.31,-0.8,0.105],[1.31,-0.8,0.105]], 0x315567, 0.65));

  const activity = new Group();
  panel.add(activity);
  const baseY = -0.78;
  // Different widths and heights explain duration and estimated intensity.
  const segments = [
    [-1.17,0.12,0.18],[-0.89,0.22,0.42],[-0.53,0.13,0.68],
    [-0.05,0.35,0.94],[0.56,0.25,0.49],[1.02,0.36,0.25],
  ];
  const bars = segments.map(([x,w,h], n) => {
    const bar = addBox(activity, n === 3 ? tealMaterial : lightTeal, w, 1, 0.11, x, baseY + h / 2, 0.21, 0.026);
    bar.scale.y = h;
    return bar;
  });
  // Hatch one recording gap. Empty periods never become zero-height measurements.
  const hatch = new Group();
  const hatchPoints = [];
  for (let y = -0.73; y < 0.49; y += 0.1) {
    hatchPoints.push(0.28,y,0.13, 0.42,y + 0.085,0.13);
  }
  const hatchGeo = new BufferGeometry();
  hatchGeo.setAttribute('position', new Float32BufferAttribute(hatchPoints, 3));
  hatch.add(new LineSegments(hatchGeo, new LineBasicMaterial({color: 0x608693, transparent: true, opacity: 0.38})));
  activity.add(hatch);
  // A slim timeline footer looks like observation history, with a literal gap.
  for (let n = 0; n < 14; n++) {
    if (n === 8 || n === 9) continue;
    addBox(panel, n === 7 ? tealMaterial : mutedMaterial, 0.125, 0.055, 0.017, -1.23 + n * 0.187, -1.09, 0.12, 0.013);
  }
  mergeStationaryDetail(panel);

  const physiology = new Group();
  physiology.visible = false;
  panel.add(physiology);
  const trendSamples = [0.49,0.81,0.46,0.39,0.26,0.36,0.5,0.56,0.41,0.6,0.49,0.36,0.71,0.7,0.61,0.23,0.13,0.26,0.4,0.49,0.51,0.47,0.5,0.63,0.55,0.61,0.43,0.59];
  [CYAN, TEAL, 0x708ca5].forEach((color, row) => {
    const points = [];
    for (let n = 0; n < 28; n++) {
      if (n >= 13 && n <= 15) continue;
      const sample = trendSamples[(n + row * 3) % trendSamples.length];
      points.push([-1.28 + n * 0.095, -0.42 + row * 0.33 + (sample - 0.5) * 0.42, 0.15]);
    }
    // Split at the missing-record period; never interpolate through it.
    physiology.add(line(points.slice(0, 13), color));
    physiology.add(line(points.slice(13), color));
  });

  const context = new Group();
  context.visible = false;
  panel.add(context);
  [0.31,-0.19,-0.66].forEach((y, row) => {
    context.add(line([[-1.2,y,0.12],[1.2,y,0.12]], 0x7795a4, 0.6));
    [-0.93,0.08,0.8].forEach((x, n) => {
      const node = new Mesh(new SphereGeometry(n === row ? 0.068 : 0.04, 16, 10), n === row ? tealMaterial : mutedMaterial);
      node.position.set(x, y, 0.16);
      context.add(node);
    });
    addBox(context, row === 0 ? tealMaterial : mutedMaterial, 0.43 + row * 0.16, 0.115, 0.05, -0.5 + row * 0.59, y, 0.15, 0.04);
  });

  // Screen-space soft shadows anchor the composition without shadow-map passes.
  const shadowTexture = softShadow();
  const shadowMaterial = new MeshBasicMaterial({map: shadowTexture, transparent: true, depthWrite: false, opacity: 0.45});
  const watchShadow = new Mesh(new PlaneGeometry(3.9, 4.8), shadowMaterial);
  watchShadow.position.set(-1.54, -0.12, -1.3);
  const panelShadow = new Mesh(new PlaneGeometry(4.3, 3.8), shadowMaterial);
  panelShadow.position.set(1.35, -0.16, -1.3);
  scene.add(watchShadow, panelShadow);

  let disposed = false;
  let manuallyPaused = false;
  let inView = true;
  let hidden = document.hidden;
  let raf = 0;
  let renderedFrames = 0;
  let lastFrame = 0;
  let animationUntil = 0;
  let currentHeight = 0.94;
  let currentWidth = 0.35;
  let targetHeight = currentHeight;
  let targetWidth = currentWidth;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let reduced = preference.matches;
  const rotation = {x: 0, y: 0};
  const targetRotation = {x: 0, y: 0};
  const canRender = () => !disposed && !manuallyPaused && inView && !hidden;

  function requestRender(animate = true) {
    if (disposed) return;
    if (animate && !reduced) animationUntil = performance.now() + 850;
    if (canRender() && !raf) raf = requestAnimationFrame(frame);
  }

  function frame(now) {
    raf = 0;
    if (!canRender()) return;
    if (now - lastFrame < 1000 / 30) {
      raf = requestAnimationFrame(frame);
      return;
    }
    const delta = Math.min(now - (lastFrame || now - 33), 70);
    lastFrame = now;
    const amount = reduced || now >= animationUntil ? 1 : 1 - Math.exp(-delta / 150);
    rotation.x += (targetRotation.x - rotation.x) * amount;
    rotation.y += (targetRotation.y - rotation.y) * amount;
    currentHeight += (targetHeight - currentHeight) * amount;
    currentWidth += (targetWidth - currentWidth) * amount;
    objects.rotation.set(rotation.x, rotation.y, 0);
    const selected = bars[3];
    selected.scale.y = currentHeight;
    selected.scale.x = currentWidth / 0.35;
    selected.position.y = baseY + currentHeight / 2;
    renderer.render(scene, camera);
    renderedFrames++;
    canvas.dataset.frames = String(renderedFrames);
    if (now < animationUntil) raf = requestAnimationFrame(frame);
  }

  function resize() {
    if (disposed) return;
    const {width, height} = container.getBoundingClientRect();
    if (!width || !height) return;
    // Cap both DPR and total raster pixels. There is no full-screen WebGL surface.
    const ratio = Math.min(devicePixelRatio || 1, 1.5, Math.sqrt(950000 / (width * height)));
    renderer.setPixelRatio(ratio);
    renderer.setSize(Math.round(width), Math.round(height), false);
    const aspect = width / height;
    const halfHeight = aspect < 1.3 ? 3.42 / aspect : 2.76;
    camera.left = -halfHeight * aspect;
    camera.right = halfHeight * aspect;
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.updateProjectionMatrix();
    requestRender(false);
  }

  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  }

  function visibility() {
    hidden = document.hidden;
    if (hidden) stop();
    else requestRender(false);
  }

  function pointerMove(event) {
    if (reduced || event.pointerType === 'touch') return;
    const rect = container.getBoundingClientRect();
    targetRotation.x = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5) * 0.1;
    targetRotation.y = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5) * 0.16;
    requestRender();
  }

  function pointerLeave() {
    targetRotation.x = targetRotation.y = 0;
    requestRender();
  }

  function motionPreference() {
    reduced = preference.matches;
    if (reduced) {
      targetRotation.x = targetRotation.y = 0;
      rotation.x = rotation.y = 0;
      animationUntil = 0;
    }
    requestRender(false);
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  const intersection = new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting && entries[0].intersectionRatio > 0.03;
    if (inView) requestRender(false);
    else stop();
  }, {threshold: [0, 0.04]});
  intersection.observe(container);
  document.addEventListener('visibilitychange', visibility);
  container.addEventListener('pointermove', pointerMove, {passive: true});
  container.addEventListener('pointerleave', pointerLeave, {passive: true});
  preference.addEventListener('change', motionPreference);

  const controller = {
    setActivity(mets, minutes) {
      const intensity = clamp(Number(mets) || 4, 1, 8);
      const duration = clamp(Number(minutes) || 30, 5, 90);
      targetHeight = intensity * 0.18;
      targetWidth = duration * 0.009;
      // Neighbouring context shifts as duration grows, preserving a real gap.
      bars[3].position.x = -0.14;
      bars[4].position.x = 0.34 + targetWidth / 2;
      bars[5].position.x = 0.72 + targetWidth / 2;
      hatch.position.x = targetWidth / 2 - 0.3;
      requestRender();
    },
    setMode(mode) {
      activity.visible = mode === 'activity' || !['physiology', 'context'].includes(mode);
      physiology.visible = mode === 'physiology';
      context.visible = mode === 'context';
      requestRender();
    },
    pause() {
      manuallyPaused = true;
      stop();
    },
    resume() {
      manuallyPaused = false;
      requestRender(false);
    },
    getStats() {
      return {
        drawCalls: renderer.info.render.calls,
        triangles: renderer.info.render.triangles,
        frames: renderedFrames,
        pixelRatio: renderer.getPixelRatio(),
        paused: !canRender(),
      };
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      stop();
      resizeObserver.disconnect();
      intersection.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      container.removeEventListener('pointermove', pointerMove);
      container.removeEventListener('pointerleave', pointerLeave);
      preference.removeEventListener('change', motionPreference);
      canvas.removeEventListener('webglcontextlost', contextLost);
      const geometries = new Set();
      const materials = new Set();
      scene.traverse(object => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) {
          for (const material of Array.isArray(object.material) ? object.material : [object.material]) materials.add(material);
        }
      });
      for (const geometry of geometries) geometry.dispose();
      for (const material of materials) material.dispose();
      shadowTexture.dispose();
      envTarget.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };

  function contextLost(event) {
    event.preventDefault();
    controller.dispose();
    onError(new Error('The 3D graphics context was lost. The static illustration remains available.'));
  }
  canvas.addEventListener('webglcontextlost', contextLost);
  resize();
  if (!reduced) {
    rotation.y = -0.065;
    rotation.x = 0.025;
    animationUntil = performance.now() + 1100;
  }
  // Resolve only after an actual frame. The host can now hide its SVG fallback.
  renderer.render(scene, camera);
  renderedFrames++;
  canvas.dataset.frames = String(renderedFrames);
  requestRender(!reduced);
  onReady(controller);
  return controller;
}
