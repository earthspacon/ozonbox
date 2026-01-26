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
  ComparisonTable,
  ProcessList,
} from '@/shared/ui/article-components'

export function OfficesPage() {
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
            <AppLink href="/applications/disinfection" className="text-text-secondary hover:text-primary transition-colors">
              Дезинфекция
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Офисные помещения</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Современный офис"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10">
          <AppLink href="/applications/disinfection" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>Дезинфекция</span>
          </AppLink>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Озонирование офисных помещений
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Здоровая рабочая среда без вирусов, бактерий и неприятных запахов. Повышение продуктивности сотрудников и снижение заболеваемости.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="2-5x"
              label="Загрязнение"
              description="Воздух в офисе грязнее уличного"
              variant="primary"
            />
            <StatCard
              value="-40%"
              label="Больничные"
              description="Снижение заболеваемости персонала"
              variant="accent"
            />
            <StatCard
              value="1-2 ч"
              label="Обработка"
              description="Достаточно для полной дезинфекции"
              variant="primary"
            />
            <StatCard
              value="0"
              label="Остатков"
              description="Химических веществ после обработки"
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
              Офис — это лицо компании. Загрязнённый воздух с неприятным запахом наносит вред персоналу, снижает трудоспособность и лояльность к работодателю, отрицательно действует на имидж компании среди клиентов и партнёров.
            </Paragraph>
            <Paragraph>
              Учёные выяснили, что в большинстве зданий концентрации вредных и токсичных химических веществ в воздухе в 2-5 раз выше, чем на улице. А в некоторых офисах уровень загрязнения воздуха по отдельным токсинам внутри помещения выше, чем снаружи в 70 раз.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>Источники загрязнения офисного воздуха:</strong> бензол, формальдегид, аммиак выделяются из мебели, ковров, оргтехники и отделочных материалов. Традиционная вентиляция и кондиционирование лишают воздух природной свежести.
          </HighlightBox>

          <ArticleSection title="Проблема качества воздуха в офисах">
            <Paragraph>
              Воздух теряет свою «свежесть» после прохождения через кондиционеры и нагревательные приборы. В результате уровень содержания озона и ионов снижается на 90%. Последствием недостатка этих природных компонентов воздуха стали жалобы людей на частую головную боль, слабость и плохое самочувствие — «синдром закрытых помещений».
            </Paragraph>
            <BulletList items={[
              'Бензол — из красок, ковров, штор и обивки мебели',
              'Аммиак — из табачного дыма и моющих средств',
              'Формальдегид — из фанеры, мебели, ДСП, офисных перегородок',
              'Трихлорэтилен — из краски, клея, мебели и обоев',
              'Хлороформ — из красок, ковров и штор',
            ]} />
          </ArticleSection>

          <ArticleSection title="Эффективность озонирования">
            <Paragraph>
              Исследования показали, что при добавлении в воздух озона до уровня 15 частиц на миллиард (0,03 мг/м³), полученный эффект соответствует прогулке на свежем воздухе в течение двух часов. У сотрудников наблюдалось укрепление иммунной системы, повышение содержания кислорода в крови, улучшение кровяного давления.
            </Paragraph>

            <DataTable
              caption="Результаты исследований воздействия озона в офисах"
              headers={['Показатель', 'До озонирования', 'После озонирования']}
              rows={[
                ['Частота головных болей', 'Часто', 'Редко'],
                ['Работоспособность', '70%', '100%'],
                ['Концентрация внимания', 'Сниженная', 'Нормальная'],
                ['Заболеваемость ОРВИ', '15-20% в сезон', '8-10% в сезон'],
                ['Удовлетворённость атмосферой', '45%', '89%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Что дезинфицирует озон в офисе">
            <Paragraph>
              Озон дезинфицирует все поверхности, к которым прикасаются сотрудники и посетители. Газ проникает в щели и труднодоступные места за оборудованием, в системы вентиляции.
            </Paragraph>

            <BulletList items={[
              'Рабочие столы и столешницы',
              'Подлокотники кресел и стулья',
              'Клавиатуры, мыши, телефоны',
              'Дверные ручки и перила',
              'Оргтехника и кофемашины',
              'Переговорные и коворкинг-зоны',
              'Системы вентиляции и кондиционирования',
            ]} />
          </ArticleSection>

          <ArticleSection title="Режим обработки офисов">
            <Paragraph>
              Озонирование офисов и коворкингов проводится в ночное время. Оборудование работает автоматически по таймеру. К приходу персонала озон выветривается, оставляя лёгкий запах свежести.
            </Paragraph>

            <ProcessList steps={[
              {
                title: 'Подготовка помещения',
                description: 'Закройте все окна и двери. Отключите приточную вентиляцию. Убедитесь, что в помещении нет людей.'
              },
              {
                title: 'Запуск озонатора',
                description: 'Включите озонатор на 40-120 минут в зависимости от объёма помещения. Производительность: 1 г/ч на 25 м³.'
              },
              {
                title: 'Экспозиция',
                description: 'Озон распространяется по помещению, проникая во все щели и дальние углы. Концентрация достигает необходимого уровня.'
              },
              {
                title: 'Проветривание',
                description: 'Через 2-3 часа после окончания обработки озон разложится до безопасного уровня. Активное проветривание не требуется.'
              },
            ]} />

            <DataTable
              caption="Рекомендуемые режимы озонирования офисов"
              headers={['Тип помещения', 'Объём', 'Производительность', 'Время обработки']}
              rows={[
                ['Кабинет', 'до 50 м³', '2-3 г/ч', '60 мин'],
                ['Open space', '100-300 м³', '5-10 г/ч', '90 мин'],
                ['Переговорная', '30-50 м³', '2 г/ч', '40 мин'],
                ['Коворкинг', '200-500 м³', '10-20 г/ч', '120 мин'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Сравнение методов очистки воздуха">
            <ComparisonTable
              title="Озонирование vs другие методы"
              headers={['Параметр', 'Озонирование', 'Химическая уборка']}
              rows={[
                { parameter: 'Дезинфекция воздуха', value1: 'Да', value2: 'Нет' },
                { parameter: 'Труднодоступные места', value1: 'Да (газ проникает везде)', value2: 'Нет' },
                { parameter: 'Нейтрализация токсинов', value1: 'Да', value2: 'Нет' },
                { parameter: 'Устранение запахов', value1: 'Полное', value2: 'Маскировка' },
                { parameter: 'Химические остатки', value1: 'Нет (распад на O₂)', value2: 'Да' },
                { parameter: 'Время восстановления', value1: '2-3 часа', value2: 'Сразу' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества для работодателя">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Снижение больничных"
                description="Уменьшение заболеваемости персонала на 30-40% в сезон ОРВИ"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Рост продуктивности"
                description="Чистый воздух повышает концентрацию и работоспособность"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Имидж компании"
                description="Забота о здоровье сотрудников — элемент корпоративной культуры"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Автоматизация"
                description="Работа по таймеру без участия персонала в ночное время"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Устранение запаха туалета">
            <Paragraph>
              Запах туалета — одна из самых распространённых проблем офисных зданий. Причины могут быть разные: негерметичность соединений труб, «опрокидывание» вентиляции, образование мочевого камня.
            </Paragraph>

            <HighlightBox variant="info">
              Для устранения запаха туалета установите озонатор производительностью 0,5 г/ч для круглосуточного озонирования или 5 г/ч для ночной обработки. Озон разлагает пахнущие органические вещества до простейших соединений без запаха.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Требования безопасности">
            <BulletList items={[
              'Обработка проводится в отсутствие людей',
              'ПДК озона в рабочей зоне — 0,1 мг/м³',
              'После обработки ночью проветривание не требуется',
              'Персонал, открывающий помещение после обработки, использует респиратор',
              'Оборудование работает по таймеру автоматически',
            ]} />
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Создать здоровую атмосферу в вашем офисе?</h2>
          <p className="cta__text">Получите бесплатную консультацию и расчёт оборудования для вашего офиса или коворкинга</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              Получить консультацию
            </AppLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}
