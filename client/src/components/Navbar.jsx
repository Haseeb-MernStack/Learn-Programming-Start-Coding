import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openSignIn } = useClerk();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-[#404258] shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <Link to="/">
        <h1 className="font-bold text-xl text-[#404258] tracking-widest">Learn Programming</h1>
      </Link>

      <ul className="md:flex hidden items-center gap-10">
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            MernStack
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            Contact
          </a>
        </li>
        <li>
          <a className="hover:text-gray-500/80 transition" href="#">
            About
          </a>
        </li>
      </ul>

      <SignedOut>
        <button
          onClick={openSignIn}
          type="button"
          className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 cursor-pointer active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Login
        </button>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={toggleMenu}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#000"
          viewBox="0 0 30 30"
        >
          <path d="M3 7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2H3zm0 7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2H3zm0 7a1 1 0 0 0 0 2h24a1 1 0 0 0 0-2H3z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col space-y-4 text-lg">
          <li>
            <a href="/" className="text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="/mern-stack" className="text-sm">
              MernStack
            </a>
          </li>
          <li>
            <a href="/contact" className="text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="/about" className="text-sm">
              About
            </a>
          </li>
        </ul>
        <SignedOut>
          <button
            onClick={openSignIn}
            type="button"
            className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Login
          </button>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
