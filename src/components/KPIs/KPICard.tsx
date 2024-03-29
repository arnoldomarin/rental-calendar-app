'use client'

import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { kpiProps } from '@/types';

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Progress } from "@/components/ui/progress";

interface kpiCardProps {
    kpi: kpiProps;
}
  
  

const KPICard = ({ kpi } :  kpiCardProps) => {
  return (
    <div className='w-full h-full'>
        <Card className='h-full p-5'>
            <CardHeader className='p-0'>
                <CardTitle className='flex flex-row justify-between align-middle items-center'>
                    <div className='flex flex-col'>
                        <div className='text-sm font-medium'>
                            {kpi.title}
                        </div>
                    </div>
                        {!kpi.chartData && !kpi.barData &&
                            <span>{kpi.icon}</span>
                        }
                        {kpi.chartData &&
                            <ResponsiveContainer width={'35%'} height={13.5} className='mt-2'>
                                <LineChart
                                    data={kpi.chartData}
                                    margin={{
                                    top: 4,
                                    right: 7,
                                    left: 7,
                                    bottom: 0,
                                    }}
                                >
                                    <Line
                                    type="monotone"
                                    strokeWidth={2}
                                    dataKey="rentals"
                                    stroke="#5665f0"
                                    activeDot={{
                                        r: 0.5
                                    }}
                                    />
                                    <Tooltip />
                                </LineChart>
                                {/* <AreaChart
                                    width={500}
                                    height={400}
                                    data={kpi.chartData}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                    >
                                    <Tooltip />
                                    <Area type="monotone" dataKey="rentals" stroke="#5665f0" fill="#5665f0" />
                                    </AreaChart> */}
                            </ResponsiveContainer>
                        }
                </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col p-0'>
                <p className='pe-2 font-bold text-2xl mt-2'>{kpi.value}</p>
                <div className='h-full'>
                    {kpi.barData &&
                        <div>
                            <div className='flex flex-col'> 
                                <Progress value={kpi.barData}  />
                                <p className='text-xs mb-1 text-gray-700 opacity-50 self-end mt-1 font-semibold'>{kpi.totalBarData?.toLocaleString('en-US')}</p>
                            </div>
                            {/* <div className='flex justify-between mt-5'>
                                <div>
                                    <p className='text-xs mb-1 text-df-purple self-end mt-1 font-semibold'>{kpi.footerTitleOne}</p>
                                    <p className='text-sm mb-1 self-end mt-1 font-semibold'>{kpi.footerNumOne?.toLocaleString('en-US')}</p>
                                </div>
                                <div>
                                    <p className='text-xs mb-1 text-df-purple self-end mt-1 font-semibold'>{kpi.footerTitleTwo}</p>
                                    <p className='text-sm mb-1 self-end mt-1 font-semibold'>{kpi.footerNumTwo?.toLocaleString('en-US')}</p>
                                </div>
                            </div> */}
                            <div className='flex flex-row mt-8 justify-between'>
                                <div className='flex'>
                                    <p className='text-xs self-end font-semibold my-0'>{kpi.footerNumOne?.toLocaleString('en-US')}</p>
                                    <p className='text-xs text-gray-700 opacity-50 self-end font-medium ms-1 mt-0'>{kpi.footerTitleOne}</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-xs self-end font-semibold my-0'>{kpi.footerNumTwo?.toLocaleString('en-US')}</p>
                                    <p className='text-xs text-gray-700 opacity-50 self-end font-medium ms-1 my-0'>{kpi.footerTitleTwo}</p>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='flex'>
                        <p className='text-xs text-gray-500 self-end font-normal my-0'>
                            {
                                kpi.footerNumOne && kpi.footerNumOne > 0 ? 
                                '+' + kpi.footerNumOne?.toLocaleString('en-US') + kpi.footerTitleOne
                                : 
                                kpi.footerNumOne && kpi.footerNumOne < 0 ? '-' + kpi.footerNumOne?.toLocaleString('en-US') + kpi.footerTitleOne
                                :
                                ''
                            }
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default KPICard