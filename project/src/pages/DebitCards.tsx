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
  return (
    <div>
      <SearchBar />

      <div className="cards">
        {cards.map((card) => (
          <ViewCard
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default DebitCards