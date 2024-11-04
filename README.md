## Comprobar que tengo pnpm
```
pnpm --version
```
## Instalar dependencias
```
pnpm instal
```
## Arrancar
```
pnpm run dev
```
## Instalar tailwind
```
pnpm install -D tailwindcss postcss autoprefixer
``` 
## Iniciar tailwind
```
npx tailwindcss init -p
```
## Terminar de configurar (añadir esto en tailwind.config.js)
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

## Añadir en el style.css 
@tailwind base;
@tailwind components;
@tailwind utilities;