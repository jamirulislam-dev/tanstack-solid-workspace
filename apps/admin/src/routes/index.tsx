import { createFileRoute } from '@tanstack/solid-router'
import { css } from 'styled-system/css'
import { For } from 'solid-js'

export const Route = createFileRoute('/')({
  component: Dashboard,
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

const gridStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1.5rem',
  marginBottom: '2rem',
})

const cardStyle = css({
  backgroundColor: '#ffffff',
  padding: '1.5rem',
  borderRadius: '0.75rem',
  border: '1px solid #e2e8f0',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
})

const cardLabelStyle = css({
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#64748b',
})

const cardValueStyle = css({
  fontSize: '1.875rem',
  fontWeight: '700',
  color: '#0f172a',
  marginTop: '0.5rem',
})

const cardChangeStyle = css({
  fontSize: '0.825rem',
  fontWeight: '600',
  color: '#16a34a',
  marginTop: '0.25rem',
})

const sectionCardStyle = css({
  backgroundColor: '#ffffff',
  borderRadius: '0.75rem',
  border: '1px solid #e2e8f0',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
  overflow: 'hidden',
})

const sectionHeaderStyle = css({
  padding: '1.25rem 1.5rem',
  borderBottom: '1px solid #e2e8f0',
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#0f172a',
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

const badgeStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.25rem 0.625rem',
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: '600',
  backgroundColor: '#dcfce7',
  color: '#15803d',
})

const stats = [
  { label: 'Total Revenue', value: '$48,250', change: '+12.5% from last month' },
  { label: 'Active Users', value: '2,420', change: '+8.2% from last month' },
  { label: 'New Signups', value: '380', change: '+15.3% this week' },
  { label: 'System Uptime', value: '99.98%', change: 'Optimal operational status' },
]

const recentActivities = [
  { user: 'Sarah Jenkins', action: 'Created new project', time: '10 minutes ago', status: 'Completed' },
  { user: 'Michael Chen', action: 'Upgraded subscription to Enterprise', time: '42 minutes ago', status: 'Completed' },
  { user: 'Emma Watson', action: 'Generated quarterly financial report', time: '2 hours ago', status: 'Completed' },
  { user: 'David Kim', action: 'Updated security access policies', time: '5 hours ago', status: 'Completed' },
]

function Dashboard() {
  return (
    <div>
      <div class={pageHeaderStyle}>
        <h1 class={pageTitleStyle}>System Dashboard</h1>
        <div class={pageSubtitleStyle}>Overview of current platform performance and user activity</div>
      </div>

      <div class={gridStyle}>
        <For each={stats}>
          {(stat) => (
            <div class={cardStyle}>
              <div class={cardLabelStyle}>{stat.label}</div>
              <div class={cardValueStyle}>{stat.value}</div>
              <div class={cardChangeStyle}>{stat.change}</div>
            </div>
          )}
        </For>
      </div>

      <div class={sectionCardStyle}>
        <div class={sectionHeaderStyle}>Recent Activity</div>
        <table class={tableStyle}>
          <thead>
            <tr>
              <th class={thStyle}>User</th>
              <th class={thStyle}>Action</th>
              <th class={thStyle}>Timestamp</th>
              <th class={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            <For each={recentActivities}>
              {(activity) => (
                <tr>
                  <td class={tdStyle}>{activity.user}</td>
                  <td class={tdStyle}>{activity.action}</td>
                  <td class={tdStyle}>{activity.time}</td>
                  <td class={tdStyle}>
                    <span class={badgeStyle}>{activity.status}</span>
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
