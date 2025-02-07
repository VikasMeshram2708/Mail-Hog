import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navData = [
    {
      title: "Home",
      href: "/",
    },
    {
        title: "Mail",
        href: "/mail",
      },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <header className="w-full border-b shadow-lg bg-background">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h2 className="text-xl md:text-3xl font-bold">
          <Link href="/">Mail Hog</Link>
        </h2>

        <ul className="hidden lg:flex items-center gap-2">
          {navData.map((item, idx) => (
            <li key={idx} className="px-4 py-2 rounded-xl">
              <Link href={item.href} className="capitalize">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sheet */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="mb-10 text-xl md:text-3xl font-bold">
                <Link href="/">Mail Hog</Link>
              </SheetTitle>
              <SheetDescription asChild>
                <ul className="grid items-center gap-2">
                  {navData.map((item, idx) => (
                    <li key={idx} className="px-4 py-2 rounded-xl">
                      <Link href={item.href} className="capitalize">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
