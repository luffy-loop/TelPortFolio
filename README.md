# Developer Portfolio

Personal portfolio of Kandhula Poojasri Reddy, a B.Tech student at KL University. It showcases selected full-stack, machine learning, AI security and algorithm projects, coursework, certifications and contact profiles.

[Published Netlify site](https://portfolio-2510030093.netlify.app)

## Run locally

```bash
python -m http.server 8000 --directory portfolio
```

Open http://localhost:8000. No package installation or build step is needed.

## Deployment

For Netlify, publish the `portfolio` directory with no build command. Existing HTML routes and certificate PDF paths are retained. Deployment availability depends on the site's Netlify configuration.

## Structure

- `portfolio/index.html`: landing page and featured projects
- `portfolio/projects.html`: flagship and earlier projects
- `portfolio/about.html`: education and coursework
- `portfolio/skills.html`: technical toolkit
- `portfolio/cert.html`: certifications and original PDFs in `cer/`
- `portfolio/contact.html`: contact and professional profiles
- `portfolio/style.css`: shared responsive dark theme

The site uses semantic HTML and CSS, visible keyboard focus and navigation without JavaScript. Project demo links are published URLs, not uptime guarantees. A resume PDF has not yet been supplied.
