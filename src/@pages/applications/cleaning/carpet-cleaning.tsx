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

export function CarpetCleaningPage() {
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
            <AppLink href="/applications/cleaning" className="text-text-secondary hover:text-primary transition-colors">
              Клининг
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Ковры и мягкая мебель</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Озонирование ковров и мягкой мебели"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10">
          <AppLink href="/applications/cleaning" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>Клининг</span>
          </AppLink>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Озонирование ковров и мягкой мебели
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Глубокая дезодорация и дезинфекция текстиля. Устранение запаха затхлости, уничтожение пылевых клещей, профилактика плесени. Идеальное дополнение к химчистке.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="99%"
              label="Клещей"
              description="Погибает при озонировании"
              variant="primary"
            />
            <StatCard
              value="2-4 ч"
              label="Обработка"
              description="Локальная камерная обработка"
              variant="accent"
            />
            <StatCard
              value="100%"
              label="Глубина"
              description="Проникновение в волокна"
              variant="primary"
            />
            <StatCard
              value="+50%"
              label="К чеку"
              description="Дополнительно к химчистке"
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
              Ковры и мягкая мебель — главные накопители загрязнений в помещении. Текстильные волокна впитывают пыль, споры грибков, бактерии, частицы кожи, пот, пролитые жидкости. Со временем формируется характерный затхлый запах, который невозможно устранить обычным пылесосом или даже химчисткой.
            </Paragraph>
            <Paragraph>
              Химчистка удаляет грязь и пятна, но не всегда справляется с глубокими запахами и микроорганизмами, живущими в толще материала. Озонирование — идеальное дополнение, которое обеспечивает полную дезодорацию и дезинфекцию после влажной чистки.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Почему ковры пахнут:</strong> В 1 грамме ковровой пыли живёт до 100 000 пылевых клещей. Их экскременты — сильнейший аллерген. Бактерии разлагают органические загрязнения, выделяя пахучие соединения. Озон уничтожает и клещей, и бактерии, устраняя причину запаха.
          </HighlightBox>

          <ArticleSection title="Что обрабатывается озоном">
            <BulletList items={[
              'Ковры и ковровые покрытия — напольные, настенные, ручной работы',
              'Мягкая мебель — диваны, кресла, пуфы, банкетки',
              'Матрасы и подушки — включая ортопедические',
              'Шторы и портьеры — без снятия с карниза',
              'Мягкие игрушки — безопасно для детских изделий',
              'Автомобильные сиденья — как отдельная услуга',
            ]} />
          </ArticleSection>

          <ArticleSection title="Методы озонирования текстиля">
            <Paragraph>
              Существует два основных метода: обработка всего помещения и локальная камерная обработка конкретного предмета.
            </Paragraph>

            <ComparisonTable
              title="Сравнение методов озонирования текстиля"
              headers={['Параметр', 'Обработка помещения', 'Камерная обработка']}
              rows={[
                { parameter: 'Область применения', value1: 'Все текстильные поверхности сразу', value2: 'Конкретный предмет мебели/ковёр' },
                { parameter: 'Концентрация озона', value1: '20-40 мг/м³', value2: '40-80 мг/м³' },
                { parameter: 'Время обработки', value1: '4-8 часов', value2: '2-4 часа' },
                { parameter: 'Расход озона', value1: 'Высокий (большой объём)', value2: 'Низкий (малый объём)' },
                { parameter: 'Эффективность', value1: 'Равномерная', value2: 'Максимальная локально' },
                { parameter: 'Когда использовать', value1: 'Общая дезодорация помещения', value2: 'Сильный локальный запах' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Техника камерной обработки">
            <ProcessList steps={[
              {
                title: 'Подготовка предмета',
                description: 'При необходимости провести предварительную химчистку или сухую чистку. Дать полностью высохнуть. Слегка увлажнить поверхность из пульверизатора для активации загрязнений.'
              },
              {
                title: 'Создание камеры',
                description: 'Накрыть предмет полиэтиленовой плёнкой. Плотно прижать края к полу, создав герметичную «камеру». Оставить небольшое отверстие для шланга озонатора.'
              },
              {
                title: 'Подключение озонатора',
                description: 'Вставить шланг под плёнку. Закрепить, чтобы озон не выходил. Включить озонатор. Плёнка должна слегка надуться от подачи газа.'
              },
              {
                title: 'Экспозиция',
                description: 'Выдержать 2-4 часа в зависимости от интенсивности запаха. Для сильных загрязнений — до 8 часов. Периодически можно переворачивать подушки для равномерной обработки.'
              },
              {
                title: 'Завершение',
                description: 'Выключить озонатор. Снять плёнку. Проветрить предмет 30-60 минут. Озон полностью распадается, не оставляя следов.'
              },
            ]} />

            <HighlightBox variant="success">
              <strong>Совет:</strong> Для усиления эффекта при обработке мебели или ковра с пятнами мочи предварительно обработайте загрязнённые места ферментным очистителем. Затем высушите и проведите озонирование.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Озонирование после химчистки">
            <Paragraph>
              Озонирование — идеальный финальный этап профессиональной химчистки:
            </Paragraph>
            <BulletList items={[
              'Удаляет запах химических средств, используемых при чистке',
              'Уничтожает бактерии, которые могут остаться после влажной обработки',
              'Устраняет глубокие запахи, с которыми не справилась химчистка',
              'Предотвращает развитие плесени в непросохших участках',
              'Дезактивирует аллергены (клещи, споры, пыльца)',
              'Повышает потребительскую ценность услуги химчистки',
            ]} />

            <DataTable
              caption="Комплексная услуга: химчистка + озонирование"
              headers={['Этап', 'Что делается', 'Результат']}
              rows={[
                ['1. Сухая чистка', 'Удаление пыли, шерсти, крупного мусора', 'Подготовка к влажной обработке'],
                ['2. Влажная чистка', 'Удаление пятен и загрязнений', 'Чистая поверхность'],
                ['3. Сушка', 'Просушивание до 10-15% влажности', 'Предотвращение плесени'],
                ['4. Озонирование', 'Дезодорация и дезинфекция', 'Свежий запах, убиты микробы'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Озонирование после затопления">
            <Paragraph>
              Затопление — особый случай, требующий быстрой реакции. Влажный текстиль — идеальная среда для развития плесени. Озонирование предотвращает эту проблему:
            </Paragraph>
            <BulletList items={[
              'Сначала максимально просушить ковры и мебель (осушители, вентиляторы)',
              'Остаточная влажность не должна превышать 15-20%',
              'Озонирование проводить при первых признаках затхлого запаха',
              'Концентрация озона: 40-60 мг/м³ для профилактики плесени',
              'Время обработки: 6-12 часов для полной дезинфекции',
              'При обнаружении плесени — обработать ингибитором перед озонированием',
            ]} />

            <HighlightBox variant="warning">
              <strong>Важно:</strong> Если плесень уже видна на поверхности, одного озонирования недостаточно. Сначала удалите плесень механически и обработайте антисептиком. Озон уничтожит оставшиеся споры и запах, но не удалит грибницу физически.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Преимущества для клининговых компаний">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Увеличение среднего чека"
                description="Озонирование после химчистки — дополнительные 30-50% к стоимости услуги"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Решение сложных случаев"
                description="Запахи, с которыми не справляется химчистка, устраняются озоном"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Быстрая окупаемость"
                description="Озонатор окупается за 1-2 месяца при регулярном использовании"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Конкурентное преимущество"
                description="Не все химчистки предлагают озонирование — выделитесь на рынке"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Рекомендуемые режимы обработки">
            <DataTable
              caption="Параметры озонирования для разных типов текстиля"
              headers={['Тип изделия', 'Метод', 'Концентрация', 'Время']}
              rows={[
                ['Ковёр (слабый запах)', 'Помещение', '20-30 мг/м³', '4-6 часов'],
                ['Ковёр (сильный запах)', 'Камерная', '40-60 мг/м³', '4-8 часов'],
                ['Диван', 'Камерная', '40-60 мг/м³', '3-4 часа'],
                ['Матрас', 'Камерная', '30-50 мг/м³', '2-4 часа'],
                ['Шторы (на карнизе)', 'Помещение', '20-40 мг/м³', '4-6 часов'],
                ['Мягкие игрушки', 'Камерная (в пакете)', '30-40 мг/м³', '1-2 часа'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Безопасность для материалов">
            <Paragraph>
              Озон безопасен для большинства текстильных материалов при соблюдении рекомендуемых концентраций:
            </Paragraph>
            <BulletList items={[
              'Натуральные ткани (хлопок, лён, шерсть) — безопасно',
              'Синтетические ткани (полиэстер, нейлон) — безопасно',
              'Натуральная кожа — безопасно, но рекомендуется последующая обработка кондиционером',
              'Латекс и резина — не рекомендуется длительная обработка высокими концентрациями',
              'Окрашенные ткани — безопасно, озон не обесцвечивает при рекомендуемых режимах',
              'Деликатные ткани (шёлк, вискоза) — безопасно при стандартных концентрациях',
            ]} />

            <HighlightBox variant="info">
              <strong>Примечание:</strong> Озон может незначительно ускорять старение резины и латекса при регулярных обработках высокими концентрациями. Для мебели с резиновыми элементами используйте стандартные режимы.
            </HighlightBox>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Добавить озонирование к услугам химчистки?</h2>
          <p className="cta__text">Получите консультацию по выбору оборудования и интеграции в рабочий процесс</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              Получить консультацию
            </AppLink>
          </div>
        </div>
      </section>
    </Layout>
  )
}
