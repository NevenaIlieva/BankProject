import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ViewCard from '../components/ViewCard'
import './DebitCards.css'

const cards = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'A simple debit card for everyday banking.',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'A premium card with additional benefits.',
  },
  {
    id: 'student',
    name: 'Student',
    description: 'A debit card designed for students.',
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'A card designed for spending abroad.',
  },
]

function DebitCards() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCards = cards.filter((card) => {
    const search = searchTerm.toLowerCase().trim()

    return (
      card.name.toLowerCase().includes(search) ||
      card.description.toLowerCase().includes(search)
    )
  })

  return (
    <main className="debit-cards-page">
      <div className="cards-header">
        <div>
          <h1>Debit Cards</h1>
          <p>Find the card that works for you.</p>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>

      <div className="cards">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <ViewCard
              key={card.id}
              id={card.id}
              name={card.name}
              description={card.description}
            />
          ))
        ) : (
          <p className="no-results">
            No cards found for "{searchTerm}".
          </p>
        )}
      </div>
    </main>
  )
}

export default DebitCards
