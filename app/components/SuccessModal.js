'use client';

import { useEffect } from 'react';

export default function SuccessModal({ showModal, setShowModal }) {
  useEffect(() => {
    if (showModal) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Auto close modal after 5 seconds
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal, setShowModal]);

  if (!showModal) return null;

  return (
    <div className={`modal-overlay ${showModal ? 'modal-show' : ''}`} onClick={() => setShowModal(false)}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setShowModal(false)} aria-label="بستن">
          <i className="fas fa-times"></i>
        </button>
        <div className="modal-content-animated">
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h3 className="success-title">درخواست شما با موفقیت ثبت شد</h3>
          <p className="success-message">تیم ما در اسرع وقت با شما تماس خواهد گرفت</p>
          <div className="success-actions">
            <button className="btn-primary" onClick={() => setShowModal(false)}>
              <i className="fas fa-check"></i>
              متوجه شدم
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
