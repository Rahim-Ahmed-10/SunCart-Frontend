"use client";

import SignInFrom from "@/components/SignInFrom";
import { Suspense } from "react";


export default function SignInPage() {
   

  return (
    <div>
      <Suspense fallback={<p className="text-center text-gray-500 mt-10">Loading...</p>}>
        <SignInFrom />
      </Suspense>
    </div>
  );
}