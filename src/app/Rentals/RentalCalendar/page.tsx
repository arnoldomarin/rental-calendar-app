import KPICards from '@/components/KPIs/KPICards'
import React from 'react';
import { rentalCalendarKpisDummy } from '@/types';

const RentalCalendar = () => {
  return (
    <div>
      <KPICards kpiCards={rentalCalendarKpisDummy}/>
    </div>
  )
}

export default RentalCalendar