import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  BulletList,
  ComparisonTable,
  CTASection,
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

export function OdorRemovalPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('cleaning')

  return (
    <Layout>
      <Seo
        title={t('subcategories.odor-removal.title', { ns })}
        description={t('subcategories.odor-removal.shortDesc', { ns })}
      />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink href="/applications/cleaning" className="text-text-secondary hover:text-primary transition-colors">
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.odor-removal.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1920&q=80"
            alt={t('subcategories.odor-removal.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/cleaning"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.odor-removal.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.odor-removal.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="100%" label="Разрушение" description="Молекул запаха, не маскировка" variant="primary" />
            <StatCard
              value="4-10 ч"
              label="Время обработки"
              description="В зависимости от насыщенности"
              variant="accent"
            />
            <StatCard
              value="30 мин"
              label="Проветривание"
              description="До полной готовности помещения"
              variant="primary"
            />
            <StatCard value="0" label="Химии" description="Только кислород после распада" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Неприятные запахи в помещениях — это не просто дискомфорт. Большинство синтетических и органических
              запахов содержат токсичные вещества: бензол, формальдегид, аммиак, трихлорэтилен. Они канцерогенны и
              мутагенны, вызывают головные боли, усталость, скачки давления.
            </Paragraph>
            <Paragraph>
              Традиционные методы борьбы с запахами — освежители, ароматизаторы, сорбенты — лишь маскируют проблему или
              медленно поглощают молекулы из воздуха. Озонирование работает иначе: озон активно окисляет пахучие
              вещества, разрушая их до безопасных соединений — воды и углекислого газа.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Принцип действия:</strong> Озон (O₃) — сильнейший окислитель, в 3000 раз эффективнее хлора. Он
            атакует молекулы запаха на химическом уровне, необратимо разрушая их структуру. После реакции запах исчезает
            навсегда, пока не появится новый источник.
          </HighlightBox>

          <ArticleSection title="Какие запахи устраняет озон">
            <Paragraph>
              Озонирование эффективно против практически любых органических и неорганических запахов:
            </Paragraph>
            <BulletList
              items={[
                'Табачный дым — въевшийся в стены, мебель, текстиль',
                'Запах после ремонта — краски, клей, натяжные потолки, новая мебель',
                'Затхлость и плесень — в сырых помещениях, подвалах, после затопления',
                'Пищевые запахи — испорченные продукты, рыба, специи',
                'Бытовые запахи — пот, несвежее бельё, домашняя химия',
                'Запах после вечеринки — алкоголь, еда, табак',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Почему озон эффективнее других методов">
            <ComparisonTable
              title="Сравнение методов устранения запахов"
              headers={['Метод', 'Озонирование', 'Освежители/сорбенты']}
              rows={[
                { parameter: 'Принцип действия', value1: 'Разрушение молекул', value2: 'Маскировка/поглощение' },
                { parameter: 'Охват поверхностей', value1: '100% включая скрытые', value2: 'Только воздух' },
                { parameter: 'Въевшиеся запахи', value1: 'Полное устранение', value2: 'Не удаляются' },
                { parameter: 'Длительность эффекта', value1: 'Постоянно', value2: 'Временно' },
                { parameter: 'Химические остатки', value1: 'Нет (только O₂)', value2: 'Да (ароматизаторы)' },
                { parameter: 'Дезинфекция', value1: 'Да (бонус)', value2: 'Нет' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Факторы, влияющие на эффективность">
            <Paragraph>Результат озонирования зависит от правильно подобранного режима обработки:</Paragraph>

            <DataTable
              caption="Рекомендуемые параметры озонирования"
              headers={['Параметр', 'Влияние', 'Рекомендация']}
              rows={[
                ['Концентрация озона', 'Чем выше — тем быстрее результат', '10-80 мг/м³ в зависимости от задачи'],
                ['Температура', 'При низкой T озон стабильнее', 'Оптимально 15-25°C'],
                ['Влажность', 'Высокая влажность ускоряет распад', '40-60% относительной влажности'],
                ['Время обработки', 'Зависит от насыщенности запаха', 'От 2 до 24 часов'],
                ['Герметичность', 'Утечки снижают концентрацию', 'Закрыть окна, двери, вентиляцию'],
              ]}
            />

            <HighlightBox variant="success">
              <strong>Важно:</strong> При температуре 0-5°C озон сохраняет активность несколько суток, а при 50°C
              распадается за 20-30 минут. Это позволяет регулировать интенсивность обработки температурным режимом.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Процесс озонирования помещения">
            <ProcessList
              steps={[
                {
                  title: 'Подготовка помещения',
                  description:
                    'Провести стандартную уборку, удалить видимые источники загрязнения. Убрать комнатные растения, вынести домашних животных. Закрыть окна и отключить приточную вентиляцию.',
                },
                {
                  title: 'Расчёт параметров',
                  description:
                    'Определить объём помещения и требуемую концентрацию озона. Для слабых запахов: 10-20 мг/м³, для средних: 20-40 мг/м³, для сильных: 40-80 мг/м³.',
                },
                {
                  title: 'Озонирование',
                  description:
                    'Установить озонатор, покинуть помещение, запустить обработку на рассчитанное время. Для равномерного распределения озона можно использовать вентилятор.',
                },
                {
                  title: 'Экспозиция',
                  description:
                    'Выдержать озон в помещении от 30 минут до нескольких часов после отключения генератора. Озон продолжает работать, пока не распадётся.',
                },
                {
                  title: 'Проветривание',
                  description:
                    'Открыть окна и двери, включить вытяжную вентиляцию. Проветривать до исчезновения характерного запаха озона (15-60 минут).',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Типичные сценарии применения">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Квартира после жильцов"
                description="Удаление запаха предыдущих владельцев, животных, курения. Подготовка к продаже или сдаче в аренду"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Офис после ремонта"
                description="Устранение запахов краски, клея, новой мебели, пластиковой отделки. Безопасность для сотрудников"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Гостиничный номер"
                description="Быстрая обработка между постояльцами. Удаление запахов табака, парфюма, еды"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Холодильная камера"
                description="Устранение запахов испорченных продуктов, рыбы, мяса. Дезинфекция перед загрузкой"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Преимущества для клининговых компаний">
            <Paragraph>
              Озонирование — дополнительная услуга с высокой маржинальностью. Оборудование окупается за 2-3 месяца:
            </Paragraph>
            <BulletList
              items={[
                'Низкие затраты — озонаторы не требуют расходных материалов',
                'Простота использования — установил, включил, ушёл',
                'Широкий спектр задач — от квартир до промышленных объектов',
                'Измеримый результат — клиент сразу чувствует разницу',
                'Срок службы оборудования — 5-10 лет при правильной эксплуатации',
                'Возможность аренды — дополнительный источник дохода',
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Техника безопасности:</strong> Озонирование проводится в отсутствие людей и животных. Концентрации
              выше 0,1 мг/м³ опасны для лёгких. Персонал должен пройти инструктаж. Рекомендуется использование датчиков
              концентрации озона.
            </HighlightBox>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <CTASection
        title={t('cta.applications.title', { ns: NAMESPACES.common })}
        description={t('cta.applications.text', { ns: NAMESPACES.common })}
        primaryButton={{
          label: t('hero.getConsultation', { ns: NAMESPACES.common }),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('header.phone', { ns: NAMESPACES.common }),
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
