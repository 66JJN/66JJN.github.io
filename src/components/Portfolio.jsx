import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { resumePath } from '../data/portfolioContent'
import { ThaiText } from './ThaiText'

const Arrow = () => <span aria-hidden="true">↗</span>

const ExternalLink = ({ href, children, className = '' }) => (
  <a className={`text-link ${className}`} href={href} target="_blank" rel="noreferrer">
    <span>{children}</span><Arrow />
  </a>
)

const SectionHeading = ({ eyebrow, title, invert = false }) => (
  <header className={`section-heading${invert ? ' section-heading--invert' : ''}`} data-reveal="heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2><ThaiText>{title}</ThaiText></h2>
  </header>
)

export const ThemeLamp = () => {
  const { isDark, toggleTheme } = useTheme()
  const { content } = useLanguage()
  const label = isDark ? content.controls.themeLight : content.controls.themeDark

  return (
    <button className="lamp" type="button" onClick={toggleTheme} aria-label={label} aria-pressed={isDark}>
      <svg className="lamp__svg" viewBox="0 0 36 54" aria-hidden="true">
        <path className="lamp__shade" d="M8 5h20l4 12H4L8 5Z" />
        <circle className="lamp__bulb" cx="18" cy="20" r="4" />
        <g className="lamp__pull-group">
          <path className="lamp__cord" d="M18 24V43" />
          <circle className="lamp__handle" cx="18" cy="47" r="3" />
        </g>
      </svg>
    </button>
  )
}

export const Header = () => {
  const { language, toggleLanguage, content } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">{content.controls.skip}</a>
      <header className="site-header">
        <a className="identity" href="#top" aria-label={content.hero.name} onClick={closeMenu}>
          <span>SS</span>
          <span className="identity__name">{content.hero.name}</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? content.controls.closeMenu : content.controls.menu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? '×' : '≡'}</span>
        </button>
        <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label={content.controls.primaryNav}>
          <a href="#work" onClick={closeMenu}>{content.nav.work}</a>
          <a href="#capabilities" onClick={closeMenu}>{content.nav.capabilities}</a>
          <a href="#about" onClick={closeMenu}>{content.nav.about}</a>
          <a href="#contact" onClick={closeMenu}>{content.nav.contact}</a>
        </nav>
        <div className="header-actions">
          <button className="language-button" type="button" onClick={toggleLanguage} aria-label={content.controls.language}>
            <span className={language === 'th' ? 'is-active' : ''}>TH</span>
            <span aria-hidden="true">/</span>
            <span className={language === 'en' ? 'is-active' : ''}>EN</span>
          </button>
          <ThemeLamp />
        </div>
      </header>
    </>
  )
}

export const Hero = () => {
  const { content } = useLanguage()
  return (
    <section className="hero editorial-grid" id="top">
      <div className="hero__copy">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <p className="hero__name">{content.hero.name}</p>
        <h1><ThaiText>{content.hero.title}</ThaiText></h1>
        <p className="hero__intro">{content.hero.intro}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#work">{content.hero.workCta}<span aria-hidden="true">↓</span></a>
          <a className="button button--plain" href={resumePath} download>{content.hero.resumeCta}<Arrow /></a>
        </div>
      </div>
      <figure className="hero__portrait">
        <img src="/profile.jpg" alt={content.hero.portraitAlt} />
        <figcaption>{content.hero.availability}</figcaption>
      </figure>
      <p className="hero__index" aria-hidden="true">PORTFOLIO / 2026</p>
    </section>
  )
}

const imageTiles = Array.from({ length: 24 }, (_, index) => index)

const ProjectMedia = ({ images, project }) => (
  <div className={`project-media project-media--${project}`}>
    {images.map((image) => (
      <figure
        className={image.optional ? 'project-shot project-shot--optional' : 'project-shot'}
        data-image-reveal
        key={image.src}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          onError={image.optional ? (event) => { event.currentTarget.parentElement.hidden = true } : undefined}
        />
        <span className="image-wipe" aria-hidden="true">
          {imageTiles.map((tile) => <span data-reveal-tile key={tile} />)}
        </span>
      </figure>
    ))}
  </div>
)

const ProjectLinks = ({ project, labels }) => {
  if (project.id === 'cmes') {
    return (
      <div className="project-links project-links--cmes">
        <a className="text-link project-links__case-study" href="#/cmes-case-study">
          <span>{labels.viewCaseStudy}</span><Arrow />
        </a>
        <ExternalLink className="project-link--left" href={project.links.admin}>{labels.admin}</ExternalLink>
        <ExternalLink className="project-link--right" href={project.links.user}>{labels.user}</ExternalLink>
        <ExternalLink className="project-link--left" href={project.links.adminGithub}>{labels.admin} {labels.repository}</ExternalLink>
        <ExternalLink className="project-link--right" href={project.links.userGithub}>{labels.user} {labels.repository}</ExternalLink>
      </div>
    )
  }
  return (
    <div className="project-links">
      <ExternalLink className="project-link--left" href={project.links.live}>{labels.viewLive}</ExternalLink>
      <ExternalLink className="project-link--right" href={project.links.github}>{labels.viewGithub}</ExternalLink>
    </div>
  )
}

export const SelectedWork = () => {
  const { content } = useLanguage()
  return (
    <section id="work" className="work-section">
      <SectionHeading eyebrow={content.selectedWork.eyebrow} title={content.selectedWork.title} />
      {content.projects.map((project) => (
        <article className={`project project--${project.id}`} data-project={project.id} key={project.id}>
          <header className="project__header editorial-grid" data-reveal="project-header">
            <p className="project__index">{project.index}</p>
            <div className="project__title">
              <p>{project.subtitle}</p>
              <h3>{project.title}</h3>
            </div>
            <p className="project__status">{project.status}</p>
          </header>
          <div className="project__body editorial-grid" data-reveal="project-body">
            <ProjectMedia images={project.images} project={project.id} />
            <div className="project__story">
              <p className="project__summary">{project.summary}</p>
              <div className="project__block">
                <h4>{content.selectedWork.contribution}</h4>
                <p>{project.contribution}</p>
              </div>
              <div className="project__block">
                <h4>{content.selectedWork.highlights}</h4>
                <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <ul className="stack-list" aria-label={content.selectedWork.stack}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <ProjectLinks project={project} labels={content.selectedWork} />
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export const Capabilities = () => {
  const { content } = useLanguage()
  return (
    <section id="capabilities" className="capabilities section-shell">
      <SectionHeading eyebrow={content.capabilities.eyebrow} title={content.capabilities.title} />
      <div className="capability-grid">
        {content.capabilities.groups.map((group, index) => (
          <article key={group.title} data-reveal="card">
            <p className="capability-grid__number">0{index + 1}</p>
            <h3>{group.title}</h3>
            <p className="capability-grid__tools">{group.tools}</p>
            <p>{group.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export const EngineeringNotes = () => {
  const { content } = useLanguage()
  return (
    <section className="engineering section-shell">
      <SectionHeading eyebrow={content.engineering.eyebrow} title={content.engineering.title} />
      <div className="engineering-list">
        {content.engineering.items.map((item) => (
          <article className="engineering-card" key={item.number} data-reveal="card">
            <p className="engineering-card__number">{item.number}</p>
            <h3>{item.title}</h3>
            <div><h4>{content.engineering.problem}</h4><p>{item.problem}</p></div>
            <div><h4>{content.engineering.decision}</h4><p>{item.decision}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export const About = () => {
  const { content } = useLanguage()
  return (
    <section id="about" className="about editorial-grid">
      <p className="eyebrow" data-reveal="label">{content.about.eyebrow}</p>
      <div className="about__copy" data-reveal="copy">
        <h2><ThaiText>{content.about.title}</ThaiText></h2>
        <p>{content.about.body}</p>
      </div>
      <dl className="education" data-reveal="details">
        <div><dt>{content.about.labels.education}</dt><dd>{content.about.education}</dd></div>
        <div><dt>{content.about.labels.degree}</dt><dd>{content.about.degree}</dd></div>
        <div><dt>{content.about.labels.period}</dt><dd>{content.about.period}</dd></div>
        <div><dt>{content.about.labels.gpa}</dt><dd>{content.about.gpa.replace('GPA ', '')}</dd></div>
      </dl>
    </section>
  )
}

export const Contact = () => {
  const { content } = useLanguage()
  return (
    <section id="contact" className="contact editorial-grid">
      <p className="eyebrow" data-reveal="label">{content.contact.eyebrow}</p>
      <div className="contact__headline" data-reveal="copy">
        <h2><ThaiText>{content.contact.title}</ThaiText></h2>
        <p>{content.contact.body}</p>
      </div>
      <div className="contact__links" data-reveal="details">
        <a href="mailto:pyaksda@gmail.com"><span>{content.contact.email}</span><strong>pyaksda@gmail.com</strong><Arrow /></a>
        <a href="tel:0952186772"><span>{content.contact.phone}</span><strong>095-218-6772</strong><Arrow /></a>
        <ExternalLink href="https://github.com/66JJN">{content.contact.github}</ExternalLink>
        <a className="text-link" href={resumePath} download><span>{content.contact.resume}</span><Arrow /></a>
      </div>
    </section>
  )
}

export const Footer = () => {
  const { content } = useLanguage()
  return (
    <footer className="site-footer">
      <div><strong>{content.footer.name}</strong><span>{content.footer.role}</span></div>
      <a href="#top">{content.footer.backToTop} ↑</a>
      <p>© 2026</p>
    </footer>
  )
}
