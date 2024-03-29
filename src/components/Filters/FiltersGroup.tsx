'use client'
import React, { useState } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import FormControl from '@mui/joy/FormControl';
import MultiSelectDropdown from './MultiSelectDropdown';
import SingleToggleFilters from './SingleToggleFilters';

import { HiOutlineArrowCircleRight, HiOutlineArrowCircleUp, HiOutlineArrowCircleDown } from "react-icons/hi";
import { Car, Store, CheckCircle2 } from "lucide-react"; 
import { ShadMultiselect } from './ShadMultiselect';
import ThreeStateFilter from './ThreeStateFilter';
import { triggerThreeStateFilter } from '@/types';

type Options = Record<"value" | "label" | "color" | "type", string>;

const FiltersGroup = () => {
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        {
          title: 'The Lord of the Rings: The Return of the King',
          year: 2003,
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        {
          title: 'The Lord of the Rings: The Fellowship of the Ring',
          year: 2001,
        },
        {
          title: 'Star Wars: Episode V - The Empire Strikes Back',
          year: 1980,
        },
        { title: 'Forrest Gump', year: 1994 },
        { title: 'Inception', year: 2010 },
        {
          title: 'The Lord of the Rings: The Two Towers',
          year: 2002,
        },
        { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { title: 'Goodfellas', year: 1990 },
        { title: 'The Matrix', year: 1999 },
        { title: 'Seven Samurai', year: 1954 },
        {
          title: 'Star Wars: Episode IV - A New Hope',
          year: 1977,
        },
        { title: 'City of God', year: 2002 },
        { title: 'Se7en', year: 1995 },
        { title: 'The Silence of the Lambs', year: 1991 },
        { title: "It's a Wonderful Life", year: 1946 },
        { title: 'Life Is Beautiful', year: 1997 },
        { title: 'The Usual Suspects', year: 1995 },
        { title: 'Léon: The Professional', year: 1994 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'Saving Private Ryan', year: 1998 },
        { title: 'Once Upon a Time in the West', year: 1968 },
        { title: 'American History X', year: 1998 },
        { title: 'Interstellar', year: 2014 },
        { title: 'Casablanca', year: 1942 },
        { title: 'City Lights', year: 1931 },
        { title: 'Psycho', year: 1960 },
        { title: 'The Green Mile', year: 1999 },
        { title: 'The Intouchables', year: 2011 },
        { title: 'Modern Times', year: 1936 },
        { title: 'Raiders of the Lost Ark', year: 1981 },
        { title: 'Rear Window', year: 1954 },
        { title: 'The Pianist', year: 2002 },
        { title: 'The Departed', year: 2006 },
        { title: 'Terminator 2: Judgment Day', year: 1991 },
        { title: 'Back to the Future', year: 1985 },
        { title: 'Whiplash', year: 2014 },
        { title: 'Gladiator', year: 2000 },
        { title: 'Memento', year: 2000 },
        { title: 'The Prestige', year: 2006 },
        { title: 'The Lion King', year: 1994 },
        { title: 'Apocalypse Now', year: 1979 },
        { title: 'Alien', year: 1979 },
        { title: 'Sunset Boulevard', year: 1950 },
        {
          title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
          year: 1964,
        },
        { title: 'The Great Dictator', year: 1940 },
        { title: 'Cinema Paradiso', year: 1988 },
        { title: 'The Lives of Others', year: 2006 },
        { title: 'Grave of the Fireflies', year: 1988 },
        { title: 'Paths of Glory', year: 1957 },
        { title: 'Django Unchained', year: 2012 },
        { title: 'The Shining', year: 1980 },
        { title: 'WALL·E', year: 2008 },
        { title: 'American Beauty', year: 1999 },
        { title: 'The Dark Knight Rises', year: 2012 },
        { title: 'Princess Mononoke', year: 1997 },
        { title: 'Aliens', year: 1986 },
        { title: 'Oldboy', year: 2003 },
        { title: 'Once Upon a Time in America', year: 1984 },
        { title: 'Witness for the Prosecution', year: 1957 },
        { title: 'Das Boot', year: 1981 },
        { title: 'Citizen Kane', year: 1941 },
        { title: 'North by Northwest', year: 1959 },
        { title: 'Vertigo', year: 1958 },
        {
          title: 'Star Wars: Episode VI - Return of the Jedi',
          year: 1983,
        },
        { title: 'Reservoir Dogs', year: 1992 },
        { title: 'Braveheart', year: 1995 },
        { title: 'M', year: 1931 },
        { title: 'Requiem for a Dream', year: 2000 },
        { title: 'Amélie', year: 2001 },
        { title: 'A Clockwork Orange', year: 1971 },
        { title: 'Like Stars on Earth', year: 2007 },
        { title: 'Taxi Driver', year: 1976 },
        { title: 'Lawrence of Arabia', year: 1962 },
        { title: 'Double Indemnity', year: 1944 },
        {
          title: 'Eternal Sunshine of the Spotless Mind',
          year: 2004,
        },
        { title: 'Amadeus', year: 1984 },
        { title: 'To Kill a Mockingbird', year: 1962 },
        { title: 'Toy Story 3', year: 2010 },
        { title: 'Logan', year: 2017 },
        { title: 'Full Metal Jacket', year: 1987 },
        { title: 'Dangal', year: 2016 },
        { title: 'The Sting', year: 1973 },
        { title: '2001: A Space Odyssey', year: 1968 },
        { title: "Singin' in the Rain", year: 1952 },
        { title: 'Toy Story', year: 1995 },
        { title: 'Bicycle Thieves', year: 1948 },
        { title: 'The Kid', year: 1921 },
        { title: 'Inglourious Basterds', year: 2009 },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
      ];

    const companyMultiselectDropdown = { title: 'Company', options: top100Films };
    const branchMultiselectDropdown = { title: 'Branch', options: top100Films };
    const rentalCustomerMultiselectDropdown = { title: 'Rental Customer', options: top100Films };

    // Rental Status
    const [openRentals, setOpenRentals] = useState(true);
    const [startingRentals, setStartingRentals] = useState(true);
    const [endingRentals, setEndingRentals] = useState(true);
    // Rental Details
    const [pickUpsFilter, setPickUpsFilter] = useState(true);
    const [deliveryFilter, setDeliveryFilter] = useState(true);
    // Vehicle Status
    const [availableFilter, setAvailableFilter] = useState(true);

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

    const rentalDetailsFilterGroup = {
      toggleFilters: [
        {
          title: 'Pick-Up',
          isEnabled: pickUpsFilter,
          setFilter: setPickUpsFilter,
          icon: <Store size={30}/>
        },
        {
          title: 'Delivery',
          isEnabled: deliveryFilter,
          setFilter: setDeliveryFilter,
          icon: <Car size={30}/>
        }
      ]
    };

    const vehicleStatusFilterGroup = {
      toggleFilters: [
        {
          title: 'Available',
          isEnabled: availableFilter,
          setFilter: setAvailableFilter,
          icon: <CheckCircle2  size={30}/>
        }
      ]
    };

    const Companies: Options[] = [
      {
        value: "TDF Group",
        label: "TDF Group",
        color: "#ef4444",
        type: "normal"
      }
    ];

    const RentalBranches: Options[] = [
      {
        value: "Edmonton West",
        label: "Edmonton West",
        color: "#ef4444",
        type: "normal"
      },
      {
        value: "Edmonton Aiport",
        label: "Edmonton South",
        color: "#eab308",
        type: "airport"
      },
      {
        value: "Calgary",
        label: "Calgary",
        color: "#22c55e",
        type: "normal"
      },
      {
        value: "Vancouver Island",
        label: "Vancouver Island",
        color: "#06b6d4",
        type: "normal"
      },
      {
        value: "Winnipeg",
        label: "Winnipeg",
        color: "#3b82f6",
        type: "normal"
      },
      {
        value: "Leduc",
        label: "Leduc",
        color: "#8b5cf6",
        type: "normal"
      },
    ];

    const [pastDueCheck, setPastDueCheck] = useState<number>(0);
    const [pastDueCardSelected, setPastDueCardSelected] = useState<string>('selected-card three-stage-filters');

    console.log(pastDueCheck, pastDueCardSelected);

  return (
    <div className='pe-6'>
        <span className='font-bold text-md'>Filters</span>
        <Accordion type="multiple" className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className='font-bold text-sm'>Rental Location</AccordionTrigger>
                <AccordionContent>
                    {/* <FormControl id="multiple-limit-tags">
                      <MultiSelectDropdown multiselectDropdown={companyMultiselectDropdown}/>
                    </FormControl> */}
                    <ShadMultiselect options={Companies} dropdownName={'Company'} defaultOptionSelected={true}/>
                    <ShadMultiselect options={RentalBranches} dropdownName={'Branch'} defaultOptionSelected={true}/>
                    {/* <FormControl id="multiple-limit-tags" className="mt-2">
                      <MultiSelectDropdown multiselectDropdown={branchMultiselectDropdown}/>
                    </FormControl> */}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='font-bold text-sm'>Rental Information</AccordionTrigger>
                <AccordionContent>
                    {/* <FormControl id="multiple-limit-tags" className="mt-2">
                        <MultiSelectDropdown multiselectDropdown={rentalCustomerMultiselectDropdown}/>
                    </FormControl> */}
                    <ShadMultiselect options={RentalBranches} dropdownName={'Rental Customer'} defaultOptionSelected={false}/>
                    <div className='mt-4'>
                      <span className='font-semibold text-xs'>Rental Status</span>
                      <SingleToggleFilters singleToggleFilterGroup={rentalStatusFilterGroup} />
                    </div>
                    <div className='mt-4'>
                      <span className='font-semibold text-xs'>Rental Details</span>
                      <SingleToggleFilters singleToggleFilterGroup={rentalDetailsFilterGroup} />
                      <ThreeStateFilter 
                        triggerThreeStateFilter={triggerThreeStateFilter} 
                        setFilterCheck={setPastDueCheck} 
                        setCardSelected={setPastDueCardSelected} 
                        filterCheck={pastDueCheck} 
                        pastDueCardSelected={pastDueCardSelected}
                      />
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='font-bold text-sm'>Vehicle Information</AccordionTrigger>
                <AccordionContent>
                  <span className='font-semibold text-xs mb-1'>Vehicle Status</span>
                  <SingleToggleFilters singleToggleFilterGroup={vehicleStatusFilterGroup} />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default FiltersGroup