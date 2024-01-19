'use client'

import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { kpiProps } from '@/types';

import { Line, LineChart, ResponsiveContainer } from "recharts"

interface kpiCardProps {
    kpi: kpiProps;
}

const data = [
    {
      revenue: 10400,
      subscription: 240,
    },
    {
      revenue: 14405,
      subscription: 300,
    },
    {
      revenue: 9400,
      subscription: 200,
    },
    {
      revenue: 8200,
      subscription: 278,
    },
    {
      revenue: 7000,
      subscription: 189,
    },
    {
      revenue: 9600,
      subscription: 239,
    },
    {
      revenue: 11244,
      subscription: 278,
    },
    {
      revenue: 26475,
      subscription: 189,
    },
  ]
  
  

const KPICard = ({ kpi } :  kpiCardProps) => {
  return (
    <div>
        <Card>
            <CardHeader>
                <CardTitle>{kpi.title}</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col'>
                <div className='flex'>
                    <p className='pe-2 font-bold text-2xl'>{kpi.value}</p>
                    <p className='text-xs'>{kpi.valueComplimentString}</p>
                </div>
                <div>
                <ResponsiveContainer width={'99%'} height={100}>
                    <LineChart
                        data={data}
                        margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 0,
                        }}
                    >
                        <Line
                        type="monotone"
                        strokeWidth={2}
                        dataKey="revenue"
                        stroke="#8884d8"
                        activeDot={{
                            r: 6
                        }}
                        />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default KPICard