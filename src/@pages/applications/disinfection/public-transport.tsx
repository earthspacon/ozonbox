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

export function PublicTransportPage() {
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
            <span className="text-text-primary font-medium">Общественный транспорт</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80"
            alt="Городской автобус"
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
            Дезинфекция общественного транспорта
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Быстрая и эффективная обработка автобусов, трамваев и троллейбусов. Защита пассажиров от вирусных инфекций без химических остатков.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="20-40"
              label="Минут"
              description="Время обработки одного салона"
              variant="primary"
            />
            <StatCard
              value="12В/24В"
              label="Питание"
              description="Работа от бортовой сети транспорта"
              variant="accent"
            />
            <StatCard
              value="100%"
              label="Охват"
              description="Все поверхности и труднодоступные места"
              variant="primary"
            />
            <StatCard
              value="0"
              label="Расходников"
              description="Никаких химических реагентов"
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
              Общественный транспорт — место повышенного риска передачи инфекций. Ежедневно тысячи пассажиров прикасаются к одним и тем же поручням, сиденьям и кнопкам. Озонирование позволяет быстро и эффективно дезинфицировать салоны автобусов, трамваев и троллейбусов между рейсами или в ночное время.
            </Paragraph>
            <Paragraph>
              В отличие от ручной обработки дезинфицирующими средствами, озон проникает во все щели и труднодоступные места, обеспечивая полную обработку салона. При этом не остаётся химических остатков, которые могут вызвать аллергию у пассажиров.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Преимущество озона:</strong> газ проникает в щели между сиденьями, под обшивку, в систему вентиляции — туда, куда невозможно добраться при ручной уборке. После обработки салон полностью свободен от патогенов.
          </HighlightBox>

          <ArticleSection title="Что дезинфицирует озон в транспорте">
            <BulletList items={[
              'Поручни и перила — основные точки контакта пассажиров',
              'Сиденья и спинки — накапливают бактерии и запахи',
              'Окна и стены — оседает пыль и аэрозольные частицы',
              'Пол салона — скапливается грязь и микроорганизмы',
              'Система вентиляции — распространяет инфекции по салону',
              'Кабина водителя — защита персонала от заболеваний',
            ]} />
          </ArticleSection>

          <ArticleSection title="Режим обработки транспорта">
            <ProcessList steps={[
              {
                title: 'Установка озонатора',
                description: 'Разместите озонатор в пассажирском салоне на максимальной высоте от пола. Закройте все окна и двери.'
              },
              {
                title: 'Запуск обработки',
                description: 'Включите озонатор на 20-40 минут в зависимости от объёма салона. Покиньте транспортное средство.'
              },
              {
                title: 'Экспозиция озона',
                description: 'Озон распространяется по салону, проникая во все щели и труднодоступные места. Уничтожает вирусы, бактерии, плесень.'
              },
              {
                title: 'Проветривание',
                description: 'Откройте двери и окна, проветривайте салон 20 минут. Используйте бортовую систему вентиляции для ускорения.'
              },
            ]} />

            <DataTable
              caption="Рекомендуемые режимы обработки"
              headers={['Тип транспорта', 'Объём салона', 'Производительность', 'Время']}
              rows={[
                ['Маршрутка', '15-25 м³', '5-10 г/ч', '20 мин'],
                ['Городской автобус', '40-60 м³', '20-30 г/ч', '30 мин'],
                ['Сочленённый автобус', '80-100 м³', '30-50 г/ч', '40 мин'],
                ['Трамвай/троллейбус', '50-80 м³', '20-40 г/ч', '35 мин'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Варианты организации обработки">
            <Paragraph>
              Дезинфекцию общественного транспорта можно организовать несколькими способами в зависимости от парка машин и режима работы.
            </Paragraph>

            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Обработка в депо"
                description="Централизованная обработка всего парка в ночное время мощными мобильными озонаторами"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Между рейсами"
                description="Экспресс-обработка на конечных остановках компактными озонаторами"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Стационарная установка"
                description="Настенный озонатор в салоне, работающий от бортовой сети по таймеру"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Мобильная бригада"
                description="Переносные озонаторы для обработки транспорта на линии"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Питание от бортовой сети">
            <Paragraph>
              Озонаторы могут работать от бортовой сети транспорта, что позволяет проводить обработку без подключения к внешнему питанию.
            </Paragraph>

            <DataTable
              caption="Варианты питания озонаторов"
              headers={['Тип питания', 'Применение', 'Преимущества']}
              rows={[
                ['12В DC', 'Маршрутки, микроавтобусы', 'Стандартная бортовая сеть'],
                ['24В DC', 'Автобусы, троллейбусы', 'Повышенная мощность'],
                ['220В AC', 'Депо, парки', 'Максимальная производительность'],
                ['Аккумулятор', 'Мобильные бригады', 'Автономность'],
              ]}
            />

            <HighlightBox variant="success">
              Обработка не требует участия персонала — достаточно включить озонатор и покинуть транспортное средство. Отсутствие расходных материалов снижает эксплуатационные расходы.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Эффективность против патогенов">
            <DataTable
              caption="Время инактивации патогенов в салоне транспорта"
              headers={['Патоген', 'Время при 20 мг/м³', 'Эффективность']}
              rows={[
                ['Коронавирусы (COVID-19)', '10-15 мин', '99,9%'],
                ['Вирусы гриппа', '5-10 мин', '99,9%'],
                ['Staphylococcus aureus', '10-15 мин', '99,9%'],
                ['E. coli', '5-10 мин', '99,9%'],
                ['Плесень и грибки', '15-20 мин', '99%'],
                ['Запахи (органика)', '20-30 мин', '100%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Сравнение методов дезинфекции">
            <ComparisonTable
              title="Озонирование vs химическая обработка"
              headers={['Критерий', 'Озонирование', 'Химическая обработка']}
              rows={[
                { parameter: 'Время обработки', value1: '20-40 мин + проветривание', value2: '15-30 мин' },
                { parameter: 'Охват поверхностей', value1: '100% (включая скрытые)', value2: '60-70% (только доступные)' },
                { parameter: 'Химические остатки', value1: 'Нет', value2: 'Да (могут вызвать аллергию)' },
                { parameter: 'Расходные материалы', value1: 'Нет', value2: 'Да (дезсредства)' },
                { parameter: 'Устранение запахов', value1: 'Полное', value2: 'Частичное (маскировка)' },
                { parameter: 'Участие персонала', value1: 'Минимальное', value2: 'Постоянное' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества для транспортных компаний">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Защита пассажиров"
                description="Снижение риска распространения инфекций в общественном транспорте"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Защита водителей"
                description="Меньше больничных, стабильная работа маршрутов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без химии"
                description="Отсутствие расходов на дезсредства и их хранение"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Автоматизация"
                description="Обработка по таймеру без постоянного контроля"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Требования безопасности">
            <BulletList items={[
              'Обработка только в отсутствие людей в салоне',
              'Водитель и персонал покидают транспорт на время обработки',
              'После обработки — проветривание 20 минут или работа вентиляции',
              'Персонал использует респиратор при входе сразу после обработки',
              'ПДК озона — 0,1 мг/м³ (ощущается как запах «после грозы»)',
            ]} />

            <HighlightBox variant="warning">
              При организации обработки между рейсами убедитесь, что время проветривания учтено в расписании. Пассажиры не должны входить в салон до снижения концентрации озона до безопасного уровня.
            </HighlightBox>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование в вашем автопарке?</h2>
          <p className="cta__text">Получите бесплатную консультацию и расчёт оборудования для вашего транспортного предприятия</p>
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
