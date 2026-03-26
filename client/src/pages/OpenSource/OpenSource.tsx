import React from "react";
import "./OpenSource.css";
import "./OpenSource.mobile.css";

const OpenSource: React.FC = () => {
  return (
    <div className="open-source-page">
      {/* Hero */}
      <div className="open-source-hero">
        <span className="open-source-badge">⚡ Open Source</span>
        <h1 className="open-source-title">Відкритий код</h1>
        <p className="open-source-subtitle">
          WebStart Studio підтримує культуру відкритого коду. Фронтенд платформи
          доступний публічно — вивчай, надихайся, контрибуть.
        </p>
        <a
          href="https://github.com/ViktorPro1/webstart-studio-client"
          target="_blank"
          rel="noopener noreferrer"
          className="open-source-github-btn"
        >
          Переглянути на GitHub
        </a>
      </div>

      {/* Для звичайних користувачів */}
      <div className="open-source-for-users">
        <h2 className="open-source-section-title">Чому це важливо для тебе?</h2>
        <div className="open-source-cards">
          <div className="open-source-card">
            <span className="open-source-card-icon">🔍</span>
            <h3 className="open-source-card-title">Прозорість</h3>
            <p className="open-source-card-text">
              Код платформи відкритий — це означає що нічого не приховано. Ти
              можеш бути впевнений у чесності сервісу.
            </p>
          </div>
          <div className="open-source-card">
            <span className="open-source-card-icon">🛡️</span>
            <h3 className="open-source-card-title">Довіра</h3>
            <p className="open-source-card-text">
              Відкритий код перевіряється спільнотою. Будь-хто може знайти і
              повідомити про проблему — це робить платформу безпечнішою.
            </p>
          </div>
          <div className="open-source-card">
            <span className="open-source-card-icon">🤝</span>
            <h3 className="open-source-card-title">Спільнота</h3>
            <p className="open-source-card-text">
              Платформа розвивається разом з користувачами. Твої ідеї та відгуки
              можуть стати частиною продукту.
            </p>
          </div>
        </div>
      </div>

      {/* Для розробників */}
      <div className="open-source-for-devs">
        <h2 className="open-source-section-title">Для розробників</h2>
        <div className="open-source-cards">
          <div className="open-source-card">
            <span className="open-source-card-icon">🎨</span>
            <h3 className="open-source-card-title">Фронтенд</h3>
            <p className="open-source-card-text">
              React + TypeScript + Vite. Компоненти, сторінки, стилі — все
              відкрито для вивчення.
            </p>
          </div>
          <div className="open-source-card">
            <span className="open-source-card-icon">🔒</span>
            <h3 className="open-source-card-title">Бекенд</h3>
            <p className="open-source-card-text">
              Node.js + Express + MySQL залишається закритим з міркувань
              безпеки.
            </p>
          </div>
          <div className="open-source-card">
            <span className="open-source-card-icon">📄</span>
            <h3 className="open-source-card-title">Ліцензія MIT</h3>
            <p className="open-source-card-text">
              Використовуй код вільно для власних проєктів з посиланням на
              автора.
            </p>
          </div>
        </div>
      </div>

      {/* Контрибуція */}
      <div className="open-source-contribute">
        <h2 className="open-source-contribute-title">Хочеш контрибутити?</h2>
        <p className="open-source-contribute-text">
          Знайшов баг або маєш ідею? Відкривай issue або надсилай pull request —
          будь-який внесок вітається.
        </p>
        <a
          href="https://github.com/ViktorPro1/webstart-studio-client/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="open-source-outline-btn"
        >
          Відкрити Issue на GitHub
        </a>
      </div>
    </div>
  );
};

export default OpenSource;
