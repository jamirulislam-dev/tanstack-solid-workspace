import { createFileRoute, Outlet } from '@tanstack/solid-router'
import { AuthLayout } from '~/components/layouts/auth-layout'

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
