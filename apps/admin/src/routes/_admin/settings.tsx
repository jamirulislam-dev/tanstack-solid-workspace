import { createFileRoute } from '@tanstack/solid-router'
import { css } from 'styled-system/css'

export const Route = createFileRoute('/_admin/settings')({
  component: SettingsPage,
})

const pageHeaderStyle = css({
  marginBottom: '2rem',
})

const pageTitleStyle = css({
  fontSize: '1.75rem',
  fontWeight: '700',
  color: '#0f172a',
  margin: 0,
})

const pageSubtitleStyle = css({
  fontSize: '0.95rem',
  color: '#64748b',
  marginTop: '0.25rem',
})

const formCardStyle = css({
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  border: '1px solid #e2e8f0',
  padding: '1.5rem',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
  maxWidth: '640px',
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

const buttonStyle = css({
  padding: '0.625rem 1.25rem',
  backgroundColor: '#4f46e5',
  color: '#ffffff',
  border: 'none',
  borderRadius: '0.375rem',
  fontSize: '0.875rem',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  '&:hover': {
    backgroundColor: '#4338ca',
  },
})

function SettingsPage() {
  return (
    <div>
      <div class={pageHeaderStyle}>
        <h1 class={pageTitleStyle}>System Settings</h1>
        <div class={pageSubtitleStyle}>Configure application preferences and system defaults</div>
      </div>

      <div class={formCardStyle}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div class={formGroupStyle}>
            <label class={labelStyle}>Application Name</label>
            <input class={inputStyle} type="text" value="TanStack Solid Admin" />
          </div>

          <div class={formGroupStyle}>
            <label class={labelStyle}>Support Email</label>
            <input class={inputStyle} type="email" value="admin@company.com" />
          </div>

          <div class={formGroupStyle}>
            <label class={labelStyle}>API Base URL</label>
            <input class={inputStyle} type="text" value="https://api.company.com/v1" />
          </div>

          <button class={buttonStyle} type="button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}
