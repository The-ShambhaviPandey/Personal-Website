import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import KnowMe from './pages/KnowMe'
import Learnings from './pages/Learnings'
import Experiments from './pages/Experiments'
import Experiences from './pages/Experiences'
import Milestones from './pages/Milestones'
import Contact from './pages/Contact'
import PostPage from './pages/PostPage'
import MusicPlayer from './components/MusicPlayer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/know-me' element={<KnowMe />} />
        <Route path='/learnings' element={<Learnings />} />
        <Route path='/experiments' element={<Experiments />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/milestones' element={<Milestones />} />
        <Route path='/contact' element={<Contact />} />

        {/* Universal post page — handles ALL sections */}
        <Route path='/post/:slug' element={<PostPage />} />
      </Routes>
      <MusicPlayer />
    </>
  )
}
