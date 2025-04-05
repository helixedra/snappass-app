import React from "react";

export default function AppHeader() {
  return (
    <div className="AppHeader flex flex-col items-center justify-center gap-2">
      <div className="AppHeading flex text-4xl items-center justify-center">
        <div className="AppLogo">🫰</div>
        <div className="AppTitle text-5xl font-semibold">SnapPass</div>
      </div>
      <div className="AppDescription text-lg text-zinc-400">
        Your{" "}
        <span className="font-semibold text-amber-100/90">
          easy and memorable password{" "}
        </span>
        generator
      </div>
    </div>
  );
}
