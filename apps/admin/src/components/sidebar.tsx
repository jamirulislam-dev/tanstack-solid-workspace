import { Link } from '@tanstack/solid-router'
import { css } from 'styled-system/css'

const sidebarStyle = css({
  width: '260px',
  backgroundColor: '#0f172a',
  color: '#f8fafc',
  padding: '1.5rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  flexShrink: 0,
})

const brandStyle = css({
  fontSize: '1.25rem',
  fontWeight: '700',
  color: '#ffffff',
  padding: '0 0.75rem 1.25rem 0.75rem',
  borderBottom: '1px solid #1e293b',
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
})

const navSectionStyle = css({
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  flex: 1,
})

const navHeaderStyle = css({
  fontSize: '0.75rem',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#64748b',
  padding: '0 0.75rem',
  marginBottom: '0.5rem',
})

const navLinkStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  padding: '0.625rem 0.875rem',
  borderRadius: '0.375rem',
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '0.925rem',
  fontWeight: '500',
  transition: 'all 0.15s ease-in-out',
  '&:hover': {
    backgroundColor: '#1e293b',
    color: '#ffffff',
  },
})

const navLinkActiveStyle = css({
  backgroundColor: '#4f46e5',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#4338ca',
    color: '#ffffff',
  },
})

const userFooterStyle = css({
  padding: '1rem 0.75rem',
  borderTop: '1px solid #1e293b',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
})

const avatarStyle = css({
  width: '36px',
  height: '36px',
  borderRadius: '9999px',
  backgroundColor: '#4f46e5',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '600',
  fontSize: '0.875rem',
})

const userInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
})

const userNameStyle = css({
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#ffffff',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

const userRoleStyle = css({
  fontSize: '0.75rem',
  color: '#94a3b8',
})

export function Sidebar() {
  return (
    <aside class={sidebarStyle}>
      <div>
        <div class={brandStyle}>⚡ Admin Console</div>
        <nav class={navSectionStyle}>
          <div class={navHeaderStyle}>Navigation</div>
          <Link
            to="/"
            class={navLinkStyle}
            activeProps={{ class: navLinkActiveStyle }}
            activeOptions={{ exact: true }}
          >
            📊 Dashboard
          </Link>
          <Link
            to="/users"
            class={navLinkStyle}
            activeProps={{ class: navLinkActiveStyle }}
          >
            👥 Users
          </Link>
          <Link
            to="/settings"
            class={navLinkStyle}
            activeProps={{ class: navLinkActiveStyle }}
          >
            ⚙️ Settings
          </Link>

          <div style={{ "margin-top": '1.5rem' }} class={navHeaderStyle}>
            Auth Layout Demo
          </div>
          <Link
            to="/login"
            class={navLinkStyle}
            activeProps={{ class: navLinkActiveStyle }}
          >
            🔐 Login Page
          </Link>
        </nav>
      </div>

      <div class={userFooterStyle}>
        <div class={avatarStyle}>AD</div>
        <div class={userInfoStyle}>
          <div class={userNameStyle}>Jamirul Islam</div>
          <div class={userRoleStyle}>Super Admin</div>
        </div>
      </div>
    </aside>
  )
}
