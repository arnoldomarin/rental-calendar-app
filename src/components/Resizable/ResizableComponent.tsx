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
import { LucideIcon } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";

const ResizableComponent = () => {

    const [navbarCollapsed, setNavbarCollapsed] = useState(false);

    const dfBusinessCategs: { title: string; label?: string; icon?: LucideIcon; variant: "default" | "ghost" }[] = [
        {
            title: "Assets",
            variant: "default"
        }
      ]

      const handleChange = (event: any) => {
        console.log('Toggle value:', event);
        setNavbarCollapsed(event);
        // Do something with the toggle value
      };
  return (
    <div>
        <Toggle onPressedChange={(e) => handleChange(e)}>Toggle</Toggle>
        <ResizablePanelGroup direction="horizontal" className='align-middle'>
            
            <ResizablePanel minSize={navbarCollapsed ? 5 : 10} maxSize={navbarCollapsed ? 5 : 15}>
                
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