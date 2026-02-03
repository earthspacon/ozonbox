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
  ProcessList,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

export function ShoppingMallsPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('disinfection')

  return (
    <Layout>
      <Seo title={t('subcategories.shopping-malls.title', { ns })} description={t('subcategories.shopping-malls.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/disinfection"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.shopping-malls.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=1920&q=80"
            alt={t('subcategories.shopping-malls.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/disinfection"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.shopping-malls.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.shopping-malls.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="1000+" label="Посетителей" description="Ежедневный поток в крупных ТЦ" variant="primary" />
            <StatCard value="24/7" label="Защита" description="Интеграция в систему вентиляции" variant="accent" />
            <StatCard value="100%" label="Запахи" description="Устранение запахов фудкортов" variant="primary" />
            <StatCard value="0" label="Химии" description="Экологичная обработка" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Торговые центры — места массового скопления людей с интенсивным потоком посетителей. Ежедневно тысячи
              людей прикасаются к одним и тем же поверхностям: эскалаторам, поручням, кнопкам лифтов, дверным ручкам.
              Озонирование поддерживает качество воздуха, устраняет запахи и обеспечивает профилактику распространения
              инфекций.
            </Paragraph>
            <Paragraph>
              Регулярная обработка озоном в нерабочие часы дезинфицирует все поверхности, включая труднодоступные места
              и технические зоны. Газ проникает во все помещения, обеспечивая комплексную обработку всего объекта.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Комфорт посетителей</strong> напрямую влияет на время пребывания в ТЦ и объём покупок. Чистый свежий
            воздух без посторонних запахов — важный элемент позитивного покупательского опыта.
          </HighlightBox>

          <ArticleSection title="Зоны обработки в торговом центре">
            <BulletList
              items={[
                'Торговые галереи и атриумы — основные зоны скопления посетителей',
                'Эскалаторы и лифты — контактные поверхности с максимальной нагрузкой',
                'Фудкорты — источники запахов и пищевых загрязнений',
                'Туалетные комнаты — критические зоны для гигиены',
                'Подсобные и технические помещения — часто игнорируются при уборке',
                'Системы вентиляции — распространяют воздух по всему ТЦ',
                'Парковки — накапливают выхлопные газы и запахи',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Проблема запахов в ТЦ">
            <Paragraph>
              Торговые центры объединяют множество источников запахов: фудкорты, туалеты, парфюмерные магазины,
              подсобные помещения. Озон эффективно нейтрализует все эти запахи, не маскируя их, а разрушая молекулы
              пахнущих веществ.
            </Paragraph>

            <DataTable
              caption="Источники запахов и решения"
              headers={['Зона', 'Источник запаха', 'Решение']}
              rows={[
                ['Фудкорт', 'Приготовление пищи, жир, специи', 'Ночное озонирование + канальные озонаторы'],
                ['Туалеты', 'Органические вещества', 'Постоянное озонирование малой концентрации'],
                ['Атриум', 'Смешение запахов, духота', 'Интеграция в вентиляцию'],
                ['Паркинг', 'Выхлопные газы', 'Канальные озонаторы в вытяжке'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Варианты организации озонирования">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Ночная обработка"
                description="Мобильные озонаторы обрабатывают ТЦ после закрытия. Максимальная эффективность."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Интеграция в вентиляцию"
                description="Канальные озонаторы в системе HVAC. Постоянное поддержание качества воздуха."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Зональная обработка"
                description="Настенные озонаторы в проблемных зонах: туалеты, фудкорт, паркинг."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Комбинированный подход"
                description="Сочетание всех методов для максимального эффекта"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Режим обработки">
            <ProcessList
              steps={[
                {
                  title: 'Ночная дезинфекция',
                  description:
                    'После закрытия ТЦ запускаются мобильные озонаторы. Обработка 2-4 часа в зависимости от площади. К открытию озон полностью разлагается.',
                },
                {
                  title: 'Фудкорт',
                  description:
                    'Ежедневная обработка после закрытия кафе. Устранение запахов готовки, дезинфекция столов и стульев.',
                },
                {
                  title: 'Туалетные комнаты',
                  description:
                    'Озонаторы малой мощности работают постоянно в безопасной концентрации или включаются автоматически в перерывах.',
                },
                {
                  title: 'Вентиляция',
                  description:
                    'Канальные озонаторы подают озон в воздуховоды, обеспечивая обеззараживание приточного воздуха.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Расчёт оборудования">
            <DataTable
              caption="Рекомендуемая производительность для зон ТЦ"
              headers={['Зона', 'Площадь', 'Производительность', 'Режим']}
              rows={[
                ['Торговая галерея', '1000-5000 м²', '50-200 г/ч', 'Ночная обработка'],
                ['Фудкорт', '500-1500 м²', '20-60 г/ч', 'Ежедневно после закрытия'],
                ['Туалет', '20-50 м²', '1-2 г/ч', 'Постоянно или циклами'],
                ['Подсобные', '100-300 м²', '5-15 г/ч', '2-3 раза в неделю'],
                ['Паркинг', '5000-20000 м²', '100-500 г/ч', 'Интеграция в вентиляцию'],
              ]}
            />

            <HighlightBox variant="success">
              Для крупных торговых центров рекомендуется проектирование комплексной системы озонирования с учётом
              архитектуры здания, систем вентиляции и режима работы. Мы разрабатываем индивидуальные решения.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Эффективность против патогенов">
            <DataTable
              caption="Время инактивации на контактных поверхностях"
              headers={['Патоген', 'Время (20 мг/м³)', 'Эффективность']}
              rows={[
                ['Коронавирусы', '10-15 мин', '99,9%'],
                ['Вирусы гриппа', '5-10 мин', '99,9%'],
                ['Норовирус', '15-20 мин', '99,9%'],
                ['Staphylococcus aureus', '10-15 мин', '99,99%'],
                ['E. coli', '5-10 мин', '99,99%'],
                ['Плесень', '30-40 мин', '99%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества для управляющих компаний">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Безопасность посетителей"
                description="Снижение риска распространения инфекций в местах массового скопления"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Комфортная атмосфера"
                description="Чистый воздух без запахов увеличивает время пребывания посетителей"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Соответствие нормам"
                description="Выполнение санитарных требований к общественным местам"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия на химии"
                description="Сокращение расходов на дезсредства и освежители воздуха"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Сравнение подходов к дезинфекции">
            <ComparisonTable
              title="Методы обработки торговых центров"
              headers={['Критерий', 'Озонирование', 'Химическая обработка']}
              rows={[
                { parameter: 'Обработка воздуха', value1: 'Да', value2: 'Нет' },
                { parameter: 'Системы вентиляции', value1: 'Да', value2: 'Нет' },
                { parameter: 'Труднодоступные места', value1: 'Да (газ)', value2: 'Нет' },
                { parameter: 'Устранение запахов', value1: 'Полное', value2: 'Маскировка' },
                { parameter: 'Химические остатки', value1: 'Нет', value2: 'Да' },
                { parameter: 'Автоматизация', value1: 'Полная', value2: 'Частичная' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Безопасность для посетителей">
            <Paragraph>
              При правильной организации озонирование абсолютно безопасно для посетителей и персонала торгового центра.
            </Paragraph>
            <BulletList
              items={[
                'Основная обработка — в ночное время, когда ТЦ закрыт',
                'Интеграция в вентиляцию — в безопасных концентрациях',
                'Туалеты — автоматическое отключение при входе посетителей',
                'Датчики концентрации — контроль уровня озона в реальном времени',
                'К открытию ТЦ озон полностью разлагается на кислород',
              ]}
            />

            <HighlightBox variant="warning">
              ПДК озона для рабочей зоны — 0,1 мг/м³. При интеграции в вентиляцию концентрация поддерживается на уровне
              0,03-0,05 мг/м³ — это безопасно и даёт эффект «свежего воздуха».
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
