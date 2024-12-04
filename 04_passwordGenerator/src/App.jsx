import { useState } from "react";
import PasswordGenerator from "./components/GeneratePasswordForm";
import GeneratePasswordForm from "./components/GeneratePasswordForm";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col justify-center items-center">
      <GeneratePasswordForm />
    </div>
  );
}

export default App;
