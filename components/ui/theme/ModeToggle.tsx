"use client";

import * as React from "react";
import { Moon, Shell, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="w-full flex justify-between items-center p-1">
      <div className="flex">
        <Shell size={40} />{" "}
        <span className="text-3xl font-bold"> SoftSell</span>
      </div>
      <a href="#how-it-works" className="font-semibold hover:underline">
        <h2>How it works</h2>
      </a>

      <a href="#why-us" className="font-semibold hover:underline">
        <h2>Why Us</h2>
      </a>
      <a href="#testimonials" className="font-semibold hover:underline">
        <h2>Testimonials</h2>
      </a>
      <a href="#contact-us" className="font-semibold hover:underline">
        <h2>Contact Us</h2>
      </a>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
