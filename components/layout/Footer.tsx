import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      {/* TOP SECTION */}
      <div className="max-w-[1600px] mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-sm">
        {/* BRAND */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">
            ECOM<span className="text-blue-500">.</span>
          </h3>
          <p className="text-gray-400 leading-relaxed">
            India’s trusted online shopping destination for electronics,
            fashion, home essentials and more.
          </p>
        </div>

        {/* ABOUT */}
        <div>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
            <li>
              <Link href="#">Corporate Info</Link>
            </li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h4 className="text-white font-semibold mb-4">Help</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#">Payments</Link>
            </li>
            <li>
              <Link href="#">Shipping</Link>
            </li>
            <li>
              <Link href="#">Cancellation & Returns</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* POLICY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Policy</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#">Return Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Use</Link>
            </li>
            <li>
              <Link href="#">Privacy</Link>
            </li>
            <li>
              <Link href="#">Security</Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Twitter />
            </Link>
            <Link href="#">
              <Instagram />
            </Link>
            <Link href="#">
              <Youtube />
            </Link>
          </div>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Registered Office</h4>
          <p className="text-gray-400 leading-relaxed">
            ECOM Pvt Ltd
            <br />
            Bengaluru, Karnataka
            <br />
            India – 560103
          </p>
        </div>
      </div>

      {/* MIDDLE BAR */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ECOM Pvt Ltd. All rights reserved.</p>

          <div className="flex gap-6 flex-wrap">
            <span>100% Secure Payments</span>
            <span>Fast Delivery</span>
            <span>Easy Returns</span>
            <span>24x7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
