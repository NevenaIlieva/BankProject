
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    number: '01',
    title: 'Clarity over complexity',
    description:
      'Your money should be easy to understand. We keep information clear, useful, and straightforward, without unnecessary jargon.',
  },
  {
    number: '02',
    title: 'Control in your hands',
    description:
      'A good banking experience gives you the tools to make decisions, manage your spending, and stay informed.',
  },
  {
    number: '03',
    title: 'Built for real life',
    description:
      'From everyday purchases to bigger plans, your banking tools should fit around the way you actually live.',
  },
]

const features = [
  {
    title: 'A clearer view',
    description:
      'See your cards, spending, and account activity in one considered digital experience.',
    icon: '◫',
  },
  {
    title: 'More control',
    description:
      'Keep important account actions close at hand and make everyday money management simpler.',
    icon: '⌘',
  },
  {
    title: 'Made to move with you',
    description:
      'A flexible experience designed for the different ways you spend, save, and plan.',
    icon: '↗',
  },
]

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="about-eyebrow">
            <span className="eyebrow-line" />
            A different kind of banking
          </span>

          <h1>
            Your money.
            <br />
            <span>More in focus.</span>
          </h1>

          <p className="about-hero-description">
            Banking should help you move forward, not get in your way.
            Our bank brings everyday money tools into one clear, thoughtful
            experience.
          </p>

          <div className="about-hero-actions">
            <Link to="/cards" className="about-primary-button">
              Explore our cards <span>↗</span>
            </Link>
            <a href="#our-approach" className="about-text-link">
              Get to know us <span>↓</span>
            </a>
          </div>

          <div className="about-hero-note">
            <span className="about-note-dot" />
            Banking, designed around you
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-visual-glow" />
          <div className="about-visual-caption">
            <span>THE EXPERIENCE</span>
            <span>01 / 04</span>
          </div>

          <div className="about-card-stack">
            <div className="about-card-back">
              <span className="about-card-back-label">EVERYDAY</span>
              <div className="about-card-back-orbit" />
            </div>

            <div className="about-bank-card">
              <div className="about-bank-card-top">
                <span className="about-card-brand">bank<span>.</span></span>
                <span className="about-card-chip">▦</span>
              </div>

              <div className="about-card-middle">
                <span className="about-card-type">DEBIT</span>
                <span className="about-card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 4829</span>
              </div>

              <div className="about-bank-card-bottom">
                <span>YOUR NAME</span>
                <span>VISA</span>
              </div>
            </div>
          </div>

          <div className="about-floating-label">
            <span className="floating-label-icon">✳</span>
            <div>
              <strong>Made for everyday</strong>
              <span>And everything beyond</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-approach" id="our-approach">
        <div className="about-section-heading">
          <span className="about-eyebrow">OUR APPROACH</span>
          <h2>
            Less banking
            <br />
            <span>as usual.</span>
          </h2>
        </div>

        <div className="about-approach-copy">
          <p className="about-large-copy">
            Money is part of almost everything you do. The tools you use
            to manage it should feel like they belong in your life.
          </p>
          <p>
            This bank is a fictional digital bank concept built around a simple
            idea: make the everyday experience feel more understandable,
            more useful, and more human. No unnecessary complexity.
            Just a clearer way to interact with your money.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <div>
            <span className="about-eyebrow">WHAT WE BELIEVE</span>
            <h2>Good banking starts with <span>good principles.</span></h2>
          </div>
          <p>
            The experience matters as much as the features. These are
            the ideas behind the way our bank is designed.
          </p>
        </div>

        <div className="about-value-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.number}>
              <span className="about-value-number">{value.number}</span>
              <div className="about-value-mark">↗</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-experience">
        <div className="about-experience-visual">
          <div className="about-dashboard">
            <div className="about-dashboard-header">
              <span className="about-dashboard-logo">bank<span>.</span></span>
              <span className="about-dashboard-avatar">N</span>
            </div>
            <div className="about-dashboard-greeting">
              <span>YOUR OVERVIEW</span>
              <strong>Everything in view.</strong>
            </div>
            <div className="about-balance-card">
              <span>Available balance</span>
              <strong>€ 4,280<span>.50</span></strong>
              <div className="about-balance-footer">
                <span>•••• 2048</span>
                <span>↗ Account details</span>
              </div>
            </div>
            <div className="about-dashboard-activity">
              <div className="about-activity-heading">
                <strong>Recent activity</strong>
                <span>View all</span>
              </div>
              <div className="about-activity-row">
                <span className="about-activity-icon">↗</span>
                <span><b>Groceries</b><small>Today, 10:42</small></span>
                <strong>− €42.80</strong>
              </div>
              <div className="about-activity-row">
                <span className="about-activity-icon">＋</span>
                <span><b>Monthly income</b><small>Yesterday</small></span>
                <strong className="about-positive">+ €1,850.00</strong>
              </div>
            </div>
          </div>
          <span className="about-visual-footnote">A CONCEPT, BUILT FOR CLARITY</span>
        </div>

        <div className="about-experience-copy">
          <span className="about-eyebrow">DESIGNED AROUND YOU</span>
          <h2>Useful by design.<br /><span>Simple by nature.</span></h2>
          <p>
            The best interface is one that helps you find what you need
            without making you think about where to look. The concept
            brings key money tools together in a calm, consistent layout.
          </p>

          <div className="about-feature-list">
            {features.map((feature) => (
              <div className="about-feature" key={feature.title}>
                <span className="about-feature-icon">{feature.icon}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-decoration">bank.</div>
        <span className="about-eyebrow">YOUR NEXT STEP</span>
        <h2>Find the card<br /><span>that fits your life.</span></h2>
        <p>
          Explore the card range and find the features that suit
          your everyday spending.
        </p>
        <Link to="/cards" className="about-primary-button">
          Explore debit cards <span>↗</span>
        </Link>
      </section>

      <footer className="about-footer">
        <span>bank<span className="about-footer-dot">.</span></span>
        <p>This Bank is a fictional banking app concept.</p>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top ↑
        </a>
      </footer>
    </main>
  )
}

export default About
