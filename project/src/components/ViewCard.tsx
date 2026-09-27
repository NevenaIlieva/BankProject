import { Link } from 'react-router-dom'
import './ViewCard.css'

type ViewCardProps = {
  id: string
  name: string
  description: string
}

function ViewCard({ id, name, description }: ViewCardProps) {
  return (
    <Link to={`/cards/${id}`} className="view-card-wrapper">
      <div className="view-card-container">
        <div className={`view-card ${id}`}>
          
          {/* Front */}
          <div className="card-front">
            <div className="card-top">
              <span className="bank-name">BANK</span>
              <span className="card-type">{name}</span>
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

          {/* Back */}
          <div className="card-back">
            <div className="magnetic-strip" />

            <div className="signature-area">
              <span>AUTHORIZED SIGNATURE</span>
              <div className="signature" />
              <span>6428</span>
            </div>

            <p className="back-text">
              This card is issued by our Bank.
              <br />
              If found, please return to the nearest branch.
            </p>

            <strong>VISA</strong>
          </div>

        </div>
      </div>

      <div className="card-description">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default ViewCard