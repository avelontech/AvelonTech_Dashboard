import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar';
import DashboardCard from './components/DashboardCard';
import MetricCard from './components/MetricCard';
import WeatherCard from './components/WeatherCard';
import AlertCard from './components/AlertCard';
import ChartCard from './components/ChartCard';
import MapPreview from './components/MapPreview';
import IrrigationSection from './components/IrrigationSection';
import WeatherSection from './components/WeatherSection';
import DataHistorySection from './components/DataHistorySection';
import AlertsSection from './components/AlertsSection';
import MapSection from './components/MapSection';
import SettingsSection from './components/SettingsSection';
import {
  BarChart3,
  Droplets,
  CloudSun,
  TrendingUp,
  Bell,
  MapPin,
  Shield,
  Wheat,
  DollarSign,
  Users,
  Activity,
  Target,
  Zap
} from 'lucide-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveSection('overview');
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Mock data for charts
  const yieldData = [
    { label: 'Wheat', value: 85, color: '#536F01' },
    { label: 'Corn', value: 92, color: '#E8B100' },
    { label: 'Soybeans', value: 78, color: '#3F6358' },
    { label: 'Barley', value: 88, color: '#8A9994' },
  ];

  const irrigationData = [
    { label: 'Mon', value: 45, color: '#536F01' },
    { label: 'Tue', value: 62, color: '#536F01' },
    { label: 'Wed', value: 38, color: '#536F01' },
    { label: 'Thu', value: 71, color: '#536F01' },
    { label: 'Fri', value: 55, color: '#536F01' },
    { label: 'Sat', value: 49, color: '#536F01' },
    { label: 'Sun', value: 33, color: '#536F01' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'irrigation':
        return <IrrigationSection />;
      case 'weather':
        return <WeatherSection />;
      case 'data':
        return <DataHistorySection />;
      case 'alerts':
        return <AlertsSection />;
      case 'map':
        return <MapSection />;
      case 'settings':
        return <SettingsSection />;
      case 'security':
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#536F01] to-[#3F6358] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#3F6358] mb-2 font-['Roboto']">
                Security Module
              </h3>
              <p className="text-[#8A9994] mb-4 font-['Roboto']">
                Advanced security features available in full version
              </p>
              <button className="bg-gradient-to-r from-[#536F01] to-[#3F6358] text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-['Roboto']">
                Upgrade to Access
              </button>
            </div>
          </div>
        );
      default:
        return (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                title="Total Yield"
                value="12.5 tons"
                change="+8.2% vs last season"
                icon={Wheat}
                trend="up"
              />
              <MetricCard
                title="Water Efficiency"
                value="94.2%"
                change="+2.1% this month"
                icon={Droplets}
                trend="up"
              />
              <MetricCard
                title="Cost Savings"
                value="$15,430"
                change="+12% this quarter"
                icon={DollarSign}
                trend="up"
              />
              <MetricCard
                title="Farm Health Score"
                value="A+"
                change="Excellent condition"
                icon={Activity}
                trend="neutral"
              />
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Weather Card */}
              <DashboardCard title="Weather Insights" icon={CloudSun}>
                <WeatherCard />
              </DashboardCard>

              {/* Alerts Card */}
              <DashboardCard title="Smart Alerts" icon={Bell}>
                <AlertCard />
              </DashboardCard>

              {/* Map Preview */}
              <DashboardCard title="Farm Overview" icon={MapPin}>
                <MapPreview />
              </DashboardCard>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <DashboardCard title="Crop Performance" icon={TrendingUp}>
                <ChartCard title="Yield Efficiency by Crop" data={yieldData} type="bar" />
              </DashboardCard>

              <DashboardCard title="Irrigation Analytics" icon={Droplets}>
                <ChartCard title="Weekly Water Usage (Liters/Ha)" data={irrigationData} type="line" />
              </DashboardCard>
            </div>

            {/* Use Case Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard title="Small Farms" icon={Target} className="hover:bg-gradient-to-br hover:from-[#536F01]/5 hover:to-[#3F6358]/5">
                <div className="space-y-3">
                  <p className="text-sm text-[#8A9994]">
                    Efficient resource management & yield predictions for family farms
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#536F01] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Smart irrigation scheduling</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#E8B100] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Crop health monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#3F6358] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Cost optimization</span>
                    </div>
                  </div>
                </div>
              </DashboardCard>

              <DashboardCard title="Agribusinesses" icon={Users} className="hover:bg-gradient-to-br hover:from-[#E8B100]/5 hover:to-[#FCE2AD]/10">
                <div className="space-y-3">
                  <p className="text-sm text-[#8A9994]">
                    Large-scale operation optimization & comprehensive cost reduction
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#536F01] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Multi-zone management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#E8B100] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Advanced analytics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#3F6358] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Enterprise integration</span>
                    </div>
                  </div>
                </div>
              </DashboardCard>

              <DashboardCard title="Cooperatives" icon={Zap} className="hover:bg-gradient-to-br hover:from-[#3F6358]/5 hover:to-[#8A9994]/5">
                <div className="space-y-3">
                  <p className="text-sm text-[#8A9994]">
                    Multi-farm monitoring & centralized data aggregation platform
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#536F01] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Collective insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#E8B100] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Resource sharing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#3F6358] rounded-full" />
                      <span className="text-sm text-[#3F6358]">Network optimization</span>
                    </div>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FCE2AD]/30 via-white to-[#8A9994]/20 font-['Roboto']">
      {/* Add Roboto Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} onLogout={handleLogout} />
      
      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#3F6358] mb-2">
                AI-Powered Agriculture Dashboard
              </h1>
              <p className="text-[#8A9994] text-lg">
                Real-time insights for smart farming decisions
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#8A9994]">Demo Account</p>
              <p className="text-lg font-semibold text-[#3F6358]">GreenFields Farm</p>
            </div>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
}

export default App;