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
} from '@/shared/ui/article-components'

export function BottledWaterPage() {
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
            <AppLink href="/applications/food-production" className="text-text-secondary hover:text-primary transition-colors">
              Пищевое производство
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">Бутилированная вода</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1920&q=80"
            alt="Бутилированная вода"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container relative z-10">
          <AppLink href="/applications/food-production" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>Пищевое производство</span>
          </AppLink>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Озонирование при розливе бутилированной воды
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Финишное озонирование — стандарт отрасли для стерилизации питьевой воды, тары и оборудования. Соответствие СанПиН без применения хлора.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="0,1"
              label="мг/л озона"
              description="Максимальная остаточная концентрация по СанПиН"
              variant="primary"
            />
            <StatCard
              value="99,9%"
              label="Стерилизация"
              description="Уничтожение патогенных микроорганизмов"
              variant="accent"
            />
            <StatCard
              value="1 г/м³"
              label="Производительность"
              description="Рекомендуемая доза озонатора на объём воды"
              variant="primary"
            />
            <StatCard
              value="9"
              label="мг/л кислорода"
              description="Насыщение воды высшей категории"
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
              Производители питьевой воды часто сталкиваются с ситуацией, когда добытая из проверенной скважины и прошедшая все степени очистки вода портится уже на полках магазинов. Причина — вторичное загрязнение непосредственно на линии розлива при контакте с воздухом, оборудованием и нестерильной тарой.
            </Paragraph>
            <Paragraph>
              Финишное озонирование решает эту проблему комплексно: озон не только обеззараживает воду, но и дезинфицирует оборудование для розлива и стерилизует тару. После закупорки бутылок озон в течение нескольких часов разлагается до кислорода, не оставляя следов и улучшая вкусовые качества воды.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>СанПиН 2.1.4.1116-02:</strong> «Не допускается применение препаратов хлора для обработки питьевых вод, предназначенных для розлива, предпочтительными методами обеззараживания являются озонирование и физические методы обработки, в частности, УФ-облучение.»
          </HighlightBox>

          <ArticleSection title="Преимущества финишного озонирования">
            <BulletList items={[
              'Стерилизация воды, бутылки, воздуха внутри тары и пробки одновременно',
              'Среда остаётся стерильной до момента вскрытия упаковки',
              'Насыщение воды кислородом — обязательное требование для воды высшей категории',
              'Полный распад озона до кислорода без химических остатков',
              'Единственный допустимый метод консервации воды для детского питания',
              'Отсутствие необходимости в дополнительной дезинфекции тары',
            ]} />
          </ArticleSection>

          <ArticleSection title="Нормативные требования">
            <DataTable
              caption="Требования СанПиН 2.1.4.1116-02 к бутилированной воде"
              headers={['Показатель', 'Первая категория', 'Высшая категория']}
              rows={[
                ['Остаточный озон', '≤ 0,1 мг/л', '≤ 0,1 мг/л'],
                ['Содержание кислорода', '≥ 5 мг/л', '≥ 9 мг/л'],
                ['Время контакта озона', '≥ 12 минут', '≥ 12 минут'],
                ['Использование хлора', 'Запрещено', 'Запрещено'],
                ['Серебро (детское питание)', 'Допустимо', 'Запрещено'],
              ]}
            />

            <HighlightBox variant="success">
              Для воды детского питания озонирование — возможно, единственный вариант консервирования, поскольку использование ионов серебра и диоксида углерода запрещено СанПиН.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Принципиальная схема финишного озонирования">
            <Paragraph>
              Установка озонирования размещается непосредственно перед машиной розлива. Система включает генератор кислорода, генератор озона, систему подачи и растворения озона в воде, а также анализатор содержания озона или ОВП-метр для контроля.
            </Paragraph>

            <DataTable
              caption="Состав оборудования для финишного озонирования"
              headers={['Компонент', 'Назначение', 'Характеристики']}
              rows={[
                ['Генератор кислорода', 'Подача чистого кислорода', 'Концентрация O₂ ≥ 90%'],
                ['Генератор озона', 'Выработка озона', '1 г/час на 1 м³/час воды'],
                ['Эжектор / диффузор', 'Растворение озона в воде', 'Эффективность > 90%'],
                ['Контактная ёмкость', 'Обеспечение времени контакта', '≥ 12 минут'],
                ['Анализатор озона', 'Контроль концентрации', '0-2 мг/л'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Ограничения для минеральной воды">
            <Paragraph>
              При озонировании минеральной воды недопустимо содержание примесей, окисляемых озоном: железа, марганца, сероводорода, бромида, природных органических веществ. Реакция озона с бромидом приводит к образованию бромата, норма содержания которого в питьевой воде — 10 мкг/л.
            </Paragraph>
            <Paragraph>
              Растворённые металлы после взаимодействия с озоном переходят в нерастворимые оксиды, что приводит к появлению окраски и осадка в воде. Поэтому перед финишным озонированием вода должна быть предварительно очищена в соответствии с требованиями СанПиН.
            </Paragraph>
          </ArticleSection>

          <ComparisonTable
            title="Сравнение методов обеззараживания воды"
            headers={['Параметр', 'Озонирование', 'УФ-обработка']}
            rows={[
              { parameter: 'Стерилизация тары', value1: 'Да', value2: 'Нет' },
              { parameter: 'Насыщение кислородом', value1: 'Да', value2: 'Нет' },
              { parameter: 'Остаточный эффект', value1: 'Да', value2: 'Нет' },
              { parameter: 'Дезинфекция оборудования', value1: 'Да', value2: 'Нет' },
              { parameter: 'Улучшение вкуса', value1: 'Да', value2: 'Нет' },
              { parameter: 'Требует контакта', value1: '≥ 12 минут', value2: 'Мгновенно' },
            ]}
          />

          <ArticleSection title="Преимущества озонирования для производителей">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Соответствие требованиям"
                description="Полное соответствие СанПиН 2.1.4.1116-02 и техническим регламентам ЕАЭС"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Увеличение срока хранения"
                description="Стерильная среда сохраняется до вскрытия упаковки — продукция не портится"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Детское питание"
                description="Единственный разрешённый метод консервации для воды детского питания"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия на химии"
                description="Не требуется отдельная дезинфекция тары химическими средствами"
              />
            </FeatureGrid>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование на вашей линии розлива?</h2>
          <p className="cta__text">Получите расчёт оборудования и консультацию по соответствию требованиям СанПиН</p>
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
