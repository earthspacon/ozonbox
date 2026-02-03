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

export function DrinkingWaterPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('water-treatment')

  return (
    <Layout>
      <Seo title={t('subcategories.drinking-water.title', { ns })} description={t('subcategories.drinking-water.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/water-treatment"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.drinking-water.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1920&q=80"
            alt={t('subcategories.drinking-water.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/water-treatment"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.drinking-water.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.drinking-water.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="99,99%" label="Обеззараживание" description="Уничтожение патогенов" variant="primary" />
            <StatCard value="0" label="Побочных продуктов" description="Канцерогенных соединений" variant="accent" />
            <StatCard value="3000×" label="Сильнее хлора" description="Бактерицидная активность" variant="primary" />
            <StatCard value="O₂" label="Распад" description="Только чистый кислород" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Озонирование питьевой воды — стандарт качества в развитых странах мира. Озон уничтожает все виды
              патогенов: бактерии, вирусы, споры и цисты простейших с эффективностью до 99,99%. В отличие от
              хлорирования, озон не образует канцерогенных тригалометанов и других опасных побочных продуктов.
            </Paragraph>
            <Paragraph>
              Озон — самый сильный из применяемых в водоподготовке окислителей. По бактерицидному действию он
              превосходит хлор в 3000 раз, при этом остаточный озон распадается до кислорода за 20-30 минут, не оставляя
              химических следов в воде.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>СанПиН 2.1.4.1074-01:</strong> Учитывая опасность побочных продуктов хлорирования
            (галогеносодержащих соединений), следует отдавать предпочтение альтернативным методам обеззараживания. Озон
            официально рекомендован как более безопасная альтернатива.
          </HighlightBox>

          <ArticleSection title="Сравнение методов обеззараживания воды">
            <ComparisonTable
              headers={['Параметр', 'Озонирование', 'Хлорирование']}
              rows={[
                { parameter: 'Эффективность против бактерий', value1: '99,99%', value2: '99,5%' },
                { parameter: 'Эффективность против вирусов', value1: '99,99%', value2: '90-95%' },
                { parameter: 'Эффективность против цист', value1: '99,9%', value2: '< 50%' },
                { parameter: 'Время обеззараживания', value1: '2-10 минут', value2: '30-60 минут' },
                { parameter: 'Побочные продукты', value1: 'Нет (O₂)', value2: 'Тригалометаны (канцерогены)' },
                { parameter: 'Влияние на вкус', value1: 'Улучшает', value2: 'Запах хлорки' },
                { parameter: 'Влияние на цветность', value1: 'Снижает', value2: 'Не влияет' },
                { parameter: 'Пролонгированное действие', value1: 'Нет', value2: 'Да' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Технические параметры озонирования">
            <DataTable
              caption="Рекомендуемые параметры для питьевой воды"
              headers={['Параметр', 'Значение', 'Нормативный документ']}
              rows={[
                ['Доза озона', '1-3 мг/л', 'В зависимости от качества воды'],
                ['Остаточный озон', '0,1-0,3 мг/л', 'СанПиН 2.1.4.1074-01'],
                ['Время контакта', '4-10 минут', 'При температуре 10-20°C'],
                ['pH воды', '6,5-8,5', 'Оптимальный диапазон'],
                ['Температура воды', '4-25°C', 'Эффективный диапазон'],
                ['Мутность исходной воды', '< 2 НТU', 'Рекомендация'],
              ]}
            />

            <HighlightBox variant="info">
              <strong>Важно:</strong> Доза озона 1-3 мг/л обеспечивает полное обеззараживание воды. При высокой
              органической нагрузке дозу увеличивают до 5 мг/л для окисления органических соединений.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Технологический процесс озонирования">
            <ProcessList
              steps={[
                {
                  title: 'Предварительная очистка',
                  description:
                    'Удаление механических примесей и взвесей. Мутность воды должна быть < 2 НТU для эффективного озонирования.',
                },
                {
                  title: 'Генерация озона',
                  description:
                    'Получение озона из очищенного воздуха или кислорода методом коронного разряда. Концентрация озона в газе: 8-12% (из кислорода) или 2-3% (из воздуха).',
                },
                {
                  title: 'Растворение озона',
                  description:
                    'Смешивание озоно-воздушной смеси с водой через эжектор или барботёр. Эффективность растворения: 85-95%.',
                },
                {
                  title: 'Контактная камера',
                  description:
                    'Выдержка воды в контактной камере 4-10 минут для завершения реакций окисления и обеззараживания.',
                },
                {
                  title: 'Дегазация',
                  description:
                    'Удаление остаточного озона из воды перед подачей в распределительную сеть. Остаточная концентрация: < 0,1 мг/л.',
                },
                {
                  title: 'Постхлорирование (опционально)',
                  description:
                    'Добавление минимальной дозы хлора (0,3-0,5 мг/л) для пролонгированного эффекта в распределительной сети.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Что уничтожает озон в питьевой воде">
            <BulletList
              items={[
                'Бактерии: E.coli, сальмонелла, холерный вибрион, легионелла — 99,99% за 2 минуты',
                'Вирусы: гепатит А, ротавирусы, энтеровирусы, норовирусы — 99,99% за 4 минуты',
                'Простейшие: лямблии, криптоспоридии (устойчивы к хлору!) — 99,9% за 5 минут',
                'Споры бактерий: сибирская язва, клостридии — 99% за 10 минут',
                'Органические загрязнения: фенолы, пестициды, нефтепродукты — окисление до CO₂ и H₂O',
                'Железо и марганец: окисление до нерастворимых форм для последующей фильтрации',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Эффективность обеззараживания">
            <DataTable
              caption="Время инактивации патогенов (CT-значение, мг×мин/л)"
              headers={['Патоген', 'Озон', 'Хлор', 'УФ (мДж/см²)']}
              rows={[
                ['E. coli', '0,02', '0,4', '7'],
                ['Вирус полиомиелита', '0,3', '1,7', '30'],
                ['Ротавирус', '0,4', '3,5', '40'],
                ['Лямблии (цисты)', '0,6', '50', '80'],
                ['Криптоспоридии', '3,0', '> 7200', '12'],
              ]}
            />

            <HighlightBox variant="success">
              Озон особенно эффективен против криптоспоридий — паразитов, вызывающих диарею. Они практически не
              поддаются хлорированию (для инактивации нужно более 7200 мг×мин/л хлора), но уязвимы для озона.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования питьевой воды">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Безопасность"
                description="Не образует канцерогенных побочных продуктов. Распад до кислорода за 20-30 минут."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Эффективность"
                description="Уничтожает 99,99% патогенов, включая устойчивые к хлору криптоспоридии."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Улучшение качества"
                description="Устраняет неприятные привкусы и запахи, улучшает цветность воды."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Соответствие нормам"
                description="Полное соответствие СанПиН 2.1.4.1074-01 и международным стандартам."
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Производительность систем озонирования">
            <DataTable
              caption="Рекомендуемое оборудование для водоподготовки"
              headers={['Производительность станции', 'Мощность озонатора', 'Контактная камера']}
              rows={[
                ['10 м³/час', '20-30 г/ч', '1-2 м³'],
                ['50 м³/час', '100-150 г/ч', '5-10 м³'],
                ['100 м³/час', '200-300 г/ч', '10-20 м³'],
                ['500 м³/час', '1000-1500 г/ч', '50-100 м³'],
                ['1000 м³/час', '2000-3000 г/ч', '100-200 м³'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Нормативная база">
            <BulletList
              items={[
                'СанПиН 2.1.4.1074-01 «Питьевая вода. Гигиенические требования к качеству воды»',
                'СанПиН 2.1.4.1116-02 «Питьевая вода. Гигиенические требования к качеству воды, расфасованной в ёмкости»',
                'ГОСТ Р 51232-98 «Вода питьевая. Общие требования к организации и методам контроля качества»',
                'МУК 4.3.2030-05 «Методы контроля. Физические факторы. Озон и его гигиеническое регламентирование»',
                'ГН 2.1.5.1315-03 «Предельно допустимые концентрации химических веществ в воде водных объектов»',
              ]}
            />
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
