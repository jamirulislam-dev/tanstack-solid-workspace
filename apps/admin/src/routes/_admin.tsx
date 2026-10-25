import { createFileRoute, Outlet } from '@tanstack/solid-router'
import { AdminLayout } from '~/components/layouts/admin-layout'

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
