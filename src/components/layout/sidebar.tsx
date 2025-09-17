"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  ChevronDown,
  FileIcon,
  GridIcon,
  ListIcon,
  TableIcon,
  UserCircleIcon,
} from "lucide-react";

interface INavItem {
  name: string;
  icon?: ReactNode;
  path?: string;
  children?: INavItem[];
}

const navItems: INavItem[] = [
  {
    icon: <GridIcon size={16} />,
    name: "Dashboard",
    children: [{ name: "Ecommerce", path: "/" }],
  },
  { icon: <CalendarIcon size={16} />, name: "Calendar", path: "/calendar" },
  {
    icon: <UserCircleIcon size={16} />,
    name: "User Profile",
    path: "/profile",
  },
  {
    icon: <ListIcon size={16} />,
    name: "Forms",
    children: [{ name: "Form Elements", path: "/form-elements" }],
  },
  {
    icon: <TableIcon size={16} />,
    name: "Tables",
    children: [{ name: "Basic Tables", path: "/basic-tables" }],
  },
  {
    icon: <FileIcon size={16} />,
    name: "Pages",
    children: [
      { name: "Blank Page", path: "/blank" },
      { name: "404 Error", path: "/error-404" },
    ],
  },
];

export default function Sidebar() {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const isMini = !isExpanded && !isMobileOpen && !isHovered;
  return (
    <div
      className={cn(
        "fixed h-screen top-0 left-0 lg:mt-0 z-50 px-5",
        "bg-sidebar text-sidebar-foreground border-r-1 border-sidebar",
        "transition-all duration-300 ease-in-out",
        { "w-sidebar": !isMini },
        { "w-minisidebar": isMini },
        { "translate-x-0": isMobileOpen },
        { "-translate-x-full": !isMobileOpen},
        "lg:translate-x-0"
      )}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("py-8")}>
        <h1 className={cn("text-3xl font-bold mb-4", { hidden: isMini })}>
          <Link href="/" className="no-underline w-full">
            Logo
          </Link>
        </h1>
        <section className="flex flex-col overflow-y-auto duration-300 ease-in-out no-scrollbar">
          <h2
            className={cn("mb-4 text-xs uppercase font-semibold", {
              hidden: isMini,
            })}
          >
            Menu
          </h2>
          <MenuItems items={navItems} isMini={isMini} />
        </section>
      </div>
    </div>
  );
}

function MenuItems({
  items,
  isChild = false,
  isMini = false,
}: {
  items: INavItem[];
  isChild?: boolean;
  isMini?: boolean;
}) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <ul
      className={cn("list-none flex flex-col gap-1", { "mt-2 ml-4": isChild })}
    >
      {items.map((item, i) => (
        <li key={i}>
          {item.children ? (
            <SubMenuItem item={item} isMini={isMini} />
          ) : (
            <MenuItem item={item} isMini={isMini} />
          )}
        </li>
      ))}
    </ul>
  );
}

function MenuItem({ item, isMini }: { item: INavItem; isMini: boolean }) {
  const pathname = usePathname();
  if (!item.path) return null;
  const isActive = item.path === pathname;
  return (
    <Link
      href={item.path}
      className={cn(
        "text-sm no-underline text-sidebar-foreground font-medium",
        "w-full flex gap-2 px-3 py-2",
        {
          "bg-sidebar-accent text-sidebar-accent-foreground font-semibold":
            isActive,
        }
      )}
    >
      {item.icon && item.icon}
      <span className={cn({ hidden: isMini })}>{item.name}</span>
    </Link>
  );
}

function SubMenuItem({ item, isMini }: { item: INavItem; isMini: boolean }) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
      <Button
        variant="ghost"
        className={cn(
          "text-sm no-underline text-sidebar-foreground font-medium",
          "w-full px-3 py-2",
          { "bg-sidebar-accent text-sidebar-accent-foreground": isActive }
        )}
        onClick={() => setIsActive((p) => !p)}
      >
        {item.icon && item.icon}
        <span className={cn({ hidden: isMini })}>{item.name}</span>
        <ChevronDown
          className={cn("ml-auto transition-transform duration-300", {
            "rotate-180": isActive,
            hidden: isMini,
          })}
        />
      </Button>
      {item.children && isActive && (
        <MenuItems items={item.children} isChild isMini={isMini} />
      )}
    </>
  );
}
