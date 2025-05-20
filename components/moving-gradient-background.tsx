"use client"

import React, { useEffect, useRef } from 'react';

export function MovingGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Gradient configuration
    const gradientColors = [
      { r: 0, g: 128, b: 128, a: 0.03 },  // teal-500 with low opacity
      { r: 37, g: 99, b: 235, a: 0.03 },  // blue-600 with low opacity
    ];
    
    let angle = 0;
    const speed = 0.0005; // Slow speed for subtle movement
    const gradientSize = Math.sqrt(width * width + height * height);

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Create a moving gradient
      angle += speed;
      const x0 = width / 2 + Math.cos(angle) * gradientSize / 2;
      const y0 = height / 2 + Math.sin(angle) * gradientSize / 2;
      const x1 = width / 2 + Math.cos(angle + Math.PI) * gradientSize / 2;
      const y1 = height / 2 + Math.sin(angle + Math.PI) * gradientSize / 2;
      
      const gradient = ctx.createLinearGradient(x0, y0, x1, y1);
      gradient.addColorStop(0, `rgba(${gradientColors[0].r}, ${gradientColors[0].g}, ${gradientColors[0].b}, ${gradientColors[0].a})`);
      gradient.addColorStop(1, `rgba(${gradientColors[1].r}, ${gradientColors[1].g}, ${gradientColors[1].b}, ${gradientColors[1].a})`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
      style={{ opacity: 0.7 }}
    />
  );
} 