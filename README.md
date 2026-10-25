# TanStack Solid Workspace

A pnpm monorepo workspace.

## Directory Structure

```text
├── apps/                 # Application packages
│   └── admin/            # TanStack Start (SolidJS) admin app with Panda CSS
├── packages/             # Shared libraries and packages (e.g. ui, utils, config)
├── .gitignore
├── package.json          # Root workspace package configuration
├── pnpm-workspace.yaml   # pnpm workspace definition
└── README.md
```

## Useful Commands

- **Install dependencies across the workspace:**
  ```bash
  pnpm install
  ```

- **Run script in all packages recursively:**
  ```bash
  pnpm -r <command>
  # e.g., pnpm build, pnpm dev
  ```

- **Run script in a specific package:**
  ```bash
  pnpm --filter <package-name> <script>
  ```

- **Add a dependency to a specific package:**
  ```bash
  pnpm --filter <package-name> add <dependency>
  ```

- **Add an internal workspace package as dependency:**
  ```bash
  pnpm --filter <app-or-package> add <workspace-package> --workspace
  ```
