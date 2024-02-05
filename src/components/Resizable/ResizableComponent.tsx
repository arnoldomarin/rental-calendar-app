import React, { useState } from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
// import KPICards from '../KPIs/KPICards'
// import FiltersGroup from '../Filters/FiltersGroup'
// import QuickFilters from '../Filters/QuickFilters'
import VerticalNavbar from '../Navs/VerticalNavbar'
import { CarFront, Receipt, BadgeDollarSign, GanttChartSquare, MenuSquare, HelpCircle, UserPlus, BookText, ShieldEllipsis } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";
import Navbar from '../Navbar';

const ResizableComponent = () => {

    const [navbarCollapsed, setNavbarCollapsed] = useState(false);

    const dfBusinessCategs: { title: string; label?: string; icon?: React.ReactElement; variant: "default" | "ghost", url: string }[] = [
        {
            title: "Assets",
            variant: "ghost",
            icon: <CarFront size={18}/>,
            url: '/Assets'
        },
        {
            title: "Rental",
            variant: "ghost",
            icon: <Receipt size={18}/>,
            url: '/Assets'
        },
        {
            title: "Sales & Leasing",
            variant: "ghost",
            icon: <BadgeDollarSign size={18}/>,
            url: '/Assets'
        },
        {
            title: "Management",
            variant: "ghost",
            icon: <GanttChartSquare size={18}/>,
            url: '/Assets'
        },
    ]

    const SupportLinks: { title: string; label?: string; icon?: React.ReactElement; variant: "default" | "ghost", url: string }[] = [
        {
            title: "Support",
            variant: "ghost",
            icon: <HelpCircle size={18} />,
            url: '/Assets'
        },
        {
            title: "Request Access",
            variant: "ghost",
            icon: <UserPlus size={18} />,
            url: '/Assets'
        },
        {
            title: "Knowledge Base",
            variant: "ghost",
            icon: <BookText size={18} />,
            url: '/Assets'
        },
        {
            title: "Admin",
            variant: "ghost",
            icon: <ShieldEllipsis size={18}/>,
            url: '/Assets'
        }
    ]

    const handleChange = (event: any) => {
        setNavbarCollapsed(event);
    };

    return (
        <div>

            <ResizablePanelGroup direction="horizontal" className='flex flex-col align-middle'>     
                <ResizablePanel minSize={navbarCollapsed ? 3.5 : 12} maxSize={navbarCollapsed ? 3.5 : 15}>
                <div className="p-1 border rounded-tl-lg">
                    <Toggle onPressedChange={(e) => handleChange(e)}><MenuSquare size={20} /></Toggle>
                </div>  
                    <VerticalNavbar isCollapsed={navbarCollapsed} links={dfBusinessCategs} supportLinks={SupportLinks}/>
                </ResizablePanel>
            <ResizableHandle withHandle={!navbarCollapsed} className='bg-transparent w-0'/>
                <ResizablePanel>   
                        <Navbar />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

export default ResizableComponent