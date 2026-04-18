import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { LangProvider } from '@/context/LangContext'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { CV } from '@/pages/CV'
import { Project } from '@/pages/Project'

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col transition-theme">
            <Header />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/work/:slug" element={<Project />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </LangProvider>
    </ThemeProvider>
  )
}
