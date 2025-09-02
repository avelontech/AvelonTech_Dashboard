import React from 'react';
import { MapPin, Droplets, Thermometer, Leaf } from 'lucide-react';

const farmZones = [
  { id: 'A', x: 20, y: 25, status: 'healthy', type: 'crop' },
  { id: 'B', x: 45, y: 35, status: 'irrigation', type: 'irrigation' },
  { id: 'C', x: 70, y: 45, status: 'monitoring', type: 'sensor' },
  { id: 'D', x: 30, y: 65, status: 'healthy', type: 'crop' },
  { id: 'E', x: 60, y: 75, status: 'alert', type: 'crop' },
];

export default function MapPreview() {
  const getZoneIcon = (type: string) => {
    switch (type) {
      case 'irrigation': return Droplets;
      case 'sensor': return Thermometer;
      default: return Leaf;
    }
  };

  const getZoneColor = (status: string) => {
    switch (status) {
      case 'healthy': return '#536F01';
      case 'irrigation': return '#E8B100';
      case 'alert': return '#ef4444';
      default: return '#8A9994';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto']">Farm Map Overview</h4>
        <span className="text-xs text-[#8A9994] font-['Roboto']">Interactive GIS View</span>
      </div>
      
      {/* Map Container */}
      <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-lg h-48 border border-[#8A9994]/20 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(83, 111, 1, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(83, 111, 1, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Farm Zones */}
        {farmZones.map((zone) => {
          const Icon = getZoneIcon(zone.type);
          return (
            <div
              key={zone.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                style={{ backgroundColor: getZoneColor(zone.status) }}
              >
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-[#3F6358] px-2 py-1 rounded shadow-md font-['Roboto']">
                  Zone {zone.id}
                </span>
              </div>
            </div>
          );
        })}

        {/* Legend */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-white/30">
          <div className="flex space-x-3 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#536F01]" />
              <span className="text-[#3F6358] font-['Roboto']">Healthy</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#E8B100]" />
              <span className="text-[#3F6358] font-['Roboto']">Active</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-[#3F6358] font-['Roboto']">Alert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-2 bg-white/60 rounded-lg">
          <p className="text-sm font-semibold text-[#3F6358] font-['Roboto']">5</p>
          <p className="text-xs text-[#8A9994] font-['Roboto']">Active Zones</p>
        </div>
        <div className="text-center p-2 bg-white/60 rounded-lg">
          <p className="text-sm font-semibold text-[#3F6358] font-['Roboto']">12.5</p>
          <p className="text-xs text-[#8A9994] font-['Roboto']">Hectares</p>
        </div>
        <div className="text-center p-2 bg-white/60 rounded-lg">
          <p className="text-sm font-semibold text-[#3F6358] font-['Roboto']">98%</p>
          <p className="text-xs text-[#8A9994] font-['Roboto']">Coverage</p>
        </div>
      </div>
    </div>
  );
}