import { servicesItems, additionalItems, aboutItems } from './menuData';

interface MenuItem {
  label: string;
  path?: string;
  submenu?: MenuItem[];
}

export interface SearchEntry {
  label: string;
  path: string;
}

const flattenMenu = (items: MenuItem[]): SearchEntry[] => {
  const result: SearchEntry[] = [];
  items.forEach((item: MenuItem) => {
    if (item.path && item.label) {
      result.push({ label: item.label, path: item.path });
    }
    if (item.submenu) {
      item.submenu.forEach((sub: MenuItem) => {
        if (sub.path && sub.label) {
          result.push({ label: sub.label, path: sub.path });
        }
      });
    }
  });
  return result;
};

const extraItems: SearchEntry[] = [
  // Основне меню (яких немає в menuData)
  { label: "Головна", path: "/" },
  { label: "Для кого ми", path: "/for-whom" },
  { label: "Тренди лендінгів 2025", path: "/blog/landing-trends" },
  { label: "Портфоліо, яке продає", path: "/blog/portfolio-tips" },
  { label: "Поради для резюме", path: "/blog/resume-tips" },
  { label: "Безкоштовне розміщення", path: "/blog/free-hosting-tips" },
  { label: "Реєстрація на Netlify", path: "/instruction" },
  { label: "Редагування проекту у VSCode", path: "/edit-instruction" },
  { label: "Бонус", path: "/bonus" },
  { label: "Вікторина", path: "/interactive-quiz" },
  { label: "Акція", path: "/promo" },
  { label: "Пакети", path: "/pricing" },
  { label: "Отримати проект", path: "/briefs" },

  // WordPress
  { label: "Що таке WordPress", path: "/wordpress/what-is" },
  { label: "Чим відрізняється WordPress", path: "/wordpress/differences" },
  { label: "Для кого підходить WordPress", path: "/wordpress/wp-for-whom" },
  { label: "Серверна частина WordPress", path: "/wordpress/hosting" },
  { label: "FAQ WordPress", path: "/wordpress/faq" },
  { label: "WordPress — ми в процесі", path: "/wordpress/in-progress" },

  // Бекенд
  { label: "Що таке бекенд", path: "/backend/what-is" },
  { label: "Що таке база даних", path: "/backend/database" },
  { label: "Як вони працюють разом", path: "/backend/how-it-works" },
  { label: "Коли це потрібно сайту", path: "/backend/when-needed" },
  { label: "FAQ бекенд", path: "/backend/faq" },
  { label: "Ми вивчаємо бекенд", path: "/backend/learning" },

  // Додаткові (яких немає в menuData)
  { label: "Навчання Google Ads", path: "/google-ads/learning" },
  { label: "Data Analytics", path: "/data-analytics" },

  // Платформа (яких немає в menuData)
  { label: "Соцмережі", path: "/social" },
  { label: "Сертифікат-сувенір", path: "/certificate-gift" },
  { label: "Гід Djon", path: "/assistant" },
  { label: "WebStart LAB", path: "/webstart-lab" },
  { label: "YouTube Канал", path: "/youtube-channel" },
  { label: "Новації", path: "/innovations" },
  { label: "Як ми тобі?", path: "/survey" },
  { label: "Оновлення", path: "/updates" },
  { label: "Форум платформи", path: "/user-permissions" },
  { label: "Чат з командою", path: "/messages" },
];

export const searchIndex: SearchEntry[] = [
  ...flattenMenu(servicesItems as MenuItem[]),
  ...flattenMenu(additionalItems as MenuItem[]),
  ...flattenMenu(aboutItems as MenuItem[]),
  ...extraItems,
];
