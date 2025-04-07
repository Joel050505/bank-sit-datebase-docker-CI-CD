"use client";

import Image from "next/image";
import BankingCTA from "./components/Banking-cta";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-blue-50 h-[600px] w-full flex flex-col md:flex-row items-center justify-around">
        <div className="flex justify-center items-center flex-col gap-4">
          <h1 className="md:text-5xl text-4xl text-slate-800 font-semibold ">
            Welcome to Trust Bank
          </h1>
          <p className="text-xl text-slate-800">The bank you can trust.</p>
          <div className="flex gap-8">
            <Link href="\signup">
              <button className="text-xl w-36 md:text-2xl bg-blue-700 text-white md:w-42 rounded-md p-2 hover:bg-blue-800 duration-150 ease-in-out transition-all cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div>
          <div className="w-[300px] h-[350px] rounded-md flex justify-center items-center">
            <Image
              src="/bankingimg.png"
              alt="bankingimg"
              width={300}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-full p-10 pb-20">
        <h2 className="text-3xl text-center p-6 font-semibold text-slate-800">
          Our Services
        </h2>
        <div className="flex flex-wrap gap-4 place-items-center justify-center">
          <div className="w-56 h-40 border-2 text-slate-800 border-gray-200 rounded-xl shadow-xs bg-white flex gap-2 justify-evenly flex-col items-center p-4 hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer">
            <span className="rounded-full w-14 h-14 bg-blue-100 flex items-center justify-center text-xl">
              💰
            </span>
            <p className="text-xl font-semibold text-slate-800">Accounts</p>
            <p className="text-md">Checking & Savings</p>
          </div>
          <div className="w-56 h-40 border-2 text-slate-800  border-gray-200 rounded-xl shadow-xs bg-white flex gap-2 justify-evenly flex-col items-center p-4 hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer">
            <span className="rounded-full w-14 h-14 bg-blue-100 flex items-center justify-center text-xl">
              🏠
            </span>
            <p className="text-xl font-semibold text-slate-800">Mortages</p>
            <p className="text-md">Home loans</p>
          </div>
          <div className="w-56 h-40 border-2 text-slate-800 border-gray-200 rounded-xl shadow-xs bg-white flex gap-2 justify-evenly flex-col items-center p-4 hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer">
            <span className="rounded-full w-14 h-14 bg-blue-100 flex items-center justify-center text-xl">
              📈
            </span>
            <p className="text-xl font-semibold text-slate-800">Investments</p>
            <p className="text-md">Grow your wealth</p>
          </div>
        </div>
      </div>
      <BankingCTA />
    </div>
  );
}
