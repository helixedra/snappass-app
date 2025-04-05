import React from "react";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";
import Description from "@/components/Description";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <AppHeader />
      <Description />
      <PasswordGenerator />
      <Footer />
    </main>
  );
}
