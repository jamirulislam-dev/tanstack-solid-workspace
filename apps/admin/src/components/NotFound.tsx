import { Link } from '@tanstack/solid-router'

export function NotFound() {
  return (
    <div style={{ padding: '3rem 1rem', "text-align": 'center' }}>
      <h2 style={{ "font-size": '2rem', "margin-bottom": '0.5rem' }}>404 - Not Found</h2>
      <p style={{ color: '#64748b', "margin-bottom": '1.5rem' }}>
        The page you requested could not be found.
      </p>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          background: '#4f46e5',
          color: 'white',
          "text-decoration": 'none',
          "border-radius": '0.375rem',
          "font-weight": '500'
        }}
      >
        Return to Dashboard
      </Link>
    </div>
  )
}
