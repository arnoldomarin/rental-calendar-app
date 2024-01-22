import React from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import KPICards from '../KPIs/KPICards'
import FiltersGroup from '../Filters/FiltersGroup'

const ResizableComponent = () => {
  return (
    <div>
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
                <FiltersGroup />
            </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel minSize={80} >        
            <KPICards />
        </ResizablePanel>
        </ResizablePanelGroup>
    </div>
  )
}

export default ResizableComponent