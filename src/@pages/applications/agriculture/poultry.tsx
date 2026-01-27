import Image from 'next/image'

import { Layout } from '@/widgets'

import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  ComparisonTable,
  DataTable,
  FeatureCard,
  FeatureGrid,
  HighlightBox,
  NumberedList,
  Paragraph,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'

export function PoultryPage() {
  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              Применение
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/agriculture"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Сельское хозяйство
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Птицеводство</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&q=80"
            alt="Птицеводство"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/agriculture"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>Сельское хозяйство</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Озонирование в птицеводстве</h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            Комплексная технология для инкубации яиц, дезинфекции помещений, обработки кормов и воды, продления сроков
            хранения мяса птицы
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="92-98%"
              label="Эффективность дезинфекции"
              description="Уничтожение патогенов на скорлупе яиц"
              variant="primary"
            />
            <StatCard
              value="+2%"
              label="Вывод молодняка"
              description="Повышение выводимости при инкубации"
              variant="accent"
            />
            <StatCard
              value="97%"
              label="Снижение плесени"
              description="В кормах после озонирования"
              variant="primary"
            />
            <StatCard
              value="4×"
              label="Продление хранения"
              description="Сроки хранения охлаждённого мяса"
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
              Озонирование — ключевая технология для современного промышленного птицеводства. Благодаря уникальным
              антибактериальным свойствам озона, его экологической чистоте, безопасности и простоте применения,
              технология находит применение на всех этапах производства: от инкубации яиц до хранения готовой продукции.
            </Paragraph>
            <Paragraph>
              Плохой микроклимат и бактериальная загрязнённость в помещениях снижают яйценоскость кур-несушек на 25%,
              среднесуточный привес — на 10%. Озонирование позволяет решить эти проблемы без использования химических
              препаратов, которые могут попадать в продукты питания.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Важно:</strong> Предельно допустимая концентрация озона для птицы составляет до 1,2 мг/м³ — это в 12
            раз выше, чем для человека (0,1 мг/м³). Это позволяет проводить эффективную обработку в присутствии птицы
            при соблюдении режимов.
          </HighlightBox>

          <ArticleSection title="Направления применения озона в птицеводстве">
            <NumberedList
              items={[
                'Инкубация яиц — стимуляция эмбрионального развития и повышение вывода молодняка',
                'Дезинфекция инкубационных яиц — профилактика заболеваний птицы',
                'Переработка и хранение продуктов — повышение сохранности и пищевой ценности',
                'Обеззараживание кормов — снижение микрофлоры и токсинов',
                'Дезинфекция воды и санация воздуха — повышение продуктивности птицы',
                'Обработка сточных вод птицефабрик',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Инкубация яиц: повышение вывода молодняка">
            <Paragraph>
              Обработка инкубационных яиц озоном (~10 мг/м³) улучшает их качество и повышает вывод молодняка с
              последующей высокой жизнеспособностью. В замкнутом пространстве инкубатора возникает риск кислородного
              голодания эмбрионов. Озон, как производная кислорода, улучшает воздушную среду и, проникая сквозь
              скорлупу, питает эмбрионы кислородом.
            </Paragraph>

            <StatGrid columns={2}>
              <StatCard
                value="780 → 12"
                label="Патогенная микрофлора"
                description="Количество колоний/см³ на скорлупе яиц яичных кур до и после озонирования"
                variant="neutral"
              />
              <StatCard
                value="913 → 24"
                label="Мясные куры"
                description="Количество колоний/см³ на скорлупе яиц мясных кур до и после озонирования"
                variant="neutral"
              />
            </StatGrid>

            <DataTable
              caption="Результаты обработки инкубационных яиц озоном"
              headers={[
                'Вид птицы',
                'Вывод без озона, %',
                'Вывод с озоном, %',
                'Сохранность без озона, %',
                'Сохранность с озоном, %',
              ]}
              rows={[
                ['Куры яичные', '83,9', '86,4', '97,0', '97,8'],
                ['Куры мясные', '79,4', '81,8', '93,3', '94,8'],
              ]}
            />

            <HighlightBox variant="success">
              Рекомендации ВНИТИП: длительное хранение инкубационных яиц в среде с озоном предотвращает преждевременную
              порчу, снижает обсеменённость скорлупы в 2-7 раз, препятствует развитию плесени и продлевает срок хранения
              до 10 суток.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Дезинфекция воздуха на птицефермах">
            <Paragraph>
              В результате жизнедеятельности птицы воздух птичника загрязняется вредными веществами: аммиаком (до
              0,3-0,5 мг/л при ПДК 0,01 мг/л), сероводородом, углекислым газом, органической пылью с микрофлорой (до
              30-50 мг/л).
            </Paragraph>
            <Paragraph>
              Озонирование в системе рециркуляции позволяет очистить воздух без значительных затрат на вентиляцию и
              обогрев.
            </Paragraph>

            <DataTable
              caption="Эффективность очистки воздуха птичника (концентрация озона 11,3 мг/л)"
              headers={['Показатель', 'До обработки', 'После обработки']}
              rows={[
                ['Сероводород, мг/л', '0,15', '0,0002'],
                ['Аммиак, мг/л', '0,12', '0,004'],
                ['Углекислый газ, мг/л', '14,2', '0,2'],
                ['Органическая пыль, мг/л', '18,1', '—'],
                ['Кислород, % об.', '21,2', '21,7'],
                ['Микрофлора, колоний/м³', '27 480', '< 200'],
              ]}
            />

            <HighlightBox variant="info">
              Периодическое озонирование (8-12 часов раз в 3-5 дней) снижает содержание вредных газов на 80-85% и
              обсеменённость бактериями и плесенью на 80-90%.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Обеззараживание кормов">
            <Paragraph>
              Микрофлора и плесневые грибки в кормах вырабатывают токсины, создающие угрозу здоровью птицы. Обработка
              кормов озоном значительно снижает наличие микрофлоры и токсинов, повышает биологическую ценность и
              усвояемость кормов.
            </Paragraph>

            <DataTable
              caption="Эффективность обеззараживания кормов озоном"
              headers={[
                'Показатель',
                'Пшеница без озона',
                'Пшеница с озоном',
                'Комбикорм без озона',
                'Комбикорм с озоном',
              ]}
              rows={[
                ['Микрофлора, колоний/г', '945', '63', '27 840', '91'],
                ['Токсины, мг/кг', '5,11', '0,12', '4,87', '0,18'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Продление сроков хранения мяса птицы">
            <Paragraph>
              Положительный эффект при хранении мяса достигается при ежедневном озонировании в течение 2 часов при
              концентрации озона ~6 мг/м³. Сохранность мяса птицы в охлаждённом виде (+4°С) увеличивается в 4 раза.
            </Paragraph>

            <ComparisonTable
              title="Сравнение хранения мяса птицы"
              headers={['Показатель', 'С озоном', 'Без озона']}
              rows={[
                { parameter: 'Максимальный срок хранения', value1: '18-21 день', value2: '5-7 дней' },
                { parameter: 'Потеря массы изделия', value1: '7,6%', value2: '10,9%' },
                { parameter: 'Цвет тушек', value1: 'Светло-жёлтый', value2: 'Жёлтый' },
                { parameter: 'Запах мяса', value1: 'Свойственный свежему', value2: 'Затхлый, гнилостный' },
                {
                  parameter: 'Бактериальная загрязнённость после хранения',
                  value1: '65 колоний/мл',
                  value2: '736 колоний/мл',
                },
              ]}
            />

            <HighlightBox variant="success">
              За 20 дней хранения мясо с озонированием сохраняло первоначальную свежесть и нежность без запаха. Без
              обработки — зеленоватый цвет и гнилостный запах уже через 5 дней.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Режимы озонирования в птицеводстве">
            <DataTable
              headers={['Цель озонирования', 'Концентрация', 'Время обработки', 'Периодичность']}
              rows={[
                ['Профилактическая дезинфекция яиц', '8-12 мг/м³', '60 мин', '1 раз перед закладкой'],
                ['Дезинфекция в процессе инкубации', '8-12 мг/м³', '30 мин', 'Через 6 часов после закладки'],
                ['Хранение инкубационных яиц', '4-15 мг/м³', '120-180 мин', '1 раз в сутки'],
                ['Стимуляция эмбрионального развития', '~10 мг/м³', '20 мин', '1 раз в сутки весь период'],
                ['Дезинфекция воздуха в птичнике', '8-12 мг/м³', '5-10 мин', '2-3 раза в сутки'],
                ['Обработка зернохранилища', '8-12 мг/м³', '60-120 мин', '1 раз в сутки'],
                ['Обработка мяса при хранении', '~6 мг/м³', '120 мин', '1-2 раза в сутки'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования в птицеводстве">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экологичность"
                description="Озон распадается на кислород, не оставляя химических остатков в продукции"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Безопасность"
                description="Безопаснее формалина и хлора, которые канцерогенны или дают побочные эффекты"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Универсальность"
                description="Одно оборудование для яиц, кормов, воды, воздуха и продукции"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономичность"
                description="Производится на месте из воздуха, не требует складирования реагентов"
              />
            </FeatureGrid>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование на вашей птицефабрике?</h2>
          <p className="cta__text">Получите бесплатную консультацию и расчёт оборудования для ваших задач</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              Получить консультацию
            </AppLink>
            <a
              href="tel:+78001234567"
              className="btn btn--secondary btn--large"
              style={{ borderColor: 'white', color: 'white' }}
            >
              Позвонить: 8 (800) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
