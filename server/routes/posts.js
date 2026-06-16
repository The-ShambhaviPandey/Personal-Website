import express from 'express'
import Post from '../models/Post.js'

const router = express.Router()

function makeSlug(title) {
  if (!title || !title.trim()) return `post-${Date.now()}`
  const base = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return `${base}-${Date.now().toString().slice(-5)}`
}

// GET all posts for a section — used by listing pages
router.get('/', async (req, res) => {
  try {
    const { section } = req.query

    const filter = { published: true }

    if (section) {
      filter.$or = [{ section }, { crossSections: section }]
    }

    const posts = await Post.find(filter)
      .select('-content')
      .sort({ createdAt: -1 })

    res.json(posts)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET single post by slug — used by PostPage
router.get('/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug, published: true })
    if (!post) return res.status(404).json({ error: 'Not found' })
    res.json(post)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
