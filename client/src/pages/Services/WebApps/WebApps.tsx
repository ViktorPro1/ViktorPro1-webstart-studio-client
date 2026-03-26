import React from "react";
import { Code, MessageSquare, Calculator, Calendar } from "lucide-react";
import "./WebApps.css";
import "./WebApps.mobile.css";

const WebApps = () => {
  return (
    <>
      <div className="webapp-page">
        <div className="webapp-container">
          <div className="webapp-header">
            <div className="webapp-icon-large">
              <Code size={60} />
            </div>
            <h2>💻 Що таке веб-додатки?</h2>
          </div>

          <p className="webapp-intro">
            <strong>Веб-додаток</strong> — це інтерактивний продукт, який працює
            в браузері та забезпечує певні функціональні можливості.
          </p>
          <p className="webapp-description">
            Це може бути калькулятор, чат-бот, система управління контентом чи
            будь-який інший інтерфейс, який взаємодіє з користувачем.
          </p>

          <section className="webapp-features">
            <h3>🖥️ Що може бути у веб-додатку?</h3>
            <div className="features-grid">
              <div className="webapps-feature-card">
                <MessageSquare size={40} />
                <p>Чат-боти для обслуговування клієнтів</p>
              </div>
              <div className="webapps-feature-card">
                <Calculator size={40} />
                <p>Калькулятори для розрахунку витрат або інших показників</p>
              </div>
              <div className="webapps-feature-card">
                <Calendar size={40} />
                <p>Системи для бронювання або планування подій</p>
              </div>
            </div>
          </section>

          <section className="webapp-benefits">
            <h3>💡 Навіщо потрібні веб-додатки?</h3>
            <ul>
              <li>✅ Для автоматизації задач</li>
              <li>✅ Для взаємодії з користувачами через зручний інтерфейс</li>
              <li>✅ Для полегшення та пришвидшення роботи</li>
            </ul>
          </section>

          <section className="webapp-summary">
            <h3>🚀 Простими словами:</h3>
            <p>
              <strong>Веб-додаток</strong> — це додаток, який працює через
              інтернет і дозволяє вам взаємодіяти з ним, використовуючи браузер.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default WebApps;
