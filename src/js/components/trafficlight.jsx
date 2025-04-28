import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const colors = ["red", "green", "yellow"];
  const [color, setColor] = useState("red");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(prevColor => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 2000); // ==> 2 seconds

    // retornar aqui.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="traffic-light-container">
      {colors.map(c => (
        <div
          key={c}
          className={`light ${c} ${color === c ? "glow" : ""}`}
          onClick={() => setColor(c)}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;