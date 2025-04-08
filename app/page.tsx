import React from "react";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import PasswordGenerator from "@/components/PasswordGenerator";
import Description from "@/components/Description";

export const metadata = {
  title: "SnapPass - Password Generator",
  description: "Generate secure and memorable passwords with SnapPass.",
  openGraph: {
    title: "SnapPass - Password Generator",
    description: "Generate secure and memorable passwords with SnapPass.",
    images: [
      {
        url: "https://snappass.capps.fun/images/preview.jpg",
      },
    ],
    url: "https://snappass.capps.fun",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapPass - Password Generator",
    description: "Generate secure and memorable passwords with SnapPass.",
    images: [
      {
        url: "https://snappass.capps.fun/images/preview.jpg",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-4 lg:px-12 lg:py-18 overflow-x-hidden bg-zinc-900 text-white">
      <AppHeader />
      <Description />
      <PasswordGenerator />
      <Footer />
    </main>
  );
}
