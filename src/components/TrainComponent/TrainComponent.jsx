import React, { useRef } from "react";
import Trainicon from "./trainicon";
import "./train.css"

export default function TrainComponent({ startColor, middleColor, endColor }) {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Trainicon containerRef={containerRef} startColor={middleColor} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginTop: "-15vh",
            height: "115vh",
            width: "6px",
            background: `linear-gradient(180deg, ${startColor} 0%, ${middleColor} 40%, ${middleColor} 70%, ${endColor} 120%)`,
          }}
        />
      </div>
      <svg
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          "--size": "60px",
          minWidth: "var(--size)",
          minHeight: "var(--size)",
          maxWidth: "var(--size)",
          maxHeight: "var(--size)",
          transform: "translateY(calc(-50% + 12px))",
          marginTop: "20px",
          marginInline: "auto",
        }}
      >
        <circle
          cx="42"
          cy="42"
          r="40"
          stroke="white"
          fill="white"
          strokeOpacity="0.14"
          fillOpacity="0.08"
          className="animate-pulse-station" 
        />
        <circle cx="42" cy="42" r="8" fill={startColor} />
      </svg>
    </div>
  );
}
