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

import { Input } from "@/components/ui/input"

// import { useState, useEffect } from 'react';
// import io from 'socket.io-client';
// import axios, { AxiosResponse } from 'axios';

// import { BellRing, Check } from "lucide-react"

// import { Button } from "@/components/ui/button"
import {
  Card,
  // CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LinkCard from "./Cards/LinkCard"

const rentalGeneralLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Rental Agreements",
    href: "/Rentals/RentalAgreements",
    description:
      "This is the description for the Rental Agreements. Here we would describe what is in the dashboard.",
  },
  {
    title: "Rental Calendar",
    href: "/Rentals/RentalCalendar",
    description:
      "This is the description for the Rental Calendar. Here we would describe what is in the dashboard.",
  },
  {
    title: "Rental Customer Profile",
    href: "/Rentals/RentalCustomerProfile",
    description: "This is the description for the Rental Customer Profile. Here we would describe what is in the dashboard.",
  },
  {
    title: "Rental Reservations",
    href: "/Rentals/RentalReservations",
    description: "This is the description for the Rental Reservations. Here we would describe what is in the dashboard.",
  },
  {
    title: "Rental Rates",
    href: "/Rentals/RentalRates",
    description: "This is the description for the Rental Rates. Here we would describe what is in the dashboard.",
  },
]

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const dfBusinessCategs: { title: string; href: string; description: string }[] = [
  {
    title: "Assets",
    href: "/Assets",
    description:
      "In this category you can find all the dashboards related to Assets in the Driving Force Group.",
  },
  {
    title: "Rentals",
    href: "/Rentals",
    description:
    "In this category you can find all the dashboards related to Rentals in the Driving Force Group.",
  },
  {
    title: "Sales & Leasing",
    href: "/Sales&Leasing",
    description: "In this category you can find all the dashboards related to Sales & Leasing in the Driving Force Group.",
  },
  {
    title: "Management",
    href: "/Management",
    description: "In this category you can find all the dashboards related to Management in the Driving Force Group.",
  },
]

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
        <NavigationMenu className="w-full main-navbar">
        <NavigationMenuList className="flex justify-between w-full">
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
                  <div className="flex">
                    <div>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                  <div className="flex">
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
                        {components.map((component) => (
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
                        {components.map((component) => (
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
                        {components.map((component) => (
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
                <div className="flex">
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
                      {components.map((component) => (
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
                      {components.map((component) => (
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
                      {components.map((component) => (
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
              <NavigationMenuTrigger>Leasing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-4 md:w-[500px] lg:w-[600px]">
                  <p className="text-sm leading-tight text-muted-foreground">
                    This is a desciption of the rental group of dasboards. Here 
                    we should include a nice general description of the types of
                    dashboards that the user can find here
                  </p>
                </div>
                <div className="flex">
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
                      Lease Contracts
                    </p>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
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
                User Profile
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

