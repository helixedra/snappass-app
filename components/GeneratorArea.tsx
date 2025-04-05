import React from "react";
import Image from "next/image";
import Toaster from "./Toaster";

export default function GeneratorArea({ password }: { password: string }) {
  const [message, setMessage] = React.useState<boolean>(false);

  const copyToClipboard = (text: string) => {
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
  };

  const passwordDecorator = (password: string) => {
    return password
      .split(/(\d+|[^\w\s])/g)
      .map((part) => {
        if (/^\d+$/.test(part)) {
          return `<span class="text-yellow-500">${part}</span>`;
        } else if (/^[^\w\s]+$/.test(part)) {
          return `<span class="text-orange-500">${part}</span>`;
        }
        return part;
      })
      .join("");
  };

  const decoratedPassword = passwordDecorator(password);

  return (
    <>
      {message && <Toaster message={"🙌 Password copied to clipboard!"} />}
      {password && (
        <div className="flex flex-col items-center justify-center">
          {/* <div className="text-zinc-500">GeneratorArea</div> */}

          <div
            className="text-3xl p-4 border-2 border-zinc-500/50 rounded-lg text-center bg-zinc-900/50 text-white mt-4 break-words max-w-full whitespace-normal break-all"
            dangerouslySetInnerHTML={{ __html: decoratedPassword }}
          ></div>

          <button
            className="cursor-pointer px-4 py-2 rounded-lg text-xl bg-zinc-800/50 text-white mt-4 hover:bg-zinc-700/50 transition duration-300 ease-in-out"
            onClick={() => copyToClipboard(password)}
          >
            <Image src="copy.svg" alt="Copy icon" width={24} height={24} />
          </button>
        </div>
      )}
    </>
  );
}
