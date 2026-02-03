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

export function RailwayPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('transport')

  return (
    <Layout>
      <Seo title={t('subcategories.railway.title', { ns })} description={t('subcategories.railway.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/transport"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.railway.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&q=80"
            alt={t('subcategories.railway.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/transport"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.railway.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.railway.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="30-60" label="минут" description="Обработка купейного вагона" variant="primary" />
            <StatCard value="99,9%" label="Эффективность" description="Против вирусов и бактерий" variant="accent" />
            <StatCard value="10-12" label="купе" description="Одновременная обработка" variant="primary" />
            <StatCard value="100%" label="Охват" description="Включая вентиляцию и санузлы" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Железнодорожные вагоны — замкнутое пространство, где пассажиры проводят от нескольких часов до нескольких
              суток. В купейных и плацкартных вагонах люди спят на общих полках, пользуются общими санузлами, дышат
              рециркулируемым воздухом. Это создаёт идеальные условия для распространения инфекций.
            </Paragraph>
            <Paragraph>
              Озонирование — единственный метод, обеспечивающий полную дезинфекцию вагона, включая систему вентиляции,
              матрацы, шторы и труднодоступные места. Газ проникает везде, куда не добраться тряпкой с дезинфицирующим
              средством.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Для железнодорожных депо:</strong> Озонирование вписывается в штатный оборот вагонов. Пока вагон
            стоит в ожидании следующего рейса — он обрабатывается. Не требуется дополнительное время простоя, не нужен
            специальный клининговый персонал.
          </HighlightBox>

          <ArticleSection title="Особенности санитарии в поездах">
            <Paragraph>
              Пассажирские вагоны имеют специфические проблемы, которые сложно решить традиционной уборкой:
            </Paragraph>
            <BulletList
              items={[
                'Текстильные элементы (матрацы, подушки, шторы) впитывают запахи и микроорганизмы',
                'Система вентиляции рециркулирует воздух, распространяя патогены между купе',
                'Санузлы в условиях ограниченной воды трудно поддерживать в чистоте',
                'Ковровые покрытия накапливают пыль, грязь и органические загрязнения',
                'Межвагонные тамбуры и переходы — зоны повышенного загрязнения',
                'В плацкартных вагонах — открытое пространство с общей вентиляцией',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Технология озонирования вагонов">
            <Paragraph>
              Обработка пассажирского вагона проводится в депо между рейсами. Методика зависит от типа вагона и
              поставленных задач.
            </Paragraph>

            <ProcessList
              steps={[
                {
                  title: 'Предварительная уборка',
                  description:
                    'Удаление мусора, смена постельного белья, влажная уборка. Озон эффективнее работает на чистых поверхностях.',
                },
                {
                  title: 'Герметизация вагона',
                  description:
                    'Закрыть все окна, двери, межвагонные переходы. Отключить приточную вентиляцию, оставить рециркуляцию для распределения озона.',
                },
                {
                  title: 'Размещение озонаторов',
                  description:
                    'В купейном вагоне — 2-3 озонатора в коридоре. В плацкартном — 3-4 озонатора вдоль прохода. В санузлах — отдельные приборы.',
                },
                {
                  title: 'Озонирование',
                  description:
                    'Включить озонаторы, покинуть вагон, закрыть дверь. Время обработки 30-60 минут в зависимости от загрязнённости.',
                },
                {
                  title: 'Проветривание',
                  description:
                    'Открыть окна и двери, включить приточную вентиляцию на полную мощность. Проветривать 20-30 минут.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Режимы обработки по типам вагонов">
            <DataTable
              caption="Параметры озонирования железнодорожных вагонов"
              headers={['Тип вагона', 'Объём', 'Производительность', 'Время обработки']}
              rows={[
                ['Купейный (10 купе)', '120-130 м³', '30-50 г/ч', '40-60 мин'],
                ['Плацкартный', '150-160 м³', '40-60 г/ч', '50-70 мин'],
                ['СВ (мягкий)', '100-110 м³', '20-30 г/ч', '30-45 мин'],
                ['Вагон-ресторан', '80-90 м³', '20-30 г/ч', '40-50 мин'],
                ['Электричка (1 вагон)', '70-80 м³', '15-25 г/ч', '30-40 мин'],
                ['Вагон метро', '50-60 м³', '10-20 г/ч', '20-30 мин'],
              ]}
            />

            <HighlightBox variant="success">
              При обработке состава из 10-15 вагонов используется бригадный метод: озонаторы последовательно
              перемещаются из вагона в вагон. Пока первые вагоны проветриваются, последние обрабатываются.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Обработка санузлов">
            <Paragraph>
              Туалеты в поездах — зона особого внимания. Ограниченное количество воды, высокая интенсивность
              использования, специфические запахи. Традиционные методы уборки не решают проблему полностью.
            </Paragraph>
            <BulletList
              items={[
                'Озон уничтожает бактерии в унитазе, раковине, на полу и стенах',
                'Нейтрализует запахи на молекулярном уровне, а не маскирует',
                'Обрабатывает труднодоступные места: за унитазом, под раковиной',
                'Устраняет грибок и плесень в углах и стыках',
                'Дезинфицирует вентиляционные решётки и воздуховоды',
              ]}
            />

            <Paragraph>
              Рекомендуемый режим: концентрация 20-30 мг/м³, время 20-30 минут. Для запущенных случаев — увеличить время
              до 45-60 минут. Компактные озонаторы на 3-5 г/ч идеально подходят для санузлов.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Сравнение с традиционными методами">
            <ComparisonTable
              title="Озонирование vs химическая дезинфекция вагонов"
              headers={['Параметр', 'Озонирование', 'Химическая обработка']}
              rows={[
                {
                  parameter: 'Обработка матрацев и текстиля',
                  value1: 'Да (без снятия)',
                  value2: 'Нет (только замена)',
                },
                { parameter: 'Дезинфекция вентиляции', value1: 'Да (автоматически)', value2: 'Нет' },
                { parameter: 'Устранение запахов', value1: 'Полное (окисление)', value2: 'Частичное (маскировка)' },
                {
                  parameter: 'Персонал на вагон',
                  value1: '1 человек на 5-10 вагонов',
                  value2: '2-3 человека на вагон',
                },
                { parameter: 'Расходные материалы', value1: 'Электричество', value2: 'Дезсредства, ветошь' },
                { parameter: 'Влажные остатки', value1: 'Нет', value2: 'Да (требуют высыхания)' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Интеграция в работу депо">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Оборот составов"
                description="Озонирование во время стандартного оборота. Пока меняется бельё — вагон обрабатывается"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Ночной отстой"
                description="Составы, стоящие в депо ночью, обрабатываются автоматически по расписанию"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Сезонные пики"
                description="В периоды повышенного пассажиропотока — усиленный режим обработки"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Инцидентная обработка"
                description="После перевозки больного пассажира — внеплановая глубокая дезинфекция"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Обработка грузовых вагонов">
            <Paragraph>Озонирование применяется не только для пассажирских, но и для грузовых вагонов:</Paragraph>
            <BulletList
              items={[
                'Крытые вагоны — устранение запахов предыдущих грузов',
                'Рефрижераторные секции — дезинфекция без химических остатков',
                'Зерновозы — борьба с насекомыми-вредителями',
                'Вагоны для скоропортящихся грузов — продление сроков хранения',
                'Изотермические вагоны — подготовка к перевозке продуктов питания',
              ]}
            />

            <HighlightBox variant="info">
              <strong>Для пищевых грузов:</strong> Озонирование — безопасная альтернатива химической фумигации. Озон
              распадается до кислорода, не оставляя токсичных остатков на стенках вагона и не переходя на груз.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Экономика для депо">
            <DataTable
              caption="Расчёт эффективности озонирования для депо (100 вагонов)"
              headers={['Показатель', 'С озонированием', 'Без озонирования']}
              rows={[
                ['Клининговый персонал', '3-4 человека', '15-20 человек'],
                ['Время обработки состава', '2-3 часа', '5-6 часов'],
                ['Расходы на дезсредства/мес', '~5000 ₽ (электричество)', '~80 000 ₽'],
                ['Жалобы на запахи', 'Редко', 'Регулярно'],
                ['Обработка вентиляции', 'Каждый рейс', '1 раз в год (ремонт)'],
              ]}
            />

            <Paragraph>
              Окупаемость комплекта озонаторов для депо — 6-12 месяцев за счёт экономии на персонале и расходных
              материалах. Дополнительный эффект — улучшение отзывов пассажиров о чистоте вагонов.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Оборудование для железнодорожного транспорта">
            <Paragraph>Для обработки вагонов используются промышленные озонаторы:</Paragraph>
            <BulletList
              items={[
                'Мобильные озоновые пушки (30-100 г/ч) — для обработки целых вагонов',
                'Переносные озонаторы (10-30 г/ч) — для купе и санузлов',
                'Настенные озонаторы (5-20 г/ч) — для стационарной установки в вагонах',
                'Системы с таймерами — для автоматической обработки по расписанию',
                'Датчики озона — для контроля концентрации и безопасности',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Техника безопасности в депо">
            <Paragraph>При озонировании вагонов в депо соблюдайте требования безопасности:</Paragraph>
            <BulletList
              items={[
                'Обработка только в отсутствие людей в вагоне и на прилегающих путях',
                'Вывешивать предупреждающие таблички «Озонирование. Вход запрещён»',
                'Персонал должен пройти инструктаж по работе с озоном',
                'При входе в вагон до проветривания — использовать респиратор',
                'Вести журнал обработок с указанием вагона, времени, параметров',
                'При ощущении резкого запаха озона — немедленно покинуть зону',
              ]}
            />

            <HighlightBox variant="warning">
              ПДК озона — 0,1 мг/м³. Характерный запах «после грозы» ощущается уже при концентрации 0,02-0,05 мг/м³.
              Если чувствуете озон — вагон ещё не готов к заселению пассажиров.
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
