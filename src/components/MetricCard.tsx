import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
}

export default function MetricCard({ title, value, change, icon: Icon, trend = 'neutral' }: MetricCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-500';
      default: return 'text-[#8A9994]';
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/80 transition-all duration-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#8A9994] font-['Roboto'] mb-1">{title}</p>
          <p className="text-2xl font-bold text-[#3F6358] font-['Roboto']">{value}</p>
          {change && (
            <p className={`text-sm font-medium font-['Roboto'] ${getTrendColor()}`}>
              {change}
            </p>
          )}
        </div>
        <div className="w-8 h-8 bg-gradient-to-br from-[#536F01]/20 to-[#3F6358]/20 rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#536F01]" />
        </div>
      </div>
    </div>
  );
}