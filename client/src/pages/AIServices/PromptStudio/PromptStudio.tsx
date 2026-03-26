import React from "react";
import "./PromptStudio.css";
import "./PromptStudio.mobile.css";

const PromptStudio = () => {
  return (
    <div className="prompt-studio">
      <div className="prompt-studio-container">
        <div className="prompt-studio-hero">
          <div className="prompt-studio-badge">🤖 AI-Powered</div>
          <h1 className="prompt-studio-title">AI Prompt Studio</h1>
          <p className="prompt-studio-description">
            Створюйте професійні промпти для ChatGPT, Claude, Midjourney та
            інших AI-інструментів. Базовий інструмент для розуміння логіки
            створення запитів до штучного інтелекту.
          </p>
        </div>

        <div className="prompt-studio-features">
          <div className="prompt-studio-feature">
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">Інтуїтивний редактор</h3>
            <p className="feature-text">
              Створюйте промпти за допомогою зручного конструктора з підказками
              та шаблонами
            </p>
          </div>

          <div className="prompt-studio-feature">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Готові шаблони</h3>
            <p className="feature-text">
              Використовуйте перевірені шаблони для різних завдань: тексти, код,
              зображення
            </p>
          </div>

          <div className="prompt-studio-feature">
            <div className="feature-icon">📚</div>
            <h3 className="feature-title">Навчальні матеріали</h3>
            <p className="feature-text">
              Вивчайте основи промптингу на реальних прикладах та отримуйте
              поради
            </p>
          </div>

          <div className="prompt-studio-feature">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Швидкий результат</h3>
            <p className="feature-text">
              Миттєво тестуйте створені промпти та покращуйте їх за допомогою
              AI-асистента
            </p>
          </div>
        </div>

        <div className="prompt-studio-cta">
          <div className="cta-content">
            <h2 className="cta-title">Готові почати створювати промпти?</h2>
            <p className="cta-text">
              Спробуйте базовий інструмент для створення промптів та зрозумійте,
              як це працює. Це допоможе вам ефективніше працювати з
              AI-інструментами.
            </p>
            <a
              href="https://ai-prompt-studio-webstart.netlify.app/"
              className="prompt-cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="button-text">Спробувати безкоштовно</span>
              <span className="button-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="prompt-studio-info">
          <div className="info-card">
            <h3 className="info-title">🎓 Для початківців</h3>
            <p className="info-text">
              Ідеальний інструмент для тих, хто тільки починає вивчати
              промптинг. Зрозумійте логіку створення запитів до AI без складних
              термінів.
            </p>
          </div>

          <div className="info-card">
            <h3 className="info-title">💼 Для професіоналів</h3>
            <p className="info-text">
              Якщо вам потрібен точний і ефективний промпт для конкретної
              задачі, скористайтеся нашим сервісом{" "}
              <strong>індивідуального виготовлення промптів</strong>.
            </p>
          </div>

          <div className="info-card">
            <h3 className="info-title">🚀 Безкоштовно</h3>
            <p className="info-text">
              AI Prompt Studio доступний безкоштовно для всіх користувачів.
              Створюйте необмежену кількість промптів та експериментуйте.
            </p>
          </div>
        </div>

        <div className="prompt-studio-examples">
          <h2 className="examples-title">Що можна створити?</h2>
          <div className="examples-grid">
            <div className="example-item">
              <span className="example-emoji">📝</span>
              <span className="example-text">
                Промпти для генерації текстів
              </span>
            </div>
            <div className="example-item">
              <span className="example-emoji">🎨</span>
              <span className="example-text">
                Запити для створення зображень
              </span>
            </div>
            <div className="example-item">
              <span className="example-emoji">💻</span>
              <span className="example-text">Промпти для генерації коду</span>
            </div>
            <div className="example-item">
              <span className="example-emoji">🤖</span>
              <span className="example-text">Налаштування чат-ботів</span>
            </div>
            <div className="example-item">
              <span className="example-emoji">📊</span>
              <span className="example-text">Аналітичні запити</span>
            </div>
            <div className="example-item">
              <span className="example-emoji">✍️</span>
              <span className="example-text">Копірайтинг та контент</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptStudio;
