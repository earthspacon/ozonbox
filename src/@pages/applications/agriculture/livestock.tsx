import Image from 'next/image'
import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  BulletList,
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

export function LivestockPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  return (
    <Layout>
      <Seo title={t('subcategories.livestock.title', { ns })} description={t('subcategories.livestock.shortDesc', { ns })} />
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
            <span className="text-text-primary font-medium">{t('subcategories.livestock.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=1920&q=80"
            alt={t('subcategories.livestock.title', { ns })}
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
            {t('subcategories.livestock.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.livestock.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="80-90%"
              label="Снижение микрофлоры"
              description="В воздухе животноводческих помещений"
              variant="primary"
            />
            <StatCard
              value="30-50%"
              label="Снижение заболеваемости"
              description="Респираторных инфекций поголовья"
              variant="accent"
            />
            <StatCard
              value="10-15%"
              label="Рост продуктивности"
              description="Среднесуточный привес и надои"
              variant="primary"
            />
            <StatCard value="0" label="Антибиотиков" description="Экологически чистая продукция" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Современное животноводство сталкивается с серьёзными вызовами: рост антибиотикорезистентности, ужесточение
              требований к экологичности продукции, необходимость повышения продуктивности при снижении затрат.
              Озонирование — технология, которая решает эти задачи комплексно.
            </Paragraph>
            <Paragraph>
              Применение озона в животноводстве позволяет снизить заболеваемость поголовья на 30-50%, повысить
              продуктивность на 10-15% и отказаться от профилактического применения антибиотиков. Это особенно актуально
              в контексте запрета ЕС на использование антибиотиков как стимуляторов роста.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>ПДК озона для животных:</strong> до 1,0 мг/м³ для КРС и свиней, до 1,2 мг/м³ для птицы. Это
            позволяет проводить профилактические обработки в присутствии животных при соблюдении режимов.
          </HighlightBox>

          <ArticleSection title="Направления применения озона">
            <BulletList
              items={[
                'Дезинфекция воздуха в помещениях содержания животных',
                'Обеззараживание питьевой воды',
                'Обработка кормов — снижение микотоксинов и патогенов',
                'Дезинфекция молочного оборудования и ёмкостей',
                'Обработка навоза и стоков',
                'Санация родильных отделений',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Дезинфекция воздуха в помещениях">
            <Paragraph>
              Воздух в животноводческих помещениях загрязняется аммиаком, сероводородом, пылью и микроорганизмами.
              Концентрация аммиака может достигать 0,02-0,03 мг/л при ПДК 0,01 мг/л. Это снижает продуктивность,
              повышает заболеваемость и ухудшает условия труда персонала.
            </Paragraph>

            <DataTable
              caption="Эффективность озонирования воздуха в коровнике"
              headers={['Показатель', 'До обработки', 'После обработки', 'Снижение']}
              rows={[
                ['Аммиак, мг/л', '0,025', '0,005', '80%'],
                ['Сероводород, мг/л', '0,008', '0,001', '87%'],
                ['Микрофлора, КОЕ/м³', '85 000', '12 000', '86%'],
                ['Пыль, мг/м³', '4,5', '1,2', '73%'],
              ]}
            />

            <HighlightBox variant="success">
              Регулярное озонирование (2-3 раза в сутки по 15-20 минут при концентрации 0,5-1,0 мг/м³) снижает
              респираторные заболевания КРС на 40-50% и повышает среднесуточный привес на 8-12%.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Обеззараживание питьевой воды">
            <Paragraph>
              Качество питьевой воды напрямую влияет на здоровье и продуктивность животных. Вода из открытых источников
              и даже артезианских скважин часто содержит патогенные микроорганизмы, железо, марганец и органические
              соединения.
            </Paragraph>
            <Paragraph>Озонирование воды обеспечивает:</Paragraph>
            <BulletList
              items={[
                'Уничтожение E.coli, сальмонеллы, кампилобактера и других патогенов',
                'Окисление железа и марганца до нерастворимых форм',
                'Устранение неприятных запахов и привкусов',
                'Улучшение усвояемости воды животными',
                'Профилактику желудочно-кишечных заболеваний',
              ]}
            />

            <DataTable
              caption="Режимы озонирования воды для животноводства"
              headers={['Назначение', 'Концентрация озона', 'Время контакта']}
              rows={[
                ['Питьевая вода для КРС', '0,3-0,5 мг/л', '10-15 мин'],
                ['Питьевая вода для свиней', '0,3-0,5 мг/л', '10-15 мин'],
                ['Вода для промывки оборудования', '1,0-2,0 мг/л', '5-10 мин'],
                ['Вода для разведения молока', '0,5-1,0 мг/л', '15-20 мин'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Обработка кормов">
            <Paragraph>
              Корма — основной источник микотоксинов и патогенных микроорганизмов, попадающих в организм животных.
              Озонирование кормов позволяет:
            </Paragraph>
            <BulletList
              items={[
                'Снизить содержание плесневых грибков на 90-95%',
                'Разрушить микотоксины (афлатоксины, зеараленон, DON)',
                'Уничтожить патогенную микрофлору (сальмонелла, E.coli)',
                'Повысить биологическую ценность и усвояемость кормов',
                'Продлить сроки хранения кормов',
              ]}
            />

            <HighlightBox variant="info">
              Рекомендуемый режим обработки кормов: концентрация озона 10-15 мг/м³, время обработки 60-120 минут в
              зависимости от влажности и загрязнённости корма.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Дезинфекция молочного оборудования">
            <Paragraph>
              На молочных фермах озон применяется для дезинфекции доильного оборудования, танков-охладителей,
              молокопроводов и ёмкостей. Это позволяет отказаться от химических моющих средств и обеспечить безопасность
              молочной продукции.
            </Paragraph>

            <DataTable
              caption="Применение озона на молочных фермах"
              headers={['Объект обработки', 'Метод', 'Эффективность']}
              rows={[
                ['Доильные аппараты', 'Озонированная вода 2-3 мг/л', '99,9%'],
                ['Молочные танки', 'Озонированная вода + воздух', '99,99%'],
                ['Молокопроводы', 'Прокачка озонированной воды', '99,9%'],
                ['Ёмкости для хранения', 'Газообразный озон', '99,99%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования в животноводстве">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без антибиотиков"
                description="Снижение заболеваемости без профилактических антибиотиков — экологически чистая продукция"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Повышение продуктивности"
                description="Рост надоев на 5-10%, среднесуточного привеса на 8-15% за счёт улучшения условий"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия на ветпрепаратах"
                description="Снижение затрат на лечение и профилактику заболеваний на 30-40%"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Улучшение условий труда"
                description="Снижение концентрации вредных газов и запахов для персонала фермы"
              />
            </FeatureGrid>
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
