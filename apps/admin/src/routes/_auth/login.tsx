import { createFileRoute } from '@tanstack/solid-router'
import { css } from 'styled-system/css'

export const Route = createFileRoute('/_auth/login')({
  component: LoginPage,
})

const titleStyle = css({
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#0f172a',
  textAlign: 'center',
  marginBottom: '0.5rem',
})

const subtitleStyle = css({
  fontSize: '0.875rem',
  color: '#64748b',
  textAlign: 'center',
  marginBottom: '2rem',
})

const formGroupStyle = css({
  marginBottom: '1.25rem',
})

const labelStyle = css({
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#334155',
  marginBottom: '0.5rem',
})

const inputStyle = css({
  width: '100%',
  padding: '0.625rem 0.875rem',
  borderRadius: '0.375rem',
  border: '1px solid #cbd5e1',
  fontSize: '0.875rem',
  outline: 'none',
  transition: 'border-color 0.15s ease',
  '&:focus': {
    borderColor: '#4f46e5',
    boxShadow: '0 0 0 1px #4f46e5',
  },
})

const submitButtonStyle = css({
  width: '100%',
  padding: '0.75rem',
  backgroundColor: '#4f46e5',
  color: '#ffffff',
  border: 'none',
  borderRadius: '0.375rem',
  fontSize: '0.875rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  marginTop: '0.5rem',
  '&:hover': {
    backgroundColor: '#4338ca',
  },
})

const demoBadgeStyle = css({
  marginTop: '1.5rem',
  padding: '0.75rem',
  backgroundColor: '#f1f5f9',
  borderRadius: '0.375rem',
  fontSize: '0.75rem',
  color: '#475569',
  textAlign: 'center',
})

function LoginPage() {
  return (
    <div>
      <h2 class={titleStyle}>Sign In</h2>
      <div class={subtitleStyle}>Enter your credentials to access the admin console</div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div class={formGroupStyle}>
          <label class={labelStyle}>Email Address</label>
          <input
            class={inputStyle}
            type="email"
            value="admin@company.com"
            placeholder="admin@company.com"
          />
        </div>

        <div class={formGroupStyle}>
          <label class={labelStyle}>Password</label>
          <input
            class={inputStyle}
            type="password"
            value="••••••••••••"
            placeholder="Enter password"
          />
        </div>

        <button class={submitButtonStyle} type="button">
          Sign In to Dashboard
        </button>

        <div class={demoBadgeStyle}>
          💡 This route demonstrates the <strong>AuthLayout</strong> (no sidebar, centered card).
        </div>
      </form>
    </div>
  )
}
