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

export function SecondhandPage() {
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
            <AppLink href="/applications/horeca" className="text-text-secondary hover:text-primary transition-colors">
              HoReCa
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Магазины секонд-хенд</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Магазин секонд-хенд"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/horeca"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>HoReCa</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Озонирование магазинов секонд-хенд
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            Устранение специфического запаха одежды. Комфорт покупателей и рост продаж.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="1-3" label="Часа обработки" description="Ночная обработка" variant="primary" />
            <StatCard value="100%" label="Устранение запаха" description="Химическая нейтрализация" variant="accent" />
            <StatCard value="+30%" label="Время в магазине" description="Комфорт покупателей" variant="primary" />
            <StatCard value="99,9%" label="Дезинфекция" description="Бактерии и клещи" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Специфический запах одежды в магазинах секонд-хенд — следствие обязательной дезинфекции. Перед продажей
              вещи обрабатываются газом с формальдегидом или бромистым метилом для уничтожения вирусов и бактерий. Сами
              дезинфицирующие вещества выветриваются к моменту попадания одежды на полки, но характерный запах
              сохраняется.
            </Paragraph>
            <Paragraph>
              Этот запах — главная проблема ритейла секонд-хенд. Он наполняет весь магазин и вызывает у покупателей
              неприятные ассоциации с поношенной одеждой. Некоторые покупатели проводят меньше времени в магазине из-за
              дискомфорта, что напрямую влияет на объём продаж.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>Проблема бизнеса:</strong> Запах влияет на восприятие качества товара. Покупатель подсознательно
            готов заплатить меньше за вещь с неприятным запахом, даже если она в отличном состоянии.
          </HighlightBox>

          <ArticleSection title="Влияние запаха на продажи">
            <DataTable
              caption="Как запах влияет на бизнес-показатели"
              headers={['Показатель', 'С запахом', 'После озонирования']}
              rows={[
                ['Среднее время визита', '12 минут', '18-20 минут'],
                ['Конверсия в покупку', '15%', '22%'],
                ['Средний чек', 'Базовый', '+15-25%'],
                ['Повторные визиты', '25%', '40%'],
                ['Негативные отзывы о запахе', '35%', '<5%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Полное устранение запаха"
                description="Озон нейтрализует молекулы дезинфектантов, а не маскирует их. Результат — свежий воздух."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Обработка без выгрузки"
                description="Вся продукция обрабатывается одновременно, не нужно снимать вещи с вешалок."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Дополнительная дезинфекция"
                description="Озон уничтожает бактерии, вирусы и пылевых клещей — дополнительная гарантия качества."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Комфорт покупателей"
                description="Приятная атмосфера в магазине = больше времени на выбор = больше покупок."
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Процесс озонирования">
            <ProcessList
              steps={[
                {
                  title: 'Подготовка помещения',
                  description:
                    'Магазин закрывается. Окна и двери закрыты. Приточная вентиляция отключена для максимальной концентрации озона.',
                },
                {
                  title: 'Размещение озонатора',
                  description:
                    'Настенный озонатор размещается на высоте 40-60 см от потолка. Мобильный — на максимальной высоте.',
                },
                {
                  title: 'Озонирование',
                  description: 'Включается режим обработки на 1-3 часа в зависимости от объёма помещения.',
                },
                {
                  title: 'Проветривание или ожидание',
                  description:
                    'При ночной обработке проветривание не нужно — озон выветрится сам за 2-3 часа. К открытию магазина останется только лёгкий запах свежести.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Расчёт оборудования">
            <Paragraph>
              Производительность озонатора выбирается из соотношения: 1 г/час на 25 м³ объёма помещения.
            </Paragraph>
            <DataTable
              caption="Рекомендации по выбору озонатора"
              headers={['Площадь магазина', 'Объём', 'Озонатор', 'Время обработки']}
              rows={[
                ['50-100 м²', '150-300 м³', '10 г/час', '1-2 часа'],
                ['100-200 м²', '300-600 м³', '10-20 г/час', '2-3 часа'],
                ['200-400 м²', '600-1200 м³', '20-40 г/час', '2-3 часа'],
                ['400+ м²', '1200+ м³', 'Несколько приборов', '2-3 часа'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Режим работы">
            <BulletList
              items={[
                'Ежедневная обработка в ночное время — оптимальный режим',
                'Автоматический запуск по таймеру после закрытия магазина',
                'К утру озон полностью выветривается, остаётся свежесть',
                'Персоналу не требуется участие — полная автоматизация',
                'При сильном запахе — первые 3-5 дней обработка по 2-3 часа',
              ]}
            />

            <HighlightBox variant="info">
              <strong>Средства защиты:</strong> Если персонал находится в помещении во время озонирования (например, для
              включения прибора), необходим респиратор или противогаз с угольным фильтром.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Экономика решения">
            <DataTable
              headers={['Статья расходов', 'Без озонирования', 'С озонированием']}
              rows={[
                ['Ароматизаторы, освежители', '5-15 тыс. ₽/мес', '0 ₽'],
                ['Электроэнергия', '—', '500-1000 ₽/мес'],
                ['Потери от недовольных клиентов', 'Значительные', 'Минимальные'],
                ['Стоимость оборудования', '—', '22-35 тыс. ₽ (разово)'],
              ]}
            />

            <HighlightBox variant="success">
              <strong>Окупаемость:</strong> При экономии 10 тыс. ₽/месяц на ароматизаторах, озонатор окупается за 2-3
              месяца. Дальнейшая эксплуатация — только стоимость электроэнергии.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Дополнительные преимущества">
            <BulletList
              items={[
                'Повышение привлекательности товара — вещи воспринимаются как более качественные',
                'Уничтожение пылевых клещей — важно для покупателей с аллергией',
                'Дезинфекция помещения — профилактика распространения инфекций',
                'Устранение плесени — актуально для подвальных помещений',
                'Маркетинговое преимущество — «магазин без запаха секонд-хенда»',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Рекомендуемое оборудование">
            <DataTable
              headers={['Модель', 'Производительность', 'Применение', 'Стоимость']}
              rows={[
                ['ОЗ-А10', '10 г/час', 'Магазины до 250 м³', 'от 22 000 ₽'],
                ['ОЗ-А10(Н)', '10 г/час', 'Настенная установка', 'от 32 000 ₽'],
                ['ОЗ-А20', '20 г/час', 'Магазины до 500 м³', 'от 34 000 ₽'],
              ]}
            />
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Устранить специфический запах в магазине?</h2>
          <p className="cta__text">Получите бесплатную консультацию и расчёт оборудования для вашего магазина</p>
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
