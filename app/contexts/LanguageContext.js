'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fa');
  const [isRTL, setIsRTL] = useState(true);

  useEffect(() => {
    // بارگذاری زبان از localStorage
    const savedLanguage = localStorage.getItem('language') || 'fa';
    setLanguage(savedLanguage);
    // همیشه RTL باقی بمونه
    setIsRTL(true);
    
    // همیشه RTL - چینش عوض نشه
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = savedLanguage;
    
    // اضافه کردن کلاس زبان به body
    document.body.className = document.body.className.replace(/\b(lang-fa|lang-en)\b/g, '');
    document.body.classList.add(`lang-${savedLanguage}`);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'fa' ? 'en' : 'fa';
    // همیشه RTL باقی بمونه - چینش عوض نشه
    const newIsRTL = true;
    
    setLanguage(newLanguage);
    setIsRTL(newIsRTL);
    
    // ذخیره در localStorage
    localStorage.setItem('language', newLanguage);
    
    // همیشه RTL باقی بمونه - فقط زبان متن‌ها عوض بشه
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = newLanguage;
    
    // تغییر کلاس body
    document.body.className = document.body.className.replace(/\b(lang-fa|lang-en)\b/g, '');
    document.body.classList.add(`lang-${newLanguage}`);
    
    // انیمیشن تغییر زبان
    document.body.classList.add('language-transition');
    setTimeout(() => {
      document.body.classList.remove('language-transition');
    }, 300);
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    t: (key, params = {}) => {
      let text = translations[language][key] || key;
      // جایگزینی placeholder ها
      Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
      });
      return text;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// ترجمه‌ها
const translations = {
  fa: {
    // Header
    'home': 'خانه',
    'services': 'خدمات',
    'properties': 'املاک',
    'about': 'درباره ما',
    'contact': 'تماس',
    'login': 'ورود',
    'register': 'ثبت نام',
    'language': 'زبان',
    'light_mode': 'حالت روز',
    'dark_mode': 'حالت شب',
    'search_filter': 'فیلتر جستجو',
    'map_search': 'جستجو روی نقشه',
    'advisors': 'مشاوران',
    'vip_services': 'خدمات VIP',
    'login_register': 'ورود | ثبت نام',
    
    // Authentication
    'login_title': 'ورود به حساب کاربری',
    'register_title': 'ثبت نام در گلدن لایف',
    'email_username': 'ایمیل یا نام کاربری',
    'password': 'رمز عبور',
    'confirm_password': 'تکرار رمز عبور',
    'full_name': 'نام و نام خانوادگی',
    'first_name': 'نام',
    'last_name': 'نام خانوادگی',
    'email': 'ایمیل',
    'remember_me': 'مرا به خاطر بسپار',
    'accept_terms': 'قوانین را می پذیرم',
    'forgot_password': 'فراموشی رمز عبور؟',
    'no_account': 'هنوز ثبت نام نکردید؟',
    'join_now': 'همین حالا عضو شوید',
    'have_account': 'قبلاً ثبت نام کرده‌اید؟',
    'login_now': 'وارد شوید',
    
    // Placeholders
    'enter_email_username': 'ایمیل یا نام کاربری خود را وارد کنید',
    'enter_password': 'رمز عبور خود را وارد کنید',
    'enter_confirm_password': 'رمز عبور را مجدداً وارد کنید',
    'enter_full_name': 'نام و نام خانوادگی خود را وارد کنید',
    'enter_email': 'ایمیل خود را وارد کنید',
    
    // OTP
    'otp_title': 'کد تایید ۵ رقمی',
    'otp_subtitle': 'کد ۵ رقمی به {phone} ارسال شد.',
    'otp_label': 'کد تایید',
    'verify_code': 'تایید کد',
    'resend_code': 'ارسال مجدد کد',
    'back': 'بازگشت',
    
    // Profile
    'complete_info': 'تکمیل اطلاعات',
    'complete_info_subtitle': 'اطلاعات زیر را برای تکمیل ثبت نام وارد کنید',
    'complete_registration': 'تکمیل ثبت نام',
    
    // Hero Section
    'hero_title': 'به گلدن لایف خوش آمدید',
    'hero_subtitle': 'تجربه‌ای منحصر به فرد از خدمات VIP',
    'buy_tab': 'خرید',
    'rent_tab': 'اجاره',
    'sell_tab': 'فروش',
    'property_type': 'نوع ملک',
    'location': 'موقعیت',
    'price_range': 'محدوده قیمت',
    'area_range': 'محدوده متراژ',
    'search_properties': 'جستجوی املاک',
    'advanced_search': 'جستجوی پیشرفته',
    
    // Property Types
    'apartment': 'آپارتمان',
    'villa': 'ویلا',
    'office': 'اداری',
    'commercial': 'تجاری',
    'land': 'زمین',
    
    // Placeholders
    'select_property_type': 'نوع ملک را انتخاب کنید',
    'enter_location': 'محله یا منطقه را وارد کنید',
    'min_price': 'حداقل قیمت',
    'max_price': 'حداکثر قیمت',
    'min_area': 'حداقل متراژ',
    'max_area': 'حداکثر متراژ',
    'select_option': 'انتخاب کنید',
    'rooms': 'تعداد اتاق',
    'area': 'متراژ',
    'any_rooms': 'فرقی ندارد',
    'one_room': '۱ اتاق',
    'two_rooms': '۲ اتاق',
    'three_rooms': '۳ اتاق',
    'four_plus_rooms': '۴+ اتاق',
    
    // Services
    'vip_services_title': 'خدمات VIP ما',
    'shopping_service': 'خرید و تهیه کالا',
    'medical_service': 'خدمات پزشکی',
    'gardening_service': 'باغبانی و فضای سبز',
    'cleaning_service': 'نظافت و خانه‌داری',
    'technical_service': 'تعمیرات فنی',
    'transport_service': 'حمل و نقل',
    'security_service': 'امنیت و نگهبانی',
    'catering_service': 'پذیرایی و غذا',
    
    // Navigation Routes
    'all_properties': 'همه آگهی‌ها',
    
    // Common
    'golden_life': 'گلدن لایف',
    'real_estate_market': 'بازار تخصصی ملک',
    'close': 'بستن'
  },
  en: {
    // Header
    'home': 'Home',
    'services': 'Services',
    'properties': 'Properties',
    'about': 'About Us',
    'contact': 'Contact',
    'login': 'Login',
    'register': 'Register',
    'language': 'Language',
    'light_mode': 'Light Mode',
    'dark_mode': 'Dark Mode',
    'search_filter': 'Search Filter',
    'map_search': 'Map Search',
    'advisors': 'Advisors',
    'vip_services': 'VIP Services',
    'login_register': 'Login | Register',
    
    // Authentication
    'login_title': 'Login to Your Account',
    'register_title': 'Register at Golden Life',
    'email_username': 'Email or Username',
    'password': 'Password',
    'confirm_password': 'Confirm Password',
    'full_name': 'Full Name',
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'email': 'Email',
    'remember_me': 'Remember Me',
    'accept_terms': 'I Accept Terms',
    'forgot_password': 'Forgot Password?',
    'no_account': 'Don\'t have an account?',
    'join_now': 'Join Now',
    'have_account': 'Already have an account?',
    'login_now': 'Login',
    
    // Placeholders
    'enter_email_username': 'Enter your email or username',
    'enter_password': 'Enter your password',
    'enter_confirm_password': 'Confirm your password',
    'enter_full_name': 'Enter your full name',
    'enter_email': 'Enter your email',
    
    // OTP
    'otp_title': '5-Digit Verification Code',
    'otp_subtitle': '5-digit code sent to {phone}.',
    'otp_label': 'Verification Code',
    'verify_code': 'Verify Code',
    'resend_code': 'Resend Code',
    'back': 'Back',
    
    // Profile
    'complete_info': 'Complete Information',
    'complete_info_subtitle': 'Enter the following information to complete registration',
    'complete_registration': 'Complete Registration',
    
    // Hero Section
    'hero_title': 'Welcome to Golden Life',
    'hero_subtitle': 'Experience unique VIP services',
    'buy_tab': 'Buy',
    'rent_tab': 'Rent',
    'sell_tab': 'Sell',
    'property_type': 'Property Type',
    'location': 'Location',
    'price_range': 'Price Range',
    'area_range': 'Area Range',
    'search_properties': 'Search Properties',
    'advanced_search': 'Advanced Search',
    
    // Property Types
    'apartment': 'Apartment',
    'villa': 'Villa',
    'office': 'Office',
    'commercial': 'Commercial',
    'land': 'Land',
    
    // Placeholders
    'select_property_type': 'Select property type',
    'enter_location': 'Enter neighborhood or area',
    'min_price': 'Min Price',
    'max_price': 'Max Price',
    'min_area': 'Min Area',
    'max_area': 'Max Area',
    'select_option': 'Select',
    'rooms': 'Rooms',
    'area': 'Area',
    'any_rooms': 'Any',
    'one_room': '1 Room',
    'two_rooms': '2 Rooms',
    'three_rooms': '3 Rooms',
    'four_plus_rooms': '4+ Rooms',
    
    // Services
    'vip_services_title': 'Our VIP Services',
    'shopping_service': 'Shopping & Procurement',
    'medical_service': 'Medical Services',
    'gardening_service': 'Gardening & Landscaping',
    'cleaning_service': 'Cleaning & Housekeeping',
    'technical_service': 'Technical Repairs',
    'transport_service': 'Transportation',
    'security_service': 'Security & Guard',
    'catering_service': 'Catering & Food',
    
    // Navigation Routes
    'all_properties': 'All Properties',
    
    // Common
    'golden_life': 'Golden Life',
    'real_estate_market': 'Premium Real Estate Market',
    'close': 'Close'
  }
};
