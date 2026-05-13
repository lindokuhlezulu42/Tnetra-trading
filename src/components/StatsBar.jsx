import React from 'react';
import './StatsBar.css';

const stats = [
  { number: '10+', label: 'Years in Business' },
  { number: '500+', label: 'Projects Delivered' },
  { number: '200+', label: 'Happy Clients' },
  { number: '100%', label: 'Dedication' },
];

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar__container">
        <div className="stats-bar__grid">
          {stats.map((stat, index) => (
            <div key={stat.label} className="stats-bar__item">
              <p className="stats-bar__number">{stat.number}</p>
              <p className="stats-bar__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}