"use client";
import { ReactNode } from "react";
import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  return (
    <div>
      <Sidebar />
      {/* <Backdrop /> */}
      <div
        className={cn(
          "duration-300 transition-all ease-in-out",
          { "ml-0": isMobileOpen },
          {
            "lg:ml-(--width-sidebar)":
              !isMobileOpen && (isExpanded || isHovered),
          },
          {
            "lg:ml-(--width-mini-sidebar)":
              !isMobileOpen && !isExpanded && !isHovered,
          }
        )}
      >
        <Navbar />
        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
