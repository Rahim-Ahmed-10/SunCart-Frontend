"use client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { CheckCheck, RefreshCcw } from "lucide-react";

export default function SignUpPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic here
    const name =e.target.name.value;
    const image=e.target.image.value;
    const email=e.target.email.value;
    const password=e.target.password.value;

    console.log(name, image, email, password)
  };

  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center p-6">
      <Card className="bg-[#1e293b]/60 backdrop-blur-md border border-gray-800 shadow-2xl w-full max-w-lg p-8 md:p-12 rounded-3xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-tight italic uppercase">
            CREATE <span className="text-[#ff5200]">ACCOUNT</span>
          </h1>
          <div className="h-1 w-16 bg-[#ff5200] mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-sm uppercase tracking-widest">Join SunCart Essentials</p>
        </div>

        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          
          {/* Name Field */}
          <TextField isRequired name="name" type="text" className="group">
            <Label className="text-gray-300 font-semibold mb-1 block">Full Name</Label>
            <Input 
              placeholder="Enter your name" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-xl focus:border-[#ff5200] transition-all"
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Image URL Field */}
          <TextField isRequired name="image" type="text">
            <Label className="text-gray-300 font-semibold mb-1 block">Profile Image URL</Label>
            <Input 
              placeholder="https://example.com/photo.jpg" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-xl"
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-300 font-semibold mb-1 block">Email Address</Label>
            <Input 
              placeholder="john@example.com" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-xl"
            />
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Need at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need at least one number";
              return null;
            }}
          >
            <Label className="text-gray-300 font-semibold mb-1 block">Password</Label>
            <Input 
              placeholder="••••••••" 
              className="bg-[#0f172a] border-gray-700 text-white rounded-xl"
            />
            <Description className="text-gray-500 text-[10px] mt-1 leading-tight uppercase tracking-tighter">
              Min 8 chars, 1 Uppercase, 1 Number
            </Description>
            <FieldError className="text-rose-500 text-xs mt-1" />
          </TextField>

          {/* Buttons Section */}
          <div className="flex gap-4 mt-4">
            <Button 
              type="submit" 
              className="flex-1 bg-[#ff5200] hover:bg-[#e64a00] text-white font-bold py-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-900/20 uppercase tracking-wider"
            >
              <CheckCheck size={20} />
              Sign Up
            </Button>
            
            <Button 
              type="reset" 
              variant="flat"
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-6 rounded-xl px-6"
            >
              <RefreshCcw size={18} />
            </Button>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-4">
            Already have an account? <span className="text-[#ff5200] cursor-pointer hover:underline">Login</span>
          </p>
        </Form>
      </Card>
    </div>
  );
}