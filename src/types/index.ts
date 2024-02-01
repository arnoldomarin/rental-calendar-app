import { ReactNode } from "react";

export interface linkCardProps {
    title: string;
    href: string;
    description: string;
}

export interface kpiProps {
    title: string;
    value: number;
    valueComplimentString: string;
    chartData?: KPIChartData[];
    barData?: number;
    totalBarData?: number;
    footerTitleOne?: string;
    footerNumOne?: number;
    footerTitleTwo?: string;
    footerNumTwo?: number;
}

export interface KPIChartData {
    rentals: number,
    subscription: number,
}

export interface multiselectDropdownProps {
    title: string;
    options: dropdownOptions[];
}

export interface dropdownOptions {
    title: string,
    year: number,
}

export interface singleToggleFilterProps {
    title: string;
    isEnabled: boolean;
    setFilter: (enabled:boolean) => void
    icon: ReactNode
}

export interface singleToggleFiltersGroupProps {
    sectionTitle: string;
    toggleFilters: singleToggleFilterProps[];
}