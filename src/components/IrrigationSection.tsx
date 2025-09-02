import React, { useState } from 'react';
import { Droplets, Play, Pause, Clock, Gauge, Zap, Calendar } from 'lucide-react';

const irrigationZones = [
  { id: 'A', name: 'North Field', status: 'active', moisture: 45, duration: '2h 15m', nextSchedule: 'Tomorrow 6:00 AM' },
  { id: 'B', name: 'South Field', status: 'scheduled', moisture: 72, duration: '1h 30m', nextSchedule: 'Today 8:00 PM' },
  { id: 'C', name: 'Greenhouse', status: 'idle', moisture: 68, duration: '45m', nextSchedule: 'Tomorrow 10:00 AM' },
  { id: 'D', name: 'East Orchard', status: 'maintenance', moisture: 55, duration: '3h 00m', nextSchedule: 'Manual' },
];

export default function IrrigationSection() {
  const [selectedZone, setSelectedZone] = useState('A');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'scheduled': return 'bg-[#E8B100]';
      case 'maintenance': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Running';
      case 'scheduled': return 'Scheduled';
      case 'maintenance': return 'Maintenance';
      default: return 'Idle';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#3F6358] font-['Roboto']">Smart Irrigation Control</h2>
          <p className="text-[#8A9994] font-['Roboto']">AI-powered water management system</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-[#536F01] text-white px-4 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
            <Play className="w-4 h-4 inline mr-2" />
            Start All
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 font-['Roboto']">
            <Pause className="w-4 h-4 inline mr-2" />
            Stop All
          </button>
        </div>
      </div>

      {/* Zone Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {irrigationZones.map((zone) => (
          <div
            key={zone.id}
            onClick={() => setSelectedZone(zone.id)}
            className={`bg-white/70 backdrop-blur-md rounded-xl p-4 border cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedZone === zone.id ? 'border-[#536F01] shadow-lg' : 'border-white/30'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(zone.status)}`} />
                <span className="font-semibold text-[#3F6358] font-['Roboto']">Zone {zone.id}</span>
              </div>
              <span className="text-xs text-[#8A9994] font-['Roboto']">{getStatusText(zone.status)}</span>
            </div>
            
            <h4 className="font-medium text-[#3F6358] font-['Roboto'] mb-2">{zone.name}</h4>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Moisture</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">{zone.moisture}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#536F01] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${zone.moisture}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs text-[#8A9994] font-['Roboto']">
                <span>Duration: {zone.duration}</span>
                <span>Next: {zone.nextSchedule}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Control Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Zone Details */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
          <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">
            Zone {selectedZone} - Detailed Control
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#536F01]/10 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Droplets className="w-4 h-4 text-[#536F01]" />
                  <span className="text-sm font-medium text-[#3F6358] font-['Roboto']">Water Flow</span>
                </div>
                <p className="text-xl font-bold text-[#536F01] font-['Roboto']">24.5 L/min</p>
              </div>
              
              <div className="bg-[#E8B100]/10 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Gauge className="w-4 h-4 text-[#E8B100]" />
                  <span className="text-sm font-medium text-[#3F6358] font-['Roboto']">Pressure</span>
                </div>
                <p className="text-xl font-bold text-[#E8B100] font-['Roboto']">2.3 bar</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#3F6358] font-['Roboto']">Manual Duration</span>
                <select className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm font-['Roboto']">
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                </select>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-[#536F01] text-white py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                  Start Manual
                </button>
                <button className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300 font-['Roboto']">
                  Schedule
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* System Overview */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
          <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">System Overview</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-800 font-['Roboto']">System Status</span>
              </div>
              <span className="text-sm font-semibold text-green-600 font-['Roboto']">Online</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Daily Water Usage</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">1,245 L</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Active Zones</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">1 of 4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Efficiency Score</span>
                <span className="text-sm font-semibold text-[#536F01] font-['Roboto']">94.2%</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4 text-[#536F01]" />
                <span className="text-sm font-medium text-[#3F6358] font-['Roboto']">Next Scheduled</span>
              </div>
              <p className="text-sm text-[#8A9994] font-['Roboto']">Zone B - Today 8:00 PM (1h 30m)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}