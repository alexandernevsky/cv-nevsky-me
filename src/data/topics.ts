/**
 * Curated conversation dataset for the Alexander Nevsky interface.
 *
 * Each topic is a node the interface can surface — either via a sidebar
 * preset or via free-text matching. Responses are written first-person in
 * a calm, specific voice. Markdown is rendered by react-markdown.
 */

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
  /** Sidebar label */
  label: string
  /** Text inserted as the user message when this topic is triggered */
  promptText: string
  /** Markdown answer */
  response: string
  /** Alternate phrasings for free-text matching */
  keywords?: string[]
  /** Pinned in sidebar vs. reachable only via follow-ups / free-text */
  visibleInSidebar?: boolean
  /** Short label used for inline chips (follow-ups, welcome state) */
  chipLabel?: string
  /** Related projects to render as cards under the answer */
  relatedProjectIds?: string[]
  /** Topic IDs suggested as follow-ups */
  followUps?: string[]
  labelRu?: string
  promptTextRu?: string
  responseRu?: string
  chipLabelRu?: string
  keywordsRu?: string[]
}

export const topics: Topic[] = [
  // ─── Start Here ──────────────────────────────────────────────────
  {
    id: 'who',
    category: 'start',
    label: 'Who are you?',
    chipLabel: 'Who are you?',
    promptText: 'Who are you?',
    visibleInSidebar: true,
    keywords: ['who', 'name', 'introduce', 'yourself', 'about you', 'bio'],
    response: `I am Alexander Nevsky — a Senior Product Designer turning into an AI Product Orchestrator.

I have spent 15+ years designing complex digital systems: fintech wallets, neobanks, B2B admin tools, healthcare platforms, real-estate portals, SaaS, and now AI-native products. I work from early discovery through to production — research, architecture, interface, design system, prototype, release.

I am based in Dubai. I currently build live products with AI in the loop, and ship MVPs with small focused teams.`,
    followUps: ['background', 'current-builds', 'selected-work'],
  },
  {
    id: 'what-is-this',
    category: 'start',
    label: 'What is this interface?',
    chipLabel: 'What is this?',
    promptText: 'What is this interface?',
    visibleInSidebar: true,
    keywords: ['what is this', 'how this works', 'interface', 'site', 'about site'],
    response: `This is a conversational interface to my work — a portfolio, resume, and product archive presented as a chat thread.

Use the left sidebar to jump between curated topics. The input below accepts free-form questions, but the scope is bounded: it answers only about my background, projects, products, process, and contact. Anything outside that gets a polite redirect back to allowed topics.

No marketing pages, no hero tropes. Just the work.`,
    followUps: ['who', 'selected-work', 'ai-orchestrator'],
  },

  // ─── About ───────────────────────────────────────────────────────
  {
    id: 'background',
    category: 'about',
    label: 'Background',
    chipLabel: 'Background',
    promptText: 'Tell me about your background.',
    visibleInSidebar: true,
    keywords: ['background', 'experience', 'history', 'career', 'past', 'journey'],
    response: `My path is long and specific. A short version:

**2010–2012 · Editorial web.** I designed the first web version of *Izvestia* newspaper, then joined RIA Novosti to work on portal UI, infographics, and regional editorial products. That is where I learned discipline of grid, pace, and respect for text.

**2012–2017 · EMIAS, Moscow.** Design director of the city-scale medical information system. I built the design function from zero to 12 designers, launched EMIAS UI (a full design system with semantic tokens), and owned the interfaces used daily by doctors and patients across Moscow.

**2018 · VTB / Luxoft.** Senior product designer inside Federation Tower — Corporate Business Portal: 360° client cards, sales funnels, interactive dashboards for the bank's front office.

**2018–2019 · Wallarm.** Product designer for an API / application security platform. UX refactor of the incident triage flow, a component library, and semantic tokens shipped to the frontend as CSS variables.

**2020–2022 · m2 (Square Meter).** Led four product designers on the B2B Deal Desk team — mortgage, e-registration, remote signing. Revenue center of the company.

**2023–2024 · Keytom (Dubai).** Product designer for a Dubai-based neobank bringing fiat and crypto into one MVP.

**2023–2024 · Yango Pay (Dubai).** Senior product designer for a mobile wallet embedded in the Yango Taxi app — instant top-up via mobile money, for a cross-functional team of 16.

**2025 · Fundmates & The Driven Podcast.** Design sprints for a US startup that funds YouTube creators, and full design + brand direction for a podcast product.

In parallel, from 2020 onward, I kept designing for clients on Framer and Webflow, and quietly started building my own products with AI-assisted tooling.`,
    followUps: ['selected-work', 'design-philosophy', 'current-builds'],
  },
  {
    id: 'design-philosophy',
    category: 'about',
    label: 'Design philosophy',
    chipLabel: 'Design philosophy',
    promptText: 'What is your design philosophy?',
    visibleInSidebar: true,
    keywords: ['philosophy', 'principles', 'approach', 'style', 'values', 'belief'],
    response: `A few things I keep returning to:

- **Design is discipline, not decoration.** The best interfaces get out of the way. When a doctor opens EMIAS and does not notice the design — that is the win.
- **Systems over screens.** A good pattern fixed once updates the entire product. I build design systems with semantic tokens that live in code, not in Figma screenshots.
- **Speed is a feature.** Release rhythm matters. I prefer shipping a narrow, correct thing now over a wide, polished thing in six months.
- **Clarity beats cleverness.** If a user has to read the label twice, the label is wrong.
- **Taste is a tool.** It is trained through exposure and reps, not declared on a portfolio.
- **AI is a collaborator, not a mascot.** It expands what a single designer can orchestrate — research, prototyping, content, ops. It should be invisible in the product surface unless the feature *is* the AI.`,
    followUps: ['ai-orchestrator', 'background', 'selected-work'],
  },

  // ─── Work ────────────────────────────────────────────────────────
  {
    id: 'selected-work',
    category: 'work',
    label: 'Selected cases',
    chipLabel: 'Selected cases',
    promptText: 'Show me selected cases.',
    visibleInSidebar: true,
    keywords: ['work', 'projects', 'cases', 'portfolio', 'selected', 'examples'],
    response: `Recent and representative work across fintech, AI, media, and platform design:`,
    relatedProjectIds: [
      'web-application-with-ai-for-startup-fundmates',
      'sell-one-video-turning-future-video-income-into-money-today',
      'branding-for-the-driven-podcast',
      'worked-as-a-designer-at-dubai-s-yango-pay',
      'created-interfaces-for-a-dubai-neobank',
      'managed-a-group-of-designers-at-square-meter',
    ],
    followUps: ['fundmates', 'driven-podcast', 'keytom', 'cv'],
  },
  {
    id: 'fundmates',
    category: 'work',
    label: 'Fundmates',
    chipLabel: 'Fundmates',
    promptText: 'Tell me about Fundmates.',
    visibleInSidebar: true,
    keywords: ['fundmates', 'youtube', 'creators', 'funding', 'ai chat', 'creator economy'],
    response: `**Fundmates** is a US startup that raises capital for YouTube creators. Over several months in 2025 I ran design sprints with the team on two surfaces.

**Chat with AI — investor-facing.** A conversational interface where the creator grants access to their channel analytics, receives an automated performance read-out, and is presented with tailored financing offers. The user then negotiates the deal directly inside the dialogue. I designed the conversation architecture, message grammar, card states, and the hand-off between the analytical layer and the offer flow.

**Sell One Video — MVP.** A service that lets YouTube creators sell future income from a *specific* video for a fixed amount — fast, transparent, no loans. I owned the end-to-end MVP: landing, sign-up, video scoring, offer generation, signing, and creator dashboard.

It is one of the more interesting briefs I have worked on recently — a real attempt to turn media metrics into a tradeable financial primitive.`,
    relatedProjectIds: [
      'web-application-with-ai-for-startup-fundmates',
      'sell-one-video-turning-future-video-income-into-money-today',
    ],
    followUps: ['ai-orchestrator', 'selected-work', 'driven-podcast'],
  },
  {
    id: 'driven-podcast',
    category: 'work',
    label: 'The Driven Podcast',
    chipLabel: 'The Driven Podcast',
    promptText: 'Tell me about The Driven Podcast.',
    visibleInSidebar: true,
    keywords: ['driven', 'podcast', 'branding', 'identity', 'media', 'framer'],
    response: `**The Driven Podcast** is a YouTube series about entrepreneurs, creators, and operators pushing the edges of their industries. I joined the creative team as brand + product designer.

I developed the visual identity — logo, type system, cover grammar, color system — and then designed and shipped the web presence: episodes, guest pages, short-form clips, and the publishing surface. The site was composed in Figma and assembled in Framer. Minimal, fast, guest-forward, story-forward.

It is a media product, not a marketing page — which means every episode becomes a new layout problem, not a CMS row.`,
    relatedProjectIds: [
      'branding-for-the-driven-podcast',
      'website-design-for-the-driven-podcast',
    ],
    followUps: ['selected-work', 'fundmates', 'design-philosophy'],
  },
  {
    id: 'keytom',
    category: 'work',
    label: 'Keytom neobank',
    promptText: 'Tell me about Keytom.',
    keywords: ['keytom', 'neobank', 'crypto', 'fiat', 'dubai bank'],
    response: `**Keytom** is a Dubai-based neobank. In 2023 I worked as product designer on the MVP — a single product combining fiat and crypto in a clear, modern interface.

I owned the core user flows, worked inside a strict regulated environment, and helped launch the first version. This was my first hands-on fintech in Dubai after moving here.`,
    relatedProjectIds: ['created-interfaces-for-a-dubai-neobank'],
    followUps: ['yango-pay', 'selected-work'],
  },
  {
    id: 'yango-pay',
    category: 'work',
    label: 'Yango Pay',
    promptText: 'Tell me about Yango Pay.',
    keywords: ['yango', 'pay', 'wallet', 'taxi', 'mobile money'],
    response: `**Yango Pay** is a mobile wallet built into the Yango Taxi app, letting users instantly top up their balance via mobile money.

From June 2023 to November 2024 I worked as Senior Product Designer on a cross-functional team of 16, based in Dubai. I designed the top-up and payment flows, edge states, operator dashboards, and contributed to the wallet's overall UX architecture inside the taxi super-app.`,
    relatedProjectIds: ['worked-as-a-designer-at-dubai-s-yango-pay'],
    followUps: ['keytom', 'selected-work'],
  },
  {
    id: 'cv',
    category: 'work',
    label: 'Resume / CV',
    chipLabel: 'Resume',
    promptText: 'Can I see your resume?',
    visibleInSidebar: true,
    keywords: ['cv', 'resume', 'hire', 'hiring', 'experience'],
    response: `**Alexander Nevsky** — Senior Product Designer · AI Product Orchestrator
Dubai, UAE · Open to onsite / hybrid / remote

### Briefly

Senior product designer with 15+ years of experience across fintech, proptech, SaaS, and AI-enabled products. I design complex digital systems — mobile wallets, financial platforms, B2B admin tools, conversational AI flows — from early discovery to production. I combine product mindset, design-systems rigor, and AI-assisted workflow to move faster and deliver higher-quality results.

### Strengths

- Product thinking across fintech, B2B, and AI-native product surfaces
- Design systems (semantic tokens, component libraries, code-synced primitives)
- Cross-functional leadership (led teams up to 12 designers)
- Rapid prototyping and MVP shipping with AI-assisted tooling
- Comfort inside regulated environments (banking, healthcare, city platforms)

### Recent roles

- **2025 · Fundmates** — design sprints, investor-facing AI chat, creator MVP
- **2025 · The Driven Podcast** — brand + product design, Framer delivery
- **2023–2024 · Yango Pay (Dubai)** — Senior Product Designer, cross-functional team of 16
- **2023–2024 · Keytom (Dubai)** — Product Designer, fiat+crypto neobank MVP
- **2020–2022 · m2 (Square Meter)** — Design lead, B2B Deal Desk, team of 4
- **2018–2019 · Wallarm** — Product Designer, cybersecurity platform + design system
- **2012–2017 · EMIAS Moscow** — Design Director, team of 12, city-scale design system

### Links

- Portfolio → [nevskii.me](https://nevskii.me)
- Blog → [nevsky.me](https://nevsky.me)
- LinkedIn → [/in/nevskyalexander](https://linkedin.com/in/nevskyalexander)
- Email → [hi@nevsky.me](mailto:hi@nevsky.me)`,
    followUps: ['background', 'selected-work', 'contact'],
  },

  // ─── Current Builds ──────────────────────────────────────────────
  {
    id: 'current-builds',
    category: 'builds',
    label: "What I'm building now",
    chipLabel: 'Current builds',
    promptText: "What are you building right now?",
    visibleInSidebar: true,
    keywords: ['current', 'building', 'now', 'personal', 'side', 'own product', 'mvp'],
    response: `Three live builds, all solo-orchestrated with AI in the loop:

**1. Real-estate CRM.** Cold calling, WhatsApp outreach, lead prioritization, follow-ups, and auto-generated PDF benchmark reports for agents working the Dubai market. Built as a practical tool for a specific workflow, not a generic CRM.

**2. Native Apple app — live call assistant.** A Swift app using Apple Intelligence for real-time call transcription, live response suggestions, and interview support. Runs on-device. For people who take a lot of calls and want a structured memory of them.

**3. Family productivity app.** A private app for family schedules, tasks, and gamified rewards — remote coordination for parents, kids, and extended family. Designed around the way my own family actually runs.

Each is small, specific, and meant to be *used*, not demoed.`,
    followUps: ['ai-orchestrator', 'toolchain', 'design-philosophy'],
  },

  // ─── AI Approach ─────────────────────────────────────────────────
  {
    id: 'ai-orchestrator',
    category: 'ai',
    label: 'AI Product Orchestrator',
    chipLabel: 'AI orchestrator',
    promptText: 'What do you mean by AI Product Orchestrator?',
    visibleInSidebar: true,
    keywords: ['ai', 'orchestrator', 'ai-assisted', 'ai product', 'agentic', 'workflow'],
    response: `"AI Product Orchestrator" is how I describe my current working mode. It is a practical role, not a title.

A single product-minded person can now run discovery, architecture, interface design, prototype, copy, and front-end scaffolding in a pipeline where language and vision models do most of the translation work. My job is to sequence that pipeline: set the problem correctly, route the right sub-task to the right tool, review every hand-off, and keep taste and accountability at the center.

Concretely, that looks like:

- Product strategy and positioning drafted and stress-tested with LLMs
- UX architecture and flow mapping iterated in structured prompts
- Visual direction explored with Midjourney / Sora / Recraft, then refined in Figma
- Interface produced in Figma and Framer, then handed off via structured specs
- Copy drafted with models, edited by hand
- MVP scaffolding and small backends generated with Cursor / Claude / Codex, then owned and refined

The result is that a small surface can go from concept to working prototype in days, not quarters — with a real product sensibility behind every decision.`,
    followUps: ['toolchain', 'current-builds', 'design-philosophy'],
  },
  {
    id: 'toolchain',
    category: 'ai',
    label: 'Toolchain',
    promptText: 'What tools do you use?',
    keywords: ['tool', 'tools', 'stack', 'toolchain', 'what do you use'],
    response: `Tools are secondary — but since they are asked:

**Thinking & writing:** Claude, ChatGPT, Gemini.
**Code & product scaffolding:** Cursor, Codex, Claude.
**Visual exploration:** Midjourney, Sora, Recraft.
**Interface & delivery:** Figma, Framer, Webflow.
**Platform:** Cloudflare (Workers, R2, D1, KV).

I do not chase new tools. I adopt them when they reliably remove friction from a flow I already understand.`,
    followUps: ['ai-orchestrator', 'design-philosophy', 'current-builds'],
  },

  // ─── Life ────────────────────────────────────────────────────────
  {
    id: 'dubai',
    category: 'life',
    label: 'Life in Dubai',
    chipLabel: 'Life in Dubai',
    promptText: 'What is your life in Dubai like?',
    visibleInSidebar: true,
    keywords: ['dubai', 'uae', 'life', 'move', 'living', 'family'],
    response: `I moved to Dubai in 2022. I live here with my family.

The market is fast, the briefs are concrete, and the people I work with are usually building something for the first time — neobanks, wallets, creator-economy products, regional SaaS. The pace suits me: less ceremony, more shipping.

Outside of product work, I spend time with the kids, run small side builds, and occasionally manage a small family café remotely. I like living inside the work rather than commuting to it.`,
    followUps: ['background', 'current-builds', 'contact'],
  },

  // ─── Contact ─────────────────────────────────────────────────────
  {
    id: 'contact',
    category: 'contact',
    label: 'Get in touch',
    chipLabel: 'Get in touch',
    promptText: 'How can I get in touch?',
    visibleInSidebar: true,
    keywords: ['contact', 'reach', 'email', 'telegram', 'whatsapp', 'hire', 'get in touch', 'linkedin'],
    response: `The fastest channels:

- **Email** — [hi@nevsky.me](mailto:hi@nevsky.me)
- **Telegram** — [@alexander_nevsky](https://t.me/alexander_nevsky)
- **WhatsApp** — [+971 50 503 1984](https://wa.me/971505031984)
- **LinkedIn** — [/in/nevskyalexander](https://linkedin.com/in/nevskyalexander)

Also:
- Portfolio → [nevskii.me](https://nevskii.me)
- Blog → [nevsky.me](https://nevsky.me)

If you are hiring or have a specific product in mind, email is best — include the shape of the problem and the rough timeline.`,
    followUps: ['cv', 'current-builds', 'selected-work'],
  },
]

interface TopicLocale {
  label: string
  chipLabel?: string
  promptText: string
  response: string
  keywords: string[]
}

const topicsRu: Record<string, TopicLocale> = {
  who: {
    label: 'Кто вы?',
    chipLabel: 'Кто вы?',
    promptText: 'Кто вы?',
    response: `Я — Александр Невский, Senior Product Designer, сейчас в роли AI Product Orchestrator.

Более 15 лет я проектирую сложные цифровые продукты: fintech, neobank, B2B-инструменты, healthcare, proptech, SaaS и AI-native сервисы.

Базируюсь в Дубае, запускаю рабочие MVP небольшими сфокусированными командами.`,
    keywords: ['кто', 'представьтесь', 'о себе', 'био', 'кратко о вас'],
  },
  'what-is-this': {
    label: 'Что это за интерфейс?',
    chipLabel: 'Что это?',
    promptText: 'Что это за интерфейс?',
    response: `Это разговорный интерфейс моего портфолио, резюме и архива проектов.

Слева — готовые темы. Ниже можно писать свободные вопросы, но в рамках контекста: мой опыт, проекты, процесс и контакты.`,
    keywords: ['что это', 'как работает', 'интерфейс', 'сайт', 'что за сайт'],
  },
  background: {
    label: 'Бэкграунд',
    chipLabel: 'Бэкграунд',
    promptText: 'Расскажите про ваш бэкграунд.',
    response: `Коротко по этапам:

- 2010–2012: editorial web (Известия, РИА Новости)
- 2012–2017: EMIAS, design director, системный дизайн на уровне города
- 2018: VTB/Luxoft, корпоративный банковский портал
- 2018–2019: Wallarm, cybersecurity UX + design system
- 2020–2022: m2, лид команды product-дизайна
- 2023–2024: Keytom и Yango Pay в Дубае
- 2025: Fundmates и The Driven Podcast

Параллельно строю свои продукты с AI-assisted workflow.`,
    keywords: ['опыт', 'история', 'карьера', 'бэкграунд', 'путь'],
  },
  'design-philosophy': {
    label: 'Дизайн-философия',
    chipLabel: 'Философия',
    promptText: 'Какая у вас дизайн-философия?',
    response: `Мои базовые принципы:

- Дизайн — это дисциплина, а не декор
- Системы важнее отдельных экранов
- Скорость релиза — часть качества
- Ясность важнее «умности»
- AI — рабочий соавтор, а не витрина`,
    keywords: ['философия', 'подход', 'принципы', 'стиль'],
  },
  'selected-work': {
    label: 'Избранные кейсы',
    chipLabel: 'Кейсы',
    promptText: 'Покажите избранные кейсы.',
    response: 'Ниже — репрезентативные проекты в fintech, AI, media и platform design.',
    keywords: ['кейсы', 'проекты', 'портфолио', 'работы', 'примеры'],
  },
  fundmates: {
    label: 'Fundmates',
    chipLabel: 'Fundmates',
    promptText: 'Расскажите про Fundmates.',
    response: `Fundmates — стартап, который финансирует YouTube-креаторов.

Я проектировал investor-facing AI chat и MVP Sell One Video: от разговорной логики до экранов оффера, подписания и дашборда.`,
    keywords: ['fundmates', 'ютуб', 'креаторы', 'финансирование'],
  },
  'driven-podcast': {
    label: 'The Driven Podcast',
    chipLabel: 'The Driven Podcast',
    promptText: 'Расскажите про The Driven Podcast.',
    response: `Для The Driven Podcast я делал бренд и продуктовый слой: айдентику, визуальную систему и веб-поверхность для выпусков и гостей.`,
    keywords: ['driven', 'подкаст', 'брендинг', 'медиа'],
  },
  keytom: {
    label: 'Keytom neobank',
    promptText: 'Расскажите про Keytom.',
    response: `Keytom — необанк из Дубая. Я проектировал MVP «fiat + crypto», ключевые сценарии и первую рабочую версию продукта.`,
    keywords: ['keytom', 'необанк', 'фиат', 'крипто'],
  },
  'yango-pay': {
    label: 'Yango Pay',
    promptText: 'Расскажите про Yango Pay.',
    response: `Yango Pay — мобильный кошелек внутри приложения Yango Taxi. Я делал top-up/payment сценарии и UX-архитектуру wallet-секции.`,
    keywords: ['yango', 'pay', 'кошелек', 'платежи'],
  },
  cv: {
    label: 'Резюме / CV',
    chipLabel: 'Резюме',
    promptText: 'Можно посмотреть ваше резюме?',
    response: `Senior Product Designer с 15+ годами опыта в fintech, proptech, SaaS и AI-продуктах.

Сильные стороны: продуктовое мышление, дизайн-системы, кросс-функциональное лидерство, быстрые MVP.

Локация: Дубай, ОАЭ. Формат: onsite / hybrid / remote.`,
    keywords: ['резюме', 'cv', 'опыт работы', 'нанять'],
  },
  'current-builds': {
    label: 'Что я сейчас строю',
    chipLabel: 'Текущие билды',
    promptText: 'Что вы сейчас делаете?',
    response: `Сейчас у меня 3 live-направления:

1) Real-estate CRM для агентского workflow  
2) iOS live call assistant (on-device)  
3) Family productivity app для семейной координации`,
    keywords: ['сейчас делаете', 'текущие проекты', 'что строите', 'mvp'],
  },
  'ai-orchestrator': {
    label: 'AI Product Orchestrator',
    chipLabel: 'AI orchestrator',
    promptText: 'Что вы имеете в виду под AI Product Orchestrator?',
    response: `Это мой рабочий формат: я оркестрирую цепочку от discovery до working prototype с AI в контуре, но сохраняю продуктовую ответственность, вкус и контроль качества.`,
    keywords: ['ai orchestrator', 'ai подход', 'оркестратор', 'agentic workflow'],
  },
  toolchain: {
    label: 'Инструменты',
    promptText: 'Какие инструменты вы используете?',
    response: `Основной стек:

- Мыслить/писать: Claude, ChatGPT, Gemini
- Код/продукт: Cursor, Codex, Claude
- Визуал: Midjourney, Sora, Recraft
- Интерфейсы: Figma, Framer, Webflow
- Платформа: Cloudflare`,
    keywords: ['инструменты', 'стек', 'toolchain', 'что используете'],
  },
  dubai: {
    label: 'Жизнь в Дубае',
    chipLabel: 'Жизнь в Дубае',
    promptText: 'Какая у вас жизнь в Дубае?',
    response: `Живу в Дубае с 2022 года с семьей. Нравится темп рынка и практичность задач: меньше церемоний, больше реальной поставки.`,
    keywords: ['дубай', 'жизнь в дубае', 'оаэ', 'переезд'],
  },
  contact: {
    label: 'Связаться',
    chipLabel: 'Связаться',
    promptText: 'Как с вами связаться?',
    response: `Быстрее всего:

- Email — [hi@nevsky.me](mailto:hi@nevsky.me)
- Telegram — [@alexander_nevsky](https://t.me/alexander_nevsky)
- WhatsApp — [+971 50 503 1984](https://wa.me/971505031984)
- LinkedIn — [/in/nevskyalexander](https://linkedin.com/in/nevskyalexander)`,
    keywords: ['контакт', 'связаться', 'телеграм', 'почта', 'ватсап'],
  },
}

// ─── Lookup helpers ────────────────────────────────────────────────

export const topicsById: Record<string, Topic> = Object.fromEntries(
  topics.map(t => [t.id, t])
)

export function getTopic(id: string): Topic | undefined {
  return topicsById[id]
}

export function getTopicLabel(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topicsRu[topic.id]?.label ?? topic.label : topic.label
}

export function getTopicChipLabel(topic: Topic, lang: 'en' | 'ru'): string {
  if (lang === 'ru') return topicsRu[topic.id]?.chipLabel ?? topicsRu[topic.id]?.label ?? topic.chipLabel ?? topic.label
  return topic.chipLabel ?? topic.label
}

export function getTopicPrompt(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topicsRu[topic.id]?.promptText ?? topic.promptText : topic.promptText
}

export function getTopicResponse(topic: Topic, lang: 'en' | 'ru'): string {
  return lang === 'ru' ? topicsRu[topic.id]?.response ?? topic.response : topic.response
}

export function getTopicKeywords(topic: Topic, lang: 'en' | 'ru'): string[] {
  if (lang === 'ru') return topicsRu[topic.id]?.keywords ?? []
  return topic.keywords ?? []
}

export function getTopicAllLabels(topic: Topic): string[] {
  const ruLabel = topicsRu[topic.id]?.label
  return ruLabel ? [topic.label, ruLabel] : [topic.label]
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
