import React from "react";

const GameBoard: React.FC = () => {
  return (
    <div className="w-full max-w-sm bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-center text-xl font-bold">Mines Game</h2>
      <div className="grid grid-cols-5 gap-2 mt-4">
        {Array(25)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-gray-600"
            >
              ❓
            </div>
          ))}
      </div>
    </div>
  );
};

export default GameBoard;
import React, { useState } from "react";

const GameBoard: React.FC = () => {
  const [safeBoxes, setSafeBoxes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    if (safeBoxes.includes(index)) return; // Already revealed
    setSafeBoxes([...safeBoxes, index]);
  };

  return (
    <div className="w-full max-w-sm bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-center text-xl font-bold">Mines Game</h2>
      <div className="grid grid-cols-5 gap-2 mt-4">
        {Array(25)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`w-12 h-12 rounded flex items-center justify-center cursor-pointer transition ${
                safeBoxes.includes(index) ? "bg-green-500" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {safeBoxes.includes(index) ? "⭐" : "❓"}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GameBoard;
<div
  key={index}
  onClick={() => handleClick(index)}
  className={`w-12 h-12 rounded flex items-center justify-center cursor-pointer transition ${
    safeBoxes.includes(index) ? "bg-green-500 animate-bounce" : "bg-gray-700 hover:bg-gray-600"
  }`}
>
  {safeBoxes.includes(index) ? "⭐" : "❓"}
</div>
