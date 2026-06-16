import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

dotenv.config()

const app = express()

app.use(
  cors({ origin: ['http://localhost:5173', 'https://theshambhavipandey.netlify.app'] })
)
app.use(express.json({ limit: '10mb' }))

app.use('/api/posts', postRoutes) // ← unified route for ALL sections

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB')
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    })
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  })
