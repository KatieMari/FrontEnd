import { useState } from "react";
import "./App.css";

function App() {
  // Form state
  const [formData, setFormData] = useState({
    showersPerWeek: "",
    avgShowerMinutes: "",
    laundryLoadsPerWeek: "",
    diet: "balanced",
  });

  // Result state
  const [result, setResult] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // For now, just calculate a simple total (we’ll connect backend later)
    const showersPerDay = formData.showersPerWeek / 7;
    const showerLitres = showersPerDay * formData.avgShowerMinutes * 10; // 10 L/min

    const laundryPerDay = formData.laundryLoadsPerWeek / 7;
    const laundryLitres = laundryPerDay * 50; // 50 L per load

    const dietMultiplier = {
      "plant-based": 0.8,
      balanced: 1.0,
      "meat-heavy": 1.3,
    }[formData.diet];

    const total = Math.round((showerLitres + laundryLitres) * dietMultiplier);

    setResult({
      totalLitresPerDay: total,
      breakdown: { showerLitres, laundryLitres, dietMultiplier },
      advice: [
        showerLitres > 50 ? "Reduce shower time to save water." : "Shower usage is fine.",
        formData.diet === "meat-heavy" ? "Try more plant-based meals." : "Diet is good.",
      ],
    });
  };

  return (
    <div className="App">
      <header>
        <h1>My Water Footprint</h1>
        <p>Estimate your daily water usage and learn how to reduce it.</p>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="water-form">
          <label>
            Showers per week:
            <input
              type="number"
              name="showersPerWeek"
              value={formData.showersPerWeek}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Average shower length (minutes):
            <input
              type="number"
              name="avgShowerMinutes"
              value={formData.avgShowerMinutes}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Laundry loads per week:
            <input
              type="number"
              name="laundryLoadsPerWeek"
              value={formData.laundryLoadsPerWeek}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Diet type:
            <select name="diet" value={formData.diet} onChange={handleChange}>
              <option value="plant-based">Plant-based</option>
              <option value="balanced">Balanced</option>
              <option value="meat-heavy">Meat-heavy</option>
            </select>
          </label>

          <button type="submit">Calculate</button>
        </form>

        {result && (
          <div className="results">
            <h2>Results</h2>
            <p>
              <strong>Total Daily Usage:</strong> {result.totalLitresPerDay} L
            </p>
            <p>
              <strong>Breakdown:</strong>
              <br />
              Showers: {Math.round(result.breakdown.showerLitres)} L/day
              <br />
              Laundry: {Math.round(result.breakdown.laundryLitres)} L/day
              <br />
              Diet multiplier: {result.breakdown.dietMultiplier}
            </p>
            <p>
              <strong>Advice:</strong>
            </p>
            <ul>
              {result.advice.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
