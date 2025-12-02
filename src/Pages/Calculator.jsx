import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Calculator() {
  const [formData, setFormData] = useState({
    showersPerWeek: "",
    avgShowerMinutes: "",
    laundryLoadsPerWeek: "",
    diet: "balanced",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://back-end-eight-drab.vercel.app/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong talking to the server.");
    }
  };

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