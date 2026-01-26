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
} from '@/shared/ui/article-components'

export function HotelsPage() {
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
            <span className="text-text-primary font-medium">Гостиницы и отели</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
            alt="Гостиничный номер"
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
            Озонирование гостиниц и отелей
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Полная дезинфекция номеров и устранение запахов за 30-60 минут. Ощущение свежести без ароматизаторов.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="30-60"
              label="Минут обработки"
              description="Полный цикл дезинфекции номера"
              variant="primary"
            />
            <StatCard
              value="100%"
              label="Устранение запахов"
              description="Табак, пот, затхлость, еда"
              variant="accent"
            />
            <StatCard
              value="99,9%"
              label="Дезинфекция"
              description="Уничтожение бактерий и вирусов"
              variant="primary"
            />
            <StatCard
              value="0"
              label="Химии"
              description="Без ароматизаторов и освежителей"
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
              Гостиничный бизнес — это прежде всего впечатления гостей. Запах прокуренного номера, затхлость, посторонние ароматы способны испортить впечатление от самого роскошного отеля. Озонирование решает эту проблему радикально — не маскируя запахи, а уничтожая их на молекулярном уровне.
            </Paragraph>
            <Paragraph>
              Помимо устранения запахов, озон дезинфицирует все поверхности номера: матрасы, подушки, шторы, ковры, мягкую мебель. Газ проникает в структуру материалов, уничтожая бактерии, вирусы, пылевых клещей и споры плесени.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Автоматизация:</strong> Современные озонаторы оснащены недельными таймерами. Обработка может запускаться автоматически после уборки номера, без участия персонала.
          </HighlightBox>

          <ArticleSection title="Проблемы, решаемые озонированием">
            <BulletList items={[
              'Запах табака и кальяна — полное устранение, а не маскировка',
              'Затхлость и сырость — особенно актуально для номеров без естественной вентиляции',
              'Запах пота, парфюмерии предыдущих гостей',
              'Кулинарные ароматы из room-service',
              'Запахи домашних животных (pet-friendly отели)',
              'Бактерии и вирусы на контактных поверхностях',
              'Пылевые клещи в текстиле — профилактика аллергии',
            ]} />
          </ArticleSection>

          <ArticleSection title="Процесс озонирования номера">
            <ProcessList steps={[
              {
                title: 'Стандартная уборка',
                description: 'Номер проходит обычную уборку: смена белья, протирка поверхностей, пылесос.'
              },
              {
                title: 'Установка озонатора',
                description: 'Переносной озонатор размещается на максимальной высоте (на шкафу, полке). Закрываются окна и двери.'
              },
              {
                title: 'Озонирование',
                description: 'Запускается обработка. Стандартный режим: 30-60 минут при производительности 1 г/ч на 25 м³.'
              },
              {
                title: 'Проветривание',
                description: 'После обработки — проветривание 20-30 минут. Озон распадается до кислорода, оставляя ощущение свежести.'
              },
            ]} />

            <DataTable
              caption="Режимы озонирования гостиничных номеров"
              headers={['Ситуация', 'Концентрация', 'Время', 'Результат']}
              rows={[
                ['Стандартная обработка', '5-10 мг/м³', '30 мин', 'Освежение, лёгкая дезинфекция'],
                ['После курильщика', '15-20 мг/м³', '60-90 мин', 'Полное устранение запаха'],
                ['Сильное загрязнение', '20-30 мг/м³', '2-3 часа', 'Глубокая дезодорация'],
                ['После инфекционного гостя', '25-35 мг/м³', '2-4 часа', 'Полная дезинфекция'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Что обрабатывается озоном">
            <Paragraph>
              Озон, будучи газом, проникает во все места, недоступные для традиционной уборки:
            </Paragraph>
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Текстиль"
                description="Матрасы, подушки, одеяла, шторы, обивка мебели, ковровые покрытия"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Мебель"
                description="Внутренние полости шкафов, щели, декоративные элементы, подлокотники"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Вентиляция"
                description="Воздуховоды, решётки, система кондиционирования — источник запахов и бактерий"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Санузел"
                description="Плитка, затирка швов, сантехника — места скопления бактерий и плесени"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Преимущества для отеля">
            <BulletList items={[
              'Повышение рейтингов на Booking, TripAdvisor — отзывы о чистоте и свежести',
              'Снижение жалоб гостей на запахи — особенно в номерах для курящих',
              'Профилактика передачи инфекций между гостями',
              'Возможность быстрой сдачи номеров — обработка за время между check-out и check-in',
              'Снижение затрат на ароматизаторы и освежители воздуха',
              'Продление срока службы текстиля — устранение запахов без химчистки',
            ]} />

            <HighlightBox variant="success">
              Исследования показывают: 87% гостей отмечают «свежесть номера» как важный фактор при оценке отеля. Озонирование создаёт ощущение «только что отремонтированного» номера.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Оборудование для гостиниц">
            <Paragraph>
              Для гостиниц рекомендуются переносные озонаторы, которые персонал перемещает из номера в номер после уборки. Это оптимальное решение по соотношению цена/эффективность.
            </Paragraph>
            <DataTable
              headers={['Тип отеля', 'Рекомендуемое оборудование', 'Количество']}
              rows={[
                ['Мини-отель (до 20 номеров)', 'Переносной озонатор 5-10 г/ч', '1-2 шт'],
                ['Средний отель (20-100 номеров)', 'Переносные озонаторы 10-20 г/ч', '3-5 шт'],
                ['Крупный отель (100+ номеров)', 'Парк озонаторов + стационарные в общих зонах', 'По расчёту'],
              ]}
            />
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Повысить рейтинг вашего отеля?</h2>
          <p className="cta__text">Получите бесплатную консультацию и расчёт оборудования для вашей гостиницы</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              Получить консультацию
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
