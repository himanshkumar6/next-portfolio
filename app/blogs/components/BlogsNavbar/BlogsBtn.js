"use client"

import { useAuth } from "@/app/lib/Context";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const BlogsBtn = () => {
  const { user,
    isLoading,
    error,
    handleSignInwithGoogle,
    handleLogout } = useAuth()

  if (isLoading) {
    return <h1 className=" px-4 py-2 rounded-full md:text-xl font-bold text-sm text-black border-cyan-400 border items-center gap-1 bg-gradient-to-r from-green-400 to-orange-400 hover:border-amber-400 cursor-pointer flex">Loading...</h1>
  }
  if (user) {
    return (
      <div className="flex flex-row justify-center items-center gap-4 lg:text-lg py-2 px-3 rounded-full font-extrabold text-green-400">
        <Link href='/blogs/admin'>
          <h1 className="">{user.displayName}</h1>
        </Link>
        <button onClick={() => {
          handleLogout()
        }} className=" px-4 py-2 rounded-full md:text-xl font-bold text-sm text-white border-cyan-400 border items-center gap-1 hover:border-pink-400 cursor-pointer flex bg-red-600">

          <h1 className="text-white">Logout</h1>
        </button>
      </div>
    )
  }


  return (
    <button onClick={() => {
      handleSignInwithGoogle()
    }} className=" px-4 py-2 rounded-full md:text-xl font-bold text-sm text-black border-cyan-400 border items-center gap-1 bg-gradient-to-r from-green-400 to-orange-400 hover:border-amber-400 cursor-pointer flex">
      <div><FcGoogle size={30} /></div>
      Login with Google
    </button>
  )
}

export default BlogsBtn
