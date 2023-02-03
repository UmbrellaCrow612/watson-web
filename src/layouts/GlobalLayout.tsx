import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen-lg mx-auto px-6 lg:px-0">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
