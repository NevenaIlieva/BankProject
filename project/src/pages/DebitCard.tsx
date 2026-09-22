import { Link, useParams } from 'react-router-dom'
import './DebitCard.css'

const cards = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'A simple debit card for everyday banking.',
    monthlyFee: '€0.00',
    foreignFee: '2%',
    atmFee: '€0.50',
    replacementFee: '€5.00',
    benefits: [
      'No monthly fee',
      'Contactless payments',
      'Mobile banking',
      'Secure online payments',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'A premium card with additional benefits.',
    monthlyFee: '€5.99',
    foreignFee: '0%',
    atmFee: '€0.00',
    replacementFee: '€0.00',
    benefits: [
      'No foreign transaction fees',
      'Free ATM withdrawals',
      'Travel insurance',
      'Priority customer support',
    ],
  },
  {
    id: 'student',
    name: 'Student',
    description: 'A debit card designed for students.',
    monthlyFee: '€0.00',
    foreignFee: '1%',
    atmFee: '€0.00',
    replacementFee: '€5.00',
    benefits: [
      'No monthly fee',
      'Free ATM withdrawals',
      'Mobile banking',
      'Student discounts',
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'A card designed for spending abroad.',
    monthlyFee: '€2.99',
    foreignFee: '0%',
    atmFee: '€0.00',
    replacementFee: '€5.00',
    benefits: [
      'No foreign transaction fees',
      'Free international withdrawals',
      'Travel insurance',
      'Emergency card replacement',
    ],
  },
]

function DebitCard() {
  const { cardId } = useParams()

  const card = cards.find((card) => card.id === cardId)

  if (!card) {
    return (
      <div className="card-not-found">
        <h1>Card not found</h1>
        <Link to="/cards">Back to Debit Cards</Link>
      </div>
    )
  }

  return (
    <main className="debit-card-page">
      <Link to="/cards" className="back-link">
        ← Back to Debit Cards
      </Link>

      <section className="card-header">
        <div className={`detail-card ${card.id}`}>
          <div className="detail-card-top">
            <span>BANK</span>
            <span>{card.name}</span>
          </div>

          <div className="detail-chip">
            <span />
            <span />
            <span />
          </div>

          <div className="detail-card-number">
            5412&nbsp;&nbsp;8472&nbsp;&nbsp;3921&nbsp;&nbsp;6428
          </div>

          <div className="detail-card-bottom">
            <span>•••• 6428</span>
            <span>VISA</span>
          </div>
        </div>

        <div className="card-introduction">
          <h1>{card.name} Debit Card</h1>

          <p>{card.description}</p>

<Link
  to={`/cards/${card.id}/apply`}
  className="apply-button"
>
  Apply for card
            </Link>
        </div>
      </section>

      <section className="card-details">
        <h2>Card details</h2>

        <div className="fee-grid">
          <div className="fee">
            <span>Monthly fee</span>
            <strong>{card.monthlyFee}</strong>
          </div>

          <div className="fee">
            <span>Foreign transaction fee</span>
            <strong>{card.foreignFee}</strong>
          </div>

          <div className="fee">
            <span>ATM withdrawal</span>
            <strong>{card.atmFee}</strong>
          </div>

          <div className="fee">
            <span>Card replacement</span>
            <strong>{card.replacementFee}</strong>
          </div>
        </div>
      </section>

      <section className="benefits">
        <h2>Benefits</h2>

        <div className="benefits-list">
          {card.benefits.map((benefit) => (
            <div className="benefit" key={benefit}>
              <span className="check">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default DebitCard