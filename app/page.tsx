import { auth } from "@/auth";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <main className="min-h-screen w-full">
        <h2>No Session Found!</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto">
        <Card className="max-w-lg mx-auto capitalize">
          <CardHeader>
            <CardTitle>{session.user?.name}</CardTitle>
            <CardDescription>
              <Badge>{session.user?.email}</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={session.user?.image ?? ""}
              alt={session?.user?.name ?? "user account name"}
              width={100}
              height={100}
              className="bg-cover rounded-full drop-shadow-lg"
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
