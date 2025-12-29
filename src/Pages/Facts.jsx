// Import Images used in the Facts Section
import cleanWaterImg from "../assets/clean-water.jpg";
import ecosystemImg from "../assets/ecosystem.jpg";
import educationImg from "../assets/education.png";
import waterScarcityImg from "../assets/water-scarcity.jpg";

function Facts() {
  return (
    // Main Container for the Facts Page
    <div className="page-container info-page">
      <h2>Facts about UN Goal 6</h2>

      {/*Intro Explaining the Purpose of Goal 6  */}
      <p className="muted" style={{ marginBottom: "1.5rem" }}>
        Goal 6 aims to ensure availability and sustainable management of water
        and sanitation for all.
      </p>

      <div className="info-section">
        <div className="info-text">
          <h3>Limited Access to Clean Water</h3>
          <p>
            Around 2 billion people worldwide still lack safely managed drinking
            water services.
          </p>
        </div>
        <div className="info-image">
          <img src={cleanWaterImg} alt="Access to Clean Water" />
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <h3>Growing Water Scarcity</h3>
          <p>
            About 40% of the world’s population is affected by water scarcity,
            and this figure is expected to rise.
          </p>
        </div>
        <div className="info-image">
          <img src={waterScarcityImg} alt="Limited Water" />
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <h3>Health, Education, and Equality</h3>
          <p>
            Access to clean water and sanitation reduces illness, improves
            education outcomes, and supports gender equality.
          </p>
        </div>
        <div className="info-image">
          <img src={educationImg} alt="Water is Needed for Education" />
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <h3>Protecting Ecosystems</h3>
          <p>
            Sustainable water use helps protect rivers, lakes, wetlands, and the
            ecosystems that depend on them.
          </p>
        </div>
        <div className="info-image" >
          <img src={ecosystemImg} alt="Water Ecosystem" />
        </div>
      </div>

      <p style={{ marginTop: "1.6rem" }}>
        By understanding our personal water use, we can contribute to a global
        effort towards cleaner, safer water for everyone.
      </p>
    </div>
  );
}

export default Facts;
