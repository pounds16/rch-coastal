import './About.css'

import WorkmanshipImage from '../assets/workman.jpeg'
import DurableroofingImage from '../assets/durable1.jpg'
import ReliableserviceImage from '../assets/workman3.jpeg'
import commitmentImage from '../assets/commitment.jpg'

function About() {
  return (
    <section className="about">

      <div className="about-content">

        <div className="about-text">

          <span className="about-label">
            WHO WE ARE
          </span>

          <h2>
            Building Strong Roofs.
            <br />
            Protecting What Matters.
          </h2>

          <p>
            At RIGID COASTAL, we provide dependable roofing solutions
            designed to protect homes and buildings for years to come.
            Our focus is on quality workmanship, durable materials,
            and reliable service.
          </p>

          <p>
            From installation and repairs to regular maintenance,
            our team is committed to delivering roofing solutions
            you can trust.
          </p>



          <div className="about-features">

            <div className="feature-column">


              <div className="feature-card">

                <img
                  src={WorkmanshipImage}
                  alt="Quality roofing workmanship"
                />

                <div className="feature-content">

                  <h3>
                    Quality Workmanship
                  </h3>

                  <p>
                    Skilled craftsmanship and careful attention
                    to detail on every roofing project.
                  </p>

                </div>

              </div>

              <div className="feature-card">

                <img
                  src={DurableroofingImage}
                  alt="Durable roofing materials"
                />

                <div className="feature-content">

                  <h3>
                    Durable Materials
                  </h3>

                  <p>
                    We use reliable roofing materials built to
                    withstand demanding weather conditions.
                  </p>

                </div>

              </div>

            </div>


            <div className="feature-column">

              <div className="feature-card">

                <img
                  src={ReliableserviceImage}
                  alt="Reliable roofing service"
                />

                <div className="feature-content">

                  <h3>
                    Reliable Service
                  </h3>

                  <p>
                    From consultation to completion, we focus
                    on dependable service and customer satisfaction.
                  </p>

                </div>

              </div>


              <div className="feature-card">

                <img
                  src={commitmentImage}
                  alt="ROOFMASTER roofing team"
                />

                <div className="feature-content">

                  <h3>
                    Our Commitment
                  </h3>

                  <p>
                    We are committed to professionalism, attention
                    to detail, and delivering roofing solutions our
                    customers can depend on.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About