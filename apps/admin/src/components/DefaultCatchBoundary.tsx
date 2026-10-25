import type { ErrorComponentProps } from '@tanstack/solid-router'

export function DefaultCatchBoundary(props: ErrorComponentProps) {
  return (
    <div style={{ padding: '2rem', "text-align": 'center' }}>
      <h2 style={{ color: '#ef4444' }}>Something went wrong!</h2>
      <pre style={{ background: '#f1f5f9', padding: '1rem', "border-radius": '0.5rem', display: 'inline-block' }}>
        {props.error?.message || 'An unexpected error occurred'}
      </pre>
      <div>
        <button
          onClick={() => props.reset()}
          style={{
            "margin-top": '1rem',
            padding: '0.5rem 1rem',
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            "border-radius": '0.375rem',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
