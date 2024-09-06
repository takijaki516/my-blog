"use client";

import * as React from "react";

// TODO: refactor methods, pass the canvas as a argument
class Particle {
  x: number = 0;
  y: number = 0;
  speed: number = 0;
  opacity: number = 0;
  fadeDelay: number;
  fadeStart: number;
  fadingOut: boolean;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.reset();
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.speed = Math.random() / 5 + 0.1;
    this.opacity = 1;
    this.fadeDelay = Math.random() * 600 + 100;
    this.fadeStart = Date.now() + this.fadeDelay;
    this.fadingOut = false;
  }

  update() {
    this.y -= this.speed;

    if (this.y < 0) {
      this.reset();
    }

    if (!this.fadingOut && Date.now() > this.fadeStart) {
      this.fadingOut = true;
    }

    if (this.fadingOut) {
      this.opacity -= 0.008;

      if (this.opacity <= 0) {
        this.reset();
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // REVIEW:
    ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${this.opacity})`;
    ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
  }
}

export function Particles() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let particleCount = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const calculateParticleCount = () => {
      // 100 * 100pixel 3개의 파티클
      return Math.floor((canvas.width * canvas.height) / 3333);
    };

    const initParticles = () => {
      const particleCount = calculateParticleCount();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle: Particle) => {
        particle.update();
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particleCount = calculateParticleCount();
      initParticles();
    };

    window.addEventListener("resize", onResize);

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute top-0 h-dvh w-full"
    />
  );
}
