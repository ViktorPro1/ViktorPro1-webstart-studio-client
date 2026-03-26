import React from "react";
import { Film, Sparkles, MousePointer, Zap } from "lucide-react";
import "./Animations.css";
import "./Animations.mobile.css";

const Animations = () => {
  return (
    <>
      <div className="animations-page">
        <div className="animations-container">
          <div className="animations-header">
            <div className="animations-icon-large">
              <Film size={60} />
            </div>
            <h2>🎥 Що таке динамічні анімації?</h2>
          </div>

          <p className="animations-intro">
            <strong>Динамічні анімації</strong> — це ефекти, що додаються на
            сайт для полегшення взаємодії з користувачем і створення візуального
            інтересу.
          </p>
          <p className="animations-description">
            Анімації можуть включати рухомі елементи, переходи, ефекти при
            наведенні та інші ефекти, що роблять сайт більш інтерактивним.
          </p>

          <section className="animations-features">
            <h3>💻 Як використовуються анімації?</h3>
            <div className="features-grid">
              <div className="animations-feature-card">
                <Sparkles size={40} />
                <p>Анімації при переходах між сторінками або блоками</p>
              </div>
              <div className="animations-feature-card">
                <MousePointer size={40} />
                <p>Підсвічування важливих елементів або кнопок</p>
              </div>
              <div className="animations-feature-card">
                <Zap size={40} />
                <p>Плавні переходи між різними станами елементів на сторінці</p>
              </div>
            </div>
          </section>

          <section className="animations-benefits">
            <h3>🎯 Навіщо потрібні анімації?</h3>
            <ul>
              <li>✅ Для привертання уваги до важливих елементів на сайті</li>
              <li>
                ✅ Для покращення досвіду користувачів, зробивши сайт більш
                інтерактивним
              </li>
              <li>
                ✅ Для створення візуально привабливого та сучасного вигляду
                сайту
              </li>
            </ul>
          </section>

          <section className="animations-summary">
            <h3>💡 Простими словами:</h3>
            <p>
              Динамічні анімації дозволяють зробити сайт більш захоплюючим і
              привабливим для користувачів, додавши йому «жвавості» та
              інтуїтивно зрозумілих елементів.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Animations;
