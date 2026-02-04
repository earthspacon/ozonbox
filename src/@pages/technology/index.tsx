import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { CTASection } from '@/shared/ui/article-components'
import {
  IconAuto,
  IconCheck,
  IconDisinfection,
  IconEco,
  IconEconomy,
  IconMercury,
  IconMold,
  IconOdor,
  IconRat,
  IconShield,
  IconSpray,
  IconSterilize,
  IconUniversal,
} from '@/shared/ui/icons'

export function TechnologyPage() {
  const { t } = useTranslate()

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t('technology.header.title')}</h1>
          <p className="page-header__subtitle">{t('technology.header.subtitle')}</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('technology.process.title')}{' '}
              <span className="text-gradient">{t('technology.process.titleHighlight')}</span>
            </h2>
            <p className="section__subtitle">{t('technology.process.subtitle')}</p>
          </div>
          <div className="process-steps">
            <div className="process-step fade-in visible">
              <h4 className="process-step__title">{t('technology.process.step1.title')}</h4>
              <p className="process-step__text">{t('technology.process.step1.text')}</p>
            </div>
            <div className="process-step fade-in visible">
              <h4 className="process-step__title">{t('technology.process.step2.title')}</h4>
              <p className="process-step__text">{t('technology.process.step2.text')}</p>
            </div>
            <div className="process-step fade-in visible">
              <h4 className="process-step__title">{t('technology.process.step3.title')}</h4>
              <p className="process-step__text">{t('technology.process.step3.text')}</p>
            </div>
            <div className="process-step fade-in visible">
              <h4 className="process-step__title">{t('technology.process.step4.title')}</h4>
              <p className="process-step__text">{t('technology.process.step4.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('technology.comparison.title')}{' '}
              <span className="text-gradient">{t('technology.comparison.titleHighlight')}</span>
            </h2>
            <p className="section__subtitle">{t('technology.comparison.subtitle')}</p>
          </div>
          <table className="comparison-table fade-in visible">
            <thead>
              <tr>
                <th>{t('technology.comparison.parameter')}</th>
                <th>{t('technology.comparison.ozone')}</th>
                <th>{t('technology.comparison.chlorine')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('technology.comparison.efficiency')}</td>
                <td className="highlight">{t('technology.comparison.efficiencyOzone')}</td>
                <td>{t('technology.comparison.efficiencyChlorine')}</td>
              </tr>
              <tr>
                <td>{t('technology.comparison.time')}</td>
                <td className="highlight">{t('technology.comparison.timeOzone')}</td>
                <td>{t('technology.comparison.timeChlorine')}</td>
              </tr>
              <tr>
                <td>{t('technology.comparison.byproducts')}</td>
                <td className="highlight">{t('technology.comparison.byproductsOzone')}</td>
                <td className="negative">{t('technology.comparison.byproductsChlorine')}</td>
              </tr>
              <tr>
                <td>{t('technology.comparison.irritation')}</td>
                <td className="highlight">{t('technology.comparison.irritationOzone')}</td>
                <td className="negative">{t('technology.comparison.irritationChlorine')}</td>
              </tr>
              <tr>
                <td>{t('technology.comparison.smell')}</td>
                <td className="highlight">{t('technology.comparison.smellOzone')}</td>
                <td className="negative">{t('technology.comparison.smellChlorine')}</td>
              </tr>
              <tr>
                <td>{t('technology.comparison.ph')}</td>
                <td className="highlight">{t('technology.comparison.phOzone')}</td>
                <td className="negative">{t('technology.comparison.phChlorine')}</td>
              </tr>
              <tr>
                <td>{t('technology.comparison.viruses')}</td>
                <td className="highlight">{t('technology.comparison.virusesOzone')}</td>
                <td className="negative">{t('technology.comparison.virusesChlorine')}</td>
              </tr>
              <tr>
                <td>{t('technology.comparison.eco')}</td>
                <td className="highlight">{t('technology.comparison.ecoOzone')}</td>
                <td className="negative">{t('technology.comparison.ecoChlorine')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7 Functions */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('technology.functions.title')}{' '}
              <span className="text-gradient">{t('technology.functions.titleHighlight')}</span>
            </h2>
            <p className="section__subtitle">{t('technology.functions.subtitle')}</p>
          </div>
          <div className="functions-grid">
            <div className="function-card fade-in visible">
              <div className="function-card__icon">
                <IconDisinfection style={{ width: 48, height: 48 }} />
              </div>
              <h4 className="function-card__title">{t('technology.functions.disinfection.title')}</h4>
              <p className="function-card__text">{t('technology.functions.disinfection.text')}</p>
            </div>
            <div className="function-card fade-in visible">
              <div className="function-card__icon">
                <IconSpray style={{ width: 48, height: 48 }} />
              </div>
              <h4 className="function-card__title">{t('technology.functions.disinsection.title')}</h4>
              <p className="function-card__text">{t('technology.functions.disinsection.text')}</p>
            </div>
            <div className="function-card fade-in visible">
              <div className="function-card__icon">
                <IconOdor style={{ width: 48, height: 48 }} />
              </div>
              <h4 className="function-card__title">{t('technology.functions.deodorization.title')}</h4>
              <p className="function-card__text">{t('technology.functions.deodorization.text')}</p>
            </div>
            <div className="function-card fade-in visible">
              <div className="function-card__icon">
                <IconRat style={{ width: 48, height: 48 }} />
              </div>
              <h4 className="function-card__title">{t('technology.functions.deratization.title')}</h4>
              <p className="function-card__text">{t('technology.functions.deratization.text')}</p>
            </div>
            <div className="function-card fade-in visible">
              <div className="function-card__icon">
                <IconMercury style={{ width: 48, height: 48 }} />
              </div>
              <h4 className="function-card__title">{t('technology.functions.demercurization.title')}</h4>
              <p className="function-card__text">{t('technology.functions.demercurization.text')}</p>
            </div>
            <div className="function-card fade-in visible">
              <div className="function-card__icon">
                <IconMold style={{ width: 48, height: 48 }} />
              </div>
              <h4 className="function-card__title">{t('technology.functions.mold.title')}</h4>
              <p className="function-card__text">{t('technology.functions.mold.text')}</p>
            </div>
            <div className="function-card fade-in visible">
              <div className="function-card__icon">
                <IconSterilize style={{ width: 48, height: 48 }} />
              </div>
              <h4 className="function-card__title">{t('technology.functions.sterilization.title')}</h4>
              <p className="function-card__text">{t('technology.functions.sterilization.text')}</p>
            </div>
            <div
              className="function-card fade-in visible"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)',
                borderColor: 'var(--color-primary)',
              }}
            >
              <div className="function-card__icon">
                <IconCheck style={{ width: 48, height: 48 }} />
              </div>
              <h4 className="function-card__title">{t('technology.functions.allinone.title')}</h4>
              <p className="function-card__text">{t('technology.functions.allinone.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('technology.benefits.title')}{' '}
              <span className="text-gradient">{t('technology.benefits.titleHighlight')}</span>
            </h2>
            <p className="section__subtitle">{t('technology.benefits.subtitle')}</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconEco style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('technology.benefits.eco.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('technology.benefits.eco.list.1')}</li>
                <li>{t('technology.benefits.eco.list.2')}</li>
                <li>{t('technology.benefits.eco.list.3')}</li>
                <li>{t('technology.benefits.eco.list.4')}</li>
              </ul>
            </div>
            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconShield style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('technology.benefits.efficiency.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('technology.benefits.efficiency.list.1')}</li>
                <li>{t('technology.benefits.efficiency.list.2')}</li>
                <li>{t('technology.benefits.efficiency.list.3')}</li>
                <li>{t('technology.benefits.efficiency.list.4')}</li>
              </ul>
            </div>
            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconCheck style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('technology.benefits.safety.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('technology.benefits.safety.list.1')}</li>
                <li>{t('technology.benefits.safety.list.2')}</li>
                <li>{t('technology.benefits.safety.list.3')}</li>
                <li>{t('technology.benefits.safety.list.4')}</li>
              </ul>
            </div>
            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconEconomy style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('technology.benefits.economy.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('technology.benefits.economy.list.1')}</li>
                <li>{t('technology.benefits.economy.list.2')}</li>
                <li>{t('technology.benefits.economy.list.3')}</li>
                <li>{t('technology.benefits.economy.list.4')}</li>
              </ul>
            </div>
            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconUniversal style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('technology.benefits.universal.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('technology.benefits.universal.list.1')}</li>
                <li>{t('technology.benefits.universal.list.2')}</li>
                <li>{t('technology.benefits.universal.list.3')}</li>
                <li>{t('technology.benefits.universal.list.4')}</li>
              </ul>
            </div>
            <div className="benefit-card fade-in visible">
              <div className="benefit-card__icon">
                <IconAuto style={{ width: 32, height: 32 }} />
              </div>
              <h3 className="benefit-card__title">{t('technology.benefits.auto.title')}</h3>
              <ul className="benefit-card__list">
                <li>{t('technology.benefits.auto.list.1')}</li>
                <li>{t('technology.benefits.auto.list.2')}</li>
                <li>{t('technology.benefits.auto.list.3')}</li>
                <li>{t('technology.benefits.auto.list.4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--gray">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">
              {t('technology.stats.title')}{' '}
              <span className="text-gradient">{t('technology.stats.titleHighlight')}</span>
            </h2>
          </div>
          <div className="features" style={{ marginTop: 0 }}>
            <div className="feature-card fade-in visible">
              <div
                className="feature-card__icon"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                300×
              </div>
              <h3 className="feature-card__title">{t('technology.stats.power.title')}</h3>
              <p className="feature-card__text">{t('technology.stats.power.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div
                className="feature-card__icon"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                95%
              </div>
              <h3 className="feature-card__title">{t('technology.stats.europe.title')}</h3>
              <p className="feature-card__text">{t('technology.stats.europe.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div
                className="feature-card__icon"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                3-4×
              </div>
              <h3 className="feature-card__title">{t('technology.stats.cheaper.title')}</h3>
              <p className="feature-card__text">{t('technology.stats.cheaper.text')}</p>
            </div>
            <div className="feature-card fade-in visible">
              <div
                className="feature-card__icon"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-primary)',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                20 min
              </div>
              <h3 className="feature-card__title">{t('technology.stats.decay.title')}</h3>
              <p className="feature-card__text">{t('technology.stats.decay.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={t('cta.technology.title')}
        description={t('cta.technology.text')}
        primaryButton={{
          label: t('hero.getConsultation'),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('cta.technology.areas'),
          href: '/applications',
        }}
      />
    </Layout>
  )
}
