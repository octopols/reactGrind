import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap gap-3 shadow-lg bg-gray-900 px-3 py-2 rounded-2xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="px-4 py-1 rounded-full text-gray-100"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="px-4 py-1 rounded-full text-gray-100"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="px-4 py-1 rounded-full text-gray-100"
            style={{ backgroundColor: "green" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
