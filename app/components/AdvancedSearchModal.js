'use client';

import { useState } from 'react';

export default function AdvancedSearchModal({ isOpen, onClose, activeTab }) {
  if (!isOpen) return null;

  const handleAdvancedSearch = () => {
    // جمع‌آوری تمام فیلترهای پیشرفته
    const advancedFilters = {
      dealType: activeTab,
      propertyType: document.getElementById('adv-propertyType')?.value || '',
      location: document.getElementById('adv-location')?.value || '',
      minPrice: document.getElementById('adv-minPrice')?.value || '',
      maxPrice: document.getElementById('adv-maxPrice')?.value || '',
      rooms: document.getElementById('adv-rooms')?.value || '',
      size: document.getElementById('adv-size')?.value || '',
      floor: document.getElementById('adv-floor')?.value || '',
      buildingAge: document.getElementById('adv-buildingAge')?.value || '',
      parking: document.getElementById('adv-parking')?.checked || false,
      elevator: document.getElementById('adv-elevator')?.checked || false,
      storage: document.getElementById('adv-storage')?.checked || false,
      balcony: document.getElementById('adv-balcony')?.checked || false,
      furnished: document.getElementById('adv-furnished')?.checked || false,
    };

    console.log('جستجوی پیشرفته با فیلترهای:', advancedFilters);
    
    // بستن modal
    onClose();
    
    // نمایش نتایج
    let message = 'جستجوی پیشرفته انجام شد!\n\n';
    message += `نوع معامله: ${activeTab === 'buy' ? 'خرید' : 'رهن و اجاره'}\n`;
    if (advancedFilters.propertyType) message += `نوع ملک: ${advancedFilters.propertyType}\n`;
    if (advancedFilters.location) message += `مکان: ${advancedFilters.location}\n`;
    if (advancedFilters.minPrice || advancedFilters.maxPrice) {
      message += `محدوده قیمت: ${advancedFilters.minPrice || '0'} تا ${advancedFilters.maxPrice || 'نامحدود'} میلیارد تومان\n`;
    }
    if (advancedFilters.rooms) message += `تعداد اتاق: ${advancedFilters.rooms}\n`;
    if (advancedFilters.size) message += `متراژ: ${advancedFilters.size}\n`;
    if (advancedFilters.floor) message += `طبقه: ${advancedFilters.floor}\n`;
    if (advancedFilters.buildingAge) message += `سن بنا: ${advancedFilters.buildingAge}\n`;
    
    const amenities = [];
    if (advancedFilters.parking) amenities.push('پارکینگ');
    if (advancedFilters.elevator) amenities.push('آسانسور');
    if (advancedFilters.storage) amenities.push('انباری');
    if (advancedFilters.balcony) amenities.push('بالکن');
    if (advancedFilters.furnished) amenities.push('مبله');
    
    if (amenities.length > 0) {
      message += `امکانات: ${amenities.join(', ')}\n`;
    }
    
    alert(message + '\n🏠 املاک مناسب پیدا شد! برای مشاهده جزئیات با ما تماس بگیرید.');
  };

  return (
    <div className="advanced-search-modal-compact">
      <div className="modal-overlay-compact" onClick={onClose}></div>
      <div className="modal-content-compact">
        <div className="modal-header-compact">
          <h3>
            <i className="fas fa-sliders-h"></i>
            جستجوی پیشرفته
          </h3>
          <button className="modal-close-compact" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="modal-body-compact">
          <div className="advanced-form-compact">
            {/* اطلاعات کلی */}
            <div className="form-section-compact">
              <div className="form-row-compact">
                <div className="form-group-compact">
                  <label>نوع ملک</label>
                  <select id="adv-propertyType">
                    <option value="">انتخاب کنید</option>
                    <option value="apartment">آپارتمان</option>
                    <option value="house">خانه ویلایی</option>
                    <option value="villa">ویلا</option>
                    <option value="office">اداری</option>
                    <option value="commercial">تجاری</option>
                  </select>
                </div>
                <div className="form-group-compact">
                  <label>محدوده</label>
                  <input type="text" id="adv-location" placeholder="شهر، محله" />
                </div>
              </div>
            </div>

            {/* قیمت و متراژ */}
            <div className="form-section-compact">
              <div className="form-row-compact">
                <div className="form-group-compact">
                  <label>حداقل قیمت (میلیارد)</label>
                  <input type="number" id="adv-minPrice" placeholder="5" />
                </div>
                <div className="form-group-compact">
                  <label>حداکثر قیمت (میلیارد)</label>
                  <input type="number" id="adv-maxPrice" placeholder="20" />
                </div>
              </div>
              <div className="form-row-compact">
                <div className="form-group-compact">
                  <label>متراژ</label>
                  <select id="adv-size">
                    <option value="">انتخاب کنید</option>
                    <option value="50-80">50-80 متر</option>
                    <option value="80-120">80-120 متر</option>
                    <option value="120-200">120-200 متر</option>
                    <option value="200+">بالای 200 متر</option>
                  </select>
                </div>
                <div className="form-group-compact">
                  <label>تعداد اتاق</label>
                  <select id="adv-rooms">
                    <option value="">انتخاب کنید</option>
                    <option value="1">1 خواب</option>
                    <option value="2">2 خواب</option>
                    <option value="3">3 خواب</option>
                    <option value="4+">4+ خواب</option>
                  </select>
                </div>
              </div>
            </div>

            {/* امکانات */}
            <div className="form-section-compact">
              <label className="section-label">امکانات:</label>
              <div className="amenities-grid-compact">
                <label className="checkbox-label-compact">
                  <input type="checkbox" id="adv-parking" />
                  <span className="checkmark-compact"></span>
                  پارکینگ
                </label>
                <label className="checkbox-label-compact">
                  <input type="checkbox" id="adv-elevator" />
                  <span className="checkmark-compact"></span>
                  آسانسور
                </label>
                <label className="checkbox-label-compact">
                  <input type="checkbox" id="adv-storage" />
                  <span className="checkmark-compact"></span>
                  انباری
                </label>
                <label className="checkbox-label-compact">
                  <input type="checkbox" id="adv-balcony" />
                  <span className="checkmark-compact"></span>
                  بالکن
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer-compact">
          <button className="btn-cancel-compact" onClick={onClose}>
            انصراف
          </button>
          <button className="btn-search-compact" onClick={handleAdvancedSearch}>
            <i className="fas fa-search"></i>
            جستجو
          </button>
        </div>
      </div>
    </div>
  );
}
