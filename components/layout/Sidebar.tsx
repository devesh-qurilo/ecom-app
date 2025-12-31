"use client";

import {
  Sidebar as UISidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function Sidebar() {
  return (
    <UISidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Link href="/">Home</Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/products">Products</Link>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Link href="/cart">Cart</Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </UISidebar>
  );
}
