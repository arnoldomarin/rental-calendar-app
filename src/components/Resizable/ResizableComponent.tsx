import React, { useState } from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import KPICards from '../KPIs/KPICards'
import FiltersGroup from '../Filters/FiltersGroup'
import QuickFilters from '../Filters/QuickFilters'
import VerticalNavbar from '../Navs/VerticalNavbar'
import { CarFront, Receipt, BadgeDollarSign, GanttChartSquare, MenuSquare } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";

const ResizableComponent = () => {

    const [navbarCollapsed, setNavbarCollapsed] = useState(false);

    const dfBusinessCategs: { title: string; label?: string; icon?: React.ReactElement; variant: "default" | "ghost" }[] = [
        {
            title: "Assets",
            variant: "default",
            icon: <CarFront size={18}/>
        },
        {
            title: "Rental",
            variant: "default",
            icon: <Receipt size={18}/>
        },
        {
            title: "Sales & Leasing",
            variant: "default",
            icon: <BadgeDollarSign size={18}/>
        },
        {
            title: "Management",
            variant: "default",
            icon: <GanttChartSquare size={18}/>
        }
      ]

      const handleChange = (event: any) => {
        console.log('Toggle value:', event);
        setNavbarCollapsed(event);
        // Do something with the toggle value
      };
  return (
    <div>

        <ResizablePanelGroup direction="horizontal" className='flex flex-col align-middle'>     
            <ResizablePanel minSize={navbarCollapsed ? 3.5 : 12} maxSize={navbarCollapsed ? 3.5 : 15}>
            <div className="py-2 border rounded-tl-lg">
                <Toggle onPressedChange={(e) => handleChange(e)}><MenuSquare size={20} /></Toggle>
            </div>  
                <VerticalNavbar isCollapsed={navbarCollapsed} links={dfBusinessCategs} />
            </ResizablePanel>
        <ResizableHandle withHandle={!navbarCollapsed} className='bg-transparent'/>
        <ResizablePanel >        

        </ResizablePanel>
        </ResizablePanelGroup>
    </div>
  )
}

export default ResizableComponent