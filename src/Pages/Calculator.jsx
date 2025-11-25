import { useState } from "react";

function Calculator() {
  const [formData, setFormData] = useState({
    showersPerWeek: "",
    avgShowerMinutes: "",
    laundryLoadsPerWeek: "",
    diet: "balanced",
  });

  const [result, setResult] = useState(null);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit (for now: do calculation in frontend)
  const handleSubmit = (e) => {
    e.preventDefault();

    const showersPerWeekNum = Number(formData.showersPerWeek);
    const avgShowerMinutesNum = Number(formData.avgShowerMinutes);
    const laundryLoadsPerWeekNum = Number(formData.laundryLoadsPerWeek);

    const LITERS_PER_MIN_SHOWER = 10;
    const LITERS_PER_LAUNDRY = 50;

    const showersPerDay = showersPerWeekNum / 7;
    const showerLitres = showersPerDay * avgShowerMinutesNum * LITERS_PER_MIN_SHOWER;

    const laundryPerDay = laundryLoadsPerWeekNum / 7;
    const laundryLitres = laundryPerDay * LITERS_PER_LAUNDRY;

    const dietMultiplier = {
      "plant-based": 0.8,
      balanced: 1.0,
      "meat-heavy": 1.3,
    }[formData.diet];

    const total = Math.round((showerLitres + laundryLitres) * dietMultiplier);

    const advice = [];
    if (showerLitres > 80) {
      advice.push("Try shorter showers to reduce water use.");
    } else {
      advice.push("Your shower usage is fairly reasonable.");
    }

    if (formData.diet === "meat-heavy") {
      advice.push("Reducing meat intake slightly can lower your water footprint.");
    } else {
      advice.push("Your diet has a moderate water impact.");
    }

    setResult({
      totalLitresPerDay: total,
      breakdown: { showerLitres, laundryLitres, dietMultiplier },
      advice,
    });
  };

  return (
    <div className="page-container">
      <h2>Water Usage Calculator</h2>
      <p>Enter your weekly habits to estimate your daily water footprint.</p>

      <form onSubmit={handleSubmit}>
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
        <div style={{ marginTop: "2rem" }}>
          <h3>Your Estimated Daily Water Use</h3>
          <p>
            <strong>Total:</strong> {result.totalLitresPerDay} litres/day
          </p>
          <p>
            <strong>Breakdown:</strong><br />
            Showers: {Math.round(result.breakdown.showerLitres)} L/day<br />
            Laundry: {Math.round(result.breakdown.laundryLitres)} L/day<br />
            Diet multiplier: {result.breakdown.dietMultiplier}
          </p>
          <p><strong>Advice:</strong></p>
          <ul>
            {result.advice.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Calculator;
