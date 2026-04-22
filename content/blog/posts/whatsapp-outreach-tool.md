---
{
  "kind": "post",
  "id": "whatsapp-outreach-tool",
  "date": "2026-04-07",
  "source": {
    "kind": "ghost-export",
    "ru": "69e2d27f9e829e8410d5775b",
    "en": "69e2d28f9e829e8410d57762"
  },
  "published_at": {
    "ru": "2026-04-07 07:00:00",
    "en": "2026-04-07 07:00:00"
  },
  "created_at": {
    "ru": "2026-04-18 00:38:23",
    "en": "2026-04-18 00:38:39"
  },
  "updated_at": {
    "ru": "2026-04-18 00:48:19",
    "en": "2026-04-18 00:49:04"
  },
  "featured": false,
  "tags": [
    "ai-stream",
    "threshold-signals",
    "vibe-coding"
  ],
  "feature_image": "",
  "feature_image_alt": {
    "ru": "",
    "en": ""
  },
  "feature_image_caption": {
    "ru": "",
    "en": ""
  },
  "author": {
    "id": "69b16d756e5564436d20dbd9",
    "slug": "alexander-nevsky",
    "name": "Александр Невский",
    "bio": "Проектирую вашу жизнь в Дубае. Real Estate Broker с бэкграундом дизайнера Yango. UX-аудит жилья, районов и школ. Честно, системно, от резидента Джумейры",
    "profile_image": "https://cdn.nevsky.me/content/images/2026/03/alexander-nevsky-2026-avatar.jpeg",
    "website": "https://nevsky.me",
    "location": "Дубай, ОАЭ",
    "socials": {
      "facebook": "nevskiy.alexander",
      "twitter": "@_nevskii_",
      "threads": "@nevsky_alexander",
      "bluesky": "nevskii.bsky.social",
      "mastodon": "mastodon.social/@d2q",
      "tiktok": "@nevsky.me",
      "youtube": "@alexander-nevsky",
      "instagram": "nevsky_alexander",
      "linkedin": ""
    }
  },
  "ru": {
    "slug": "whatsapp-outreach-tool",
    "title": "Как я написал собственный инструмент для WhatsApp-рассылок — с помощью ChatGPT Codex и Claude",
    "excerpt": "Холодные рассылки по базе вторички — это боль. Вручную не вывезти, сервисы блокируют, тексты одинаковые. Я написал собственный инструмент на Python с CRM, мобильной версией и хостингом на Cloudflare. Архитектуру проектировал ChatGPT Codex, операционную часть дорабатывал Claude Code",
    "body": "<p>Когда начинаешь работать с вторичкой в Дубае — одна из первых задач это холодный контакт с продавцами. База большая. Вручную не вывезти.</p><p>Готовые сервисы для WhatsApp-рассылок? Либо дорогие, либо быстро блокируют аккаунт, либо не дают нужного контроля над текстами и очерёдностью. Классика.</p><p>Я написал свой инструмент. Мозг проекта — ChatGPT Codex. Именно с него всё началось: основная архитектура, скрипты автоматизации WhatsApp Web, структура батчей, пайплайн Google Sheets. Дальше подключился Claude Code — для CRM, дашборда, мобильного режима отправки и деплоя на Cloudflare. Я ставил задачи, они писали, я правил логику и тестировал.</p><p>Примерно так выглядит разработка продукта, когда ты дизайнер, а не разработчик — но точно знаешь, что хочешь получить.</p><h3 id=\"%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5\">Что это такое</h3><p>Система называется Wonderdom Realty Outreach. Полуручной outbound workflow для работы с базой собственников — в моём случае это Tilal Al Ghaf, один из самых активных районов вторичного рынка Дубая.</p><p>Цифры на сегодня: 91 отправленное сообщение, reply rate 6.6%, 21 уникальный шаблон, 85% экономии времени по сравнению с ручной работой.</p><h3 id=\"%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%BE\">Как это устроено</h3><p><em>Парсинг и приоритизация.</em> Python-скрипт читает базу и расставляет приоритеты — кому писать первому. Из 6249 строк в Google Sheet отфильтровано 1320 высококонфидентных лидов, нарезанных на 33 батча по 40 человек. Не просто очередь: тип объекта, кластер, срок публикации. Умная выборка.</p><p><em>Персональные тексты.</em> 21 уникальный шаблон — 8 на английском, 6 на французском, 7 на русском. Каждое сообщение варьирует формулировки, подставляет имя, объект, кластер. WhatsApp детектит одинаковые сообщения и блокирует аккаунт. Персонализация — не про вежливость, это про выживание инструмента.</p><p><em>Волны отправки.</em> По 40 сообщений, между волнами — пауза. Имитирует человеческое поведение, снижает риск бана.</p><p><em>Отправка.</em> Скрипт открывает нужный чат через WhatsApp Web или через <code>wa.me</code>-ссылку на iPhone — текст уже подставлен. Финальный Send всегда ручной. Полная автоматизация здесь невозможна без немедленной блокировки — это принципиально, а не компромисс.</p><h3 id=\"crm-%D0%B8-%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F\">CRM и мобильная версия</h3><p>Параллельно — полноценная CRM. Вижу кому написал, когда, какой текст, был ли ответ. Дашборд с графиками активности по дням, статусы, KPI.</p><p>Есть веб-версия и мобильная — отдельный Cloudflare Worker для отправки с iPhone, когда не за ноутбуком. Состояние синкается в Cloudflare D1 и пишется напрямую в Google Sheet через API. Авторизация через Cloudflare Zero Trust — вход по email OTP, никаких паролей.</p><p>Весь проект живёт в git, автодеплой при push — изменения на сайте за 30 секунд.</p><h3 id=\"%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%83%D1%8E-%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D1%8E\">Воронка, которую я строю</h3><p>Целевая механика: 1320 лидов → ~130 ответят → ~40 выйдут в диалог → 3–5 мандатов на продажу. Пока система работает ровно первый месяц — посмотрим на финальные цифры к 23 апреля, когда закроется последний батч.</p><h3 id=\"%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%B8%D1%82\">Что это значит</h3><p>Инструмент экономит несколько часов в день. Убирает самую раздражающую часть работы — монотонный ручной труд. Вместо этого трачу время на разговоры с теми, кто ответил.</p><p>За полтора месяца — 16 версий. От первой отправки через WhatsApp Web до мобильного runner'а, светлой темы интерфейса, интерактивных графиков и единого sync с Google Sheet. Проект живой, продолжаю развивать.</p><p>Я сделал это сам. Не заказал разработчику, не купил готовое. Взял Codex, описал архитектуру, подключил Claude Code для операционных правок, итерировал прямо в процессе живой кампании.</p><p>Не «нажми кнопку и получи продукт». Совместная работа, где ты отвечаешь за логику и качество, а инструмент пишет код.</p>"
  },
  "en": {
    "slug": "whatsapp-outreach-tool-en",
    "title": "How I built my own WhatsApp outreach tool — with ChatGPT Codex and Claude",
    "excerpt": "Cold outreach on a secondary market database is painful. Too many leads to handle manually, off-the-shelf services get you banned, templates get flagged. So I built my own tool in Python with a CRM, mobile mode, and Cloudflare hosting",
    "body": "<p>When you start working with secondary market real estate in Dubai, one of your first tasks is cold outreach to sellers. The database is large. Doing it manually doesn't scale.</p><p>Off-the-shelf WhatsApp outreach services? Either expensive, or they get your account banned quickly, or they don't give you enough control over the message content and send order. Classic.</p><p>So I built my own tool. The brain of the project is ChatGPT Codex — that's where everything started: the core architecture, WhatsApp Web automation scripts, batch structure, Google Sheets pipeline. Then Claude Code came in for the CRM, dashboard, mobile send mode, and Cloudflare deployment. I set the tasks, they wrote the code, I reviewed the logic and tested.</p><p>That's roughly what product development looks like when you're a designer, not a developer — but you know exactly what you want to get.</p><h3 id=\"what-it-is\">What it is</h3><p>The system is called Wonderdom Realty Outreach. A semi-manual outbound workflow for working a database of property owners — in my case, Tilal Al Ghaf, one of the most active secondary market communities in Dubai.</p><p>Current numbers: 91 messages sent, 6.6% reply rate, 21 unique templates, 85% time saved compared to doing it by hand.</p><h3 id=\"how-it-works\">How it works</h3><p><em>Parsing and prioritisation.</em> A Python script reads the database and ranks leads by priority — who to contact first. From 6,249 rows in Google Sheets, 1,320 high-confidence leads were filtered and split into 33 batches of 40. Not just a queue: property type, cluster, listing age. Smart selection.</p><p><em>Personalised messages.</em> 21 unique templates — 8 in English, 6 in French, 7 in Russian. Each message varies its phrasing, inserts the owner's name, property details, cluster. WhatsApp detects identical messages and bans the account. Personalisation here isn't about politeness — it's about keeping the tool alive.</p><p><em>Send waves.</em> 40 messages per wave, with a pause between waves. Mimics human behaviour, reduces ban risk.</p><p><em>Sending.</em> The script opens the right chat via WhatsApp Web or a <code>wa.me</code> link on iPhone — with the text already pre-filled. The final Send is always manual. Full automation isn't possible without an immediate ban — that's a deliberate design choice, not a compromise.</p><h3 id=\"crm-and-mobile-mode\">CRM and mobile mode</h3><p>Alongside the outreach tool — a full CRM. I can see who I contacted, when, what message I sent, whether they replied. Dashboard with daily activity charts, statuses, KPIs.</p><p>There's a web version and a mobile version — a separate Cloudflare Worker for sending from iPhone when I'm not at my laptop. State syncs to Cloudflare D1 and writes directly to Google Sheets via API. Auth via Cloudflare Zero Trust — email OTP, no passwords to remember.</p><p>The whole project lives in git, auto-deploys on push — changes are live in 30 seconds.</p><h3 id=\"the-funnel-im-building\">The funnel I'm building</h3><p>Target mechanics: 1,320 leads → ~130 replies → ~40 enter dialogue → 3–5 listing mandates. The system has been running for exactly one month — I'll have final numbers by April 23 when the last batch closes.</p><h3 id=\"what-this-means\">What this means</h3><p>The tool saves me several hours a day. It removes the most frustrating part of the work — repetitive manual grind. Instead, I spend that time on conversations with people who actually replied.</p><p>In six weeks: 16 versions. From the first WhatsApp Web send to a mobile runner, a light theme, interactive charts, and a unified Google Sheet sync. The project is alive. Still building.</p><p>I built this myself. Didn't hire a developer, didn't buy something off the shelf. Used Codex to design the architecture, brought in Claude Code for operational iterations, refined it in real time during a live campaign.</p><p>Not \"press a button and get a product.\" Collaborative work where you own the logic and quality, and the tool writes the code.</p>"
  },
  "segments": [
    {
      "kind": "text",
      "ru": "<p>Когда начинаешь работать с вторичкой в Дубае — одна из первых задач это холодный контакт с продавцами. База большая. Вручную не вывезти.</p>",
      "en": "<p>When you start working with secondary market real estate in Dubai, one of your first tasks is cold outreach to sellers. The database is large. Doing it manually doesn't scale.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Готовые сервисы для WhatsApp-рассылок? Либо дорогие, либо быстро блокируют аккаунт, либо не дают нужного контроля над текстами и очерёдностью. Классика.</p>",
      "en": "<p>Off-the-shelf WhatsApp outreach services? Either expensive, or they get your account banned quickly, or they don't give you enough control over the message content and send order. Classic.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Я написал свой инструмент. Мозг проекта — ChatGPT Codex. Именно с него всё началось: основная архитектура, скрипты автоматизации WhatsApp Web, структура батчей, пайплайн Google Sheets. Дальше подключился Claude Code — для CRM, дашборда, мобильного режима отправки и деплоя на Cloudflare. Я ставил задачи, они писали, я правил логику и тестировал.</p>",
      "en": "<p>So I built my own tool. The brain of the project is ChatGPT Codex — that's where everything started: the core architecture, WhatsApp Web automation scripts, batch structure, Google Sheets pipeline. Then Claude Code came in for the CRM, dashboard, mobile send mode, and Cloudflare deployment. I set the tasks, they wrote the code, I reviewed the logic and tested.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Примерно так выглядит разработка продукта, когда ты дизайнер, а не разработчик — но точно знаешь, что хочешь получить.</p>",
      "en": "<p>That's roughly what product development looks like when you're a designer, not a developer — but you know exactly what you want to get.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5\">Что это такое</h3>",
      "en": "<h3 id=\"what-it-is\">What it is</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Система называется Wonderdom Realty Outreach. Полуручной outbound workflow для работы с базой собственников — в моём случае это Tilal Al Ghaf, один из самых активных районов вторичного рынка Дубая.</p>",
      "en": "<p>The system is called Wonderdom Realty Outreach. A semi-manual outbound workflow for working a database of property owners — in my case, Tilal Al Ghaf, one of the most active secondary market communities in Dubai.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Цифры на сегодня: 91 отправленное сообщение, reply rate 6.6%, 21 уникальный шаблон, 85% экономии времени по сравнению с ручной работой.</p>",
      "en": "<p>Current numbers: 91 messages sent, 6.6% reply rate, 21 unique templates, 85% time saved compared to doing it by hand.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%BA%D0%B0%D0%BA-%D1%8D%D1%82%D0%BE-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%BE\">Как это устроено</h3>",
      "en": "<h3 id=\"how-it-works\">How it works</h3>"
    },
    {
      "kind": "text",
      "ru": "<p><em>Парсинг и приоритизация.</em> Python-скрипт читает базу и расставляет приоритеты — кому писать первому. Из 6249 строк в Google Sheet отфильтровано 1320 высококонфидентных лидов, нарезанных на 33 батча по 40 человек. Не просто очередь: тип объекта, кластер, срок публикации. Умная выборка.</p>",
      "en": "<p><em>Parsing and prioritisation.</em> A Python script reads the database and ranks leads by priority — who to contact first. From 6,249 rows in Google Sheets, 1,320 high-confidence leads were filtered and split into 33 batches of 40. Not just a queue: property type, cluster, listing age. Smart selection.</p>"
    },
    {
      "kind": "text",
      "ru": "<p><em>Персональные тексты.</em> 21 уникальный шаблон — 8 на английском, 6 на французском, 7 на русском. Каждое сообщение варьирует формулировки, подставляет имя, объект, кластер. WhatsApp детектит одинаковые сообщения и блокирует аккаунт. Персонализация — не про вежливость, это про выживание инструмента.</p>",
      "en": "<p><em>Personalised messages.</em> 21 unique templates — 8 in English, 6 in French, 7 in Russian. Each message varies its phrasing, inserts the owner's name, property details, cluster. WhatsApp detects identical messages and bans the account. Personalisation here isn't about politeness — it's about keeping the tool alive.</p>"
    },
    {
      "kind": "text",
      "ru": "<p><em>Волны отправки.</em> По 40 сообщений, между волнами — пауза. Имитирует человеческое поведение, снижает риск бана.</p>",
      "en": "<p><em>Send waves.</em> 40 messages per wave, with a pause between waves. Mimics human behaviour, reduces ban risk.</p>"
    },
    {
      "kind": "text",
      "ru": "<p><em>Отправка.</em> Скрипт открывает нужный чат через WhatsApp Web или через <code>wa.me</code>-ссылку на iPhone — текст уже подставлен. Финальный Send всегда ручной. Полная автоматизация здесь невозможна без немедленной блокировки — это принципиально, а не компромисс.</p>",
      "en": "<p><em>Sending.</em> The script opens the right chat via WhatsApp Web or a <code>wa.me</code> link on iPhone — with the text already pre-filled. The final Send is always manual. Full automation isn't possible without an immediate ban — that's a deliberate design choice, not a compromise.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"crm-%D0%B8-%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F\">CRM и мобильная версия</h3>",
      "en": "<h3 id=\"crm-and-mobile-mode\">CRM and mobile mode</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Параллельно — полноценная CRM. Вижу кому написал, когда, какой текст, был ли ответ. Дашборд с графиками активности по дням, статусы, KPI.</p>",
      "en": "<p>Alongside the outreach tool — a full CRM. I can see who I contacted, when, what message I sent, whether they replied. Dashboard with daily activity charts, statuses, KPIs.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Есть веб-версия и мобильная — отдельный Cloudflare Worker для отправки с iPhone, когда не за ноутбуком. Состояние синкается в Cloudflare D1 и пишется напрямую в Google Sheet через API. Авторизация через Cloudflare Zero Trust — вход по email OTP, никаких паролей.</p>",
      "en": "<p>There's a web version and a mobile version — a separate Cloudflare Worker for sending from iPhone when I'm not at my laptop. State syncs to Cloudflare D1 and writes directly to Google Sheets via API. Auth via Cloudflare Zero Trust — email OTP, no passwords to remember.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Весь проект живёт в git, автодеплой при push — изменения на сайте за 30 секунд.</p>",
      "en": "<p>The whole project lives in git, auto-deploys on push — changes are live in 30 seconds.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BA%D0%B0-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%83%D1%8E-%D1%8F-%D1%81%D1%82%D1%80%D0%BE%D1%8E\">Воронка, которую я строю</h3>",
      "en": "<h3 id=\"the-funnel-im-building\">The funnel I'm building</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Целевая механика: 1320 лидов → ~130 ответят → ~40 выйдут в диалог → 3–5 мандатов на продажу. Пока система работает ровно первый месяц — посмотрим на финальные цифры к 23 апреля, когда закроется последний батч.</p>",
      "en": "<p>Target mechanics: 1,320 leads → ~130 replies → ~40 enter dialogue → 3–5 listing mandates. The system has been running for exactly one month — I'll have final numbers by April 23 when the last batch closes.</p>"
    },
    {
      "kind": "heading",
      "ru": "<h3 id=\"%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%B8%D1%82\">Что это значит</h3>",
      "en": "<h3 id=\"what-this-means\">What this means</h3>"
    },
    {
      "kind": "text",
      "ru": "<p>Инструмент экономит несколько часов в день. Убирает самую раздражающую часть работы — монотонный ручной труд. Вместо этого трачу время на разговоры с теми, кто ответил.</p>",
      "en": "<p>The tool saves me several hours a day. It removes the most frustrating part of the work — repetitive manual grind. Instead, I spend that time on conversations with people who actually replied.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>За полтора месяца — 16 версий. От первой отправки через WhatsApp Web до мобильного runner'а, светлой темы интерфейса, интерактивных графиков и единого sync с Google Sheet. Проект живой, продолжаю развивать.</p>",
      "en": "<p>In six weeks: 16 versions. From the first WhatsApp Web send to a mobile runner, a light theme, interactive charts, and a unified Google Sheet sync. The project is alive. Still building.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Я сделал это сам. Не заказал разработчику, не купил готовое. Взял Codex, описал архитектуру, подключил Claude Code для операционных правок, итерировал прямо в процессе живой кампании.</p>",
      "en": "<p>I built this myself. Didn't hire a developer, didn't buy something off the shelf. Used Codex to design the architecture, brought in Claude Code for operational iterations, refined it in real time during a live campaign.</p>"
    },
    {
      "kind": "text",
      "ru": "<p>Не «нажми кнопку и получи продукт». Совместная работа, где ты отвечаешь за логику и качество, а инструмент пишет код.</p>",
      "en": "<p>Not \"press a button and get a product.\" Collaborative work where you own the logic and quality, and the tool writes the code.</p>"
    }
  ]
}
---
