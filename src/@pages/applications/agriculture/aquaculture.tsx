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

export function AquaculturePage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  return (
    <Layout>
      <Seo title={t('subcategories.aquaculture.title', { ns })} description={t('subcategories.aquaculture.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/agriculture"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.aquaculture.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
            alt={t('subcategories.aquaculture.title', { ns })}
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
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.aquaculture.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.aquaculture.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value={t('subcategories.aquaculture.stats.disinfection.value', { ns })}
              label={t('subcategories.aquaculture.stats.disinfection.label', { ns })}
              description={t('subcategories.aquaculture.stats.disinfection.description', { ns })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.aquaculture.stats.cycleSaving.value', { ns })}
              label={t('subcategories.aquaculture.stats.cycleSaving.label', { ns })}
              description={t('subcategories.aquaculture.stats.cycleSaving.description', { ns })}
              variant="accent"
            />
            <StatCard
              value={t('subcategories.aquaculture.stats.mortalityReduction.value', { ns })}
              label={t('subcategories.aquaculture.stats.mortalityReduction.label', { ns })}
              description={t('subcategories.aquaculture.stats.mortalityReduction.description', { ns })}
              variant="primary"
            />
            <StatCard
              value={t('subcategories.aquaculture.stats.waterSaving.value', { ns })}
              label={t('subcategories.aquaculture.stats.waterSaving.label', { ns })}
              description={t('subcategories.aquaculture.stats.waterSaving.description', { ns })}
              variant="accent"
            />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              В рыбоводстве озонирование применяется на всех этапах производства: от подготовки воды до хранения готовой
              продукции. Озон обеззараживает воду, борется с болезнями рыб и значительно сокращает производственный
              цикл.
            </Paragraph>
            <Paragraph>
              В установках замкнутого водоснабжения (УЗВ) озонирование очищает воду от ионов тяжёлых металлов, мелких
              водорослей, токсинов, спор грибков, микробов и цист. Значительно сокращается мутность воды, исчезают
              неприятные запахи, создаются оптимальные условия для роста рыбы.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Рекомендуемая дозировка:</strong> 13 г озона на 1 кг вносимого корма. При такой дозировке
            достигается оптимальный баланс между эффективностью обеззараживания и безопасностью для рыбы.
          </HighlightBox>

          <ArticleSection title="Преимущества озонирования в УЗВ">
            <BulletList
              items={[
                'Обеззараживание воды от вирусов, бактерий и паразитических простейших',
                'Окисление органических соединений и аммиака',
                'Удаление мутности и цветности воды',
                'Устранение неприятных запахов (геосмин, 2-метилизоборнеол)',
                'Коагуляция мелкодисперсных взвесей для улучшения фильтрации',
                'Насыщение воды растворённым кислородом',
                'Снижение потребления свежей воды на 40-60%',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Влияние озона на качество воды">
            <Paragraph>
              Качество воды — критический фактор успешного рыбоводства. Озонирование обеспечивает комплексную очистку
              воды, устраняя как биологические, так и химические загрязнения.
            </Paragraph>

            <DataTable
              caption="Эффективность озонирования воды в УЗВ"
              headers={['Показатель', 'До обработки', 'После обработки', 'Улучшение']}
              rows={[
                ['Общая бактериальная обсеменённость', '10⁵-10⁶ КОЕ/мл', '10²-10³ КОЕ/мл', '99-99,9%'],
                ['Мутность воды', '15-25 NTU', '1-3 NTU', '85-95%'],
                ['Аммиак (NH₃)', '0,5-1,5 мг/л', '0,05-0,1 мг/л', '90-95%'],
                ['Нитриты (NO₂)', '0,3-0,8 мг/л', '0,02-0,05 мг/л', '90-95%'],
                ['Цветность воды', '40-60°', '5-10°', '80-90%'],
                ['Геосмин', '50-100 нг/л', '< 5 нг/л', '> 95%'],
              ]}
            />

            <HighlightBox variant="success">
              В чистой озонированной воде рыба быстрее набирает вес, производственный цикл сокращается на 20-30%, а
              конверсия корма улучшается на 10-15%.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Борьба с болезнями рыб">
            <Paragraph>
              Озон уничтожает до 99% патогенных организмов: вирусы, бактерии и паразитических простейших. Это снижает
              заболеваемость рыб, уменьшает смертность и позволяет повысить плотность посадки.
            </Paragraph>

            <DataTable
              caption="Эффективность озона против патогенов рыб"
              headers={['Патоген', 'Заболевание', 'Концентрация O₃', 'Эффективность']}
              rows={[
                ['Aeromonas salmonicida', 'Фурункулёз', '0,1-0,3 мг/л', '99,9%'],
                ['Vibrio anguillarum', 'Вибриоз', '0,1-0,2 мг/л', '99,9%'],
                ['Ichthyophthirius', 'Ихтиофтириоз', '0,2-0,4 мг/л', '99%'],
                ['Saprolegnia', 'Сапролегниоз', '0,15-0,3 мг/л', '99,5%'],
                ['VHS вирус', 'Вирусная геморрагия', '0,1-0,2 мг/л', '99,99%'],
                ['IHN вирус', 'Инфекционный некроз', '0,1-0,2 мг/л', '99,99%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Режимы озонирования для разных видов рыб">
            <Paragraph>
              Различные виды рыб имеют разную чувствительность к остаточному озону. Важно подобрать оптимальный режим
              для каждого вида, обеспечив эффективность обеззараживания при безопасности для рыбы.
            </Paragraph>

            <DataTable
              caption="Рекомендуемые режимы озонирования"
              headers={['Вид рыбы', 'Доза озона', 'Остаточный O₃', 'Время контакта']}
              rows={[
                ['Форель', '10-15 г/кг корма', '< 0,01 мг/л', '3-5 мин'],
                ['Осётр', '12-18 г/кг корма', '< 0,01 мг/л', '3-5 мин'],
                ['Тилапия', '8-12 г/кг корма', '< 0,02 мг/л', '2-4 мин'],
                ['Карп', '10-15 г/кг корма', '< 0,01 мг/л', '3-5 мин'],
                ['Сом', '8-12 г/кг корма', '< 0,02 мг/л', '2-4 мин'],
                ['Креветка', '5-8 г/кг корма', '< 0,005 мг/л', '5-10 мин'],
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Внимание:</strong> Остаточный озон в воде бассейнов с рыбой не должен превышать 0,01-0,02 мг/л.
              Для контроля используйте датчики ORP (ОВП) и системы автоматического дозирования.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Схема озонирования в УЗВ">
            <ProcessList
              steps={[
                {
                  title: 'Забор воды из бассейна',
                  description: 'Вода с продуктами жизнедеятельности рыб направляется на очистку',
                },
                {
                  title: 'Механическая фильтрация',
                  description: 'Удаление крупных взвесей на барабанном или ленточном фильтре',
                },
                {
                  title: 'Озоно-контактная камера',
                  description: 'Ввод озона через диффузоры или инжекторы, время контакта 3-5 минут',
                },
                { title: 'Биофильтрация', description: 'Доочистка от аммиака и нитритов в биологическом фильтре' },
                {
                  title: 'Дегазация',
                  description: 'Удаление остаточного озона в дегазаторе или через активированный уголь',
                },
                { title: 'Возврат в бассейн', description: 'Очищенная вода поступает обратно к рыбе' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Экономический эффект">
            <Paragraph>
              Внедрение озонирования в УЗВ обеспечивает комплексный экономический эффект за счёт улучшения показателей
              выращивания и снижения эксплуатационных затрат.
            </Paragraph>

            <DataTable
              caption="Экономические показатели озонирования в УЗВ"
              headers={['Показатель', 'Без озона', 'С озоном', 'Выгода']}
              rows={[
                ['Выживаемость молоди', '60-70%', '85-95%', '+25-35%'],
                ['Конверсия корма', '1,3-1,5', '1,1-1,2', 'Экономия 15-20%'],
                ['Плотность посадки', '30-40 кг/м³', '50-80 кг/м³', '+60-100%'],
                ['Время выращивания', '12 месяцев', '9-10 месяцев', 'Сокращение 20-25%'],
                ['Затраты на лечение', '100%', '20-30%', 'Экономия 70-80%'],
                ['Расход свежей воды', '100%', '40-60%', 'Экономия 40-60%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования в рыбоводстве">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Чистая вода"
                description="Обеззараживание воды до 99%, удаление мутности, цветности и неприятных запахов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Здоровая рыба"
                description="Снижение заболеваемости на 50-70%, сокращение затрат на ветпрепараты"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Быстрый рост"
                description="Сокращение производственного цикла на 20-30% за счёт оптимальных условий"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Высокая плотность"
                description="Возможность увеличения плотности посадки на 60-100% без риска для рыбы"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия воды"
                description="Снижение потребления свежей воды на 40-60% благодаря улучшенной очистке"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Качество продукции"
                description="Отсутствие постороннего привкуса и запаха у товарной рыбы"
              />
            </FeatureGrid>
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
