"use client";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { useSearchParams, useRouter } from "next/navigation";
import { BiLogIn } from "react-icons/bi";
import { GiThunderBlade } from "react-icons/gi";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ইউজার যে পেজ থেকে এসেছে সেই পাথ (redirect back logic)
  const redirectPath = searchParams.get("redirect") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    // এখানে আপনার লগইন লজিক থাকবে (Firebase/Auth)
    
    // লগইন সফল হলে আগের পেজে পাঠিয়ে দেবে
    // router.push(redirectPath); 
  };

  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center p-6 font-sans">
      <Card className="bg-[#1e293b]/60 backdrop-blur-xl border border-gray-800 shadow-2xl w-full max-w-md p-8 md:p-12 rounded-[2rem]">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter">
            SIGN <span className="text-[#ff5200]">IN</span>
          </h1>
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mt-2">Welcome Back to SunCart</p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
          {/* Email Field */}
          <TextField isRequired name="email" type="email">
            <Label className="text-gray-400 text-xs uppercase font-bold mb-1 ml-1">Email Address</Label>
            <Input 
              placeholder="name@example.com" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-2xl h-14"
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField isRequired name="password" type="password">
            <div className="flex justify-between items-center mb-1">
              <Label className="text-gray-400 text-xs uppercase font-bold ml-1">Password</Label>
              <span className="text-[#ff5200] text-[10px] uppercase font-bold cursor-pointer hover:underline">Forgot?</span>
            </div>
            <Input 
              placeholder="••••••••" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-2xl h-14"
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Main Login Button */}
          <Button 
            type="submit" 
            className="w-full bg-[#ff5200] hover:bg-[#e64a00] text-white font-black py-7 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-orange-900/20 uppercase tracking-widest mt-4"
          >
            <BiLogIn size={20} />
            Enter Store
          </Button>

          {/* Divider */}
          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-xs uppercase font-bold">OR</span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          {/* Social Login */}
          <Button 
            variant="bordered"
            className="w-full border-gray-700 text-gray-300 font-bold py-6 rounded-2xl hover:bg-gray-800 transition-all uppercase text-xs"
          >
            <GiThunderBlade size={18} />
            Continue with Github
          </Button>
          
          {/* Footer Link */}
          <p className="text-center text-gray-500 text-xs mt-6 uppercase font-bold tracking-wider">
            New here? <span onClick={() => router.push('/signup')} className="text-[#ff5200] cursor-pointer hover:text-white transition-colors">Create Account</span>
          </p>
        </Form>
      </Card>
    </div>
  );
}