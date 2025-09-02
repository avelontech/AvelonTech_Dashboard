import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Bug } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Low Soil Moisture',
    message: 'Zone A requires irrigation within 2 hours',
    time: '5 min ago',
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: 'success',
    title: 'Irrigation Complete',
    message: 'Zone B irrigation cycle completed successfully',
    time: '1 hour ago',
    icon: CheckCircle,
  },
  {
    id: 3,
    type: 'info',
    title: 'Weather Update',
    message: 'Rain expected in 6 hours - irrigation scheduled adjusted',
    time: '2 hours ago',
    icon: Clock,
  },
  {
    id: 4,
    type: 'danger',
    title: 'Pest Risk Detected',
    message: 'AI detected potential aphid activity in Zone C',
    time: '3 hours ago',
    icon: Bug,
  },
];

export default function AlertCard() {
  const getAlertStyle = (type: string) => {
    switch (type) {
      case 'warning':
        return 'border-l-[#E8B100] bg-[#E8B100]/10';
      case 'success':
        return 'border-l-green-500 bg-green-50';
      case 'danger':
        return 'border-l-red-500 bg-red-50';
      default:
        return 'border-l-[#536F01] bg-[#536F01]/10';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'text-[#E8B100]';
      case 'success':
        return 'text-green-500';
      case 'danger':
        return 'text-red-500';
      default:
        return 'text-[#536F01]';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto']">Recent Alerts</h4>
        <span className="text-xs text-[#8A9994] font-['Roboto']">Live Updates</span>
      </div>
      
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <div
              key={alert.id}
              className={`border-l-4 p-3 rounded-r-lg border border-white/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md ${getAlertStyle(alert.type)}`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${getIconColor(alert.type)}`} />
                <div className="flex-1">
                  <h5 className="text-sm font-medium text-[#3F6358] font-['Roboto']">{alert.title}</h5>
                  <p className="text-xs text-[#8A9994] font-['Roboto'] mt-1">{alert.message}</p>
                  <p className="text-xs text-[#8A9994] font-['Roboto'] mt-1">{alert.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full text-center py-2 text-sm text-[#536F01] font-medium font-['Roboto'] hover:bg-[#536F01]/10 rounded-lg transition-colors duration-300">
        View All Alerts
      </button>
    </div>
  );
}