"use client";
import Link from "next/link";
import { useContext, useState, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <header className="flex justify-between items-center border-t-2 shadow-md border-gray-200 p-6">
      {/* Logo */}
      <Link href="/">
        <button className="text-xl bg-blue-700 w-44 text-white px-4 py-2 rounded-md hover:bg-blue-800 duration-150 cursor-pointer">
          TRUST BANK
        </button>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10">
        <Link className="text-xl text-gray-800" href="#">
          Personal
        </Link>
        <Link className="text-xl text-gray-800" href="#">
          Business
        </Link>
        <Link className="text-xl text-gray-800" href="#">
          Investing
        </Link>
        <Link className="text-xl text-gray-800" href="#">
          Support
        </Link>
      </nav>

      {/* Desktop Login Button */}
      <Link href="/login">
        <button className="hidden md:block text-2xl border-2 w-44 border-blue-700 bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white duration-150 cursor-pointer">
          Login
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <GiHamburgerMenu
        onClick={() => setOpen(!open)}
        className="flex md:hidden cursor-pointer"
        size={30}
      />

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white flex flex-col items-center gap-6 p-6 shadow-lg"
          onClick={handleClickOutside}
        >
          <Link className="text-xl text-gray-800" href="#">
            Personal
          </Link>
          <Link className="text-xl text-gray-800" href="#">
            Business
          </Link>
          <Link className="text-xl text-gray-800" href="#">
            Investing
          </Link>
          <Link className="text-xl text-gray-800" href="#">
            Support
          </Link>
          <Link href="/login" onClick={() => setOpen(false)}>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 w-56 cursor-pointer">
              Login
            </button>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-red-500 text-lg font-semibold mt-4 cursor-pointer"
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
}
