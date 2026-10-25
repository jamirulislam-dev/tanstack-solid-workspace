import { createFileRoute, Outlet } from '@tanstack/solid-router'
import { AdminLayout } from '~/components/layouts/AdminLayout'

export const Route = createFileRoute('/_admin')({
  component: AdminLayoutRoute,
})

function AdminLayoutRoute() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  )
}
