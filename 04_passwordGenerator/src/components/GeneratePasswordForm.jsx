import React, { useState, useCallback, useEffect, useRef } from "react";

const GeneratePasswordForm = () => {
  const [length, setLength] = useState(8);
  const [containNumbers, setContainNumbers] = useState(false);
  const [containCharacters, setContainCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (containNumbers) string += "1234567890";
    if (containCharacters) string += "!@#$%^&*()_+";

    for (let i = 0; i < length; ++i) {
      password += string[Math.floor(Math.random() * string.length)];
    }

    setPassword(password);
  }, [length, containNumbers, containCharacters, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, containNumbers, containCharacters, passwordGenerator]);

  return (
    <div className="w-[1000px] flex-col justify-center items-center bg-gray-600 rounded-md p-7">
      <h1 className="flex-grow text-center text-gray-900 text-2xl justify-center mb-5">
        Password Generator
      </h1>
      <div className="w-full h-10 flex">
        <input
          className="flex flex-grow pl-5"
          value={password}
          placeholder="password"
          ref={passwordRef}
          readOnly
        />
        <button
          className="w-[100px] bg-blue-400 rounded-r-sm"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex gap-3">
        <input
          type="range"
          min={4}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
        <input
          type="checkbox"
          defaultChecked={containNumbers}
          onChange={() => {
            setContainNumbers((prev) => !prev);
          }}
        />
        <label>Contains Symbols</label>{" "}
        <input
          type="checkbox"
          defaultChecked={containCharacters}
          onChange={() => {
            setContainNumbers((prev) => !prev);
          }}
        />
        <label>Contains Character</label>
      </div>
    </div>
  );
};

export default GeneratePasswordForm;
