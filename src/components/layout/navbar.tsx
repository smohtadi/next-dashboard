import React, { useEffect, useRef } from "react";
import {
  BellIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeDropdown from "@/components/layout/theme-dropdown";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { toggleMobileSidebar, toggleSidebar, isMobile } = useSidebar();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClickToggleSidebar = () => {
    if (isMobile) {
      toggleMobileSidebar();
    } else {
      toggleSidebar();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 w-full z-50 text-sm lg:px-6",
        "flex items-center",
        "bg-navbar text-navbar-foreground border-1 border-navbar h-navbar"
      )}
    >
      <div className={cn("flex justify-between items-center", "h-10 w-full")}>
        <h1 className="sr-only">Brand</h1>
        <Button
          aria-label="Toggle Sidebar"
          className="p-0 text-center h-full aspect-square"
          variant="ghost"
          onClick={handleClickToggleSidebar}
        >
          <MenuIcon size={24} />
        </Button>
        <form className="hidden lg:flex lg:w-[26rem] h-full">
          <Input
            ref={inputRef}
            className="w-full h-full rounded-r-none"
            placeholder="Search or type command"
            type="text"
          />
          <Button
            className="p-0 px-6 h-full rounded-l-none"
            variant="secondary"
          >
            <SearchIcon />
          </Button>
        </form>
        <div className="lg:flex gap-4 h-full">
          <ThemeDropdown />
          <Button
            className="rounded-full p-0 h-full aspect-square"
            type="button"
            variant="ghost"
          >
            <BellIcon />
          </Button>
          <Button
            className="rounded-full p-0 h-full aspect-square"
            type="button"
            variant="ghost"
          >
            <UserIcon />
          </Button>
        </div>
      </div>
    </header>
  );
}
