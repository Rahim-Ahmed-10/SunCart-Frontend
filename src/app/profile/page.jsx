"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {  FaEnvelope, FaSignOutAlt,  FaTimes, FaCamera } from "react-icons/fa";
import { EditProfile } from "@/components/EditProfile";


const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const router = useRouter();

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-orange-500"></div>
      </div>
    );
  }

  if (!session) {
    router.push("/signin"); 
    return null;
  }

  const user = session.user;

  const handleSignOut=async () =>{
    await authClient.signOut();
  }

  return (
    <div className="min-h-screen bg-[#020617] py-16 px-6 relative">
      <div className="max-w-3xl mx-auto bg-[#0f172a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Header Gradient */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-400 h-32"></div>
        
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-end -mt-16 mb-6 gap-4">
            <div className="relative group">
              <img 
                src={user?.image || "https://ui-avatars.com/api/?name=" + user?.name} 
                alt="User" 
                className="w-32 h-32 rounded-2xl border-4 border-[#0f172a] shadow-xl object-cover bg-gray-800 transition-transform group-hover:scale-105"
              />
              <button className="absolute bottom-2 right-2 bg-orange-600 p-2 rounded-lg text-white shadow-lg hover:bg-orange-500 transition-all">
                <FaCamera size={12} />
              </button>
            </div>

            <div className="flex gap-3 items-center">
              {/* ✅ Edit Profile Button */}
              <EditProfile />
              <button 
                onClick={handleSignOut}
                className="flex items-center gap-2 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white px-5 py-2.5 rounded-xl font-bold transition-all border border-red-600/20"
              >
                <FaSignOutAlt /> Sign Out
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-black text-white">{user?.name}</h1>
            <p className="text-gray-400 flex items-center gap-2 mt-1">
              <FaEnvelope className="text-orange-500 text-xs" /> {user?.email}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-[10px] uppercase font-black mb-1">User Name</p>
              <p className="text-white font-medium">{user?.name}</p>
            </div>
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
              <p className="text-gray-500 text-[10px] uppercase font-black mb-1">Account Status</p>
              <p className="text-green-500 font-bold flex items-center gap-2">● Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;