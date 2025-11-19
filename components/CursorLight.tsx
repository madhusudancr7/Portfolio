
import React, { useEffect, useRef } from 'react';

interface CursorLightProps {
  position: { x: number; y: number };
}

const CursorLight: React.FC<CursorLightProps> = ({ position }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    mouseRef.current = position;
  }, [position]);

  useEffect(() => {
    let frameId: number;

    const animate = () => {
      // Slightly smoother, slower lerp for organic fluid feel
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.12;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-50 w-64 h-64 mix-blend-screen animate-blob-morph"
      style={{
        // Fluid Light Effect
        background: 'radial-gradient(circle, rgba(249, 115, 22, 0.25) 0%, rgba(249, 115, 22, 0.05) 40%, rgba(255,255,255,0) 70%)',
        filter: 'blur(20px)',
        willChange: 'transform, border-radius',
      }}
    ></div>
  );
};

export default CursorLight;
