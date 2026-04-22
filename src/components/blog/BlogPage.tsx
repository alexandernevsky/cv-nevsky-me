import { ArrowUpRight, Globe, Mail, MessageCircle, MoonStar, SunMedium } from 'lucide-react'
import { blogData, formatBlogDate } from '@/data/blog'
import { type Lang } from '@/lib/i18n'
import { type Theme } from '@/lib/theme'
import { cn } from '@/lib/utils'

interface BlogPageProps {
  lang: Lang
  theme: Theme
  onToggleLang: () => void
  onToggleTheme: () => void
  onGoChat: () => void
}

export function BlogPage({
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
  onGoChat,
}: BlogPageProps) {
  const heroPosts = blogData.posts.slice(0, 2)
  const featuredPosts = blogData.posts.slice(2, 5)
  const latestPosts = blogData.posts.slice(5)
  const streams = blogData.streams

  const headerTitle = blogData.heroCopy[lang].title[lang]
  const heroSummary = blogData.heroCopy[lang].summary[lang]
  const intro = blogData.introCopy[lang]

  const heroImageClass = cn(
    'aspect-[4/5] w-full overflow-hidden rounded-[0.5rem] bg-muted',
    'shadow-[0_12px_48px_rgba(0,0,0,0.12)]'
  )

  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={blogData.brandAvatar}
              alt={headerTitle}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
              loading="eager"
            />
            <div className="min-w-0">
              <div className="truncate text-[17px] font-[800] leading-tight text-foreground md:text-[19px]">
                {headerTitle}
              </div>
              <div className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {lang === 'ru' ? 'Блог / индекс' : 'Blog / index'}
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-[12px]">
            <a
              href={lang === 'ru' ? '/blog/ru/' : '/blog/'}
              className="rounded-full border border-border px-3 py-2 font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {lang === 'ru' ? 'Главная' : 'Home'}
            </a>
            <a
              href="#latest"
              className="rounded-full border border-border px-3 py-2 font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {lang === 'ru' ? 'Свежее' : 'Latest'}
            </a>
            <a
              href="#streams"
              className="rounded-full border border-border px-3 py-2 font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {lang === 'ru' ? 'Потоки' : 'Streams'}
            </a>
            <a
              href="#contacts"
              className="rounded-full border border-border px-3 py-2 font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {lang === 'ru' ? 'Контакты' : 'Contacts'}
            </a>
            <button
              type="button"
              onClick={onGoChat}
              className="rounded-full border border-border px-3 py-2 font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {lang === 'ru' ? 'Чат' : 'Chat'}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleLang}
              className="inline-flex h-10 items-center rounded-full border border-border px-3 text-[12px] font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {lang === 'ru' ? 'English' : 'Русский'}
            </button>
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1400px] px-5 pb-12 md:px-6">
        <section className="grid gap-8 border-b border-border/60 py-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:gap-10 lg:py-12">
          <div className="flex min-w-0 flex-col justify-end">
            <div className="max-w-3xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {lang === 'ru' ? 'Главная страница / блог' : 'Homepage / blog'}
              </div>
              <h1 className="mt-3 text-[clamp(2.65rem,7vw,6.2rem)] font-[800] leading-[0.92] tracking-normal text-foreground">
                {headerTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-[18px] leading-[1.62] text-muted-foreground md:text-[20px]">
                {heroSummary}
              </p>
              <p className="mt-4 max-w-2xl text-[14px] leading-[1.7] text-foreground/80">
                {intro}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {streams.slice(0, 6).map(stream => (
                  <span
                    key={stream.en}
                    className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
                  >
                    {stream[lang]}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={blogData.contacts.telegram}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13px] font-medium transition-colors hover:border-foreground hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4" />
                  Telegram
                </a>
                <a
                  href={blogData.contacts.email}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13px] font-medium transition-colors hover:border-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {blogData.contacts.email.replace('mailto:', '')}
                </a>
                <a
                  href={blogData.contacts.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-[13px] font-medium transition-colors hover:border-foreground hover:text-foreground"
                >
                  <Globe className="h-4 w-4" />
                  nevskii.me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:gap-5">
            {heroPosts.map((post, index) => (
              <a
                key={post.id}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className={cn(heroImageClass, 'group')}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={post.image.src}
                    alt={post.image.alt[lang]}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/42 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/80">
                      {formatBlogDate(post.date, lang)} · {post.stream[lang]}
                    </div>
                    <div className="mt-2 max-w-[18ch] text-[18px] font-[800] leading-[1.06] text-background md:text-[24px]">
                      {post.title[lang]}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-6 border-b border-border/60 py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div>
            <SectionHeader
              label={lang === 'ru' ? 'Избранное' : 'Featured'}
              title={blogData.sectionCopy.featured[lang].title[lang]}
              summary={blogData.sectionCopy.featured[lang].summary[lang]}
            />
          </div>

          <div className="grid gap-4">
            {featuredPosts.map(post => (
              <CompactRow key={post.id} post={post} lang={lang} />
            ))}
          </div>
        </section>

        <section id="latest" className="border-b border-border/60 py-8">
          <SectionHeader
            label={lang === 'ru' ? 'Свежее' : 'Latest'}
            title={blogData.sectionCopy.latest[lang].title[lang]}
            summary={blogData.sectionCopy.latest[lang].summary[lang]}
          />

          <div className="mt-6 divide-y divide-border/60">
            {latestPosts.map(post => (
              <ArticleRow key={post.id} post={post} lang={lang} />
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href="https://nevsky.me/en/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {lang === 'ru' ? 'Открыть текущий nevsky.me' : 'Open the current nevsky.me'}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        <section id="streams" className="grid gap-6 border-b border-border/60 py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <SectionHeader
            label={lang === 'ru' ? 'Потоки' : 'Streams'}
            title={blogData.sectionCopy.streams[lang].title[lang]}
            summary={blogData.sectionCopy.streams[lang].summary[lang]}
          />

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {streams.map(stream => (
              <div
                key={stream.en}
                className="flex items-center justify-between border-b border-border/60 py-3"
              >
                <div className="text-[15px] font-medium text-foreground">{stream[lang]}</div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {lang === 'ru' ? 'Поток' : 'Stream'}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="contacts" className="grid gap-6 py-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <SectionHeader
            label={lang === 'ru' ? 'Контакты' : 'Contacts'}
            title={blogData.sectionCopy.contacts[lang].title[lang]}
            summary={blogData.sectionCopy.contacts[lang].summary[lang]}
          />

          <div className="grid gap-3 sm:grid-cols-2">
            <ContactLink href={blogData.contacts.telegram} label="Telegram" />
            <ContactLink href={blogData.contacts.email} label={blogData.contacts.email.replace('mailto:', '')} />
            <ContactLink href={blogData.contacts.whatsapp} label="WhatsApp" />
            <ContactLink href={blogData.contacts.phone} label={blogData.contacts.phone.replace('tel:', '')} />
          </div>
        </section>

        <footer className="border-t border-border/60 py-6 text-[12px] leading-[1.6] text-muted-foreground">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">{blogData.footerCopy[lang]}</div>
            <div className="font-mono uppercase tracking-[0.16em]">
              {lang === 'ru'
                ? 'Александр Невский · Дубай · Москва'
                : 'Alexander Nevsky · Dubai · Moscow'}
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

function SectionHeader({
  label,
  title,
  summary,
}: {
  label: string
  title: string
  summary: string
}) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
      <h2 className="mt-2 text-[28px] font-[800] leading-[1] tracking-normal md:text-[36px]">{title}</h2>
      <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground md:text-[15px]">{summary}</p>
    </div>
  )
}

function CompactRow({ post, lang }: { post: (typeof blogData.posts)[number]; lang: Lang }) {
  return (
    <a
      href={post.href}
      target="_blank"
      rel="noreferrer"
      className="group grid gap-4 border-b border-border/60 pb-4 md:grid-cols-[minmax(0,1fr)_240px] md:items-center"
    >
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {formatBlogDate(post.date, lang)} · {post.stream[lang]}
        </div>
        <div className="mt-2 text-[18px] font-[800] leading-[1.15] text-foreground transition-opacity group-hover:opacity-80">
          {post.title[lang]}
        </div>
        <p className="mt-2 max-w-2xl text-[14px] leading-[1.6] text-muted-foreground">
          {post.excerpt[lang]}
        </p>
      </div>
      <div className="overflow-hidden rounded-[0.5rem] bg-muted">
        <img
          src={post.image.src}
          alt={post.image.alt[lang]}
          className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </a>
  )
}

function ArticleRow({ post, lang }: { post: (typeof blogData.posts)[number]; lang: Lang }) {
  return (
    <a
      href={post.href}
      target="_blank"
      rel="noreferrer"
      className="group grid gap-4 py-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start"
    >
      <div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{formatBlogDate(post.date, lang)}</span>
          <span>·</span>
          <span>{post.stream[lang]}</span>
        </div>
        <div className="mt-2 text-[20px] font-[800] leading-[1.12] text-foreground transition-opacity group-hover:opacity-80 md:text-[24px]">
          {post.title[lang]}
        </div>
        <p className="mt-3 max-w-3xl text-[15px] leading-[1.7] text-muted-foreground">
          {post.excerpt[lang]}
        </p>
      </div>
      <div className="overflow-hidden rounded-[0.5rem] bg-muted">
        <img
          src={post.image.src}
          alt={post.image.alt[lang]}
          className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </a>
  )
}

function ContactLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') || href.startsWith('tel:') ? undefined : 'noreferrer'}
      className="flex items-center justify-between border-b border-border/60 py-3 text-[15px] text-foreground transition-opacity hover:opacity-80"
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
    </a>
  )
}
