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
import { Progress } from "@/components/ui/progress"

interface kpiCardProps {
    kpi: kpiProps;
}
  

const KPICard = ({ kpi } :  kpiCardProps) => {
  return (
    <div className='w-full h-full'>
        <Card className='min-h-48'>
            <CardHeader>
                <CardTitle>{kpi.title}</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col'>
                <div className='flex'>
                    <p className='pe-2 font-bold text-2xl'>{kpi.value}</p>
                    <p className='text-xs'>{kpi.valueComplimentString}</p>
                </div>
                <div className='py-3 h-full'>
                    {kpi.chartData &&
                        <ResponsiveContainer width={'99%'} height={30}>
                            <LineChart
                                data={kpi.chartData}
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
                    }
                    {kpi.barData &&
                        <div> 
                            <Progress value={kpi.barData} />
                        </div>
                    }
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default KPICard