"use client"
import { useState } from 'react';
import { MessageCircle, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function ChatLoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle authentication logic here
    alert(`${isLogin ? 'Login' : 'Sign up'} attempted with email: ${formData.email}`);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', username: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-3 sm:p-4 lg:p-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-16 sm:-top-40 sm:-right-32 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-16 sm:-bottom-40 sm:-left-32 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 left-20 sm:top-40 sm:left-40 w-32 h-32 sm:w-60 sm:h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Login/Signup Card */}
      <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Join ChatApp'}
          </h1>
          <p className="text-sm sm:text-base text-white/70 px-2">
            {isLogin 
              ? 'Sign in to continue your conversations' 
              : 'Create an account to start chatting'
            }
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4 sm:space-y-6">
          {/* Username field (only for signup) */}
          {!isLogin && (
            <div className="group">
              <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/50 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-10 sm:px-12 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Choose a username"
                  required={!isLogin}
                />
              </div>
            </div>
          )}

          {/* Email field */}
          <div className="group">
            <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/50 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-10 sm:px-12 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password field */}
          <div className="group">
            <label className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/50 group-focus-within:text-purple-400 transition-colors" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-10 sm:px-12 pr-10 sm:pr-12 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot password (only for login) */}
          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                className="text-purple-300 hover:text-purple-200 text-xs sm:text-sm font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-sm sm:text-base"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4 sm:my-6">
          <div className="flex-1 border-t border-white/20"></div>
          <span className="px-3 sm:px-4 text-white/50 text-xs sm:text-sm">or</span>
          <div className="flex-1 border-t border-white/20"></div>
        </div>

        {/* Social login buttons */}
        <div className="space-y-2 sm:space-y-3">
          <button
            type="button"
            className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="truncate">Continue with Google</span>
          </button>
          
        </div>

        {/* Toggle between login/signup */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-white/70 text-xs sm:text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleMode}
              className="ml-1 sm:ml-2 text-purple-300 hover:text-purple-200 font-semibold transition-colors"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}