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
} from '@/shared/ui/article-components'

export function DentalPage() {
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
            <AppLink href="/applications/medicine" className="text-text-secondary hover:text-primary transition-colors">
              Медицина
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Стоматология</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
            alt="Стоматологический кабинет"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10">
          <AppLink href="/applications/medicine" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>Медицина</span>
          </AppLink>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Озонирование в стоматологии
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Дезинфекция кабинетов между пациентами за 15-20 минут. Стерилизация инструментов. Терапевтическое применение озона.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="15-20"
              label="Минут"
              description="Дезинфекция кабинета между пациентами"
              variant="primary"
            />
            <StatCard
              value="99,9%"
              label="Патогенов"
              description="Уничтожается при обработке"
              variant="accent"
            />
            <StatCard
              value="100%"
              label="Охват"
              description="Всех поверхностей и оборудования"
              variant="primary"
            />
            <StatCard
              value="Озонотерапия"
              label="Лечение"
              description="Кариеса и болезней пародонта"
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
              Стоматологические процедуры сопряжены с высоким риском передачи инфекций: аэрозоли при работе турбинного наконечника, контакт с кровью и слюной, большое количество пациентов ежедневно. Озонирование обеспечивает быструю и эффективную дезинфекцию кабинета, а также находит применение в терапии.
            </Paragraph>
            <Paragraph>
              Помимо дезинфекции помещений, озон активно используется в лечебных целях: обработка кариозных полостей, лечение заболеваний пародонта, дезинфекция корневых каналов. Озонотерапия — признанное направление современной стоматологии.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Особенность стоматологии:</strong> При работе турбинного наконечника образуется мелкодисперсный аэрозоль, содержащий бактерии и вирусы из полости рта пациента. Этот аэрозоль распространяется по всему кабинету и оседает на поверхностях.
          </HighlightBox>

          <ArticleSection title="Направления применения озона в стоматологии">
            <BulletList items={[
              'Дезинфекция кабинета между приёмами пациентов',
              'Финальная обработка кабинета в конце рабочего дня',
              'Очистка систем подачи воды в стоматологических установках',
              'Озонотерапия: лечение кариеса без сверления',
              'Обработка корневых каналов',
              'Лечение заболеваний пародонта',
              'Дезинфекция съёмных протезов',
            ]} />
          </ArticleSection>

          <ArticleSection title="Дезинфекция стоматологического кабинета">
            <Paragraph>
              Озонирование позволяет быстро дезинфицировать кабинет во время технологических перерывов между пациентами. За 15-20 минут озон уничтожает патогены на всех поверхностях и в воздухе.
            </Paragraph>

            <DataTable
              caption="Режимы озонирования стоматологического кабинета"
              headers={['Тип обработки', 'Концентрация', 'Время', 'Периодичность']}
              rows={[
                ['Между пациентами', '5-10 мг/м³', '15-20 мин', 'После каждого приёма'],
                ['Обеденный перерыв', '10-15 мг/м³', '30-40 мин', 'Ежедневно'],
                ['Конец рабочего дня', '15-20 мг/м³', '60 мин', 'Ежедневно'],
                ['После инфекционного пациента', '20-30 мг/м³', '60-90 мин', 'По показаниям'],
              ]}
            />

            <HighlightBox variant="success">
              Озон проникает в труднодоступные места оборудования: шланги, наконечники, системы подачи воды — те места, где традиционная протирка невозможна.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Озонотерапия в стоматологии">
            <Paragraph>
              Терапевтическое применение озона в стоматологии — одно из наиболее развитых направлений озонотерапии. Озон обладает выраженным бактерицидным, противовирусным и фунгицидным действием.
            </Paragraph>

            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Лечение кариеса"
                description="На начальных стадиях озон уничтожает бактерии и останавливает развитие кариеса без сверления"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Обработка каналов"
                description="Озонированная вода и газ для дезинфекции корневых каналов перед пломбированием"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Лечение пародонтита"
                description="Обработка пародонтальных карманов озоном снижает воспаление и уничтожает патогены"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Заживление ран"
                description="Ускорение заживления после экстракции зубов, имплантации, хирургических вмешательств"
              />
            </FeatureGrid>

            <DataTable
              caption="Применение озона в терапевтической стоматологии"
              headers={['Показание', 'Метод', 'Эффект']}
              rows={[
                ['Начальный кариес', 'Газ 40-60 сек на очаг', 'Реминерализация, остановка процесса'],
                ['Глубокий кариес', 'Газ + озонированная вода', 'Стерилизация полости перед пломбой'],
                ['Пульпит', 'Озонированная вода в канале', 'Снятие воспаления'],
                ['Пародонтит', 'Газ в карманы + ирригация', 'Снижение кровоточивости на 80%'],
                ['Стоматит', 'Озонированная вода, полоскания', 'Заживление за 3-5 дней'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Обработка систем подачи воды">
            <Paragraph>
              В трубопроводах стоматологических установок образуются биоплёнки — колонии бактерий, включая легионеллу и синегнойную палочку. Озонированная вода эффективно разрушает биоплёнки и дезинфицирует систему.
            </Paragraph>
            <BulletList items={[
              'Прокачка озонированной воды (2-3 мг/л) через систему в конце дня',
              'Разрушение биоплёнок на внутренних поверхностях трубопроводов',
              'Дезинфекция ёмкостей и фильтров',
              'Улучшение качества воды для ирригации',
            ]} />
          </ArticleSection>

          <ArticleSection title="Преимущества для стоматологической клиники">
            <BulletList items={[
              'Быстрая оборачиваемость кабинетов — дезинфекция во время перерывов',
              'Профилактика перекрёстного заражения между пациентами',
              'Отсутствие химических запахов после обработки — комфорт пациентов',
              'Дополнительная услуга — озонотерапия как современный метод лечения',
              'Соответствие санитарным требованиям к стоматологическим клиникам',
              'Снижение затрат на дезинфицирующие средства',
            ]} />

            <HighlightBox variant="success">
              Пациенты отмечают приятную атмосферу в кабинете после озонирования — свежий воздух без специфических «больничных» запахов. Это повышает лояльность и комфорт посещения.
            </HighlightBox>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование в вашей клинике?</h2>
          <p className="cta__text">Получите бесплатную консультацию по оборудованию для стоматологии</p>
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
