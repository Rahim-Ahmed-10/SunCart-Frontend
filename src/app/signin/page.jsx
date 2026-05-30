"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState, Suspense } from "react"; // Suspense ইম্পোর্ট করুন
import { useSearchParams, useRouter } from "next/navigation";
import { BiLogIn } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

// ১. মূল কোডটিকে একটি আলাদা কম্পোনেন্টে নিয়ে যান
function SignInForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const redirectPath = searchParams.get("redirect") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: redirectPath,
      });

      if (error) {
        alert(error.message || "Invalid credentials!");
      } else {
        alert("Welcome back!");
        router.push(redirectPath);
        router.refresh(); 
      }
    } catch (err) {
      console.error("Login Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <Card className="bg-[#1e293b]/60 backdrop-blur-xl border border-gray-800 shadow-2xl w-full max-w-md p-8 md:p-12 rounded-[2rem]">
      {/* বাকি সব UI কোড এখানে থাকবে */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">
          SIGN <span className="text-[#ff5200]">IN</span>
        </h1>
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mt-2">
          Welcome Back to SunCart
        </p>
      </div>

      <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="email">
          <Label className="text-gray-400 text-xs uppercase font-bold mb-1 ml-1">Email Address</Label>
          <Input placeholder="name@example.com" className="bg-[#0f172a] border-gray-700 text-white rounded-2xl h-14" />
          <FieldError className="text-rose-500 text-xs mt-1" />
        </TextField>

        <TextField isRequired name="password" type="password">
          <div className="flex justify-between items-center mb-1">
            <Label className="text-gray-400 text-xs uppercase font-bold ml-1">Password</Label>
            <span className="text-[#ff5200] text-[10px] uppercase font-bold cursor-pointer hover:underline">Forgot?</span>
          </div>
          <Input placeholder="••••••••" className="bg-[#0f172a] border-gray-700 text-white rounded-2xl h-14" />
          <FieldError className="text-rose-500 text-xs mt-1" />
        </TextField>

        <Button type="submit" isLoading={isLoading} disabled={isLoading} className="w-full bg-[#ff5200] hover:bg-[#e64a00] text-white font-black py-7 rounded-2xl transition-all mt-4 uppercase">
          {!isLoading && <BiLogIn size={20} />} {isLoading ? "Entering..." : "Enter Store"}
        </Button>

        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-800"></div>
          <span className="mx-4 text-gray-600 text-xs uppercase font-bold">OR</span>
          <div className="flex-grow border-t border-gray-800"></div>
        </div>

        <Button variant="bordered" onClick={handleGoogleLogin} className="w-full border-gray-700 text-gray-300 font-bold py-6 rounded-2xl hover:bg-gray-800 uppercase text-xs">
          <FcGoogle size={20} /> Continue with Google
        </Button>
        
        <p className="text-center text-gray-500 text-xs mt-6 uppercase font-bold">
          New here? <span onClick={() => router.push('/signup')} className="text-[#ff5200] cursor-pointer hover:text-white">Create Account</span>
        </p>
      </Form>
    </Card>
  );
}


export default function SignInPage() {
  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center p-6 font-sans">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <SignInForm />
      </Suspense>
    </div>
  );
}