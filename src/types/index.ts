export interface kpiProps {
    title: string;
    value: number;
    valueComplimentString: string;
    chartData?: KPIChartData[];
    barData?: number;
}

export interface KPIChartData {
    revenue: number,
    subscription: number,
}
