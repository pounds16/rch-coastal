import './Home.css'

import constructionVideo from '../assets/construction.mp4'

import { Link } from 'react-router-dom'

import SEO from './SEO'

function Home() {

  return (
    <section className="home">

      <SEO
        title="Roofing Company in Ghana | RCH Coastal Construction & Engineering"
        description="RCH Coastal Construction & Engineering provides professional roofing installation, roof repair, maintenance, and construction services in Ghana."
        path="/"
      />

      {/* Background video */}
      <video
        className="home-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={constructionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="home-overlay"></div>

      {/* Home content */}
      <div className="home-content">

        <h1 className="home-head">
          RCH COASTAL CONSTRUCTION
          <br />
          &
          <br />
          ENGINEERING
        </h1>

        <p className="home-p">
          Professional roofing and construction solutions designed to protect homes and buildings across Ghana.
        </p>

        <Link
          to="/contact#quote-form"
          className="home-a"
        >
          Get a Free Roofing Quote
        </Link>

      </div>

    </section>
  )
}

export default Home