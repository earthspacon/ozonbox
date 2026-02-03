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

export function OilRemovalPage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('industry')

  return (
    <Layout>
      <Seo title={t('subcategories.oil-removal.title', { ns })} description={t('subcategories.oil-removal.shortDesc', { ns })} />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink
              href="/applications/industry"
              className="text-text-secondary hover:text-primary transition-colors"
            >
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.oil-removal.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1920&q=80"
            alt={t('subcategories.oil-removal.title', { ns })}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/industry"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.oil-removal.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.oil-removal.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="95-99%"
              label="Эффективность очистки"
              description="Удаление нефтепродуктов из сточных вод"
              variant="primary"
            />
            <StatCard value="0,05" label="мг/л ПДК" description="Достижение норматива сброса" variant="accent" />
            <StatCard value="3-5" label="мг О₃/мг НП" description="Расход озона на деструкцию" variant="primary" />
            <StatCard
              value="0"
              label="Вторичных загрязнений"
              description="Минерализация до CO₂ и H₂O"
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
              Сточные воды промышленных предприятий, загрязнённые нефтепродуктами, представляют одну из наиболее
              серьёзных экологических проблем. Один литр нефти способен загрязнить до 1 миллиона литров воды, создавая
              плёнку, препятствующую газообмену и угрожающую гибелью водной экосистеме.
            </Paragraph>
            <Paragraph>
              Озонирование — передовой метод глубокой очистки нефтесодержащих сточных вод, обеспечивающий деструкцию
              углеводородов до углекислого газа и воды. В отличие от традиционных методов (флотация, сорбция,
              биоочистка), озонирование обеспечивает полную минерализацию загрязнителей без образования вторичных
              отходов.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>Нормативные требования:</strong> ПДК нефтепродуктов для сброса в водоёмы рыбохозяйственного
            назначения — 0,05 мг/л (ГОСТ 17.1.3.07-82). Для сброса в городскую канализацию — 4,0 мг/л. Превышение ПДК
            влечёт экологические платежи и штрафы до 2 млн рублей.
          </HighlightBox>

          <ArticleSection title="Механизм окисления нефтепродуктов озоном">
            <Paragraph>
              Озон — мощный окислитель с окислительно-восстановительным потенциалом 2,07 В (против 1,36 В у хлора). При
              взаимодействии с нефтепродуктами протекают реакции окислительной деструкции:
            </Paragraph>
            <BulletList
              items={[
                'Расщепление длинноцепочечных углеводородов до короткоцепочечных',
                'Окисление ароматических соединений с раскрытием бензольного кольца',
                'Образование промежуточных продуктов: альдегиды, кетоны, карбоновые кислоты',
                'Полная минерализация до CO₂ и H₂O при достаточной дозе озона',
                'Деструкция полициклических ароматических углеводородов (ПАУ)',
              ]}
            />

            <DataTable
              caption="Кинетика окисления нефтепродуктов озоном"
              headers={['Класс соединений', 'Константа скорости, М⁻¹·с⁻¹', 'Время полураспада, мин']}
              rows={[
                ['Алифатические углеводороды', '10² — 10³', '15-30'],
                ['Ароматические (бензол, толуол)', '10³ — 10⁴', '5-15'],
                ['Полиароматические (ПАУ)', '10⁴ — 10⁵', '1-5'],
                ['Нафтеновые кислоты', '10³ — 10⁴', '5-10'],
                ['Фенолы', '10⁵ — 10⁶', '<1'],
              ]}
            />

            <HighlightBox variant="info">
              <strong>Окислительная деструкция vs. сорбция:</strong> В отличие от активированного угля, который только
              концентрирует загрязнители и требует регенерации или утилизации, озонирование разрушает молекулы
              нефтепродуктов, исключая образование вторичных отходов.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Технологическая схема очистки">
            <Paragraph>
              Промышленная установка озонирования нефтесодержащих стоков включает несколько ступеней обработки для
              достижения максимальной эффективности:
            </Paragraph>

            <ProcessList
              steps={[
                {
                  title: 'Предварительная механическая очистка',
                  description:
                    'Удаление взвешенных веществ, отстаивание в нефтеловушках. Снижение концентрации нефтепродуктов до 30-50 мг/л.',
                },
                {
                  title: 'Флотация с озоновоздушной смесью',
                  description:
                    'Подача озоновоздушной смеси (5-10 мг/л) через эжекторы. Флотация эмульгированных нефтепродуктов.',
                },
                {
                  title: 'Контактная камера озонирования',
                  description:
                    'Глубокое окисление растворённых нефтепродуктов. Доза озона 3-5 мг на 1 мг нефтепродуктов. Время контакта 20-30 минут.',
                },
                {
                  title: 'Дегазация и доочистка',
                  description:
                    'Удаление избыточного озона и продуктов окисления. При необходимости — фильтрация через активированный уголь.',
                },
                {
                  title: 'Контроль качества',
                  description:
                    'Автоматический мониторинг концентрации нефтепродуктов на выходе. Регулирование дозы озона по показаниям датчиков.',
                },
              ]}
            />

            <DataTable
              caption="Параметры озонирования для различных концентраций нефтепродуктов"
              headers={[
                'Исходная концентрация НП, мг/л',
                'Доза озона, мг/л',
                'Время контакта, мин',
                'Остаточная концентрация, мг/л',
              ]}
              rows={[
                ['5-10', '15-30', '15-20', '<0,05'],
                ['10-20', '30-60', '20-30', '<0,05'],
                ['20-50', '60-150', '30-45', '<0,1'],
                ['50-100', '150-300', '45-60', '<0,3'],
                ['>100', 'Двухступенчатая обработка', '60-90', '<0,5'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Типы нефтесодержащих стоков и особенности очистки">
            <Paragraph>Эффективность озонирования зависит от состава и концентрации нефтепродуктов в стоках:</Paragraph>

            <DataTable
              caption="Характеристика нефтесодержащих стоков по отраслям"
              headers={['Источник стоков', 'Типичная концентрация НП, мг/л', 'Особенности состава', 'Режим очистки']}
              rows={[
                ['НПЗ, нефтебазы', '50-500', 'Лёгкие фракции, бензол, толуол', 'Флотация + озонирование'],
                ['Автотранспорт, АЗС', '10-100', 'Масла, топливо, ПАВ', 'Прямое озонирование'],
                ['Машиностроение', '20-200', 'СОЖ, эмульсии, масла', 'Деэмульгация + озонирование'],
                ['Судоремонт', '50-300', 'Тяжёлые фракции, смолы', 'Многоступенчатая обработка'],
                ['Металлургия', '10-50', 'Технические масла, сажа', 'Флокуляция + озонирование'],
              ]}
            />

            <HighlightBox variant="success">
              <strong>Синергетический эффект:</strong> Комбинирование озонирования с УФ-облучением (процесс O₃/UV)
              повышает эффективность окисления на 30-40% за счёт образования гидроксильных радикалов (•OH) с
              окислительным потенциалом 2,80 В.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Технические характеристики промышленных озонаторов">
            <Paragraph>
              Для очистки нефтесодержащих стоков применяются высокопроизводительные генераторы озона коронного разряда:
            </Paragraph>

            <DataTable
              caption="Линейка промышленных озонаторов для очистки стоков"
              headers={['Модель', 'Производительность, г О₃/ч', 'Объём стоков, м³/ч', 'Потребляемая мощность, кВт']}
              rows={[
                ['OZT-100', '100', '3-5', '1,2'],
                ['OZT-500', '500', '15-25', '5,5'],
                ['OZT-1000', '1000', '30-50', '10'],
                ['OZT-2000', '2000', '60-100', '18'],
                ['OZT-5000', '5000', '150-250', '45'],
              ]}
            />

            <BulletList
              items={[
                'Кислородное питание для максимальной концентрации озона (до 12% по массе)',
                'Система охлаждения для стабильной работы при высоких нагрузках',
                'Автоматическое регулирование производительности по сигналу датчиков',
                'Деструктор остаточного озона с каталитическим преобразованием',
                'Система безопасности с аварийным отключением при утечке озона',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Экологические и экономические показатели">
            <ComparisonTable
              title="Сравнение методов очистки нефтесодержащих стоков"
              headers={['Параметр', 'Озонирование', 'Традиционные методы']}
              rows={[
                { parameter: 'Эффективность очистки', value1: '95-99%', value2: '70-90%' },
                { parameter: 'Остаточная концентрация НП', value1: '<0,05 мг/л', value2: '0,5-5 мг/л' },
                { parameter: 'Образование шлама', value1: 'Нет', value2: '2-5% от объёма' },
                { parameter: 'Расход реагентов', value1: 'Только кислород', value2: 'Коагулянты, сорбенты' },
                { parameter: 'Эксплуатационные затраты', value1: '15-25 руб/м³', value2: '30-60 руб/м³' },
                { parameter: 'Капитальные затраты', value1: 'Средние', value2: 'Низкие-средние' },
                { parameter: 'Занимаемая площадь', value1: 'Минимальная', value2: 'Значительная' },
              ]}
            />

            <HighlightBox variant="info">
              <strong>Расчёт экономии:</strong> При сбросе 100 м³/сут стоков с концентрацией НП 20 мг/л превышение ПДК
              составляет 400 раз. Плата за сброс — до 50 000 руб/месяц. Озонирование окупается за 8-12 месяцев только на
              экономии экологических платежей.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Соответствие нормативным требованиям">
            <Paragraph>Озонирование обеспечивает соответствие действующим нормативам:</Paragraph>
            <BulletList
              items={[
                'СанПиН 2.1.5.980-00 — Гигиенические требования к охране поверхностных вод',
                'ГОСТ 17.1.3.07-82 — Правила контроля качества воды водоёмов',
                'Приказ Минсельхоза № 552 — Нормативы качества воды для рыбохозяйственных водоёмов',
                'Федеральный закон № 7-ФЗ «Об охране окружающей среды»',
                'Постановление Правительства № 644 — Правила холодного водоснабжения и водоотведения',
              ]}
            />

            <DataTable
              caption="ПДК нефтепродуктов для различных категорий водопользования"
              headers={['Категория водоёма', 'ПДК, мг/л', 'Класс опасности']}
              rows={[
                ['Рыбохозяйственные водоёмы высшей категории', '0,05', '3'],
                ['Рыбохозяйственные водоёмы I категории', '0,05', '3'],
                ['Рыбохозяйственные водоёмы II категории', '0,05', '3'],
                ['Хозяйственно-питьевое водопользование', '0,1', '4'],
                ['Сброс в городскую канализацию', '4,0', '—'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества промышленного озонирования">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экологическая безопасность"
                description="Полная минерализация нефтепродуктов без вторичных загрязнений и отходов для утилизации"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Соответствие ПДК"
                description="Гарантированное достижение нормативов для сброса в водоёмы рыбохозяйственного назначения"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Автоматизация процесса"
                description="Автоматическое регулирование дозы озона по показаниям датчиков концентрации"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Снижение платежей"
                description="Экономия на экологических платежах и штрафах за превышение ПДК"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Универсальность"
                description="Эффективная очистка от всех классов нефтепродуктов: алифатических, ароматических, ПАУ"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Низкие эксплуатационные затраты"
                description="Отсутствие расходных материалов — только электроэнергия и кислород"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Кейс: НПЗ мощностью 6 млн тонн/год">
            <Paragraph>Внедрение озонирования на очистных сооружениях нефтеперерабатывающего завода:</Paragraph>
            <DataTable
              caption="Результаты внедрения системы озонирования"
              headers={['Показатель', 'До внедрения', 'После внедрения', 'Эффект']}
              rows={[
                ['Объём стоков, м³/сут', '5 000', '5 000', '—'],
                ['Концентрация НП на входе, мг/л', '25-40', '25-40', '—'],
                ['Концентрация НП на выходе, мг/л', '0,8-1,5', '0,03-0,05', '-96%'],
                ['Экологические платежи, млн руб/год', '18,5', '0,2', '-99%'],
                ['Расход коагулянтов, т/год', '120', '0', '-100%'],
                ['Образование шлама, т/год', '850', '0', '-100%'],
                ['Срок окупаемости', '—', '14 месяцев', '—'],
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
