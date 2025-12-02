import wateraidLogo from "../assets/wateraidLogo.png";
import charitywaterLogo from "../assets/charitywaterLogo.webp";
import unicefLogo from "../assets/unicefLogo.png";

function Charities() {
  const charities = [
    {
      name: "WaterAid",
      country: "Global (focus on Africa & Asia)",
      img: wateraidLogo,
      description:
        "WaterAid works with local communities to provide clean drinking water...",
      website: "https://www.wateraid.org",
      learnMore: "https://www.wateraid.org/uk/donate/monthly",
    },
    {
      name: "charity: water",
      country: "Global",
      img: charitywaterLogo,
      description:
        "charity: water funds clean water projects in developing countries...",
      website: "https://www.charitywater.org",
      learnMore: "https://www.charitywater.org/uk/donate   ",
    },
    {
      name: "UNICEF:  WASH Programme",
      country: "Global",
      img: unicefLogo,
      description:
        "UNICEF’s WASH programme helps schools and communities access safe water...",
      website: "https://www.unicef.org/wash",
      learnMore: "https://www.unicef.org/wash/water",
    },
  ];

  return (
    <div className="page-container">
      <h2>Charities Supporting Clean Water (SDG 6)</h2>
      <p style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto 2rem" }}>
        These organisations work towards Sustainable Development Goal 6 by improving access
        to clean water, sanitation and hygiene around the world. You can explore their work
        and donate if you would like to support them.
      </p>

      <div className="charities-grid">
        {charities.map((charity) => (
          <article className="charity-card" key={charity.name}>
            <div className="charity-logo-wrap">
              <div className="charity-logo-box">
                <img
                  src={charity.img}
                  alt={`${charity.name} logo`}
                  className="charity-logo"
                />
              </div>
            </div>

            <h3>{charity.name}</h3>
            <p className="charity-country">{charity.country}</p>
            <p className="charity-description">{charity.description}</p>
            <div className="charity-links">
              <a href={charity.website} target="_blank" rel="noreferrer">
                Visit website
              </a>
              <a href={charity.learnMore} target="_blank" rel="noreferrer">
                Learn more / donate
              </a>
            </div>
          </article>
        ))}
      </div>

      <p style={{ marginTop: "2rem", fontSize: "0.95rem", textAlign: "center" }}>
        Always check that a charity aligns with your values and is transparent about how
        donations are used.
      </p>
    </div>
  );
}

export default Charities;