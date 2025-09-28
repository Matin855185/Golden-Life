export default function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 100;
      const targetPosition = section.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-crown"></i>
              <span>Golden Life</span>
            </div>
            <p>تجربه‌ای منحصر به فرد از خدمات VIP</p>
          </div>
          <div className="footer-section">
            <h3>لینک‌های مهم</h3>
            <ul>
              <li><a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}}>خانه</a></li>
              <li><a href="#services" onClick={(e) => {e.preventDefault(); scrollToSection('services');}}>خدمات</a></li>
              <li><a href="#request" onClick={(e) => {e.preventDefault(); scrollToSection('request');}}>ثبت درخواست</a></li>
              <li><a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}>تماس</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>تماس با ما</h3>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> ۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p><i className="fas fa-envelope"></i> info@goldenlife.ir</p>
              <p><i className="fas fa-map-marker-alt"></i> تهران، ایران</p>
            </div>
          </div>
          <div className="footer-section">
            <h3>شبکه‌های اجتماعی</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; ۲۰۲۴ Golden Life. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
