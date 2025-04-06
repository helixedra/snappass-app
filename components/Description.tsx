import React from "react";
import Carousel from "./Carousel";

export default function Description() {
  const features = [
    {
      icon: "💪",
      title: "Unbreakable",
      text: "Packed with numbers, symbols & caps",
    },
    {
      icon: "🧠",
      title: "Memorable",
      text: "Rhythmic patterns that stick in your mind",
    },
    {
      icon: "🪽",
      title: "Convenient",
      text: "No more password resets or sticky notes",
    },
  ];

  return (
    <div className="my-8 text-center motion-preset-fade">
      <p className=" text-zinc-400 max-w-3xl">
        Still relying on{" "}
        <span className="text-sm bg-gray-100/10 rounded px-1">pet123</span> or{" "}
        <span className="text-sm bg-gray-100/10 rounded px-1">
          {" "}
          birthday1990
        </span>
        ? 😱 Or maybe you're exhausted by those impossible-to-remember{" "}
        <span className="text-sm bg-gray-100/10 rounded px-1">
          Xk8#qL@9
        </span>{" "}
        passwords that make you reset them every week? 😤
      </p>

      <div className="mt-8 flex flex-col items-center text-zinc-400">
        <p className="font-semibold mb-1">
          SnapPass creates passwords that are:
        </p>
        <ul className="flex gap-4 justify-center m-4 ">
          <Carousel>
            {features.map((feature, index) => (
              <li key={index} className="embla__slide">
                <div className="embla__slide__number flex items-center flex-col text-center bg-zinc-600/10 py-8 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <span className="flex items-center justify-center bg-zinc-500/20 w-10 h-10 rounded-full mr-2 text-xl">
                    {feature.icon}
                  </span>
                  <span>
                    <div className="text-lg font-bold mt-4">
                      {feature.title}
                    </div>
                    <div className="leading-5 text-zinc-500 mt-1 text-sm max-w-[12rem] min-w-[8rem]">
                      {feature.text}
                    </div>
                  </span>
                </div>
              </li>
            ))}
          </Carousel>
        </ul>
      </div>

      <div className="mt-8 max-w-md mx-auto text-center">
        <p className="text-xl p-2 font-medium">
          With SnapPass, your password isn't just security,{" "}
          <span className="text-orange-300">it's a tiny masterpiece!</span> 🎨
        </p>
      </div>
    </div>
  );
}
