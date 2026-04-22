import { ArrowLeft, ChevronDown, Link2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { SocialLinks } from '@/components/chat/SocialLinks'
import { blogData, formatBlogDate } from '@/data/blog'
import {
  authors as blogAuthors,
  posts as blogFeedPosts,
  tags as blogTags,
  type BlogFeedPost,
  type BlogTag,
} from '@/data/blog-feed'
import { profile } from '@/data/profile'
import { type Lang } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BlogPageProps {
  lang: Lang
  onToggleLang: () => void
  pathname: string
}

const featuredTint = ['#ff7a46', '#57d9ff', '#c8ff00'] as const
const latestPageSize = 12
const postDocumentLoaders = import.meta.glob('/content/blog/posts/*.md', { query: '?raw', import: 'default' }) as Record<
  string,
  () => Promise<string>
>

const blogPostsById = new Map(blogFeedPosts.map(post => [post.id, post] as const))
const blogPostsBySlug = new Map<string, BlogFeedPost>()
for (const post of blogFeedPosts) {
  blogPostsBySlug.set(post.slug.en, post)
  blogPostsBySlug.set(post.slug.ru, post)
}

const blogAuthorsBySlug = new Map(blogAuthors.map(author => [author.slug, author] as const))
const blogTagsBySlug = new Map<string, BlogTag>()
for (const tag of blogTags) {
  blogTagsBySlug.set(tag.en.slug, tag)
  blogTagsBySlug.set(tag.ru.slug, tag)
}

type BlogRoute =
  | { kind: 'home' }
  | { kind: 'post'; slug: string }
  | { kind: 'tag'; slug: string }
  | { kind: 'author'; slug: string }

function resolveBlogRoute(pathname: string): BlogRoute {
  if (pathname === '/blog' || pathname === '/blog/') return { kind: 'home' }
  if (pathname === '/blog/ru' || pathname === '/blog/ru/') return { kind: 'home' }
  if (pathname.startsWith('/blog/post/')) return { kind: 'post', slug: pathname.replace('/blog/post/', '').replace(/\/+$/, '') }
  if (pathname.startsWith('/blog/tag/')) return { kind: 'tag', slug: pathname.replace('/blog/tag/', '').replace(/\/+$/, '') }
  if (pathname.startsWith('/blog/author/')) return { kind: 'author', slug: pathname.replace('/blog/author/', '').replace(/\/+$/, '') }
  return { kind: 'home' }
}

function getPostDocumentPath(postId: string) {
  return `/content/blog/posts/${postId}.md`
}

function parseJsonFrontmatter(raw: string) {
  if (!raw.startsWith('---')) return null
  const end = raw.indexOf('---', 3)
  if (end === -1) return null
  const payload = raw.slice(3, end).trim()
  try {
    return JSON.parse(payload) as {
      ru?: { body?: string }
      en?: { body?: string }
    }
  } catch {
    return null
  }
}

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

export function BlogPage({ lang, onToggleLang, pathname }: BlogPageProps) {
  const route = useMemo(() => resolveBlogRoute(pathname), [pathname])

  if (route.kind === 'post') {
    return <BlogPostPage lang={lang} onToggleLang={onToggleLang} slug={route.slug} />
  }

  if (route.kind === 'tag') {
    return <BlogTagPage lang={lang} onToggleLang={onToggleLang} slug={route.slug} />
  }

  if (route.kind === 'author') {
    return <BlogAuthorPage lang={lang} onToggleLang={onToggleLang} slug={route.slug} />
  }

  return <BlogHomePage lang={lang} onToggleLang={onToggleLang} />
}

function BlogHomePage({ lang, onToggleLang }: Omit<BlogPageProps, 'pathname'>) {
  const [noticeOpen, setNoticeOpen] = useState(true)
  const [visibleLatestCount, setVisibleLatestCount] = useState(latestPageSize)

  const allPosts = useMemo(
    () =>
      blogFeedPosts
        .filter(post => !post.isVladimir)
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.id.localeCompare(a.id)),
    []
  )
  const featuredPosts = useMemo(
    () => allPosts.filter(post => post.featured),
    [allPosts]
  )
  const latestPosts = useMemo(
    () => allPosts.filter(post => !post.featured),
    [allPosts]
  )
  const visibleLatestPosts = latestPosts.slice(0, visibleLatestCount)
  const hasMoreLatest = visibleLatestCount < latestPosts.length

  const title = blogData.heroCopy[lang].title[lang]
  const summary = blogData.heroCopy[lang].summary[lang]
  const intro = blogData.introCopy[lang]
  const homeHref = lang === 'ru' ? '/blog/ru/' : '/blog/'

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
            <HeaderLink href={homeHref} active>
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
              <FeatureTile key={post.id} post={post} lang={lang} tint={featuredTint[index % featuredTint.length]} />
            ))}
          </div>
        </section>

        <section id="latest" className="border-b border-white/10 py-9 md:py-11">
          <div className="flex items-end justify-between">
            <div className="text-[clamp(1.55rem,2vw,2.5rem)] font-[800] leading-none text-[#f5edd8]">
              {lang === 'ru' ? 'Свежее' : 'Latest'}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {visibleLatestPosts.map(post => (
              <LatestTile key={post.id} post={post} lang={lang} />
            ))}
          </div>

          {hasMoreLatest && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleLatestCount(count => Math.min(count + latestPageSize, latestPosts.length))}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[15px] font-[700] text-[#f5edd8] transition-colors hover:bg-white/10"
              >
                <ChevronDown className="h-4 w-4" />
                {lang === 'ru' ? 'Показать еще' : 'Load more'}
              </button>
            </div>
          )}
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
  post: BlogFeedPost
  lang: Lang
  tint: string
}) {
  return <BlogFeedCard post={post} lang={lang} accent={tint} variant="featured" />
}

function BlogFeedCard({
  post,
  lang,
  variant = 'latest',
  accent,
}: {
  post: BlogFeedPost
  lang: Lang
  variant?: 'featured' | 'latest' | 'compact'
  accent?: string
}) {
  const href = `/blog/post/${post.slug[lang]}?lang=${lang}`
  const tagHref = post.tags[0] ? `/blog/tag/${post.tags[0]}?lang=${lang}` : `/blog/${lang === 'ru' ? 'ru/' : ''}`
  const authorHref = post.author.slug ? `/blog/author/${post.author.slug}?lang=${lang}` : `/blog/${lang === 'ru' ? 'ru/' : ''}`
  const titleClass =
    variant === 'featured'
      ? 'mt-2 max-w-[18ch] text-[clamp(1.25rem,1.7vw,1.9rem)]'
      : variant === 'compact'
        ? 'mt-2 text-[clamp(1.1rem,1.45vw,1.6rem)]'
        : 'mt-2 text-[clamp(1.3rem,1.75vw,2.1rem)]'
  const excerptClass =
    variant === 'featured'
      ? 'mt-3 max-w-[38ch] text-[14px] leading-[1.65] text-[#d4ccbd] md:text-[15px]'
      : variant === 'compact'
        ? 'mt-2 text-[13px] leading-[1.55] text-[#d4ccbd]'
        : 'mt-3 text-[16px] leading-[1.7] text-[#f5edd8]'

  return (
    <article className="group block">
      <div className="bg-black/20">
        {post.image.src ? (
          <a href={href} className="block">
            <img
              src={post.image.src}
              alt={post.image.alt[lang]}
              className="block h-auto w-full transition-opacity duration-300 group-hover:opacity-90"
              loading="lazy"
            />
          </a>
        ) : (
          <a href={href} className="grid min-h-[240px] w-full place-items-center bg-[#17120d] px-6 py-10 text-center">
            <div className="max-w-[12ch] font-mono text-[18px] leading-[1.2] text-[#f5edd8]">
              {post.primaryTag[lang]}
            </div>
          </a>
        )}
      </div>
      <div className={cn('pt-3', variant === 'latest' && 'pt-2.5')}>
        <div className="font-mono text-[12px] leading-none text-[#8e8678]">
          {formatBlogDate(post.date, lang)} ·{' '}
          <a href={authorHref} className="transition-opacity hover:text-[#f5edd8] hover:opacity-75">
            {post.author.name || (lang === 'ru' ? 'Александр Невский' : 'Alexander Nevsky')}
          </a>{' '}
          ·{' '}
          <a href={tagHref} className="transition-opacity hover:text-[#f5edd8] hover:opacity-75">
            #{post.primaryTag[lang]}
          </a>
        </div>
        <h3 className={cn(titleClass, 'font-[800] leading-[1.04] text-[#f5edd8]')}>
          <a href={href} className="transition-opacity hover:opacity-75">
            {post.title[lang]}
          </a>
        </h3>
        <p className={excerptClass}>
          {post.excerpt[lang]}
        </p>
        {accent ? <div className="mt-3 h-[2px] w-10 rounded-full" style={{ background: accent }} /> : null}
      </div>
    </article>
  )
}

function LatestTile({ post, lang }: { post: BlogFeedPost; lang: Lang }) {
  return (
    <BlogFeedCard post={post} lang={lang} variant="latest" />
  )
}

function BlogPostPage({
  lang,
  onToggleLang,
  slug,
}: {
  lang: Lang
  onToggleLang: () => void
  slug: string
}) {
  const post = blogPostsBySlug.get(slug)
  const canonicalPost = post ? (blogPostsById.get(post.id) ?? post) : null
  const [body, setBody] = useState<string | null>(null)

  useEffect(() => {
    if (!canonicalPost) return
    let cancelled = false
    const loader = postDocumentLoaders[getPostDocumentPath(canonicalPost.id)]
    if (!loader) {
      setBody(null)
      return
    }

    setBody(null)
    loader()
      .then(raw => {
        if (cancelled) return
        const document = parseJsonFrontmatter(raw)
        setBody(document?.[lang]?.body ?? canonicalPost.excerpt[lang] ?? '')
      })
      .catch(() => {
        if (!cancelled) setBody(canonicalPost.excerpt[lang] ?? '')
      })

    return () => {
      cancelled = true
    }
  }, [canonicalPost, lang, slug])

  useEffect(() => {
    if (!canonicalPost) return
    document.title = `${canonicalPost.title[lang]} — ${lang === 'ru' ? 'Блог' : 'Blog'}`
  }, [canonicalPost, lang])

  if (!canonicalPost) {
    return <BlogNotFound lang={lang} onToggleLang={onToggleLang} />
  }

  const author = canonicalPost.author.slug ? blogAuthorsBySlug.get(canonicalPost.author.slug) : undefined

  return (
    <BlogDetailShell lang={lang} onToggleLang={onToggleLang}>
      <section className="mx-auto w-full max-w-[900px] px-5 py-8 md:px-6 md:py-12">
        <div className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8e8678]">
          <a href={`/blog/${lang === 'ru' ? 'ru/' : ''}`} className="inline-flex items-center gap-2 text-[#f5edd8] transition-opacity hover:opacity-75">
            <ArrowLeft className="h-4 w-4" />
            {lang === 'ru' ? 'Назад' : 'Back'}
          </a>
          <span>·</span>
          <span>{formatBlogDate(canonicalPost.date, lang)}</span>
          {author && (
            <>
              <span>·</span>
              <a href={`/blog/author/${author.slug}?lang=${lang}`} className="transition-opacity hover:text-[#f5edd8] hover:opacity-75">
                {author.name}
              </a>
            </>
          )}
          <span>·</span>
          <a href={canonicalPost.tags[0] ? `/blog/tag/${canonicalPost.tags[0]}?lang=${lang}` : `/blog/${lang === 'ru' ? 'ru/' : ''}`} className="transition-opacity hover:text-[#f5edd8] hover:opacity-75">
            #{canonicalPost.primaryTag[lang]}
          </a>
        </div>

        <h1 className="max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)] font-[800] uppercase leading-[0.95] tracking-normal text-[#f5edd8]">
          {canonicalPost.title[lang]}
        </h1>

        <div className="mt-4 max-w-[760px] text-[clamp(1rem,1.35vw,1.4rem)] leading-[1.55] text-[#d4ccbd]">
          {canonicalPost.excerpt[lang]}
        </div>

        {canonicalPost.image.src ? (
          <figure className="mt-8">
            <img src={canonicalPost.image.src} alt={canonicalPost.image.alt[lang]} className="block h-auto w-full rounded-[0.5rem]" loading="eager" />
          </figure>
        ) : null}

        <div className="mt-10">
          {body ? (
            <BlogHtmlContent html={body} />
          ) : (
            <div className="space-y-4">
              <div className="h-6 w-2/3 rounded-full bg-white/8" />
              <div className="h-6 w-full rounded-full bg-white/8" />
              <div className="h-6 w-5/6 rounded-full bg-white/8" />
            </div>
          )}
        </div>
      </section>
    </BlogDetailShell>
  )
}

function BlogHtmlContent({ html }: { html: string }) {
  return <div className="prose-chat prose-chat-wide" dangerouslySetInnerHTML={{ __html: html }} />
}

function BlogTagPage({
  lang,
  onToggleLang,
  slug,
}: {
  lang: Lang
  onToggleLang: () => void
  slug: string
}) {
  const tag = blogTagsBySlug.get(slug)
  const archivePosts = useMemo(
    () => [...blogFeedPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.id.localeCompare(a.id)),
    []
  )
  const posts = tag ? archivePosts.filter(post => post.tags.includes(tag.id)) : []

  useEffect(() => {
    document.title = tag ? `#${tag[lang].name} — Blog` : `Blog`
  }, [lang, tag])

  if (!tag) {
    return <BlogNotFound lang={lang} onToggleLang={onToggleLang} />
  }

  return (
    <BlogDetailShell lang={lang} onToggleLang={onToggleLang}>
      <section className="mx-auto w-full max-w-[1400px] px-5 py-8 md:px-6 md:py-12">
        <div className="max-w-[900px]">
          <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#8e8678]">
            {lang === 'ru' ? 'Тег' : 'Tag'}
          </div>
          <h1 className="mt-3 text-[clamp(2.5rem,6vw,5rem)] font-[800] uppercase leading-[0.95] text-[#f5edd8]">
            #{tag[lang].name}
          </h1>
          <p className="mt-4 max-w-[760px] text-[clamp(1rem,1.35vw,1.4rem)] leading-[1.58] text-[#d4ccbd]">
            {tag[lang].description || (lang === 'ru' ? 'Посты по этой теме.' : 'Posts under this tag.')}
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {posts.map(post => (
            <BlogFeedCard key={post.id} post={post} lang={lang} />
          ))}
        </div>
      </section>
    </BlogDetailShell>
  )
}

function BlogAuthorPage({
  lang,
  onToggleLang,
  slug,
}: {
  lang: Lang
  onToggleLang: () => void
  slug: string
}) {
  const author = blogAuthorsBySlug.get(slug)
  const archivePosts = useMemo(
    () => [...blogFeedPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.id.localeCompare(a.id)),
    []
  )
  const posts = author ? archivePosts.filter(post => post.author.slug === author.slug) : []

  useEffect(() => {
    document.title = author ? `${author.name} — Blog` : `Blog`
  }, [author])

  if (!author || posts.length === 0) {
    return <BlogNotFound lang={lang} onToggleLang={onToggleLang} />
  }

  return (
    <BlogDetailShell lang={lang} onToggleLang={onToggleLang}>
      <section className="mx-auto w-full max-w-[1400px] px-5 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
          <img
            src={author.profileImage}
            alt={author.name}
            className="h-24 w-24 rounded-full object-cover"
            loading="eager"
          />
          <div className="max-w-[900px]">
            <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#8e8678]">
              {lang === 'ru' ? 'Автор' : 'Author'}
            </div>
            <h1 className="mt-3 text-[clamp(2.5rem,6vw,5rem)] font-[800] uppercase leading-[0.95] text-[#f5edd8]">
              {author.name}
            </h1>
            {author.bio && (
              <p className="mt-4 max-w-[760px] text-[clamp(1rem,1.35vw,1.4rem)] leading-[1.58] text-[#d4ccbd]">
                {author.bio}
              </p>
            )}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] uppercase tracking-[0.16em] text-[#8e8678]">
              {author.location && <span>{author.location}</span>}
              {author.website && (
                <a href={author.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#f5edd8] transition-opacity hover:opacity-75">
                  <Link2 className="h-3.5 w-3.5" />
                  {lang === 'ru' ? 'Сайт' : 'Website'}
                </a>
              )}
              <span>{posts.length} {lang === 'ru' ? 'постов' : 'posts'}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {posts.map(post => (
            <BlogFeedCard key={post.id} post={post} lang={lang} />
          ))}
        </div>
      </section>
    </BlogDetailShell>
  )
}

function BlogNotFound({ lang, onToggleLang }: { lang: Lang; onToggleLang: () => void }) {
  return (
    <BlogDetailShell lang={lang} onToggleLang={onToggleLang}>
      <section className="mx-auto w-full max-w-[900px] px-5 py-12 md:px-6 md:py-16">
        <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#8e8678]">
          404
        </div>
        <h1 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-[800] uppercase leading-[0.95] text-[#f5edd8]">
          {lang === 'ru' ? 'Страница не найдена' : 'Page not found'}
        </h1>
        <a href={`/blog/${lang === 'ru' ? 'ru/' : ''}`} className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[15px] font-[700] text-[#f5edd8] transition-colors hover:bg-white/10">
          <ArrowLeft className="h-4 w-4" />
          {lang === 'ru' ? 'Назад к блогу' : 'Back to blog'}
        </a>
      </section>
    </BlogDetailShell>
  )
}

function BlogDetailShell({
  lang,
  onToggleLang,
  children,
}: {
  lang: Lang
  onToggleLang: () => void
  children: ReactNode
}) {
  return (
    <div className="min-h-[100dvh] bg-[#0d0a06] text-[#f5edd8]">
      <header className="border-b border-white/10 bg-[#0d0a06]">
        <div className="mx-auto flex w-full max-w-[1400px] items-center gap-4 px-5 py-4 md:px-6 md:py-5">
          <a href={`/blog/${lang === 'ru' ? 'ru/' : ''}`} className="flex items-center gap-3">
            <img
              src={blogData.brandAvatar}
              alt={lang === 'ru' ? 'Александр Невский' : 'Alexander Nevsky'}
              className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
              loading="eager"
            />
          </a>

          <div className="min-w-0 flex-1 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-[#8e8678] md:text-[12px]">
            {lang === 'ru' ? 'Блог' : 'Blog'}
          </div>

          <button
            type="button"
            onClick={onToggleLang}
            className="text-[#f5edd8] transition-opacity hover:opacity-75"
          >
            {lang === 'ru' ? 'English' : 'Русский'}
          </button>

          <a
            href={profile.links.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#f26c3f] px-6 py-3 text-[15px] font-[800] text-black transition-opacity hover:opacity-90 md:px-7 md:py-3.5"
          >
            Telegram
          </a>
        </div>
      </header>
      {children}
    </div>
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
