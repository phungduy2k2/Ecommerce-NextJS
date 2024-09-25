'use client'

import { GlobalContext } from "@/context";
import { useContext } from "react";



export default function Home() {

  const {isAuthUser} = useContext(GlobalContext)

  console.log(isAuthUser);
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>E commerce Website</h1>
      </main>
      
    </div>
  );
}
