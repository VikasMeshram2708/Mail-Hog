import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full">
      <h2>Login Page</h2>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button type="submit">Sign in with Google</Button>
      </form>
    </div>
  );
}
