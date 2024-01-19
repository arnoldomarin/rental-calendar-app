export interface kpiProps {
    title: string;
    value: number;
    valueComplimentString: string;
    chartData?: KPIChartData[];
    barData?: number;
    totalBarData?: number;
}

export interface KPIChartData {
    rentals: number,
    subscription: number,
}
