import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#0d0d0d',
      color: '#ffffff',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#d4af37', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>صفحه پیدا نشد</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>صفحه‌ای که دنبال آن می‌گردید وجود ندارد.</p>
      <Link 
        href="/" 
        style={{
          background: 'linear-gradient(135deg, #d4af37, #f1c40f)',
          color: '#0d0d0d',
          padding: '12px 24px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}
