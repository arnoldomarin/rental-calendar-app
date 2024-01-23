import React from 'react';
import { singleToggleFilterProps } from '@/types';
import { Toggle } from "@/components/ui/toggle"


interface SingleToggleFilterProps {
    singleToggleFilter: singleToggleFilterProps;
}
  

const SingleToggleFilter = ({ singleToggleFilter } :  SingleToggleFilterProps) => {
  return (
    <div className='w-full h-full'>
        <Toggle aria-label="Toggle bold" pressed={singleToggleFilter.isEnabled} onPressedChange={(value) => singleToggleFilter.setFilter(value)} className='p-4 w-full h-full rounded-xl'>
            <div className='flex flex-col justify-center items-center align-middle'>
                {singleToggleFilter.icon}
                <div className='mt-2 text-sm'>
                    {singleToggleFilter.title}
                </div>
            </div>
        </Toggle>
    </div>
  )
}

export default SingleToggleFilter