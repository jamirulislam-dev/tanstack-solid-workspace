import { createFileRoute } from '@tanstack/solid-router'
import { css } from 'styled-system/css'
import { For } from 'solid-js'

export const Route = createFileRoute('/users')({
  component: UsersPage,
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

const sectionCardStyle = css({
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  border: '1px solid #e2e8f0',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
})

const tableStyle = css({
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
  fontSize: '0.875rem',
})

const thStyle = css({
  backgroundColor: '#f8fafc',
  padding: '0.75rem 1.5rem',
  color: '#475569',
  fontWeight: '600',
  borderBottom: '1px solid #e2e8f0',
})

const tdStyle = css({
  padding: '1rem 1.5rem',
  borderBottom: '1px solid #f1f5f9',
  color: '#334155',
})

const roleBadgeStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.2rem 0.5rem',
  borderRadius: '0.375rem',
  fontSize: '0.75rem',
  fontWeight: '600',
  backgroundColor: '#e0e7ff',
  color: '#4338ca',
})

const activeStatusStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.2rem 0.5rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '600',
  backgroundColor: '#dcfce7',
  color: '#15803d',
})

const inactiveStatusStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.2rem 0.5rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '600',
  backgroundColor: '#f1f5f9',
  color: '#64748b',
})

const usersList = [
  { id: '1', name: 'Alice Cooper', email: 'alice@company.com', role: 'Super Admin', status: 'Active' },
  { id: '2', name: 'Bob Smith', email: 'bob@company.com', role: 'Billing Manager', status: 'Active' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@company.com', role: 'Developer', status: 'Active' },
  { id: '4', name: 'Diana Prince', email: 'diana@company.com', role: 'Support Agent', status: 'Inactive' },
  { id: '5', name: 'Ethan Hunt', email: 'ethan@company.com', role: 'Security Auditor', status: 'Active' },
]

function UsersPage() {
  return (
    <div>
      <div class={pageHeaderStyle}>
        <h1 class={pageTitleStyle}>User Directory</h1>
        <div class={pageSubtitleStyle}>Manage team members, roles, and administrative permissions</div>
      </div>

      <div class={sectionCardStyle}>
        <table class={tableStyle}>
          <thead>
            <tr>
              <th class={thStyle}>Name</th>
              <th class={thStyle}>Email</th>
              <th class={thStyle}>Role</th>
              <th class={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            <For each={usersList}>
              {(user) => (
                <tr>
                  <td class={tdStyle}>{user.name}</td>
                  <td class={tdStyle}>{user.email}</td>
                  <td class={tdStyle}>
                    <span class={roleBadgeStyle}>{user.role}</span>
                  </td>
                  <td class={tdStyle}>
                    <span class={user.status === 'Active' ? activeStatusStyle : inactiveStatusStyle}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              )}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  )
}
