'use client'
import React, { ReactNode, useEffect, useState } from 'react'

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
import MobileNav from '../Navs/MobileNav';

interface ResizableComponentProps {
    children: React.ReactNode;
  }
  

  const ResizableComponent: React.FC<ResizableComponentProps> = ({ children }) => {

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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust the width as needed
      };
  
      // Initial check on component mount
      handleResize();
  
      // Listen to window resize events
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <div>
            {isMobile ? (
                // Mobile view component
                <div>
                <MobileNav />
                {children}
                </div>
            ) : (
                <ResizablePanelGroup direction="horizontal" className='flex flex-col align-middle min-h-screen'>     
                    <ResizablePanel defaultSize={12} minSize={navbarCollapsed ? 3.5 : 12} maxSize={navbarCollapsed ? 3.5 : 15} className='border smooth-transition'>
                        <div className="p-2 border-b">
                            <Toggle onPressedChange={(e) => handleChange(e)}><MenuSquare size={20} /></Toggle>
                        </div>  
                        <VerticalNavbar isCollapsed={navbarCollapsed} links={dfBusinessCategs} supportLinks={SupportLinks}/>
                    </ResizablePanel>
                <ResizableHandle withHandle={!navbarCollapsed} className='bg-transparent w-0'/>
                    <ResizablePanel>   
                        <Navbar />
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            )}
        </div>
    )
}

export default ResizableComponent