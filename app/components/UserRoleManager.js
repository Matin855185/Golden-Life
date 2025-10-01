'use client';

import { useState, useEffect } from 'react';

export default function UserRoleManager() {
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // شبیه‌سازی بررسی احراز هویت و نقش کاربر
    const checkUserAuth = () => {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setUserRole(user.role);
        setIsAuthenticated(true);
      }
    };

    checkUserAuth();
  }, []);

  const loginUser = (userData) => {
    localStorage.setItem('currentUser', JSON.stringify(userData));
    setUserRole(userData.role);
    setIsAuthenticated(true);
  };

  const logoutUser = () => {
    localStorage.removeItem('currentUser');
    setUserRole(null);
    setIsAuthenticated(false);
  };

  const hasPermission = (requiredRole) => {
    if (!isAuthenticated) return false;
    
    const roleHierarchy = {
      'guest': 0,
      'user': 1,
      'technician': 2,
      'consultant': 3,
      'admin': 4
    };

    return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
  };

  return {
    userRole,
    isAuthenticated,
    loginUser,
    logoutUser,
    hasPermission
  };
}
