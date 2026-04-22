import { ChevronDown, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { SocialLinks } from '@/components/chat/SocialLinks'
import { blogData, formatBlogDate } from '@/data/blog'
import { profile } from '@/data/profile'
import { type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BlogPageProps {
  lang: Lang
  onToggleLang: () => void
}

type BlogPost = (typeof blogData.posts)[number]

const featuredTint = ['#ff7a46', '#57d9ff', '#c8ff00'] as const

const footerColumns = [
  {
    key: 'home',
    title: { en: 'Home', ru: 'Главное' },
    links: [
      { href: '/blog/', label: { en: 'Home', ru: 'Главная' } },
      { href: '/?lang=ru', label: { en: 'Alexander', ru: 'Александр' } },
      { href: profile.links.portfolio, label: { en: 'Portfolio [archive]', ru: 'Я — как дизайнер [архив]' } },
      { href: '/blog/', label: { en: 'Family', ru: 'Семья' } },
      { href: profile.links.portfolio, label: { en: 'D2Q Studio', ru: 'Студия D2Q' } },
      { href: '/blog/#latest', label: { en: 'Threshold', ru: 'Threshold' } },
      { href: profile.links.portfolio, label: { en: 'Art cafe "In the Forest"', ru: 'Арт-кафе «В Лесу»' } },
    ],
  },
  {
    key: 'streams',
    title: { en: 'Streams', ru: 'Потоки' },
    links: [
      { href: '/blog/#streams', label: { en: 'Alexander', ru: 'Александр' } },
      { href: '/blog/#streams', label: { en: 'Dubai', ru: 'Дубай' } },
      { href: '/blog/#streams', label: { en: 'Estate', ru: 'Эстейт' } },
      { href: '/blog/#streams', label: { en: 'Design', ru: 'Дизайн' } },
      { href: '/blog/#streams', label: { en: 'Family', ru: 'Семья' } },
      { href: '/blog/#streams', label: { en: 'Threshold', ru: 'Threshold' } },
      { href: '/blog/#streams', label: { en: 'AI', ru: 'AI' } },
      { href: '/blog/#streams', label: { en: 'Framer', ru: 'Framer' } },
      { href: '/blog/#streams', label: { en: 'Webflow', ru: 'Webflow' } },
      { href: '/blog/#streams', label: { en: 'Moscow', ru: 'Москва' } },
    ],
  },
  {
    key: 'family',
    title: { en: 'Family', ru: 'Семья' },
    links: [
      { href: '/blog/#streams', label: { en: 'Irina', ru: 'Ирина' } },
      { href: '/blog/#streams', label: { en: 'Daria • daughter', ru: 'Дарья • дочь' } },
      { href: '/blog/#streams', label: { en: 'Alexander • son', ru: 'Александр • сын' } },
      { href: '/blog/#streams', label: { en: 'Konstantin • son', ru: 'Константин • сын' } },
      { href: '/blog/#streams', label: { en: 'Yury • father', ru: 'Юрий • отец' } },
      { href: '/blog/#streams', label: { en: 'Vladimir • grandfather', ru: 'Владимир • дед' } },
      { href: '/blog/#streams', label: { en: 'Ulyana • sister', ru: 'Ульяна • сестра' } },
      { href: '/blog/#streams', label: { en: 'Bekky • dog', ru: 'Бекки • пес' } },
    ],
  },
  {
    key: 'useful',
    title: { en: 'Useful', ru: 'Полезное' },
    links: [
      { href: profile.links.blog, label: { en: 'About site', ru: 'О сайте' } },
      { href: profile.links.portfolio, label: { en: 'Recommendations', ru: 'Рекомендации' } },
      { href: '/blog/', label: { en: 'License', ru: 'Лицензия' } },
      { href: '/blog/', label: { en: 'All tags', ru: 'Все теги' } },
    ],
  },
  {
    key: 'contacts',
    title: { en: 'Contacts', ru: 'Контакты' },
    links: [
      { href: profile.links.telegram, label: { en: 'Telegram', ru: 'Telegram' } },
      { href: profile.links.email, label: { en: 'hi@nevsky.me', ru: 'hi@nevsky.me' } },
      { href: profile.links.phone, label: { en: '+971 50 503 1984', ru: '+971 50 503 1984' } },
      { href: profile.links.whatsapp, label: { en: 'WhatsApp', ru: 'WhatsApp' } },
    ],
  },
] as const

export function BlogPage({ lang, onToggleLang }: BlogPageProps) {
  const [noticeOpen, setNoticeOpen] = useState(true)

  const featuredPosts = useMemo(() => blogData.posts.slice(0, 3), [])
  const latestPosts = useMemo(() => blogData.posts.slice(3), [])

  const title = blogData.heroCopy[lang].title[lang]
  const summary = blogData.heroCopy[lang].summary[lang]
  const intro = blogData.introCopy[lang]

  return (
    <div className="min-h-[100dvh] bg-[#0d0a06] text-[#f5edd8]">
      {noticeOpen && (
        <div className="border-b border-black/20 bg-[#f26c3f] px-4 py-3 text-center text-[13px] font-medium leading-[1.5] text-black md:text-[15px]">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3">
            <div className="flex-1 text-center">
              <span className="inline-flex items-center gap-1">
                <span>🧭</span>
                <span>
                  {lang === 'ru'
                    ? 'Прошел обучение на брокера в академии SPI Dubai — параллельно собираю свой проект про недвижимость и жизнь в Дубае. Скоро покажу 👀'
                    : 'Completed broker training at SPI Dubai academy — I am building my own project about real estate and life in Dubai in parallel. I will show it soon 👀'}
                </span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setNoticeOpen(false)}
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-black/80 transition-colors hover:bg-black/10 hover:text-black"
              aria-label={lang === 'ru' ? 'Скрыть уведомление' : 'Dismiss notice'}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <header className="border-b border-white/10 bg-[#0d0a06]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center gap-4 px-5 py-4 md:px-6 md:py-5">
          <a href={`/?lang=${lang}`} className="flex items-center gap-3">
            <img
              src={blogData.brandAvatar}
              alt={title}
              className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
              loading="eager"
            />
          </a>

          <nav className="flex min-w-0 flex-1 flex-wrap items-center gap-x-8 gap-y-3 justify-center text-[15px] md:text-[18px]">
            <HeaderLink href="/blog/" active>
              {lang === 'ru' ? 'Главная' : 'Home'}
            </HeaderLink>
            <HeaderLink href="#streams">
              <span className="inline-flex items-center gap-1">
                {lang === 'ru' ? 'Потоки' : 'Streams'}
                <ChevronDown className="h-4 w-4" />
              </span>
            </HeaderLink>
            <HeaderLink href="#streams">
              <span className="inline-flex items-center gap-1">
                {lang === 'ru' ? 'Семья' : 'Family'}
                <ChevronDown className="h-4 w-4" />
              </span>
            </HeaderLink>
            <HeaderLink href="#latest">
              <span className="inline-flex items-center gap-1">
                {lang === 'ru' ? 'Проекты' : 'Projects'}
                <ChevronDown className="h-4 w-4" />
              </span>
            </HeaderLink>
            <button
              type="button"
              onClick={onToggleLang}
              className="text-[#f5edd8] transition-opacity hover:opacity-75"
            >
              {lang === 'ru' ? 'English' : 'Русский'}
            </button>
          </nav>

          <a
            href={profile.links.telegram}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center justify-center rounded-full bg-[#f26c3f] px-7 py-4 text-[18px] font-[800] text-black transition-opacity hover:opacity-90 md:px-8 md:py-4.5"
          >
            Telegram
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1400px] px-5 pb-10 md:px-6">
        <section className="border-b border-white/10 py-10 md:py-14">
          <div className="max-w-[1200px]">
            <img
              src={blogData.brandAvatar}
              alt={title}
              className="h-20 w-20 rounded-full object-cover md:h-22 md:w-22"
              loading="eager"
            />
            <h1 className="mt-10 max-w-[1050px] text-[clamp(2.65rem,6vw,5.7rem)] font-[800] uppercase leading-[0.95] tracking-normal text-[#f5edd8]">
              {title}
            </h1>
            <p className="mt-4 max-w-[1150px] font-mono text-[clamp(1.15rem,1.45vw,1.75rem)] leading-[1.58] text-[#878176]">
              {summary}
            </p>
            <p className="mt-6 max-w-[1100px] text-[15px] leading-[1.7] text-[#d4ccbd] md:text-[16px]">
              {intro}
            </p>
          </div>
        </section>

        <section className="border-b border-white/10 py-9 md:py-11">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="text-[clamp(1.55rem,2vw,2.5rem)] font-[800] leading-none text-[#f5edd8]">
              {lang === 'ru' ? 'Избранное' : 'Featured'}
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[clamp(1rem,1.15vw,1.45rem)] font-[800]">
              {blogData.streams.slice(0, 6).map((stream, index) => (
                <span
                  key={stream.en}
                  className="tracking-normal"
                  style={{ color: featuredTint[index % featuredTint.length] }}
                >
                  #{stream[lang]}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <FeatureTile key={post.id} post={post} lang={lang} tint={featuredTint[index]} />
            ))}
          </div>
        </section>

        <section id="latest" className="border-b border-white/10 py-9 md:py-11">
          <div className="flex items-end justify-between">
            <div className="text-[clamp(1.55rem,2vw,2.5rem)] font-[800] leading-none text-[#f5edd8]">
              {lang === 'ru' ? 'Свежее' : 'Latest'}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {latestPosts.map(post => (
              <LatestTile key={post.id} post={post} lang={lang} />
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-10 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div className="max-w-[920px] text-[clamp(1.35rem,1.8vw,2rem)] leading-[1.55] text-[#f5edd8]">
              {lang === 'ru'
                ? 'Я проектирую вашу жизнь в Дубае. Real Estate Broker с бэкграундом дизайнера Yango. UX-аудит жилья, районов и школ. Честно, системно, от резидента Джумейры'
                : 'I design your life in Dubai. Real Estate Broker with a Yango designer background. UX audits of homes, neighborhoods, and schools. Honest, systematic, from a Jumeirah resident'}
            </div>
            <div className="justify-self-start lg:justify-self-end">
              <SocialLinks lang={lang} />
            </div>
          </div>
        </section>

        <footer className="py-9 md:py-12">
          <div className="grid gap-10 border-t border-white/10 pt-8 md:grid-cols-2 xl:grid-cols-5">
            {footerColumns.map(column => (
              <FooterColumn key={column.key} column={column} lang={lang} />
            ))}
          </div>

          <div className="mt-8 text-[12px] leading-[1.7] text-[#d4ccbd] md:text-[15px]">
            {lang === 'ru'
              ? '© 2026 Александр Невский. 1984–2026 • Москва — Дубай • Всё по-белому 😎 — у меня есть фриланс-лицензия DMCC-950353 (веб-разработка) — Permit FL 467706'
              : '© 2026 Alexander Nevsky. 1984–2026 • Moscow — Dubai • Everything above board 😎 — I have a DMCC freelance license (web development) — Permit FL 467706'}
          </div>
        </footer>
      </main>
    </div>
  )
}

function HeaderLink({
  href,
  active = false,
  children,
}: {
  href: string
  active?: boolean
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={cn(
        'transition-opacity hover:opacity-75',
        active && 'underline decoration-1 underline-offset-4'
      )}
    >
      {children}
    </a>
  )
}

function FeatureTile({
  post,
  lang,
  tint,
}: {
  post: BlogPost
  lang: Lang
  tint: string
}) {
  return (
    <a href={post.href} target="_blank" rel="noreferrer" className="group block">
      <div className="overflow-hidden bg-black/20">
        <img
          src={post.image.src}
          alt={post.image.alt[lang]}
          className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="pt-3">
        <div className="font-mono text-[12px] leading-none text-[#8e8678]">
          {formatBlogDate(post.date, lang)} · {post.stream[lang]}
        </div>
        <h3 className="mt-2 max-w-[18ch] text-[clamp(1.25rem,1.7vw,1.9rem)] font-[800] leading-[1.04] text-[#f5edd8]">
          {post.title[lang]}
        </h3>
        <p className="mt-3 max-w-[38ch] text-[14px] leading-[1.65] text-[#d4ccbd] md:text-[15px]">
          {post.excerpt[lang]}
        </p>
        <div className="mt-3 h-[2px] w-10 rounded-full" style={{ background: tint }} />
      </div>
    </a>
  )
}

function LatestTile({ post, lang }: { post: BlogPost; lang: Lang }) {
  return (
    <a href={post.href} target="_blank" rel="noreferrer" className="group block">
      <div className="overflow-hidden bg-black/20">
        <img
          src={post.image.src}
          alt={post.image.alt[lang]}
          className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="pt-2.5">
        <div className="font-mono text-[11px] leading-none text-[#8e8678]">
          {formatBlogDate(post.date, lang)} · {post.stream[lang]}
        </div>
        <h3 className="mt-2 text-[clamp(1.3rem,1.75vw,2.1rem)] font-[800] leading-[1.04] text-[#f5edd8]">
          {post.title[lang]}
        </h3>
        <p className="mt-3 text-[16px] leading-[1.7] text-[#f5edd8]">
          {post.excerpt[lang]}
        </p>
      </div>
    </a>
  )
}

function FooterColumn({
  column,
  lang,
}: {
  column: (typeof footerColumns)[number]
  lang: Lang
}) {
  return (
    <div>
      <div className="text-[clamp(1.8rem,2.2vw,2.6rem)] font-[800] leading-none text-[#f5edd8]">
        {column.title[lang]}
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {column.links.map(link => (
          <a
            key={link.label.en}
            href={link.href}
            className="text-[16px] leading-[1.3] text-[#f5edd8] transition-opacity hover:opacity-75 md:text-[18px]"
          >
            {link.label[lang]}
          </a>
        ))}
      </div>
    </div>
  )
}
