import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'

function App() {
  const pathname = window.location.pathname

  if (pathname === '/contact') {
    return <ContactPage />
  }

  if (pathname === '/skills') {
    return <SkillsPage />
  }

  if (pathname === '/projects') {
    return <ProjectsPage />
  }

  if (pathname === '/experience') {
    return <ExperiencePage />
  }

  return <HomePage />
}

export default App
