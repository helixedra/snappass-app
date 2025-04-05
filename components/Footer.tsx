import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer className="text-white py-4 text-sm mt-12">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Open Source Project. All rights
            reserved.
          </p>

          <p>
            Built with ❤️ by <span className="font-bold">helixedra</span>.
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
          </p>
        </div>
      </footer>
    </div>
  );
}
