import React from "react";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Archive, File, Inbox, LogOut, Send, Trash } from "lucide-react";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button, buttonVariants } from "../ui/button";
import googleImg from "@/public/logos/image.png";
import Image from "next/image";

export default function MailSideBar() {}

export function AuthenticatedSidebar() {
  const sidebarData = [
    {
      title: "Inbox",
      icon: <Inbox className="w-4 h-4" />,
    },
    {
      title: "Sent",
      icon: <Send className="w-4 h-4" />,
    },
    {
      title: "Drafts",
      icon: <File className="w-4 h-4" />,
    },
    {
      title: "Archive",
      icon: <Archive className="w-4 h-4" />,
    },
    {
      title: "Trash",
      icon: <Trash className="w-4 h-4" />,
    },
  ];
  return (
    <Sidebar className="">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <ul className="grid gap-3 mt-10">
              {sidebarData.map((item, idx) => (
                <li key={idx} className="text-sm text-black font-medium">
                  <Link href="#" className="flex items-center gap-4 px-3 py-2">
                    <span className="">{item.icon}</span>
                    <span className="">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarFooter>
        <LogoutLink className={buttonVariants({ variant: "destructive" })}>
          <LogOut />
          Logout
        </LogoutLink>
      </SidebarFooter>
    </Sidebar>
  );
}

export function NotAuthenticatedSidebar() {
  return (
    <Sidebar className="">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex h-screen items-center justify-center">
            <Button variant={"link"} asChild className="shadow">
              <LoginLink>
                <Image
                  src={googleImg}
                  width={24}
                  height={24}
                  priority
                  alt="google 0auth authentication seamless"
                />
                Sign in with google
              </LoginLink>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </Sidebar>
  );
}
