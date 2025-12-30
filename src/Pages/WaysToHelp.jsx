// Import Images used to Visually Support each Water Saving Tip
import applicanceImg from "../assets/appliances.jpg";
import foodWasteImg from "../assets/foodWaste.jpg";
import leakImg from "../assets/leaksFix.jpg";
import showerShortImg from "../assets/showershort.png";
import tapImg from "../assets/tapOff.jpg";

function WaysToHelp() {
  return (
    <div className="page-container info-page">
      <h2>Ways You Can Help</h2>

      <p className="muted" style={{ marginBottom: "1.5rem" }}>
        Small changes in daily habits can make a big difference to global water sustainability.
      </p>

      <div className="info-section">
        <div className="info-text">
          <h3>Reduce Shower Water Useage</h3>
          <p>
            Take shorter showers or use a low-flow showerhead to significantly reduce water consumption.
          </p>
        </div>
        <div className="info-image">
          <img src={showerShortImg} alt="Saving water in the shower" />
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <h3>Turn off Taps when Not Needed</h3>
          <p>
            Turning off the tap while brushing your teeth or washing dishes saves litres of water every day.
          </p>
        </div>
        <div className="info-image">
          <img src={tapImg} alt="Turn Taps Off" />
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <h3>Use Appliances Efficiently</h3>
          <p>
            Only run full loads in washing machines or dishwashers to avoid unnecessary water use.
          </p>
        </div>
        <div className="info-image">
          <img src={applicanceImg} alt="Only use Applicances when Full" />
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <h3>Fix Leaks Quickly</h3>
          <p>
            Repair leaking taps, toilets, or pipes as soon as possible to prevent wasted water.
          </p>
        </div>
        <div className="info-image">
          <img src={leakImg} alt="Fix Leaks Quickly" />
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <h3>Make Sustainable Food Choices</h3>
          <p>
            Eating more plant-based meals and avoiding food waste can greatly reduce your water footprint.
          </p>
        </div>
        <div className="info-image">
          <img src={foodWasteImg} alt="Reduce Food Waste" />
        </div>
      </div>

      <p style={{ marginTop: "1.6rem" }}>
        Even simple actions, when repeated and shared, can help move us closer to achieving Sustainable Development Goal 6.
      </p>
    </div>
  );
}

export default WaysToHelp;
