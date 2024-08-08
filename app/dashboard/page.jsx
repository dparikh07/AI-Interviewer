"use client"

import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Dashboard() {

  const path = usePathname();
  useEffect(()=>{
    console.log(path);
  },[]);

  return (
    <div className='flex p-4 items-center justify-between shadow-md bg-secondary'>
      <Image src={'./logo.svg'} height={100} width={160}></Image>
      <ul className='hidden md:flex gap-6'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-primary font-bold'}`}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/working' && 'text-primary font-bold'}`}>How doest it works?</li>
      </ul>
      <UserButton></UserButton>
    </div>
  )
}

export default Dashboard
