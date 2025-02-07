import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  AuthenticatedSidebar,
  NotAuthenticatedSidebar,
} from "../components/mail/mail-sidebar";
import { AuthProvider } from "./context/auth-provider";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mail Hog",
  description: "Email client web app helps business increase productivity.",
  keywords: ["Email Client Platform"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  if (!(await isAuthenticated())) {
    return (
      <AuthProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <SidebarProvider defaultOpen={defaultOpen}>
              <NotAuthenticatedSidebar />
              <main className="w-full">
                <Navbar />
                {children}
              </main>
            </SidebarProvider>
          </body>
        </html>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SidebarProvider defaultOpen={defaultOpen}>
            <AuthenticatedSidebar />
            <main className="w-full">
              <Navbar />
              {children}
            </main>
          </SidebarProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
