import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
          <p>
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </a>
          </p>
          <p>
            <a
              href="https://github.com/your-username/snappass-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              View this project on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
