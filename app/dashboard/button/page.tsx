"use client";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <Button>default</Button>
      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"link"}>link</Button>
      <Button variant={"outline"}>outline</Button>
      <Button disabled>disable</Button>
      <Button variant={"success"} onClick={() => alert("clicked")}>
        Click
      </Button>
      <Button capitalize>default</Button>
      <Button>
        <Mail /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
