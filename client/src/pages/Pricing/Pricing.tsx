import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { Link } from "react-router-dom";

import "./Pricing.css";
import "./Pricing.mobile.css";

interface ServiceItem {
  name: string;
  price: number;
  description: string;
}

interface ServicesData {
  portfolio: ServiceItem[];
  resume: ServiceItem[];
  sites: ServiceItem[];
}

interface AdditionalOption {
  id: string;
  label: string;
  price: number;
}

const servicesData: ServicesData = {
  portfolio: [
    {
      name: "Developer Style",
      price: 1750,
      description:
        "Мінімалістичний дизайн для розробників із темною темою. Включає code snippets, GitHub інтеграцію та технічний стек. Підходить для Frontend/Backend розробників, DevOps інженерів.",
    },
    {
      name: "Minimal Style",
      price: 3200,
      description:
        "Елегантність у простоті — акцент на типографіці та контенті. Чистий дизайн, швидке завантаження. Підходить для дизайнерів, письменників, фотографів.",
    },
    {
      name: "Modern Gradient",
      price: 3900,
      description:
        "Яскраві градієнти, 3D ефекти та сміливі творчі рішення. Анімовані градієнти, smooth scrolling, інтерактивність. Підходить для креативних професій, UI/UX дизайнерів, ілюстраторів.",
    },
    {
      name: "Premium",
      price: 4900,
      description:
        "Преміальний досвід для топових фахівців та керівників. Розкішний дизайн, відео-презентації, анімації преміум, ексклюзивність. Підходить для топ-менеджерів, консультантів, бізнес-тренерів.",
    },
  ],
  resume: [
    {
      name: "Classic",
      price: 1050,
      description:
        "Діловий стиль для будь-якої галузі. PDF Export, ATS-friendly, одна сторінка. Найкраще для позицій від junior до mid-senior рівня.",
    },
    {
      name: "Creative",
      price: 1750,
      description:
        "Яскраві кольори та сучасний макет для творчих спеціальностей. Кастомні секції, візуальна таймлайн, інтеграція портфоліо. Найкраще для дизайнерів та маркетологів.",
    },
    {
      name: "Minimal",
      price: 1400,
      description:
        "Чистий дизайн без зайвого. Одна колонка, максимальна читабельність, швидке завантаження. Найкраще для tech та engineering позицій.",
    },
    {
      name: "Premium",
      price: 2800,
      description:
        "Executive дизайн з преміальною типографікою. Двосторінковий варіант, кастомні іконки, VIP типографіка. Найкраще для C-level та management позицій.",
    },
  ],
  sites: [
    {
      name: "Ресторан «Горіх»",
      price: 2800,
      description:
        "Елегантний лендінг для ресторану авторської кухні з меню та онлайн-бронюванням столів. Конверсія 18%. Функціонал: онлайн-бронювання, меню з цінами, атмосфера, контакти.",
    },
    {
      name: "FORMA Studio",
      price: 2800,
      description:
        "Портфоліо студії графічного дизайну: брендинг, упаковка, SMM та UI/UX дизайн. Конверсія 22%. Функціонал: портфоліо, послуги та ціни, відгуки, форма заявки.",
    },
    {
      name: "Святкуй!",
      price: 3900,
      description:
        "Організація дитячих свят під ключ у Києві: аніматори, декор, торти та фотозони. Конверсія 20%. Функціонал: пакети послуг, теми свят, відгуки батьків, замовлення.",
    },
    {
      name: "CleanHome",
      price: 3900,
      description:
        "Клінінг квартир, будинків та офісів у Києві: підтримуюче, генеральне та після ремонту. Конверсія 15%. Функціонал: калькулятор ціни, 3 типи прибирання, гарантія якості, онлайн-замовлення.",
    },
    {
      name: "Коуч Олена Марченко",
      price: 4200,
      description:
        "Особистий лендінг ICF-коуча: програми від 2 500 грн, 200+ клієнтів, безкоштовна консультація. Конверсія 25%. Функціонал: програми коучингу, про коуча, відгуки, безкоштовна сесія.",
    },
    {
      name: "ФінПро",
      price: 5600,
      description:
        "Бухгалтерський аутсорсинг для ФОП та ТОВ: 3 тарифи від 1 500 грн/міс, 500+ клієнтів, 0 штрафів. Конверсія 22%. Функціонал: тарифи та ціни, послуги, FAQ, безкоштовна консультація.",
    },
  ],
};

const additionalOptionsByType: Record<string, AdditionalOption[]> = {
  portfolio: [
    { id: "opt-adaptive", label: "Адаптація для смартфонів", price: 1050 },
    { id: "opt-seo", label: "SEO оптимізація", price: 560 },
    { id: "opt-support", label: "Технічна підтримка 1 місяць", price: 420 },
    {
      id: "opt-forms",
      label: "Інтеграція форм зворотного зв'язку",
      price: 280,
    },
    { id: "opt-analytics", label: "Підключення Google Analytics", price: 210 },
  ],
  resume: [
    { id: "opt-pdf", label: "Експорт у PDF формат", price: 140 },
    { id: "opt-support", label: "Технічна підтримка 1 місяць", price: 420 },
    { id: "opt-seo", label: "SEO оптимізація", price: 350 },
  ],
  sites: [
    { id: "opt-adaptive", label: "Адаптація для смартфонів", price: 1050 },
    { id: "opt-seo", label: "SEO оптимізація", price: 560 },
    { id: "opt-support", label: "Технічна підтримка 1 місяць", price: 420 },
    {
      id: "opt-forms",
      label: "Інтеграція форм зворотного зв'язку",
      price: 280,
    },
    { id: "opt-analytics", label: "Підключення Google Analytics", price: 210 },
    { id: "opt-chat", label: "Онлайн-чат або чат-бот", price: 350 },
  ],
};

type ServiceType = keyof ServicesData;

const Pricing: React.FC = () => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<ServiceType | "">("");
  const [selectedOption, setSelectedOption] = useState<ServiceItem | null>(
    null,
  );
  const [basePrice, setBasePrice] = useState<number>(0);
  const [showAdditional, setShowAdditional] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [checkboxValues, setCheckboxValues] = useState<Record<string, number>>(
    {},
  );

  const togglePricing = (): void => setShowTable(!showTable);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value as ServiceType | "";
    setServiceType(value);
    setSelectedOption(null);
    setBasePrice(0);
    setShowAdditional(false);
    setShowResult(false);
    setCheckboxValues({});
  };

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const index = parseInt(e.target.value);
    if (!serviceType || isNaN(index)) {
      setSelectedOption(null);
      setBasePrice(0);
      setShowAdditional(false);
      setShowResult(false);
      return;
    }
    const option = servicesData[serviceType][index];
    setSelectedOption(option);
    setBasePrice(option.price);
    setShowAdditional(true);
    setShowResult(true);
    setCheckboxValues({});
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = parseInt(e.target.value);
    setCheckboxValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.checked ? val : 0,
    }));
  };

  const totalPrice =
    basePrice +
    Object.values(checkboxValues).reduce((acc, curr) => acc + curr, 0);

  const resetCalculator = (): void => {
    setServiceType("");
    setSelectedOption(null);
    setBasePrice(0);
    setShowAdditional(false);
    setShowResult(false);
    setCheckboxValues({});
  };

  const getCategoryName = (category: ServiceType): string => {
    const names: Record<ServiceType, string> = {
      portfolio: "Портфоліо",
      resume: "Резюме",
      sites: "Сайти",
    };
    return names[category];
  };

  const currentOptions = serviceType
    ? additionalOptionsByType[serviceType]
    : [];

  return (
    <section className="Pricing-section">
      {/* ПЕРША СЕКЦІЯ */}
      <div className="Pricing-container">
        <div className="Pricing-emoji">💰</div>
        <h2 className="Pricing-title">Пакети</h2>
        <p className="Pricing-text">
          Оберіть напрямок і варіант — калькулятор одразу покаже орієнтовну
          вартість. Всі ціни вказані в гривнях і є відправною точкою для
          обговорення. Фінальна вартість узгоджується індивідуально після
          консультації.
        </p>
        <button
          className="Pricing-toggleBtn"
          aria-expanded={showTable}
          aria-controls="PricingTable"
          onClick={togglePricing}
        >
          {showTable ? "Сховати пакети" : "Переглянути всі пакети"}
        </button>
      </div>

      {/* ТЕКСТОВИЙ ОПИС ПАКЕТІВ */}
      {showTable && (
        <div className="Pricing-description">
          {Object.entries(servicesData).map(([category, items]) => (
            <div key={category} className="Pricing-serviceCategory">
              <h3 className="Pricing-titleCategory">
                {getCategoryName(category as ServiceType)}
              </h3>
              {items.map((item: ServiceItem, i: number) => (
                <div key={i} className="Pricing-serviceItemDescription">
                  <strong>
                    {item.name} — {item.price.toLocaleString("uk-UA")} грн
                  </strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
          <p className="Pricing-disclaimer">
            * Наведені приклади є орієнтовними. Кожен проєкт виконується
            індивідуально — фінальна вартість залежить від ваших потреб і
            узгоджується на консультації.
          </p>
        </div>
      )}

      {/* КАЛЬКУЛЯТОР */}
      <div className="Pricing-calculator">
        <h1 className="Pricing-mainTitle">Ми пропонуємо — ви обираєте</h1>

        <div className="Pricing-group">
          <label htmlFor="service-type">Оберіть напрямок:</label>
          <select
            id="service-type"
            value={serviceType}
            onChange={handleTypeChange}
          >
            <option value="">-- Оберіть напрямок --</option>
            <option value="portfolio">Портфоліо</option>
            <option value="resume">Резюме</option>
            <option value="sites">Сайти</option>
          </select>
        </div>

        {serviceType && (
          <div className="Pricing-group">
            <label htmlFor="service-option">Оберіть варіант:</label>
            <select
              id="service-option"
              onChange={handleOptionChange}
              defaultValue=""
            >
              <option value="">-- Оберіть варіант --</option>
              {servicesData[serviceType].map((opt: ServiceItem, i: number) => (
                <option key={i} value={i}>
                  {opt.name} — {opt.price.toLocaleString("uk-UA")} грн
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Опис обраного варіанту */}
        {selectedOption && (
          <div className="Pricing-optionDesc">
            <span className="Pricing-optionDesc__icon">ℹ️</span>
            <p>{selectedOption.description}</p>
          </div>
        )}

        {/* Додаткові опції — залежать від типу */}
        {showAdditional && currentOptions.length > 0 && (
          <div className="Pricing-group">
            <label>Додаткові опції:</label>
            <div className="Pricing-checkboxGroup">
              {currentOptions.map((opt) => (
                <label key={opt.id}>
                  <input
                    type="checkbox"
                    id={opt.id}
                    value={opt.price}
                    checked={!!checkboxValues[opt.id]}
                    onChange={handleCheckboxChange}
                  />
                  {opt.label} (+{opt.price.toLocaleString("uk-UA")} грн)
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Результат */}
        {showResult && (
          <div className="Pricing-result">
            <div className="Pricing-resultLabel">Орієнтовна вартість:</div>
            <div className="Pricing-resultPrice">
              {totalPrice.toLocaleString("uk-UA")} грн
            </div>
            <p className="Pricing-resultNote">
              Фінальна ціна узгоджується після консультації
            </p>
          </div>
        )}

        {/* CTA після результату */}
        {showResult && (
          <div className="Pricing-cta">
            <Link
              to="/briefs"
              className="Pricing-ctaBtn Pricing-ctaBtn--primary"
            >
              📋 Заповнити бриф
            </Link>
            <Link
              to="/messages"
              className="Pricing-ctaBtn Pricing-ctaBtn--secondary"
            >
              💬 Обговорити в чаті
            </Link>

            <p className="Pricing-cabinetNote">
              💡 Оформити замовлення можна в{" "}
              <Link to="/my-account" className="Pricing-cabinetLink">
                особистому кабінеті
              </Link>
            </p>
          </div>
        )}

        {showResult && (
          <button className="Pricing-resetBtn" onClick={resetCalculator}>
            Очистити
          </button>
        )}
      </div>
    </section>
  );
};

export default Pricing;
