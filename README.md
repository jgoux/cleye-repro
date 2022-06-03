# Steps to reproduce

```bash
pnpm install
pnpm build:types
```

# Error

```bash
➜  cleye-repro pnpm build:types

> cleye-repro@1.0.0 build:types /Users/jgoux/Documents/code/cleye-repro
> tsc --emitDeclarationOnly --declaration --declarationMap

index.ts:3:14 - error TS4023: Exported variable 'projectCreateCommand' has or is using name 'Renderers' from external module "/Users/jgoux/Documents/code/cleye-repro/node_modules/.pnpm/cleye@1.2.0/node_modules/cleye/dist/index" but cannot be named.

3 export const projectCreateCommand = command(
               ~~~~~~~~~~~~~~~~~~~~

index.ts:3:14 - error TS4023: Exported variable 'projectCreateCommand' has or is using name 'parsedType' from external module "/Users/jgoux/Documents/code/cleye-repro/node_modules/.pnpm/cleye@1.2.0/node_modules/cleye/dist/index" but cannot be named.

3 export const projectCreateCommand = command(
               ~~~~~~~~~~~~~~~~~~~~


Found 2 errors in the same file, starting at: index.ts:3
```