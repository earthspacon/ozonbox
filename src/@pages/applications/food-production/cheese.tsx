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

export function CheesePage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('food-production')

  return (
    <Layout>
      <Seo title={t('subcategories.cheese.title', { ns })} description={t('subcategories.cheese.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/food-production"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.cheese.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1920&q=80"
            alt={t('subcategories.cheese.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/food-production"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.cheese.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.cheese.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="95-99%"
              label="Эффективность"
              description="Предотвращение нежелательной плесени"
              variant="primary"
            />
            <StatCard
              value="2-6"
              label="мг/м³ озона"
              description="Концентрация для камер созревания сыров"
              variant="accent"
            />
            <StatCard
              value="100%"
              label="Сохранение вкуса"
              description="Не влияет на процесс созревания"
              variant="primary"
            />
            <StatCard
              value="1975"
              label="Год инструкции"
              description="Озонирование для хранения сыров в СССР"
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              В сыроделии озонирование решает ключевую проблему — предотвращение развития нежелательной плесени на
              поверхности сыров при их созревании и хранении. Технология позволяет контролировать микрофлору камер без
              воздействия на биохимические процессы созревания.
            </Paragraph>
            <Paragraph>
              Озон предотвращает развитие плесени на корке сыра, при этом не нарушая баланс полезной микрофлоры внутри
              головки. При правильной дозировке озон не влияет на цвет, консистенцию, вкус и аромат готовой продукции.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Временная инструкция Минторга РСФСР 1975 г.:</strong> Озонирование рекомендовано для хранения
            твёрдых сычужных сыров. Метод позволяет контролировать плесень на поверхности сыра без применения химических
            консервантов.
          </HighlightBox>

          <ArticleSection title="Режимы озонирования для разных типов сыров">
            <DataTable
              caption="Рекомендуемые режимы обработки камер созревания сыров"
              headers={['Тип сыра', 'Концентрация', 'Время обработки', 'Температура', 'Эффективность']}
              rows={[
                ['Твёрдые сыры', '2-4 мг/м³', '2 часа', '+10...+12°C', '95-99%'],
                ['Мягкие сыры', '3-6 мг/м³', '1,5 часа', '+8...+10°C', '94-98%'],
                ['Полутвёрдые сыры', '2-4 мг/м³', '1,5-2 часа', '+10...+12°C', '95-98%'],
                ['Рассольные сыры', '2-3 мг/м³', '1 час', '+6...+8°C', '94-97%'],
                ['Сыры с плесенью', '1-2 мг/м³', '30 минут', '+8...+10°C', '90-95%'],
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Важно для сыров с благородной плесенью:</strong> При производстве сыров типа камамбер, бри, рокфор
              требуется щадящий режим озонирования (1-2 мг/м³, 30 минут) для контроля нежелательной плесени без
              повреждения культурной.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования в сыроделии">
            <BulletList
              items={[
                'Предотвращение развития нежелательной плесени на корке сыра',
                'Сохранение процесса созревания — озон не проникает внутрь головки',
                'Снижение усушки продукции за счёт стабилизации микрофлоры',
                'Обработка без выгрузки сыра из камеры созревания',
                'Соответствие требованиям ГОСТ Р 54607-2011 «Сыры. Общие технические условия»',
                'Автоматизация процесса дезинфекции по заданному расписанию',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Влияние озона на продукт">
            <Paragraph>
              Исследования показывают, что озон подавляет рост микрофлоры на поверхности сыров, сохраняя их
              органолептические свойства — вкус, аромат, текстуру и цвет. Бактерицидный эффект проявляется особенно ярко
              в условиях повышенной влажности (70-90%) и умеренных температур (+8...+14°C), характерных для камер
              созревания.
            </Paragraph>

            <DataTable
              caption="Условия созревания сыров и параметры озонирования"
              headers={['Параметр', 'Твёрдые сыры', 'Мягкие сыры', 'Оптимум для озона']}
              rows={[
                ['Температура', '+10...+14°C', '+8...+12°C', '+8...+14°C'],
                ['Влажность', '80-90%', '85-95%', '70-90%'],
                ['Время созревания', '2-12 месяцев', '2-6 недель', 'Любое'],
                ['Концентрация O₃', '2-4 мг/м³', '3-6 мг/м³', '2-6 мг/м³'],
                ['Периодичность', 'Через 2-3 дня', 'Ежедневно', 'По режиму'],
              ]}
            />
          </ArticleSection>

          <ComparisonTable
            title="Сравнение методов борьбы с плесенью на сырах"
            headers={['Параметр', 'Озонирование', 'Покрытие воском/парафином']}
            rows={[
              { parameter: 'Защита от плесени', value1: '95-99%', value2: '80-90%' },
              { parameter: 'Влияние на вкус', value1: 'Отсутствует', value2: 'Возможно' },
              { parameter: 'Дышащая корка', value1: 'Сохраняется', value2: 'Блокируется' },
              { parameter: 'Дополнительные затраты', value1: 'Минимальные', value2: 'На материалы' },
              { parameter: 'Ручной труд', value1: 'Не требуется', value2: 'Обязателен' },
              { parameter: 'Экологичность', value1: 'Полная', value2: 'Отходы воска' },
            ]}
          />

          <ArticleSection title="Обработка камер созревания">
            <Paragraph>
              Для стационарных камер созревания рекомендуется использовать настенные или канальные озонаторы с
              автоматическим управлением. Озон распределяется равномерно по объёму камеры, проникая в труднодоступные
              зоны, включая стеллажи и полки.
            </Paragraph>

            <DataTable
              caption="Пример режима обработки камеры созревания сыров (объём 50 м³)"
              headers={['Параметр', 'Значение', 'Примечание']}
              rows={[
                ['Производительность озонатора', '2-3 г/час', '1 г/час на 15-20 м³'],
                ['Концентрация озона', '3-4 мг/м³', 'Для твёрдых сыров'],
                ['Время работы', '1,5-2 часа', 'Ежедневно или через день'],
                ['Влажность в камере', '85-90%', 'Оптимум для озона'],
                ['Эффективность', '95-99%', 'Уничтожение плесени'],
              ]}
            />

            <HighlightBox variant="success">
              Регулярное озонирование камер созревания (1-2 раза в сутки по 1,5-2 часа) позволяет отказаться от ручной
              протирки сыров и снизить трудозатраты на обслуживание камер на 70-80%.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Нормативная документация">
            <BulletList
              items={[
                'ГОСТ Р 54607-2011 — Сыры. Общие технические условия',
                'Временная инструкция по озонированию камер хранения твёрдых сычужных сыров (1975 г.)',
                'Методические рекомендации по применению озона в качестве дезинфицирующего средства (1976 г.)',
                'СанПиН 2.3.4.545-96 — Производство молока и молочных продуктов',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества для сыроделия">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Контроль плесени"
                description="Предотвращение нежелательной плесени на 95-99% без влияния на созревание"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Сохранение качества"
                description="Вкус, аромат и текстура сыра остаются неизменными"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Снижение усушки"
                description="Стабилизация микрофлоры уменьшает потери массы при созревании"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Автоматизация"
                description="Обработка по расписанию без участия персонала"
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
