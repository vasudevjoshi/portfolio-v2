import { Routes, Route } from 'react-router'
import FloatingNav from './components/layout/FloatingNav'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
      <FloatingNav />
    </>
  )
}

export default App
