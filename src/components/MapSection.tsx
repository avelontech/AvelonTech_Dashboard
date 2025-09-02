import React, { useState } from 'react';
import { MapPin, Droplets, Thermometer, Leaf, Camera, Zap, Layers, Maximize } from 'lucide-react';

const farmZones = [
  { id: 'A', name: 'North Field', x: 25, y: 20, status: 'healthy', type: 'crop', area: '2.5 ha', crop: 'Wheat', moisture: 72 },
  { id: 'B', name: 'South Field', x: 60, y: 35, status: 'irrigation', type: 'irrigation', area: '3.2 ha', crop: 'Corn', moisture: 45 },
  { id: 'C', name: 'East Orchard', x: 80, y: 55, status: 'monitoring', type: 'sensor', area: '1.8 ha', crop: 'Apples', moisture: 68 },
  { id: 'D', name: 'Greenhouse', x: 35, y: 70, status: 'healthy', type: 'crop', area: '0.5 ha', crop: 'Tomatoes', moisture: 85 },
  { id: 'E', name: 'West Pasture', x: 15, y: 60, status: 'alert', type: 'crop', area: '4.1 ha', crop: 'Soybeans', moisture: 25 },
];

const sensors = [
  { id: 'S1', x: 30, y: 25, type: 'moisture', value: '72%', status: 'normal' },
  { id: 'S2', x: 65, y: 40, type: 'temperature', value: '24°C', status: 'normal' },
  { id: 'S3', x: 85, y: 60, type: 'moisture', value: '68%', status: 'normal' },
  { id: 'S4', x: 40, y: 75, type: 'temperature', value: '26°C', status: 'normal' },
  { id: 'S5', x: 20, y: 65, type: 'moisture', value: '25%', status: 'alert' },
];

export default function MapSection() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const [mapView, setMapView] = useState<'satellite' | 'terrain' | 'hybrid'>('hybrid');
  const [showSensors, setShowSensors] = useState(true);
  const [showZones, setShowZones] = useState(true);

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

  const getSensorIcon = (type: string) => {
    switch (type) {
      case 'temperature': return Thermometer;
      case 'moisture': return Droplets;
      default: return Camera;
    }
  };

  const selectedZoneData = farmZones.find(zone => zone.id === selectedZone);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#3F6358] font-['Roboto']">Interactive Farm Map</h2>
          <p className="text-[#8A9994] font-['Roboto']">GIS-powered field monitoring and management</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-[#536F01] text-white px-4 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
            <Maximize className="w-4 h-4" />
            <span>Full Screen</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/70 text-[#3F6358] px-4 py-2 rounded-lg border border-white/30 hover:bg-white/90 transition-colors duration-300 font-['Roboto']">
            <Layers className="w-4 h-4" />
            <span>Layers</span>
          </button>
        </div>
      </div>

      {/* Map Controls */}
      <div className="flex items-center justify-between bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/30">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-[#3F6358] font-['Roboto']">View:</span>
            <select
              value={mapView}
              onChange={(e) => setMapView(e.target.value as any)}
              className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm font-['Roboto']"
            >
              <option value="satellite">Satellite</option>
              <option value="terrain">Terrain</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showZones}
                onChange={(e) => setShowZones(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span className="text-sm text-[#8A9994] font-['Roboto']">Show Zones</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showSensors}
                onChange={(e) => setShowSensors(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span className="text-sm text-[#8A9994] font-['Roboto']">Show Sensors</span>
            </label>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#536F01] rounded-full" />
            <span className="text-sm text-[#8A9994] font-['Roboto']">Healthy</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#E8B100] rounded-full" />
            <span className="text-sm text-[#8A9994] font-['Roboto']">Active</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-sm text-[#8A9994] font-['Roboto']">Alert</span>
          </div>
        </div>
      </div>

      {/* Main Map Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Display */}
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-xl h-96 border border-[#8A9994]/20 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(rgba(83, 111, 1, 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(83, 111, 1, 0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />
            </div>

            {/* Farm Zones */}
            {showZones && farmZones.map((zone) => {
              const Icon = getZoneIcon(zone.type);
              const isSelected = selectedZone === zone.id;
              return (
                <div
                  key={zone.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
                  style={{
                    left: `${zone.x}%`,
                    top: `${zone.y}%`,
                    transform: `translate(-50%, -50%) ${isSelected ? 'scale(1.2)' : 'scale(1)'}`,
                  }}
                  onClick={() => setSelectedZone(zone.id)}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-3 ${
                      isSelected ? 'border-white ring-2 ring-[#536F01]' : 'border-white'
                    }`}
                    style={{ backgroundColor: getZoneColor(zone.status) }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-[#3F6358] px-2 py-1 rounded shadow-md font-['Roboto']">
                      Zone {zone.id}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Sensors */}
            {showSensors && sensors.map((sensor) => {
              const SensorIcon = getSensorIcon(sensor.type);
              return (
                <div
                  key={sensor.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300"
                  style={{
                    left: `${sensor.x}%`,
                    top: `${sensor.y}%`,
                  }}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 border-white ${
                    sensor.status === 'alert' ? 'bg-red-500' : 'bg-blue-500'
                  }`}>
                    <SensorIcon className="w-3 h-3 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white/90 backdrop-blur-sm text-xs font-medium text-[#3F6358] px-1 py-0.5 rounded shadow-md font-['Roboto']">
                      {sensor.value}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Compass */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-white/30">
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-sm font-bold text-[#3F6358] font-['Roboto']">N</span>
              </div>
            </div>

            {/* Scale */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-white/30">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-1 bg-[#3F6358]" />
                <span className="text-xs text-[#3F6358] font-['Roboto']">100m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zone Details Panel */}
        <div className="space-y-4">
          {selectedZoneData ? (
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto']">
                  Zone {selectedZoneData.id} Details
                </h3>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: getZoneColor(selectedZoneData.status) }}
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">{selectedZoneData.name}</p>
                  <p className="text-sm text-[#8A9994] font-['Roboto']">{selectedZoneData.area} • {selectedZoneData.crop}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#536F01]/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Droplets className="w-4 h-4 text-[#536F01]" />
                      <span className="text-xs font-medium text-[#3F6358] font-['Roboto']">Moisture</span>
                    </div>
                    <p className="text-lg font-bold text-[#536F01] font-['Roboto']">{selectedZoneData.moisture}%</p>
                  </div>
                  
                  <div className="bg-[#E8B100]/10 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Thermometer className="w-4 h-4 text-[#E8B100]" />
                      <span className="text-xs font-medium text-[#3F6358] font-['Roboto']">Temp</span>
                    </div>
                    <p className="text-lg font-bold text-[#E8B100] font-['Roboto']">24°C</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <button className="w-full bg-[#536F01] text-white py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                    Start Irrigation
                  </button>
                  <button className="w-full bg-white/70 text-[#3F6358] py-2 rounded-lg border border-white/30 hover:bg-white/90 transition-colors duration-300 font-['Roboto']">
                    View History
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30 text-center">
              <MapPin className="w-12 h-12 text-[#8A9994] mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-2">Select a Zone</h3>
              <p className="text-sm text-[#8A9994] font-['Roboto']">Click on any zone marker to view detailed information</p>
            </div>
          )}

          {/* Farm Statistics */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">Farm Overview</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Total Area</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">12.1 ha</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Active Zones</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">5 of 5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Sensors Online</span>
                <span className="text-sm font-semibold text-[#536F01] font-['Roboto']">5 of 5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Avg Moisture</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">63.6%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}