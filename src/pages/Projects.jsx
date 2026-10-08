import './Projects.css'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.jpg'
import project8 from '../assets/project8.jpg'
import project9 from '../assets/project9.jpg'

import SEO from '../components/SEO'

function Projects() {
  return (
    <section className="projects">

      <SEO
        title="Roofing Projects in Ghana | RCH Coastal Construction & Engineering"
        description="View completed roofing projects by RCH Coastal Construction & Engineering, including residential, commercial, installation, repair, and maintenance work."
        path="/projects"
      />

      <div className="projects-heading">
        <span>OUR PROJECTS</span>

        <h2>
          Roofing Projects Built
          <br />
          To Last.
        </h2>

        <p>
          Take a look at some of our completed roofing projects.
          Every project reflects our commitment to quality,
          durability, and professional workmanship.
        </p>
      </div>

      <div className="project-grid">

        <div className="project-card">
          <img src={project1} alt="Residential roofing project" />

          <div className="project-info">
            <span>RESIDENTIAL</span>
            <h3>Modern Residential Roof</h3>
            <p>Complete roof installation for a modern family home.</p>
          </div>
        </div>


        <div className="project-card">
          <img src={project2} alt="New roof installation project" />

          <div className="project-info">
            <span>ROOF INSTALLATION</span>
            <h3>New Roof Installation</h3>
            <p>A durable roofing system designed for long-term protection.</p>
          </div>
        </div>


        <div className="project-card">
          <img src={project3} alt="Roof repair project" />

          <div className="project-info">
            <span>ROOF REPAIR</span>
            <h3>Roof Restoration</h3>
            <p>Restoration work to improve protection and appearance.</p>
          </div>
        </div>


        <div className="project-card">
          <img src={project4} alt="Commercial roofing project" />

          <div className="project-info">
            <span>COMMERCIAL</span>
            <h3>Commercial Roofing</h3>
            <p>Professional roofing solutions for commercial buildings.</p>
          </div>
        </div>


        <div className="project-card">
          <img src={project5} alt="Roof maintenance project" />

          <div className="project-info">
            <span>MAINTENANCE</span>
            <h3>Roof Maintenance</h3>
            <p>Maintenance work helping keep the roof strong and reliable.</p>
          </div>
        </div>


        <div className="project-card">
          <img src={project6} alt="Completed residential roofing project" />

          <div className="project-info">
            <span>RESIDENTIAL</span>
            <h3>Complete Roofing Solution</h3>
            <p>A finished roofing project focused on quality and detail.</p>
          </div>
        </div>

        <div className="project-card">
          <img src={project7} alt="Heavy-Duty Commercial Steel Trusses" />

          <div className="project-info">
            <span>Commercial Steel Trusses</span>
            <h3>Large-Scale Structural Steel Trusses</h3>
            <p>Industrial-grade structural steel truss installation for large auditoriums and commercial structures.</p>
          </div>
        </div>

        <div className="project-card">
          <img src={project8} alt="Residential Stone-Coated Tile Roof Installation" />

          <div className="project-info">
            <span>Precision Residential Roof Installation</span>
            <h3>Premium Stone-Coated Tile Roofing</h3>
            <p>Skilled craftsman completing a durable, weather-resistant stone-coated tile roof.</p>
          </div>
        </div>

         <div className="project-card">
          <img src={project9} alt="Roofing Material Supply & On-Site Logistics" />

          <div className="project-info">
            <span>Quality Long-Span Sheet Installation</span>
            <h3>On-Site Roofing Material Supply & Delivery</h3>
            <p>Direct supply and professional offloading of premium long-span roofing sheets for a multi-story educational building.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Projects