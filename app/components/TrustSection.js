import Image from 'next/image';

export default function TrustSection() {
  const testimonials = [
    {
      content: 'خدمات فوق‌العاده‌ای دریافت کردم. کیفیت کار بسیار بالا و تیم حرفه‌ای',
      author: 'سارا کریمی',
      role: 'مشتری VIP',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
    },
    {
      content: 'سرویس عالی و سریع. کاملاً راضی هستم و به دیگران توصیه می‌کنم',
      author: 'رضا نوری',
      role: 'مشتری VIP',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face'
    },
    {
      content: 'تجربه‌ای بی‌نظیر از خدمات لوکس. کیفیت و سرعت فوق‌العاده',
      author: 'نازنین حسینی',
      role: 'مشتری VIP',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=80&h=80&fit=crop&crop=face'
    }
  ];

  return (
    <section className="trust">
      <div className="container">
        <h2 className="section-title">نظرات مشتریان VIP</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-image">
                <Image src={testimonial.image} alt={testimonial.author} width={80} height={80} />
              </div>
              <div className="testimonial-header">
                <h4>{testimonial.author}</h4>
                <span>{testimonial.role}</span>
              </div>
              <div className="testimonial-content">
                <p>&ldquo;{testimonial.content}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
