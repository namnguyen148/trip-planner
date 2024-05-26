export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Your Next Journey, Optimized</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Viet Trip AI</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            Build, personalize, and optimize your itineraries with our free AI
            trip planner. Designed for vacations, workations, and everyday
            adventures.
          </p>
        </div>
        <button className="btn btn-primary">New Trip</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Travel02.svg" alt="Hero Section" />
      </div>
    </section>
  );
}
