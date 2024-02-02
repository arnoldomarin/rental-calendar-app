'use client';

import React from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from "next/link"
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"
import { buttonVariants } from '../ui/button';

interface NavProps {
  isCollapsed: boolean
  links: {
    title: string
    label?: string
    icon?: React.ReactElement
    variant: "default" | "ghost",
    url: string
  }[],
  supportLinks: {
    title: string
    label?: string
    icon?: React.ReactElement
    variant: "default" | "ghost",
    url: string
  }[]
}
  
const VerticalNavbar = ({ links, isCollapsed, supportLinks }: NavProps) => {
  return (
    <div>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 border border-t-0"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <TooltipProvider key={index}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.url}
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <span>{link.icon}</span>
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
              </TooltipProvider>
            ) : (
              <Link
                key={index}
                href={link.url}
                className={cn(
                  buttonVariants({ variant: link.variant, size: "sm" }),
                  link.variant === "default" &&
                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start"
                )}
              >
                <span className='me-2'>{link.icon}</span>
                {link.title}
                {link.label && (
                  <span
                      className={cn(
                        "ml-auto",
                        link.variant === "default" &&
                        "text-background dark:text-white"
                      )}               >
                    {link.label}
                  </span>
                )}
              </Link>
            )
          )}
        </nav>
      </div>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 border border-t-0 rounded-b-lg"
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {supportLinks.map((link, index) =>
            isCollapsed ? (
              <TooltipProvider key={index}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.url}
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" &&
                        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <span>{link.icon}</span>
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
              </TooltipProvider>
            ) : (
              <Link
                key={index}
                href={link.url}
                className={cn(
                  buttonVariants({ variant: link.variant, size: "sm" }),
                  link.variant === "default" &&
                    "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start"
                )}
              >
                <span className='me-2'>{link.icon}</span>
                {link.title}
                {link.label && (
                  <span
                      className={cn(
                        "ml-auto",
                        link.variant === "default" &&
                        "text-background dark:text-white"
                      )}               >
                    {link.label}
                  </span>
                )}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  )
}

export default VerticalNavbar