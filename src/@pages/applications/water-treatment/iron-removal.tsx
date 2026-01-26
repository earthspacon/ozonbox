import Image from 'next/image'
import { Layout } from '@/widgets'
import { AppLink } from '@/shared/ui/app-link'
import { IconArrowLeft, IconCheck } from '@/shared/ui/icons'
import {
  StatCard,
  StatGrid,
  HighlightBox,
  DataTable,
  ArticleSection,
  Paragraph,
  BulletList,
  FeatureCard,
  FeatureGrid,
  ComparisonTable,
  ProcessList,
} from '@/shared/ui/article-components'

export function IronRemovalPage() {
  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-b border-border">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              Применение
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink href="/applications/water-treatment" className="text-text-secondary hover:text-primary transition-colors">
              Водоочистка
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Удаление железа и марганца</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1920&q=80"
            alt="Обезжелезивание воды"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10">
          <AppLink href="/applications/water-treatment" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>Водоочистка</span>
          </AppLink>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Обезжелезивание и деманганация воды
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Удаление железа и марганца озонированием — эффективное решение для сложных случаев с органическими комплексами металлов
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="0,43"
              label="мг O₃ / мг Fe"
              description="Доза озона на железо"
              variant="primary"
            />
            <StatCard
              value="0,87"
              label="мг O₃ / мг Mn"
              description="Доза озона на марганец"
              variant="accent"
            />
            <StatCard
              value="< 0,3"
              label="мг/л Fe"
              description="Остаточное железо (норма СанПиН)"
              variant="primary"
            />
            <StatCard
              value="< 0,1"
              label="мг/л Mn"
              description="Остаточный марганец (норма СанПиН)"
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
              Железо и марганец — наиболее часто встречающиеся металлические примеси в природной воде, причём чаще всего они присутствуют вместе. Хотя железо не является токсичным веществом, его присутствие в воде приводит к ухудшению органолептических и вкусовых свойств, появлению бурого осадка на поверхностях, контактирующих с водой. Марганец относится к категории опасных веществ.
            </Paragraph>
            <Paragraph>
              Озонирование особенно эффективно, когда железо и марганец содержатся в воде в виде органических комплексных соединений. Стандартные методы обезжелезивания (аэрация, известкование, катионирование) в этом случае неэффективны. Озон окисляет комплексные соединения, вызывая осаждение металлов в нерастворимые формы.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="warning">
            <strong>СанПиН 2.1.4.1074-01:</strong> ПДК железа в питьевой воде — 0,3 мг/л, марганца — 0,1 мг/л. Превышение этих норм делает воду непригодной для питьевого водоснабжения и технологических нужд.
          </HighlightBox>

          <ArticleSection title="Сравнение методов обезжелезивания">
            <ComparisonTable
              headers={['Параметр', 'Озонирование', 'Аэрация + фильтрация']}
              rows={[
                { parameter: 'Эффективность по Fe', value1: '> 95%', value2: '80-90%' },
                { parameter: 'Эффективность по Mn', value1: '> 95%', value2: '50-70%' },
                { parameter: 'Удаление органических комплексов', value1: 'Да', value2: 'Нет' },
                { parameter: 'Снижение цветности', value1: 'Да (до 80%)', value2: 'Частично' },
                { parameter: 'Работа при любом pH', value1: 'Да (6-9)', value2: 'Требует pH > 7,5' },
                { parameter: 'Обеззараживание', value1: 'Да', value2: 'Нет' },
                { parameter: 'Удаление H₂S', value1: 'Да', value2: 'Частично' },
                { parameter: 'Необходимость реагентов', value1: 'Нет', value2: 'Может потребоваться' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Химия окисления железа озоном">
            <HighlightBox variant="info">
              <strong>Реакция окисления железа:</strong><br />
              2Fe²⁺ + O₃ + H₂O → 2Fe³⁺ + O₂ + 2OH⁻<br />
              Fe³⁺ + 3H₂O → Fe(OH)₃↓ + 3H⁺<br /><br />
              Озон окисляет Fe²⁺ до Fe³⁺, который образует нерастворимый гидроксид железа Fe(OH)₃, легко удаляемый фильтрацией. Реакция протекает при pH от 6 до 9.
            </HighlightBox>

            <DataTable
              caption="Стехиометрические соотношения для окисления металлов"
              headers={['Металл', 'Теоретическая доза озона', 'Практическая доза озона', 'Примечание']}
              rows={[
                ['Железо (Fe²⁺)', '0,43 мг O₃ / мг Fe', '1 мг O₃ / мг Fe', 'С учётом органики'],
                ['Марганец (Mn²⁺)', '0,87 мг O₃ / мг Mn', '4 мг O₃ / мг Mn', 'С учётом органики'],
                ['Сероводород (H₂S)', '3,0 мг O₃ / мг H₂S', '3-5 мг O₃ / мг H₂S', 'До элементарной серы'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Химия окисления марганца озоном">
            <HighlightBox variant="info">
              <strong>Реакция окисления марганца:</strong><br />
              Mn²⁺ + O₃ + H₂O → MnO₂↓ + 2H⁺ + O₂<br /><br />
              Озон окисляет Mn²⁺ до Mn⁴⁺, который образует нерастворимый диоксид марганца MnO₂. При pH около 8 реакция протекает наиболее эффективно.
            </HighlightBox>

            <Paragraph>
              <strong>Важно:</strong> При избытке озона возможно дальнейшее окисление марганца до Mn⁷⁺ с образованием растворимого перманганата MnO₄⁻ (розовая окраска воды). В присутствии органических соединений перманганат распадается до MnO₂. При высоких концентрациях марганца применяется двойное озонирование.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Технологический процесс обезжелезивания">
            <ProcessList
              steps={[
                {
                  title: 'Подача исходной воды',
                  description: 'Вода с повышенным содержанием железа и марганца подаётся в контактную ёмкость. Предварительная фильтрация от грубых примесей.',
                },
                {
                  title: 'Генерация озона',
                  description: 'Атмосферный воздух очищается фильтром, подаётся в концентратор кислорода (85-95% O₂), затем в генератор озона.',
                },
                {
                  title: 'Озонирование в контактной камере',
                  description: 'Барботирование озоно-воздушной смеси через слой воды или инжекция через эжектор Вентури. Время контакта: 5-15 минут.',
                },
                {
                  title: 'Осаждение окисленных металлов',
                  description: 'Fe(OH)₃ и MnO₂ выпадают в осадок в контактной ёмкости. Периодическая промывка ёмкости для удаления осадка.',
                },
                {
                  title: 'Механическая фильтрация',
                  description: 'Удаление взвешенных частиц окисленных металлов через песчаный фильтр. Размер пор: 10-50 мкм.',
                },
                {
                  title: 'Угольная фильтрация',
                  description: 'Финишная очистка через активированный уголь для удаления остаточного озона и улучшения органолептических свойств.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Двойное озонирование (для высоких концентраций Mn)">
            <Paragraph>
              При содержании марганца более 0,5 мг/л может потребоваться схема двойного озонирования: первичное озонирование исходной воды, фильтрование, затем вторичное озонирование фильтрата. Это предотвращает образование растворимого перманганата.
            </Paragraph>

            <DataTable
              caption="Результаты двойного озонирования (г. Аштон, Англия)"
              headers={['Показатель', 'До обработки', 'После обработки']}
              rows={[
                ['Марганец, мг/л', '0,5', '0,05'],
                ['Цветность, градусы', '22', '5'],
                ['Мутность, НТU', '15', '< 2'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Проблемы органических комплексов">
            <Paragraph>
              В нефтеносных районах, где вода содержит большое количество органических примесей, железо и марганец часто находятся в виде органических комплексных соединений. Это делает стандартные методы обезжелезивания неэффективными.
            </Paragraph>

            <BulletList items={[
              'Аэрация не работает: органические комплексы не окисляются кислородом воздуха',
              'Известкование неэффективно: комплексные соединения не осаждаются при повышении pH',
              'Катионирование затруднено: органические комплексы не обмениваются на ионообменных смолах',
              'Озон решает проблему: разрушает органические комплексы, высвобождая металлы для осаждения',
            ]} />

            <HighlightBox variant="success">
              <strong>Преимущество озона:</strong> Окисление металлов озоном эффективно протекает при любых значениях pH, встречающихся в природных водах (6-9), в то время как для окисления марганца кислородом воздуха требуется pH &gt; 10.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Рекомендуемые параметры систем">
            <DataTable
              caption="Подбор оборудования по производительности"
              headers={['Производительность, м³/час', 'Мощность озонатора, г/ч', 'Объём контактной камеры, м³']}
              rows={[
                ['1-5', '5-25', '0,2-1'],
                ['5-20', '25-100', '1-4'],
                ['20-50', '100-250', '4-10'],
                ['50-100', '250-500', '10-20'],
                ['100-500', '500-2500', '20-100'],
              ]}
            />

            <Paragraph>
              <strong>Примечание:</strong> Мощность озонатора рассчитана для воды с содержанием Fe до 10 мг/л и Mn до 1 мг/л. При более высоких концентрациях требуется индивидуальный расчёт.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования для обезжелезивания">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Универсальность"
                description="Эффективно удаляет железо и марганец любых форм, включая органические комплексы."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Широкий диапазон pH"
                description="Работает при pH 6-9 без необходимости коррекции кислотности воды."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Комплексное действие"
                description="Одновременно обеззараживает воду, устраняет цветность, запахи, окисляет H₂S."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Без реагентов"
                description="Озон производится на месте из воздуха. Не требуется закупка и хранение химикатов."
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Нормативные требования">
            <DataTable
              caption="ПДК железа и марганца по СанПиН"
              headers={['Металл', 'Питьевая вода', 'Бутилированная вода', 'Класс опасности']}
              rows={[
                ['Железо (Fe)', '0,3 мг/л', '0,3 мг/л', 'III'],
                ['Марганец (Mn)', '0,1 мг/л', '0,05 мг/л', 'III'],
              ]}
            />

            <BulletList items={[
              'СанПиН 2.1.4.1074-01 «Питьевая вода. Гигиенические требования к качеству воды централизованных систем питьевого водоснабжения»',
              'СанПиН 2.1.4.1116-02 «Питьевая вода. Гигиенические требования к качеству воды, расфасованной в ёмкости»',
              'ГОСТ 2874-82 «Вода питьевая. Гигиенические требования и контроль за качеством»',
            ]} />
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Проблемы с железом или марганцем в воде?</h2>
          <p className="cta__text">Получите бесплатный расчёт системы обезжелезивания для вашего объекта</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              Получить расчёт
            </AppLink>
            <a href="tel:+78001234567" className="btn btn--secondary btn--large" style={{ borderColor: 'white', color: 'white' }}>
              Позвонить: 8 (800) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
