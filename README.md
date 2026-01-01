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

## Folder Structure

This list contains the main folders for the project.

- src -> contains everything 
    - pages -> contains the **Calculator**, **Charities**, **Facts**, **Home**, and **WaysToHelp** pages.

- assets -> contains images and media

- App.css -> contains all the global styling

- App.jsx -> contains the routing and navigation

- main.jsx -> contains the React entry point

## API Intergration

The Frontend sends user input via a POST request.
```ts
POST /api/calculate


