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

export function SportsFacilitiesPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('disinfection')

  return (
    <Layout>
      <Seo title={t('subcategories.sports-facilities.title', { ns })} description={t('subcategories.sports-facilities.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/disinfection"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.sports-facilities.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt={t('subcategories.sports-facilities.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/disinfection"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.sports-facilities.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.sports-facilities.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="2-3 ч" label="Обработка" description="Время озонирования спортзала" variant="primary" />
            <StatCard value="100%" label="Запахи" description="Эффективность устранения запаха пота" variant="accent" />
            <StatCard value="99,9%" label="Грибки" description="Уничтожение возбудителей микозов" variant="primary" />
            <StatCard value="60-120" label="г/ч" description="Производительность для больших залов" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Фитнес-центры, спортзалы и раздевалки — места с высоким риском распространения инфекций и специфическими
              запахами. Озонирование эффективно решает обе проблемы: дезинфицирует оборудование и полностью устраняет
              запах пота, а не маскирует его.
            </Paragraph>
            <Paragraph>
              Озон уничтожает бактерии, вирусы, плесень, грибки и паразитических простейших на спортивных снарядах,
              трибунах, скамейках и матах. Газ проникает в поры материалов, обеспечивая глубокую дезинфекцию текстиля и
              мягких покрытий.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>Грибковые инфекции</strong> — одна из главных проблем спортивных объектов. Микоз стопы («грибок»),
            стригущий лишай, кандидоз передаются через общие раздевалки, душевые и спортивный инвентарь. Озон уничтожает
            споры грибков на всех поверхностях.
          </HighlightBox>

          <ArticleSection title="Что дезинфицирует озон">
            <BulletList
              items={[
                'Тренажёры и спортивные снаряды',
                'Маты, коврики для йоги и фитнеса',
                'Скамейки в раздевалках',
                'Шкафчики и полки',
                'Душевые кабины и санузлы',
                'Текстиль: полотенца, халаты (в шкафах)',
                'Системы вентиляции и кондиционирования',
                'Трибуны и зрительские места',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Проблема запаха в спортзалах">
            <Paragraph>
              Запах пота в спортивных залах — результат жизнедеятельности бактерий на коже человека. Обычная уборка и
              освежители воздуха лишь маскируют проблему. Озон разрушает молекулы пахнущих веществ и уничтожает
              бактерии, которые их производят.
            </Paragraph>

            <DataTable
              caption="Эффективность озона против запахов"
              headers={['Тип запаха', 'Источник', 'Время устранения']}
              rows={[
                ['Пот', 'Бактерии на коже', '30-60 мин'],
                ['Сырость', 'Плесень и грибки', '60-90 мин'],
                ['Затхлость', 'Недостаточная вентиляция', '40-60 мин'],
                ['Резина', 'Покрытия и маты', '90-120 мин'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Режим обработки спортивных объектов">
            <Paragraph>
              Обработка спортивных сооружений проводится в ночное время, когда объект закрыт для посетителей. Для
              больших залов и манежей используются мощные мобильные озонаторы производительностью 60-120 г/ч.
            </Paragraph>

            <ProcessList
              steps={[
                {
                  title: 'Подготовка помещения',
                  description:
                    'Закройте все окна и двери. Отключите приточную вентиляцию. Убедитесь, что в зале нет людей.',
                },
                {
                  title: 'Размещение озонатора',
                  description:
                    'Настенный озонатор — на высоте не менее 3 м. Мобильный — на максимальной высоте, например, на судейской вышке.',
                },
                {
                  title: 'Озонирование',
                  description: 'Включите озонатор на 2-3 часа. Производительность: 1 г/ч на 25 м³ объёма помещения.',
                },
                {
                  title: 'Распад озона',
                  description:
                    'После окончания работы озонатора концентрация снизится до ПДК за 2-3 часа. Останется лёгкий запах свежести.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Расчёт оборудования">
            <DataTable
              caption="Рекомендуемая производительность озонаторов"
              headers={['Тип объекта', 'Объём', 'Производительность', 'Время']}
              rows={[
                ['Фитнес-зал', '200-500 м³', '10-20 г/ч', '120 мин'],
                ['Раздевалка', '50-100 м³', '3-5 г/ч', '90 мин'],
                ['Тренажёрный зал', '300-600 м³', '15-25 г/ч', '150 мин'],
                ['Спортивный манеж', '2000-5000 м³', '80-200 г/ч', '180 мин'],
                ['Бассейн (воздух)', '500-1500 м³', '20-60 г/ч', '120 мин'],
              ]}
            />

            <HighlightBox variant="info">
              <strong>Формула расчёта:</strong> 1 г/ч производительности по озону на каждые 25 м³ объёма помещения. Для
              помещений с высоким уровнем загрязнения или большой площадью поверхностей увеличьте производительность на
              20-30%.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Зоны особого внимания">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Раздевалки"
                description="Скамейки, шкафчики, пол — основные точки передачи грибковых инфекций"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Душевые"
                description="Влажная среда способствует росту плесени и грибков"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Кардио-зона"
                description="Интенсивное потоотделение, много контактных поверхностей"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Зал групповых занятий"
                description="Коврики, маты, общий инвентарь — риск передачи инфекций"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Эффективность против патогенов">
            <DataTable
              caption="Время инактивации патогенов (концентрация 20 мг/м³)"
              headers={['Патоген', 'Время инактивации', 'Эффективность']}
              rows={[
                ['Trichophyton (грибок стопы)', '20-30 мин', '99,9%'],
                ['Candida albicans', '15-20 мин', '99,9%'],
                ['Staphylococcus aureus', '10-15 мин', '99,99%'],
                ['Вирусы гриппа', '5-10 мин', '99,99%'],
                ['Плесень (споры)', '30-40 мин', '99%'],
                ['E. coli', '5-10 мин', '99,99%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Сравнение с традиционной уборкой">
            <ComparisonTable
              title="Озонирование vs химическая дезинфекция"
              headers={['Критерий', 'Озонирование', 'Химическая обработка']}
              rows={[
                { parameter: 'Устранение запаха пота', value1: 'Полное (разрушение молекул)', value2: 'Маскировка' },
                { parameter: 'Обработка матов и текстиля', value1: 'Глубокая (газ в порах)', value2: 'Поверхностная' },
                { parameter: 'Системы вентиляции', value1: 'Да', value2: 'Нет' },
                { parameter: 'Химические остатки', value1: 'Нет', value2: 'Да (риск аллергии)' },
                { parameter: 'Время восстановления', value1: '2-3 часа', value2: 'Сразу' },
                { parameter: 'Расходные материалы', value1: 'Нет', value2: 'Да' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества для владельцев">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Репутация"
                description="Чистый воздух и отсутствие запахов — конкурентное преимущество"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Здоровье клиентов"
                description="Снижение риска грибковых и вирусных инфекций"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия"
                description="Нет расходов на химию и освежители воздуха"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Автоматизация"
                description="Работа по таймеру без участия персонала"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Требования безопасности">
            <BulletList
              items={[
                'Обработка только в отсутствие людей (ночное время)',
                'ПДК озона в рабочей зоне — 0,1 мг/м³',
                'Персоналу не рекомендуется заходить во время обработки',
                'При необходимости входа — использовать респиратор с угольным фильтром',
                'После обработки ночью проветривание не требуется',
                'К открытию зала озон полностью разложится',
              ]}
            />

            <HighlightBox variant="success">
              При правильно подобранном времени начала и окончания обработки к приходу персонала и первых посетителей
              озон уже выветрится. Останется только лёгкий запах свежести, безопасный для человека.
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
