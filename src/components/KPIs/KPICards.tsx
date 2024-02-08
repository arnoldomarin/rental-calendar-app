import React from 'react';
import KPICard from './KPICard';
import { kpiProps } from '@/types';

interface KPICardsProps {
  kpiCards: kpiProps[];
}

const KPICards: React.FC<KPICardsProps> = ({ kpiCards }) => {
  return (
    <div className='mx-auto grid grid-cols-6 gap-4 px-4 mt-4'>
      {kpiCards?.map((kpi) => (
        <KPICard kpi={kpi} key={`${kpi.title} + ${kpi.value}`} />
      ))}
    </div>
  );
};

export default KPICards;