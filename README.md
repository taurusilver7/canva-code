# Canva Code

> Explore the state-of-art Custom Code Screenshot Web Application built with React, Vite & Tailwindcss.

## Highlights

-  Capture a DOM Node screenshot using [html-to-image](https://www.npmjs.com/package/html-to-image)
-  Code Syntax Highlighting using [highlight.js](https://www.npmjs.com/package/re-resizable). It has a primary auto language detection support.
-  Auto programming-language detection using [flourite](https://www.npmjs.com/package/flourite)

-  Crop & resize the code snippet with [re-resizable](https://www.npmjs.com/package/re-resizable)
-  Manage the global state management with [Zustand](https://www.npmjs.com/package/zustand)

## Available Script

````bash
npm create vite@latest <name> -- --template react
# and
npm run dev (to run local development server)
``

```bash
npm i -D tailwindcss autoprefixer postcss
# and
npx tailwindcss init -p
# and (after Initial set up, add shadcn-ui)
npx shadcn-ui@latest init
# Follow the instructions to setup a base configuration.

````

## Available Plugins

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Build

Add paths to the template in tailwind configuration. Using a `meta` tag, set the application color scheme to dark.

Follow the [guide](https://ui.shadcn.com/docs/installation/vite) & set up a configuration file for shadcn-ui.

Resolve any [path errors](https://ui.shadcn.com/docs/installation/vite) in `vite.config.js`.

Follow the guide and add [shadcn-ui] to the dependencies. Add other dependencies based on the project requirements. Most of them are based on the image conversions, screenshot capture.

## Deploy
