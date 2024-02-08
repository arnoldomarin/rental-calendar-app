import KPICards from '@/components/KPIs/KPICards'
import React from 'react';
import { rentalCalendarKpisDummy } from '@/types';
import FiltersGroup from '@/components/Filters/FiltersGroup';

const RentalCalendar = () => {
  return (
    <div className='grid grid-cols-12 gap-1 p-3'>
      <div className='col-span-2'>
        <FiltersGroup />
      </div>
      <div className='col-span-10'>
        <KPICards kpiCards={rentalCalendarKpisDummy}/>
      </div>
    </div>
  )
}

export default RentalCalendar