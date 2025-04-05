"use client";
import React from "react";
import { numbers } from "@/data/numbers";
import { wordsPairs } from "@/data/words-pairs";
import { rhymedPairs } from "@/data/rhymes";
import StrengthSelector from "@/components/StrengthSelector";
import GeneratorArea from "@/components/GeneratorArea";

type NumbersArray = {
  [key: number]: string;
};
type WordsPairsArray = {
  [key: string]: string[];
};

export default function PasswordGenerator() {
  const [password, setPassword] = React.useState<string>("");
  const [strength, setStrength] = React.useState<number>(1);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const capitalizeFirstLetterOfEachWord = (string: string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  const getRandomSymbol = () => {
    const symbols = "&+.";
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
  };
  const pairGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const randomNumberString = (numbers as Record<number, string>)[
      randomNumber
    ] as keyof typeof wordsPairs;
    const pair = wordsPairs[randomNumberString];
    const randomIndex = Math.floor(Math.random() * pair.length);
    const randomWord = pair[randomIndex];
    const rhymes = rhymedPairs[randomWord as keyof typeof rhymedPairs];
    const rhymesIndex = Math.floor(Math.random() * rhymes.length);
    const rhymesWord = capitalizeFirstLetterOfEachWord(rhymes[rhymesIndex]);
    return { randomWord, randomNumber, rhymesWord };
  };

  const passwordGenerator = () => {
    const password = () => {
      let password = "";
      for (let i = 0; i < strength; i++) {
        const { randomWord, randomNumber, rhymesWord } = pairGenerator();

        password =
          password +
          randomNumber +
          capitalizeFirstLetter(randomWord) +
          getRandomSymbol() +
          rhymesWord;
      }
      return password;
    };

    return password();
  };

  const handleGeneratePassword = () => {
    const newPassword = passwordGenerator();
    setPassword(newPassword);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <StrengthSelector strength={strength} setStrength={setStrength} />
        <GeneratorArea password={password} />
        <div>
          <button
            className="mt-4 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-800 text-white font-bold text-3xl px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer
          text-shadow-xs text-shadow-orange-800"
            onClick={handleGeneratePassword}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
