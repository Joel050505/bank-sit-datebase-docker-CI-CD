"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "../context/SessionContext";
import Link from "next/link";
import { BASE_URL } from "@/utils/baseURL";

export default function AccountPage() {
  const { session } = useSession();
  const [account, setAccount] = useState(null);
  const [depositAmount, setDepositAmount] = useState(0);

  async function getAccount() {
    if (!session || !session.token) {
      console.log("No session token found");
      return;
    }

    try {
      const response = await fetch(`http://${BASE_URL}:4000/me/accounts`, {
        method: "POST", // Use POST to match the backend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: session.token }), // Send token in the request body
      });

      if (!response.ok) {
        console.log("Error fetching account", response.statusText);
        return;
      }

      const data = await response.json();
      setAccount(data);
      console.log("Account data: ", data);
    } catch (error) {
      console.error("Error fetching account:", error);
    }
  }

  async function handleDeposit() {
    if (depositAmount <= 0) {
      console.log("Invalid deposit amount");
      return;
    }

    try {
      const response = await fetch(
        `http://${BASE_URL}:4000/me/accounts/transactions`,
        {
          method: "POST", // Use POST to match the backend
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ depositAmount, token: session.token }), // Send Deposit amount in the request body
        }
      );

      if (!response.ok) {
        console.log("Error fetching account", response.statusText);
        console(typeof depositAmount);

        return;
      }
      const updatedAccount = await response.json(); // Få nytt konto direkt
      setAccount(updatedAccount); // Uppdatera kontot i state
      setDepositAmount(0); // Återställ fältet
      getAccount();
      console.log("Deposit successful:", account.amount);
      // const data = await response.json();
    } catch (error) {
      console.log("Error fetching account:", error);
    }
  }

  useEffect(() => {
    getAccount();
  }, [session]); // Re-fetch account info if session changes

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-10 border rounded-md shadow-md flex flex-col gap-4 ">
        <Link href="/">
          <button className="p-2 rounded-2xl bg-blue-500 w-40 text-white font-semibold">
            Back
          </button>
        </Link>
        <h1 className="text-2xl font-semibold">Welcome to your account!</h1>
        {session ? (
          <div className="font-mono">
            <p>Welcome back, {session.username}!</p>
            {account ? (
              <div className="flex flex-col gap-4">
                <h2>Your Account Details: </h2>
                <p>Balance: {account.Amount}.KR</p>
                {/* You can add additional details or functionality like depositing money */}
                <input
                  value={depositAmount}
                  type="number"
                  className="w-56 p-2 border border-gray-300 rounded-xl"
                  placeholder="Enter amount to deposit..."
                  onChange={(e) => setDepositAmount(Number(e.target.value))}
                />
                <button
                  onClick={handleDeposit}
                  className="w-62 bg-amber-500 p-2 text-white rounded-xl"
                >
                  Click to Deposit money
                </button>
              </div>
            ) : (
              <p>Loading your account...</p>
            )}
          </div>
        ) : (
          <p>Please log in to view your account details.</p>
        )}
      </div>
    </div>
  );
}
