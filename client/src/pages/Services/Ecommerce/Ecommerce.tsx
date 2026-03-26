import React from "react";
import { ShoppingCart, CreditCard, Package, TrendingUp } from "lucide-react";
import "./Ecommerce.css";
import "./Ecommerce.mobile.css";

const Ecommerce = () => {
  return (
    <>
      <div className="ecommerce-page">
        <div className="ecommerce-container">
          <div className="ecommerce-header">
            <div className="ecommerce-icon-large">
              <ShoppingCart size={60} />
            </div>
            <h2>🛒 Що таке інтернет-магазини?</h2>
          </div>

          <p className="ecommerce-intro">
            <strong>Інтернет-магазин</strong> — це платформа для онлайн-продажу
            товарів або послуг через інтернет.
          </p>
          <p className="ecommerce-description">
            Ми допоможемо створити магазин, де ви зможете продавати свої товари,
            управляти каталогом і приймати оплату.
          </p>

          <section className="ecommerce-features">
            <h3>💼 Особливості інтернет-магазинів:</h3>
            <div className="features-grid">
              <div className="ecommerce-feature-card">
                <Package size={40} />
                <p>Легке налаштування товарів, цін та описів</p>
              </div>
              <div className="ecommerce-feature-card">
                <CreditCard size={40} />
                <p>
                  Інтеграція з платіжними системами для безпечних транзакцій
                </p>
              </div>
              <div className="ecommerce-feature-card">
                <TrendingUp size={40} />
                <p>Управління запасами та доставкою товарів</p>
              </div>
            </div>
          </section>

          <section className="ecommerce-benefits">
            <h3>🎯 Навіщо потрібен інтернет-магазин?</h3>
            <ul>
              <li>✅ Для збільшення продажів через інтернет</li>
              <li>✅ Для надання зручного шопінгу вашим клієнтам</li>
              <li>✅ Для автоматизації бізнес-процесів</li>
            </ul>
          </section>

          <section className="ecommerce-summary">
            <h3>🌍 Простими словами:</h3>
            <p>
              Інтернет-магазин — це платформа, яка дозволяє продавати товари та
              послуги онлайн, автоматизуючи продажі та полегшуючи процес покупки
              для клієнтів.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
