import React from "react";
import Toaster from "./Toaster";
import Clipboard from "./Clipboard";
import { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

export default function GeneratorArea({ password }: { password: string }) {
  const [message, setMessage] = React.useState<boolean>(false);

  const splitTokens = password
    .replace(/,/g, "")
    .split(/(\d+|[^\w\s]|(?=[A-Z]))/g)
    .filter(Boolean);

  const passwordDecorator = (part: string) => {
    if (/^\d+$/.test(part)) {
      return `<span class="text-yellow-500">${part}</span>`;
    } else if (/^[^\w\s]+$/.test(part)) {
      return `<span class="text-orange-500">${part}</span>`;
    }
    return part;
  };

  return (
    <>
      {message && <Toaster message={"🙌 Password copied to clipboard!"} />}
      <div
        key={password}
        className={`flex flex-col items-center justify-center ${
          password ? `motion-preset-pop` : `hidden`
        }`}
      >
    <BasicFunction array={splitTokens} setMessage={setMessage} decorator={passwordDecorator} />
      </div>
    </>
  );
}

interface BasicFunctionProps {
  array: string[];
  setMessage: (message: boolean) => void;
  decorator: (part: string) => string;
}

export const BasicFunction: FC<BasicFunctionProps> = ({ array, setMessage, decorator }) => {
  if (!array) return null;
  
  const [state, setState] = useState(array.map((item, index) => ({ 
    id: index, 
    clean: item, 
    decorated: decorator(item)
  })));

  return (<>
    <div className={`text-3xl p-4 border-2 border-zinc-500/50 rounded-lg text-center bg-zinc-900/50 text-white mt-4 break-words max-w-full whitespace-normal break-all`}>
        <ReactSortable list={state} setList={setState} className="flex gap-1">
      {state.map((item) => (
        <div
          key={item.id}
          className="select-none text-2xl py-2 px-0.5 rounded-lg hover:bg-zinc-700/50 hover:cursor-grab bg-zinc-800/50 text-white"
          dangerouslySetInnerHTML={{ __html: item.decorated }}>
        </div>
      ))}
    </ReactSortable>
    </div>
    <Clipboard password={state.map(item => item.clean).join("")} setMessage={setMessage} />
  </>);
};
