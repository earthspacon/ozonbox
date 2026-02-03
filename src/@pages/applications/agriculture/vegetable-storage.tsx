import Image from 'next/image'
import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  BulletList,
  ComparisonTable,
  DataTable,
  FeatureCard,
  FeatureGrid,
  HighlightBox,
  Paragraph,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

export function VegetableStoragePage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  return (
    <Layout>
      <Seo title={t('subcategories.vegetable-storage.title', { ns })} description={t('subcategories.vegetable-storage.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/agriculture"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.vegetable-storage.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=1920&q=80"
            alt={t('subcategories.vegetable-storage.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/agriculture"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.vegetable-storage.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.vegetable-storage.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="1,5-2×"
              label="Продление хранения"
              description="Увеличение сроков хранения продукции"
              variant="primary"
            />
            <StatCard value="90%" label="Снижение плесени" description="Уничтожение спор грибков" variant="accent" />
            <StatCard
              value="30-50%"
              label="Снижение потерь"
              description="Уменьшение порчи продукции"
              variant="primary"
            />
            <StatCard value="0" label="Химии" description="Без консервантов и фунгицидов" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Потери овощей и фруктов при хранении составляют от 20 до 40% от общего объёма. Основные причины — развитие
              плесени, бактериальная гниль, преждевременное прорастание и увядание. Озонирование позволяет решить эти
              проблемы комплексно, продлевая сроки хранения в 1,5-2 раза без использования химических препаратов.
            </Paragraph>
            <Paragraph>
              В отличие от фунгицидов и консервантов, озон не накапливается в продукции, распадаясь на кислород. Это
              особенно важно для органического земледелия и производства экологически чистых продуктов питания.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Принцип действия:</strong> Озон уничтожает плесень, дрожжи и бактерии на поверхности овощей и в
            воздухе хранилища. Также разрушает этилен — газ, ускоряющий созревание и старение плодов.
          </HighlightBox>

          <ArticleSection title="Эффективность озонирования овощей">
            <DataTable
              caption="Продление сроков хранения при озонировании"
              headers={['Культура', 'Без озона', 'С озоном', 'Увеличение']}
              rows={[
                ['Картофель', '4-5 месяцев', '6-7,5 месяцев', '+2,5 мес'],
                ['Морковь', '4-6 месяцев', '7-9 месяцев', '+3 мес'],
                ['Капуста', '4-5 месяцев', '6-8 месяцев', '+2-3 мес'],
                ['Лук', '5-6 месяцев', '8-9 месяцев', '+3 мес'],
                ['Свёкла', '5-6 месяцев', '8-9 месяцев', '+3 мес'],
                ['Яблоки', '4-6 месяцев', '7-9 месяцев', '+3 мес'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Борьба с болезнями хранения">
            <Paragraph>
              Основные болезни овощей при хранении вызываются грибками и бактериями. Озон эффективен против всех
              основных возбудителей:
            </Paragraph>
            <BulletList
              items={[
                'Фитофтороз картофеля — снижение поражённости на 60-80%',
                'Серая гниль (Botrytis) — уничтожение спор на 95%',
                'Мокрая гниль — подавление развития бактерий',
                'Фузариоз — снижение заражённости на 70%',
                'Пенициллёз плодов — уничтожение спор на 90%',
                'Чёрная ножка моркови — предотвращение развития',
              ]}
            />

            <HighlightBox variant="success">
              При регулярном озонировании (2-3 мг/м³, 4-6 часов ежесуточно) заражённость картофеля фитофторозом
              снижается с 15-20% до 3-5%, что экономит до 30% урожая.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Режимы озонирования овощехранилищ">
            <DataTable
              caption="Рекомендуемые режимы обработки"
              headers={['Культура', 'Концентрация', 'Время обработки', 'Периодичность']}
              rows={[
                ['Картофель', '2-5 мг/м³', '4-6 часов', 'Ежедневно'],
                ['Морковь', '3-5 мг/м³', '4-8 часов', 'Ежедневно'],
                ['Капуста', '3-5 мг/м³', '4-6 часов', 'Ежедневно'],
                ['Лук', '5-10 мг/м³', '2-4 часа', '2-3 раза в неделю'],
                ['Яблоки', '2-3 мг/м³', '4-6 часов', 'Ежедневно'],
                ['Цитрусовые', '3-5 мг/м³', '4-6 часов', 'Ежедневно'],
              ]}
            />

            <Paragraph>
              Важно учитывать, что режим озонирования зависит от температуры, влажности и состояния продукции. При
              повышенной влажности (более 95%) эффективность озона увеличивается.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Дополнительные эффекты озонирования">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Устранение запахов"
                description="Озон нейтрализует запахи гниения, прелости, химикатов в хранилище"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Подавление прорастания"
                description="Замедление прорастания картофеля и лука без химических ингибиторов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Разрушение этилена"
                description="Окисление этилена замедляет созревание и старение плодов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Дезинсекция"
                description="Уничтожение насекомых-вредителей и их личинок в хранилище"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Экономический эффект">
            <Paragraph>
              Внедрение озонирования в овощехранилищах обеспечивает значительный экономический эффект:
            </Paragraph>
            <ComparisonTable
              headers={['Показатель', 'С озоном', 'Без озона']}
              rows={[
                { parameter: 'Потери при хранении картофеля', value1: '5-8%', value2: '15-25%' },
                { parameter: 'Потери при хранении моркови', value1: '8-12%', value2: '25-35%' },
                { parameter: 'Затраты на фунгициды', value1: '0', value2: '15-20 руб/т' },
                {
                  parameter: 'Реализация в поздний период',
                  value1: 'По премиальной цене',
                  value2: 'Со скидкой (ухудшение качества)',
                },
              ]}
            />

            <HighlightBox variant="success">
              Окупаемость оборудования для озонирования овощехранилища ёмкостью 1000 тонн составляет 1-2 сезона хранения
              за счёт снижения потерь и повышения цены реализации.
            </HighlightBox>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">{t('cta.applications.title', { ns: NAMESPACES.common })}</h2>
          <p className="cta__text">{t('cta.applications.text', { ns: NAMESPACES.common })}</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              {t('hero.getConsultation', { ns: NAMESPACES.common })}
            </AppLink>
            <a
              href="tel:+78001234567"
              className="btn btn--secondary btn--large"
              style={{ borderColor: 'white', color: 'white' }}
            >
              {t('header.phone', { ns: NAMESPACES.common })}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
