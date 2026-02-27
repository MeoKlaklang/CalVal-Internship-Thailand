import { useEffect, useRef } from "react";

export default function Starfield({ density = 180, maxSpeed = 0.18 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    let w = 0;
    let h = 0;

    const rand = (min, max) => Math.random() * (max - min) + min;

    // Stars
    let stars = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.floor((w * h) / 9000) + density; // schaal mee met scherm
      stars = Array.from({ length: count }).map(() => {
        const big = Math.random() < 0.08;
        return {
          x: rand(0, w),
          y: rand(0, h),
          r: big ? rand(1.2, 2.6) : rand(0.5, 1.5),
          baseA: big ? rand(0.55, 0.95) : rand(0.25, 0.75),
          tw: rand(0.8, 2.2), // twinkle speed
          ph: rand(0, Math.PI * 2),
          vx: rand(-maxSpeed, maxSpeed),
          vy: rand(-maxSpeed, maxSpeed),
        };
      });
    };

    resize();
    window.addEventListener("resize", resize);

    let t0 = performance.now();
    const render = (t) => {
      const dt = Math.min(50, t - t0);
      t0 = t;

      // background glow
      ctx.clearRect(0, 0, w, h);

      // subtle nebula blobs
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.22;
      ctx.beginPath();
      ctx.ellipse(w * 0.72, h * 0.52, w * 0.35, h * 0.45, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#2b4cff";
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(w * 0.55, h * 0.75, w * 0.35, h * 0.35, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#7b2bff";
      ctx.fill();

      // stars
      ctx.globalCompositeOperation = "source-over";
      for (const s of stars) {
        s.x += s.vx * (dt * 0.06);
        s.y += s.vy * (dt * 0.06);

        // wrap edges
        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;
        if (s.y < -10) s.y = h + 10;
        if (s.y > h + 10) s.y = -10;

        const a = s.baseA * (0.65 + 0.35 * Math.sin(t * 0.001 * s.tw + s.ph));
        ctx.globalAlpha = a;

        // tiny glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        if (s.r > 1.6) {
          ctx.globalAlpha = a * 0.35;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, maxSpeed]);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}