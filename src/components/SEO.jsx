import { useEffect } from 'react'

function SEO({ title, description, path = '/' }) {

  useEffect(() => {

    // Update browser title
    document.title = title

    // Update meta description
    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    )

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute('content', description)

    // Update canonical URL
    let canonicalTag = document.querySelector(
      'link[rel="canonical"]'
    )

    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }

    canonicalTag.setAttribute(
      'href',
      `https://www.rchcoastal.com${path}`
    )

  }, [title, description, path])

  return null
}

export default SEO