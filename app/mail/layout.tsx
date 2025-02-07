import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import MailSideBar from "../../components/mail/mail-sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full b">
      {/* <MailSideBar />
      <SidebarTrigger /> */}
      {children}
    </div>
  );
}
