export const siteConfig = {
  name: "Daniel Zamyatin",
  title: "Daniel Zamyatin | Full-Stack Engineer",
  description: "Independent Full-Stack Engineer specializing in Next.js, Shopify, AI (Gemini/OpenAI), n8n Automation, Docker/DigitalOcean",
  location: "Marbella, Spain",
  phone: "+34 642 37 06 71",
  email: "zamyatin.daniel@gmail.com",
  github: "https://github.com/ViVaLaDaniel",
  githubUsername: "ViVaLaDaniel",
  linkedin: "https://linkedin.com/in/zamyatindaniel",
  whatsapp: "https://wa.me/34642370671",
  headline: "Independent Full-Stack Engineer | Next.js, Shopify, AI (Gemini/OpenAI), n8n Automation, Docker/DigitalOcean",
  objective: "Seeking first official full-time role",
};

export const professionalSummary = {
  en: "Independent full-stack developer and system builder with hands-on experience creating AI-powered web applications, Shopify themes, and self-hosted infrastructure. Skilled in Next.js, React, TypeScript, and modern backend technologies. Proven ability to integrate AI APIs (Gemini, OpenAI), build automation workflows with n8n, and deploy production-ready systems using Docker and DigitalOcean. Seeking first official full-time role to apply technical skills in a collaborative team environment.",
  ru: "Независимый full-stack разработчик и системный архитектор с практическим опытом создания веб-приложений на базе AI, тем Shopify и самостоятельно размещённой инфраструктуры. Владею Next.js, React, TypeScript и современными backend-технологиями. Доказанная способность интегрировать AI API (Gemini, OpenAI), создавать автоматизированные процессы с n8n и развёртывать production-ready системы с использованием Docker и DigitalOcean. Ищу первую официальную full-time позицию для применения технических навыков в командной среде."
};

export const skills = [
  {
    category: "Frontend",
    technologies: "React, Next.js, TypeScript, Tailwind CSS",
    proficiency: 95,
    icon: "Code2"
  },
  {
    category: "Backend",
    technologies: "Node.js, Express, FastAPI, REST APIs, Webhooks",
    proficiency: 90,
    icon: "Server"
  },
  {
    category: "Shopify",
    technologies: "Liquid, Online Store 2.0 JSON, Storefront API",
    proficiency: 85,
    icon: "ShoppingBag"
  },
  {
    category: "AI/Automation",
    technologies: "Gemini/OpenAI APIs, n8n workflows, prompt engineering",
    proficiency: 90,
    icon: "Brain"
  },
  {
    category: "DevOps",
    technologies: "Docker, DigitalOcean, Nginx, GitHub Actions, Linux",
    proficiency: 80,
    icon: "Container"
  },
  {
    category: "Tools",
    technologies: "VS Code, Git, Linux terminal, Markdown documentation",
    proficiency: 95,
    icon: "Wrench"
  }
];

export const languages = [
  { name: "Russian", level: "Native", code: "ru" },
  { name: "English", level: "Professional", code: "en" },
  { name: "Ukrainian", level: "Native", code: "uk" }
];

export const experience = [
  {
    title: "Independent Full-Stack Developer & System Builder",
    period: "2023 – Present",
    location: "Remote",
    achievements: [
      {
        en: "Built AI-powered dashboard using Next.js with Gemini and OpenAI API integration for chat, code generation, and content creation",
        ru: "Создал AI-панель на Next.js с интеграцией Gemini и OpenAI API для чата, генерации кода и контента"
      },
      {
        en: "Designed and deployed n8n automation workflows for data processing and API orchestration",
        ru: "Разработал и развернул автоматизированные процессы n8n для обработки данных и оркестрации API"
      },
      {
        en: "Set up self-hosted Docker infrastructure on DigitalOcean with Nginx reverse proxy, SSL certificates, and automated GitHub Actions deployment",
        ru: "Настроил самостоятельно размещённую Docker-инфраструктуру на DigitalOcean с Nginx reverse proxy, SSL-сертификатами и автоматическим развёртыванием через GitHub Actions"
      },
      {
        en: "Created comprehensive Markdown documentation for system architecture and deployment processes",
        ru: "Создал полную Markdown-документацию для системной архитектуры и процессов развёртывания"
      }
    ]
  },
  {
    title: "Shopify Theme Developer",
    period: "2020 – 2022",
    location: "Freelance",
    achievements: [
      {
        en: "Developed custom Shopify themes using Liquid templating and Online Store 2.0 JSON architecture",
        ru: "Разработал кастомные темы Shopify с использованием Liquid-шаблонов и архитектуры Online Store 2.0 JSON"
      },
      {
        en: "Built modular, reusable theme sections with flexible customization options for merchants",
        ru: "Создал модульные, переиспользуемые секции тем с гибкими опциями кастомизации для продавцов"
      },
      {
        en: "Integrated Shopify Storefront API for custom cart and checkout experiences",
        ru: "Интегрировал Shopify Storefront API для кастомных корзин и процессов оформления заказа"
      },
      {
        en: "Created Node.js utilities for theme development workflow and asset optimization",
        ru: "Создал Node.js утилиты для рабочего процесса разработки тем и оптимизации ресурсов"
      },
      {
        en: "Optimized theme performance for faster load times and improved Lighthouse scores",
        ru: "Оптимизировал производительность тем для быстрой загрузки и улучшенных показателей Lighthouse"
      }
    ]
  }
];

export const projects = [
  {
    title: "StructuralDiet",
    description: {
      en: "Premium healthy food delivery service app. Built with Next.js 16, React 19, and Tailwind CSS v4. Features i18n, Framer Motion animations, and GSAP scroll effects.",
      ru: "Премиум сервис доставки здорового питания. Разработан на Next.js 16, React 19 и Tailwind CSS v4. Включает i18n, анимации Framer Motion и скролл-эффекты GSAP.",
    },
    longDescription: {
      en: "StructuralDiet is a high-end food delivery platform designed for health-conscious individuals. The application features a sophisticated ordering system, personalized meal plans, and a seamless user experience. \n\nKey features include:\n- **Internationalization (i18n):** Full support for multiple languages to serve a diverse customer base.\n- **Advanced Animations:** Utilizing Framer Motion and GSAP for smooth, engaging scroll effects and transitions that elevate the brand feel.\n- **Modern Tech Stack:** Built on the bleeding edge with Next.js 16 and React 19, ensuring top-tier performance and SEO.\n- **Responsive Design:** A mobile-first approach using Tailwind CSS v4 for a consistent experience across all devices.",
      ru: "StructuralDiet — это премиальная платформа доставки еды, разработанная для людей, заботящихся о здоровье. Приложение отличается сложной системой заказов, персонализированными планами питания и безупречным пользовательским интерфейсом.\n\nКлючевые особенности:\n- **Интернационализация (i18n):** Полная поддержка нескольких языков.\n- **Продвинутые анимации:** Использование Framer Motion и GSAP для плавных эффектов прокрутки и переходов.\n- **Современный стек:** Построено на Next.js 16 и React 19, что гарантирует высокую производительность.\n- **Адаптивный дизайн:** Mobile-first подход с использованием Tailwind CSS v4."
    },
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "GSAP", "i18n"],
    image: "/projects/structural-diet.png",
    gallery: ["/projects/structural-diet.png"],
    github: "https://github.com/ViVaLaDaniel/StucturalDiet",
    live: "https://stuctural-diet.vercel.app/",
    year: "2024",
  },
  {
    title: "AI Dashboard",
    year: "2025",
    description: {
      en: "Next.js application with Gemini and OpenAI integration. Features chat history, context retention, and code/content generation capabilities.",
      ru: "Next.js приложение с интеграцией Gemini и OpenAI. Включает историю чата, сохранение контекста и возможности генерации кода/контента."
    },
    longDescription: {
      en: "A powerful AI Dashboard that centralizes interactions with top-tier LLMs like Gemini and OpenAI. This tool is designed to boost productivity by providing a unified interface for various AI tasks.\n\nCapabilities:\n- **Multi-Model Support:** Switch seamlessly between Gemini and OpenAI models.\n- **Context Awareness:** The chat system retains context for more natural and effective conversations.\n- **Code & Content Generation:** Specialized modes for generating clean code snippets and high-quality written content.\n- **Secure & Scalable:** Built with best practices for API security and state management.",
      ru: "Мощная AI-панель, объединяющая взаимодействие с топовыми LLM, такими как Gemini и OpenAI. Этот инструмент создан для повышения продуктивности.\n\nВозможности:\n- **Мульти-модельная поддержка:** Легкое переключение между моделями Gemini и OpenAI.\n- **Сохранение контекста:** Чат-система помнит контекст для более естественного общения.\n- **Генерация кода и контента:** Специализированные режимы для создания чистого кода и качественных текстов."
    },
    tech: ["Next.js", "TypeScript", "Gemini API", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/ViVaLaDaniel/ai-dashboard",
    live: "https://ai-dashboard-blih.vercel.app/",
    image: "/projects/ai-dashboard.png",
    gallery: ["/projects/ai-dashboard.png"]
  },
  {
    title: "Vantage Shopify Theme",
    year: "2024",
    description: {
      en: "Modular Shopify theme built with Liquid and Tailwind CSS. Emphasizes speed, flexible sections, and clean structure for easy customization.",
      ru: "Модульная тема Shopify на Liquid и Tailwind CSS. Акцент на скорость, гибкие секции и чистую структуру для лёгкой кастомизации."
    },
    longDescription: {
      en: "Vantage is a custom-built Shopify theme focused on performance and flexibility. Unlike standard themes, Vantage leverages Tailwind CSS for rapid styling and a component-based Liquid architecture.\n\nHighlights:\n- **Speed Optimization:** Minimized bloat and optimized assets for lightning-fast load times.\n- **Online Store 2.0:** Full support for sections everywhere and JSON templates.\n- **Developer Friendly:** Clean code structure making it easy for other developers to extend and maintain.",
      ru: "Vantage — это кастомная тема Shopify, ориентированная на производительность и гибкость. В отличие от стандартных тем, Vantage использует Tailwind CSS для быстрой стилизации.\n\nОсобенности:\n- **Оптимизация скорости:** Минимизация лишнего кода и оптимизация ресурсов.\n- **Online Store 2.0:** Полная поддержка секций и JSON шаблонов.\n- **Удобство для разработчиков:** Чистая структура кода, облегчающая расширение и поддержку."
    },
    tech: ["Liquid", "Tailwind CSS", "JavaScript", "Shopify OS 2.0"],
    github: "https://github.com/ViVaLaDaniel/vantage-theme",
    live: "https://vantage-demo.myshopify.com",
    image: "/projects/vantage-theme.png",
    gallery: ["/projects/vantage-theme.png"]
  },
  {
    title: "System Status Monitor",
    year: "2024",
    description: {
      en: "Real-time monitoring tool built with Node.js and WebSockets. Tracks uptime, latency, and system health metrics.",
      ru: "Инструмент мониторинга в реальном времени на Node.js и WebSockets. Отслеживает uptime, задержки и метрики здоровья системы."
    },
    longDescription: {
      en: "A robust real-time monitoring solution for tracking the health of distributed systems. Using WebSockets, it provides instant updates on server status, latency, and uptime.\n\nFeatures:\n- **Real-Time Updates:** Zero-latency dashboard updates using WebSockets.\n- **Visual Analytics:** Interactive charts powered by Chart.js to visualize performance trends.\n- **Alerting System:** Automated notifications when metrics exceed defined thresholds.",
      ru: "Надежное решение для мониторинга здоровья распределенных систем в реальном времени. Используя WebSockets, оно обеспечивает мгновенные обновления статуса серверов.\n\nФункции:\n- **Обновления в реальном времени:** Нулевая задержка благодаря WebSockets.\n- **Визуальная аналитика:** Интерактивные графики на Chart.js.\n- **Система оповещений:** Автоматические уведомления при превышении пороговых значений."
    },
    tech: ["Node.js", "WebSockets", "Express", "Chart.js"],
    github: "https://github.com/ViVaLaDaniel/status-monitor",
    live: "",
    image: "/projects/status-monitor.png",
    gallery: ["/projects/status-monitor.png"]
  },
  {
    title: "DigitalOcean Docker Stack",
    year: "2023 – 2025",
    description: {
      en: "Self-hosted services infrastructure with Docker, Nginx reverse proxy, SSL automation, and GitHub Actions deployment scripts.",
      ru: "Инфраструктура самостоятельно размещённых сервисов с Docker, Nginx reverse proxy, автоматизацией SSL и скриптами развёртывания через GitHub Actions."
    },
    longDescription: {
      en: "A complete DevOps solution for self-hosting applications. This stack provides a secure, automated environment for deploying and managing web services.\n\nComponents:\n- **Docker Containerization:** Isolated environments for consistent application behavior.\n- **Nginx Reverse Proxy:** Efficient traffic handling and load balancing.\n- **Automated SSL:** Let's Encrypt integration for auto-renewing security certificates.\n- **CI/CD Pipelines:** GitHub Actions workflows for automated testing and deployment.",
      ru: "Полное DevOps решение для селф-хостинга приложений. Этот стек обеспечивает безопасную и автоматизированную среду для развертывания веб-сервисов.\n\nКомпоненты:\n- **Docker контейнеризация:** Изолированные среды.\n- **Nginx Reverse Proxy:** Эффективная обработка трафика.\n- **Автоматический SSL:** Интеграция с Let's Encrypt.\n- **CI/CD пайплайны:** Workflows GitHub Actions для автоматического тестирования и деплоя."
    },
    tech: ["Docker", "Nginx", "Linux", "GitHub Actions", "DigitalOcean"],
    github: "https://github.com/ViVaLaDaniel/docker-stack",
    live: "",
    image: "/projects/docker-stack.png",
    gallery: ["/projects/docker-stack.png"]
  }
];

export const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "FastAPI", "REST APIs", "Webhooks"]
  },
  {
    category: "Shopify",
    technologies: ["Liquid", "Online Store 2.0 JSON", "Storefront API"]
  },
  {
    category: "AI/Automation",
    technologies: ["Gemini API", "OpenAI API", "n8n workflows", "Prompt engineering"]
  },
  {
    category: "DevOps",
    technologies: ["Docker", "DigitalOcean", "Nginx", "GitHub Actions", "Linux"]
  },
  {
    category: "Tools",
    technologies: ["VS Code", "Git", "Linux terminal", "Markdown"]
  }
];

export const education = {
  en: "Self-Taught Full-Stack Development: Modern web architecture, e-commerce platforms, automation systems, AI agent integration, and DevOps practices.",
  ru: "Самообучение Full-Stack разработке: Современная веб-архитектура, e-commerce платформы, системы автоматизации, интеграция AI-агентов и DevOps практики."
};

export const navLinks = [
  { name: { en: "About", ru: "О себе" }, href: "#about" },
  { name: { en: "Experience", ru: "Опыт" }, href: "#experience" },
  { name: { en: "Projects", ru: "Проекты" }, href: "#projects" },
  { name: { en: "Tech Stack", ru: "Технологии" }, href: "#tech" },
  { name: { en: "Contact", ru: "Контакты" }, href: "#contact" }
];
