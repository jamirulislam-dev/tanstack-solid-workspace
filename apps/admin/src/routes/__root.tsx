/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/solid-router'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'
import { HydrationScript } from 'solid-js/web'
import type * as Solid from 'solid-js'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { css } from 'styled-system/css'

const layoutStyle = css({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f8fafc',
})

const sidebarStyle = css({
  width: '260px',
  backgroundColor: '#0f172a',
  color: '#f8fafc',
  padding: '1.5rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flexShrink: 0,
})

const brandStyle = css({
  fontSize: '1.25rem',
  fontWeight: '700',
  color: '#ffffff',
  paddingLeft: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

const navStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
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

const mainContainerStyle = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
})

const headerStyle = css({
  height: '64px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e2e8f0',
  padding: '0 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const headerTitleStyle = css({
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#1e293b',
})

const userBadgeStyle = css({
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#475569',
  backgroundColor: '#f1f5f9',
  padding: '0.375rem 0.75rem',
  borderRadius: '9999px',
})

const contentStyle = css({
  flex: 1,
  padding: '2rem',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Admin Console' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: Solid.JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <HydrationScript />
      </head>
      <body>
        <HeadContent />
        <div class={layoutStyle}>
          <aside class={sidebarStyle}>
            <div class={brandStyle}>⚡ Admin Console</div>
            <nav class={navStyle}>
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
            </nav>
          </aside>
          <div class={mainContainerStyle}>
            <header class={headerStyle}>
              <div class={headerTitleStyle}>Administration Overview</div>
              <div class={userBadgeStyle}>Admin User</div>
            </header>
            <main class={contentStyle}>
              {children}
            </main>
          </div>
        </div>
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
