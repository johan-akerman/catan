import { useEffect } from "react";
import { useRef } from "react";

//import Hexagon from "./Hexagon";

export default function Board() {
  let startX = 50;
  let startY = 50;
  let size = 35;
  let rows = [
    { n: 3, offset: 2 * size },
    { n: 4, offset: size },
    { n: 5, offset: 0 },
    { n: 4, offset: size },
    { n: 3, offset: 2 * size },
  ];
  const canvasRef = useRef(null);

  function drawHexagon(ctx, x, y) {
    ctx.beginPath();

    for (let i = 0; i < 6; i++) {
      var angle_deg = 60 * i - 30;
      var angle_rad = (Math.PI / 180) * angle_deg;
      var hexX = x + size * Math.cos(angle_rad);
      var hexY = y + size * Math.sin(angle_rad);

      angle_deg = 60 * (i + 1) - 30;
      angle_rad = (Math.PI / 180) * angle_deg;
      var nextX = x + size * Math.cos(angle_rad);
      var nextY = y + size * Math.sin(angle_rad);
      ctx.moveTo(hexX, hexY);
      ctx.lineTo(nextX, nextY);
    }

    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
  }

  function drawCircles(ctx, x, y, j) {
    let i = 0;
    let max = 6;
    if (j == 2) {
      i = 0;
      max = 6;
    } else if (j > 2) {
      i = 3;
      max = 6;
    } else {
      i = 0;
      max = 3;
    }
    for (i; i < max; i++) {
      var angle_deg = 210 + 60 * i;
      var angle_rad = (Math.PI / 180) * angle_deg;
      var hexX = x + (size + 5) * Math.cos(angle_rad);
      var hexY = y + (size + 5) * Math.sin(angle_rad);
      ctx.moveTo(hexX, hexY);
      ctx.beginPath();
      ctx.arc(hexX, hexY, 8, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.stroke();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let currentX = startX;
    let currentY = startY;
    let i = 0;
    ctx.beginPath();
    ctx.moveTo(currentX, currentY);

    rows.forEach((row) => {
      currentX += row.offset;
      for (let j = 0; j < row.n; j++) {
        drawHexagon(ctx, currentX, currentY);
        currentX += 2 * size;
      }
      currentX = startX;
      currentY += (5 / 3) * size;
    });

    currentX = startX;
    currentY = startY;
    rows.forEach((row) => {
      currentX += row.offset;
      for (let j = 0; j < row.n; j++) {
        drawCircles(ctx, currentX, currentY, i);
        currentX += 2 * size;
      }
      currentX = startX;
      currentY += (5 / 3) * size;
      i++;
    });
  }, []);

  return (
    <div className="flex items-start justify-center h-screen pt-32">
      <canvas
        ref={canvasRef}
        className="bg-gray-100"
        width={384}
        height={384}
      />
    </div>
  );
}
