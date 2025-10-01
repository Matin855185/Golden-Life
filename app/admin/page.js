'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('technicians');
  const [technicianRequests, setTechnicianRequests] = useState([]);
  const [consultantRequests, setConsultantRequests] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  // شبیه‌سازی داده‌های درخواست‌ها
  useEffect(() => {
    // شبیه‌سازی درخواست‌های تکنسین
    setTechnicianRequests([
      {
        id: 1,
        fullName: 'احمد محمدی',
        email: 'ahmad@email.com',
        phone: '09123456789',
        specialization: 'لوله‌کشی',
        experience: '5-10',
        status: 'pending',
        submittedAt: '1403/07/08'
      },
      {
        id: 2,
        fullName: 'فاطمه احمدی',
        email: 'fateme@email.com',
        phone: '09987654321',
        specialization: 'برق',
        experience: '3-5',
        status: 'pending',
        submittedAt: '1403/07/07'
      }
    ]);

    // شبیه‌سازی درخواست‌های مشاور
    setConsultantRequests([
      {
        id: 1,
        fullName: 'علی رضایی',
        email: 'ali@email.com',
        phone: '09111111111',
        licenseNumber: 'RE-12345',
        experience: '6-10',
        specializations: ['خرید و فروش مسکونی', 'رهن و اجاره مسکونی'],
        status: 'pending',
        submittedAt: '1403/07/06'
      }
    ]);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // شبیه‌سازی ورود ساده
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('نام کاربری یا رمز عبور اشتباه است');
    }
  };

  const handleApprove = (type, id) => {
    if (type === 'technician') {
      setTechnicianRequests(prev =>
        prev.map(req => req.id === id ? { ...req, status: 'approved' } : req)
      );
    } else {
      setConsultantRequests(prev =>
        prev.map(req => req.id === id ? { ...req, status: 'approved' } : req)
      );
    }
  };

  const handleReject = (type, id) => {
    if (type === 'technician') {
      setTechnicianRequests(prev =>
        prev.map(req => req.id === id ? { ...req, status: 'rejected' } : req)
      );
    } else {
      setConsultantRequests(prev =>
        prev.map(req => req.id === id ? { ...req, status: 'rejected' } : req)
      );
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30',
      approved: 'bg-green-900/30 text-green-400 border-green-500/30',
      rejected: 'bg-red-900/30 text-red-400 border-red-500/30'
    };
    
    const labels = {
      pending: 'در انتظار',
      approved: 'تأیید شده',
      rejected: 'رد شده'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs border ${badges[status]}`}>
        {labels[status]}
      </span>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="golden-life-app">
        <Header />
        
        <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center py-20">
          <div className="max-w-md w-full mx-4">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                  پنل مدیریت
                </h1>
                <p className="text-gray-300">ورود به سیستم مدیریت</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="admin"
                  />
                </div>

                <div>
                  <label className="block text-yellow-400 font-semibold mb-2">
                    رمز عبور
                  </label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-yellow-500/30 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                    placeholder="admin123"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                >
                  ورود
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-sm text-center">
                  <strong>Demo:</strong> admin / admin123
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="golden-life-app">
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                  پنل مدیریت
                </h1>
                <p className="text-gray-300">مدیریت درخواست‌های ثبت‌نام</p>
              </div>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                خروج
              </button>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-6">
                <h3 className="text-yellow-400 font-semibold mb-2">تکنسین‌های در انتظار</h3>
                <p className="text-3xl font-bold text-white">
                  {technicianRequests.filter(req => req.status === 'pending').length}
                </p>
              </div>
              <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-6">
                <h3 className="text-yellow-400 font-semibold mb-2">مشاوران در انتظار</h3>
                <p className="text-3xl font-bold text-white">
                  {consultantRequests.filter(req => req.status === 'pending').length}
                </p>
              </div>
              <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-6">
                <h3 className="text-green-400 font-semibold mb-2">تأیید شده امروز</h3>
                <p className="text-3xl font-bold text-white">0</p>
              </div>
              <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-6">
                <h3 className="text-red-400 font-semibold mb-2">رد شده امروز</h3>
                <p className="text-3xl font-bold text-white">0</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 space-x-reverse mb-8">
              <button
                onClick={() => setActiveTab('technicians')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === 'technicians'
                    ? 'bg-yellow-600 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                درخواست‌های تکنسین ({technicianRequests.length})
              </button>
              <button
                onClick={() => setActiveTab('consultants')}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === 'consultants'
                    ? 'bg-yellow-600 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                درخواست‌های مشاور ({consultantRequests.length})
              </button>
            </div>

            {/* Technicians Tab */}
            {activeTab === 'technicians' && (
              <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">نام</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">ایمیل</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">تلفن</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">تخصص</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">سابقه</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">تاریخ</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">وضعیت</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicianRequests.map((request) => (
                        <tr key={request.id} className="border-t border-gray-700">
                          <td className="px-6 py-4 text-white">{request.fullName}</td>
                          <td className="px-6 py-4 text-gray-300">{request.email}</td>
                          <td className="px-6 py-4 text-gray-300">{request.phone}</td>
                          <td className="px-6 py-4 text-gray-300">{request.specialization}</td>
                          <td className="px-6 py-4 text-gray-300">{request.experience} سال</td>
                          <td className="px-6 py-4 text-gray-300">{request.submittedAt}</td>
                          <td className="px-6 py-4">{getStatusBadge(request.status)}</td>
                          <td className="px-6 py-4">
                            {request.status === 'pending' && (
                              <div className="flex space-x-2 space-x-reverse">
                                <button
                                  onClick={() => handleApprove('technician', request.id)}
                                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                >
                                  تأیید
                                </button>
                                <button
                                  onClick={() => handleReject('technician', request.id)}
                                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                >
                                  رد
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Consultants Tab */}
            {activeTab === 'consultants' && (
              <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">نام</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">ایمیل</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">تلفن</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">پروانه</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">سابقه</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">تخصص‌ها</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">تاریخ</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">وضعیت</th>
                        <th className="px-6 py-4 text-right text-yellow-400 font-semibold">عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {consultantRequests.map((request) => (
                        <tr key={request.id} className="border-t border-gray-700">
                          <td className="px-6 py-4 text-white">{request.fullName}</td>
                          <td className="px-6 py-4 text-gray-300">{request.email}</td>
                          <td className="px-6 py-4 text-gray-300">{request.phone}</td>
                          <td className="px-6 py-4 text-gray-300">{request.licenseNumber}</td>
                          <td className="px-6 py-4 text-gray-300">{request.experience} سال</td>
                          <td className="px-6 py-4 text-gray-300">
                            <div className="max-w-xs">
                              {request.specializations.slice(0, 2).join(', ')}
                              {request.specializations.length > 2 && '...'}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-300">{request.submittedAt}</td>
                          <td className="px-6 py-4">{getStatusBadge(request.status)}</td>
                          <td className="px-6 py-4">
                            {request.status === 'pending' && (
                              <div className="flex space-x-2 space-x-reverse">
                                <button
                                  onClick={() => handleApprove('consultant', request.id)}
                                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                >
                                  تأیید
                                </button>
                                <button
                                  onClick={() => handleReject('consultant', request.id)}
                                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                                >
                                  رد
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
