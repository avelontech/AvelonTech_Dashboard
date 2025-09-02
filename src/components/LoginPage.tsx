import React, { useState } from 'react';
import { Leaf, Eye, EyeOff, Mail, Lock, User, Building, MapPin } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    farmName: '',
    location: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Direct login/signup without recaptcha
    onLogin();
  };

  return (
    <div className="relative min-h-screen font-['Roboto'] flex items-center justify-center p-4">
      {/* Background & overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/bg_img.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-br from-[#FCE2AD]/30 via-white to-[#8A9994]/20 z-0" />

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center z-10">
        {/* Left side: Branding & Features */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="AvelonTech Logo"
                  className="object-contain"
                />
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#536F01] mb-4">
              The Future of <span className="block text-[#536F01]">Smart Farming</span>
            </h2>
            <p className="text-lg text-[#3F6358] mb-8 max-w-lg">
              Harness the power of <span className="text-[#E8B100] font-semibold">AI</span>
              to optimize crop yields, reduce water usage, and maximize profitability with real-time insights and predictive analytics.
            </p>
          </div>
        </div>

        {/* Right Side - Login/Signup Form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#3F6358] mb-2">
                {isLogin ? 'Welcome Back' : 'Get Started Today'}
              </h3>
              <p className="text-[#8A9994]">
                {isLogin ? 'Sign in to your AvelonTech account' : 'Create your AvelonTech account'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <>
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#3F6358] mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A9994]" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>
                  {/* Farm Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#3F6358] mb-2">Farm Name</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A9994]" />
                      <input
                        type="text"
                        name="farmName"
                        value={formData.farmName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent transition-all duration-300"
                        placeholder="Enter your farm name"
                        required
                      />
                    </div>
                  </div>
                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-[#3F6358] mb-2">Location</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A9994]" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent transition-all duration-300"
                        placeholder="City, State/Country"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#3F6358] mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A9994]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-[#3F6358] mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A9994]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8A9994] hover:text-[#536F01] transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-[#3F6358] mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#8A9994]" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#536F01] focus:border-transparent transition-all duration-300"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#536F01] to-[#3F6358] text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {isLogin ? 'Sign In to Dashboard' : 'Create Account & Access Dashboard'}
              </button>
            </form>

            {/* Toggle Login/Signup */}
            <div className="text-center mt-6">
              <p className="text-[#8A9994]">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-[#536F01] hover:text-[#3F6358] font-semibold transition-colors duration-300"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
