"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DesktopFilters from "./DesktopFilters";

export default function MobileFilterDrawer() {
  return (
    <div className="md:hidden mb-4">
      <Sheet>
        <SheetTrigger className="border px-4 py-2 rounded w-full">
          Filters
        </SheetTrigger>
        <SheetContent side="left">
          <DesktopFilters />
        </SheetContent>
      </Sheet>
    </div>
  );
}
