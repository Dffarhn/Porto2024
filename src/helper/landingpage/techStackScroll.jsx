import * as React from "react";
import "@/styles/techStackScroll.css";

export function TechStackScroll({ items }) {
  return (
    <div className="tech-stack-container">
      <div className="tech-stack-scroll">
        <div className="tech-stack-track">
          {/* First set */}
          {items.map((item, index) => (
            <div key={`first-${index}`} className="tech-item">
              <div className="tech-icon-wrapper">
                <img
                  src={item.image}
                  alt={item.nama}
                  className="tech-icon"
                />
              </div>
              <span className="tech-name">{item.nama}</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <div key={`second-${index}`} className="tech-item">
              <div className="tech-icon-wrapper">
                <img
                  src={item.image}
                  alt={item.nama}
                  className="tech-icon"
                />
              </div>
              <span className="tech-name">{item.nama}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

