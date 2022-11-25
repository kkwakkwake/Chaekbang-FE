import React from "react";
import Header from "./Header/Header";
import BottomNav from "./BottomNav/BottomNav";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <BottomNav />
    </>
  );
};

export default AppLayout;
