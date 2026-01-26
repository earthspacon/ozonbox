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

export function CarInteriorsPage() {
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
            <span className="text-text-primary font-medium">Салон автомобиля</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=80"
            alt="Озонирование салона автомобиля"
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
            Озонирование салона автомобиля
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Глубокая дезинфекция и дезодорация за 30-60 минут. Обработка сидений, ковриков, потолка и системы кондиционирования. Устранение запаха табака, еды, животных.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="30-60"
              label="Минут"
              description="Стандартная обработка салона"
              variant="primary"
            />
            <StatCard
              value="99,9%"
              label="Бактерий"
              description="Уничтожается в системе вентиляции"
              variant="accent"
            />
            <StatCard
              value="15"
              label="Минут"
              description="Проветривание после обработки"
              variant="primary"
            />
            <StatCard
              value="0"
              label="Следов"
              description="Химических остатков в салоне"
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
              Салон автомобиля — замкнутое пространство, в котором быстро накапливаются запахи: табачный дым, пот, еда, напитки, домашние животные. Все эти запахи впитываются в текстильные элементы салона: сиденья, ковры, потолок, а также в систему вентиляции и кондиционирования.
            </Paragraph>
            <Paragraph>
              Химчистка салона удаляет грязь и пятна, но не всегда справляется с въевшимися запахами. Ароматизаторы и освежители лишь маскируют проблему. Озонирование — единственный метод, который полностью уничтожает молекулы запаха, включая те, что находятся в воздуховодах кондиционера.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Важно:</strong> Неприятный запах при включении кондиционера — признак того, что в системе вентиляции развились бактерии и грибки. Обычная химчистка салона их не уничтожает. Озон же проникает во все воздуховоды и устраняет проблему в источнике.
          </HighlightBox>

          <ArticleSection title="Какие проблемы решает озонирование">
            <BulletList items={[
              'Запах табачного дыма — въевшийся в обивку, потолок, пластик',
              'Запах предыдущего владельца — при покупке б/у автомобиля',
              'Запах еды и напитков — пролитый кофе, фастфуд, испорченные продукты',
              'Запах домашних животных — шерсть, слюна, метки',
              'Запах сырости и плесени — после затопления или долгого простоя',
              'Бактерии в кондиционере — причина неприятного запаха при включении',
            ]} />
          </ArticleSection>

          <ArticleSection title="Процесс озонирования автомобиля">
            <ProcessList steps={[
              {
                title: 'Подготовка салона',
                description: 'Провести стандартную уборку: пропылесосить, протереть пластиковые поверхности. Удалить мусор и личные вещи. Достать коврики для отдельной обработки.'
              },
              {
                title: 'Размещение озонатора',
                description: 'Установить озонатор в салоне на переднем сиденье или на полу. Закрыть все окна и двери. Оставить небольшую щель для шланга питания, если озонатор внешний.'
              },
              {
                title: 'Обработка системы вентиляции',
                description: 'Включить зажигание, установить режим рециркуляции воздуха, включить вентилятор на максимум. Это обеспечит циркуляцию озона через систему кондиционирования.'
              },
              {
                title: 'Озонирование',
                description: 'Запустить озонатор на 20-40 минут при концентрации 20-40 мг/м³. При сильных запахах — до 60 минут. Покинуть автомобиль на время обработки.'
              },
              {
                title: 'Проветривание',
                description: 'Открыть все двери и окна. Проветривать 15-30 минут. Включить кондиционер на режим притока свежего воздуха. Автомобиль готов к использованию.'
              },
            ]} />
          </ArticleSection>

          <ArticleSection title="Режимы обработки для разных задач">
            <DataTable
              caption="Рекомендуемые параметры озонирования салона"
              headers={['Тип загрязнения', 'Концентрация', 'Время', 'Особенности']}
              rows={[
                ['Лёгкие запахи', '10-20 мг/м³', '20 мин', 'Профилактическая обработка'],
                ['Табачный дым (слабый)', '20-30 мг/м³', '30 мин', 'После курящего пассажира'],
                ['Табачный дым (сильный)', '30-40 мг/м³', '45-60 мин', 'Салон курильщика'],
                ['Запах животных', '30-40 мг/м³', '40-60 мин', 'С включённой рециркуляцией'],
                ['После затопления', '40-60 мг/м³', '60 мин', 'После просушки салона'],
                ['Дезинфекция кондиционера', '20-30 мг/м³', '30 мин', 'Только рециркуляция'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Озонирование как услуга автомоек и детейлинга">
            <Paragraph>
              Для автомоек и детейлинг-центров озонирование — высокомаржинальная дополнительная услуга. Оборудование компактно, не требует расходных материалов, окупается за 1-2 месяца при активном предложении клиентам.
            </Paragraph>

            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Высокая маржинальность"
                description="Себестоимость обработки — электроэнергия. Средний чек услуги: 1500-3000 ₽"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Быстрое выполнение"
                description="30-60 минут на обработку. Можно делать параллельно с химчисткой или полировкой"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Простота операций"
                description="Установил озонатор, включил, ушёл. Не требует квалифицированного персонала"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Дополнение к химчистке"
                description="Озонирование после химчистки — комплексная услуга с повышенным чеком"
              />
            </FeatureGrid>

            <HighlightBox variant="success">
              <strong>Маркетинговый совет:</strong> Предлагайте озонирование как обязательную часть предпродажной подготовки автомобиля. Покупатели б/у авто особенно чувствительны к посторонним запахам — это частая причина отказа от покупки.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Озонирование для каршеринга и такси">
            <Paragraph>
              Автопарки такси и каршеринга — идеальные клиенты для регулярного озонирования:
            </Paragraph>
            <BulletList items={[
              'Высокая оборачиваемость — множество разных пассажиров каждый день',
              'Накопление запахов — еда, напитки, парфюм, табак от пассажиров',
              'Санитарные требования — особенно актуально после пандемии',
              'Репутационные риски — жалобы на запах снижают рейтинг',
              'Регулярность — возможность заключения договора на обслуживание',
            ]} />

            <DataTable
              caption="Рекомендуемая периодичность озонирования"
              headers={['Тип автопарка', 'Рекомендуемая частота', 'Цель']}
              rows={[
                ['Каршеринг', '1 раз в неделю', 'Профилактика накопления запахов'],
                ['Такси эконом', '1 раз в 2 недели', 'Поддержание свежести салона'],
                ['Такси бизнес/комфорт', '1 раз в неделю', 'Высокий стандарт качества'],
                ['Арендные авто', 'После каждого клиента', 'Подготовка к следующей аренде'],
                ['Корпоративный транспорт', '1 раз в месяц', 'Профилактическая обработка'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Сравнение с альтернативными методами">
            <ComparisonTable
              title="Озонирование vs химические освежители"
              headers={['Параметр', 'Озонирование', 'Освежители/нейтрализаторы']}
              rows={[
                { parameter: 'Принцип действия', value1: 'Разрушение молекул запаха', value2: 'Маскировка другим запахом' },
                { parameter: 'Система вентиляции', value1: 'Полная обработка', value2: 'Не обрабатывается' },
                { parameter: 'Длительность эффекта', value1: 'Постоянно (до нового загрязнения)', value2: 'Временно (часы/дни)' },
                { parameter: 'Дезинфекция', value1: 'Да (убивает бактерии)', value2: 'Нет' },
                { parameter: 'Безопасность', value1: 'Распадается до O₂', value2: 'Химические соединения' },
                { parameter: 'Необходимость присутствия', value1: 'Нет (автоматически)', value2: 'Требует применения' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Особенности работы с разными типами салонов">
            <DataTable
              caption="Рекомендации по типу обивки"
              headers={['Тип салона', 'Особенности', 'Рекомендации']}
              rows={[
                ['Тканевый', 'Хорошо впитывает запахи', 'Увеличить время обработки на 20%'],
                ['Кожаный', 'Меньше впитывает, легче обрабатывается', 'Стандартный режим'],
                ['Экокожа', 'Аналогично натуральной коже', 'Стандартный режим'],
                ['Алькантара', 'Микрофибра, хорошо впитывает', 'Как для тканевого салона'],
                ['Комбинированный', 'Разные материалы', 'Ориентироваться на тканевые элементы'],
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Важно:</strong> После озонирования кожаного салона рекомендуется обработать кожу кондиционером. Озон может слегка подсушивать натуральную кожу, хотя при правильных концентрациях это не критично.
            </HighlightBox>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Добавить озонирование в услуги автомойки?</h2>
          <p className="cta__text">Получите консультацию по выбору оборудования и организации услуги</p>
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
