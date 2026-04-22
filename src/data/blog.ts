import { profile } from '@/data/profile'
import { type Lang } from '@/lib/i18n'

type LocalizedText = {
  en: string
  ru: string
}

type BlogImage = {
  src: string
  alt: LocalizedText
}

type BlogPost = {
  id: string
  href: string
  date: string
  stream: LocalizedText
  title: LocalizedText
  excerpt: LocalizedText
  image: BlogImage
}

type BlogSection = {
  title: LocalizedText
  summary: LocalizedText
}

const heroVisuals: BlogImage[] = [
  {
    src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/04/the-dispatcher-vt-1.webp',
    alt: {
      en: 'The Dispatcher',
      ru: 'Диспетчер',
    },
  },
  {
    src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/03/alert_15-19.webp',
    alt: {
      en: 'Between zoom and siren: how Dubai is getting used to life under the gun',
      ru: 'Между zoom и сиреной: как Дубай привыкает к жизни под прицелом',
    },
  },
]

const posts: BlogPost[] = [
  {
    id: 'dispatcher',
    href: 'https://nevsky.me/en/threshold/signals/the-dispatcher/',
    date: '2026-04-18',
    stream: {
      en: 'Threshold',
      ru: 'Threshold',
    },
    title: {
      en: 'The Dispatcher',
      ru: 'Диспетчер',
    },
    excerpt: {
      en: 'My day no longer splits into morning, noon, and evening. It splits into sessions. Codex, Claude, Cursor, and the kitchen-table oracle — four invisible hands I route my attention between. The next profession may not be developer or designer. It may be AI dispatcher',
      ru: 'Мой день больше не делится на утро, день и вечер. Он делится на сессии. Codex, Claude, Cursor и кухонный оракул — четыре невидимые руки, между которыми я распределяю внимание. Следующая профессия может быть не разработчик и не дизайнер, а AI-диспетчер.',
    },
    image: heroVisuals[0],
  },
  {
    id: 'three-products-three-months',
    href: 'https://nevsky.me/en/threshold/signals/three-products-three-months-en/',
    date: '2026-04-11',
    stream: {
      en: 'Threshold',
      ru: 'Threshold',
    },
    title: {
      en: "I'm not a developer. But I shipped three products in three months",
      ru: 'Я не разработчик. Но за три месяца запустил три продукта',
    },
    excerpt: {
      en: 'When machine intelligence writes the code and the human is responsible for the logic and meaning — who\'s the developer? And what changes in the profession when the tool starts thinking alongside you?',
      ru: 'Когда машинный интеллект пишет код, а человек отвечает за логику и смысл — кто тогда разработчик? И что меняется в профессии, когда инструмент начинает думать вместе с тобой?',
    },
    image: {
      src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/04/me-and-ai-1.webp',
      alt: {
        en: "I'm not a developer. But I shipped three products in three months",
        ru: 'Я не разработчик. Но за три месяца запустил три продукта',
      },
    },
  },
  {
    id: 'dubai-siren',
    href: 'https://nevsky.me/en/dubai/between-zoom-and-siren-how-dubai-is-getting-used-to-life-under-the-gun/',
    date: '2026-03-25',
    stream: {
      en: 'Dubai',
      ru: 'Дубай',
    },
    title: {
      en: 'Between zoom and siren: how Dubai is getting used to life under the gun',
      ru: 'Между zoom и сиреной: как Дубай привыкает к жизни под прицелом',
    },
    excerpt: {
      en: 'Ten minutes between “take shelter now” and “all clear.” These screenshots aren’t stills from a thriller — this is daily life in Dubai, 2026. While the skies decide the fate of regions, we balance work calls and emergency alerts from MOI. Hard? Yes. But people adapt to everything',
      ru: 'Десять минут между «немедленно укрыться» и «всё чисто». Эти кадры — не стоп-кадры из триллера, а повседневность Дубая 2026 года. Пока небо решает судьбу регионов, мы балансируем между рабочими звонками и тревогами от MOI. Тяжело? Да. Но люди ко всему привыкают.',
    },
    image: {
      src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/03/alert_15-19.webp',
      alt: {
        en: 'Between zoom and siren: how Dubai is getting used to life under the gun',
        ru: 'Между zoom и сиреной: как Дубай привыкает к жизни под прицелом',
      },
    },
  },
  {
    id: 'same-ux-different-scale',
    href: 'https://nevsky.me/en/estate/same-ux-different-scale-why-am-i-now-designing-life-in-dubai-and-not-interfaces/',
    date: '2026-02-11',
    stream: {
      en: 'Estate',
      ru: 'Недвижимость',
    },
    title: {
      en: 'Same UX, different scale: why am I now designing life in Dubai, and not interfaces',
      ru: 'Тот же UX, другой масштаб: почему я теперь проектирую жизнь в Дубае, а не интерфейсы',
    },
    excerpt: {
      en: 'Swapping pixels for the scale of a city. My move from BigTech into Dubai real estate, seen through a UX lens: why I chose SPI Dubai, how design experience helps me read the ergonomics of a home, and why I\'m building LiveDXB.com — an honest guide to real Dubai, without filters',
      ru: 'Меняю пиксели на масштаб города. Мой переход из BigTech в недвижимость Дубая через призму UX: почему я выбрал SPI Dubai, как дизайн-опыт помогает читать эргономику дома и зачем я строю LiveDXB.com — честный гид по настоящему Дубаю без фильтров.',
    },
    image: {
      src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/02/alexander_nevsky_2026-realty-agent.webp',
      alt: {
        en: 'Same UX, different scale: why am I now designing life in Dubai, and not interfaces',
        ru: 'Тот же UX, другой масштаб: почему я теперь проектирую жизнь в Дубае, а не интерфейсы',
      },
    },
  },
  {
    id: 'interface-of-my-life',
    href: 'https://nevsky.me/en/alexander/live/interface-of-my-life/',
    date: '2025-08-23',
    stream: {
      en: 'Alexander Nevsky',
      ru: 'Александр Невский',
    },
    title: {
      en: 'Interface of my life',
      ru: 'Интерфейс моей жизни',
    },
    excerpt: {
      en: 'Children are my best UX test, emigration is the main redesign, family is an honest product team. I live between the bay and the desert, children\'s school and a laptop with Figma. I write about life and design: honestly, with failures and discoveries, without gloss and instructions',
      ru: 'Дети — мой лучший UX-тест, эмиграция — главный редизайн, семья — честная продуктовая команда. Живу между заливом и пустыней, школой детей и ноутбуком с Figma. Пишу о жизни и дизайне: честно, с провалами и открытиями, без глянца и инструкций.',
    },
    image: {
      src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/01/aleksandr_nevskii_family_airport.webp',
      alt: {
        en: 'Interface of my life',
        ru: 'Интерфейс моей жизни',
      },
    },
  },
  {
    id: 'callcoach',
    href: 'https://nevsky.me/en/threshold/signals/callcoach-ios-app-en/',
    date: '2026-03-22',
    stream: {
      en: 'Threshold',
      ru: 'Threshold',
    },
    title: {
      en: "CallCoach — the app I built because I couldn't understand what people were saying",
      ru: 'CallCoach — приложение, которое я сделал, потому что не понимал, что мне говорят',
    },
    excerpt: {
      en: 'When you\'re making cold calls to British or Indian clients and can\'t understand a word they\'re saying — that\'s a real problem. I solved it myself: built a Swift app with Apple Intelligence that transcribes speech in real time and suggests what to say next.',
      ru: 'Когда ты звонишь британским или индийским клиентам и не понимаешь ни слова, это уже реальная проблема. Я решил её сам: сделал Swift-приложение с Apple Intelligence, которое расшифровывает речь в реальном времени и подсказывает, что говорить дальше.',
    },
    image: {
      src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/04/callcoach_cover-1.webp',
      alt: {
        en: "CallCoach — the app I built because I couldn't understand what people were saying",
        ru: 'CallCoach — приложение, которое я сделал, потому что не понимал, что мне говорят',
      },
    },
  },
  {
    id: 'spi-dubai-smile',
    href: 'https://nevsky.me/en/estate/smiling-story-from-spi-dubai/',
    date: '2026-03-12',
    stream: {
      en: 'Estate',
      ru: 'Недвижимость',
    },
    title: {
      en: 'Smiling story from SPI Dubai 😂',
      ru: 'Улыбчивая история из SPI Dubai 😂',
    },
    excerpt: {
      en: 'I\'m there too sometimes',
      ru: 'Я там тоже иногда бываю.',
    },
    image: {
      src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/03/spidubai_office_and_me-1.webp',
      alt: {
        en: 'Smiling story from SPI Dubai 😂',
        ru: 'Улыбчивая история из SPI Dubai 😂',
      },
    },
  },
  {
    id: 'office-during-war',
    href: 'https://nevsky.me/en/estate/there-was-a-war-going-on-but-they-worked-in-the-office/',
    date: '2026-03-09',
    stream: {
      en: 'Estate',
      ru: 'Недвижимость',
    },
    title: {
      en: 'There was a war going on, but they worked in the office',
      ru: 'Война шла, а они работали в офисе',
    },
    excerpt: {
      en: 'Monday, March 9, back in the office — anxious overall, as Dubai is being hit, but air defense works well. We left remote to see how things go. Morning feels calm; I really hope it stays that way. Last week was jittery: kids at home, clients worried, sirens in the background',
      ru: 'Понедельник, 9 марта, снова в офисе — в целом тревожно, потому что Дубай под ударами, но ПВО работает хорошо. Мы вышли с удалёнки, чтобы посмотреть, как пойдёт. Утро кажется спокойным; очень надеюсь, что так и останется. Прошлая неделя была нервной: дети дома, клиенты волнуются, сирены на фоне.',
    },
    image: {
      src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/03/spidubai_office_9march.webp',
      alt: {
        en: 'There was a war going on, but they worked in the office',
        ru: 'Война шла, а они работали в офисе',
      },
    },
  },
  {
    id: 'birch-birthday',
    href: 'https://nevsky.me/en/family/live/we-went-to-birch-to-see-nastya-for-her-birthday/',
    date: '2026-02-25',
    stream: {
      en: 'Family',
      ru: 'Семья',
    },
    title: {
      en: 'We went to Birch to see Nastya for her birthday',
      ru: 'Сходили в Birch поздравить Настю с днём рождения',
    },
    excerpt: {
      en: 'This was the best restaurant I\'ve been to in Dubai so far',
      ru: 'Это был лучший ресторан, в котором я пока был в Дубае.',
    },
    image: {
      src: 'https://cdn.nevsky.me/content/images/size/w1200/2026/03/birch_cover.webp',
      alt: {
        en: 'We went to Birch to see Nastya for her birthday',
        ru: 'Сходили в Birch поздравить Настю с днём рождения',
      },
    },
  },
]

const featuredStreams = [
  { en: 'Alexander', ru: 'Александр' },
  { en: 'Estate', ru: 'Недвижимость' },
  { en: 'Dubai', ru: 'Дубай' },
  { en: 'Family', ru: 'Семья' },
  { en: 'Design', ru: 'Дизайн' },
  { en: 'Threshold', ru: 'Threshold' },
  { en: 'AI', ru: 'AI' },
  { en: 'Framer', ru: 'Framer' },
  { en: 'Webflow', ru: 'Webflow' },
  { en: 'Moscow', ru: 'Москва' },
]

const heroCopy: Record<Lang, BlogSection> = {
  en: {
    title: { en: 'Alexander Yuryevich Nevsky', ru: 'Александр Юрьевич Невский' },
    summary: {
      en: 'I live in Dubai. I explore how technology, design, space, and human life come together into a new reality. Real estate, design, artificial intelligence, and visual art are, for me, parts of a single view of the world. I look at homes, interfaces, and the future through the lens of taste, systems thinking, and real family life in Dubai.',
      ru: 'Я живу в Дубае. Исследую, как технологии, дизайн, пространство и жизнь человека складываются в новую реальность. Недвижимость, дизайн, искусственный интеллект и визуальное искусство для меня — части одного взгляда на мир. Я смотрю на дома, интерфейсы и будущее через вкус, системное мышление и реальную семейную жизнь в Дубае.',
    },
  },
  ru: {
    title: { en: 'Alexander Yuryevich Nevsky', ru: 'Александр Юрьевич Невский' },
    summary: {
      en: 'I live in Dubai. I explore how technology, design, space, and human life come together into a new reality. Real estate, design, artificial intelligence, and visual art are, for me, parts of a single view of the world. I look at homes, interfaces, and the future through the lens of taste, systems thinking, and real family life in Dubai.',
      ru: 'Я живу в Дубае. Исследую, как технологии, дизайн, пространство и жизнь человека складываются в новую реальность. Недвижимость, дизайн, искусственный интеллект и визуальное искусство для меня — части одного взгляда на мир. Я смотрю на дома, интерфейсы и будущее через вкус, системное мышление и реальную семейную жизнь в Дубае.',
    },
  },
}

const introCopy: Record<Lang, string> = {
  en: 'I design your life in Dubai. Real estate broker with a Yango designer background. UX audits of homes, neighborhoods, and schools. Honest, systematic, from a Jumeirah resident.',
  ru: 'Я проектирую вашу жизнь в Дубае. Риелтор с дизайнерским бэкграундом из Yango. UX-аудит жилья, районов и школ. Честно, системно, от резидента Джумейры.',
}

const sectionCopy: Record<'featured' | 'latest' | 'streams' | 'contacts', Record<Lang, BlogSection>> = {
  featured: {
    en: {
      title: { en: 'Featured', ru: 'Избранное' },
      summary: { en: 'The posts that best describe the current direction.', ru: 'Посты, которые лучше всего описывают текущий вектор.' },
    },
    ru: {
      title: { en: 'Избранное', ru: 'Избранное' },
      summary: { en: 'Посты, которые лучше всего описывают текущий вектор.', ru: 'Посты, которые лучше всего описывают текущий вектор.' },
    },
  },
  latest: {
    en: {
      title: { en: 'Latest', ru: 'Свежее' },
      summary: { en: 'The newest entries from the current homepage.', ru: 'Самые новые записи с текущей главной страницы.' },
    },
    ru: {
      title: { en: 'Свежее', ru: 'Свежее' },
      summary: { en: 'Самые новые записи с текущей главной страницы.', ru: 'Самые новые записи с текущей главной страницы.' },
    },
  },
  streams: {
    en: {
      title: { en: 'Streams', ru: 'Потоки' },
      summary: { en: 'The site is organized by recurring contexts.', ru: 'Сайт собран вокруг повторяющихся контекстов.' },
    },
    ru: {
      title: { en: 'Потоки', ru: 'Потоки' },
      summary: { en: 'Сайт собран вокруг повторяющихся контекстов.', ru: 'Сайт собран вокруг повторяющихся контекстов.' },
    },
  },
  contacts: {
    en: {
      title: { en: 'Contacts', ru: 'Контакты' },
      summary: { en: 'For direct contact, Telegram is usually the fastest path.', ru: 'Для связи быстрее всего обычно работает Telegram.' },
    },
    ru: {
      title: { en: 'Контакты', ru: 'Контакты' },
      summary: { en: 'Для связи быстрее всего обычно работает Telegram.', ru: 'Для связи быстрее всего обычно работает Telegram.' },
    },
  },
}

const footerCopy: Record<Lang, string> = {
  en: 'New posts, notes, and updates are easiest to read in Telegram.',
  ru: 'Новые посты, заметки и обновления удобнее всего читать в Telegram.',
}

const currentSiteCopy: Record<Lang, string> = {
  en: 'I design your life in Dubai. Real estate broker with a Yango designer background. UX audits of homes, neighborhoods, and schools. Honest, systematic, from a Jumeirah resident.',
  ru: 'Я проектирую вашу жизнь в Дубае. Риелтор с дизайнерским бэкграундом из Yango. UX-аудит жилья, районов и школ. Честно, системно, от резидента Джумейры.',
}

export const blogData = {
  heroCopy,
  introCopy,
  sectionCopy,
  footerCopy,
  currentSiteCopy,
  streams: featuredStreams,
  posts,
  contacts: {
    portfolio: profile.links.portfolio,
    telegram: profile.links.telegram,
    whatsapp: profile.links.whatsapp,
    email: profile.links.email,
    phone: profile.links.phone,
  },
  brandAvatar:
    'https://cdn.nevsky.me/content/images/size/w256h256/format/png/2026/01/aleksandr-nevskii_avatar-7.webp',
}

export function formatBlogDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'ru' ? 'ru-RU' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

