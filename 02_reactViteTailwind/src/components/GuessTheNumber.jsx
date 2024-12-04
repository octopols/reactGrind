import { useState } from "react";
import Card from "./Card";

function GuessTheNumber() {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleGuess = () => {
    const guess = Number(userGuess);
    if (isNaN(guess)) {
      setFeedback("Please enter a valid number.");
      return;
    }

    if (guess < targetNumber) {
      setFeedback("Too low! Try again.");
    } else if (guess > targetNumber) {
      setFeedback("Too high! Try again.");
    } else {
      setFeedback("🎉 Correct! You guessed the number!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="flex flex-col gap-4 max-w-[60vw]">
        <Card name="Harsh" />
        <Card name="Bhaskar" />
      </div>
      <h1 className="text-4xl font-bold mb-6">Guess the Number</h1>
      <div className="flex flex-col items-center gap-4">
        <input
          type="number"
          value={userGuess}
          onChange={handleInputChange}
          placeholder="Enter your guess"
          className="w-60 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white text-center"
        />
        <button
          onClick={handleGuess}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold"
        >
          Guess
        </button>
        {feedback && (
          <p
            className={`mt-4 text-lg font-medium ${
              feedback.includes("Correct")
                ? "text-green-500"
                : feedback.includes("valid")
                ? "text-red-500"
                : "text-yellow-400"
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
}

export default GuessTheNumber;
