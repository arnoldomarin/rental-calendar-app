import React from 'react';
import SingleToggleFilter from './SingleToggleFilter';
import { singleToggleFiltersGroupProps } from '@/types';

interface SingleToggleFiltersGroupProps {
    singleToggleFilterGroup: singleToggleFiltersGroupProps;
}


const SingleToggleFilters = ({ singleToggleFilterGroup } :  SingleToggleFiltersGroupProps) => {
  return (
    <div className='mx-auto grid grid-cols-6 gap-4 ps-4'>
        {singleToggleFilterGroup?.toggleFilters.map((filter) => (
            <SingleToggleFilter singleToggleFilter={filter} key={`${filter.title} + 'filter'`}/>
        ))}
    </div>
  )
}

export default SingleToggleFilters;