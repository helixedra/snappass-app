import React from "react";

export default function StrengthSelector({
  strength,
  setStrength,
}: {
  strength: number;
  setStrength: React.Dispatch<React.SetStateAction<number>>;
}) {
  const handleStrengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setStrength(value);
  };

  const classes =
    "cursor-pointer px-4 py-2 bg-zinc-900 rounded-lg text-xl peer-checked:bg-orange-900/50 peer-checked:text-white peer-checked:bg-orange-700/50 transition-all";

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="text-xl text-zinc-500 mb-4">
        Choose your password strength:
      </div>
      <div className="flex justify-center items-center gap-1">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="strength1"
            name="strength"
            value={1}
            checked={strength === 1}
            onChange={handleStrengthChange}
            className="hidden peer"
          />
          <label htmlFor="strength1" className={classes}>
            🤗 Strong
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="strength2"
            name="strength"
            value={2}
            checked={strength === 2}
            onChange={handleStrengthChange}
            className="hidden peer"
          />
          <label htmlFor="strength2" className={classes}>
            🥹 Very Strong
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            id="strength3"
            name="strength"
            value={3}
            checked={strength === 3}
            onChange={handleStrengthChange}
            className="hidden peer"
          />
          <label htmlFor="strength3" className={classes}>
            🤯 Epic!
          </label>
        </div>
      </div>
    </div>
  );
}
