import React from 'react';
import { CloudSun, Droplets, Wind, Thermometer } from 'lucide-react';

const weatherData = [
  { day: 'Today', temp: '24°C', humidity: '68%', condition: 'Partly Cloudy' },
  { day: 'Tomorrow', temp: '26°C', humidity: '72%', condition: 'Sunny' },
  { day: 'Wed', temp: '23°C', humidity: '75%', condition: 'Light Rain' },
  { day: 'Thu', temp: '25°C', humidity: '63%', condition: 'Sunny' },
];

export default function WeatherCard() {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-[#536F01]/10 to-[#3F6358]/10 rounded-lg p-4 border border-[#536F01]/20">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-lg font-semibold text-[#3F6358] font-['Roboto']">Current Weather</p>
            <p className="text-sm text-[#8A9994] font-['Roboto']">AI-Powered Predictions</p>
          </div>
          <CloudSun className="w-8 h-8 text-[#E8B100]" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <Thermometer className="w-4 h-4 text-[#536F01] mx-auto mb-1" />
            <p className="text-sm text-[#8A9994] font-['Roboto']">Temperature</p>
            <p className="font-semibold text-[#3F6358] font-['Roboto']">24°C</p>
          </div>
          <div>
            <Droplets className="w-4 h-4 text-[#536F01] mx-auto mb-1" />
            <p className="text-sm text-[#8A9994] font-['Roboto']">Humidity</p>
            <p className="font-semibold text-[#3F6358] font-['Roboto']">68%</p>
          </div>
          <div>
            <Wind className="w-4 h-4 text-[#536F01] mx-auto mb-1" />
            <p className="text-sm text-[#8A9994] font-['Roboto']">Wind</p>
            <p className="font-semibold text-[#3F6358] font-['Roboto']">12 km/h</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-3">4-Day Forecast</h4>
        {weatherData.map((day, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white/40 rounded-lg border border-white/30">
            <div>
              <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">{day.day}</p>
              <p className="text-xs text-[#8A9994] font-['Roboto']">{day.condition}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-[#3F6358] font-['Roboto']">{day.temp}</p>
              <p className="text-xs text-[#8A9994] font-['Roboto']">{day.humidity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}