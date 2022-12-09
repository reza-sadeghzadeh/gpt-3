import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="gp3-container py-6">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center w-2/3">
          <Link href={"/"} className="inline-block min-w-fit">
            <h1 className="text-xl Manropebold pr-16 min-w-fit">GPT-3</h1>
          </Link>
          <nav className="w-4/5 max-lg:hidden flex justify-between items-center text-base px-6">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>What is GPT?</Link>
            <Link href={"/"}>Open AI</Link>
            <Link href={"/"}>Case Studies</Link>
            <Link href={"/"}>Library</Link>
          </nav>
        </div>
        <div className="flex justify-center items-center max-md:hidden">
          <button className="md:px-8 md:py-4 md:text-base py-2 px-6 text-sm min-w-fit mr-4">
            Sign In
          </button>
          <button className="md:px-8 md:py-4 md:text-base py-4 px-6 text-sm min-w-fit bg-brand-darkOrange rounded-lg">
            Sign In
          </button>
        </div>
        <div className="humberger md:ml-12 lg:hidden"></div>
      </div>
    </header>
  );
};

export default Header;
