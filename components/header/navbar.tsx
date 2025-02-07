import Link from "next/link";
import React from "react";

export default function Navbar() {
  const navData = [
    {
      title: "Home",
      href: "/",
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
        <ul className="flex items-center gap-4">
          {navData.map((item, idx) => (
            <li key={idx} className="px-4 py-2 rounded-xl">
              <Link href={item.href} className="capitalize">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
