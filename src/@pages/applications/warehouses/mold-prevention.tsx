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
  NumberedList,
  Paragraph,
  StatCard,
  StatGrid,
} from '@/shared/ui/article-components'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import { Seo } from '@/shared/ui/seo'

export function MoldPreventionPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('warehouses')

  return (
    <Layout>
      <Seo title={t('subcategories.mold-prevention.title', { ns })} description={t('subcategories.mold-prevention.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/warehouses"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.mold-prevention.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80"
            alt={t('subcategories.mold-prevention.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/warehouses"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.mold-prevention.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.mold-prevention.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="95-99%"
              label="Уничтожение плесени"
              description="После обработки озоном"
              variant="primary"
            />
            <StatCard
              value="1-3 ч"
              label="Время обработки"
              description="Для эффективной дезинфекции"
              variant="accent"
            />
            <StatCard value="80%" label="Снижение потерь" description="От порчи продукции" variant="primary" />
            <StatCard value="0" label="Химикатов" description="Распад озона до O₂" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Бесконтрольный рост плесени в складских помещениях — одна из главных проблем складской логистики. Плесень
              и другие микроорганизмы значительно затрудняют работу складского комплекса: порча продукции и картонных
              коробок увеличивает процент брака, а споры плесени и токсины в воздухе подрывают иммунитет сотрудников
              склада.
            </Paragraph>
            <Paragraph>
              Озонирование складских помещений позволяет решить сразу несколько проблем: устранить порчу хранимой
              продукции в результате жизнедеятельности плесени и гнили, удалить неприятные запахи и улучшить
              самочувствие работников склада. Попадание единичных спор плесени в организм легко блокируется иммунной
              системой, но при большом количестве они представляют серьёзную угрозу из-за токсинов, выделяемых в
              процессе жизнедеятельности.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>Важно для B2B:</strong> Озон взаимодействует с мембранной структурой клеток бактерий, грибов и
            структурной единицей вирусов, что приводит к нарушению их барьерной функции и гибели. Дозы и концентрации
            необходимо подбирать в зависимости от обрабатываемой продукции, объёмов помещения и технических условий.
          </HighlightBox>

          <ArticleSection title="Механизм воздействия озона на плесень">
            <Paragraph>
              Озон — мощный окислитель, который разрушает клеточные мембраны грибков и плесени. В отличие от
              поверхностных химических средств, газообразный озон проникает во все труднодоступные места: щели,
              стеллажи, упаковку, системы вентиляции.
            </Paragraph>
            <BulletList
              items={[
                'Разрушение клеточных мембран спор и мицелия плесени',
                'Окисление органических веществ — питательной среды для грибков',
                'Нейтрализация микотоксинов и продуктов жизнедеятельности',
                'Подавление роста новых колоний за счёт изменения среды',
                'Устранение затхлого запаха на молекулярном уровне',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Расчёт оборудования для склада">
            <Paragraph>
              Правильный подбор производительности озонатора — ключевой фактор эффективной обработки. Для складских
              помещений используется базовое соотношение: 1 г/ч производительности по озону на 25 м³ объёма помещения.
            </Paragraph>

            <DataTable
              caption="Рекомендации по выбору оборудования для складов"
              headers={['Объём склада', 'Производительность озонатора', 'Время обработки']}
              rows={[
                ['до 500 м³', '20-25 г/ч', '60-90 мин'],
                ['500-1000 м³', '40-50 г/ч', '60-120 мин'],
                ['1000-2500 м³', '80-100 г/ч', '90-120 мин'],
                ['2500-5000 м³', '150-200 г/ч', '120-180 мин'],
                ['свыше 5000 м³', 'Несколько установок', '120-180 мин'],
              ]}
            />

            <HighlightBox variant="info">
              <strong>Интеграция с HVAC:</strong> Для крупных складов рекомендуется использовать канальные озонаторы,
              интегрированные в систему вентиляции. Это обеспечивает равномерное распределение озона по всему объёму и
              автоматическое проветривание после обработки.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Режимы обработки склада">
            <Paragraph>
              Озонирование склада производится в нерабочее время. Во время обработки в помещении не должны находиться
              люди без средств индивидуальной защиты. Время и режим озонирования зависит от объёма помещения,
              производительности озонаторов, температуры и влажности воздуха.
            </Paragraph>

            <NumberedList
              items={[
                'Закройте все окна и двери, по возможности отключите приточную вентиляцию',
                'Включите озонатор на 40-120 минут в зависимости от объёма помещения',
                'После окончания обработки откройте двери и окна, проветривайте 20-60 минут',
                'Для ускорения проветривания включите систему приточной вентиляции',
                'При ночной обработке проветривание не требуется — озон выветрится за 2-3 часа',
              ]}
            />

            <DataTable
              caption="Режимы озонирования в зависимости от степени заражения"
              headers={['Степень заражения', 'Концентрация озона', 'Частота обработки']}
              rows={[
                ['Профилактика', '2-5 мг/м³', '1-2 раза в неделю'],
                ['Умеренное', '5-10 мг/м³', '3-4 раза в неделю'],
                ['Сильное', '10-20 мг/м³', 'Ежедневно до устранения'],
                ['Критическое', '20-30 мг/м³', 'Интенсивный курс 7-14 дней'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Синергия с контролем влажности">
            <Paragraph>
              Плесень активно развивается при влажности выше 60%. Комплексный подход к борьбе с плесенью включает как
              озонирование, так и контроль влажности воздуха. Озон устраняет существующие очаги, а поддержание
              оптимальной влажности 45-55% предотвращает появление новых.
            </Paragraph>
            <BulletList
              items={[
                'Установка систем осушения воздуха для влажных помещений',
                'Контроль конденсата на холодных поверхностях',
                'Регулярный мониторинг влажности с помощью гигрометров',
                'Обеспечение достаточной вентиляции для предотвращения застоя воздуха',
                'Комбинированные системы озонирования и осушения',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Экономическое обоснование">
            <Paragraph>
              Внедрение озонирования на складе — инвестиция с быстрой окупаемостью. Снижение потерь от порчи продукции,
              уменьшение расходов на химическую обработку и снижение заболеваемости персонала формируют значительный
              экономический эффект.
            </Paragraph>

            <DataTable
              caption="Типичная структура экономии на складе 2000 м³"
              headers={['Статья экономии', 'Сумма в год', 'Доля в ROI']}
              rows={[
                ['Снижение потерь от порчи товаров', '150 000 — 300 000 ₽', '40-50%'],
                ['Экономия на химической обработке', '50 000 — 80 000 ₽', '15-20%'],
                ['Снижение больничных листов персонала', '30 000 — 60 000 ₽', '10-15%'],
                ['Уменьшение брака и рекламаций', '70 000 — 120 000 ₽', '20-25%'],
              ]}
            />

            <HighlightBox variant="success">
              <strong>ROI:</strong> Типичный срок окупаемости озонаторного оборудования для склада составляет 6-12
              месяцев. При этом срок службы промышленных озонаторов — от 5 лет при минимальных затратах на обслуживание.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Соответствие требованиям и стандартам">
            <Paragraph>
              Озонирование складских помещений соответствует санитарным нормам и требованиям к хранению товаров. Озон не
              оставляет химических остатков на продукции, полностью распадаясь до кислорода.
            </Paragraph>
            <BulletList
              items={[
                'СанПиН 2.1.6.1032-01 — гигиенические требования к качеству атмосферного воздуха',
                'ГОСТ Р 51232-98 — питьевая вода (для складов продуктов питания)',
                'ТР ТС 021/2011 — требования безопасности пищевой продукции',
                'ФЗ-52 «О санитарно-эпидемиологическом благополучии населения»',
                'Требования к складским помещениям категории А, Б, В',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования для складов">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без выгрузки продукции"
                description="Обработка проводится без необходимости освобождать склад — озон безопасен для большинства товаров"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Проникновение везде"
                description="Газ достигает труднодоступных мест: щелей, швов, вентиляции, куда не проникают жидкие средства"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Автоматическая работа"
                description="Современные озонаторы оснащены таймерами для автономной работы в нерабочие часы"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Безопасный распад"
                description="Остаточный озон разлагается на кислород без образования токсичных продуктов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без расходных материалов"
                description="Для работы нужны только воздух и электричество — никаких реагентов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Комплексное действие"
                description="Одновременно дезинфекция, дезодорация и профилактика появления вредителей"
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
