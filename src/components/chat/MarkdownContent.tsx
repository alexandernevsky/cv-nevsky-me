import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import { type PluggableList } from 'unified'
import { cn } from '@/lib/utils'

const markdownSanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'figure', 'figcaption'],
  attributes: {
    ...defaultSchema.attributes,
    a: [...(defaultSchema.attributes?.a ?? []), 'target', 'rel'],
    figure: ['className'],
    img: [...(defaultSchema.attributes?.img ?? []), 'loading'],
  },
}

const rehypePlugins: PluggableList = [rehypeRaw, [rehypeSanitize, markdownSanitizeSchema]]

interface MarkdownContentProps {
  children: string
  wide?: boolean
}

export function MarkdownContent({ children, wide }: MarkdownContentProps) {
  return (
    <div
      className={cn(
        'text-[15px] leading-[1.65] text-foreground',
        'prose-chat',
        wide && 'prose-chat-wide'
      )}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={rehypePlugins}>
        {children}
      </ReactMarkdown>
    </div>
  )
}
