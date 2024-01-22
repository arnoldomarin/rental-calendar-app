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
