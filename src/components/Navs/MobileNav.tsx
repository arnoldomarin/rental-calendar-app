'use client';

import React from 'react';
import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Image from 'next/image';
import dfLogo from "../../assets/DrivingForceFleetSolutionsLogo.svg";
  
const MobileNav = () => {
  return (
    <div className='flex flex-wrap justify-between mt-1 align-middle'>
      <Image
        src={dfLogo} 
        alt="My SVG"
        width={95}
        height={95}
        className='ms-1'
      />
      <Sheet>
        <SheetTrigger className='me-5'><Menu size={18}/></SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>This is the mobile menu</SheetTitle>
            <SheetDescription>
                Should add accordions with all the options
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav