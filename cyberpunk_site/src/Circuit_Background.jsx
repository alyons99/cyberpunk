import { useEffect, useRef } from 'react';

export default function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function resize() {
        const parent = canvas.parentElement;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    const color = '#ffffff'; // <-- Fill in your base color like '#00FFCC'
    const flashColor = '#ffffcc'; // <-- Fill in your flash color like '#FFFF00'

    const branches = [];

    function generateCircuit(count) {
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const segments = 2 + Math.floor(Math.random() * 4);
        const path = [];
        let cx = x;
        let cy = y;

        for (let j = 0; j < segments; j++) {
          const dx = (Math.random() > 0.5 ? 1 : 0) * (Math.random() * 100);
          const dy = (dx === 0 ? 1 : 0) * (Math.random() * 100);
          path.push({ x1: cx, y1: cy, x2: cx + dx, y2: cy + dy });
          cx += dx;
          cy += dy;
        }

        branches.push({
          path,
          flashing: false,
          flashDuration: 0,
          dot: { x: cx, y: cy },
        });
      }
    }

    function drawCircuit(branch) {
      for (const seg of branch.path) {
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        ctx.strokeStyle = branch.flashing ? (flashColor || '#ffffcc') : (color || '#ffffff');
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Draw terminal dot
      ctx.beginPath();
      ctx.arc(branch.dot.x, branch.dot.y, 4, 0, 2 * Math.PI);
      ctx.fillStyle = branch.flashing ? (flashColor || '#ffffcc') : (color || '#ffffff');
      ctx.fill();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const branch of branches) {
        if (!branch.flashing && Math.random() < 0.01) {
          branch.flashing = true;
          branch.flashDuration = 30;
        }
        if (branch.flashing) {
          branch.flashDuration--;
          if (branch.flashDuration <= 0) {
            branch.flashing = false;
          }
        }
        drawCircuit(branch);
      }
      requestAnimationFrame(animate);
    }

    generateCircuit(Math.floor((canvas.width * canvas.height) / 5000));
    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',  // viewport width
        height: '100vh', // viewport height
        zIndex: -1,
        display: 'block' // ensures no extra space around canvas
      }}
    />
  );
}
