import React from 'react';
import KPICard from './KPICard';


const KPICards = () => {
    const kpiCards = [
        {    
            title: 'Starting Rentals',
            value: 26,
            valueComplimentString: 'rentals'
        },
        {    
            title: 'Ending Rentals',
            value: 15,
            valueComplimentString: 'rentals'
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