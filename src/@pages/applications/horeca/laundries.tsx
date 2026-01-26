import Image from 'next/image'
import { Layout } from '@/widgets'
import { AppLink } from '@/shared/ui/app-link'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import {
  StatCard,
  StatGrid,
  HighlightBox,
  DataTable,
  ArticleSection,
  Paragraph,
  BulletList,
  FeatureCard,
  FeatureGrid,
  ProcessList,
  ComparisonTable,
} from '@/shared/ui/article-components'

export function LaundriesPage() {
  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-b border-border">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              Применение
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink href="/applications/horeca" className="text-text-secondary hover:text-primary transition-colors">
              HoReCa
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Коммерческие прачечные</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1920&q=80"
            alt="Коммерческая прачечная"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10">
          <AppLink href="/applications/horeca" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>HoReCa</span>
          </AppLink>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Озонирование для прачечных
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Стирка в холодной воде с полной дезинфекцией. Снижение затрат на энергию и химию до 70%.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="70-100%"
              label="Экономия на нагреве"
              description="Стирка в холодной воде"
              variant="primary"
            />
            <StatCard
              value="30-50%"
              label="Экономия химии"
              description="Меньше порошка и отбеливателя"
              variant="accent"
            />
            <StatCard
              value="+30%"
              label="Срок службы белья"
              description="Без агрессивной химии и нагрева"
              variant="primary"
            />
            <StatCard
              value="99,9%"
              label="Дезинфекция"
              description="Даже в холодной воде"
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
              Озонирование воды в прачечных — прогрессивная технология, которая позволяет существенно снизить затраты на порошки, горячую воду, уменьшить износ белья и время стирки. Озон растворяется в воде и применяется вместо части химических средств, обеспечивая превосходное качество очистки.
            </Paragraph>
            <Paragraph>
              Это фундаментальное нововведение в подходе к стирке: вы заменяете агрессивную химию на то, что работает гораздо лучше. Настолько лучше, что можно также сократить расход воды и времени, достигая при этом превосходных результатов.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="success">
            <strong>Принцип работы:</strong> Озон — мощный окислитель. С небольшим количеством щёлочи, холодной воды и моющего средства можно достичь очистки и яркости, равной или большей, чем с хлором и горячей водой.
          </HighlightBox>

          <ArticleSection title="Экономические эффекты">
            <ComparisonTable
              title="Сравнение традиционной и озоновой стирки"
              headers={['Параметр', 'Озоновая стирка', 'Традиционная']}
              rows={[
                { parameter: 'Температура воды', value1: 'Холодная (15-25°C)', value2: 'Горячая (60-90°C)' },
                { parameter: 'Расход электроэнергии', value1: 'На 70-100% меньше', value2: 'Базовый' },
                { parameter: 'Расход моющих средств', value1: 'На 30-50% меньше', value2: 'Базовый' },
                { parameter: 'Расход воды', value1: 'На 20-40% меньше', value2: 'Базовый' },
                { parameter: 'Износ белья', value1: 'Минимальный', value2: 'Повышенный' },
                { parameter: 'Дезинфекция', value1: '99,9%', value2: '95-98%' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Почему холодная вода эффективнее">
            <Paragraph>
              Качество стирки зависит от 4 факторов: температуры воды, химических веществ, времени стирки и механического воздействия. Используя озон, можно заменить химию и температуру на более эффективное решение.
            </Paragraph>
            <BulletList items={[
              'Озон создаёт гидроксильные радикалы (OH) при pH 8 в холодной воде — те же, что и при высоком pH с горячей водой',
              'Чем холоднее вода, тем стабильнее озон и тем дольше он работает',
              'При температуре выше 95°C озон теряет эффективность из-за ускоренного распада',
              'Холодная вода не повреждает волокна ткани — бельё служит дольше',
              'Отсутствие хлорного отбеливателя с горячей водой предотвращает химические реакции, повреждающие ткань',
            ]} />
          </ArticleSection>

          <ArticleSection title="Технологический процесс">
            <DataTable
              caption="Сравнение компонентов стирки"
              headers={['Традиционная прачечная', 'Прачечная с озонатором']}
              rows={[
                ['Горячая вода', 'Холодная вода'],
                ['Щёлочь', 'Озон'],
                ['Моющее средство', 'Моющее средство (меньше)'],
                ['Кислота (нейтрализация)', '—'],
                ['Отбеливатель', '—'],
              ]}
            />
            <Paragraph>
              Озон самопроизвольно распадается до кислорода и не требует удаления в отличие от традиционных химических веществ. Это позволяет сократить количество полосканий на 20-40%.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования в прачечной">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия энергии"
                description="Снижение затрат на подогрев воды на 70-100%. Стирка полностью в холодной воде."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Улучшенная дезинфекция"
                description="Озон эффективно уничтожает вирусы и бактерии даже при низкой температуре."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Мягкое бельё"
                description="В волокнах не остаются химические вещества. Бельё становится мягче."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Лучшее отбеливание"
                description="Сильные окислительные свойства озона обеспечивают яркость без хлора."
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Озоновые шкафы для химчисток">
            <Paragraph>
              Для химчисток используются озоновые шкафы — герметичные камеры, заполняемые озоном высокой концентрации. Будучи газом, озон проникает в структуру самых плотных тканей и труднодоступные места.
            </Paragraph>
            <ProcessList steps={[
              {
                title: 'Обработка сложных вещей',
                description: 'Театральные костюмы, винтаж, меховые шубы, кожаные куртки, мотошлемы, хоккейная форма. Нет механического воздействия и нагрева — минимальный риск повреждения.'
              },
              {
                title: 'Удаление запахов (дезодорация)',
                description: 'Гарь после пожара, въевшийся табачный дым, трупный запах, запахи животных, затхлость. Озон уничтожает причину запаха на молекулярном уровне.'
              },
              {
                title: 'Дезинфекция',
                description: 'Разрушает клеточные мембраны бактерий, оболочки вирусов и споры грибков. Идеально для детских вещей и постельных принадлежностей.'
              },
              {
                title: 'Монетизация',
                description: 'Услуга продаётся как дополнительная опция (upsell) или как отдельный VIP-сервис. Себестоимость цикла минимальна.'
              },
            ]} />
          </ArticleSection>

          <ArticleSection title="Подбор оборудования">
            <DataTable
              headers={['Тип прачечной', 'Рекомендуемое оборудование', 'Стоимость']}
              rows={[
                ['Небольшая прачечная', 'Озонаторная установка 5 г/час', 'от 250 000 ₽'],
                ['Гостиничная прачечная', 'Озонаторная установка 10 г/час', 'от 320 000 ₽'],
                ['Коммерческая прачечная', 'Озонаторная установка 20 г/час', 'от 420 000 ₽'],
                ['Химчистка (шкаф 700 л)', 'Озоновый шкаф ОЗ-1С', 'от 420 000 ₽'],
                ['Химчистка (шкаф 1400 л)', 'Озоновый шкаф ОЗ-2С', 'от 500 000 ₽'],
              ]}
            />

            <HighlightBox variant="info">
              <strong>Важно:</strong> Расчёт производительности озонатора зависит от объёма загрязнений, качества воды и характеристик оборудования. Для точного подбора может потребоваться пилотный проект.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Ограничения технологии">
            <Paragraph>
              В некоторых случаях всё равно придётся использовать небольшое количество горячей воды. Холодная вода не подходит для работы с жирными пятнами (помада, крем для обуви, чернила) из-за физической природы жира при низких температурах.
            </Paragraph>
            <BulletList items={[
              'Сильно загрязнённое бельё с жирными пятнами требует отдельной программы с горячей заливкой',
              'Такие загрузки обычно составляют очень небольшой процент от общего объёма',
              'Для остальных 90%+ белья озоновая стирка в холодной воде — оптимальное решение',
            ]} />
          </ArticleSection>

          <ArticleSection title="ROI и окупаемость">
            <BulletList items={[
              'Снижение счетов за электроэнергию на 50-70% (нагрев воды — основная статья расходов)',
              'Экономия на моющих средствах и отбеливателях — 30-50%',
              'Продление срока службы белья на 30%+ (меньше замен)',
              'Сокращение времени стирки — больше циклов в день',
              'Типичный срок окупаемости: 12-18 месяцев',
            ]} />
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Снизить операционные расходы прачечной?</h2>
          <p className="cta__text">Получите бесплатный расчёт экономии и подбор оборудования для вашей прачечной</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              Получить расчёт
            </AppLink>
            <a href="tel:+78001234567" className="btn btn--secondary btn--large" style={{ borderColor: 'white', color: 'white' }}>
              Позвонить: 8 (800) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
