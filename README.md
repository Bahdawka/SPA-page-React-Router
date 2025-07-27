# React Router Project / Проект React Router

[English](#english) | [Українська](#українська)

---

## English

### Project Overview
This is a React application built with TypeScript and Vite that demonstrates the implementation of client-side routing using React Router v7. The project showcases modern React development practices including component-based architecture, navigation patterns, and responsive design.

### Features
- ✅ **Client-side routing** with React Router v7
- ✅ **TypeScript** for type safety
- ✅ **Modern React** with functional components and hooks
- ✅ **Responsive navigation** with active link highlighting
- ✅ **Layout system** with shared header and footer
- ✅ **404 error handling** with custom NotFound page
- ✅ **Programmatic navigation** using useNavigate hook
- ✅ **Clean CSS styling** with modern design patterns

### Technologies Used
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **React Router v7** - Client-side routing
- **CSS3** - Styling

#### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd react-router
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `...`

#### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Structure
```
src/
├── components/          # React components
│   ├── About.tsx       # About page component
│   ├── Contact.tsx     # Contact page component
│   ├── FooterLinks.tsx # Footer navigation
│   ├── Home.tsx        # Home page component
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Menu.tsx        # Navigation menu
│   └── NotFound.tsx    # 404 error page
├── config/             # Configuration files
│   ├── router.tsx      # Router configuration
│   └── routes.config.ts # Routes definition
├── App.tsx             # Main App component
├── main.tsx            # Application entry point
├── index.css           # Global styles
└── vite-env.d.ts       # Vite type definitions
```

### Key Components
- **Layout**: Main wrapper component with navigation and footer
- **Menu**: Dynamic navigation based on routes configuration
- **Router**: Centralized routing configuration with nested routes
- **NotFound**: Custom 404 page with navigation back to home

---

## Українська

### Огляд Проекту
Це React додаток, побудований з TypeScript та Vite, який демонструє реалізацію клієнтського маршрутизації за допомогою React Router v7. Проект показує сучасні практики розробки React, включаючи компонентну архітектуру, патерни навігації та адаптивний дизайн.

### Функціональність
- ✅ **Клієнтська маршрутизація** з React Router v7
- ✅ **TypeScript** для типізації
- ✅ **Сучасний React** з функціональними компонентами та хуками
- ✅ **Адаптивна навігація** з підсвічуванням активних посилань
- ✅ **Система макетів** зі спільним заголовком та підвалом
- ✅ **Обробка 404 помилок** з кастомною сторінкою NotFound
- ✅ **Програмна навігація** з використанням хука useNavigate
- ✅ **Чистий CSS стиль** з сучасними дизайн-патернами

### Використані Технології
- **React 18** - UI бібліотека
- **TypeScript** - Типізація
- **Vite** - Інструмент збірки та сервер розробки
- **React Router v7** - Клієнтська маршрутизація
- **CSS3** - Стилізація

#### Встановлення
1. Клонуйте репозиторій:
```bash
git clone <repository-url>
cd react-router
```

2. Встановіть залежності:
```bash
npm install
```

3. Запустіть сервер розробки:
```bash
npm run dev
```

4. Відкрийте браузер та перейдіть за адресою `...`

#### Доступні Скрипти
- `npm run dev` - Запуск сервера розробки
- `npm run build` - Збірка для продакшну
- `npm run preview` - Перегляд продакшн збірки

### Структура Проекту
```
src/
├── components/          # React компоненти
│   ├── About.tsx       # Компонент сторінки "Про нас"
│   ├── Contact.tsx     # Компонент сторінки "Контакти"
│   ├── FooterLinks.tsx # Навігація в підвалі
│   ├── Home.tsx        # Компонент головної сторінки
│   ├── Layout.tsx      # Основний макет
│   ├── Menu.tsx        # Навігаційне меню
│   └── NotFound.tsx    # Сторінка 404 помилки
├── config/             # Файли конфігурації
│   ├── router.tsx      # Конфігурація роутера
│   └── routes.config.ts # Визначення маршрутів
├── App.tsx             # Головний компонент App
├── main.tsx            # Точка входу додатку
├── index.css           # Глобальні стилі
└── vite-env.d.ts       # Типи для Vite
```

### Ключові Компоненти
- **Layout**: Основний компонент-обгортка з навігацією та підвалом
- **Menu**: Динамічна навігація на основі конфігурації маршрутів
- **Router**: Централізована конфігурація маршрутизації з вкладеними маршрутами
- **NotFound**: Кастомна сторінка 404 з навігацією назад на головну

### Автор
Розроблено як демонстраційний проект для вивчення React Router та сучасних практик розробки React додатків. Bohdan Horobets 2025
