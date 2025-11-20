
import React, { useEffect, useRef, useState } from 'react';

interface TechBackgroundProps {
  colors?: string[];
  forceActive?: boolean;
  interactive?: boolean;
  interactionStrength?: number;
  speed?: number;
  variant?: 'default' | 'central-orb'; // New variant prop
}

const TechBackground: React.FC<TechBackgroundProps> = ({ 
    colors, 
    forceActive = false, 
    interactive = false,
    interactionStrength = 0.15,
    speed = 1,
    variant = 'default'
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

    const ctx = canvas.getContext('2d', { alpha: true }); // Alpha true for transparency
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

    // For central orb, we need more density in the middle
    const BLOB_COUNT = variant === 'central-orb' ? 15 : 12; 
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
            // In 'central-orb' mode, spawn closer to center
            if (variant === 'central-orb') {
                this.originX = width / 2 + (Math.random() - 0.5) * 200;
                this.originY = height / 2 + (Math.random() - 0.5) * 200;
                this.baseRadius = Math.random() * 150 + 100; // Slightly smaller, tighter
            } else {
                this.originX = Math.random() * width;
                this.originY = Math.random() * height;
                this.baseRadius = Math.random() * 250 + 180; 
            }

            this.x = this.originX;
            this.y = this.originY;
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
            
            if (variant === 'central-orb') {
                // TETHERED PHYSICS: Pull towards center
                const centerX = width / 2;
                const centerY = height / 2;
                
                // Natural oscillation
                const noiseX = Math.sin(this.angleX + t) * 200; // Restricted range
                const noiseY = Math.cos(this.angleY + t) * 200;
                
                // Gravity pull to center
                const pullStrength = 0.02;
                this.x += (centerX + noiseX - this.x) * pullStrength;
                this.y += (centerY + noiseY - this.y) * pullStrength;

            } else {
                // DEFAULT PHYSICS: Wander
                const rangeX = width * 0.6;
                const rangeY = height * 0.6;
                const noiseX = Math.sin(this.angleX + t) * Math.cos(this.angleY * 0.5 + t) + Math.sin(this.angleX * 2 + t) * 0.3;
                const noiseY = Math.cos(this.angleX * 0.8 - t) * Math.sin(this.angleY + t) + Math.cos(this.angleY * 1.5 - t) * 0.3;
                
                this.x = this.originX + noiseX * rangeX * this.frequency;
                this.y = this.originY + noiseY * rangeY * this.frequency;

                // Wrap around
                if(this.x < -400) this.x = width + 400;
                if(this.x > width + 400) this.x = -400;
                if(this.y < -400) this.y = height + 400;
                if(this.y > height + 400) this.y = -400;
            }

            this.angleX += this.speedX * speed;
            this.angleY += this.speedY * speed;

            if (interactive) {
                // Mouse interaction logic
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const interactRadius = 600;

                if (dist < interactRadius) {
                    const force = (interactRadius - dist) / interactRadius;
                    // Turbulence/Swirl
                    this.x += Math.sin(dist * 0.03 - t) * interactionStrength * force * 20;
                    this.y += Math.cos(dist * 0.03 - t) * interactionStrength * force * 20;
                }
            }

            this.radius = this.baseRadius + Math.sin(time * this.pulseSpeed * speed + this.pulsePhase) * 40;
        }

        draw() {
            const { r, g, b } = this.rgb;
            ctx.beginPath();
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

        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
        
        time += 0.5 * speed;

        // Background Handling
        if (variant === 'central-orb') {
            // Clear canvas to let text behind it show through
            ctx.clearRect(0, 0, width, height);
            // Use hard-light blend mode to recreate the requested 'artifact' / purple donut effect on transparent bg
            ctx.globalCompositeOperation = 'hard-light';
        } else {
            // Default: Fill with dark background
            ctx.fillStyle = '#0a0a14'; 
            ctx.fillRect(0, 0, width, height);
            // Use hard-light for oil-in-water effect on opaque bg
            ctx.globalCompositeOperation = 'hard-light';
        }

        ctx.filter = 'blur(40px)';
        
        blobs.forEach(blob => {
            blob.update();
            blob.draw();
        });

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
  }, [activeColors, isVisible, forceActive, interactive, speed, interactionStrength, variant]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default TechBackground;
