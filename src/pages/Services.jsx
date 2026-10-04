import './Services.css'

function Services() {
  return (
    <section id="services" className="services">
    <h2>Our Roofing Services</h2>
      <p>
       From new roof installations to repairs and
       ongoing maintenance, we provide dependable
       roofing solutions designed to protect your
       home and keep your roof in excellent condition.
      </p>

    <div className="service-container">

        <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Roof Installation</h3>
            <p>
              Build with confidence from the top down.
              We install durable roofing systems with careful
              attention to quality, structure, and finishing.
            </p>
        </div>

        <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Roof Repair</h3>
            <p>
                Leaks, damaged sheets, or worn-out roofing can
                become bigger problems. Our repair service focuses
                on identifying the issue and restoring your roof's
                protection.
            </p>
        </div>

        <div className="service-card">
            <div className="service-icon">🛠️</div>
            <h3>Roof Maintenance</h3>
            <p>
                Regular maintenance helps keep your roof strong and
                in good condition. We inspect, maintain, and address
                potential problems before they become major repairs.
            </p>
        </div>
    </div>
</section>
  )
}

export default Services