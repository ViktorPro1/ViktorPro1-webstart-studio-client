import React from "react";
import { BookOpen, MessageCircle, Share2 } from "lucide-react";
import "./BlogInfo.css";
import "./BlogInfo.mobile.css";

const BlogInfo = () => {
  return (
    <>
      <div className="blog-info-page">
        <div className="blog-info-container">
          <div className="blog-info-header">
            <div className="blog-info-icon-large">
              <BookOpen size={60} />
            </div>
            <h2>📰 Що таке блоги та новини?</h2>
          </div>

          <p className="blog-info-intro">
            <strong>Блоги та новини</strong> — це платформи для публікації
            статей, новин, оновлень або іншого контенту на сайті.
          </p>

          <p className="blog-info-description">
            Блог дозволяє ділитися своїми думками, новинами чи ідеями, а новини
            допомагають тримати аудиторію в курсі важливих подій.
          </p>

          <section className="blog-info-features">
            <h3>📝 Як це працює?</h3>
            <div className="features-grid">
              <div className="blog-feature-card">
                <BookOpen size={40} />
                <p>Публікація статей, новин та оновлень</p>
              </div>
              <div className="blog-feature-card">
                <MessageCircle size={40} />
                <p>Додавання коментарів та інтерактивних елементів</p>
              </div>
              <div className="blog-feature-card">
                <Share2 size={40} />
                <p>Можливість поширення в соціальних мережах</p>
              </div>
            </div>
          </section>

          <section className="blog-info-benefits">
            <h3>🎯 Навіщо це потрібно?</h3>
            <ul>
              <li>
                ✅ Для підтримки активної взаємодії з вашими користувачами
              </li>
              <li>✅ Для покращення SEO вашого сайту</li>
              <li>
                ✅ Для залучення нових відвідувачів через регулярні публікації
              </li>
            </ul>
          </section>

          <section className="blog-info-summary">
            <h3>💡 Простими словами:</h3>
            <p>
              Блог та новини — це простий спосіб тримати ваших відвідувачів у
              курсі подій та залучати нову аудиторію через цікавий та актуальний
              контент.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogInfo;
