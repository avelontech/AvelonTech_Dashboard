import React from 'react';
import {
  BarChart3,
  Droplets,
  CloudSun,
  TrendingUp,
  Bell,
  MapPin,
  Shield,
  Leaf,
  User,
  LogOut,
  Settings
} from 'lucide-react';

const navigationItems = [
  { id: 'overview', icon: BarChart3, label: 'Overview', active: true },
  { id: 'irrigation', icon: Droplets, label: 'Irrigation' },
  { id: 'weather', icon: CloudSun, label: 'Weather Forecast' },
  { id: 'data', icon: TrendingUp, label: 'Data & History' },
  { id: 'alerts', icon: Bell, label: 'Alerts' },
  { id: 'map', icon: MapPin, label: 'Map' },
  { id: 'security', icon: Shield, label: 'Security' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onLogout: () => void;
}

export default function Sidebar({ activeSection, setActiveSection, onLogout }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#536F01] shadow-xl z-50">
      {/* Logo Section */}
      <div className="p-6 border-b border-white/20">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center">
            <img
              src="/logo.png" // path to your logo
              alt="Logo"
              className="w-30 h-10 object-contain"
            />
          </div>


        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 flex-1">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-['Roboto'] ${isActive
                    ? 'bg-white/20 backdrop-blur-sm text-white shadow-lg'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Profile Section */}
      <div className="absolute bottom-20 left-4 right-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-white font-['Roboto']">Demo User</p>
              <p className="text-xs text-white/70 font-['Roboto']">demo@avelon.com</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-2 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-['Roboto']">Logout</span>
          </button>
        </div>
      </div>

      {/* Demo Badge */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-sm text-white font-medium font-['Roboto'] text-center">
            🌱 Demo Dashboard
          </p>
          <p className="text-xs text-white/70 font-['Roboto'] text-center mt-1">
            Login to access full features
          </p>
        </div>
      </div>
    </div>
  );
}