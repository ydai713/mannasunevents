"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { nunitoSansLight } from "@/lib/fonts"

const left_items = [
  {
    label: "ABOUT",
    href: "/about",
  },
  {
    label: "SERVICES",
    href: "/service",
  },
  {
    label: "PORTFOLIO",
    href: "/portfolio",
  },
]

const right_items = [
  {
    label: "INFO",
    href: "/approach",
  },
  {
    label: "PRESS",
    href: "/press",
  },
  {
    label: "CONTACT",
    href: "/contact",
  },
]

const MainNav = (className, ...props) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={cn("pt-10 lg:px-10 xl:px-15 2xl:px-30 ", className)} {...props} >

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center">
        {
          left_items.map((item, index) => (
            <div className="w-1/6">
              <Link
                key={index}
                href={item.href}
                className={cn("md:text-xs lg:text-md xl:text-md 2xl:text-lg tracking-5", nunitoSansLight.className)}
              >
                {item.label}
              </Link>
            </div>
          ))
        }
        <div className="w-3/5 h-40 relative">
          <Link href="/" >
            <Image
              src="/assets/logo.png"
              alt="logo"
              fill
              style={{ objectFit: "scale-down" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>

        {
          right_items.map((item, index) => (
            <div className="w-1/6">
              <Link
                key={index}
                href={item.href}
                className={cn("md:text-xs lg:text-md xl:text-md 2xl:text-lg tracking-5", nunitoSansLight.className)}
              >
                {item.label}
              </Link>
            </div>
          ))
        }
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between w-full mx-5 relative">
        <div className="w-64 h-32 relative">
          <Link href="/" >
            <Image
              src="/assets/logo.png"
              alt="logo"
              fill
              style={{ objectFit: "scale-down" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("mr-10 tracking-5", nunitoSansLight.className)}
            >
              MENU
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="p-0">

            <div className="flex flex-col items-center bg-[#f1f6f6]">
              <div className="w-64 h-32 relative">
                <Link href="/" >
                  <Image
                    src="/assets/logo.png"
                    alt="logo"
                    fill
                    style={{ objectFit: "scale-down" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              </div>
              {
                left_items.concat(right_items).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn("text-base tracking-6 py-10", nunitoSansLight.className)}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))
              }
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  );
}

export default MainNav;
