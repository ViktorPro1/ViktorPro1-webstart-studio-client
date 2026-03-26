import React from "react";
import { Search, TrendingUp, Target, BarChart } from "lucide-react";
import "./SEOInfo.css";
import "./SEOInfo.mobile.css";

const SEOInfo = () => {
  return (
    <>
      <div className="seo-info-page">
        <div className="seo-info-container">
          <div className="seo-info-header">
            <div className="seo-info-icon-large">
              <Search size={60} />
            </div>
            <h2>🔍 Що таке SEO-оптимізація?</h2>
          </div>

          <p className="seo-info-intro">
            <strong>SEO-оптимізація</strong> — це набір методів та стратегій, що
            дозволяють покращити видимість вашого сайту в пошукових системах.
          </p>
          <p className="seo-info-description">
            Правильне SEO допоможе залучити більше трафіку та підвищити ваші
            шанси бути знайденими.
          </p>

          <section className="seo-info-features">
            <h3>📈 Основні аспекти SEO-оптимізації:</h3>
            <div className="features-grid">
              <div className="seo-feature-card">
                <Target size={40} />
                <p>Використання правильних ключових слів</p>
              </div>
              <div className="seo-feature-card">
                <BarChart size={40} />
                <p>Оптимізація контенту для користувачів та пошукових систем</p>
              </div>
              <div className="seo-feature-card">
                <TrendingUp size={40} />
                <p>Підвищення швидкості завантаження сайту</p>
              </div>
            </div>
          </section>

          <section className="seo-info-benefits">
            <h3>💡 Навіщо потрібно SEO?</h3>
            <ul>
              <li>✅ Для покращення позицій у результатах пошукових систем</li>
              <li>✅ Для збільшення органічного трафіку</li>
              <li>✅ Для залучення нових клієнтів та користувачів</li>
            </ul>
          </section>

          <section className="seo-info-summary">
            <h3>🌍 Простими словами:</h3>
            <p>
              <strong>SEO</strong> — це робота над вашим сайтом, щоб він був
              більш помітним для пошукових систем, таких як Google.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default SEOInfo;
