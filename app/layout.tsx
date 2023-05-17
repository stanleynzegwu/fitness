import "./globals.css";
import { Navbar, Footer } from "./components";
import { ReactNode } from "react";

export const metadata = {
  title: "Fitness & Wellness",
  description:
    "An exercise app where users can search for different body parts and discover targeted exercises.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-screen-2xl m-auto min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
