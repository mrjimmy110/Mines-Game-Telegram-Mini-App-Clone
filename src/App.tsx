import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      <h1 className="text-white text-3xl font-bold">Mines Game Mini App</h1>
    </div>
  );
};

export default App;
import React from "react";
import GameBoard from "./components/GameBoard";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <GameBoard />
    </div>
  );
};

export default App;
