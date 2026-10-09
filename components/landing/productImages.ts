const originalWidths: Record<string, number> = {
  "activity-week": 1440,
  "activity-rhythm": 1440,
  "night-profile": 1179,
  "oncology-check-in": 756,
  "professional-plan": 1440,
  assistant: 1487,
  "movement-overview": 1600,
  "movement-week": 1600,
  "movement-day": 1600,
  "movement-rhythm": 1600,
  "movement-intensity": 1600,
  "hrv-timeline": 1600,
  "rmssd-night": 1206,
  "oncology-check-in-native": 756,
  "oncology-treatment-calendar": 1172,
  "professional-group-overview": 1184,
  "assistant-answer-evidence": 1487,
};

/** Smaller crops for small surfaces; the reviewed original remains the largest candidate. */
export function responsiveProductImage(src: string, sizes: string) {
  const name = src.slice(src.lastIndexOf("/") + 1).replace(/\.webp$/, "");
  const width = originalWidths[name];
  if (!width) return {};
  const variants = [320, 640, 960]
    .filter((candidate) => candidate < width)
    .map(
      (candidate) =>
        `${src.replace(/\.webp$/, `-${candidate}.webp`)} ${candidate}w`,
    );
  return { srcSet: [...variants, `${src} ${width}w`].join(", "), sizes };
}
