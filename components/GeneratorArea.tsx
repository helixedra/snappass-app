import React from "react";
import Image from "next/image";
import Toaster from "./Toaster";

//drag and drop -> TEST
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";

//react-sortablejs -> TEST
import { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

export default function GeneratorArea({ password }: { password: string }) {
  const [message, setMessage] = React.useState<boolean>(false);

  console.log("Password: ", password); ////

  const splitTokens = password
    .replace(/,/g, "")
    .split(/(\d+|[^\w\s]|(?=[A-Z]))/g)
    .filter(Boolean);
  console.log("Split Tokens: ", splitTokens); ////

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

      <div
        key={password}
        className={`flex flex-col items-center justify-center ${
          password ? `motion-preset-pop` : `hidden`
        }`}
      >
        <div
          className={`text-3xl p-4 border-2 border-zinc-500/50 rounded-lg text-center bg-zinc-900/50 text-white mt-4 break-words max-w-full whitespace-normal break-all`}
          dangerouslySetInnerHTML={{ __html: decoratedPassword }}
        ></div>
        <DraggableElements elements={splitTokens} />
        <BasicFunction array={splitTokens} />
        <button
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
        </button>
      </div>
    </>
  );
}
//drag and drop -> TEST
const DraggableElements = ({ elements = [] }: { elements?: string[] }) => {
  const [items, setItems] = React.useState(elements);

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    setItems((array) => arrayMove(array, oldIndex, newIndex));
  };

  return (
    <SortableList
      onSortEnd={onSortEnd}
      className="list flex gap-1 flex-wrap mt-4"
      draggedItemClassName="dragged"
    >
      {items &&
        items.map((item, index) => (
          <SortableItem key={item + index}>
            <div className="item w-fit select-none text-lg font-bold flex items-center justify-center py-2 px-0.5 border border-transparent hover:border hover:border-zinc-700 rounded-lg bg-zinc-800/50 text-white">
              {item}
            </div>
          </SortableItem>
        ))}
    </SortableList>
  );
};

interface BasicFunctionProps {
  array: string[];
}

export const BasicFunction: FC<BasicFunctionProps> = ({ array }) => {
  const [state, setState] = useState(
    array.map((item, index) => ({ id: index, name: item }))
  );

  return (
    <ReactSortable list={state} setList={setState} className="flex gap-1 my-6">
      {state.map((item) => (
        <div
          key={item.id}
          className="select-none text-2xl py-2 px-0.5 rounded-lg hover:cursor-grab bg-zinc-800/50 text-white"
        >
          {item.name}
        </div>
      ))}
    </ReactSortable>
  );
};
