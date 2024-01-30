'use client';

import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HiOutlineArrowCircleDown, HiOutlineArrowCircleRight, HiOutlineArrowCircleUp } from 'react-icons/hi';

import { Toggle } from "@/components/ui/toggle";

const QuickFilters = () => {

    const [openRentals, setOpenRentals] = useState(true);
    const [startingRentals, setStartingRentals] = useState(true);
    const [endingRentals, setEndingRentals] = useState(true);

    const rentalStatusFilterGroup = {
        sectionTitle: 'Rental Status',
        toggleFilters: [
          {
            title: 'Open',
            isEnabled: openRentals,
            setFilter: setOpenRentals,
            icon: <HiOutlineArrowCircleRight size={30}/>
          },
          {
            title: 'Starting',
            isEnabled: startingRentals,
            setFilter: setStartingRentals,
            icon: <HiOutlineArrowCircleUp size={30}/>
          },
          {
            title: 'Ending',
            isEnabled: endingRentals,
            setFilter: setEndingRentals,
            icon: <HiOutlineArrowCircleDown size={30}/>
          }
        ]
    };
    
  return (
    <div className='mx-5 px-10 mt-5'>
        <Carousel
            opts={{align: "start",}}
            className="w-full max-w-sm"
        >
            <CarouselContent>
                {rentalStatusFilterGroup.toggleFilters.map((filter) => (
                <CarouselItem key={filter.title} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <div className='w-full h-full'>
                            <Toggle aria-label="Toggle bold" pressed={filter.isEnabled} onPressedChange={(value) => filter.setFilter(value)} className='p-4 w-full h-full rounded-xl'>
                                <div className='flex flex-col justify-center items-center align-middle'>
                                    {filter.icon}
                                    <div className='mt-2 text-sm'>
                                        {filter.title}
                                    </div>
                                </div>
                            </Toggle>
                        </div>
                    </div>
                </CarouselItem>
                ))}
                
            </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  )
}

export default QuickFilters