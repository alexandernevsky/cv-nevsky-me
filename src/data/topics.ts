// AUTO-GENERATED from content/topics/ - do not edit manually

export type TopicCategory =
  | 'start'
  | 'about'
  | 'work'
  | 'builds'
  | 'ai'
  | 'life'
  | 'contact'

export interface Topic {
  id: string
  category: TopicCategory
  label: string
  promptText: string
  response: string
  keywords?: string[]
  visibleInSidebar?: boolean
  chipLabel?: string
  relatedProjectIds?: string[]
  followUps?: string[]
  labelRu?: string
  promptTextRu?: string
  responseRu?: string
  chipLabelRu?: string
  keywordsRu?: string[]
}

export const topics: Topic[] = [
  {
    "id": "who",
    "category": "start",
    "label": "Who are you?",
    "chipLabel": "Who are you?",
    "promptText": "Who are you?",
    "response": "I am Alexander Nevsky — a Senior Product Designer turning into an AI Product Orchestrator.\n\nI have spent 15+ years designing complex digital systems: fintech wallets, neobanks, B2B admin tools, healthcare platforms, real-estate portals, SaaS, and now AI-native products. I work from early discovery through to production — research, architecture, interface, design system, prototype, release.\n\nI am based in Dubai. I currently build live products with AI in the loop, and ship MVPs with small focused teams.",
    "keywords": [
      "who",
      "name",
      "introduce",
      "yourself",
      "about you",
      "bio"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [],
    "followUps": [
      "background",
      "current-builds",
      "selected-work"
    ],
    "labelRu": "Кто вы?",
    "chipLabelRu": "Кто вы?",
    "promptTextRu": "Кто вы?",
    "responseRu": "Я — Александр Невский, Senior Product Designer, сейчас в роли AI Product Orchestrator.\n\nБолее 15 лет я проектирую сложные цифровые продукты: fintech, neobank, B2B-инструменты, healthcare, proptech, SaaS и AI-native сервисы.\n\nБазируюсь в Дубае, запускаю рабочие MVP небольшими сфокусированными командами.",
    "keywordsRu": [
      "кто",
      "представьтесь",
      "о себе",
      "био",
      "кратко о вас"
    ]
  },
  {
    "id": "what-is-this",
    "category": "start",
    "label": "What is this interface?",
    "chipLabel": "What is this?",
    "promptText": "What is this interface?",
    "response": "This is a conversational interface to my work — a portfolio, resume, and product archive presented as a chat thread.\n\nUse the left sidebar to jump between curated topics. The input below accepts free-form questions, but the scope is bounded: it answers only about my background, projects, products, process, and contact. Anything outside that gets a polite redirect back to allowed topics.\n\nNo marketing pages, no hero tropes. Just the work.",
    "keywords": [
      "what is this",
      "how this works",
      "interface",
      "site",
      "about site"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [],
    "followUps": [
      "who",
      "selected-work",
      "ai-orchestrator"
    ],
    "labelRu": "Что это за интерфейс?",
    "chipLabelRu": "Что это?",
    "promptTextRu": "Что это за интерфейс?",
    "responseRu": "Это разговорный интерфейс моего портфолио, резюме и архива проектов.\n\nСлева — готовые темы. Ниже можно писать свободные вопросы, но в рамках контекста: мой опыт, проекты, процесс и контакты.",
    "keywordsRu": [
      "что это",
      "как работает",
      "интерфейс",
      "сайт",
      "что за сайт"
    ]
  },
  {
    "id": "background",
    "category": "about",
    "label": "Background",
    "chipLabel": "Background",
    "promptText": "Tell me about your background.",
    "response": "My path is long and specific. A short version:\n\n**2010–2012 · Editorial web.** I designed the first web version of *Izvestia* newspaper, then joined RIA Novosti to work on portal UI, infographics, and regional editorial products. That is where I learned discipline of grid, pace, and respect for text.\n\n**2012–2017 · EMIAS, Moscow.** Design director of the city-scale medical information system. I built the design function from zero to 12 designers, launched EMIAS UI (a full design system with semantic tokens), and owned the interfaces used daily by doctors and patients across Moscow.\n\n**2018 · VTB / Luxoft.** Senior product designer inside Federation Tower — Corporate Business Portal: 360° client cards, sales funnels, interactive dashboards for the bank's front office.\n\n**2018–2019 · Wallarm.** Product designer for an API / application security platform. UX refactor of the incident triage flow, a component library, and semantic tokens shipped to the frontend as CSS variables.\n\n**2020–2022 · m2 (Square Meter).** Led four product designers on the B2B Deal Desk team — mortgage, e-registration, remote signing. Revenue center of the company.\n\n**2023–2024 · Keytom (Dubai).** Product designer for a Dubai-based neobank bringing fiat and crypto into one MVP.\n\n**2023–2024 · Yango Pay (Dubai).** Senior product designer for a mobile wallet embedded in the Yango Taxi app — instant top-up via mobile money, for a cross-functional team of 16.\n\n**2025 · Fundmates & The Driven Podcast.** Design sprints for a US startup that funds YouTube creators, and full design + brand direction for a podcast product.\n\nIn parallel, from 2020 onward, I kept designing for clients on Framer and Webflow, and quietly started building my own products with AI-assisted tooling.",
    "keywords": [
      "background",
      "experience",
      "history",
      "career",
      "past",
      "journey"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [],
    "followUps": [
      "selected-work",
      "design-philosophy",
      "current-builds"
    ],
    "labelRu": "Бэкграунд",
    "chipLabelRu": "Бэкграунд",
    "promptTextRu": "Расскажите про ваш бэкграунд.",
    "responseRu": "Коротко по этапам:\n\n- 2010–2012: editorial web (Известия, РИА Новости)\n- 2012–2017: EMIAS, design director, системный дизайн на уровне города\n- 2018: VTB/Luxoft, корпоративный банковский портал\n- 2018–2019: Wallarm, cybersecurity UX + design system\n- 2020–2022: m2, лид команды product-дизайна\n- 2023–2024: Keytom и Yango Pay в Дубае\n- 2025: Fundmates и The Driven Podcast\n\nПараллельно строю свои продукты с AI-assisted workflow.",
    "keywordsRu": [
      "опыт",
      "история",
      "карьера",
      "бэкграунд",
      "путь"
    ]
  },
  {
    "id": "design-philosophy",
    "category": "about",
    "label": "Design philosophy",
    "chipLabel": "Design philosophy",
    "promptText": "What is your design philosophy?",
    "response": "A few things I keep returning to:\n\n- **Design is discipline, not decoration.** The best interfaces get out of the way. When a doctor opens EMIAS and does not notice the design — that is the win.\n- **Systems over screens.** A good pattern fixed once updates the entire product. I build design systems with semantic tokens that live in code, not in Figma screenshots.\n- **Speed is a feature.** Release rhythm matters. I prefer shipping a narrow, correct thing now over a wide, polished thing in six months.\n- **Clarity beats cleverness.** If a user has to read the label twice, the label is wrong.\n- **Taste is a tool.** It is trained through exposure and reps, not declared on a portfolio.\n- **AI is a collaborator, not a mascot.** It expands what a single designer can orchestrate — research, prototyping, content, ops. It should be invisible in the product surface unless the feature *is* the AI.",
    "keywords": [
      "philosophy",
      "principles",
      "approach",
      "style",
      "values",
      "belief"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [],
    "followUps": [
      "ai-orchestrator",
      "background",
      "selected-work"
    ],
    "labelRu": "Дизайн-философия",
    "chipLabelRu": "Философия",
    "promptTextRu": "Какая у вас дизайн-философия?",
    "responseRu": "Мои базовые принципы:\n\n- Дизайн — это дисциплина, а не декор\n- Системы важнее отдельных экранов\n- Скорость релиза — часть качества\n- Ясность важнее «умности»\n- AI — рабочий соавтор, а не витрина",
    "keywordsRu": [
      "философия",
      "подход",
      "принципы",
      "стиль"
    ]
  },
  {
    "id": "selected-work",
    "category": "work",
    "label": "Selected cases",
    "chipLabel": "Selected cases",
    "promptText": "Show me selected cases.",
    "response": "Recent and representative work across fintech, AI, media, and platform design:",
    "keywords": [
      "work",
      "projects",
      "cases",
      "portfolio",
      "selected",
      "examples"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [
      "web-application-with-ai-for-startup-fundmates",
      "sell-one-video-turning-future-video-income-into-money-today",
      "branding-for-the-driven-podcast",
      "worked-as-a-designer-at-dubai-s-yango-pay",
      "created-interfaces-for-a-dubai-neobank",
      "managed-a-group-of-designers-at-square-meter"
    ],
    "followUps": [
      "fundmates",
      "driven-podcast",
      "keytom",
      "cv"
    ],
    "labelRu": "Избранные кейсы",
    "chipLabelRu": "Кейсы",
    "promptTextRu": "Покажите избранные кейсы.",
    "responseRu": "Ниже — репрезентативные проекты в fintech, AI, media и platform design.",
    "keywordsRu": [
      "кейсы",
      "проекты",
      "портфолио",
      "работы",
      "примеры"
    ]
  },
  {
    "id": "fundmates",
    "category": "work",
    "label": "Fundmates",
    "chipLabel": "Fundmates",
    "promptText": "Tell me about Fundmates.",
    "response": "**Fundmates** is a US startup that raises capital for YouTube creators. Over several months in 2025 I ran design sprints with the team on two surfaces.\n\n**Chat with AI — investor-facing.** A conversational interface where the creator grants access to their channel analytics, receives an automated performance read-out, and is presented with tailored financing offers. The user then negotiates the deal directly inside the dialogue. I designed the conversation architecture, message grammar, card states, and the hand-off between the analytical layer and the offer flow.\n\n**Sell One Video — MVP.** A service that lets YouTube creators sell future income from a *specific* video for a fixed amount — fast, transparent, no loans. I owned the end-to-end MVP: landing, sign-up, video scoring, offer generation, signing, and creator dashboard.\n\nIt is one of the more interesting briefs I have worked on recently — a real attempt to turn media metrics into a tradeable financial primitive.",
    "keywords": [
      "fundmates",
      "youtube",
      "creators",
      "funding",
      "ai chat",
      "creator economy"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [
      "web-application-with-ai-for-startup-fundmates",
      "sell-one-video-turning-future-video-income-into-money-today"
    ],
    "followUps": [
      "ai-orchestrator",
      "selected-work",
      "driven-podcast"
    ],
    "labelRu": "Fundmates",
    "chipLabelRu": "Fundmates",
    "promptTextRu": "Расскажите про Fundmates.",
    "responseRu": "Fundmates — стартап, который финансирует YouTube-креаторов.\n\nЯ проектировал investor-facing AI chat и MVP Sell One Video: от разговорной логики до экранов оффера, подписания и дашборда.",
    "keywordsRu": [
      "fundmates",
      "ютуб",
      "креаторы",
      "финансирование"
    ]
  },
  {
    "id": "driven-podcast",
    "category": "work",
    "label": "The Driven Podcast",
    "chipLabel": "The Driven Podcast",
    "promptText": "Tell me about The Driven Podcast.",
    "response": "**The Driven Podcast** is a YouTube series about entrepreneurs, creators, and operators pushing the edges of their industries. I joined the creative team as brand + product designer.\n\nI developed the visual identity — logo, type system, cover grammar, color system — and then designed and shipped the web presence: episodes, guest pages, short-form clips, and the publishing surface. The site was composed in Figma and assembled in Framer. Minimal, fast, guest-forward, story-forward.\n\nIt is a media product, not a marketing page — which means every episode becomes a new layout problem, not a CMS row.",
    "keywords": [
      "driven",
      "podcast",
      "branding",
      "identity",
      "media",
      "framer"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [
      "branding-for-the-driven-podcast",
      "website-design-for-the-driven-podcast"
    ],
    "followUps": [
      "selected-work",
      "fundmates",
      "design-philosophy"
    ],
    "labelRu": "The Driven Podcast",
    "chipLabelRu": "The Driven Podcast",
    "promptTextRu": "Расскажите про The Driven Podcast.",
    "responseRu": "Для The Driven Podcast я делал бренд и продуктовый слой: айдентику, визуальную систему и веб-поверхность для выпусков и гостей.",
    "keywordsRu": [
      "driven",
      "подкаст",
      "брендинг",
      "медиа"
    ]
  },
  {
    "id": "keytom",
    "category": "work",
    "label": "Keytom neobank",
    "chipLabel": "Keytom neobank",
    "promptText": "Tell me about Keytom.",
    "response": "**Keytom** is a Dubai-based neobank. In 2023 I worked as product designer on the MVP — a single product combining fiat and crypto in a clear, modern interface.\n\nI owned the core user flows, worked inside a strict regulated environment, and helped launch the first version. This was my first hands-on fintech in Dubai after moving here.",
    "keywords": [
      "keytom",
      "neobank",
      "crypto",
      "fiat",
      "dubai bank"
    ],
    "visibleInSidebar": false,
    "relatedProjectIds": [
      "created-interfaces-for-a-dubai-neobank"
    ],
    "followUps": [
      "yango-pay",
      "selected-work"
    ],
    "labelRu": "Keytom neobank",
    "chipLabelRu": "Keytom neobank",
    "promptTextRu": "Расскажите про Keytom.",
    "responseRu": "Keytom — необанк из Дубая. Я проектировал MVP «fiat + crypto», ключевые сценарии и первую рабочую версию продукта.",
    "keywordsRu": [
      "keytom",
      "необанк",
      "фиат",
      "крипто"
    ]
  },
  {
    "id": "yango-pay",
    "category": "work",
    "label": "Yango Pay",
    "chipLabel": "Yango Pay",
    "promptText": "Tell me about Yango Pay.",
    "response": "**Yango Pay** is a mobile wallet built into the Yango Taxi app, letting users instantly top up their balance via mobile money.\n\nFrom June 2023 to November 2024 I worked as Senior Product Designer on a cross-functional team of 16, based in Dubai. I designed the top-up and payment flows, edge states, operator dashboards, and contributed to the wallet's overall UX architecture inside the taxi super-app.",
    "keywords": [
      "yango",
      "pay",
      "wallet",
      "taxi",
      "mobile money"
    ],
    "visibleInSidebar": false,
    "relatedProjectIds": [
      "worked-as-a-designer-at-dubai-s-yango-pay"
    ],
    "followUps": [
      "keytom",
      "selected-work"
    ],
    "labelRu": "Yango Pay",
    "chipLabelRu": "Yango Pay",
    "promptTextRu": "Расскажите про Yango Pay.",
    "responseRu": "Yango Pay — мобильный кошелек внутри приложения Yango Taxi. Я делал top-up/payment сценарии и UX-архитектуру wallet-секции.",
    "keywordsRu": [
      "yango",
      "pay",
      "кошелек",
      "платежи"
    ]
  },
  {
    "id": "cv",
    "category": "work",
    "label": "Resume / CV",
    "chipLabel": "Resume",
    "promptText": "Can I see your resume?",
    "response": "**Alexander Nevsky** — Senior Product Designer · AI Product Orchestrator\nDubai, UAE · Open to onsite / hybrid / remote\n\n### Briefly\n\nSenior product designer with 15+ years of experience across fintech, proptech, SaaS, and AI-enabled products. I design complex digital systems — mobile wallets, financial platforms, B2B admin tools, conversational AI flows — from early discovery to production. I combine product mindset, design-systems rigor, and AI-assisted workflow to move faster and deliver higher-quality results.\n\n### Strengths\n\n- Product thinking across fintech, B2B, and AI-native product surfaces\n- Design systems (semantic tokens, component libraries, code-synced primitives)\n- Cross-functional leadership (led teams up to 12 designers)\n- Rapid prototyping and MVP shipping with AI-assisted tooling\n- Comfort inside regulated environments (banking, healthcare, city platforms)\n\n### Recent roles\n\n- **2025 · Fundmates** — design sprints, investor-facing AI chat, creator MVP\n- **2025 · The Driven Podcast** — brand + product design, Framer delivery\n- **2023–2024 · Yango Pay (Dubai)** — Senior Product Designer, cross-functional team of 16\n- **2023–2024 · Keytom (Dubai)** — Product Designer, fiat+crypto neobank MVP\n- **2020–2022 · m2 (Square Meter)** — Design lead, B2B Deal Desk, team of 4\n- **2018–2019 · Wallarm** — Product Designer, cybersecurity platform + design system\n- **2012–2017 · EMIAS Moscow** — Design Director, team of 12, city-scale design system\n\n### Links\n\n- Portfolio → [nevskii.me](https://nevskii.me)\n- Blog → [nevsky.me](https://nevsky.me)\n- LinkedIn → [/in/nevskyalexander](https://linkedin.com/in/nevskyalexander)\n- Email → [hi@nevsky.me](mailto:hi@nevsky.me)",
    "keywords": [
      "cv",
      "resume",
      "hire",
      "hiring",
      "experience"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [],
    "followUps": [
      "background",
      "selected-work",
      "contact"
    ],
    "labelRu": "Резюме / CV",
    "chipLabelRu": "Резюме",
    "promptTextRu": "Можно посмотреть ваше резюме?",
    "responseRu": "Senior Product Designer с 15+ годами опыта в fintech, proptech, SaaS и AI-продуктах.\n\nСильные стороны: продуктовое мышление, дизайн-системы, кросс-функциональное лидерство, быстрые MVP.\n\nЛокация: Дубай, ОАЭ. Формат: onsite / hybrid / remote.",
    "keywordsRu": [
      "резюме",
      "cv",
      "опыт работы",
      "нанять"
    ]
  },
  {
    "id": "current-builds",
    "category": "builds",
    "label": "What I'm building now",
    "chipLabel": "Current builds",
    "promptText": "What are you building right now?",
    "response": "Three live builds, all solo-orchestrated with AI in the loop:\n\n**1. Real-estate CRM.** Cold calling, WhatsApp outreach, lead prioritization, follow-ups, and auto-generated PDF benchmark reports for agents working the Dubai market. Built as a practical tool for a specific workflow, not a generic CRM.\n\n**2. Native Apple app — live call assistant.** A Swift app using Apple Intelligence for real-time call transcription, live response suggestions, and interview support. Runs on-device. For people who take a lot of calls and want a structured memory of them.\n\n**3. Family productivity app.** A private app for family schedules, tasks, and gamified rewards — remote coordination for parents, kids, and extended family. Designed around the way my own family actually runs.\n\nEach is small, specific, and meant to be *used*, not demoed.",
    "keywords": [
      "current",
      "building",
      "now",
      "personal",
      "side",
      "own product",
      "mvp"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [
      "dubai-crm",
      "callcoach",
      "family-app"
    ],
    "followUps": [
      "ai-orchestrator",
      "toolchain",
      "design-philosophy"
    ],
    "labelRu": "Что я сейчас строю",
    "chipLabelRu": "Текущие билды",
    "promptTextRu": "Что вы сейчас делаете?",
    "responseRu": "Сейчас у меня 3 live-направления:\n\n1) Real-estate CRM для агентского workflow\n2) iOS live call assistant (on-device)\n3) Family productivity app для семейной координации",
    "keywordsRu": [
      "сейчас делаете",
      "текущие проекты",
      "что строите",
      "mvp"
    ]
  },
  {
    "id": "ai-orchestrator",
    "category": "ai",
    "label": "AI Product Orchestrator",
    "chipLabel": "AI orchestrator",
    "promptText": "What do you mean by AI Product Orchestrator?",
    "response": "I've spent 15+ years designing digital products — fintech, proptech, neobanks, B2B platforms. I know how to turn a messy problem into a clear interface. But somewhere in the last two years, something shifted.\n\nI stopped handing off Figma files. I started shipping products.\n\nThe term that fits best right now: **AI Product Orchestrator**. I don't write every line of code — I design the system, specify intent, and coordinate AI agents (Claude Code, Codex, Cursor) to build, test, and iterate. The result isn't a prototype in a deck. It's a working, clickable, deployable product — built in days, not months.\n\nThis is what Andrej Karpathy called the shift from coder to conductor to orchestrator. For a product designer with 15 years of UX architecture, system thinking, and product taste — it's not a threat. It's leverage.\n\n### What I bring to this new role\n\n- Product thinking and UX architecture honed on complex financial products (Yango Pay, Keytom, m2.ru, Wallarm)\n- Art direction and visual taste to keep AI output from looking like AI output\n- The ability to write clear specs and prompts that AI agents actually execute correctly\n- End-to-end delivery: from discovery and UX flow to live MVP — without a dev team\n\n### My current stack\n\n- **Claude Code** (Terminal) — agentic coding and architecture validation\n- **OpenAI Codex** — greenfield builds and rapid iteration\n- **Cursor IDE** — spec-driven development and fast implementation cycles\n- **ChatGPT** — UX copy, product narrative, and research synthesis\n- **Gemini** — fast concept drafts and multimodal exploration\n- **Midjourney + Sora** — visual ideation\n- **Recraft** — production-ready vector output\n- **Figma + Framer** — design systems and high-fidelity prototypes\n\nI'm based in Dubai. I work with international teams and startups. I build things that work — not decks that explain how they might.\n\n**Open to:** contract product design, AI-assisted MVP builds, product consulting.",
    "keywords": [
      "ai",
      "orchestrator",
      "ai-assisted",
      "ai product",
      "agentic",
      "workflow"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [],
    "followUps": [
      "toolchain",
      "current-builds",
      "design-philosophy"
    ],
    "labelRu": "AI Product Orchestrator",
    "chipLabelRu": "AI orchestrator",
    "promptTextRu": "Что вы имеете в виду под AI Product Orchestrator?",
    "responseRu": "Больше 15 лет я проектирую цифровые продукты — fintech, proptech, необанки, B2B-платформы. Я умею превращать запутанную задачу в ясный интерфейс. Но последние два года что-то сместилось.\n\nЯ перестал сдавать Figma-файлы. Я начал шипить продукты.\n\nТермин, который сейчас точнее всего описывает мою роль — **AI Product Orchestrator**. Я не пишу каждую строку кода — я проектирую систему, формулирую намерение и координирую AI-агентов (Claude Code, Codex, Cursor), которые собирают, тестируют и итерируют. На выходе — не прототип в презентации, а рабочий, кликабельный, задеплоенный продукт, собранный за дни, а не за месяцы.\n\nЭто тот самый сдвиг, который Andrej Karpathy назвал переходом от coder к conductor и дальше — к orchestrator. Для продуктового дизайнера с 15 годами UX-архитектуры, системного мышления и продуктового вкуса это не угроза. Это рычаг.\n\n### Что я приношу в эту роль\n\n- Продуктовое мышление и UX-архитектуру, закалённые на сложных финтех-продуктах (Yango Pay, Keytom, m2.ru, Wallarm)\n- Арт-дирекшн и вкус, чтобы AI-вывод не выглядел как AI-вывод\n- Умение писать чёткие спеки и промпты, которые AI-агенты реально исполняют корректно\n- Доставка end-to-end: от discovery и UX-флоу до живого MVP — без dev-команды\n\n### Текущий стек\n\n- **Claude Code** (Terminal) — agentic coding и валидация архитектуры\n- **OpenAI Codex** — greenfield-сборки и быстрая итерация\n- **Cursor IDE** — spec-driven разработка и быстрые циклы реализации\n- **ChatGPT** — UX-копирайтинг, продуктовый нарратив, синтез ресёрча\n- **Gemini** — быстрые концепт-драфты и мультимодальное исследование\n- **Midjourney + Sora** — визуальные идеи\n- **Recraft** — векторные ассеты в прод\n- **Figma + Framer** — дизайн-системы и high-fidelity прототипы\n\nЯ в Дубае, работаю с международными командами и стартапами. Я делаю вещи, которые работают, — не слайды о том, как они могли бы работать.\n\n**Открыт к:** контрактному продуктовому дизайну, AI-assisted MVP-сборкам, продуктовому консалтингу.",
    "keywordsRu": [
      "ai orchestrator",
      "ai подход",
      "оркестратор",
      "agentic workflow"
    ]
  },
  {
    "id": "toolchain",
    "category": "ai",
    "label": "Toolchain",
    "chipLabel": "Toolchain",
    "promptText": "What tools do you use?",
    "response": "Tools are secondary — but since they are asked:\n\n**Thinking & writing:** Claude, ChatGPT, Gemini.\n**Code & product scaffolding:** Cursor, Codex, Claude.\n**Visual exploration:** Midjourney, Sora, Recraft.\n**Interface & delivery:** Figma, Framer, Webflow.\n**Platform:** Cloudflare (Workers, R2, D1, KV).\n\nI do not chase new tools. I adopt them when they reliably remove friction from a flow I already understand.",
    "keywords": [
      "tool",
      "tools",
      "stack",
      "toolchain",
      "what do you use"
    ],
    "visibleInSidebar": false,
    "relatedProjectIds": [],
    "followUps": [
      "ai-orchestrator",
      "design-philosophy",
      "current-builds"
    ],
    "labelRu": "Инструменты",
    "chipLabelRu": "Инструменты",
    "promptTextRu": "Какие инструменты вы используете?",
    "responseRu": "Основной стек:\n\n- Мыслить/писать: Claude, ChatGPT, Gemini\n- Код/продукт: Cursor, Codex, Claude\n- Визуал: Midjourney, Sora, Recraft\n- Интерфейсы: Figma, Framer, Webflow\n- Платформа: Cloudflare",
    "keywordsRu": [
      "инструменты",
      "стек",
      "toolchain",
      "что используете"
    ]
  },
  {
    "id": "dubai",
    "category": "life",
    "label": "Life in Dubai",
    "chipLabel": "Life in Dubai",
    "promptText": "What is your life in Dubai like?",
    "response": "I moved to Dubai in 2022. I live here with my family.\n\nThe market is fast, the briefs are concrete, and the people I work with are usually building something for the first time — neobanks, wallets, creator-economy products, regional SaaS. The pace suits me: less ceremony, more shipping.\n\nOutside of product work, I spend time with the kids, run small side builds, and occasionally manage a small family café remotely. I like living inside the work rather than commuting to it.",
    "keywords": [
      "dubai",
      "uae",
      "life",
      "move",
      "living",
      "family"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [],
    "followUps": [
      "background",
      "current-builds",
      "contact"
    ],
    "labelRu": "Жизнь в Дубае",
    "chipLabelRu": "Жизнь в Дубае",
    "promptTextRu": "Какая у вас жизнь в Дубае?",
    "responseRu": "Живу в Дубае с 2022 года с семьей. Нравится темп рынка и практичность задач: меньше церемоний, больше реальной поставки.",
    "keywordsRu": [
      "дубай",
      "жизнь в дубае",
      "оаэ",
      "переезд"
    ]
  },
  {
    "id": "contact",
    "category": "contact",
    "label": "Get in touch",
    "chipLabel": "Get in touch",
    "promptText": "How can I get in touch?",
    "response": "The fastest channels:\n\n- **Email** — [hi@nevsky.me](mailto:hi@nevsky.me)\n- **Telegram** — [@alexander_nevsky](https://t.me/alexander_nevsky)\n- **WhatsApp** — [+971 50 503 1984](https://wa.me/971505031984)\n- **LinkedIn** — [/in/nevskyalexander](https://linkedin.com/in/nevskyalexander)\n\nAlso:\n- Portfolio → [nevskii.me](https://nevskii.me)\n- Blog → [nevsky.me](https://nevsky.me)\n\nIf you are hiring or have a specific product in mind, email is best — include the shape of the problem and the rough timeline.",
    "keywords": [
      "contact",
      "reach",
      "email",
      "telegram",
      "whatsapp",
      "hire",
      "get in touch",
      "linkedin"
    ],
    "visibleInSidebar": true,
    "relatedProjectIds": [],
    "followUps": [
      "cv",
      "current-builds",
      "selected-work"
    ],
    "labelRu": "Связаться",
    "chipLabelRu": "Связаться",
    "promptTextRu": "Как с вами связаться?",
    "responseRu": "Быстрее всего:\n\n- Email — [hi@nevsky.me](mailto:hi@nevsky.me)\n- Telegram — [@alexander_nevsky](https://t.me/alexander_nevsky)\n- WhatsApp — [+971 50 503 1984](https://wa.me/971505031984)\n- LinkedIn — [/in/nevskyalexander](https://linkedin.com/in/nevskyalexander)",
    "keywordsRu": [
      "контакт",
      "связаться",
      "телеграм",
      "почта",
      "ватсап"
    ]
  }
]

export const topicsById: Record<string, Topic> = Object.fromEntries(
  topics.map(t => [t.id, t])
)

export function getTopic(id: string): Topic | undefined {
  return topicsById[id]
}

export function getTopicLabel(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topic.labelRu || topic.label : topic.label
}

export function getTopicChipLabel(topic: Topic, lang: 'en' | 'ru'): string {
  if (lang === 'ru') return topic.chipLabelRu || topic.labelRu || topic.chipLabel || topic.label
  return topic.chipLabel || topic.label
}

export function getTopicPrompt(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topic.promptTextRu || topic.promptText : topic.promptText
}

export function getTopicResponse(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topic.responseRu || topic.response : topic.response
}

export function getTopicKeywords(topic: Topic, lang: 'en' | 'ru'): string[] {
  return lang === 'ru' ? topic.keywordsRu ?? [] : topic.keywords ?? []
}

export function getTopicAllLabels(topic: Topic): string[] {
  return topic.labelRu ? [topic.label, topic.labelRu] : [topic.label]
}

export const sidebarCategories: {
  id: TopicCategory
  label: string
  labelRu: string
}[] = [
  { id: 'start', label: 'Start here', labelRu: 'Старт' },
  { id: 'about', label: 'About', labelRu: 'Обо мне' },
  { id: 'work', label: 'Work', labelRu: 'Работы' },
  { id: 'builds', label: 'Current builds', labelRu: 'Сейчас делаю' },
  { id: 'ai', label: 'AI approach', labelRu: 'Подход к AI' },
  { id: 'life', label: 'Life', labelRu: 'Жизнь' },
  { id: 'contact', label: 'Contact', labelRu: 'Контакты' },
]
