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

export function GreenhousesPage() {
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
            <AppLink href="/applications/agriculture" className="text-text-secondary hover:text-primary transition-colors">
              Сельское хозяйство
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Теплицы и растениеводство</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80"
            alt="Теплицы и растениеводство"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10">
          <AppLink href="/applications/agriculture" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>Сельское хозяйство</span>
          </AppLink>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Озонирование в теплицах и растениеводстве
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Повышение урожайности на 13-35%, защита от болезней и вредителей без химических пестицидов. Экологически чистая технология для современного тепличного хозяйства.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="13-35%"
              label="Рост урожайности"
              description="При поливе озонированной водой"
              variant="primary"
            />
            <StatCard
              value="90-98%"
              label="Уничтожение нематоды"
              description="В тепличных грунтах"
              variant="accent"
            />
            <StatCard
              value="30-45%"
              label="Больше кислорода"
              description="Растворённого в воде для полива"
              variant="primary"
            />
            <StatCard
              value="до 30%"
              label="Рост биомассы"
              description="После обеззараживания почвы"
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          
          <ArticleSection>
            <Paragraph>
              В тепличном хозяйстве озон применяется комплексно: для обеззараживания воздуха, поверхностей растений, почвы и воды для полива. Это позволяет повысить урожайность и эффективно бороться с болезнями без применения химических препаратов.
            </Paragraph>
            <Paragraph>
              Озон растворяется в воде в 15 раз лучше кислорода. Полив озонированной водой увеличивает урожайность на 13-35% благодаря улучшению качества почвы, увеличению корневой массы и снижению содержания корневых патогенов.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Научный факт:</strong> Озон в 15 раз более растворим в воде, чем кислород. Это позволяет создавать высокообогащённые растворы для полива, которые насыщают почву кислородом и уничтожают патогены.
          </HighlightBox>

          <ArticleSection title="Направления применения озона в теплицах">
            <BulletList items={[
              'Полив озонированной водой — повышение урожайности и стимуляция роста',
              'Обеззараживание тепличных грунтов — борьба с нематодой и патогенами',
              'Озонирование воздуха — уничтожение грибков, бактерий, вирусов',
              'Защита от насекомых-вредителей — экологичная альтернатива инсектицидам',
              'Предпосевная обработка семян — повышение всхожести и энергии прорастания',
              'Подготовка теплицы к сезону — полная дезинфекция помещения',
            ]} />
          </ArticleSection>

          <ArticleSection title="Полив озонированной водой">
            <Paragraph>
              Полив растений водой, обогащённой озоном, — одна из наиболее эффективных технологий повышения урожайности. Озон быстро разлагается до кислорода, насыщая корневую зону и стимулируя развитие растений.
            </Paragraph>

            <DataTable
              caption="Влияние озонированной воды на урожайность различных культур"
              headers={['Культура', 'Концентрация O₃', 'Прирост урожая', 'Дополнительный эффект']}
              rows={[
                ['Томаты', '0,5-1,0 мг/л', '+18-25%', 'Увеличение размера плодов'],
                ['Огурцы', '0,5-0,8 мг/л', '+15-22%', 'Улучшение вкусовых качеств'],
                ['Перец', '0,5-1,0 мг/л', '+20-28%', 'Повышение лёжкости'],
                ['Салат', '0,3-0,5 мг/л', '+13-18%', 'Улучшение товарного вида'],
                ['Клубника', '0,5-0,8 мг/л', '+22-35%', 'Увеличение сахаристости'],
              ]}
            />

            <HighlightBox variant="success">
              Исследования показывают, что регулярный полив озонированной водой увеличивает корневую массу растений на 15-25%, что обеспечивает лучшее усвоение питательных веществ и устойчивость к стрессам.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Обеззараживание тепличных грунтов">
            <Paragraph>
              Галловая нематода — один из главных врагов тепличных культур. Химические методы борьбы малоэффективны и загрязняют почву. Озонирование грунта концентрированным раствором озона эффективно подавляет нематоду и стимулирует развитие растений.
            </Paragraph>

            <DataTable
              caption="Эффективность озонирования против почвенных патогенов"
              headers={['Патоген', 'Концентрация O₃', 'Время обработки', 'Эффективность']}
              rows={[
                ['Галловая нематода', '3-5 мг/л', '30-60 мин', '90-98%'],
                ['Фузариоз', '2-3 мг/л', '20-30 мин', '95-99%'],
                ['Вертициллёз', '2-3 мг/л', '20-30 мин', '93-97%'],
                ['Корневые гнили', '1,5-2,5 мг/л', '15-25 мин', '90-95%'],
                ['Фитофтора', '2-4 мг/л', '20-40 мин', '96-99%'],
              ]}
            />

            <ProcessList steps={[
              { title: 'Подготовка грунта', description: 'Рыхление почвы для обеспечения проникновения озона. Удаление растительных остатков.' },
              { title: 'Насыщение воды озоном', description: 'Приготовление озонированной воды с концентрацией 3-5 мг/л в специальном реакторе.' },
              { title: 'Пролив грунта', description: 'Равномерное внесение озонированной воды из расчёта 10-15 л/м² площади теплицы.' },
              { title: 'Выдержка', description: 'Время экспозиции 30-60 минут для полного уничтожения патогенов.' },
              { title: 'Посадка растений', description: 'Высадка рассады возможна через 24-48 часов после обработки.' },
            ]} />
          </ArticleSection>

          <ArticleSection title="Озонирование воздуха в теплицах">
            <Paragraph>
              Озонирование воздуха в теплицах уничтожает грибки, бактерии, дрожжи, вирусы и насекомых-вредителей. Высокие концентрации применяются для подготовки теплицы к высадке рассады в отсутствие людей и растений.
            </Paragraph>

            <DataTable
              caption="Режимы озонирования воздуха в теплицах"
              headers={['Назначение', 'Концентрация O₃', 'Время', 'Примечание']}
              rows={[
                ['Профилактика болезней', '0,1-0,3 мг/м³', '2-4 ч/сутки', 'В присутствии растений'],
                ['Борьба с вредителями', '1-2 мг/м³', '4-6 часов', 'Без людей и животных'],
                ['Дезинфекция теплицы', '5-10 мг/м³', '8-12 часов', 'Без растений, перед сезоном'],
                ['Уничтожение плесени', '2-3 мг/м³', '4-8 часов', 'После уборки урожая'],
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Важно:</strong> При обработке теплицы высокими концентрациями озона (более 1 мг/м³) необходимо удалить персонал и обеспечить герметизацию помещения. После обработки требуется проветривание в течение 30-60 минут.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Предпосевная обработка семян">
            <Paragraph>
              Обработка семян озоном повышает всхожесть, энергию прорастания и устойчивость молодых растений к заболеваниям. Технология позволяет отказаться от химических протравителей.
            </Paragraph>

            <DataTable
              caption="Режимы обработки семян озоном"
              headers={['Культура', 'Концентрация O₃', 'Время обработки', 'Результат']}
              rows={[
                ['Томаты', '5-10 мг/м³', '30-60 мин', 'Всхожесть +8-12%'],
                ['Огурцы', '5-8 мг/м³', '20-40 мин', 'Всхожесть +10-15%'],
                ['Перец', '8-12 мг/м³', '40-60 мин', 'Всхожесть +7-10%'],
                ['Капуста', '5-8 мг/м³', '20-30 мин', 'Всхожесть +12-18%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования в теплицах">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экологическая чистота"
                description="Озон разлагается до кислорода без образования вредных соединений — продукция остаётся экологически чистой"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без химии"
                description="Полная замена или значительное сокращение применения пестицидов, фунгицидов и протравителей"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Рост урожайности"
                description="Увеличение урожайности на 13-35% при регулярном поливе озонированной водой"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Борьба с нематодой"
                description="Эффективность 90-98% против галловой нематоды без повреждения почвенной микрофлоры"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Качество продукции"
                description="Улучшение вкусовых качеств, лёжкости и товарного вида выращенной продукции"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономическая выгода"
                description="Окупаемость оборудования за 1-2 сезона за счёт роста урожайности и снижения затрат на химию"
              />
            </FeatureGrid>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование в вашей теплице?</h2>
          <p className="cta__text">Получите бесплатную консультацию и расчёт оборудования для вашего тепличного хозяйства</p>
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
