'use client';

import type { FC, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface IProps {
  children: ReactNode
}

const AnimationProvider: FC<IProps> = ({ children }) => {
  const [showIntro, setShowIntro] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    document.body.classList.add('noScroll');
    const timer = setTimeout(() => {
      setShowIntro(false);
      document.body.classList.remove('noScroll');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showIntro || !canvasRef.current || window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; length: number; speed: number }> = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 5 + 2
      });
    }

    function drawParticles() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
          ctx.beginPath();
          const gradient = ctx.createLinearGradient(
            particle.x,
            particle.y,
            particle.x,
            particle.y + particle.length
          );

          // Изменяем цвета в зависимости от состояния showIntro
          const t = showIntro ? 1 : 0; // t = 1 при intro, t = 0 в конце
          const r = Math.floor(255 * t);
          const g = Math.floor(255 * t);
          const b = Math.floor(255 * t);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.8)`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x, particle.y + particle.length);
          ctx.stroke();

          particle.y += particle.speed;
          if (particle.y > canvas.height) {
            particle.y = -particle.length;
            particle.x = Math.random() * canvas.width;
          }
        });
        requestAnimationFrame(drawParticles);
      }
    }

    drawParticles();

    return () => {
      cancelAnimationFrame(0);
    };
  }, [showIntro]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-red-800 to-neutral-900 relative overflow-hidden'>
      <AnimatePresence mode='wait'>
        {showIntro ? (
          <motion.div
            key='intro'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center min-h-screen'
          >
            <canvas
              ref={canvasRef}
              className='absolute inset-0 pointer-events-none'
            />
            <h1 className='text-4xl md:text-6xl font-bold text-center relative z-10'>
              {'Welcome Back'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className='inline-block shimmer-text'
                  style={{
                    color: index % 3 === 0 ? '#D1D5DB' : (index % 3 === 1 ? '#9CA3AF' : '#FFFFFF')
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <br />
              {'to'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 10) * 0.05 }} // Начинаем задержку позже
                  className='inline-block shimmer-text'
                  style={{
                    color: index % 3 === 0 ? '#D1D5DB' : (index % 3 === 1 ? '#9CA3AF' : '#FFFFFF')
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <br />
              {'Oracle'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 15) * 0.05 }}
                  className='inline-block shimmer-text'
                  style={{
                    color: index % 3 === 0 ? '#D1D5DB' : (index % 3 === 1 ? '#9CA3AF' : '#FFFFFF')
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        ) : (
          <motion.div
            key='content'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='p-8'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimationProvider;
