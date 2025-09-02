import React from 'react';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface ChartCardProps {
  title: string;
  data: DataPoint[];
  type: 'bar' | 'line';
}

export default function ChartCard({ title, data, type }: ChartCardProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto']">{title}</h4>
      
      {type === 'bar' ? (
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#8A9994] font-['Roboto']">{item.label}</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">{item.value}%</span>
              </div>
              <div className="h-2 bg-[#FCE2AD]/30 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    backgroundColor: item.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-32 flex items-end space-x-2">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-t-lg transition-all duration-1000 ease-out"
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color,
                  minHeight: '8px',
                }}
              />
              <span className="text-xs text-[#8A9994] font-['Roboto'] mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}