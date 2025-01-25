import React from "react";

function SectionTop({ x, y, w, h, size }) {
  return (
    <div
      className="w-full h-full bg-slate-600 opacity-70 absolute"
      style={{
        left: `${size * x}%`,
        top: `${size * y}%`,

        width: `${size * w}%`,
        height: `${size * h}%`,
      }}
    >
      1
    </div>
  );
}

export default SectionTop;
