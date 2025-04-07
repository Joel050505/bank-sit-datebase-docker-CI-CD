import React from "react";
import { ArrowRight, CreditCard, Shield, Headset } from "lucide-react";
import Link from "next/link";

const BankingCTA = () => {
  return (
    <div className="bg-blue-900 text-white py-12 px-4 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to take control of your finances?
            </h2>
            <p className="text-blue-100 mb-6">
              Open an account today and enjoy no monthly fees, higher interest
              rates, and 24/7 access to your money.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/signup" className="flex items-center justify-center">
                <button className="bg-white w-full text-blue-900 px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-50">
                  Open an Account <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-800">
                Learn More
              </button>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-sm">Secure Banking</span>
              </div>
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                <span className="text-sm">No Hidden Fees</span>
              </div>
              <div className="flex items-center">
                <Headset className="h-5 w-5 mr-2" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Limited Time Offer</h3>
            <p className="text-blue-100 mb-4">
              Open a new savings account today and receive:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  ✓
                </span>
                <span>$150 welcome bonus when you deposit $1,000+</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  ✓
                </span>
                <span>4.25% APY for the first 6 months</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                  ✓
                </span>
                <span>Free financial planning consultation</span>
              </li>
            </ul>
            <p className="text-sm text-blue-200">
              Offer valid until April 30, 2025. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingCTA;
