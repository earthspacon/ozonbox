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

export function HospitalsPage() {
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
            <span className="text-text-primary font-medium">Больницы и операционные</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80"
            alt="Операционная"
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
            Озонирование больниц и операционных
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Высочайший уровень стерильности для предотвращения внутрибольничных инфекций. Уничтожение антибиотикорезистентных бактерий без химических остатков.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="99,99%"
              label="Эффективность"
              description="Уничтожение патогенных микроорганизмов"
              variant="primary"
            />
            <StatCard
              value="MRSA"
              label="Убивает"
              description="Антибиотикорезистентные бактерии"
              variant="accent"
            />
            <StatCard
              value="20-30 мин"
              label="Распад озона"
              description="До безопасного уровня кислорода"
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
              Внутрибольничные инфекции (ВБИ) — одна из серьёзнейших проблем современной медицины. По данным ВОЗ, ими заражается 7-10% госпитализированных пациентов в развитых странах и до 25% в развивающихся. Озонирование — эффективный метод борьбы с этой проблемой, обеспечивающий уничтожение патогенов на уровне 99,99%.
            </Paragraph>
            <Paragraph>
              В отличие от химических дезинфектантов, озон не оставляет токсичных остатков, не вызывает привыкания у микроорганизмов и распадается на чистый кислород в течение 20-30 минут после обработки. Это особенно важно для пациентов с ослабленным иммунитетом.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Важно:</strong> Озон эффективен против антибиотикорезистентных штаммов бактерий, включая MRSA (метициллин-резистентный золотистый стафилококк) и VRE (ванкомицин-резистентные энтерококки), которые представляют особую угрозу в медицинских учреждениях.
          </HighlightBox>

          <ArticleSection title="Проблема внутрибольничных инфекций">
            <Paragraph>
              Внутрибольничные инфекции увеличивают срок госпитализации в среднем на 8-10 дней, повышают стоимость лечения и увеличивают летальность. Основные источники ВБИ:
            </Paragraph>
            <BulletList items={[
              'Контактные поверхности: кровати, тумбочки, поручни, кнопки вызова',
              'Медицинское оборудование: мониторы, катетеры, дыхательные контуры',
              'Воздушная среда: аэрозольные частицы при кашле, чихании, медицинских процедурах',
              'Системы вентиляции и кондиционирования',
              'Текстиль: постельное бельё, занавески, халаты',
            ]} />
          </ArticleSection>

          <ArticleSection title="Озонирование операционных блоков">
            <Paragraph>
              Операционные блоки требуют особого санитарного режима. Традиционная уборка с дезинфицирующими средствами не может обеспечить обработку всех поверхностей — озон, будучи газом, проникает в щели оборудования, системы вентиляции, труднодоступные места за приборами.
            </Paragraph>

            <DataTable
              caption="Режимы озонирования операционных"
              headers={['Тип обработки', 'Концентрация', 'Время обработки', 'Периодичность']}
              rows={[
                ['Между операциями', '10-15 мг/м³', '30-40 мин', 'После каждой операции'],
                ['Финальная дезинфекция', '20-25 мг/м³', '60-90 мин', 'В конце рабочего дня'],
                ['После инфекционных случаев', '30-40 мг/м³', '120 мин', 'По показаниям'],
                ['Профилактическая', '10 мг/м³', '60 мин', 'Еженедельно'],
              ]}
            />

            <HighlightBox variant="success">
              После озонирования достаточно 1,5-2 часа проветривания для снижения концентрации озона до безопасного уровня. Помещение готово к использованию без дополнительной обработки.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Дезинфекция палат и реанимаций">
            <Paragraph>
              Палаты интенсивной терапии и реанимации — зоны с повышенным риском передачи инфекций между пациентами. Здесь находятся наиболее уязвимые категории: пациенты на ИВЛ, после операций, с иммунодефицитом.
            </Paragraph>

            <ProcessList steps={[
              {
                title: 'Подготовка помещения',
                description: 'Вывод пациентов (если возможно) или использование изолированных зон. Закрытие окон и дверей, отключение приточной вентиляции.'
              },
              {
                title: 'Озонирование',
                description: 'Включение озонатора на расчётное время. Концентрация 15-20 мг/м³ обеспечивает уничтожение большинства патогенов.'
              },
              {
                title: 'Экспозиция',
                description: 'Выдержка заданной концентрации в течение 30-60 минут для полной дезинфекции всех поверхностей.'
              },
              {
                title: 'Проветривание',
                description: 'Открытие вентиляции, проветривание помещения до снижения концентрации озона ниже ПДК (0,1 мг/м³).'
              },
            ]} />
          </ArticleSection>

          <ArticleSection title="Эффективность против патогенов">
            <Paragraph>
              Озон уничтожает практически все виды патогенных микроорганизмов, встречающихся в медицинских учреждениях:
            </Paragraph>

            <DataTable
              caption="Время инактивации патогенов озоном (концентрация 20 мг/м³)"
              headers={['Микроорганизм', 'Время инактивации', 'Эффективность']}
              rows={[
                ['Staphylococcus aureus (MRSA)', '10-15 мин', '99,99%'],
                ['Escherichia coli', '5-10 мин', '99,99%'],
                ['Pseudomonas aeruginosa', '15-20 мин', '99,99%'],
                ['Candida albicans', '15-20 мин', '99,9%'],
                ['Aspergillus niger (споры)', '30-40 мин', '99,9%'],
                ['Clostridium difficile (споры)', '40-60 мин', '99,9%'],
                ['Вирусы гриппа', '5-10 мин', '99,99%'],
                ['Коронавирусы', '10-15 мин', '99,99%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Сравнение методов дезинфекции">
            <ComparisonTable
              title="Озонирование vs традиционные методы"
              headers={['Параметр', 'Озонирование', 'Химическая дезинфекция']}
              rows={[
                { parameter: 'Охват поверхностей', value1: '100% (включая труднодоступные)', value2: '70-80% (только доступные)' },
                { parameter: 'Токсичные остатки', value1: 'Нет (распадается на O₂)', value2: 'Да (требуют смывания)' },
                { parameter: 'Устойчивость бактерий', value1: 'Не формируется', value2: 'Формируется при частом использовании' },
                { parameter: 'Воздействие на воздух', value1: 'Да (дезинфекция воздуха)', value2: 'Нет' },
                { parameter: 'Необходимость уборки после', value1: 'Нет', value2: 'Да (протирка, смывание)' },
                { parameter: 'Безопасность для персонала', value1: 'Да (при соблюдении режима)', value2: 'Риск аллергии и раздражения' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования в медицине">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без резистентности"
                description="Озон воздействует на клеточные мембраны — бактерии не могут выработать устойчивость"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Полный охват"
                description="Газ проникает везде: в щели, за оборудование, в вентиляцию, под мебель"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без остатков"
                description="Распадается на кислород — не требует смывания, безопасен для пациентов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Соответствие СанПиН"
                description="Метод рекомендован российскими санитарными нормами для медучреждений"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Требования безопасности">
            <Paragraph>
              При озонировании медицинских помещений необходимо соблюдать требования безопасности:
            </Paragraph>
            <BulletList items={[
              'Обработка проводится в отсутствие людей и животных',
              'Помещение должно быть герметизировано на время обработки',
              'Персонал, работающий с озонаторами, должен пройти инструктаж',
              'После обработки — обязательное проветривание до ПДК (0,1 мг/м³)',
              'Рекомендуется использование датчиков концентрации озона',
              'Ведение журнала обработок для контроля и отчётности',
            ]} />

            <HighlightBox variant="warning">
              ПДК озона в рабочей зоне — 0,1 мг/м³. При превышении ощущается характерный запах «после грозы». Современные озонаторы оснащены таймерами и системами автоматического отключения.
            </HighlightBox>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование в вашем медучреждении?</h2>
          <p className="cta__text">Получите бесплатную консультацию и расчёт оборудования для операционных, палат и реанимаций</p>
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
