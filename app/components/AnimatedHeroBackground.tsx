"use client";

export default function AnimatedHeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="hero-gradient" />
      <div className="hero-starfield" />
      <div className="hero-constellations">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}
