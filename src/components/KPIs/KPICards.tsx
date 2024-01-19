import React from 'react';
import KPICard from './KPICard';


const KPICards = () => {
    const kpiCards = [
        {    
            title: 'Starting Rentals',
            value: 26,
            valueComplimentString: 'rentals',
            chartData: [
                {
                    revenue: 50,
                    subscription: 30,
                },
                {
                    revenue: 20,
                    subscription: 30,
                },
                {
                    revenue: 25,
                    subscription: 25,
                },
                {
                    revenue: 40,
                    subscription: 20,
                },
                {
                    revenue: 55,
                    subscription: 32,
                },
                {
                    revenue: 50,
                    subscription: 30,
                },
            ]
        },
        {    
            title: 'Ending Rentals',
            value: 15,
            valueComplimentString: 'rentals',
            chartData: 
            [
                {
                    revenue: 30,
                    subscription: 30,
                },
                {
                    revenue: 20,
                    subscription: 30,
                },
                {
                    revenue: 25,
                    subscription: 25,
                },
                {
                    revenue: 38,
                    subscription: 20,
                },
                {
                    revenue: 35,
                    subscription: 32,
                },
                {
                    revenue: 20,
                    subscription: 30,
                },
            ]
        },
        {    
            title: 'Vehicles Available',
            value: 335,
            valueComplimentString: 'vehicles',
            barData: 50
        }
    ];
  return (
    <div className='flex gap-5'>
        {kpiCards?.map((kpi) => (
            <KPICard kpi={kpi} key={`${kpi.title} + ${kpi.value}`}/>
        ))}
    </div>
  )
}

export default KPICards