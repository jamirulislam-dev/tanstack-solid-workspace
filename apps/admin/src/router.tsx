import { createRouter } from '@tanstack/solid-router'
import { routeTree } from './routeTree.gen'
import { DefaultCatchBoundary } from './components/default-catch-boundary'
import { NotFound } from './components/not-found'

export function getRouter() {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    defaultErrorComponent: DefaultCatchBoundary,
    defaultNotFoundComponent: () => <NotFound />,
    scrollRestoration: true,
  })

  return router
}

declare module '@tanstack/solid-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
