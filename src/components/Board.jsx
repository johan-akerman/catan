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

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  var locations = [
    "Dessert",
    "Brick",
    "Brick",
    "Brick",
    "Iron",
    "Iron",
    "Iron",
    "Wheat",
    "Wheat",
    "Wheat",
    "Wheat",
    "Sheep",
    "Sheep",
    "Sheep",
    "Sheep",
    "Wood",
    "Wood",
    "Wood",
    "Wood",
  ];

  shuffleArray(locations);

  var odds = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12, ""]; // should not be "", temporary to handle dessert.
  shuffleArray(odds);

  function getColor(location) {
    switch (location) {
      case "Dessert":
        return "Beige";
      case "Brick":
        return "Orange";
      case "Iron":
        return "Gray";
      case "Wheat":
        return "Yellow";
      case "Sheep":
        return "White";
      case "Wood":
        return "Green";
    }
  }

  const canvasRef = useRef(null);

  function drawHexagon(ctx, x, y) {
    ctx.beginPath();

    for (let i = 0; i < 6; i++) {
      var angle_deg = 60 * i - 30;
      var angle_rad = (Math.PI / 180) * angle_deg;
      angle_deg = 60 * (i + 1) - 30;
      angle_rad = (Math.PI / 180) * angle_deg;
      var nextX = x + size * Math.cos(angle_rad);
      var nextY = y + size * Math.sin(angle_rad);
      ctx.lineTo(nextX, nextY);
    }

    ctx.closePath();
    ctx.fillStyle = getColor(locations.pop());
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
        ctx.beginPath();
        ctx.arc(currentX, currentY, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "beige";
        ctx.fill();
        ctx.font = "14px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.fillText(odds.pop(), currentX, currentY + 5); // if it is the desert it should not have any number.
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
      <canvas ref={canvasRef} width={384} height={384} />
    </div>
  );
}
