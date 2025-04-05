import React from "react";

export default function Description() {
  return (
    <div className="my-8 text-center">
      <p className="text-xl text-zinc-400">
        Still relying on{" "}
        <span className="text-sm bg-gray-100/20 rounded px-1">pet123</span> or{" "}
        <span className="text-sm bg-gray-100/20 rounded px-1">
          {" "}
          birthday1990
        </span>
        ? <span className="text-xl">😱</span>
      </p>

      <p className="text-xl text-zinc-400">
        Or maybe you're exhausted by those impossible-to-remember{" "}
        <span className="font-mono font-bold">Xk8#qL@9</span> passwords that
        make you reset them every week? <span className="text-xl">😤</span>
      </p>

      <div className="mt-8 flex flex-col items-center text-zinc-400">
        <p className="font-semibold mb-1 text-lg">
          SnapPass creates passwords that are:
        </p>
        <ul className="space-y-1">
          <li className="flex items-start">
            <span className="text-green-500 mr-2 text-xl">✓</span>
            <span>
              <strong>Unbreakable</strong> - packed with numbers, symbols & caps
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 text-xl">✓</span>
            <span>
              <strong>Memorable</strong> - rhythmic patterns that stick in your
              mind
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 text-xl">✓</span>
            <span>
              <strong>Convenient</strong> - no more password resets or sticky
              notes
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-8 max-w-md mx-auto text-center">
        <p className="text-xl font-medium">
          With SnapPass, your password isn't just security -{" "}
          <span className="text-orange-400">it's a tiny masterpiece!</span>{" "}
          <span className="text-xl">🎨</span>
        </p>
        <p>
          Your online safety deserves this upgrade!{" "}
          <span className="text-xl">🚀</span>
        </p>
      </div>
    </div>
  );
}
