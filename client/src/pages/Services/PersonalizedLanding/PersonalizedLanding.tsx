import React from "react";
import { Heart, Palette, Video, Sparkles } from "lucide-react";
import "./PersonalizedLanding.css";
import "./PersonalizedLanding.mobile.css";

const PersonalizedLanding = () => {
  return (
    <>
      <div className="personalized-landing-page">
        <div className="personalized-landing-container">
          <div className="personalized-landing-header">
            <div className="personalized-landing-icon-large">
              <Heart size={60} />
            </div>
            <h2>💍 Що таке персоналізовані лендінги?</h2>
          </div>

          <p className="personalized-landing-intro">
            <strong>Персоналізовані лендінги</strong> — це унікальні сайти,
            створені для конкретних подій або цілей, наприклад, для весіль,
            виставок, конференцій або святкувань.
          </p>

          <p className="personalized-landing-description">
            Ми допомагаємо створити лендінг, який повністю відповідає вашим
            вимогам, оформлений за індивідуальним дизайном.
          </p>

          <section className="personalized-landing-features">
            <h3>🎉 Як це працює?</h3>
            <div className="features-grid">
              <div className="landing-feature-card">
                <Palette size={40} />
                <p>Дизайн лендінга, що відображає атмосферу вашої події</p>
              </div>
              <div className="landing-feature-card">
                <Video size={40} />
                <p>Додавання відео, фото, музики, побажань від гостей</p>
              </div>
              <div className="landing-feature-card">
                <Sparkles size={40} />
                <p>Ефекти, кульки, стрічки та інші елементи для вітання</p>
              </div>
            </div>
          </section>

          <section className="personalized-landing-benefits">
            <h3>💡 Навіщо це потрібно?</h3>
            <ul>
              <li>
                ✅ Для створення унікальної презентації для особливих подій
              </li>
              <li>✅ Для надання гостям незабутнього досвіду</li>
              <li>✅ Для індивідуального підходу до кожного проекту</li>
            </ul>
          </section>

          <section className="personalized-landing-summary">
            <h3>🌟 Простими словами:</h3>
            <p>
              Персоналізований лендінг — це онлайн-презентація, створена для
              конкретної події, яка буде виділятись та вражати ваших гостей.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PersonalizedLanding;
