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

export function WastewaterPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('water-treatment')

  return (
    <Layout>
      <Seo title={t('subcategories.wastewater.title', { ns })} description={t('subcategories.wastewater.shortDesc', { ns })} />
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
            <span className="text-text-primary font-medium">{t('subcategories.wastewater.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1920&q=80"
            alt={t('subcategories.wastewater.title', { ns })}
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
            {t('subcategories.wastewater.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.wastewater.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="95%"
              label="Снижение БПК"
              description="Биохимическое потребление кислорода"
              variant="primary"
            />
            <StatCard
              value="99,9%"
              label="Обеззараживание"
              description="Удаление патогенной микрофлоры"
              variant="accent"
            />
            <StatCard
              value="0"
              label="Токсичных соединений"
              description="В отличие от хлорирования"
              variant="primary"
            />
            <StatCard
              value="80%"
              label="Снижение цветности"
              description="Улучшение прозрачности воды"
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
              Озонирование сточных вод — современный метод глубокой очистки, применяемый как финишная стадия обработки
              перед сбросом в водоёмы или повторным использованием воды. Озон — мощный окислитель, который эффективно
              разрушает сложные органические соединения, обеспечивая обеззараживание без образования токсичных
              хлорорганических соединений.
            </Paragraph>
            <Paragraph>
              Метод особенно эффективен для очистки промышленных стоков, содержащих фенолы, нефтепродукты,
              поверхностно-активные вещества (ПАВ), пестициды и другие трудноокисляемые органические соединения. После
              озонирования вода безопасна для сброса в водоёмы без длительного дехлорирования.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Экологическое преимущество:</strong> В отличие от хлорирования, озон не образует токсичных
            хлорорганических соединений, опасных для экосистем водоёмов. После обработки озон распадается до кислорода,
            дополнительно аэрируя воду.
          </HighlightBox>

          <ArticleSection title="Сравнение методов обеззараживания стоков">
            <ComparisonTable
              headers={['Параметр', 'Озонирование', 'Хлорирование']}
              rows={[
                { parameter: 'Эффективность обеззараживания', value1: '99,9%', value2: '99%' },
                { parameter: 'Окисление органики', value1: 'Высокое', value2: 'Низкое' },
                { parameter: 'Побочные продукты', value1: 'O₂ (безопасен)', value2: 'Хлорорганика (токсичны)' },
                { parameter: 'Необходимость дехлорирования', value1: 'Нет', value2: 'Да' },
                { parameter: 'Влияние на ХПК/БПК', value1: 'Снижает на 50-95%', value2: 'Незначительно' },
                { parameter: 'Удаление цветности', value1: 'Да (до 80%)', value2: 'Нет' },
                { parameter: 'Удаление запаха', value1: 'Да', value2: 'Маскирует' },
                { parameter: 'Безопасность для водоёмов', value1: 'Высокая', value2: 'Требует контроля' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Технические параметры озонирования стоков">
            <DataTable
              caption="Рекомендуемые дозы озона в зависимости от типа стоков"
              headers={['Тип сточных вод', 'Доза озона, мг/л', 'Время контакта, мин']}
              rows={[
                ['Хозяйственно-бытовые (после биоочистки)', '5-15', '10-15'],
                ['Промышленные (органические)', '20-50', '15-30'],
                ['Нефтесодержащие стоки', '30-100', '20-40'],
                ['Фенолсодержащие стоки', '15-30', '15-20'],
                ['Стоки с ПАВ', '10-25', '10-20'],
                ['Стоки пищевых предприятий', '10-20', '10-15'],
              ]}
            />

            <HighlightBox variant="success">
              <strong>Расчёт дозы озона:</strong> 1-3 г озона на 1 г БПК (биохимическое потребление кислорода), 7-10 г
              озона на 1 г нефтепродуктов. Точная доза определяется экспериментально для конкретных стоков.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Технологический процесс очистки стоков">
            <ProcessList
              steps={[
                {
                  title: 'Механическая очистка',
                  description:
                    'Удаление грубых примесей, песка, взвешенных веществ. Обязательный этап перед озонированием.',
                },
                {
                  title: 'Биологическая очистка',
                  description:
                    'Аэробная или анаэробная биоочистка для снижения БПК до 15-30 мг/л. Озонирование применяется после этого этапа.',
                },
                {
                  title: 'Генерация озона',
                  description:
                    'Производство озона из кислорода методом коронного разряда. Концентрация озона в газе: 6-12%.',
                },
                {
                  title: 'Контактная камера',
                  description:
                    'Смешивание озоно-воздушной смеси со стоками через систему барботажа. Время контакта: 10-30 минут в зависимости от загрязнённости.',
                },
                {
                  title: 'Осветление',
                  description: 'Отстаивание или фильтрация для удаления окисленных нерастворимых соединений.',
                },
                {
                  title: 'Контроль качества',
                  description:
                    'Анализ очищенной воды на соответствие нормам сброса: БПК, ХПК, взвешенные вещества, коли-индекс.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Загрязнители, удаляемые озонированием">
            <BulletList
              items={[
                'Фенолы и нитрофенолы: окисление до CO₂ и H₂O, снижение концентрации до ПДК',
                'Нефтепродукты: деструкция до простых органических кислот',
                'ПАВ (поверхностно-активные вещества): разрушение молекулярной структуры',
                'Пестициды и гербициды: окисление до нетоксичных соединений',
                'Красители и пигменты: полное обесцвечивание стоков',
                'Патогенная микрофлора: инактивация бактерий, вирусов, яиц гельминтов',
                'Аммонийный азот: окисление до нитратов',
                'Сероводород и меркаптаны: устранение неприятных запахов',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Результаты озонирования стоков">
            <DataTable
              caption="Эффективность очистки хозбытовых стоков (экспериментальные данные)"
              headers={['Показатель', 'До озонирования', 'После озонирования', 'Эффективность']}
              rows={[
                ['Цветность, градусы', '70-100', '10-20', '80-85%'],
                ['Мутность, мг/л', '30-50', '5-10', '75-80%'],
                ['БПК₅, мг/л', '20-30', '3-5', '85-90%'],
                ['ХПК, мг/л', '50-80', '15-25', '65-70%'],
                ['Коли-индекс', '10 000', '< 1000', '> 90%'],
                ['Запах', 'Болотно-фекальный', 'Отсутствует', '100%'],
              ]}
            />

            <Paragraph>
              Данные получены при обработке стоков дозой озона 50 мг/л в контактной камере с временем контакта 15 минут.
              При подаче озона свыше 50 мг/л исчезает цветность, мутность, запах, коли-индекс снижается до нормативных
              значений.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования сточных вод">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Безотходный процесс"
                description="Озон синтезируется из кислорода воздуха и распадается обратно в кислород. Не требуется закупка и хранение реагентов."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Универсальность"
                description="Эффективен против любых органических загрязнителей: фенолы, нефтепродукты, ПАВ, пестициды."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экологическая безопасность"
                description="Не образует токсичных побочных продуктов. Вода безопасна для сброса в водоёмы без дехлорирования."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Повторное использование"
                description="После озонирования вода может использоваться в технических целях: полив, мойка, охлаждение."
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Области применения">
            <DataTable
              caption="Типы предприятий и особенности озонирования стоков"
              headers={['Отрасль', 'Основные загрязнители', 'Доза озона, мг/л']}
              rows={[
                ['Нефтеперерабатывающие заводы', 'Нефтепродукты, фенолы, сульфиды', '50-100'],
                ['Химические предприятия', 'Органические растворители, ПАВ', '30-80'],
                ['Пищевые производства', 'Жиры, белки, органические кислоты', '15-30'],
                ['Текстильные фабрики', 'Красители, ПАВ', '20-50'],
                ['Целлюлозно-бумажные комбинаты', 'Лигнин, смолы', '30-60'],
                ['Городские очистные сооружения', 'Хозбытовые стоки после биоочистки', '10-20'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Нормативные требования к сбросу">
            <BulletList
              items={[
                'СанПиН 2.1.5.980-00 «Гигиенические требования к охране поверхностных вод»',
                'ПДК вредных веществ в воде водных объектов хозяйственно-питьевого водопользования',
                'Приказ Минприроды России от 17.12.2007 № 333 «Об утверждении методики разработки НДС»',
                'ГОСТ 17.1.3.13-86 «Охрана природы. Гидросфера. Общие требования к охране поверхностных вод от загрязнения»',
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Внимание:</strong> Законодательство предъявляет строгие требования к качеству сбрасываемых стоков.
              Несоблюдение норм влечёт штрафы до 250 000 рублей для юридических лиц. Озонирование позволяет
              гарантированно достичь нормативных показателей.
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
