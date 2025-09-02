import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Database, Wifi, Save, Eye, EyeOff } from 'lucide-react';

export default function SettingsSection() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    critical: true,
  });

  const settingsTabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'system', label: 'System', icon: Database },
    { id: 'connectivity', label: 'Connectivity', icon: Wifi },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-[#3F6358] font-['Roboto']">Settings</h2>
        <p className="text-[#8A9994] font-['Roboto']">Manage your account and system preferences</p>
      </div>

      {/* Settings Navigation */}
      <div className="flex space-x-1 bg-white/50 rounded-lg p-1 border border-white/30 overflow-x-auto">
        {settingsTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-['Roboto'] whitespace-nowrap ${
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

      {/* Profile Settings */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">Profile Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Smith"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="john.smith@greenfields.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Farm Name</label>
                  <input
                    type="text"
                    defaultValue="GreenFields Farm"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Location</label>
                  <input
                    type="text"
                    defaultValue="Iowa, United States"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Time Zone</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']">
                    <option>Central Time (CT)</option>
                    <option>Eastern Time (ET)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Pacific Time (PT)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button className="flex items-center space-x-2 bg-[#536F01] text-white px-6 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Settings */}
      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">Notification Preferences</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-3">Delivery Methods</h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-[#8A9994] font-['Roboto']">Email notifications</span>
                    <input
                      type="checkbox"
                      checked={notifications.email}
                      onChange={(e) => setNotifications({...notifications, email: e.target.checked})}
                      className="rounded border-gray-300"
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-[#8A9994] font-['Roboto']">SMS alerts</span>
                    <input
                      type="checkbox"
                      checked={notifications.sms}
                      onChange={(e) => setNotifications({...notifications, sms: e.target.checked})}
                      className="rounded border-gray-300"
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <span className="text-sm text-[#8A9994] font-['Roboto']">Push notifications</span>
                    <input
                      type="checkbox"
                      checked={notifications.push}
                      onChange={(e) => setNotifications({...notifications, push: e.target.checked})}
                      className="rounded border-gray-300"
                    />
                  </label>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-3">Alert Types</h4>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-[#8A9994] font-['Roboto']">Critical alerts</span>
                      <p className="text-xs text-[#8A9994] font-['Roboto']">System failures, security breaches</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.critical}
                      onChange={(e) => setNotifications({...notifications, critical: e.target.checked})}
                      className="rounded border-gray-300"
                    />
                  </label>
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-[#8A9994] font-['Roboto']">Irrigation alerts</span>
                      <p className="text-xs text-[#8A9994] font-['Roboto']">Low moisture, irrigation completion</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                  </label>
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-[#8A9994] font-['Roboto']">Weather alerts</span>
                      <p className="text-xs text-[#8A9994] font-['Roboto']">Severe weather warnings</p>
                    </div>
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                  </label>
                  <label className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-[#8A9994] font-['Roboto']">Maintenance reminders</span>
                      <p className="text-xs text-[#8A9994] font-['Roboto']">Equipment maintenance schedules</p>
                    </div>
                    <input type="checkbox" className="rounded border-gray-300" />
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button className="flex items-center space-x-2 bg-[#536F01] text-white px-6 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                <Save className="w-4 h-4" />
                <span>Save Preferences</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Security Settings */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">Security Settings</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-3">Change Password</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-3">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between p-4 bg-[#536F01]/10 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">Enable 2FA</p>
                    <p className="text-xs text-[#8A9994] font-['Roboto']">Add an extra layer of security to your account</p>
                  </div>
                  <button className="bg-[#536F01] text-white px-4 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                    Enable
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-3">Login Sessions</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">Current Session</p>
                      <p className="text-xs text-[#8A9994] font-['Roboto']">Chrome on Windows • Iowa, US</p>
                    </div>
                    <span className="text-xs text-green-600 font-['Roboto']">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-[#3F6358] font-['Roboto']">Mobile App</p>
                      <p className="text-xs text-[#8A9994] font-['Roboto']">iPhone • 2 hours ago</p>
                    </div>
                    <button className="text-xs text-red-600 hover:text-red-700 font-['Roboto']">Revoke</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button className="flex items-center space-x-2 bg-[#536F01] text-white px-6 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                <Save className="w-4 h-4" />
                <span>Update Security</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* System Settings */}
      {activeTab === 'system' && (
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">System Configuration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Data Retention Period</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']">
                    <option>6 months</option>
                    <option>1 year</option>
                    <option>2 years</option>
                    <option>5 years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Backup Frequency</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Sensor Update Interval</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']">
                    <option>5 minutes</option>
                    <option>15 minutes</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Temperature Unit</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']">
                    <option>Celsius (°C)</option>
                    <option>Fahrenheit (°F)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Area Unit</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']">
                    <option>Hectares (ha)</option>
                    <option>Acres</option>
                    <option>Square meters (m²)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">Language</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button className="flex items-center space-x-2 bg-[#536F01] text-white px-6 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                <Save className="w-4 h-4" />
                <span>Save Configuration</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Connectivity Settings */}
      {activeTab === 'connectivity' && (
        <div className="space-y-6">
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 border border-white/30">
            <h3 className="text-lg font-semibold text-[#3F6358] font-['Roboto'] mb-4">Connectivity Status</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-green-800 font-['Roboto']">Internet Connection</p>
                    <p className="text-xs text-green-600 font-['Roboto']">Connected • 45 Mbps</p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-['Roboto']">Online</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-green-800 font-['Roboto']">Sensor Network</p>
                    <p className="text-xs text-green-600 font-['Roboto']">5 of 5 sensors online</p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-['Roboto']">Connected</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-[#E8B100]/10 rounded-lg border border-[#E8B100]/30">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#E8B100] rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-[#E8B100] font-['Roboto']">Weather Service</p>
                    <p className="text-xs text-[#E8B100] font-['Roboto']">Last update: 5 minutes ago</p>
                  </div>
                </div>
                <span className="text-sm text-[#E8B100] font-['Roboto']">Active</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-green-800 font-['Roboto']">Irrigation System</p>
                    <p className="text-xs text-green-600 font-['Roboto']">All zones responsive</p>
                  </div>
                </div>
                <span className="text-sm text-green-600 font-['Roboto']">Ready</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-[#3F6358] font-['Roboto'] mb-3">Network Configuration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">WiFi Network</label>
                  <input
                    type="text"
                    defaultValue="FarmNetwork_5G"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] font-['Roboto'] mb-2">IP Address</label>
                  <input
                    type="text"
                    defaultValue="192.168.1.100"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent font-['Roboto']"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <button className="flex items-center space-x-2 bg-[#536F01] text-white px-6 py-2 rounded-lg hover:bg-[#536F01]/90 transition-colors duration-300 font-['Roboto']">
                <Save className="w-4 h-4" />
                <span>Update Settings</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}