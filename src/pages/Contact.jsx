import './Contact.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'

import SEO from '../components/SEO'

function Contact() {

    const location = useLocation()

    const [submitted, setSubmitted] = useState(false)

    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
   })

  useEffect(() => {

  if (location.hash === '#quote-form') {

    setTimeout(() => {

      const form = document.getElementById('quote-form')

      if (form) {

        form.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })

      }

    }, 100)

  }

}, [location.hash])

  const handleChange = (e) => {
  const { name, value } = e.target

  setFormData({
    ...formData,
    [name]: value
  })
}

  const handleSubmit = (e) => {

  e.preventDefault()

  emailjs.send(
    'service_y82x4eq',
    'template_rl4q4np',
    formData,
    'bdAg6Z6-hEMhceSH3'
  )

    .then(() => {

      // Clear the form
      e.target.reset()

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      })

      // Show success message
      setSubmitted(true)

      alert(
        'Thank you! Your roofing quote request has been received. RCH COASTAL will contact you shortly.'
      )

      // Hide success state after 6 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 6000)

    })

    .catch((error) => {

      console.error('EmailJS Error:', error)

      alert(
        'Sorry, your request could not be sent. Please check your internet connection and try again.'
      )

    })
}

  return (

    <section className="contact" >

      <SEO
        title="Contact RCH Coastal | Roofing Company in Ghana"
        description="Contact RCH Coastal Construction & Engineering for roofing installation, repair, maintenance, restoration, and free roofing quotes in Ghana."
        path="/contact"
      />

      <div className="contact-heading">
        <span>GET IN TOUCH</span>

        <h1>
          Let's Talk About
          <br />
          Your Roofing Project.
        </h1>

        <p>
          Whether you need a new roof, repairs, restoration,
          or regular maintenance, we're ready to help.
          Request a free roofing quote today.
        </p>
      </div>


      <div className="contact-container">


        <div className="contact-info">

          <h2>Contact RCH COASTAL</h2>

          <p>
            Have questions about your roofing project?
            Get in touch with our team and let's discuss
            how we can help protect your property.
          </p>


          <div className="contact-item">

              <div className="contact-icon">📞</div>

              <div>

                <h3>Phone</h3>

                <a
                  href="tel:0241951520"
                  className="phone-link"
                >
                  0241951520
                </a>

                <a
                  href="tel:0200192827"
                  className="phone-link"
                >
                  0200192827
                </a>

                <a
                  href="tel:0342297024"
                  className="phone-link"
                >
                  0342297024
                </a>

              </div>

          </div>


          <div className="contact-item">
            <div className="contact-icon">✉️</div>

            <div>
              <h3 className='email'>Email</h3>
              <a
                  href="mailto:rigidcoastalhubcompanygh@gmail.com"
                  className="email-link"
                >
                  rigidcoastalhubcompanygh@gmail.com
              </a>
            </div>
          </div>


          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <div>
              <h3>Location</h3>
              <p>TEMA TDC</p>
              <p>KOFORIDUA PENSEC JUNCTION OFF NYAMEKROM ROAD</p>
            </div>
          </div>


          <div className="contact-note">
            <strong>Need a roofing quote?</strong>

            <p>
              Tell us about your project using the form
              and we'll get back to you.
            </p>
          </div>

        </div>



        <div className="contact-form">

          <h2>Request a Free Quote</h2>

          <form id="quote-form" onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-group"> 
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    title="Enter your Full Name"
                    onInvalid={(e) => e.target.setCustomValidity('This field is required')}
                    onInput={(e) => e.target.setCustomValidity('')}
                />
              </div>


              <div className="form-group">
               
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                required
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => {
                    let value = e.target.value

                    value = value.replace(/(?!^\+)\D/g, '')

                    if (value.startsWith('+')) {
                    value = value.slice(0, 13)
                    } else {
                    value = value.replace(/\D/g, '').slice(0, 10)
                    }

                    setFormData({
                    ...formData,
                    phone: value
                    })
                }}
                pattern="(\+233[0-9]{9}|0[0-9]{9})"
                title="Enter a valid phone number, e.g. 024 or +233"
                />
                
              </div>

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                title="Enter your Email Address"
                onInvalid={(e) => e.target.setCustomValidity('This field is required')}
                onInput={(e) => e.target.setCustomValidity('')}
              />

            </div>


            <div className="form-group">

              <label htmlFor="service">
                Service Needed
              </label>

              <select
                id="service"
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                onInvalid={(e) => e.target.setCustomValidity('This field is required')}
                onInput={(e) => e.target.setCustomValidity('')}
              >

                <option value="">
                  Select a service
                </option>

                <option value="installation">
                  Roof Installation
                </option>

                <option value="repair">
                  Roof Repair
                </option>

                <option value="restoration">
                  Roof Restoration
                </option>

                <option value="maintenance">
                  Roof Maintenance
                </option>

                <option value="commercial">
                  Commercial Roofing
                </option>

              </select>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Project Details
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us a little about your roofing project..."
                title="Describe the project (optional)"
                value={formData.message}
                onChange={handleChange}
                // onKeyDown={(e) => {
                //     if (e.key === 'Enter') {
                //     e.preventDefault()
                //     e.currentTarget.form.requestSubmit()
                //     }
                // }}
              ></textarea>

            </div>


            <button
                type="submit"
                // disabled={!formData.name.trim() || !formData.phone.trim()}
                >
                Request Free Quote
            </button>

          </form>


            {/* {submitted && (
            <p className="success-message">
                Thank you! Your roofing quote request has been received.
                <br />
                We will get back to you shortly.
            </p>
          )} */}

        </div>

      </div>

    </section>
  )
}

export default Contact
