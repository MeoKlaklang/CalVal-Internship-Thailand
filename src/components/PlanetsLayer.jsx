import { useEffect, useRef } from "react";

export default function PlanetsLayer({
  planetCount = 3,
  particleCount = 40,
  parallaxStrength = 18, // hoe hard hij meebeweegt met muis
}) {
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

    // muis parallax
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;
      mouse.tx = Math.max(0, Math.min(1, nx));
      mouse.ty = Math.max(0, Math.min(1, ny));
    };
    window.addEventListener("mousemove", onMove);

    // planets
    let planets = [];
    let particles = [];

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

      // place planets mostly on right side like your screenshot
      planets = Array.from({ length: planetCount }).map((_, i) => {
        const big = i === 0; // 1 grote "planet"
        return {
          x: big ? rand(w * 0.62, w * 0.9) : rand(w * 0.4, w * 0.92),
          y: big ? rand(h * 0.18, h * 0.55) : rand(h * 0.15, h * 0.85),
          r: big ? rand(Math.min(w, h) * 0.28, Math.min(w, h) * 0.42) : rand(120, 260),
          // glow / tint
          tint: i % 2 === 0 ? "rgba(120,170,255,0.45)" : "rgba(180,120,255,0.42)",
          tint2: i % 2 === 0 ? "rgba(90,120,255,0.22)" : "rgba(160,90,255,0.20)",
          blur: big ? 28 : 18,
          offset: rand(0, Math.PI * 2),
        };
      });

      particles = Array.from({ length: particleCount }).map(() => ({
        cx: rand(w * 0.35, w * 0.95),
        cy: rand(h * 0.05, h * 0.95),
        rr: rand(60, 220), // orbit radius
        a: rand(0, Math.PI * 2),
        sp: rand(0.0012, 0.0032), // angular speed
        r: rand(0.6, 1.8),
        baseA: rand(0.25, 0.8),
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    let t0 = performance.now();

    const drawPlanet = (p, t, ox, oy) => {
      const wobble = 1 + 0.04 * Math.sin(t * 0.0006 + p.offset);

      // big soft gradient
      const gx = p.x + ox;
      const gy = p.y + oy;

      const grad = ctx.createRadialGradient(gx - p.r * 0.25, gy - p.r * 0.25, p.r * 0.1, gx, gy, p.r);
      grad.addColorStop(0, p.tint);
      grad.addColorStop(0.55, p.tint2);
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 0.85;

      // fake blur: draw a few times
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(gx, gy, p.r * wobble * (1 + i * 0.02), 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // subtle rim light
      ctx.globalAlpha = 0.12;
      ctx.beginPath();
      ctx.arc(gx + p.r * 0.08, gy + p.r * 0.02, p.r * 0.92, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.fill();

      ctx.restore();
    };

    const render = (t) => {
      const dt = Math.min(50, t - t0);
      t0 = t;

      // ease mouse
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      const ox = (mouse.x - 0.5) * parallaxStrength;
      const oy = (mouse.y - 0.5) * parallaxStrength;

      ctx.clearRect(0, 0, w, h);

      // planets first
      for (const p of planets) drawPlanet(p, t, ox, oy);

      // orbit particles
      ctx.save();
      ctx.globalCompositeOperation = "source-over";
      for (const s of particles) {
        s.a += s.sp * dt;
        const x = s.cx + Math.cos(s.a) * s.rr + ox * 0.55;
        const y = s.cy + Math.sin(s.a) * s.rr * 0.5 + oy * 0.55;

        const tw = 0.65 + 0.35 * Math.sin(t * 0.002 + s.a * 2);
        ctx.globalAlpha = s.baseA * tw;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }
      ctx.restore();

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [planetCount, particleCount, parallaxStrength]);

  return <canvas ref={canvasRef} className="planets-canvas" />;
}