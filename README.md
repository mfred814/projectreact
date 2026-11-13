# My React Website

A responsive landing page built with React, Vite, React-Bootstrap, and Bootstrap.

## Get started

### 1. Install Node.js and VS Code

Install the current LTS version of [Node.js](https://nodejs.org/). Node.js includes `npm`, which installs project packages and runs the development server. Install [Visual Studio Code](https://code.visualstudio.com/) to edit the project files.

After installation, open a terminal and check that both commands work:

```bash
node --version
npm --version
```

### 2. Create a React project

This project uses Vite, a lightweight tool for running and building React websites. To create a fresh project with the same setup:

```bash
npm create vite@latest my-react-project -- --template react
cd my-react-project
npm install
```

If you already have this project open, skip this step.

### 3. Install React-Bootstrap and Bootstrap

From the project folder, run:

```bash
npm install react-bootstrap bootstrap
```

### 4. Import Bootstrap CSS

In this project, Bootstrap's CSS is imported once in `src/main.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

Keep this import before your app's own CSS so your styles can customize Bootstrap.

### 5. Run the website

```bash
npm start
```

Vite prints a local address in the terminal (usually `http://localhost:5173`). Open it in your browser. You can also use `npm run build` to create a production build.

## Where the code lives

- `src/App.jsx` contains the page and its small reusable card illustration component.
- `src/App.css` contains the landing page colors, layout, responsive rules, and hover effects.
- `src/index.css` contains a few global page defaults.
- `src/main.jsx` starts React and imports Bootstrap's CSS.
- `index.html` contains the browser page title and the root element where React is displayed.

This starter uses Vite, so its entry files are named `App.jsx` and `main.jsx` rather than Create React App's `App.js`, `index.js`, and `reportWebVitals.js`. JSX is JavaScript with markup and works the same in `.jsx` files. Vite does not need a `reportWebVitals.js` file.

## The React-Bootstrap components

- `Navbar` and `Nav` make the top navigation. `Navbar.Toggle` and `Navbar.Collapse` create the small-screen menu.
- `Container` keeps content centered with comfortable side spacing.
- `Row` and `Col` arrange the cards in a grid that changes at smaller screen sizes.
- `Card` groups each illustration, title, description, and link.
- `Button` gives the main calls to action consistent styling.

The cards are described by an array in `App.jsx`. React's `map` function creates one card for each item, so shared layout stays in one place while each card can have different text and illustration.

## Components and fragments

A React component is a reusable function that returns JSX. `App` composes the page from Bootstrap components and a `CardIllustration` component; React renders these pieces together as the website.

The fragment syntax `<>...</>` groups multiple JSX elements without adding an extra HTML element to the page. It is useful when a component needs to return several sibling elements but an extra wrapper would be unnecessary.
