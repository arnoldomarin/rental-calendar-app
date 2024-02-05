"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Input } from "@/components/ui/input";
import Image from 'next/image';
import dfLogo from "../assets/DrivingForceFleetSolutionsLogo.svg";

// import { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import axios, { AxiosResponse } from 'axios';

// import { BellRing, Check } from "lucide-react"

// import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

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
} from "@/types"


// interface WeatherData {
//   name: string;
//   main: {
//     temp: number;
//   };
//   weather: {
//     description: string;
//   }[];
// }

// interface ExchangeRate {
//   rates: Record<string, number>;
//   base: string;
//   date: string;
// }

const Navbar = () => {

  // const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null);

  // useEffect(() => {
  //   const socket = io('http://localhost:3001'); // Replace with your Socket.IO server endpoint

  //   // Listen for real-time updates from the server
  //   socket.on('updateExchangeRate', (newExchangeRate: ExchangeRate) => {
  //     setExchangeRate(newExchangeRate);
  //   });

  //   // Fetch initial exchange rate data
  //   const fetchExchangeRate = async () => {
  //     try {
  //       const response: AxiosResponse<ExchangeRate> = await axios.get(
  //         'https://open.er-api.com/v6/latest'
  //       );
    
  //       const initialExchangeRate: ExchangeRate = response.data;
  //       setExchangeRate(initialExchangeRate);
  //       socket.emit('initialExchangeRate', initialExchangeRate); // Emit the initial data to the server
  //     } catch (error: any) {
  //       if (axios.isAxiosError(error) && error.response) {
  //         // Handle Axios errors with a response (e.g., status code is available)
  //         console.error('Error fetching exchange rate data:', error.response.data);
  //       } else {
  //         // Handle other types of errors
  //         console.error('Error fetching exchange rate data:', error.message);
  //       }
  //     }
  //   };

  //   fetchExchangeRate(); // Fetch initial data

  //   // Cleanup function to disconnect the socket when the component is unmounted
  //   socket.disconnect();
  // }, []); // Empty dependency array to run the effect only once on mount

  // if (!exchangeRate) {
  //   return <div>Loading...</div>;
  // }


    return (
        <NavigationMenu className="w-full main-navbar border border-l-0 rounded-tr-lg rounded-br-lg flex items-center">
          <Image
            src={dfLogo} 
            alt="My SVG"
            width={95}
            height={95}
          />
          <NavigationMenuList className="flex justify-between w-full align-middle ms-2">
            <div className="flex flex-row">
            <NavigationMenuItem>
                <NavigationMenuTrigger>Business Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 flex justify-between gap-10 align-middle">
                      <p className="text-sm leading-tight text-muted-foreground md:w-[500px]">
                        These are all the business categories for Driving Force. Here you can access
                        all the main pages for assets, rentals, Sales & leasing, and management.
                      </p>
                    </div>
                    <div className="menu-content">
                      <div>
                        {/* <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {dfBusinessCategs.map((linkCard) => (
                            // <ListItem
                            //   key={component.title}
                            //   title={component.title}
                            //   href={component.href}
                            // >
                            //   {component.description}
                            // </ListItem>
                            <LinkCard linkCard={linkCard}/>
                          ))}
                        </ul> */}
                        <ul className="grid gap-3 p-6 md:w-[600px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-4">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                {/* <Icons.logo className="h-6 w-6" /> */}
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Driving Force
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  This is a description for all the different business categories in The Driving Force Group.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          {dfBusinessCategs.map((linkCard) => (
                            <ListItem
                              key={linkCard.title}
                              title={linkCard.title}
                              href={linkCard.href}
                            >
                              {linkCard.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Assets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 flex justify-between gap-10 align-middle">
                    <p className="text-sm leading-tight text-muted-foreground md:w-[500px]">
                      This is a desciption of the rental group of dasboards. Here 
                      we should include a nice general description of the types of
                      dashboards that the user can find here
                    </p>
                    <Input type="Dashboard" placeholder="Search for a dashboard..." className="md:w-[300px]"/>
                  </div>
                  <div className="flex w-100 menu-content">
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        General
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {assetsGeneralLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Assets Transfers
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {assetsTransferLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex w-100 menu-content">
                    <div className="w-100">
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Assets Inventory
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-full">
                        {assetsInventoryLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Rental</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 flex justify-between gap-10 align-middle">
                    <p className="text-sm leading-tight text-muted-foreground md:w-[500px]">
                      This is a desciption of the rental group of dasboards. Here 
                      we should include a nice general description of the types of
                      dashboards that the user can find here
                    </p>
                    <Input type="Dashboard" placeholder="Search for a dashboard..." className="md:w-[300px]"/>
                  </div>
                  <div className="flex w-100 menu-content">
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        General
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {rentalGeneralLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Rental Utilization
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {rentalUtilizationLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Rental Invoices
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {rentalInvoicesLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Rental Revenue
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {rentalRevenueLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sales & Leasing</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 md:w-[500px] lg:w-[600px]">
                    <p className="text-sm leading-tight text-muted-foreground">
                      This is a desciption of the rental group of dasboards. Here 
                      we should include a nice general description of the types of
                      dashboards that the user can find here
                    </p>
                  </div>
                  <div className="flex w-100 menu-content">
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        General
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {salesLeasingGeneralLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Lease Contracts
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {leaseContractsLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex w-100 menu-content">
                  <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Commissions
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {salesCommissionsLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Sales Revenue
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {salesRevenueLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Management</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 md:w-[500px] lg:w-[600px]">
                    <p className="text-sm leading-tight text-muted-foreground">
                      This is a desciption of the rental group of dasboards. Here 
                      we should include a nice general description of the types of
                      dashboards that the user can find here
                    </p>
                  </div>
                  <div className="flex menu-content">
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        General
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {managementGeneralLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Culture & People
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {managementCulturePeopleLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex menu-content">
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Accounting
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {managementAccountingLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Rentals
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {managementRentalsLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex menu-content">
                    <div>
                      <p className="px-4 pt-4 pb-0 text-sm leading-tight text-muted-foreground">
                        Payroll
                      </p>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {managementPayrollLinks.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
            <NavigationMenuItem>
              <Link href="/UserProfile" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Avatar className="user-avatar border-2 transition-colors hover:border-df-blue hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>User Profile</AvatarFallback>
                  </Avatar>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    //   <div>
    //   <h1>Real-Time Exchange Rate</h1>
    //   <p>Base Currency: {exchangeRate.base}</p>
    //   <p>Date: {exchangeRate.date}</p>
    //   <ul>
    //     {Object.entries(exchangeRate.rates).map(([currency, rate]) => (
    //       <li key={currency}>
    //         {currency}: {rate}
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    )
  }

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar

