import React from 'react';
import { CloudSun, Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, Eye, Gauge } from 'lucide-react';

const currentWeather = {
  temperature: 24,
  condition: 'Partly Cloudy',
  humidity: 68,
  windSpeed: 12,
  pressure: 1013,
  visibility: 10,
  uvIndex: 6,
  icon: CloudSun
};

const hourlyForecast = [
  { time: '12:00', temp: 24, condition: 'Partly Cloudy', icon: CloudSun, rain: 10 },
  { time: '13:00', temp: 26, condition: 'Sunny', icon: Sun, rain: 0 },
  { time: '14:00', temp: 28, condition: 'Sunny', icon: Sun, rain: 0 },
  { time: '15:00', temp: 27, condition: 'Cloudy', icon: Cloud, rain: 20 },
  { time: '16:00', temp: 25, condition: 'Light Rain', icon: CloudRain, rain: 60 },
  { time: '17:00', temp: 23, condition: 'Rain', icon: CloudRain, rain: 80 },
];

const weeklyForecast = [
  { day: 'Today', high: 28, low: 18, condition: 'Partly Cloudy', icon: CloudSun, rain: 20 },
  { day: 'Tomorrow', high: 30, low: 20, condition: 'Sunny', icon: Sun, rain: 0 },
  { day: 'Wednesday', high: 26, low: 16, condition: 'Light Rain', icon: CloudRain, rain: 70 },
  { day: 'Thursday', high: 25, low: 15, condition: 'Cloudy', icon: Cloud, rain: 30 },
  { day: 'Friday', high: 27, low: 17, condition: 'Sunny', icon: Sun, rain: 10 },
  { day: 'Saturday', high: 29, low: 19, condition: 'Partly Cloudy', icon: CloudSun, rain: 15 },
  { day: 'Sunday', high: 31, low: 21, condition: 'Sunny', icon: Sun, rain: 5 },
];

export default function WeatherSection() {
  const CurrentIcon = currentWeather.icon;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#3F6358] font-['Roboto']">Weather Forecast</h2>
        <p className="text-[#8A9994] font-['Roboto']">AI-powered weather predictions for smart farming</p>
      </div>

      {/* Current Weather */}
      <div className="bg-gradient-to-br from-[#536F01]/10 to-[#3F6358]/10 rounded-xl p-6 border border-[#536F01]/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto']">Current Weather</h3>
            <p className="text-sm text-[#8A9994] font-['Roboto']">Real-time conditions</p>
          </div>
          <CurrentIcon className="w-12 h-12 text-[#E8B100]" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <Thermometer className="w-6 h-6 text-[#536F01] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#3F6358] font-['Roboto']">{currentWeather.temperature}°C</p>
            <p className="text-sm text-[#8A9994] font-['Roboto']">Temperature</p>
          </div>
          
          <div className="text-center">
            <Droplets className="w-6 h-6 text-[#536F01] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#3F6358] font-['Roboto']">{currentWeather.humidity}%</p>
            <p className="text-sm text-[#8A9994] font-['Roboto']">Humidity</p>
          </div>
          
          <div className="text-center">
            <Wind className="w-6 h-6 text-[#536F01] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#3F6358] font-['Roboto']">{currentWeather.windSpeed} km/h</p>
            <p className="text-sm text-[#8A9994] font-['Roboto']">Wind Speed</p>
          </div>
          
          <div className="text-center">
            <Gauge className="w-6 h-6 text-[#536F01] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[#3F6358] font-['Roboto']">{currentWeather.pressure} hPa</p>
            <p className="text-sm text-[#8A9994] font-['Roboto']">Pressure</p>
          </div>
        </div>
      </div>

      {/* Hourly Forecast */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
        <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">24-Hour Forecast</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {hourlyForecast.map((hour, index) => {
            const HourIcon = hour.icon;
            return (
              <div key={index} className="text-center p-3 bg-white/50 rounded-lg border border-white/30">
                <p className="text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">{hour.time}</p>
                <HourIcon className="w-6 h-6 text-[#E8B100] mx-auto mb-2" />
                <p className="text-lg font-bold text-[#3F6358] font-['Roboto']">{hour.temp}°</p>
                <p className="text-xs text-[#8A9994] font-['Roboto'] mb-1">{hour.condition}</p>
                <div className="flex items-center justify-center space-x-1">
                  <Droplets className="w-3 h-3 text-blue-500" />
                  <span className="text-xs text-blue-600 font-['Roboto']">{hour.rain}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Forecast */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
        <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">7-Day Forecast</h3>
        
        <div className="space-y-3">
          {weeklyForecast.map((day, index) => {
            const DayIcon = day.icon;
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-lg border border-white/30 hover:bg-white/70 transition-colors duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-16">
                    <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">{day.day}</p>
                  </div>
                  <DayIcon className="w-6 h-6 text-[#E8B100]" />
                  <div>
                    <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">{day.condition}</p>
                    <div className="flex items-center space-x-2">
                      <Droplets className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-600 font-['Roboto']">{day.rain}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#3F6358] font-['Roboto']">{day.high}°</p>
                    <p className="text-sm text-[#8A9994] font-['Roboto']">{day.low}°</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Agricultural Insights */}
      <div className="bg-gradient-to-br from-[#E8B100]/10 to-[#FCE2AD]/20 rounded-xl p-6 border border-[#E8B100]/30">
        <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">AI Agricultural Insights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">Irrigation Recommendation</p>
                <p className="text-sm text-[#8A9994] font-['Roboto']">Reduce watering by 30% due to expected rainfall in 6 hours</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#E8B100] rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">Crop Protection</p>
                <p className="text-sm text-[#8A9994] font-['Roboto']">Apply fungicide before rain to prevent disease outbreak</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">Harvest Window</p>
                <p className="text-sm text-[#8A9994] font-['Roboto']">Optimal harvest conditions expected Thursday-Friday</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
              <div>
                <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">Weather Alert</p>
                <p className="text-sm text-[#8A9994] font-['Roboto']">Strong winds expected Wednesday - secure equipment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}