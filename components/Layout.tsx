import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
  children: JSX.Element;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-base-200 transition duration-300">
        <div className="container mx-auto py-8 min-h-screen min-h-[calc(100vh-64px-68px)]">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
