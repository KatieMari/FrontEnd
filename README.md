# My Water Footprint – FrontEnd

This is the **FrontEnd** of the **My Water Footprint** project.

The application supports **UN Sustainable Development Goal 6 (Clean Water and Sanitation)** by helping users understand their personal water usage and learn how to reduce it.

The frontend is built using [React](https://react.dev/) with [Vite](https://vite.dev/) and communicates with an Express backend API.

---

## Project Purpose

The **FrontEnd** provides:
- A water usage **calculator** based on personal habits
- **Educational content** about global water issues
- Practical ways users can **reduce water consumption**
- Links to charities supporting **clean water access**

The goal is to combine interactivity, data visualisation, and education into a user-friendly web experience.

---

## Tech Stack

- **React** (component-based UI)
- **Vite** (fast development and build tool)
- **React Router** (client-side routing)
- **Chart.js / React-Chartjs-2** (data visualisation)
- **CSS** (custom styling and layout)

---

## Getting Started

1. Install Dependancies

    ```bash
   npm install
   ```

2. (Optional) Configure Environment Variables

    - By default the Frontend connects to the Backend at:
        - http://localhost:3000
    
    - This is defined as a fallback in the code, so no configuration is required for local development.
    - If you need to change the Backend URL (for exmaple, when deploying), you can create a `.env` file in the project root:

        ```env
        VITE_BACKEND_URL=http://localhost:3000

    - If the variable is not provided, the application will continue to work using the default URL

3. Start the development server

    ```bash
    npm run dev
    ```

4. Open the app

    - After the server starts, Vite will ouput a local development URL, typically:
        - http://localhost:5173

    - Open this link in your browser to view the application

---

## Folder Structure

This list contains the main folders for the project.

- Src/ -> contains all the main pages for the project 

    - Pages/ -> contains the main pages of the website
        - **Calculator.jsx** -> Water FootPrint calculator and results display
        - **Charities.jsx** -> Information and links to clean-water charitie
        - **Facts.jsx** -> Key facts about UN Sustainability Development Goal 6
        - **Home.jsx** -> First page introducing the project and its purpose
        - **WaysToHelp.jsx** -> Pratical actions users can take to reduce water usage

- Assets/ -> contains images and media used throughout the project

- App.css/ -> contains all the global styling shared across all pages

- App.jsx/ -> contains the routing and navigation
    - Sets up client-side routing using React Router
    - Renders navigation and page content

- Main.jsx/ -> contains the React entry point
    - Mounts the React Application to the DOM

---

## API Intergration and Data Handling

The Frontend sends user input via a POST request.
```ts
POST /api/calculate
```

- The Backend responds with:
    - Total daily water usage
    - A breakdown by activity
    - Personalised advice

- The Backend URL is configured using an environment variable

- All BackEnd communication uses Fetch API
- API endpoints should clearly named and RESTful
- BackEnd URLs should not be hardcoded where configuration is required
- API responces should be handled with basic errot checking

---

## Contribution Rules

### Components and Coding Style

All React components should follow the structure below:
```ts
export default function Calculator() {
  /**
   * Component logic and JSX
   */
}
```
- Use `export default` for all pages and components exports
- Use **function components**, no class components
- Use **PascalCase** for component and file names
- The file name should match the component name
- Use **camelCase** for variables, functions, and props

---

## Writing New Code

- New pages must be added to the `pages/` directory
- Each page should represent a single route in the applcation
- Images and media should be placed in the `assets/` directory
- Global styles should be added to `App.css`

---

## Routing Conventions

- Client-side routing is handled using **React Router**
- All routes are defined in `App.jsx`
- Navigation links should use the `Link` component from `react-router-dom`

---

## Dependencies

The FrontEnd relies on the following main libraries:

- [React](https://react.dev/) - Component-based UI development
- [Vite](https://vite.dev/) -  Development server and build tool
- [React Router](https://reactrouter.com/) - Client-side routing
- [Chart.js](https://www.chartjs.org/)/[React-Chartjs-2](https://react-chartjs-2.js.org/) - Data visualisation
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Layout and styling

---

## Useful Links

- [React Documentation](https://react.dev/learn)
- [Vite Documentation](https://v3.vitejs.dev/guide/)
- [React Router Documentation](https://v5.reactrouter.com/web/guides/quick-start)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/getting-started/)
- [RESTful API](https://aws.amazon.com/what-is/restful-api/)
