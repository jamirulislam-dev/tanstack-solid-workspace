import type { JSX } from 'solid-js'
import { Sidebar } from '../Sidebar'
import { Header } from '../Header'
import { css } from 'styled-system/css'

const layoutStyle = css({
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '#f8fafc',
})

const mainContainerStyle = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
})

const contentStyle = css({
  flex: 1,
  padding: '2rem',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
})

export interface AdminLayoutProps {
  children: JSX.Element
  title?: string
}

export function AdminLayout(props: AdminLayoutProps) {
  return (
    <div class={layoutStyle}>
      <Sidebar />
      <div class={mainContainerStyle}>
        <Header title={props.title} />
        <main class={contentStyle}>
          {props.children}
        </main>
      </div>
    </div>
  )
}
