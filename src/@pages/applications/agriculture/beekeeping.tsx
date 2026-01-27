import Image from 'next/image'

import { Layout } from '@/widgets'

import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  BulletList,
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

export function BeekeepingPage() {
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
            <span className="text-text-primary font-medium">Пчеловодство</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=1920&q=80"
            alt="Пчеловодство"
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
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">Озонирование в пчеловодстве</h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            Дезинфекция ульев и сот, борьба с болезнями пчёл. Увеличение медосбора на 25 кг за сезон и повышение
            продуктивности семей на 39%.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="+25 кг" label="Медосбор" description="Прибавка за сезон на семью" variant="primary" />
            <StatCard
              value="39%"
              label="Рост продуктивности"
              description="При регулярном озонировании"
              variant="accent"
            />
            <StatCard
              value="50-77%"
              label="Обеззараживание"
              description="Уничтожение спор Ascosphaera apis"
              variant="primary"
            />
            <StatCard value="0" label="Химикатов" description="Экологически чистый мёд" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Озонирование в пчеловодстве применяется для дезинфекции ульев, рамок и сот от возбудителей болезней пчёл.
              Обработка невысокими концентрациями озона оказывает благоприятное воздействие на жизнедеятельность
              пчелиных семейств.
            </Paragraph>
            <Paragraph>
              Регулярное озонирование снижает концентрацию болезнетворных микроорганизмов, уменьшает влажность
              внутриульевого воздуха и улучшает газовый состав. В результате опытные семьи показали увеличение
              производства товарного мёда на 25 кг за сезон по сравнению с контрольной группой.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Научные исследования:</strong> Опыты, проведённые в НИИ пчеловодства, подтвердили повышение
            продуктивности пчелиных семей на 39% при регулярном озонировании ульев в весенне-летний период.
          </HighlightBox>

          <ArticleSection title="Направления применения озона в пчеловодстве">
            <BulletList
              items={[
                'Дезинфекция сот от возбудителей аскосфероза (известкового расплода)',
                'Обработка ульев и рамок от гнильцовых заболеваний',
                'Борьба с варроатозом в комплексной терапии',
                'Улучшение микроклимата в ульях',
                'Дезинфекция пчеловодного инвентаря',
                'Профилактика нозематоза и других инфекций',
                'Обработка зимовников и омшаников',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Борьба с аскосферозом">
            <Paragraph>
              Аскосфероз (известковый расплод) — одно из наиболее распространённых грибковых заболеваний пчёл,
              вызываемое Ascosphaera apis. Споры гриба устойчивы к традиционным методам дезинфекции, но уничтожаются
              озоном.
            </Paragraph>

            <DataTable
              caption="Режимы обработки при аскосферозе"
              headers={['Степень поражения', 'Концентрация O₃', 'Время обработки', 'Кратность']}
              rows={[
                ['Профилактика', '100-150 мг/м³', '30-45 мин', 'Раз в месяц'],
                ['Лёгкая форма', '200-250 мг/м³', '60 мин', '2 раза/сутки, 5-7 дней'],
                ['Средняя форма', '250-350 мг/м³', '60 мин', '3 раза/сутки, 7-10 дней'],
                ['Тяжёлая форма', '400-500 мг/м³', '60-90 мин', '4 раза/сутки, 10-14 дней'],
              ]}
            />

            <HighlightBox variant="success">
              Озон эффективно воздействует на споры грибка Ascosphaera apis. Степень обеззараживания достигает 50-77% в
              зависимости от материала обрабатываемой поверхности и концентрации озона.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Эффективность против различных патогенов">
            <Paragraph>
              Озон эффективен против широкого спектра возбудителей болезней пчёл — бактерий, грибков и вирусов. Это
              позволяет использовать единую технологию для комплексной защиты пасеки.
            </Paragraph>

            <DataTable
              caption="Эффективность озонирования против патогенов пчёл"
              headers={['Патоген/заболевание', 'Концентрация O₃', 'Время', 'Эффективность']}
              rows={[
                ['Ascosphaera apis (аскосфероз)', '250-500 мг/м³', '60 мин', '50-77%'],
                ['Paenibacillus larvae (американский гнилец)', '300-500 мг/м³', '60-90 мин', '85-95%'],
                ['Melissococcus plutonius (европейский гнилец)', '250-400 мг/м³', '45-60 мин', '90-98%'],
                ['Nosema apis (нозематоз)', '200-300 мг/м³', '30-45 мин', '80-90%'],
                ['Aspergillus (аспергиллёз)', '300-500 мг/м³', '60-90 мин', '85-95%'],
                ['Вирус деформации крыла', '150-250 мг/м³', '30-45 мин', '70-85%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Технология озонирования ульев">
            <ProcessList
              steps={[
                {
                  title: 'Подготовка улья',
                  description: 'Удаление пчёл или планирование обработки в отсутствие семьи. Закрытие летков.',
                },
                {
                  title: 'Подключение озонатора',
                  description: 'Установка шланга подачи озона через верхний леток или специальное отверстие в крышке.',
                },
                {
                  title: 'Обработка озоном',
                  description: 'Подача озона с заданной концентрацией в течение 30-90 минут в зависимости от цели.',
                },
                {
                  title: 'Выдержка',
                  description: 'После прекращения подачи озона выдержка 15-30 минут при закрытых летках.',
                },
                {
                  title: 'Проветривание',
                  description: 'Открытие летков для выхода остаточного озона. Время — 15-30 минут.',
                },
                {
                  title: 'Возврат пчёл',
                  description: 'Заселение обработанного улья пчелиной семьёй через 1-2 часа после обработки.',
                },
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Важно:</strong> Обработку высокими концентрациями озона (более 200 мг/м³) следует проводить в
              отсутствие пчёл. Для стимулирующей обработки пчёл концентрация не должна превышать 10-15 мг/м³.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Стимулирующее действие озона">
            <Paragraph>
              Обработка ульев невысокими концентрациями озона (5-15 мг/м³) в присутствии пчёл оказывает стимулирующее
              действие: повышает активность семей, улучшает яйценоскость маток и ускоряет весеннее развитие.
            </Paragraph>

            <DataTable
              caption="Влияние стимулирующего озонирования на пчелиные семьи"
              headers={['Показатель', 'Контрольная группа', 'Опытная группа', 'Разница']}
              rows={[
                ['Медосбор, кг/сезон', '45-50', '70-75', '+25 кг (+50%)'],
                ['Сила семьи, улочек', '8-10', '12-14', '+40%'],
                ['Яйценоскость матки, яиц/сутки', '1200-1400', '1600-1800', '+30%'],
                ['Выращивание расплода', '100%', '135-140%', '+35-40%'],
                ['Зимовка (отход)', '15-20%', '5-8%', '-60%'],
                ['Роение', 'Частое', 'Редкое', 'Снижение в 2-3 раза'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Обработка сот и инвентаря">
            <Paragraph>
              Соты и пчеловодный инвентарь могут быть источником инфекции для здоровых семей. Регулярная дезинфекция
              озоном предотвращает распространение болезней на пасеке.
            </Paragraph>

            <DataTable
              caption="Режимы обработки сот и инвентаря"
              headers={['Объект обработки', 'Концентрация O₃', 'Время', 'Примечание']}
              rows={[
                ['Соты (профилактика)', '200-300 мг/м³', '30-45 мин', 'После откачки мёда'],
                ['Соты (дезинфекция)', '400-600 мг/м³', '60-90 мин', 'При наличии заболеваний'],
                ['Ульи пустые', '300-500 мг/м³', '45-60 мин', 'Перед заселением'],
                ['Инвентарь металлический', '500-700 мг/м³', '30-45 мин', 'Дымари, стамески'],
                ['Защитная одежда', '300-400 мг/м³', '30-45 мин', 'В озоновой камере'],
                ['Тара для мёда', '200-300 мг/м³', '20-30 мин', 'Перед наполнением'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Сезонный календарь озонирования">
            <DataTable
              caption="Рекомендуемый график обработок"
              headers={['Период', 'Вид обработки', 'Концентрация', 'Цель']}
              rows={[
                ['Ранняя весна (март)', 'Стимулирующая', '10-15 мг/м³', 'Активизация семей после зимовки'],
                ['Весна (апрель-май)', 'Профилактическая', '100-200 мг/м³', 'Профилактика весенних инфекций'],
                ['Лето (июнь-июль)', 'Стимулирующая', '10-15 мг/м³', 'Повышение медосбора'],
                ['После откачки (август)', 'Дезинфекция сот', '300-500 мг/м³', 'Обеззараживание освободившихся сот'],
                ['Осень (сентябрь)', 'Профилактическая', '150-250 мг/м³', 'Подготовка к зимовке'],
                ['Зимовник (ноябрь)', 'Дезинфекция', '400-600 мг/м³', 'Обработка зимовника перед постановкой'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования в пчеловодстве">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без химии"
                description="Озон не оставляет остатков в мёде и продуктах пчеловодства — полностью экологичный метод"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Рост медосбора"
                description="Увеличение товарного мёда на 25 кг с семьи за сезон при регулярном озонировании"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Борьба с болезнями"
                description="Эффективность против аскосфероза, гнильцов, нозематоза и других инфекций"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Улучшение зимовки"
                description="Снижение отхода семей при зимовке в 2-3 раза благодаря оздоровлению пчёл"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Снижение роения"
                description="Стимулирующее озонирование снижает склонность семей к роению в 2-3 раза"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономическая выгода"
                description="Окупаемость оборудования за 1-2 сезона за счёт роста продуктивности пасеки"
              />
            </FeatureGrid>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование на вашей пасеке?</h2>
          <p className="cta__text">
            Получите бесплатную консультацию и расчёт оборудования для вашего пчеловодческого хозяйства
          </p>
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
