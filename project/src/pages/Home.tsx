import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">BANK</span>

          <h1>
            Banking made
            <br />
            <strong>simple.</strong>
          </h1>

          <p>
            Manage your money, explore our cards, and keep your finances
            under control from one place.
          </p>

          <div className="hero-actions">
            <Link to="/cards" className="primary-button">
              Explore debit cards
            </Link>

          </div>
        </div>

        <div className="hero-card">
          <div className="bank-card">
            <div className="card-top">
              <span>NOVA BANK</span>
              <span>PREMIUM</span>
            </div>

            <div className="chip">
              <span />
              <span />
              <span />
            </div>

            <div className="card-number">
              5412&nbsp;&nbsp;8472&nbsp;&nbsp;3921&nbsp;&nbsp;6428
            </div>

            <div className="card-bottom">
              <span>•••• 6428</span>
              <span>VISA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div>
          <span className="feature-number">01</span>
          <h2>One place for your money</h2>
          <p>
            Keep your cards and everyday banking in one simple interface.
          </p>
        </div>

        <div>
          <span className="feature-number">02</span>
          <h2>Cards for every need</h2>
          <p>
            Choose from Standard, Premium, Student and Travel cards.
          </p>
        </div>

        <div>
          <span className="feature-number">03</span>
          <h2>Built for everyday use</h2>
          <p>
            Simple tools designed to make managing your finances easier.
          </p>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <span className="eyebrow">FIND YOUR CARD</span>
          <h2>Choose the card that fits you.</h2>
        </div>

      </section>
    </main>
  )
}

export default Home