import { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';

const DynamicBackground = () => {
  const ref = useRef(null);

  useEffect(() => {
    // Setup PixiJS Application
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
      resizeTo: window,
    });
    ref.current.appendChild(app.view);

    // Basic Particle Container for performance
    const particles = new PIXI.ParticleContainer(10000, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true,
    });
    app.stage.addChild(particles);

    // Create particles
    const totalParticles = 150;
    const particlesList = [];

    for (let i = 0; i < totalParticles; i++) {
      const particle = PIXI.Sprite.from(PIXI.Texture.WHITE);
      particle.x = Math.random() * app.screen.width;
      particle.y = Math.random() * app.screen.height;
      particle.tint = Math.random() * 0xffffff;
      particle.alpha = 0.7;
      particle.scale.set(0.1 + Math.random() * 0.5);
      particle.speed = 0.5 + Math.random() * 2;

      particles.addChild(particle);
      particlesList.push(particle);
    }

    // Animate particles
    app.ticker.add(() => {
      for (let i = 0; i < particlesList.length; i++) {
        const particle = particlesList[i];
        particle.y += particle.speed;
        if (particle.y > app.screen.height) {
          particle.y = -20;
          particle.x = Math.random() * app.screen.width;
        }
      }
    });

    return () => {
      // Cleanup
      app.destroy(true, true);
    };
  }, []);

  return <div ref={ref} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default DynamicBackground;
