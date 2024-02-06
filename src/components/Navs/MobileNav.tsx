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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Image from 'next/image';
import dfLogo from "../../assets/DrivingForceFleetSolutionsLogo.svg";

import { 
  rentalGeneralLinks, 
  rentalUtilizationLinks,
  rentalInvoicesLinks,
  rentalRevenueLinks,
  components,
  dfBusinessCategs,
  assetsGeneralLinks,
  assetsInventoryLinks,
  assetsTransferLinks,
  salesLeasingGeneralLinks,
  leaseContractsLinks,
  salesCommissionsLinks,
  salesRevenueLinks,
  managementAccountingLinks,
  managementRentalsLinks,
  managementPayrollLinks,
  managementGeneralLinks,
  managementCulturePeopleLinks
} from "@/types";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import link from 'next/link';
import { buttonVariants } from '../ui/button';
  
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
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Assets</AccordionTrigger>
                <AccordionContent>
                  {assetsGeneralLinks.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    >
                      <span>{component.title}</span>
                    </Link>
                  ))}
                  {/* Nested Accordion */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="nested-item-1">
                      <AccordionTrigger>Assets Inventory</AccordionTrigger>
                      <AccordionContent>
                        {assetsInventoryLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-2">
                      <AccordionTrigger>Vehicle Transfer</AccordionTrigger>
                      <AccordionContent>
                        {assetsTransferLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
              {/* Add more AccordionItems as needed */}
            </Accordion>
            </SheetDescription>
            </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav