import { topics, type Topic } from '@/data/topics'

const STOPWORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do', 'does', 'for',
  'from', 'has', 'have', 'how', 'i', 'in', 'is', 'it', 'of', 'on', 'or', 'please',
  'tell', 'that', 'the', 'this', 'to', 'was', 'were', 'what', 'whats', 'with',
  'you', 'your', 'me', 'about', 'some', 'any', 'there',
])

function tokenize(input: string): string[] {
  return input
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^\p{L}\p{N}\s]+/gu, ' ')
    .split(/\s+/)
    .filter(w => w && !STOPWORDS.has(w))
}

interface Match {
  topic: Topic
  score: number
}

/**
 * Score a free-text query against every topic's keywords.
 * Multi-word keywords score higher than single tokens.
 * Returns the best match if score clears the threshold, else null.
 */
export function matchTopic(query: string, threshold = 1.5): Topic | null {
  const normalized = query.toLowerCase().trim()
  if (!normalized) return null
  const tokens = new Set(tokenize(query))

  const matches: Match[] = topics.map(topic => {
    let score = 0
    const keywords = topic.keywords ?? []
    for (const raw of keywords) {
      const kw = raw.toLowerCase()
      if (kw.includes(' ')) {
        if (normalized.includes(kw)) score += 3
      } else {
        if (tokens.has(kw)) score += 1
      }
    }
    // Label match — a direct ask like "fundmates" or "contact"
    if (normalized.includes(topic.label.toLowerCase())) score += 2
    if (normalized.includes(topic.id.replace(/-/g, ' '))) score += 2
    return { topic, score }
  })

  matches.sort((a, b) => b.score - a.score)
  const top = matches[0]
  if (!top || top.score < threshold) return null
  return top.topic
}

/**
 * Pick a few suggested topic IDs for the off-topic fallback.
 */
export function offTopicSuggestions(): string[] {
  return ['who', 'selected-work', 'current-builds']
}
