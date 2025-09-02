import React, { useState } from 'react';
import { Bell, AlertTriangle, CheckCircle, Clock, Bug, Droplets, Thermometer, Shield, X } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'critical',
    category: 'irrigation',
    title: 'Critical Soil Moisture Alert',
    message: 'Zone A soil moisture dropped to 15% - immediate irrigation required',
    time: '2 minutes ago',
    icon: Droplets,
    actionRequired: true,
  },
  {
    id: 2,
    type: 'warning',
    category: 'pest',
    title: 'Pest Activity Detected',
    message: 'AI detected potential aphid activity in Zone C - inspection recommended',
    time: '15 minutes ago',
    icon: Bug,
    actionRequired: true,
  },
  {
    id: 3,
    type: 'info',
    category: 'weather',
    title: 'Weather Update',
    message: 'Heavy rain expected in 4 hours - irrigation schedule automatically adjusted',
    time: '1 hour ago',
    icon: Clock,
    actionRequired: false,
  },
  {
    id: 4,
    type: 'success',
    category: 'irrigation',
    title: 'Irrigation Completed',
    message: 'Zone B irrigation cycle completed successfully - 94% efficiency achieved',
    time: '2 hours ago',
    icon: CheckCircle,
    actionRequired: false,
  },
  {
    id: 5,
    type: 'warning',
    category: 'temperature',
    title: 'Temperature Alert',
    message: 'Greenhouse temperature exceeded 32°C - ventilation system activated',
    time: '3 hours ago',
    icon: Thermometer,
    actionRequired: false,
  },
  {
    id: 6,
    type: 'critical',
    category: 'security',
    title: 'Security Breach',
    message: 'Unauthorized access detected at North Gate - security team notified',
    time: '4 hours ago',
    icon: Shield,
    actionRequired: true,
  },
];

export default function AlertsSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dismissedAlerts, setDismissedAlerts] = useState<number[]>([]);

  const getAlertStyle = (type: string) => {
    switch (type) {
      case 'critical':
        return 'border-l-red-500 bg-red-50/50';
      case 'warning':
        return 'border-l-[#E8B100] bg-[#E8B100]/10';
      case 'success':
        return 'border-l-green-500 bg-green-50/50';
      default:
        return 'border-l-[#536F01] bg-[#536F01]/10';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'critical':
        return 'text-red-500';
      case 'warning':
        return 'text-[#E8B100]';
      case 'success':
        return 'text-green-500';
      default:
        return 'text-[#536F01]';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'irrigation':
        return 'bg-blue-100 text-blue-800';
      case 'pest':
        return 'bg-red-100 text-red-800';
      case 'weather':
        return 'bg-[#536F01]/20 text-[#536F01]';
      case 'temperature':
        return 'bg-orange-100 text-orange-800';
      case 'security':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAlerts = alerts.filter(alert => {
    if (dismissedAlerts.includes(alert.id)) return false;
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'action-required') return alert.actionRequired;
    return alert.type === selectedFilter;
  });

  const dismissAlert = (alertId: number) => {
    setDismissedAlerts([...dismissedAlerts, alertId]);
  };

  const criticalCount = alerts.filter(a => a.type === 'critical' && !dismissedAlerts.includes(a.id)).length;
  const warningCount = alerts.filter(a => a.type === 'warning' && !dismissedAlerts.includes(a.id)).length;
  const actionRequiredCount = alerts.filter(a => a.actionRequired && !dismissedAlerts.includes(a.id)).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#3F6358] font-['Roboto']">Smart Alerts</h2>
          <p className="text-[#8A9994] font-['Roboto']">AI-powered monitoring and notifications</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-[#536F01]" />
            <span className="text-sm font-medium text-[#3F6358] font-['Roboto']">
              {filteredAlerts.length} Active Alerts
            </span>
          </div>
        </div>
      </div>

      {/* Alert Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-800 font-['Roboto']">Critical</p>
              <p className="text-2xl font-bold text-red-600 font-['Roboto']">{criticalCount}</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
        </div>

        <div className="bg-[#E8B100]/10 border border-[#E8B100]/30 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#E8B100] font-['Roboto']">Warnings</p>
              <p className="text-2xl font-bold text-[#E8B100] font-['Roboto']">{warningCount}</p>
            </div>
            <Bell className="w-8 h-8 text-[#E8B100]" />
          </div>
        </div>

        <div className="bg-[#536F01]/10 border border-[#536F01]/30 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#536F01] font-['Roboto']">Action Required</p>
              <p className="text-2xl font-bold text-[#536F01] font-['Roboto']">{actionRequiredCount}</p>
            </div>
            <Clock className="w-8 h-8 text-[#536F01]" />
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-800 font-['Roboto']">Resolved Today</p>
              <p className="text-2xl font-bold text-green-600 font-['Roboto']">12</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-white/50 rounded-lg p-1 border border-white/30">
        {[
          { id: 'all', label: 'All Alerts' },
          { id: 'critical', label: 'Critical' },
          { id: 'warning', label: 'Warnings' },
          { id: 'action-required', label: 'Action Required' },
        ].map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 font-['Roboto'] ${
              selectedFilter === filter.id
                ? 'bg-[#536F01] text-white shadow-lg'
                : 'text-[#8A9994] hover:text-[#3F6358] hover:bg-white/50'
            }`}
          >
            <span className="font-medium">{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {filteredAlerts.length === 0 ? (
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-2">All Clear!</h3>
            <p className="text-[#8A9994] font-['Roboto']">No alerts matching your current filter.</p>
          </div>
        ) : (
          filteredAlerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                className={`border-l-4 p-4 rounded-r-xl border border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${getAlertStyle(alert.type)}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${getIconColor(alert.type)}`} />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto']">{alert.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium font-['Roboto'] ${getCategoryColor(alert.category)}`}>
                          {alert.category}
                        </span>
                        {alert.actionRequired && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium font-['Roboto']">
                            Action Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#8A9994] font-['Roboto'] mb-2">{alert.message}</p>
                      <p className="text-xs text-[#8A9994] font-['Roboto']">{alert.time}</p>
                      
                      {alert.actionRequired && (
                        <div className="flex space-x-2 mt-3">
                          <button className="bg-[#536F01] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                            Take Action
                          </button>
                          <button className="bg-white/70 text-[#3F6358] px-3 py-1 rounded-lg text-sm border border-white/30 hover:bg-white/90 transition-colors duration-300 font-['Roboto']">
                            View Details
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => dismissAlert(alert.id)}
                    className="text-[#8A9994] hover:text-red-500 transition-colors duration-300 ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Alert Settings */}
      <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
        <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">Alert Preferences</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto']">Notification Methods</h4>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                <span className="text-sm text-[#8A9994] font-['Roboto']">Email notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                <span className="text-sm text-[#8A9994] font-['Roboto']">SMS alerts for critical issues</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-[#8A9994] font-['Roboto']">Push notifications</span>
              </label>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto']">Alert Thresholds</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Soil moisture critical level</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Temperature alert threshold</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">30°C</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#8A9994] font-['Roboto']">Pest detection sensitivity</span>
                <span className="text-sm font-semibold text-[#3F6358] font-['Roboto']">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}