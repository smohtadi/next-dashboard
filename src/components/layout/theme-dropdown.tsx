import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeDropdown() {
  const { setMode } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full p-0 h-full aspect-square"
          type="button"
          variant="ghost"
        >
          <MoonIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setMode("system")}>
          Use device theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("dark")}>
          Dark theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("light")}>
          Light theme
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
