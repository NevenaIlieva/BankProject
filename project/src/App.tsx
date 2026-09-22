import { BrowserRouter, Routes, Route, NavLink  } from 'react-router-dom'

import Home from './pages/Home'
import DebitCards  from './pages/DebitCards'
import DebitCard from './pages/DebitCard'
import CardApplication from './pages/CardApplication'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink  to="/">Home</NavLink >
        <NavLink  to="/cards">Debit Cards</NavLink >
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<DebitCards  />} />
        <Route path="/cards/:cardId" element={<DebitCard />} />
        <Route
               path="/cards/:cardId/apply"
               element={<CardApplication />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App