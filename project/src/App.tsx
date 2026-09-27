import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'

import Home from './pages/Home'
import DebitCards from './pages/DebitCards'
import DebitCard from './pages/DebitCard'
import About from './pages/About'
import CardApplication from './pages/CardApplication'
import SettingsWheel from './components/SettingsWheel'

import './App.css'

type Theme = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<Theme>('dark')

  return (
    <div className="app" data-theme={theme}>
      <BrowserRouter>
        <nav className="navbar">
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cards">Debit Cards</NavLink>
          </div>
          <NavLink to="/about">About</NavLink>

          <SettingsWheel
            theme={theme}
            onThemeChange={setTheme}
          />
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<DebitCards />} />
          <Route path="/cards/:cardId" element={<DebitCard />} />
          <Route
            path="/cards/:cardId/apply"
            element={<CardApplication />}
          />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App