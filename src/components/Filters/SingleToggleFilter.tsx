import React from 'react';
import { singleToggleFilterProps } from '@/types';
import { Toggle } from "@/components/ui/toggle"


interface SingleToggleFilterProps {
    singleToggleFilter: singleToggleFilterProps;
}
  

const SingleToggleFilter = ({ singleToggleFilter } :  SingleToggleFilterProps) => {
  return (
    <div className='w-full h-full'>
        <Toggle aria-label="Toggle bold" pressed={singleToggleFilter.isEnabled} onPressedChange={(value) => singleToggleFilter.setFilter(value)}>
            {singleToggleFilter.title}
        </Toggle>
    </div>
  )
}

export default SingleToggleFilter