import { css } from 'styled-system/css'
import type { JSX } from 'solid-js'

const headerContainerStyle = css({
  height: '64px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e2e8f0',
  padding: '0 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  zIndex: 10,
})

const headerTitleStyle = css({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#1e293b',
})

const headerRightStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

const statusBadgeStyle = css({
  fontSize: '0.75rem',
  fontWeight: '600',
  color: '#16a34a',
  backgroundColor: '#dcfce7',
  padding: '0.25rem 0.625rem',
  borderRadius: '9999px',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.375rem',
})

const userBadgeStyle = css({
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#475569',
  backgroundColor: '#f1f5f9',
  padding: '0.375rem 0.75rem',
  borderRadius: '9999px',
})

export interface HeaderProps {
  title?: string
  children?: JSX.Element
}

export function Header(props: HeaderProps) {
  return (
    <header class={headerContainerStyle}>
      <div class={headerTitleStyle}>
        {props.title || 'Administration Overview'}
      </div>
      <div class={headerRightStyle}>
        <span class={statusBadgeStyle}>
          ● System Online
        </span>
        <div class={userBadgeStyle}>Admin User</div>
        {props.children}
      </div>
    </header>
  )
}
