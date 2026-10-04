import './Home.css'

import constructionVideo from '../assets/construction.mp4'

import { Link } from 'react-router-dom'

function Home() {

  return (
    <section className="home">

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
          Building strong, reliable and lasting solutions for your project.
        </p>

        <Link
          to="/contact#quote-form"
          className="home-a"
        >
          Get a Free Quote
        </Link>

      </div>

    </section>
  )
}

export default Home