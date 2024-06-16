import Navbar from "@/components/Navbar";
import { AuxiliarContextProvider } from "@/contexts/store";
import React from "react";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuxiliarContextProvider>
      <Navbar />
      {children}
    </AuxiliarContextProvider>
  );
}

export default DefaultLayout;
