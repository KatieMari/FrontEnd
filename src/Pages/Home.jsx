function Home() {
  return (
    <div className="page-container home-page">
      <div className="hero">
        <h1>My Water Footprint</h1>

        <p className="hero-subtitle">
          Explore your personal water use and support UN Goal 6: Clean Water and Sanitation.
        </p>

      </div>

      <section style={{ marginTop: "2rem" }}>
        <h2>About This Project</h2>
        <p> This website was created as part of the Full Stack Development for Sustainability module.
          It uses a Vite React Frontend and an Express Backend to help people understand their water footprint and
          learn simple ways to reduce it. </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>How to Use the Site</h2>

        <ul>
          <li><strong>Calculator:</strong> Estimate your daily water usage from showers, laundry, and diet.</li>
          <li><strong>Facts:</strong> Learn about global water issues and SDG 6.</li>
          <li><strong>Ways to Help:</strong> Discover everyday actions to use water more sustainably.</li>
          <li><strong>Charities:</strong> Find organisations working to provide clean water worldwide.</li>
        </ul>

      </section>
    </div>
  );
}

export default Home;