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
                    rentals: 50,
                    subscription: 30,
                },
                {
                    rentals: 20,
                    subscription: 30,
                },
                {
                    rentals: 25,
                    subscription: 25,
                },
                {
                    rentals: 40,
                    subscription: 20,
                },
                {
                    rentals: 55,
                    subscription: 32,
                },
                {
                    rentals: 50,
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
                    rentals: 30,
                    subscription: 30,
                },
                {
                    rentals: 20,
                    subscription: 30,
                },
                {
                    rentals: 25,
                    subscription: 25,
                },
                {
                    rentals: 38,
                    subscription: 20,
                },
                {
                    rentals: 35,
                    subscription: 32,
                },
                {
                    rentals: 20,
                    subscription: 30,
                },
            ]
        },
        {    
            title: 'Vehicles Available',
            value: 335,
            valueComplimentString: 'vehicles',
            barData: (335/1750)*100, 
            totalBarData: 1750
        },
        {    
            title: 'Vehicles On Rent',
            value: 781,
            valueComplimentString: 'vehicles',
            barData: (781/1302)*100, 
            totalBarData: 1302
        },
        {    
            title: 'Vehicles On Fleet',
            value: 1302,
            valueComplimentString: 'vehicles',
            barData: (1302/1750)*100, 
            totalBarData: 1750
        },
        {    
            title: 'Rental Utilization',
            value: 1302,
            valueComplimentString: 'vehicles',
            barData: (1302/1750)*100, 
            totalBarData: 1750
        }
    ];
  return (
    <div className='mx-auto grid grid-cols-6 gap-4'>
        {kpiCards?.map((kpi) => (
            <KPICard kpi={kpi} key={`${kpi.title} + ${kpi.value}`}/>
        ))}
    </div>
  )
}

export default KPICards