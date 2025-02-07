import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full bg-background b">
      <SidebarTrigger />
      <h1>Hello,world!</h1>
    </div>
  );
}
