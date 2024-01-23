'use client'

import React from 'react';
import { multiselectDropdownProps } from '@/types';

import Autocomplete from '@mui/joy/Autocomplete';


interface MultiSelectDropdownProps {
    multiselectDropdown: multiselectDropdownProps;
}
  

const MultiSelectDropdown = ({ multiselectDropdown } :  MultiSelectDropdownProps) => {
  return (
    <div className='w-full h-full'>
        <span className='font-semibold text-xs mb-1'>{multiselectDropdown.title}</span>
        <Autocomplete
            multiple
            placeholder=""
            limitTags={1}
            options={multiselectDropdown.options}
            getOptionLabel={(option) => option.title}
            defaultValue={[multiselectDropdown?.options[3]]}
            // sx={{ width: '500px' }}
        />
    </div>
  )
}

export default MultiSelectDropdown