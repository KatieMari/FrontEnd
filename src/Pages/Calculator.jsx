// React Hook for Managing Component State
import { useState } from "react";
// Chart.js Bar Chart Wrapper for React
import { Bar } from "react-chartjs-2";
// Core Chart.js Modules that must be Registered Manually
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart Components sa Chart.js knows what Features are being used
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Backend URL Pulled from Environment Variables
// Falls back to localhost for Local Development
const backEndURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

// Stores all Form Input Values -  These are Controlled Inputs, meaning React Controls their State
function Calculator() {
  const [formData, setFormData] = useState({
    showersPerWeek: "",
    avgShowerMinutes: "",
    laundryLoadsPerWeek: "",
    diet: "balanced",
  });

  // Stores the Calculation Result Returned from the Backend
  const [result, setResult] = useState(null);
  // Stores any Error Messages if the Request Fails
  const [error, setError] = useState("");

  // Handles Changes for all Form Inputs. - Uses the Input Name Attributes to Update the Correct Value
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update Only the Changed Field While Keeping the Others the Same
    setFormData({ ...formData, [name]: value });
  };

  // Handles the Submission - Sends User Data to the Backend and Retrieves Calculated Results
  const handleSubmit = async (e) => {
    // Prevents Page Refresh
    e.preventDefault();
    // Clear any Previous Error
    setError("");

    // Send POST Request to Backend API
    try {
      const res = await fetch(`${backEndURL}/api/calculate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Handles Unsuccessful HTTP Responces
      if (!res.ok) {
        throw new Error("Server error");
      }

      // Parse JSON Responce from Backend
      const data = await res.json();
      // Store Result for Rendering
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong talking to the server.");
    }
  };

  // Chart Data for the Breakdown Bar Chart - Only Created Once Results are Available
  const breakdownChartData = result ? {
    labels: ["Showers", "Laundry"],
    datasets: [{
      label: "Litres per day",
      data: [
        Math.round(result.breakdown.showerLitres),
        Math.round(result.breakdown.laundryLitres),
      ]
    },
    ],
  }
    : null;

  return (
    // Main Wrapper for the Layout and Spacing
    <div className="page-container">
      <h2>Water Usage Calculator</h2>
      <p>Enter your weekly habits to estimate your daily water footprint.</p>

      <div className="calculator-container">
        <form className="calculator-form" onSubmit={handleSubmit}>
          <h3>Your Weekly Water Habits</h3>

          <div className="calculator-field">
            <label>Showers per week:</label>
            <input
              type="number"
              name="showersPerWeek"
              value={formData.showersPerWeek}
              onChange={handleChange}
              required
            />
          </div>

          <div className="calculator-field">
            <label>Average shower length (minutes):</label>
            <input
              type="number"
              name="avgShowerMinutes"
              value={formData.avgShowerMinutes}
              onChange={handleChange}
              required
            />
          </div>

          <div className="calculator-field">
            <label>Laundry loads per week:</label>
            <input
              type="number"
              name="laundryLoadsPerWeek"
              value={formData.laundryLoadsPerWeek}
              onChange={handleChange}
              required
            />
          </div>

          <div className="calculator-field">
            <label>Diet type:</label>
            <select
              name="diet"
              value={formData.diet}
              onChange={handleChange}
            >
              <option value="plant-based">Plant-based</option>
              <option value="balanced">Balanced</option>
              <option value="meat-heavy">Meat-heavy</option>
            </select>
          </div>

          <button type="submit">Calculate</button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
        )}

        {result && (
          <div className="calculator-results">
            <h3>Your Estimated Daily Water Use</h3>
            <p><strong>Total:</strong> {result.totalLitresPerDay} litres/day</p>

            <h4>Breakdown</h4>
            <ul>
              <li>Showers: {Math.round(result.breakdown.showerLitres)} L/day</li>
              <li>Laundry: {Math.round(result.breakdown.laundryLitres)} L/day</li>
              <li>Diet Multiplier: {result.breakdown.dietMultiplier}</li>
            </ul>

            {breakdownChartData && (
              <div className="chart-card">
                <h4>Showers vs Laundry</h4>
                <Bar data={breakdownChartData} />
              </div>
            )}

            <h4>Personalised Advice</h4>
            <ul>
              {result.advice.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Calculator;