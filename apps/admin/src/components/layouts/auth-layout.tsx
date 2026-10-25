import type { JSX } from 'solid-js'
import { css } from 'styled-system/css'
import { Link } from '@tanstack/solid-router'

const authContainerStyle = css({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0f172a',
  padding: '2rem 1rem',
})

const authCardStyle = css({
  width: '100%',
  maxWidth: '440px',
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  padding: '2.5rem',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
})

const logoContainerStyle = css({
  textAlign: 'center',
  marginBottom: '1.5rem',
})

const brandLogoStyle = css({
  fontSize: '1.75rem',
  fontWeight: '800',
  color: '#ffffff',
  marginBottom: '1rem',
  textAlign: 'center',
})

const backLinkStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '0.875rem',
  marginTop: '1.5rem',
  transition: 'color 0.15s ease',
  '&:hover': {
    color: '#ffffff',
  },
})

export interface AuthLayoutProps {
  children: JSX.Element
}

export function AuthLayout(props: AuthLayoutProps) {
  return (
    <div class={authContainerStyle}>
      <div class={logoContainerStyle}>
        <div class={brandLogoStyle}>⚡ Admin Console</div>
      </div>
      <div class={authCardStyle}>
        {props.children}
      </div>
      <Link to="/" class={backLinkStyle}>
        ← Back to Dashboard
      </Link>
    </div>
  )
}
