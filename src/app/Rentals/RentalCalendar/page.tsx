import KPICards from '@/components/KPIs/KPICards'
import React from 'react';
import { rentalCalendarKpisDummy } from '@/types';

const RentalCalendar = () => {
  return (
    <div>
      <h1 className='m-5'>RentalCalendar Page</h1>
      <KPICards kpiCards={rentalCalendarKpisDummy}/>
    </div>
  )
}

export default RentalCalendar