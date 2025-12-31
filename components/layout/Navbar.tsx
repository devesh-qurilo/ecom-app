"use client";

import Link from "next/link";
import { ShoppingCart, User, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavbarCategoryBar from "./NavbarCategoryBar";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      {/* TOP BAR */}
      <div className="bg-blue-600 text-white shadow-md">
        <div className="max-w-[1600px] mx-auto px-10 h-16 flex items-center gap-6">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            ECOM
          </Link>

          {/* SEARCH */}
          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search for products, brands and more"
              className="pl-9 bg-white text-black placeholder:text-gray-400
                focus-visible:ring-2 focus-visible:ring-yellow-400"
            />
          </div>

          {/* LOGIN */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                className="bg-white text-blue-600 font-semibold
                  hover:bg-yellow-400 hover:text-black transition"
              >
                <User className="w-4 h-4 mr-1" />
                Login
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register">Register</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* MORE */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 font-medium hover:text-yellow-300 transition">
                More <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Customer Care</DropdownMenuItem>
              <DropdownMenuItem>Advertise</DropdownMenuItem>
              <DropdownMenuItem>Download App</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CART */}
          <Link
            href="/cart"
            className="flex items-center gap-1 font-semibold hover:text-yellow-300 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Cart
          </Link>
        </div>
      </div>

      {/* CATEGORY BAR (API DRIVEN) */}
      {/* <NavbarCategoryBar /> */}
    </header>
  );
}
