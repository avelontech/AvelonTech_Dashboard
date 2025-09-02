import React, { useState } from 'react';
import { TrendingUp, Calendar, Download, Filter, BarChart3, LineChart, PieChart } from 'lucide-react';

const yieldData = [
  { month: 'Jan', wheat: 2.1, corn: 1.8, soybeans: 1.5 },
  { month: 'Feb', wheat: 2.3, corn: 2.0, soybeans: 1.7 },
  { month: 'Mar', wheat: 2.8, corn: 2.5, soybeans: 2.1 },
  { month: 'Apr', wheat: 3.2, corn: 2.9, soybeans: 2.4 },
  { month: 'May', wheat: 3.8, corn: 3.5, soybeans: 2.9 },
  { month: 'Jun', wheat: 4.2, corn: 4.1, soybeans: 3.3 },
];

const irrigationHistory = [
  { date: '2024-01-15', zone: 'Zone A', duration: '2h 30m', waterUsed: 450, efficiency: 94 },
  { date: '2024-01-14', zone: 'Zone B', duration: '1h 45m', waterUsed: 320, efficiency: 96 },
  { date: '2024-01-13', zone: 'Zone C', duration: '3h 15m', waterUsed: 580, efficiency: 91 },
  { date: '2024-01-12', zone: 'Zone A', duration: '2h 00m', waterUsed: 380, efficiency: 95 },
  { date: '2024-01-11', zone: 'Zone D', duration: '1h 30m', waterUsed: 290, efficiency: 97 },
];

export default function DataHistorySection() {
  const [activeTab, setActiveTab] = useState('yield');
  const [chartType, setChartType] = useState('line');

  const maxYield = Math.max(...yieldData.flatMap(d => [d.wheat, d.corn, d.soybeans]));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#3F6358] font-['Roboto']">Data & History</h2>
          <p className="text-[#8A9994] font-['Roboto']">Historical trends and analytics</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-[#536F01] text-white px-4 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
            <Download className="w-4 h-4" />
            <span>Export Data</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/70 text-[#3F6358] px-4 py-2 rounded-lg border border-white/30 hover:bg-white/90 transition-colors duration-300 font-['Roboto']">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-white/50 rounded-lg p-1 border border-white/30">
        {[
          { id: 'yield', label: 'Crop Yield', icon: TrendingUp },
          { id: 'irrigation', label: 'Irrigation History', icon: Calendar },
          { id: 'weather', label: 'Weather Data', icon: BarChart3 },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-['Roboto'] ${
                activeTab === tab.id
                  ? 'bg-[#536F01] text-white shadow-lg'
                  : 'text-[#8A9994] hover:text-[#3F6358] hover:bg-white/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Yield Analytics */}
      {activeTab === 'yield' && (
        <div className="space-y-6">
          {/* Chart Controls */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto']">Crop Yield Trends</h3>
            <div className="flex space-x-2">
              {[
                { type: 'line', icon: LineChart },
                { type: 'bar', icon: BarChart3 },
                { type: 'pie', icon: PieChart },
              ].map((chart) => {
                const Icon = chart.icon;
                return (
                  <button
                    key={chart.type}
                    onClick={() => setChartType(chart.type)}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      chartType === chart.type
                        ? 'bg-[#536F01] text-white'
                        : 'bg-white/50 text-[#8A9994] hover:text-[#3F6358]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chart Display */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
            {chartType === 'line' && (
              <div className="h-64 flex items-end space-x-4">
                {yieldData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex flex-col items-center space-y-1 mb-2">
                      <div
                        className="w-full bg-[#536F01] rounded-t-lg transition-all duration-1000 ease-out"
                        style={{ height: `${(data.wheat / maxYield) * 150}px`, minHeight: '4px' }}
                      />
                      <div
                        className="w-full bg-[#E8B100] transition-all duration-1000 ease-out"
                        style={{ height: `${(data.corn / maxYield) * 150}px`, minHeight: '4px' }}
                      />
                      <div
                        className="w-full bg-[#3F6358] rounded-b-lg transition-all duration-1000 ease-out"
                        style={{ height: `${(data.soybeans / maxYield) * 150}px`, minHeight: '4px' }}
                      />
                    </div>
                    <span className="text-sm text-[#8A9994] font-['Roboto']">{data.month}</span>
                  </div>
                ))}
              </div>
            )}

            {chartType === 'bar' && (
              <div className="space-y-4">
                {['wheat', 'corn', 'soybeans'].map((crop, cropIndex) => (
                  <div key={crop} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-[#3F6358] font-['Roboto'] capitalize">{crop}</span>
                      <span className="text-sm text-[#8A9994] font-['Roboto']">
                        {yieldData[yieldData.length - 1][crop as keyof typeof yieldData[0]]} tons
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          cropIndex === 0 ? 'bg-[#536F01]' : cropIndex === 1 ? 'bg-[#E8B100]' : 'bg-[#3F6358]'
                        }`}
                        style={{
                          width: `${(yieldData[yieldData.length - 1][crop as keyof typeof yieldData[0]] / maxYield) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Legend */}
            <div className="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#536F01] rounded-full" />
                <span className="text-sm text-[#8A9994] font-['Roboto']">Wheat</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#E8B100] rounded-full" />
                <span className="text-sm text-[#8A9994] font-['Roboto']">Corn</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#3F6358] rounded-full" />
                <span className="text-sm text-[#8A9994] font-['Roboto']">Soybeans</span>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/30">
              <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-2">Total Yield (6 months)</h4>
              <p className="text-2xl font-bold text-[#536F01] font-['Roboto']">18.4 tons</p>
              <p className="text-sm text-green-600 font-['Roboto']">+12.5% vs last period</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/30">
              <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-2">Best Performing Crop</h4>
              <p className="text-2xl font-bold text-[#E8B100] font-['Roboto']">Corn</p>
              <p className="text-sm text-[#8A9994] font-['Roboto']">4.1 tons in June</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/30">
              <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-2">Growth Rate</h4>
              <p className="text-2xl font-bold text-[#3F6358] font-['Roboto']">+8.2%</p>
              <p className="text-sm text-green-600 font-['Roboto']">Monthly average</p>
            </div>
          </div>
        </div>
      )}

      {/* Irrigation History */}
      {activeTab === 'irrigation' && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto']">Recent Irrigation Activities</h3>
          
          <div className="bg-white/70 backdrop-blur-md rounded-xl border border-white/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#536F01]/10">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#3F6358] font-['Roboto']">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#3F6358] font-['Roboto']">Zone</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#3F6358] font-['Roboto']">Duration</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#3F6358] font-['Roboto']">Water Used (L)</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#3F6358] font-['Roboto']">Efficiency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {irrigationHistory.map((record, index) => (
                    <tr key={index} className="hover:bg-white/50 transition-colors duration-300">
                      <td className="px-6 py-4 text-sm text-[#8A9994] font-['Roboto']">{record.date}</td>
                      <td className="px-6 py-4 text-sm font-medium text-[#3F6358] font-['Roboto']">{record.zone}</td>
                      <td className="px-6 py-4 text-sm text-[#8A9994] font-['Roboto']">{record.duration}</td>
                      <td className="px-6 py-4 text-sm text-[#8A9994] font-['Roboto']">{record.waterUsed}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-semibold font-['Roboto'] ${
                            record.efficiency >= 95 ? 'text-green-600' : 
                            record.efficiency >= 90 ? 'text-[#E8B100]' : 'text-red-500'
                          }`}>
                            {record.efficiency}%
                          </span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                record.efficiency >= 95 ? 'bg-green-500' : 
                                record.efficiency >= 90 ? 'bg-[#E8B100]' : 'bg-red-500'
                              }`}
                              style={{ width: `${record.efficiency}%` }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Weather Data */}
      {activeTab === 'weather' && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto']">Historical Weather Data</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/30">
              <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-2">Avg Temperature</h4>
              <p className="text-2xl font-bold text-[#536F01] font-['Roboto']">23.5°C</p>
              <p className="text-sm text-[#8A9994] font-['Roboto']">Last 30 days</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/30">
              <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-2">Total Rainfall</h4>
              <p className="text-2xl font-bold text-[#E8B100] font-['Roboto']">45.2mm</p>
              <p className="text-sm text-[#8A9994] font-['Roboto']">Last 30 days</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/30">
              <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-2">Avg Humidity</h4>
              <p className="text-2xl font-bold text-[#3F6358] font-['Roboto']">68%</p>
              <p className="text-sm text-[#8A9994] font-['Roboto']">Last 30 days</p>
            </div>
            <div className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/30">
              <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-2">Sunny Days</h4>
              <p className="text-2xl font-bold text-[#536F01] font-['Roboto']">22</p>
              <p className="text-sm text-[#8A9994] font-['Roboto']">Last 30 days</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}