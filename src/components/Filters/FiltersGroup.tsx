import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FiltersGroup = () => {
  return (
    <div className='pe-6'>
        <span className='font-bold text-md'>Filters</span>
        <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className='font-bold text-sm'>Rental Location</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='font-bold text-sm'>Rental Information</AccordionTrigger>
                <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='font-bold text-sm'>Vehicle Information</AccordionTrigger>
                <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default FiltersGroup