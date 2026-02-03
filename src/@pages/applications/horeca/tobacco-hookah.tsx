import Image from 'next/image'
import { useTranslate } from '@tolgee/react'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
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
import { Seo } from '@/shared/ui/seo'

export function TobaccoHookahPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('horeca')

  return (
    <Layout>
      <Seo title={t('subcategories.tobacco-hookah.title', { ns })} description={t('subcategories.tobacco-hookah.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/horeca"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.tobacco-hookah.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=1920&q=80"
            alt={t('subcategories.tobacco-hookah.title', { ns })}
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
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.tobacco-hookah.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.tobacco-hookah.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="60-120" label="Минут обработки" description="Ежедневная очистка" variant="primary" />
            <StatCard value="100%" label="Удаление запаха" description="Химическая нейтрализация" variant="accent" />
            <StatCard value="2-3" label="Часа выветривания" description="Озон распадается сам" variant="primary" />
            <StatCard value="0" label="Расходников" description="Озон из воздуха" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Въевшийся, застарелый запах сигарет и кальяна может отпугнуть посетителей заведения. Даже в кальянных, где
              гостям нравится аромат свежего кальянного дыма, проблема существует: когда дым въедается в мебель и
              обшивку, ароматические присадки быстро испаряются, оставляя лишь неприятный запах гари и смолы.
            </Paragraph>
            <Paragraph>
              Озонирование — единственный эффективный метод химического удаления таких запахов, а не их маскировки
              ароматизаторами. Озон окисляет молекулы дурнопахнущих веществ до воды и углекислого газа или до
              промежуточных продуктов окисления, не имеющих запаха.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Важно понимать:</strong> Подавители запахов и ароматизаторы не решают проблему — они лишь маскируют
            её. Озон уничтожает источник запаха на молекулярном уровне.
          </HighlightBox>

          <ArticleSection title="Почему запах въедается">
            <Paragraph>
              Табачный и кальянный дым содержат смолы, которые проникают в пористые материалы: ткани, дерево, обивку
              мебели, потолочные плитки, ковры. Со временем эти вещества накапливаются и создают устойчивый неприятный
              запах, который не удаляется обычной уборкой или проветриванием.
            </Paragraph>
            <BulletList
              items={[
                'Текстиль (шторы, обивка, подушки) — основной «резервуар» запаха',
                'Мягкая мебель — смолы проникают в наполнитель',
                'Потолочные покрытия — особенно пористые материалы',
                'Вентиляционные каналы — скопление загрязнений',
                'Труднодоступные места — щели, швы, внутренние полости',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Химическое удаление"
                description="Озон окисляет молекулы запаха, а не маскирует их. Результат — настоящая свежесть."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Проникновение везде"
                description="Газ проникает в структуру материалов, поры, щели — куда не добраться ни одному чистящему средству."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Высокая скорость"
                description="Полная обработка помещения за 60-120 минут. К открытию заведения воздух свежий."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Автоматизация"
                description="Недельный таймер позволяет запускать обработку автоматически после закрытия."
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Процесс озонирования">
            <ProcessList
              steps={[
                {
                  title: 'Подготовка помещения',
                  description:
                    'Закрываются все окна и двери. Отключается приточная вентиляция для максимальной концентрации озона.',
                },
                {
                  title: 'Размещение озонатора',
                  description:
                    'Мобильный озонатор устанавливается на максимальной высоте — на шкафу, полке или специальной подставке.',
                },
                {
                  title: 'Озонирование',
                  description:
                    'Включается режим обработки на 60-120 минут. При регулярном использовании достаточно 60 минут.',
                },
                {
                  title: 'Проветривание',
                  description: 'Открываются двери и окна, включается вентиляция. Озон выветривается за 2-3 часа.',
                },
              ]}
            />

            <HighlightBox variant="success">
              <strong>Ночная обработка:</strong> При обработке в ночное время проветривание не требуется. К приходу
              персонала озон уже выветрится, останется только лёгкий запах свежести.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Расчёт оборудования">
            <Paragraph>
              Производительность озонатора выбирается из соотношения: 1 г/час на 25 м³ объёма помещения.
            </Paragraph>
            <DataTable
              caption="Пример расчёта для кальянной"
              headers={['Параметр', 'Значение', 'Комментарий']}
              rows={[
                ['Площадь зала', '40 м²', 'Основной зал заведения'],
                ['Высота потолков', '3 м', 'Стандартная высота'],
                ['Объём помещения', '120 м³', '40 × 3 = 120'],
                ['Расчёт мощности', '4,8 г/час', '120 ÷ 25 = 4,8'],
                ['Рекомендация', '5 г/час', 'Округление вверх'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Рекомендуемые режимы обработки">
            <DataTable
              headers={['Ситуация', 'Время обработки', 'Частота', 'Результат']}
              rows={[
                ['Ежедневная профилактика', '60 минут', 'Каждую ночь', 'Поддержание свежести'],
                ['После интенсивного вечера', '90-120 минут', 'По необходимости', 'Глубокая очистка'],
                ['Застарелый запах', '2-3 часа', '3-5 дней подряд', 'Полное устранение'],
                ['Новое помещение (б/у)', '3-4 часа', '5-7 дней подряд', 'Восстановление'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Что обрабатывается озоном">
            <BulletList
              items={[
                'Мягкая мебель — диваны, кресла, подушки, наполнители',
                'Текстиль — шторы, скатерти, тканевые элементы декора',
                'Ковры и напольные покрытия — глубокое проникновение в ворс',
                'Потолочные покрытия — пористые материалы, плитки',
                'Вентиляционная система — воздуховоды, решётки',
                'Труднодоступные места — щели, швы, внутренние полости мебели',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Экономика решения">
            <DataTable
              caption="Сравнение методов борьбы с запахом"
              headers={['Метод', 'Эффективность', 'Стоимость/месяц']}
              rows={[
                ['Ароматизаторы', 'Маскировка (временно)', '10-20 тыс. ₽'],
                ['Профессиональная химчистка', 'Частичное удаление', '50-100 тыс. ₽'],
                ['Замена текстиля', 'Полное удаление', '200+ тыс. ₽ (разово)'],
                ['Озонирование', 'Полное удаление', '1-2 тыс. ₽ (электричество)'],
              ]}
            />

            <HighlightBox variant="success">
              <strong>ROI:</strong> Стоимость озонатора 14-35 тыс. ₽ окупается за 1-3 месяца только на экономии
              ароматизаторов. Дальнейшая эксплуатация практически бесплатна — только электроэнергия.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Важные особенности">
            <BulletList
              items={[
                'Обработка только в отсутствие людей — озон в высоких концентрациях токсичен',
                'Персонал в маске с угольным фильтром, если находится во время обработки',
                'После обработки — запах свежести, безопасный для человека',
                'Озон вырабатывается из воздуха — нет расходных материалов',
                'Автоматическая работа по таймеру — минимум участия персонала',
              ]}
            />
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
