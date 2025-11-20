
import React, { useEffect, useRef, useState } from 'react';

interface TechBackgroundProps {
  colors?: string[];
  forceActive?: boolean;
  interactive?: boolean;
  interactionStrength?: number;
  speed?: number;
}

const TechBackground: React.FC<TechBackgroundProps> = ({ 
    colors, 
    forceActive = false, 
    interactive = false,
    interactionStrength = 0.15,
    speed = 1 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const DEFAULT_PALETTE = [
    '#16162F', '#242F49', '#FFA586', '#B51A2B', '#541A2E', '#4338ca'
  ];

  const activeColors = colors && colors.length > 0 ? colors : DEFAULT_PALETTE;

  const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let frameId: number;
    let time = Math.random() * 100;
    
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleResize = () => {
        if (!container) return;
        const dpr = window.devicePixelRatio || 1;
        width = container.clientWidth;
        height = container.clientHeight;
        
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        
        ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = e.clientX - rect.left;
        targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
        window.addEventListener('mousemove', handleMouseMove);
    }

    const BLOB_COUNT = 12; 
    const blobs: FluidBlob[] = [];

    class FluidBlob {
        x: number;
        y: number;
        originX: number;
        originY: number;
        radius: number;
        baseRadius: number;
        rgb: { r: number, g: number, b: number };
        
        angleX: number;
        angleY: number;
        speedX: number;
        speedY: number;
        
        frequency: number;
        
        pulseSpeed: number;
        pulsePhase: number;

        constructor() {
            this.originX = Math.random() * width;
            this.originY = Math.random() * height;
            this.x = this.originX;
            this.y = this.originY;
            
            // Slightly larger for the gooey effect to merge well
            this.baseRadius = Math.random() * 250 + 180; 
            this.radius = this.baseRadius;
            
            const hex = activeColors[Math.floor(Math.random() * activeColors.length)];
            this.rgb = hexToRgb(hex);
            
            this.angleX = Math.random() * Math.PI * 2;
            this.angleY = Math.random() * Math.PI * 2;
            
            this.speedX = ((Math.random() * 0.0008) + 0.0003); 
            this.speedY = ((Math.random() * 0.0008) + 0.0003);
            
            this.frequency = Math.random() * 0.8 + 0.4;
            
            this.pulseSpeed = Math.random() * 0.005 + 0.002;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }

        update() {
            const t = time * 0.001 * speed; 
            const rangeX = width * 0.6;
            const rangeY = height * 0.6;

            // Complex movement pattern
            const noiseX = Math.sin(this.angleX + t) * Math.cos(this.angleY * 0.5 + t) + Math.sin(this.angleX * 2 + t) * 0.3;
            const noiseY = Math.cos(this.angleX * 0.8 - t) * Math.sin(this.angleY + t) + Math.cos(this.angleY * 1.5 - t) * 0.3;
            
            this.x = this.originX + noiseX * rangeX * this.frequency;
            this.y = this.originY + noiseY * rangeY * this.frequency;

            // Wrap around logic
            if(this.x < -400) this.x = width + 400;
            if(this.x > width + 400) this.x = -400;
            if(this.y < -400) this.y = height + 400;
            if(this.y > height + 400) this.y = -400;

            this.angleX += this.speedX * speed;
            this.angleY += this.speedY * speed;

            if (interactive) {
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const interactRadius = 600;

                if (dist < interactRadius) {
                    const force = (interactRadius - dist) / interactRadius;
                    // Juggling/Turbulence effect
                    this.x += Math.sin(dist * 0.03 - t) * interactionStrength * force * 20;
                    this.y += Math.cos(dist * 0.03 - t) * interactionStrength * force * 20;
                }
            }

            this.radius = this.baseRadius + Math.sin(time * this.pulseSpeed * speed + this.pulsePhase) * 40;
        }

        draw() {
            const { r, g, b } = this.rgb;
            ctx.beginPath();
            // Simpler gradient for metaball effect - higher opacity
            const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
            
            grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 1)`);
            grad.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.8)`);
            grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`); 

            ctx.fillStyle = grad;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    handleResize();
    for(let i=0; i<BLOB_COUNT; i++) {
        blobs.push(new FluidBlob());
    }

    const render = () => {
        if (!isVisible && !forceActive) {
             return;
        }

        mouseX += (targetMouseX - mouseX) * 0.05; // Faster mouse tracking for responsiveness
        mouseY += (targetMouseY - mouseY) * 0.05;
        
        time += 0.5 * speed;

        // Clear screen
        ctx.fillStyle = '#0a0a14'; 
        ctx.fillRect(0, 0, width, height);

        // Apply filters for the "Glassy/Melting" Metaball effect
        // Blur mixes the colors, Hard-light sharpens the overlap
        ctx.filter = 'blur(40px)';
        ctx.globalCompositeOperation = 'hard-light';
        
        blobs.forEach(blob => {
            blob.update();
            blob.draw();
        });

        // Reset context
        ctx.filter = 'none';
        ctx.globalCompositeOperation = 'source-over';
        
        frameId = requestAnimationFrame(render);
    };

    if (isVisible || forceActive) {
        render();
    }

    return () => {
        window.removeEventListener('resize', handleResize);
        if (interactive) {
            window.removeEventListener('mousemove', handleMouseMove);
        }
        cancelAnimationFrame(frameId);
    };
  }, [activeColors, isVisible, forceActive, interactive, speed, interactionStrength]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default TechBackground;
