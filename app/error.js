'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0d0d0d',
      color: '#ffffff',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#e74c3c', marginBottom: '1rem' }}>خطا!</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>مشکلی پیش آمده</h2>
      <p style={{ fontSize: '1rem', marginBottom: '2rem', maxWidth: '600px' }}>
        متأسفانه خطایی در سیستم رخ داده است. لطفاً دوباره تلاش کنید.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={reset}
          style={{
            background: 'linear-gradient(135deg, #d4af37, #f1c40f)',
            color: '#0d0d0d',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          تلاش مجدد
        </button>
        <Link 
          href="/" 
          style={{
            background: 'transparent',
            color: '#d4af37',
            padding: '12px 24px',
            borderRadius: '8px',
            border: '2px solid #d4af37',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          بازگشت به خانه
        </Link>
      </div>
    </div>
  );
}
