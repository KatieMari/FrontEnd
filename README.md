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
- **Chart.js / react-chartjs-2** (data visualisation)
- **CSS** (custom styling and layout)

---

## 📁 Project Structure

```text
src/
├── Pages/
│   ├── Home.jsx          # Landing page
│   ├── Calculator.jsx    # Water usage calculator
│   ├── Facts.jsx         # UN Goal 6 facts
│   ├── WaysToHelp.jsx    # Water-saving tips
│   └── Charities.jsx    # Charity information
│
├── assets/               # Images and media
├── App.jsx               # Routing and navigation
├── main.jsx              # React entry point
├── App.css               # Global styles
└── index.html            # HTML template
