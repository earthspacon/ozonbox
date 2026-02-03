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

export function RestaurantsPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('horeca')

  return (
    <Layout>
      <Seo title={t('subcategories.restaurants.title', { ns })} description={t('subcategories.restaurants.shortDesc', { ns })} />
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
            <span className="text-text-primary font-medium">{t('subcategories.restaurants.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt={t('subcategories.restaurants.title', { ns })}
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
            {t('subcategories.restaurants.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.restaurants.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="60-120" label="Минут обработки" description="Полный цикл очистки зала" variant="primary" />
            <StatCard value="100%" label="Удаление запахов" description="Табак, кухня, сырость" variant="accent" />
            <StatCard value="+25%" label="Время пребывания" description="Гости дольше остаются" variant="primary" />
            <StatCard value="0" label="Расходных материалов" description="Озон из воздуха" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Ресторанный бизнес — это атмосфера. Запах прокуренного помещения, застоявшихся блюд или кухонного жира
              способен отпугнуть даже лояльных клиентов. Исследования показывают: качество воздуха напрямую влияет на
              подсознательную оценку уровня сервиса. Озонирование решает эту проблему радикально — не маскируя запахи
              ароматизаторами, а уничтожая их на молекулярном уровне.
            </Paragraph>
            <Paragraph>
              Обоняние настолько тесно связано с подсознанием, что человек может не отдавать себе отчёт, почему ему
              приятно или неприятно в данном заведении. Он просто скажет «понравилось» или «не понравилось». А от этой
              оценки зависит, придёт ли он снова и порекомендует ли друзьям.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="success">
            <strong>Факт:</strong> Большинство казино Лас-Вегаса используют озонаторы. Свежий воздух увеличивает время
            пребывания гостей и количество заказов. Озон также снижает воздействие алкоголя на ЦНС — клиенты дольше
            остаются бодрыми.
          </HighlightBox>

          <ArticleSection title="Проблемы ресторанов, решаемые озонированием">
            <BulletList
              items={[
                'Запах табака и кальяна — въедается в мебель, шторы, обивку',
                'Кухонные ароматы — жир, специи, рыба, чеснок',
                'Сырость и плесень — особенно в подвальных помещениях',
                'Запах от вентиляции — скопление жира в воздуховодах',
                'Туалетные запахи — проникают в зал при плохой вентиляции',
                'Бактерии и плесень — источники неприятных запахов',
                'Запах бытовой химии — от моющих средств после уборки',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Почему запахи так важны">
            <Paragraph>
              Вы можете создать креативный дизайн, нанять профессиональный персонал, вкладывать деньги в рекламу — но
              неприятный запах сведёт все усилия на нет. Разве в хорошем месте может плохо пахнуть?
            </Paragraph>
            <DataTable
              caption="Влияние качества воздуха на бизнес-показатели"
              headers={['Показатель', 'Без озонирования', 'С озонированием']}
              rows={[
                ['Среднее время визита', '45 минут', '55-60 минут'],
                ['Повторные визиты', '35%', '52%'],
                ['Оценка «чистоты» в отзывах', '3.8/5', '4.6/5'],
                ['Жалобы на запахи', '12% гостей', '<1% гостей'],
                ['Средний чек', 'Базовый', '+15-20%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Процесс озонирования ресторана">
            <ProcessList
              steps={[
                {
                  title: 'Закрытие заведения',
                  description: 'Озонирование проводится в нерабочие часы, когда в помещении нет людей.',
                },
                {
                  title: 'Подготовка помещения',
                  description:
                    'Закрываются окна и двери, отключается приточная вентиляция для максимальной концентрации озона.',
                },
                {
                  title: 'Озонирование',
                  description:
                    'Озонатор размещается на максимальной высоте. Время обработки: 60-120 минут в зависимости от объёма.',
                },
                {
                  title: 'Проветривание',
                  description:
                    'Включается вентиляция, открываются окна. За 2-3 часа озон распадается до безопасного уровня.',
                },
              ]}
            />

            <HighlightBox variant="info">
              <strong>Автоматизация:</strong> Современные озонаторы оснащены недельными таймерами. Можно настроить
              автоматический запуск после закрытия — к утру воздух будет идеально свежим.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Зоны применения в ресторане">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Обеденный зал"
                description="Устранение запахов табака, еды, духов. Создание ощущения свежести и чистоты для гостей."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Кухня"
                description="Нейтрализация жировых отложений в вентиляции, запахов жарки, рыбы, специй."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Холодильные камеры"
                description="Дезинфекция без отключения. Увеличение сроков хранения продуктов в 2-3 раза."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Санузлы"
                description="Полное устранение запахов, уничтожение бактерий на всех поверхностях."
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Расчёт оборудования">
            <Paragraph>
              Производительность озонатора выбирается из расчёта: 1 г/час на 25 м³ объёма помещения.
            </Paragraph>
            <DataTable
              caption="Примеры расчёта для разных заведений"
              headers={['Тип заведения', 'Площадь', 'Объём', 'Озонатор']}
              rows={[
                ['Небольшое кафе', '40-60 м²', '120-180 м³', '5-7 г/час'],
                ['Ресторан среднего размера', '100-200 м²', '300-600 м³', '12-24 г/час'],
                ['Крупный ресторан/банкетный зал', '300+ м²', '900+ м³', '36+ г/час или несколько приборов'],
                ['Кальянная', '50-100 м²', '150-300 м³', '6-12 г/час (ежедневная обработка)'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Дополнительные применения озона">
            <BulletList
              items={[
                'Стерилизация посуды и инвентаря без химии',
                'Обработка продуктов для увеличения срока хранения (рыба, мясо, зелень)',
                'Дезинфекция рук персонала озонированной водой (полезно для кожи)',
                'Очистка воды в декоративных водоёмах и аквариумах',
                'Доочистка водопроводной воды до питьевого качества',
                'Борьба с плесенью в подвальных помещениях и кладовых',
              ]}
            />

            <HighlightBox variant="success">
              <strong>Экономия:</strong> Один озонатор может обрабатывать и воздух, и воду. Компактные мобильные модели
              обслуживают разные помещения и решают разные задачи.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Преимущества для бизнеса">
            <BulletList
              items={[
                'Повышение лояльности гостей — комфортная атмосфера запоминается',
                'Рост среднего чека — свежий воздух стимулирует аппетит',
                'Увеличение времени пребывания — гости не спешат уйти',
                'Снижение жалоб на запахи — защита репутации на отзовиках',
                'Отсутствие расходных материалов — озон вырабатывается из воздуха',
                'Автоматическая работа — минимум участия персонала',
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
