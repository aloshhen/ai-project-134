# WEBSITE Project

> 🤖 Этот проект был автоматически сгенерирован с помощью AI Constructor Bot

## 📝 Описание

Цель: Создать универсальный одностраничный сайт для высокотехнологичной кофейной экосистемы. Сайт должен выглядеть одинаково дорого как в десктопном браузере (Chrome/Safari), так и внутри Telegram Mini App.

1. Визуальный стиль (Style Guide):

Эстетика: Минимализм в стиле Linear/Apple. Основной фон — глубокий Slate-950 (#020617).

Цвета: Акцентный "Electric Coffee" (золотисто-оранжевый градиент: from-orange-400 via-amber-500 to-yellow-600).

Эффекты: Тонкие границы border-white/10, эффект размытия стекла backdrop-blur-2xl, мягкое свечение (Radial Gradients) на заднем плане.

Типографика: Заголовки tracking-tighter font-bold, основной текст text-slate-400.

2. Структура страниц (Блоки):

Header: Адаптивное меню (Logo, Features, Pricing, Login). На мобильных устройствах — компактное, на десктопе — широкое.

Hero Section: Огромный заголовок: "Кофе. Код. Крипто." Подзаголовок о системе лояльности нового поколения. Две кнопки: "Начать работу" (сияющая) и "Документация" (outline). Добавь анимированную плавающую карточку заказа.

Bento Grid (Фишки): Сетка из 4-х карточек:

Smart Order: Иконка Coffee, описание предзаказа.

Crypto Payments: Иконка Wallet, поддержка TON и Stars (сделай эту карточку широкой).

NFT Loyalty: Иконка Trophy, уникальные бонусы.

Live Analytics: Иконка BarChart3, данные для владельцев.

Interactive "How it Works": Три вертикальных или горизонтальных шага с линиями-связками. Используй framer-motion для появления каждого шага при скролле.

Pricing: Три карточки ("Lite", "Pro", "Enterprise"). Карта "Pro" должна иметь светящуюся рамку и ярлык "Most Popular".

Footer: Полноценный футер с 4 колонками ссылок, соцсетями и копирайтом.

3. Технические требования (Universal & Smart):

Адаптивность: На десктопе (lg:) — сетка в 3-4 колонки, на мобилках — в 1.

Telegram Safety: Код должен проверять наличие window.Telegram. Если открыто в ТГ — добавить кнопку "Открыть профиль ТГ", если в браузере — скрыть её.

Анимации: - Плавный вход всех секций (initial={{ opacity: 0, y: 30 }}).

Ховер-эффект на карточках (подъем на 8px и усиление свечения).

Плавный скролл (Smooth Scroll).

Иконки: Используй только lucide-react.

## 🚀 Технологии

- React (для компонентного подхода и управления состоянием)  
- Next.js (для SSR и оптимизации производительности)  
- Tailwind CSS (для стилизации и быстрой разработки адаптивного дизайна)  
- Framer Motion (для анимаций и интерактивности)  
- Telegram Web App SDK (для интеграции с Telegram Mini App)  
- Lucide React (для иконок)

## 📁 Структура проекта

- `package.json`
- `index.html`
- `vite.config.js`
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`
- `src/main.jsx`
- `src/App.jsx`
- `src/utils/telegramCheck.js`
- `src/hooks/useScrollAnimation.js`
- `src/components/Navigation.jsx`
- `src/components/Hero.jsx`
- `src/components/BentoGrid.jsx`
- `src/components/HowItWorks.jsx`
- `src/components/Pricing.jsx`
- `src/components/Footer.jsx`
- `vercel.json`
- `.gitignore`
- `README.md`

## 🛠️ Установка

```bash
npm install
```

## ▶️ Запуск

```bash
npm start
# или
npm run dev
```

## 📋 План разработки

1.

## 📄 Лицензия

MIT

## 🤖 Создано с помощью

[AI Constructor Bot](https://t.me/construct_ai_bot) - Telegram бот для автоматической генерации проектов с помощью AI
