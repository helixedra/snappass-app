import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-white py-4 text-sm">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Open Source Project. All rights
            reserved.
          </p>

          <p>
            <a
              href="https://github.com/helixedra/snappass-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Contribute on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
