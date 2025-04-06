import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="text-zinc-400 py-4 text-sm mt-12">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} SnapPass. All rights reserved.
          </p>

          <div className="flex flex-col items-center justify-center mt-2 gap-1">
            <div className="flex items-center justify-center gap-1 text-zinc-200">
              <div>Built with </div>
              <div className="motion-preset-pulse ">❤️</div>
              <div>by</div>
              <div className="flex items-center">
                <a
                  href="https://capps.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-white flex items-center justify-center font-bold"
                >
                  capps.
                </a>
              </div>
            </div>
            {/* <div>
              <a
                href="https://github.com/helixedra/snappass-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center justify-center mt-2"
              >
                <span className="flex items-center w-4 h-4  mr-1">
                  <Image src="github.svg" width={24} height={24} alt="GitHub" />
                </span>
                Contribute on GitHub
              </a>
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
