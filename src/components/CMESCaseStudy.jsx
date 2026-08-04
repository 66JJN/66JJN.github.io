import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { resumePath } from '../data/portfolioContent'
import { ThaiText } from './ThaiText'

const Arrow = () => <span aria-hidden="true">↗</span>

const ExternalLink = ({ href, children }) => (
  <a className="text-link" href={href} target="_blank" rel="noreferrer">
    <span>{children}</span><Arrow />
  </a>
)

const ArchitectureFlow = ({ items, label }) => (
  <ol className="case-study-architecture" aria-label={label}>
    {items.map((item) => <li key={item}>{item}</li>)}
  </ol>
)

const EngineeringCase = ({ item, labels }) => (
  <article className="case-study-card">
    <p className="case-study-card__number">{item.number}</p>
    <h3>{item.title}</h3>
    <dl>
      <div><dt>{labels.problem}</dt><dd>{item.problem}</dd></div>
      <div><dt>{labels.decision}</dt><dd>{item.decision}</dd></div>
      <div><dt>{labels.result}</dt><dd>{item.result}</dd></div>
    </dl>
    <details>
      <summary>{labels.details}</summary>
      <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
    </details>
  </article>
)

const CaseStudyHeader = () => {
  const { language, toggleLanguage, content } = useLanguage()
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="case-study-header">
      <a className="case-study-back" href="#/">← {content.cmesCaseStudy.back}</a>
      <div className="case-study-header__actions">
        <button
          className="language-button"
          type="button"
          onClick={toggleLanguage}
          aria-label={content.controls.language}
        >
          <span className={language === 'th' ? 'is-active' : ''}>TH</span>
          <span aria-hidden="true">/</span>
          <span className={language === 'en' ? 'is-active' : ''}>EN</span>
        </button>
        <button
          className="case-study-theme-button"
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? content.controls.themeLight : content.controls.themeDark}
          aria-pressed={isDark}
        >
          <span aria-hidden="true">{isDark ? '☀' : '◐'}</span>
        </button>
      </div>
    </header>
  )
}

export const CMESCaseStudy = () => {
  const { content } = useLanguage()
  const caseStudy = content.cmesCaseStudy
  const cmesProject = content.projects.find(({ id }) => id === 'cmes')
  const caseLabels = {
    problem: caseStudy.problemLabel,
    decision: caseStudy.decisionLabel,
    result: caseStudy.resultLabel,
    details: caseStudy.detailsLabel,
  }

  return (
    <div className="case-study-page">
      <a className="skip-link" href="#case-study-main">{content.controls.skip}</a>
      <CaseStudyHeader />
      <main id="case-study-main" className="case-study-shell">
        <section className="case-study-hero">
          <div className="case-study-hero__copy">
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h1><ThaiText>{caseStudy.title}</ThaiText></h1>
            <p className="case-study-status">{caseStudy.status}</p>
            <p className="case-study-summary">{caseStudy.summary}</p>
          </div>
          <aside className="case-study-role">
            <h2>{caseStudy.role}</h2>
            <p>{caseStudy.roleBody}</p>
            <h3>{caseStudy.stackLabel}</h3>
            <ul className="stack-list" aria-label={caseStudy.stackLabel}>
              {caseStudy.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
        </section>

        <section className="case-study-section case-study-system">
          <header>
            <p className="eyebrow">{caseStudy.architecture.eyebrow}</p>
            <h2><ThaiText>{caseStudy.architecture.title}</ThaiText></h2>
            <p>{caseStudy.architecture.description}</p>
          </header>
          <ArchitectureFlow items={caseStudy.architecture.items} label={caseStudy.architecture.label} />
        </section>

        <section className="case-study-section">
          <header className="case-study-section__heading">
            <p className="eyebrow">{caseStudy.casesEyebrow}</p>
            <h2><ThaiText>{caseStudy.casesTitle}</ThaiText></h2>
          </header>
          <div className="case-study-grid">
            {caseStudy.cases.map((item) => (
              <EngineeringCase item={item} labels={caseLabels} key={item.number} />
            ))}
          </div>
        </section>

        <section className="case-study-section case-study-evidence">
          <header>
            <p className="eyebrow">{caseStudy.evidence.eyebrow}</p>
            <h2><ThaiText>{caseStudy.evidence.title}</ThaiText></h2>
          </header>
          <ol>
            {caseStudy.evidence.items.map((item, index) => (
              <li key={item}><span>0{index + 1}</span>{item}</li>
            ))}
          </ol>
        </section>

        <section className="case-study-section case-study-ai">
          <div>
            <p className="eyebrow">{caseStudy.ai.eyebrow}</p>
            <h2><ThaiText>{caseStudy.ai.title}</ThaiText></h2>
          </div>
          <div>
            <p>{caseStudy.ai.body}</p>
            <p>{caseStudy.ai.lesson}</p>
          </div>
        </section>

        <section className="case-study-section case-study-reflection">
          <article>
            <p className="eyebrow">{caseStudy.lessons.eyebrow}</p>
            <h2><ThaiText>{caseStudy.lessons.title}</ThaiText></h2>
            <ul>{caseStudy.lessons.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="case-study-limitations">
            <p className="eyebrow">{caseStudy.limitations.eyebrow}</p>
            <h2><ThaiText>{caseStudy.limitations.title}</ThaiText></h2>
            <p>{caseStudy.limitations.body}</p>
          </article>
        </section>

        <section className="case-study-section case-study-actions" aria-label={caseStudy.title}>
          <ExternalLink href={cmesProject.links.admin}>{caseStudy.actions.admin}</ExternalLink>
          <ExternalLink href={cmesProject.links.user}>{caseStudy.actions.user}</ExternalLink>
          <ExternalLink href={cmesProject.links.adminGithub}>{caseStudy.actions.adminGithub}</ExternalLink>
          <ExternalLink href={cmesProject.links.userGithub}>{caseStudy.actions.userGithub}</ExternalLink>
          <a className="text-link" href={resumePath} download>
            <span>{caseStudy.actions.resume}</span><Arrow />
          </a>
        </section>
      </main>
      <footer className="case-study-footer">
        <a href="#/">← {caseStudy.back}</a>
        <span>CMES · 2026</span>
      </footer>
    </div>
  )
}
