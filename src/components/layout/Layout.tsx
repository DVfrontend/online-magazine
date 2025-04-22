import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import type { LayoutProps } from "@/types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto">
        <div className="mt-5">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
