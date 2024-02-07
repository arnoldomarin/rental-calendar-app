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
  managementCulturePeopleLinks,
  adminLinks,
  adminSupportLinks
} from "@/types";
import Link from 'next/link';

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
        <SheetContent className='overflow-scroll'>
          <SheetHeader>
          <SheetTitle>This is the mobile menu</SheetTitle>
          <SheetDescription className='flex flex-wrap justify-between w-full min-h-full'>
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-black">Assets</AccordionTrigger>
                <AccordionContent>
                  {assetsGeneralLinks.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                    >
                      <span>{component.title}</span>
                    </Link>
                  ))}
                  {/* Nested Accordion */}
                  <Accordion type="multiple" className='sub-accordions'>
                    <AccordionItem value="nested-item-1">
                      <AccordionTrigger className="text-black text-xs">Assets Inventory</AccordionTrigger>
                      <AccordionContent>
                        {assetsInventoryLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-2">
                      <AccordionTrigger className="text-black text-xs">Assets Transfer</AccordionTrigger>
                      <AccordionContent>
                        {assetsTransferLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-black">Rental</AccordionTrigger>
                <AccordionContent>
                  {rentalGeneralLinks.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                    >
                      <span>{component.title}</span>
                    </Link>
                  ))}
                  {/* Nested Accordion */}
                  <Accordion type="multiple" className='sub-accordions'>
                    <AccordionItem value="nested-item-1">
                      <AccordionTrigger className="text-black text-xs">Rental Utilization</AccordionTrigger>
                      <AccordionContent>
                        {rentalUtilizationLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-2">
                      <AccordionTrigger className="text-black text-xs">Rental Invoices</AccordionTrigger>
                      <AccordionContent>
                        {rentalInvoicesLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-3">
                      <AccordionTrigger className="text-black text-xs">Rental Revenue</AccordionTrigger>
                      <AccordionContent>
                        {rentalRevenueLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-black">Sales & Leasing</AccordionTrigger>
                <AccordionContent>
                  {salesLeasingGeneralLinks.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                    >
                      <span>{component.title}</span>
                    </Link>
                  ))}
                  {/* Nested Accordion */}
                  <Accordion type="multiple" className='sub-accordions'>
                    <AccordionItem value="nested-item-1">
                      <AccordionTrigger className="text-black text-xs">Lease Contracts</AccordionTrigger>
                      <AccordionContent>
                        {leaseContractsLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-2">
                      <AccordionTrigger className="text-black text-xs">Commissions</AccordionTrigger>
                      <AccordionContent>
                        {salesCommissionsLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-3">
                      <AccordionTrigger className="text-black text-xs">Sales Revenue</AccordionTrigger>
                      <AccordionContent>
                        {salesRevenueLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-black">Management</AccordionTrigger>
                <AccordionContent>
                  {managementGeneralLinks.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                    >
                      <span>{component.title}</span>
                    </Link>
                  ))}
                  {/* Nested Accordion */}
                  <Accordion type="multiple" className='sub-accordions'>
                    <AccordionItem value="nested-item-1">
                      <AccordionTrigger className="text-black text-xs">Culture & People</AccordionTrigger>
                      <AccordionContent>
                        {managementCulturePeopleLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-2">
                      <AccordionTrigger className="text-black text-xs">Accounting</AccordionTrigger>
                      <AccordionContent>
                        {managementAccountingLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-3">
                      <AccordionTrigger className="text-black text-xs">Rentals</AccordionTrigger>
                      <AccordionContent>
                        {managementRentalsLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="nested-item-4">
                      <AccordionTrigger className="text-black text-xs">Payroll</AccordionTrigger>
                      <AccordionContent>
                        {managementPayrollLinks.map((component) => (
                          <Link
                            key={component.title}
                            href={component.href}
                            className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                          >
                            <span>{component.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className='w-full'>
              {adminSupportLinks.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                >
                  <span>{component.title}</span>
                </Link>
              ))}
              <Accordion type="multiple" className='sub-accordions'>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-black text-xs">Admin</AccordionTrigger>
                  <AccordionContent>
                    {adminLinks.map((component) => (
                      <Link
                        key={component.title}
                        href={component.href}
                        className="flex flex-wrap justify-startdark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white text-xs my-2"
                      >
                        <span>{component.title}</span>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav