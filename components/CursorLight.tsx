
import React from 'react';

interface CursorLightProps {
  position: { x: number; y: number };
}

const CursorLight: React.FC<CursorLightProps> = ({ position }) => {
  const { x, y } = position;

  const styles: React.CSSProperties = {
    background: `radial-gradient(600px at ${x}px ${y}px, rgba(249, 115, 22, 0.15), transparent 80%)`,
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={styles}
    ></div>
  );
};

export default CursorLight;