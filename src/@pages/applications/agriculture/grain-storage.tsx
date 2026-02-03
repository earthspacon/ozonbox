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

export function GrainStoragePage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('agriculture')

  return (
    <Layout>
      <Seo title={t('subcategories.grain-storage.title', { ns })} description={t('subcategories.grain-storage.shortDesc', { ns })} />
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
            <span className="text-text-primary font-medium">{t('subcategories.grain-storage.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&q=80"
            alt={t('subcategories.grain-storage.title', { ns })}
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
            {t('subcategories.grain-storage.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.grain-storage.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="95-99%"
              label="Уничтожение вредителей"
              description="На всех стадиях развития"
              variant="primary"
            />
            <StatCard
              value="80-95%"
              label="Обеззараживание"
              description="Снижение микробной обсеменённости"
              variant="accent"
            />
            <StatCard
              value="17-22%"
              label="Рост урожайности"
              description="При предпосевной обработке"
              variant="primary"
            />
            <StatCard value="40-60%" label="Снижение потерь" description="При хранении зерна" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Хранение зерна — ответственный процесс, где потери от вредителей и микроорганизмов могут составлять от 5
              до 50% мирового производства. Традиционная фумигация химическими препаратами создаёт риски для здоровья и
              окружающей среды.
            </Paragraph>
            <Paragraph>
              Озонирование семян и зерна позволяет эффективно бороться с вредителями и предотвращать распространение
              плесени, полностью сохраняя органолептические и питательные свойства продукции. Это экологически
              безопасная альтернатива химической фумигации.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Мировой опыт:</strong> Озонирование зерна применяется в США, Канаде, Австралии и странах ЕС как
            экологически безопасная альтернатива фосфину и бромистому метилу, запрещённому Монреальским протоколом.
          </HighlightBox>

          <ArticleSection title="Направления применения озона">
            <BulletList
              items={[
                'Дезинсекция зерна — уничтожение амбарных вредителей',
                'Дезинфекция — снижение микробной и грибковой обсеменённости',
                'Детоксикация — разрушение микотоксинов',
                'Предпосевная обработка семян — повышение всхожести',
                'Обеззараживание зернохранилищ — подготовка к загрузке',
                'Консервация зерна — продление сроков хранения',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Уничтожение амбарных вредителей">
            <Paragraph>
              Озон поражает насекомых и клещей на всех стадиях развития: яйца, личинки, куколки и имаго. Механизм
              действия основан на окислении липидов кутикулы и разрушении дыхательной системы насекомых.
            </Paragraph>

            <DataTable
              caption="Эффективность озонирования против вредителей зерна"
              headers={['Вредитель', 'Концентрация O₃', 'Время обработки', 'Смертность']}
              rows={[
                ['Амбарный долгоносик', '30-50 мг/м³', '30-60 мин', '95-99%'],
                ['Рисовый долгоносик', '30-50 мг/м³', '30-60 мин', '96-99%'],
                ['Зерновой точильщик', '40-60 мг/м³', '45-90 мин', '95-98%'],
                ['Мучной хрущак', '40-60 мг/м³', '60-120 мин', '93-97%'],
                ['Суринамский мукоед', '30-50 мг/м³', '30-60 мин', '97-99%'],
                ['Зерновая моль', '20-40 мг/м³', '30-45 мин', '98-99%'],
                ['Амбарный клещ', '50-80 мг/м³', '60-120 мин', '90-95%'],
              ]}
            />

            <HighlightBox variant="success">
              В отличие от химической фумигации, озонирование не оставляет остаточных веществ в зерне. После обработки
              озон быстро разлагается до кислорода, и продукция полностью безопасна для употребления.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Обеззараживание и снижение микотоксинов">
            <Paragraph>
              Плесневые грибки на зерне продуцируют опасные микотоксины: афлатоксины, зеараленон, дезоксиниваленол
              (DON). Озонирование уничтожает грибки и частично разрушает уже образовавшиеся токсины.
            </Paragraph>

            <DataTable
              caption="Эффективность озонирования против грибков и микотоксинов"
              headers={['Показатель', 'Концентрация O₃', 'Время', 'Эффективность']}
              rows={[
                ['Общая микрофлора', '20-40 мг/м³', '15-60 мин', '80-95%'],
                ['Плесневые грибки', '30-50 мг/м³', '30-60 мин', '85-95%'],
                ['Aspergillus (афлатоксины)', '40-60 мг/м³', '45-90 мин', '90-95%'],
                ['Fusarium (DON, зеараленон)', '40-60 мг/м³', '60-120 мин', '75-90%'],
                ['Афлатоксин B1', '50-100 мг/м³', '120-180 мин', '60-80%'],
                ['Зеараленон', '50-100 мг/м³', '120-180 мин', '50-70%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Режимы озонирования зерна">
            <Paragraph>
              Выбор режима зависит от целей обработки: профилактика, дезинсекция или обеззараживание. Важно учитывать
              влажность зерна, температуру и герметичность хранилища.
            </Paragraph>

            <DataTable
              caption="Рекомендуемые режимы озонирования"
              headers={['Цель обработки', 'Концентрация O₃', 'Время', 'Периодичность']}
              rows={[
                ['Профилактика', '10-20 мг/м³', '4-6 часов', 'Раз в 2-4 недели'],
                ['Дезинсекция', '30-60 мг/м³', '1-2 часа', 'По необходимости'],
                ['Обеззараживание', '30-50 мг/м³', '1-3 часа', 'При загрузке/выгрузке'],
                ['Глубокая обработка', '60-100 мг/м³', '2-4 часа', 'Раз в 3-6 месяцев'],
                ['Предпосевная обработка', '10-30 мг/м³', '30-60 мин', 'Перед посевом'],
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Важно:</strong> При обработке зерна с влажностью выше 14% эффективность озонирования снижается.
              Рекомендуется предварительная сушка или увеличение дозы озона на 20-30%.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Предпосевная обработка семян">
            <Paragraph>
              Обработка семян озоном повышает всхожесть, энергию прорастания и устойчивость всходов к неблагоприятным
              условиям. Исследования подтверждают значительный прирост урожайности.
            </Paragraph>

            <DataTable
              caption="Результаты предпосевной обработки семян озоном"
              headers={['Культура', 'Режим обработки', 'Рост всхожести', 'Прибавка урожая']}
              rows={[
                ['Пшеница', '10-20 мг/м³, 30 мин', '+5-8%', '+18-22%'],
                ['Ячмень', '10-20 мг/м³, 30 мин', '+6-10%', '+14-17,5%'],
                ['Кукуруза', '15-25 мг/м³, 45 мин', '+4-7%', '+12-16%'],
                ['Подсолнечник', '15-25 мг/м³, 45 мин', '+5-8%', '+10-14%'],
                ['Соя', '10-20 мг/м³, 30 мин', '+6-9%', '+13-18%'],
                ['Рис', '10-15 мг/м³, 20 мин', '+7-12%', '+15-20%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Технология озонирования зернохранилищ">
            <ProcessList
              steps={[
                {
                  title: 'Подготовка хранилища',
                  description: 'Очистка от остатков зерна и пыли. Проверка герметичности ворот, люков и швов.',
                },
                {
                  title: 'Установка оборудования',
                  description: 'Размещение озонатора и системы распределения озона. Подключение к электросети.',
                },
                {
                  title: 'Герметизация',
                  description: 'Закрытие всех отверстий, установка предупреждающих знаков о проведении обработки.',
                },
                {
                  title: 'Подача озона',
                  description: 'Запуск озонатора, контроль концентрации датчиками. Время обработки 2-6 часов.',
                },
                {
                  title: 'Выдержка',
                  description: 'После достижения целевой концентрации выдержка 30-60 минут без подачи озона.',
                },
                {
                  title: 'Дегазация',
                  description: 'Включение вентиляции для удаления остаточного озона. Контроль ПДК (0,1 мг/м³).',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Сравнение с химической фумигацией">
            <DataTable
              caption="Озонирование vs химическая фумигация"
              headers={['Параметр', 'Озонирование', 'Фосфин (PH₃)']}
              rows={[
                ['Остатки в продукте', 'Нет', 'Есть (ПДК 0,1 мг/кг)'],
                ['Экологичность', 'Полная', 'Токсичен для окружающей среды'],
                ['Время обработки', '2-6 часов', '3-7 суток'],
                ['Резистентность вредителей', 'Не формируется', 'Растёт с каждым применением'],
                ['Безопасность персонала', 'Высокая (при соблюдении ПДК)', 'Низкая (сильный яд)'],
                ['Влияние на качество зерна', 'Положительное', 'Может снижать всхожесть'],
                ['Стоимость обработки', 'Средняя', 'Низкая-средняя'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования при хранении зерна">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экологическая безопасность"
                description="Озон разлагается до кислорода — никаких остатков в зерне и окружающей среде"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Комплексное действие"
                description="Уничтожение вредителей, грибков, бактерий и частичная детоксикация микотоксинов"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Сохранение качества"
                description="Не ухудшает органолептические и питательные свойства зерна, повышает всхожесть семян"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Быстрая обработка"
                description="2-6 часов против 3-7 суток при фумигации — экономия времени в 10-20 раз"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Нет резистентности"
                description="У вредителей не вырабатывается устойчивость к озону — эффективность сохраняется"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Рост урожайности"
                description="Предпосевная обработка семян повышает урожайность на 15-22%"
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
