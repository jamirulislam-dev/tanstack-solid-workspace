import { createFileRoute, Outlet } from '@tanstack/solid-router'
import { AuthLayout } from '~/components/layouts/AuthLayout'

export const Route = createFileRoute('/_auth')({
  component: AuthLayoutRoute,
})

function AuthLayoutRoute() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
}
