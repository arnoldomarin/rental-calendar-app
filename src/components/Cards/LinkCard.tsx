'use client';

import React from 'react';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { linkCardProps } from '@/types';

interface kpiCardProps {
    linkCard: linkCardProps;
}
  
const LinkCard = ({ linkCard } :  kpiCardProps) => {
  return (
    <Link key={linkCard.title} href={linkCard.href}>
        <Card className={cn("w-[280px] gradient-background")} >
        <CardHeader>
            <CardTitle>{linkCard.title}</CardTitle>
            <CardDescription>{linkCard.description}</CardDescription>
        </CardHeader>
        </Card>
    </Link>
  )
}

export default LinkCard