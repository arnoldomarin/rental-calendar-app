import React from 'react';

import {
    Card,
    CardContent
  } from "@/components/ui/card";

  import { Check, X, FilterX } from "lucide-react"; 

  interface ThreeStateFilterProps {
    triggerThreeStateFilter: (
      setFilterCheck: React.Dispatch<React.SetStateAction<number>>,
      setCardSelected: React.Dispatch<React.SetStateAction<string>>,
      filterCheck: number
    ) => void, 
    setFilterCheck: React.Dispatch<React.SetStateAction<number>>,
    setCardSelected: React.Dispatch<React.SetStateAction<string>>,
    filterCheck: number,
    pastDueCardSelected: string
  }

  const ThreeStateFilter: React.FC<ThreeStateFilterProps> = ({
    triggerThreeStateFilter,
    setFilterCheck,
    setCardSelected,
    filterCheck,
    pastDueCardSelected
  }) => {
  
    return (
      <div onClick={() => triggerThreeStateFilter(setFilterCheck, setCardSelected, filterCheck)} title='Toggle Past-Due Rentals' className='mt-3'>
        <Card className={pastDueCardSelected}>
          <CardContent className='flex py-2 px-3 justify-between align-middle items-center'>
            <p className='mb-0 text-xs font-semibold'>Long-term Rentals</p>
            <div className='flex gap-3'>
              <div className='state-value-icon-wrapper selected-icon'>
                <Check size={18} />
              </div>
              <div className='state-value-icon-wrapper excluded-icon'>
                <X size={18} />
              </div>
              <div className='state-value-icon-wrapper disabled-icon'>
                <FilterX size={18} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default ThreeStateFilter;