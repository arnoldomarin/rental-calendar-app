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
        <Card className='h-full p-5'>
            <CardHeader className='p-0'>
                <CardTitle className='text-xs'>{kpi.title}</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col p-0'>
                <div className='flex'>
                    <p className='pe-2 font-bold text-2xl'>{kpi.value}</p>
                    <p className='text-xs self-end mb-1'>{kpi.valueComplimentString}</p>
                </div>
                <div className='pt-1 h-full'>
                    {kpi.chartData &&
                        <ResponsiveContainer width={'99%'} height={100} className='mt-2'>
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
                                stroke="#5665f0"
                                activeDot={{
                                    r: 6
                                }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    }
                    {kpi.barData &&
                        <div>
                            <div className='flex flex-col'> 
                                <Progress value={kpi.barData}  />
                                <p className='text-xs mb-1 text-gray-700 opacity-50 self-end mt-1 font-semibold'>{kpi.totalBarData?.toLocaleString('en-US')}</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <div>
                                    <p className='text-xs mb-1 text-df-purple self-end mt-1 font-semibold'>vs. Target</p>
                                    <p className='text-sm mb-1 self-end mt-1 font-semibold'>{kpi.totalBarData?.toLocaleString('en-US')}</p>
                                </div>
                                <div>
                                    <p className='text-xs mb-1 text-df-purple self-end mt-1 font-semibold'>vs. Last Year</p>
                                    <p className='text-sm mb-1 self-end mt-1 font-semibold'>{kpi.totalBarData?.toLocaleString('en-US')}</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default KPICard