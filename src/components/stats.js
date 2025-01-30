import React, { useEffect, useRef } from 'react';
import '../styles/stats.css';

function Stats() {
  const statsSectionRef = useRef(null);
  const countUpRefs = useRef([]);

  useEffect(() => {
    const animateCountUp = (el, start, end, duration) => {
      let startTime = null;

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        el.innerHTML = `${Math.floor(progress * (end - start) + start)}<span>+</span>`;
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            countUpRefs.current.forEach((ref) => {
              const endValue = parseInt(ref.getAttribute('data-end'), 10);
              animateCountUp(ref, 0, endValue, 2000);
            });
          } else {
            entry.target.classList.remove('visible'); // Remove to reset animation when out of view
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.stat-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="stats-section" ref={statsSectionRef}>
      <div className="stat-card">
        <div className="stat-header">
          <h3>EXPERIENCE</h3>
        </div>
        <div className="stat-number">
          <h1 ref={(el) => (countUpRefs.current[0] = el)} data-end="100">0k<span>+</span>
          </h1>
          <p>Hours of consultation</p>
        </div>
        <p className="stat-description">
          Using our extensive experience in IT, we provide in-depth consultation on every IT Tech Solution in Nigeria and Africa.
        </p>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <h3>EXPERTISE</h3>
        </div>
        <div className="stat-number">
          <h1 ref={(el) => (countUpRefs.current[1] = el)} data-end="25">0<span>+</span>
          </h1>
          <p>Clients satisfied</p>
        </div>
        <p className="stat-description">
          We’ve put smiles on over 25 clients’ faces through exceptional tech services. Our clients' satisfaction is our pride.
        </p>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <h3>TRUST</h3>
        </div>
        <div className="stat-number">
          <h1 ref={(el) => (countUpRefs.current[2] = el)} data-end="30">0<span>+</span>
          </h1>
          <p>Solutions delivered</p>
        </div>
        <p className="stat-description">
          We’ve brought over 30 game-changing tech solutions to life, turning business challenges into success stories.
        </p>
      </div>
    </div>
  );
}

export default Stats;
