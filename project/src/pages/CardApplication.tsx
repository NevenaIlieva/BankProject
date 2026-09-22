import { useParams } from 'react-router-dom'
import './CardApplication.css'

function CardApplication() {
  const { cardId } = useParams()

  return (
<main className="application-page">

  <header className="application-header">
    <h1>Apply for {cardId} Card</h1>
    <p>Enter your details to start your application.</p>
  </header>

  <form>

    <section className="form-section">
      <h2>Personal information</h2>

      <div className="form-grid">

        <div className="form-field">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" type="text" />
        </div>

        <div className="form-field">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" type="text" />
        </div>

        <div className="form-field">
          <label htmlFor="dateOfBirth">Date of birth</label>
          <input id="dateOfBirth" type="date" />
        </div>

      </div>
    </section>

    <section className="form-section">
      <h2>Contact information</h2>

      <div className="form-grid">

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" />
        </div>

      </div>
    </section>

    <section className="form-section">
      <h2>Address</h2>

      <div className="form-grid">

        <div className="form-field full">
          <label htmlFor="address">Street address</label>
          <input id="address" type="text" />
        </div>

        <div className="form-field">
          <label htmlFor="city">City</label>
          <input id="city" type="text" />
        </div>

        <div className="form-field">
          <label htmlFor="postalCode">Postal code</label>
          <input id="postalCode" type="text" />
        </div>

      </div>
    </section>

    <div className="form-actions">
      <button type="submit">
        Continue →
      </button>
    </div>

  </form>

</main>
  )
}

export default CardApplication