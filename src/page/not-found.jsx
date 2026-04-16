import { Link } from 'react-router-dom'
import './error.css'

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <div className="error-card">
        <span className="error-badge">404 Page</span>
        <p className="error-code">404</p>
        <h1>Page not found.</h1>
        <p className="error-description">
          The URL you entered does not exist in this application. Check the
          address or go back to the homepage.
        </p>

        <div className="error-message-box">
          <span className="error-message-label">Details</span>
          <p>No route matches this URL.</p>
        </div>

        <div className="error-actions">
          <Link to="/" className="error-button primary">
            Go Home
          </Link>
          <button
            type="button"
            className="error-button secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
