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

export function AutoTransportPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('transport')

  return (
    <Layout>
      <Seo title={t('subcategories.auto-transport.title', { ns })} description={t('subcategories.auto-transport.shortDesc', { ns })} />
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
            <span className="text-text-primary font-medium">{t('subcategories.auto-transport.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80"
            alt={t('subcategories.auto-transport.title', { ns })}
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
            {t('subcategories.auto-transport.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.auto-transport.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="20-40" label="минут" description="Обработка кузова грузовика" variant="primary" />
            <StatCard value="ХАССП" label="Соответствие" description="Требованиям пищевых перевозок" variant="accent" />
            <StatCard value="12/24В" label="Питание" description="Работа от бортовой сети" variant="primary" />
            <StatCard value="10-15" label="машин в смену" description="Обрабатывает 1 оператор" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Коммерческий автотранспорт — от небольших фургонов до магистральных тягачей — требует регулярной
              санитарной обработки. Особенно это критично для перевозчиков продуктов питания: молочной продукции, мяса,
              овощей и фруктов. Санитарные нормы и требования ХАССП обязывают поддерживать чистоту грузового отсека.
            </Paragraph>
            <Paragraph>
              Озонирование — эффективный и экономичный метод санитарной обработки автопарка. Один мобильный озонатор
              обрабатывает 10-15 грузовиков в смену, работает от бортовой сети, не требует расходных материалов. Для
              логистических компаний это значительная экономия по сравнению с химической обработкой.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Для менеджеров автопарков:</strong> Интегрируйте озонирование в график технического обслуживания.
            Пока водитель оформляет документы или отдыхает между рейсами — грузовик обрабатывается. Это не создаёт
            дополнительных простоев.
          </HighlightBox>

          <ArticleSection title="Типы коммерческого транспорта">
            <Paragraph>Озонирование применяется для всех типов грузового автотранспорта:</Paragraph>
            <BulletList
              items={[
                'Рефрижераторы — перевозка скоропортящихся продуктов с температурным режимом',
                'Изотермические фургоны — доставка продуктов без активного охлаждения',
                'Тентованные полуприцепы — универсальные грузоперевозки',
                'Цельнометаллические фургоны — развозка по торговым точкам',
                'Специализированные автомобили — хлебовозы, молоковозы, мясовозы',
                'Контейнеровозы — с установленными морскими контейнерами',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Проблемы санитарии в грузоперевозках">
            <Paragraph>Грузовой отсек автомобиля подвергается загрязнению из различных источников:</Paragraph>
            <BulletList
              items={[
                'Запахи от предыдущих грузов — рыба, мясо, химикаты, удобрения',
                'Бактериальное загрязнение — от протекшей упаковки, повреждённых продуктов',
                'Плесень и грибки — при перевозке влажных грузов, конденсате',
                'Насекомые — заносятся с грузом или со складов',
                'Пыль и грязь — накапливаются на полу и стенках кузова',
                'Остатки упаковки — картон, плёнка, скотч, паллетная обвязка',
              ]}
            />

            <Paragraph>
              Традиционная мойка и протирка не решают проблему полностью. Вода не убивает бактерии, запахи возвращаются,
              плесень прорастает вновь. Нужна именно дезинфекция.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Технология обработки грузовиков">
            <ProcessList
              steps={[
                {
                  title: 'Освобождение кузова',
                  description:
                    'Выгрузить груз, удалить мусор и остатки упаковки. При сильном загрязнении — предварительная влажная уборка.',
                },
                {
                  title: 'Размещение озонатора',
                  description:
                    'Установить озонатор внутри кузова на максимальной высоте. Подключить к электрической сети (220В/230В) или внешнему источнику.',
                },
                {
                  title: 'Герметизация',
                  description: 'Закрыть двери, ворота, люки. Для тентованных полуприцепов — опустить тент и закрепить.',
                },
                {
                  title: 'Озонирование',
                  description:
                    'Включить озонатор, запустить таймер. Время обработки 20-40 минут в зависимости от объёма и загрязнения.',
                },
                {
                  title: 'Проветривание',
                  description:
                    'Открыть двери, включить вентиляцию рефрижератора (если есть). Проветривать 15-20 минут.',
                },
              ]}
            />

            <HighlightBox variant="success">
              После проветривания кузов готов к погрузке. Озон распался до кислорода, химических остатков нет, груз не
              подвергается риску загрязнения.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Режимы обработки по типам транспорта">
            <DataTable
              caption="Параметры озонирования грузового автотранспорта"
              headers={['Тип транспорта', 'Объём кузова', 'Производительность', 'Время обработки']}
              rows={[
                ['Малотоннажный фургон', '8-15 м³', '5-10 г/ч', '15-20 мин'],
                ['Среднетоннажный фургон', '20-40 м³', '10-20 г/ч', '20-30 мин'],
                ['Рефрижератор (еврофура)', '80-90 м³', '20-30 г/ч', '30-40 мин'],
                ['Тентованный полуприцеп', '90-100 м³', '20-30 г/ч', '35-45 мин'],
                ['Автоцистерна (молоковоз)', '5-20 м³', '10-15 г/ч', '20-30 мин'],
                ['Хлебный фургон', '15-25 м³', '5-10 г/ч', '15-25 мин'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Особенности обработки рефрижераторов">
            <Paragraph>
              Рефрижераторы и изотермические фургоны требуют особого внимания — именно в них перевозятся продукты
              питания с жёсткими санитарными требованиями.
            </Paragraph>
            <BulletList
              items={[
                'Обработка при выключенном холодильном агрегате — озон не влияет на хладагент',
                'Хорошая герметичность изотермических кузовов повышает эффективность',
                'Озон не повреждает сэндвич-панели и пластиковую обшивку',
                'Обрабатывается вся внутренняя поверхность, включая потолок и пазы пола',
                'Устраняются запахи, впитавшиеся в стенки при предыдущих перевозках',
              ]}
            />

            <HighlightBox variant="info">
              <strong>Для ХАССП:</strong> Фиксируйте каждую обработку в журнале с указанием даты, номера машины,
              параметров (время, концентрация). Это документальное подтверждение соблюдения санитарных требований при
              аудитах.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Устранение запахов">
            <Paragraph>Одна из главных проблем грузоперевозок — запахи от предыдущих грузов:</Paragraph>
            <BulletList
              items={[
                'Рыба и морепродукты — стойкий запах, впитывается в стенки',
                'Мясо — при повреждении упаковки или нарушении температурного режима',
                'Лук, чеснок — резкий запах, переходит на другие грузы',
                'Химикаты — удобрения, бытовая химия, технические жидкости',
                'Парфюмерия — сильные ароматы, не совместимые с пищевыми грузами',
              ]}
            />

            <Paragraph>
              Озон окисляет молекулы запаха, превращая их в нейтральные соединения. Это не маскировка, а полное
              устранение. После обработки кузов пахнет свежестью — «как после грозы».
            </Paragraph>

            <DataTable
              caption="Режимы устранения запахов"
              headers={['Тип запаха', 'Концентрация', 'Время обработки', 'Эффективность']}
              rows={[
                ['Лёгкий (пыль, затхлость)', '10-15 мг/м³', '15-20 мин', '100%'],
                ['Средний (лук, чеснок)', '15-20 мг/м³', '20-30 мин', '100%'],
                ['Сильный (рыба, мясо)', '20-30 мг/м³', '30-45 мин', '95-100%'],
                ['Очень сильный (химикаты)', '25-35 мг/м³', '45-60 мин', '90-95%'],
                ['Застарелый (плесень)', '30-40 мг/м³', '60-90 мин', '95-100%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Интеграция в работу автопарка">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="После разгрузки"
                description="Пока водитель оформляет документы и получает задание на следующий рейс — машина обрабатывается"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Перед погрузкой"
                description="Профилактическая обработка перед загрузкой чувствительных грузов: молочки, мяса, овощей"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Ночной отстой"
                description="Автомобили в автопарке обрабатываются ночью — утром готовы к рейсу"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Смена груза"
                description="При переходе с одного типа груза на другой (рыба → молочка) — обязательная обработка"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Экономика для автопарка">
            <ComparisonTable
              title="Сравнение методов санитарной обработки автопарка (50 машин)"
              headers={['Показатель', 'Озонирование', 'Химическая обработка']}
              rows={[
                { parameter: 'Оборудование', value1: '50-150 тыс. ₽ (единовременно)', value2: 'Не требуется' },
                {
                  parameter: 'Стоимость обработки 1 машины',
                  value1: '30-50 ₽ (электричество)',
                  value2: '500-1500 ₽ (услуга/материалы)',
                },
                { parameter: 'Персонал', value1: '1 оператор', value2: '3-5 мойщиков' },
                {
                  parameter: 'Время на машину',
                  value1: '30-40 мин (без участия)',
                  value2: '60-90 мин (ручная работа)',
                },
                { parameter: 'Устранение запахов', value1: 'Полное', value2: 'Частичное' },
                { parameter: 'Окупаемость', value1: '2-4 месяца', value2: '—' },
              ]}
            />

            <Paragraph>
              При обработке 50 машин 2 раза в неделю экономия составляет 100-200 тысяч рублей в месяц. Окупаемость
              озонаторов — 2-4 месяца. Дополнительный эффект — снижение жалоб клиентов на запахи и загрязнения.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Соответствие санитарным нормам">
            <Paragraph>Озонирование грузового транспорта соответствует требованиям:</Paragraph>
            <BulletList
              items={[
                'СанПиН 2.3.4.050-96 — транспортирование пищевых продуктов',
                'Технический регламент ТС 021/2011 — безопасность пищевой продукции',
                'ХАССП (HACCP) — критические контрольные точки в логистике',
                'ISO 22000 — системы менеджмента безопасности пищевой продукции',
                'Требования торговых сетей к поставщикам и перевозчикам',
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Документирование:</strong> Храните журналы обработки минимум 1 год. При аудитах ХАССП, проверках
              Роспотребнадзора или претензиях клиентов — это ваша защита.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Оборудование для автопарков">
            <Paragraph>Для обработки коммерческого транспорта применяются:</Paragraph>
            <BulletList
              items={[
                'Мобильные озонаторы 5-20 г/ч — для фургонов и средних грузовиков',
                'Переносные озонаторы 20-50 г/ч — для полуприцепов и крупного транспорта',
                'Настенные озонаторы — для стационарной установки в кузове',
                'Модификации 220В/230В — для работы от электрической сети без внешнего питания',
                'Системы с таймерами — для автоматической обработки по расписанию',
              ]}
            />

            <DataTable
              caption="Подбор озонатора по размеру автопарка"
              headers={['Размер парка', 'Рекомендуемое оборудование', 'Стоимость комплекта']}
              rows={[
                ['5-15 машин', '1-2 мобильных озонатора 10-20 г/ч', '30-60 тыс. ₽'],
                ['15-50 машин', '3-5 озонаторов 15-30 г/ч', '80-150 тыс. ₽'],
                ['50-100 машин', '5-10 озонаторов + стационарные зоны', '150-300 тыс. ₽'],
                ['100+ машин', 'Комплексные решения под задачу', 'Индивидуально'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="ROI для операторов автопарков">
            <Paragraph>Расчёт возврата инвестиций для автопарка из 30 грузовиков:</Paragraph>
            <BulletList
              items={[
                'Инвестиции: 100 000 ₽ (3 озонатора по 30-35 тыс. ₽)',
                'Экономия на персонале: 40 000 ₽/мес (высвобождение 1-2 уборщиков)',
                'Экономия на дезсредствах: 15 000 ₽/мес',
                'Снижение простоев: 10 000 ₽/мес (быстрая обработка)',
                'Итого экономия: ~65 000 ₽/мес',
                'Срок окупаемости: 1,5-2 месяца',
              ]}
            />

            <HighlightBox variant="success">
              <strong>Дополнительная выгода:</strong> Репутационный эффект. Чистые, без запаха грузовики — это
              уверенность клиентов в качестве перевозки. Крупные торговые сети и производители выбирают перевозчиков с
              подтверждённой санитарной обработкой.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Техника безопасности">
            <BulletList
              items={[
                'Обработка только при закрытом кузове и отсутствии людей внутри',
                'Не включать озонатор в кабине водителя',
                'После обработки — обязательное проветривание до входа в кузов',
                'При необходимости раннего входа — респиратор с угольным фильтром',
                'Не направлять выход озонатора на резиновые уплотнения',
                'Хранить озонатор в сухом вентилируемом месте',
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
