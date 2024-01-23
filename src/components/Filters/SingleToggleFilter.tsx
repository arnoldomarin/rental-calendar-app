'use client'

import React from 'react';
import { singleToggleFilterProps } from '@/types';


interface SingleToggleFilterProps {
    singleToggleFilter: singleToggleFilterProps;
}
  

const SingleToggleFilter = ({ singleToggleFilter } :  SingleToggleFilterProps) => {
  return (
    <div className='w-full h-full'>
        {singleToggleFilter.title}
    </div>
  )
}

export default SingleToggleFilter