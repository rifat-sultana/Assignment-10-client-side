"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {

  const router = useRouter();

  useEffect(() => {

    localStorage.clear();

    router.push("/");

  }, [router]);

  return (
    <div className="min-h-screen flex justify-center items-center">

      <span className="loading loading-spinner loading-lg"></span>

    </div>
  );
}