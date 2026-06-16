import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    // ── Identity ──────────────────────────────────────────────
    slug: { type: String, required: true, unique: true },
    section: {
      type: String,
      required: true,
      enum: [
        'proud',
        'failed',
        'obsessing',
        'learning',
        'experiment',
        'experience',
        'milestone',
      ],
    },
    crossSections: { type: [String], default: [] },

    // ── Card display fields ───────────────────────────────────
    title: { type: String, required: true },
    date: { type: String },
    readTime: { type: String },
    certificate: { type: String },
    linkedin: { type: String },
    excerpt: { type: String },
    featured: { type: Boolean, default: false },

    thumbnailImage: {
      type: { type: String, enum: ['url', 'upload'], default: 'url' },
      url: String,
      publicId: String,
    },
    coverImage: {
      type: { type: String, enum: ['url', 'upload'], default: 'url' },
      url: String,
      publicId: String,
    },

    resources: [{ heading: String, url: String }],

    gallery: [
      {
        type: { type: String, enum: ['url', 'upload'], default: 'url' },
        url: String,
        publicId: String,
        caption: String,
      },
    ],

    // ── Full article content ──────────────────────────────────
    content: { type: String, default: '' },
    contentReady: { type: Boolean, default: false },

    // ── Extra structured data ─────────────────────────────────
    meta: { type: mongoose.Schema.Types.Mixed, default: {} },

    // ── Status ────────────────────────────────────────────────
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.model('Post', postSchema)
