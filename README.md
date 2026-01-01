# My Water Footprint – Frontend

This is the **frontend** of the **My Water Footprint** project.
The application supports **UN Sustainable Development Goal 6 (Clean Water and Sanitation)** by helping users understand their personal water usage and learn how to reduce it.

The frontend is built using [React](https://react.dev/) with [Vite](https://vite.dev/) and communicates with an Express backend API.

---

## Project Purpose

The frontend provides:
- A water usage **calculator** based on personal habits
- **Educational content** about global water issues
- Practical **ways users can reduce water consumption**
- Links to **charities supporting clean water access**

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

    - If the variable is not provided, the application will continue to work using the default URL.L


3. Start the app

    ```bash
    npm run dev
    ```





---

## Folder Structure

This list contains the main folders for the project.

- Src -> contains everything 
    - pages -> contains the **Calculator**, **Charities**, **Facts**, **Home**, and **WaysToHelp** pages.

- Assets -> contains images and media

- App.css -> contains all the global styling

- App.jsx -> contains the routing and navigation

- Main.jsx -> contains the React entry point

---

## API Intergration

The Frontend sends user input via a POST request.
```ts
POST /api/calculate
```

- The Backend responds with:
    - Total daily water usage
    - A breakdown by activity
    - Personalised advice
- The Backend URL is configured using an environment variable

