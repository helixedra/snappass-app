'use client'
import React from "react";
import Image from "next/image";

export default function Clipboard({password, setMessage}: {password: string, setMessage: (message: boolean) => void}) {


    const copyToClipboard = (text: string) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            () => {
              setTimeout(() => {
                setMessage(false);
              }, 3000);
              setMessage(true);
            },
            (err) => {
              console.error("Could not copy text: ", err);
            }
          );
        } else {
          // Fallback for unsupported browsers
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.style.position = "fixed"; // Prevent scrolling to bottom of page
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          try {
            document.execCommand("copy");
            setTimeout(() => {
              setMessage(false);
            }, 3000);
            setMessage(true);
          } catch (err) {
            console.error("Could not copy text: ", err);
          }
          document.body.removeChild(textarea);
        }
      };

  return <button
  className="flex items-center cursor-pointer px-4 py-2 rounded-lg text bg-zinc-800/50 text-white mt-4 hover:bg-zinc-700/50 transition duration-300 ease-in-out"
  aria-label="Copy password to clipboard"
  onClick={() => copyToClipboard(password)}
>
  Copy
  <Image
    src="copy.svg"
    alt="Copy icon"
    width={18}
    height={18}
    className="ml-2"
  />
</button>;
}