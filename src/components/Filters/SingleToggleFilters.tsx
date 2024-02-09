import React from 'react';
import SingleToggleFilter from './SingleToggleFilter';
import { singleToggleFiltersGroupProps } from '@/types';

interface SingleToggleFiltersGroupProps {
    singleToggleFilterGroup: singleToggleFiltersGroupProps;
}

const SingleToggleFilters = ({ singleToggleFilterGroup } :  SingleToggleFiltersGroupProps) => {
  return (
    <div className='mt-1'>
        <div className='mx-auto grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-4'>
            {singleToggleFilterGroup?.toggleFilters.map((filter) => (
                <SingleToggleFilter singleToggleFilter={filter} key={`${filter.title} + filter`}/>
            ))}
        </div>
    </div>
  )
}

export default SingleToggleFilters;