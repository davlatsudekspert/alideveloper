import { createContext, useContext, useEffect, useState } from "react";

const translations = {
  uz: {
    "nav.services": "Xizmatlar",
    "nav.calc": "Narx hisoblash",
    "nav.process": "Jarayon",
    "nav.portfolio": "Loyihalar",
    "nav.faq": "Savollar",
    "nav.contact": "Aloqa",
    "header.skip": "Asosiy kontentga o'tish",
    "header.order": "Buyurtma berish",
    "header.menu": "Menyu",

    "hero.available": "Yangi loyihalarni qabul qilyapman",
    "hero.tag": "// frontend dasturchi",
    "hero.title1": "Sizning g'oyangizni",
    "hero.title2": "ishlaydigan interfeysga",
    "hero.title3": "aylantiraman",
    "hero.sub":
      "React va Tailwind CSS asosida tez, moslashuvchan va chiroyli sayt interfeyslari quraman — dizaynni pixel-perfect kodga aylantiraman.",
    "hero.order": "Loyiha buyurtma qilish",
    "hero.prices": "Narxlarni ko'rish",

    "trust.1.title": "24 soat ichida",
    "trust.1.desc": "Xabaringizga javob beraman",
    "trust.2.title": "2 marta",
    "trust.2.desc": "Bepul tuzatish kiritiladi",
    "trust.3.title": "Topshirilgach",
    "trust.3.desc": "Kod bilan birga qo'llab-quvvatlash",

    "services.tag": "// xizmatlar",
    "services.title": "Faqat frontend — lekin oxirigacha puxta",
    "services.sub":
      "Men interfeys qismini quraman: dizaynni tez, chiroyli va har xil ekranda to'g'ri ishlaydigan kodga aylantiraman. Backend yoki server kerak bo'lsa, buni alohida muhokama qilamiz.",
    "services.from": "dan boshlab",
    "services.featured": "eng ko'p tanlanadi",
    "services.addons": "qo'shimcha xizmatlar",
    "services.rush": "Tezkor bajarish (1.5x tez)",

    "money.thousand": "ming",
    "money.million": "mln",
    "money.som": "so'm",

    "pkg.landing.title": "Landing sahifa",
    "pkg.landing.desc":
      "Bitta taklif uchun — mahsulot yoki xizmatni tanishtiruvchi sotuvchi sahifa.",
    "pkg.landing.days": "3–5 kun",
    "pkg.landing.props.0": "Responsive",
    "pkg.landing.props.1": "1 sahifa",
    "pkg.landing.props.2": "Animatsiyalar",
    "pkg.multipage.title": "Ko'p sahifali sayt",
    "pkg.multipage.desc":
      "3–6 sahifa: bosh sahifa, xizmatlar, portfolio, aloqa va boshqalar.",
    "pkg.multipage.days": "7–14 kun",
    "pkg.multipage.props.0": "Responsive",
    "pkg.multipage.props.1": "3–6 sahifa",
    "pkg.multipage.props.2": "Routing",
    "pkg.figma.title": "Figma → Kod",
    "pkg.figma.desc":
      "Tayyor dizaynni pixel-perfect React + Tailwind komponentlariga aylantiraman.",
    "pkg.figma.days": "4–7 kun",
    "pkg.figma.props.0": "Pixel-perfect",
    "pkg.figma.props.1": "Komponentlar",
    "pkg.figma.props.2": "Clean code",
    "pkg.appui.title": "Veb-ilova interfeysi",
    "pkg.appui.desc":
      "Dashboard, admin panel yoki mavjud API bilan ishlaydigan dinamik interfeys.",
    "pkg.appui.days": "10–20 kun",
    "pkg.appui.props.0": "State boshqaruvi",
    "pkg.appui.props.1": "API ulanish",
    "pkg.appui.props.2": "Komponent tizimi",

    "addon.animation": "Qo'shimcha animatsiya (Framer Motion)",
    "addon.mobile": "Chuqur mobil optimallashtirish",
    "addon.seo": "SEO-friendly semantik tuzilma",
    "addon.backend": "Mavjud backend / API bilan integratsiya",

    "whyme.tag": "// nega men",
    "whyme.title": "Agentlik o'rniga mutaxassis",
    "whyme.1.title": "Tejamkor narx",
    "whyme.1.desc":
      "Agentlik ustama xarajatlarisiz — to'g'ridan-to'g'ri dasturchi bilan ishlaysiz.",
    "whyme.2.title": "To'g'ridan-to'g'ri muloqot",
    "whyme.2.desc":
      "Menejerlar orqali emas, savolingizga to'g'ridan-to'g'ri men javob beraman.",
    "whyme.3.title": "Tezkor ijro",
    "whyme.3.desc":
      "Bitta loyihaga e'tibor — navbat va byurokratiyasiz tezroq natija.",

    "calc.tag": "// narx hisoblash",
    "calc.title": "Taxminiy narxni bilib oling",
    "calc.sub":
      "Xizmat turi va qo'shimchalarni tanlang — narx darhol hisoblanadi.",
    "calc.addons": "qo'shimchalar",
    "calc.rush": "Tezkor bajarish (1.5x tez)",
    "calc.total": "taxminiy narx",
    "calc.order": "Shu tanlov bilan buyurtma berish",
    "calc.msg.service": "Xizmat",
    "calc.msg.addons": "Qo'shimchalar",
    "calc.msg.rush": "Tezkor bajarish: ha",
    "calc.msg.total": "Taxminiy narx",

    "process.tag": "// jarayon",
    "process.title": "Buyurtmadan topshirishgacha",
    "process.1.title": "Brief",
    "process.1.desc":
      "Loyihangiz, referenslar va maqsad haqida qisqacha suhbat.",
    "process.2.title": "Struktura",
    "process.2.desc": "Sahifalar tuzilishi va uslub kelishib olinadi.",
    "process.3.title": "Kodlash",
    "process.3.desc": "React va Tailwind asosida interfeys quriladi.",
    "process.4.title": "Topshirish",
    "process.4.desc":
      "Barcha qurilmalarda sinovdan o'tkazilib, fayllar yetkaziladi.",

    "portfolio.tag": "// loyihalar",
    "portfolio.title": "Ishlar tez orada shu yerda",
    "portfolio.sub":
      "Har bir tugallangan loyiha shu bo'limga qo'shiladi — skrinshot, havola va qisqacha tavsif bilan.",
    "portfolio.file": "loyiha",
    "portfolio.empty": "bo'sh joy",

    "faq.tag": "// savollar",
    "faq.title": "Ko'p beriladigan savollar",
    "faq.1.q": "Siz faqat frontend bilan shug'ullanasizmi?",
    "faq.1.a":
      "Ha. Men interfeys (ko'rinadigan qism)ni React va Tailwind bilan quraman. Agar backend, ma'lumotlar bazasi yoki server kerak bo'lsa, buni alohida muhokama qilamiz — men shu ishni bajaradigan hamkor taklif qilishim ham mumkin.",
    "faq.2.q": "Loyiha necha kunda tayyor bo'ladi?",
    "faq.2.a":
      "Landing sahifa odatda 3-5 kun, ko'p sahifali sayt 1-2 hafta ichida tayyor bo'ladi. Aniq muddat loyiha hajmiga qarab kelishiladi.",
    "faq.3.q": "To'lov qanday amalga oshiriladi?",
    "faq.3.a":
      "Odatda 50% oldindan, qolgan 50% loyiha topshirilgandan so'ng to'lanadi. Katta loyihalarda bosqichma-bosqich to'lov ham mumkin.",
    "faq.4.q": "Tuzatishlar kiritish mumkinmi?",
    "faq.4.a":
      "Ha, har bir buyurtmaga 2 marta bepul tuzatish kiritiladi. Undan keyingi o'zgarishlar alohida kelishiladi.",
    "faq.5.q": "Mavjud saytimga yangi funksiya qo'shib berasizmi?",
    "faq.5.a":
      "Ha, mavjud React/Tailwind loyihalarga yangi bo'lim yoki funksiya qo'shish, dizaynni yangilash bo'yicha ham ishlayman.",

    "contact.tag": "// aloqa",
    "contact.title": "Loyihangizni muhokama qilamiz",
    "contact.sub":
      "Telegram orqali yozing yoki qo'ng'iroq qiling — 24 soat ichida javob beraman.",
    "contact.phone": "Telefon",
    "contact.copy": "nusxalash",
    "contact.copied": "nusxalandi",
    "contact.namePlaceholder": "Ismingiz",
    "contact.msgPlaceholder": "Loyihangiz haqida qisqacha",
    "contact.errEmpty": "Ism va xabar maydonlarini to'ldiring",
    "contact.errFail": "Xabar yuborilmadi. Qayta urinib ko'ring",
    "contact.sent": "Xabar yuborildi — tez orada javob beraman",
    "contact.sending": "Yuborilmoqda...",
    "contact.submit": "Telegram orqali yuborish",
    "contact.botMsg": "✉️ Saytdan yangi xabar",
    "contact.botName": "Ism",
    "contact.botText": "Xabar",

    "footer.desc":
      "React va Tailwind CSS asosida frontend interfeyslar quraman.",
    "footer.nav": "navigatsiya",
    "footer.contact": "aloqa",
    "footer.rights": "© {year} Ali.dev — barcha huquqlar himoyalangan",

    "float.top": "Sahifa boshiga qaytish",
    "float.chat": "AI yordamchi",
    "chat.title": "AI yordamchi",
    "chat.subtitle": "Ali.dev haqida savollar · 24/7",
    "chat.welcome":
      "Salom! Men Ali.dev saytining AI yordamchisiman. Xizmatlar, narxlar yoki loyiha haqida savol berishingiz mumkin.",
    "chat.placeholder": "Xabaringizni yozing...",
    "chat.send": "Yuborish",
    "chat.typing": "yozmoqda...",
    "chat.error":
      "Xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring yoki Telegram orqali yozing.",
    "chat.system":
      "Sen Ali.dev — frontend dasturchi portfolio saytining AI yordamchisisan. Aliyor (Ali) ismli dasturchi haqida. U React, Vite va Tailwind CSS bilan ishlaydi. Qisqa va do'stona, o'zbek tilida javob ber. Xizmatlar, narxlar va jarayon haqidagi savollarga yordam ber. FAQAT Ali, uning sayti yoki dasturlash/web-dasturlash mavzulariga javob ber. Boshqa mavzular (siyosat, sport, ob-havo va h.k.) so'ralsa, muloyimlik bilan rad et: bu savollarga javob bermasligingni ayt va mavzuni Ali, uning xizmatlari yoki dasturlashga qaytar.",
  },

  ru: {
    "nav.services": "Услуги",
    "nav.calc": "Расчет цены",
    "nav.process": "Процесс",
    "nav.portfolio": "Проекты",
    "nav.faq": "Вопросы",
    "nav.contact": "Контакты",
    "header.skip": "Перейти к основному контенту",
    "header.order": "Заказать",
    "header.menu": "Меню",

    "hero.available": "Принимаю новые проекты",
    "hero.tag": "// фронтенд-разработчик",
    "hero.title1": "Вашу идею",
    "hero.title2": "в работающий интерфейс",
    "hero.title3": "превращаю",
    "hero.sub":
      "Создаю быстрые, адаптивные и красивые интерфейсы на React и Tailwind CSS — превращаю дизайн в pixel-perfect код.",
    "hero.order": "Заказать проект",
    "hero.prices": "Посмотреть цены",

    "trust.1.title": "В течение 24 часов",
    "trust.1.desc": "Отвечу на ваше сообщение",
    "trust.2.title": "2 раза",
    "trust.2.desc": "Бесплатные правки",
    "trust.3.title": "После сдачи",
    "trust.3.desc": "Поддержка вместе с кодом",

    "services.tag": "// услуги",
    "services.title": "Только фронтенд — но доведённый до конца",
    "services.sub":
      "Я создаю часть интерфейса: превращаю дизайн в быстрый, красивый и корректно работающий код. Если нужен бэкенд или сервер — обсудим отдельно.",
    "services.from": "от",
    "services.featured": "самый популярный",
    "services.addons": "дополнительные услуги",
    "services.rush": "Быстрое выполнение (1.5x)",

    "money.thousand": "тыс",
    "money.million": "млн",
    "money.som": "сум",

    "pkg.landing.title": "Лендинг страница",
    "pkg.landing.desc":
      "Для одного предложения — продающая страница, представляющая продукт или услугу.",
    "pkg.landing.days": "3–5 дней",
    "pkg.landing.props.0": "Адаптив",
    "pkg.landing.props.1": "1 страница",
    "pkg.landing.props.2": "Анимации",
    "pkg.multipage.title": "Многостраничный сайт",
    "pkg.multipage.desc":
      "3–6 страниц: главная, услуги, портфолио, контакты и другое.",
    "pkg.multipage.days": "7–14 дней",
    "pkg.multipage.props.0": "Адаптив",
    "pkg.multipage.props.1": "3–6 страниц",
    "pkg.multipage.props.2": "Routing",
    "pkg.figma.title": "Figma → Код",
    "pkg.figma.desc":
      "Превращаю готовый дизайн в pixel-perfect компоненты React + Tailwind.",
    "pkg.figma.days": "4–7 дней",
    "pkg.figma.props.0": "Pixel-perfect",
    "pkg.figma.props.1": "Компоненты",
    "pkg.figma.props.2": "Clean code",
    "pkg.appui.title": "Интерфейс веб-приложения",
    "pkg.appui.desc":
      "Дашборд, админ-панель или динамический интерфейс, работающий с существующим API.",
    "pkg.appui.days": "10–20 дней",
    "pkg.appui.props.0": "Управление состоянием",
    "pkg.appui.props.1": "Подключение API",
    "pkg.appui.props.2": "Компонентная система",

    "addon.animation": "Дополнительная анимация (Framer Motion)",
    "addon.mobile": "Глубокая мобильная оптимизация",
    "addon.seo": "Семантическая структура для SEO",
    "addon.backend": "Интеграция с существующим backend / API",

    "whyme.tag": "// почему я",
    "whyme.title": "Специалист вместо агентства",
    "whyme.1.title": "Экономичная цена",
    "whyme.1.desc":
      "Без наценок агентства — работаете напрямую с разработчиком.",
    "whyme.2.title": "Прямое общение",
    "whyme.2.desc":
      "Не через менеджеров — на вопросы отвечаю лично.",
    "whyme.3.title": "Быстрое исполнение",
    "whyme.3.desc":
      "Фокус на одном проекте — быстрый результат без очередей.",

    "calc.tag": "// расчет цены",
    "calc.title": "Узнайте примерную цену",
    "calc.sub":
      "Выберите тип услуги и дополнения — цена рассчитается сразу.",
    "calc.addons": "дополнения",
    "calc.rush": "Быстрое выполнение (1.5x)",
    "calc.total": "примерная цена",
    "calc.order": "Заказать с этим выбором",
    "calc.msg.service": "Услуга",
    "calc.msg.addons": "Дополнения",
    "calc.msg.rush": "Быстрое выполнение: да",
    "calc.msg.total": "Примерная цена",

    "process.tag": "// процесс",
    "process.title": "От заказа до сдачи",
    "process.1.title": "Бриф",
    "process.1.desc":
      "Краткая беседа о проекте, референсах и целях.",
    "process.2.title": "Структура",
    "process.2.desc": "Согласуем структуру страниц и стиль.",
    "process.3.title": "Кодинг",
    "process.3.desc": "Интерфейс строится на React и Tailwind.",
    "process.4.title": "Сдача",
    "process.4.desc":
      "Протестировано на всех устройствах и переданы файлы.",

    "portfolio.tag": "// проекты",
    "portfolio.title": "Работы скоро появятся здесь",
    "portfolio.sub":
      "Каждый завершённый проект добавляется сюда — со скриншотом, ссылкой и кратким описанием.",
    "portfolio.file": "proekt",
    "portfolio.empty": "пусто",

    "faq.tag": "// вопросы",
    "faq.title": "Часто задаваемые вопросы",
    "faq.1.q": "Вы занимаетесь только фронтендом?",
    "faq.1.a":
      "Да. Я создаю интерфейс (видимую часть) на React и Tailwind. Если нужен бэкенд, база данных или сервер — обсудим отдельно, могу предложить партнёра.",
    "faq.2.q": "Сколько дней делается проект?",
    "faq.2.a":
      "Лендинг обычно 3-5 дней, многостраничный сайт 1-2 недели. Точный срок согласуется в зависимости от объёма.",
    "faq.3.q": "Как производится оплата?",
    "faq.3.a":
      "Обычно 50% предоплата, остальные 50% после сдачи. Для крупных проектов возможна поэтапная оплата.",
    "faq.4.q": "Можно ли вносить правки?",
    "faq.4.a":
      "Да, в каждый заказ входят 2 бесплатные правки. Дальнейшие изменения обсуждаются отдельно.",
    "faq.5.q": "Добавите новую функцию на существующий сайт?",
    "faq.5.a":
      "Да, работаю и по добавлению новых разделов и функций, и по обновлению дизайна на существующих React/Tailwind проектах.",

    "contact.tag": "// контакты",
    "contact.title": "Обсудим ваш проект",
    "contact.sub":
      "Напишите в Telegram или позвоните — отвечу в течение 24 часов.",
    "contact.phone": "Телефон",
    "contact.copy": "копировать",
    "contact.copied": "скопировано",
    "contact.namePlaceholder": "Ваше имя",
    "contact.msgPlaceholder": "Кратко о вашем проекте",
    "contact.errEmpty": "Заполните поля имени и сообщения",
    "contact.errFail": "Сообщение не отправлено. Попробуйте ещё раз",
    "contact.sent": "Сообщение отправлено — скоро отвечу",
    "contact.sending": "Отправляется...",
    "contact.submit": "Отправить через Telegram",
    "contact.botMsg": "✉️ Новое сообщение с сайта",
    "contact.botName": "Имя",
    "contact.botText": "Сообщение",

    "footer.desc":
      "Создаю фронтенд-интерфейсы на React и Tailwind CSS.",
    "footer.nav": "навигация",
    "footer.contact": "контакты",
    "footer.rights": "© {year} Ali.dev — все права защищены",

    "float.top": "Наверх",
    "float.chat": "ИИ-ассистент",
    "chat.title": "ИИ-ассистент",
    "chat.subtitle": "Вопросы об Ali.dev · 24/7",
    "chat.welcome":
      "Привет! Я ИИ-ассистент сайта Ali.dev. Можете спросить об услугах, ценах или проектах.",
    "chat.placeholder": "Напишите сообщение...",
    "chat.send": "Отправить",
    "chat.typing": "печатает...",
    "chat.error":
      "Произошла ошибка. Попробуйте позже или напишите в Telegram.",
    "chat.system":
      "Ты ИИ-ассистент сайта-портфолио Ali.dev — фронтенд-разработчика Алиёра (Али). Он работает с React, Vite и Tailwind CSS. Отвечай коротко и дружелюбно на русском языке. Помогай с вопросами об услугах, ценах и процессе. Отвечай ТОЛЬКО на темы об Али, его сайте или программировании/веб-разработке. Если просят о других темах (политика, спорт, погода и т.п.), вежливо откажись: скажи, что не отвечаешь на такие вопросы, и верни разговор к Али, его услугам или программированию.",
  },

  en: {
    "nav.services": "Services",
    "nav.calc": "Price calculator",
    "nav.process": "Process",
    "nav.portfolio": "Projects",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "header.skip": "Skip to content",
    "header.order": "Order now",
    "header.menu": "Menu",

    "hero.available": "Taking on new projects",
    "hero.tag": "// frontend developer",
    "hero.title1": "Your idea",
    "hero.title2": "into a working interface",
    "hero.title3": "I turn",
    "hero.sub":
      "I build fast, responsive and beautiful site interfaces with React and Tailwind CSS — turning designs into pixel-perfect code.",
    "hero.order": "Order a project",
    "hero.prices": "See prices",

    "trust.1.title": "Within 24 hours",
    "trust.1.desc": "I reply to your message",
    "trust.2.title": "2 times",
    "trust.2.desc": "Free revisions",
    "trust.3.title": "On delivery",
    "trust.3.desc": "Support along with the code",

    "services.tag": "// services",
    "services.title": "Only frontend — but done thoroughly",
    "services.sub":
      "I build the interface part: turning designs into fast, beautiful code that works on every screen. If you need a backend or a server, we discuss that separately.",
    "services.from": "from",
    "services.featured": "most popular",
    "services.addons": "add-on services",
    "services.rush": "Fast delivery (1.5x)",

    "money.thousand": "K",
    "money.million": "M",
    "money.som": "soum",

    "pkg.landing.title": "Landing page",
    "pkg.landing.desc":
      "For one offer — a sales page introducing your product or service.",
    "pkg.landing.days": "3–5 days",
    "pkg.landing.props.0": "Responsive",
    "pkg.landing.props.1": "1 page",
    "pkg.landing.props.2": "Animations",
    "pkg.multipage.title": "Multi-page website",
    "pkg.multipage.desc":
      "3–6 pages: home, services, portfolio, contact and more.",
    "pkg.multipage.days": "7–14 days",
    "pkg.multipage.props.0": "Responsive",
    "pkg.multipage.props.1": "3–6 pages",
    "pkg.multipage.props.2": "Routing",
    "pkg.figma.title": "Figma → Code",
    "pkg.figma.desc":
      "I turn a ready design into pixel-perfect React + Tailwind components.",
    "pkg.figma.days": "4–7 days",
    "pkg.figma.props.0": "Pixel-perfect",
    "pkg.figma.props.1": "Components",
    "pkg.figma.props.2": "Clean code",
    "pkg.appui.title": "Web app interface",
    "pkg.appui.desc":
      "Dashboard, admin panel, or a dynamic interface working with an existing API.",
    "pkg.appui.days": "10–20 days",
    "pkg.appui.props.0": "State management",
    "pkg.appui.props.1": "API integration",
    "pkg.appui.props.2": "Component system",

    "addon.animation": "Extra animation (Framer Motion)",
    "addon.mobile": "Deep mobile optimization",
    "addon.seo": "SEO-friendly semantic structure",
    "addon.backend": "Integration with existing backend / API",

    "whyme.tag": "// why me",
    "whyme.title": "An expert instead of an agency",
    "whyme.1.title": "Affordable price",
    "whyme.1.desc":
      "No agency markup — you work directly with the developer.",
    "whyme.2.title": "Direct communication",
    "whyme.2.desc":
      "Not through managers — I answer your questions directly.",
    "whyme.3.title": "Fast delivery",
    "whyme.3.desc":
      "Focus on one project — faster results without queues.",

    "calc.tag": "// price calculator",
    "calc.title": "Get an estimated price",
    "calc.sub":
      "Pick a service type and add-ons — the price updates instantly.",
    "calc.addons": "add-ons",
    "calc.rush": "Fast delivery (1.5x)",
    "calc.total": "estimated price",
    "calc.order": "Order with this selection",
    "calc.msg.service": "Service",
    "calc.msg.addons": "Add-ons",
    "calc.msg.rush": "Fast delivery: yes",
    "calc.msg.total": "Estimated price",

    "process.tag": "// process",
    "process.title": "From order to delivery",
    "process.1.title": "Brief",
    "process.1.desc":
      "A short talk about your project, references and goals.",
    "process.2.title": "Structure",
    "process.2.desc": "Page structure and style are agreed.",
    "process.3.title": "Coding",
    "process.3.desc": "The interface is built with React and Tailwind.",
    "process.4.title": "Delivery",
    "process.4.desc":
      "Tested on all devices and the files are delivered.",

    "portfolio.tag": "// projects",
    "portfolio.title": "Works coming soon",
    "portfolio.sub":
      "Each finished project is added here — with a screenshot, link and short description.",
    "portfolio.file": "project",
    "portfolio.empty": "empty",

    "faq.tag": "// faq",
    "faq.title": "Frequently asked questions",
    "faq.1.q": "Do you only work on frontend?",
    "faq.1.a":
      "Yes. I build the interface (the visible part) with React and Tailwind. If you need a backend, database or server, we discuss it separately — I can even recommend a partner.",
    "faq.2.q": "How many days does a project take?",
    "faq.2.a":
      "A landing page usually takes 3-5 days, a multi-page site 1-2 weeks. The exact timeline depends on the scope.",
    "faq.3.q": "How does payment work?",
    "faq.3.a":
      "Usually 50% upfront and the remaining 50% on delivery. Staged payment is possible for large projects.",
    "faq.4.q": "Can revisions be made?",
    "faq.4.a":
      "Yes, every order includes 2 free revisions. Further changes are discussed separately.",
    "faq.5.q": "Can you add a new feature to my existing site?",
    "faq.5.a":
      "Yes, I also add new sections or features and refresh designs on existing React/Tailwind projects.",

    "contact.tag": "// contact",
    "contact.title": "Let's discuss your project",
    "contact.sub":
      "Message me on Telegram or call — I reply within 24 hours.",
    "contact.phone": "Phone",
    "contact.copy": "copy",
    "contact.copied": "copied",
    "contact.namePlaceholder": "Your name",
    "contact.msgPlaceholder": "Briefly about your project",
    "contact.errEmpty": "Please fill in name and message",
    "contact.errFail": "Message not sent. Please try again",
    "contact.sent": "Message sent — I'll reply soon",
    "contact.sending": "Sending...",
    "contact.submit": "Send via Telegram",
    "contact.botMsg": "✉️ New message from the site",
    "contact.botName": "Name",
    "contact.botText": "Message",

    "footer.desc":
      "I build frontend interfaces with React and Tailwind CSS.",
    "footer.nav": "navigation",
    "footer.contact": "contact",
    "footer.rights": "© {year} Ali.dev — all rights reserved",

    "float.top": "Back to top",
    "float.chat": "AI assistant",
    "chat.title": "AI assistant",
    "chat.subtitle": "Questions about Ali.dev · 24/7",
    "chat.welcome":
      "Hi! I'm the AI assistant of the Ali.dev site. Ask me about services, prices or projects.",
    "chat.placeholder": "Type a message...",
    "chat.send": "Send",
    "chat.typing": "typing...",
    "chat.error":
      "Something went wrong. Try again later or message me on Telegram.",
    "chat.system":
      "You are the AI assistant of Ali.dev — a portfolio site of Aliyor (Ali), a frontend developer. He works with React, Vite and Tailwind CSS. Reply briefly and friendly in English. Help with questions about services, prices and process. Answer ONLY about Ali, his site, or programming/web development. If asked about other topics (politics, sports, weather, etc.), politely decline: say you do not answer such questions and steer the conversation back to Ali, his services, or programming.",
  },
};

const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("ali-lang") || "uz";
    } catch {
      return "uz";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("ali-lang", lang);
    } catch {
      /* noop */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  function t(key) {
    const dict = translations[lang] || translations.uz;
    return dict[key] ?? translations.uz[key] ?? key;
  }

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
