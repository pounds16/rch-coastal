
import './ProjectGallery.css'
import SEO from '../components/SEO'

const projectImages = Object.entries(
  import.meta.glob('../assets/Gallery/*.{jpg,jpeg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
  .map(([path, src]) => ({ path, src }))
  .sort((a, b) => a.path.localeCompare(b.path))

const projectVideos = Object.entries(
  import.meta.glob('../assets/Gallery/*.{mp4,webm,ogg}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
  .map(([path, src]) => ({ path, src }))
  .sort((a, b) => a.path.localeCompare(b.path))

function getProjectTitle(path) {
  const filename = path.split('/').pop().replace(/\.[^.]+$/, '')

  return filename
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function ProjectGallery() {
  const totalProjects = projectImages.length + projectVideos.length

  return (
    <>
      <SEO
        title="Project Gallery | RCH Coastal Construction & Engineering"
        description="Explore roofing, building and construction projects completed by RCH Coastal Construction & Engineering through our project photos and videos."
      />

      <main className="project-gallery">
        {/* HERO SECTION */}
        <section className="gallery-hero">
          <div className="gallery-hero-content">
            <span className="gallery-eyebrow">
              OUR PORTFOLIO
            </span>

            <h1>Project Gallery</h1>

            <div className="gallery-title-line" />

            <p>
              A closer look at our construction and roofing
              projects, built with quality, precision and
              lasting craftsmanship.
            </p>

            <a href="#gallery-work" className="gallery-hero-button">
              Explore Our Work
            </a>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section
          className="gallery-section"
          id="gallery-work"
        >
          <div className="gallery-container">
            <div className="gallery-section-heading">
              <span className="gallery-eyebrow">
                BUILT WITH EXCELLENCE
              </span>

              <h2>Our Work in Pictures & Videos</h2>

              <p>
                Explore our completed projects and see the
                workmanship, attention to detail and dedication
                behind every job.
              </p>

              <span className="gallery-project-count">
                {totalProjects}{' '}
                {totalProjects === 1 ? 'item' : 'items'} in our gallery
              </span>
            </div>

            {/* PHOTOS */}
            {projectImages.length > 0 && (
              <section className="gallery-category">
                <div className="gallery-category-heading">
                  <h3>Project Photos</h3>
                  <p>
                    A selection of our roofing and construction work.
                  </p>
                </div>

                <div className="project-gallery-grid">
                  {projectImages.map(({ path, src }, index) => (
                    <figure
                      className="project-gallery-item"
                      key={path}
                    >
                      <img
                        src={src}
                        alt={`${getProjectTitle(path)} - RCH Coastal construction project`}
                        loading="lazy"
                        decoding="async"
                      />

                      <figcaption className="gallery-image-overlay">
                        <span className="gallery-item-number">
                          PROJECT {String(index + 1).padStart(2, '0')}
                        </span>

                        <h4>{getProjectTitle(path)}</h4>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* VIDEOS */}
            {projectVideos.length > 0 && (
              <section className="gallery-category gallery-video-category">
                <div className="gallery-category-heading">
                  <h3>Project Videos</h3>
                  <p>
                    Watch our construction and roofing projects
                    in action.
                  </p>
                </div>

                <div className="project-gallery-grid gallery-video-grid">
                  {projectVideos.map(({ path, src }, index) => (
                    <figure
                      className="project-gallery-item gallery-video-item"
                      key={path}
                    >
                      <video
                        controls
                        preload="metadata"
                        playsInline
                        aria-label={getProjectTitle(path)}
                      >
                        <source src={src} />
                        Your browser does not support HTML video.
                      </video>

                      <figcaption className="gallery-video-caption">
                        <span className="gallery-item-number">
                          VIDEO {String(index + 1).padStart(2, '0')}
                        </span>

                        <h4>{getProjectTitle(path)}</h4>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            {/* EMPTY STATE */}
            {totalProjects === 0 && (
              <div className="gallery-empty">
                <h3>Your project gallery is ready!</h3>

                <p>
                  Add your project photos and videos to
                  {' '}src/assets/Gallery/ to display them here.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="gallery-cta">
          <div className="gallery-cta-content">
            <span className="gallery-eyebrow">
              START YOUR NEXT PROJECT
            </span>

            <h2>Ready to Build with Us?</h2>

            <p>
              Let RCH Coastal Construction & Engineering help
              bring your next roofing or construction project
              to life.
            </p>

            <a href="/contact#quote-form" className="gallery-cta-button">
              Request a Free Quote
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default ProjectGallery
