import { Link, useRouteError } from 'react-router-dom'
import './error.css'

export default function ErrorPage() {
  const error = useRouteError()
  const statusCode = error?.status || 'Error'
  const message =
    error?.statusText || error?.message || 'An unexpected error has occurred.'

  return (
    <div className="error-page">
      <div className="error-card">
        <span className="error-badge">Route Error</span>
        <p className="error-code">{statusCode}</p>
        <h1>Something went off track.</h1>
        <p className="error-description">
          The page could not be loaded. Check the route, then try again or go
          back to a safe page.
        </p>

        <div className="error-message-box">
          <span className="error-message-label">Details</span>
          <p>{message}</p>
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
