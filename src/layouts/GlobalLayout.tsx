import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";
import { IBM_Plex_Mono } from "@next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`max-w-screen-lg px-6 mx-auto lg:px-0 ${ibmPlexMono.className}`}
    >
      <a
        className="absolute left-0 p-3 m-3 transition -translate-y-16 bg-primary text-primary-content focus:translate-y-0"
        href="#WACLauncher__Button"
      >
        Skip To Chat Widget
      </a>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
