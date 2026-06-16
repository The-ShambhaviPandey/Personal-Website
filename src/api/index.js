const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// ── Posts ─────────────────────────────────────────────────

// Get card list for a section (no full content)
// section: 'proud'|'failed'|'obsessing'|'learning'|'experiment'|'experience'|'milestone'|'hero'
export async function getPostsBySection(section) {
  const res = await fetch(`${BASE_URL}/posts?section=${section}`)
  if (!res.ok) throw new Error(`Failed to fetch posts for section: ${section}`)
  return res.json()
}

// Get one post's full data including content HTML
export async function getPostBySlug(slug) {
  const res = await fetch(`${BASE_URL}/posts/${slug}`)
  if (!res.ok) throw new Error('Post not found')
  return res.json()
}
