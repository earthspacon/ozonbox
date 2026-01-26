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

export function ColdStoragePage() {
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
            <span className="text-text-primary font-medium">Холодильные камеры</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1920&q=80"
            alt="Холодильные камеры"
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
            Озонирование холодильных камер
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Дезинфекция и дезодорация холодильных складов. Обработка загруженных камер без отепления, сокращение простоя в 5 раз, устранение затхлых запахов.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="5x"
              label="Быстрее"
              description="Сокращение простоя камер под дезинфекцию"
              variant="primary"
            />
            <StatCard
              value="35-40"
              label="мг/м³"
              description="Концентрация для пустых камер"
              variant="accent"
            />
            <StatCard
              value="24"
              label="часа"
              description="Время обработки пустых камер"
              variant="primary"
            />
            <StatCard
              value="0"
              label="Отепления"
              description="Обработка при низких температурах"
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
              Дезинфекция и дезодорация холодильников — одно из важнейших санитарно-гигиенических мероприятий, направленных на предупреждение порчи и снижения качества хранящихся пищевых продуктов. Озонирование имеет значительные преимущества перед «мокрым» способом дезинфекции.
            </Paragraph>
            <Paragraph>
              Практика показала, что озонирование холодильных камер и складов позволяет продлить сроки хранения продукции, удалить неприятные запахи и предотвратить формирование плесневых колоний — всё это без отепления камеры и выгрузки продукции.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Инструкция Минторга СССР 1973 г.:</strong> «Дезинфекция и дезодорация в холодильниках способом озонирования» — рабочая концентрация озона для дезинфекции помещений, свободных от грузов: 35-40 мг/м³, продолжительность озонирования 24 часа.
          </HighlightBox>

          <ArticleSection title="Преимущества озонирования холодильников">
            <BulletList items={[
              'Возможность дезинфекции камер, загруженных пищевыми продуктами',
              'Обработка без отепления камеры — эффективность повышается при низких температурах',
              'Сокращение времени простоя камеры в 5 раз по сравнению с «мокрой» дезинфекцией',
              'Незаменимо для борьбы с затхлым запахом в холодильниках',
              'Угнетение бактериальной флоры на стенах, решётках, крюках, поддонах',
              'Предотвращение плесени на стенах хранилища, ящиках и упаковке',
              'Экономия электроэнергии — не требуется повторная выработка холода',
              'Минимальные затраты рабочей силы — автоматизированный процесс',
            ]} />
          </ArticleSection>

          <ArticleSection title="Озонирование камер, свободных от грузов">
            <Paragraph>
              Свободные от грузов камеры перед озонированием очищают от снега, льда, остатков продуктов, видимых колоний плесени. Обязательно удаляют снеговую «шубу». Двери камеры плотно закрывают, сообщающиеся воздушные каналы перекрывают шиберами.
            </Paragraph>

            <DataTable
              caption="Периоды распада озона после отключения озонатора"
              headers={['Начальная концентрация', 'Конечная концентрация', 'Время (до 400 м³)', 'Время (свыше 400 м³)']}
              rows={[
                ['40 мг/м³', '20 мг/м³', '0,4 часа', '0,2 часа'],
                ['20 мг/м³', '10 мг/м³', '0,8 часа', '0,4 часа'],
                ['10 мг/м³', '5 мг/м³', '1,2 часа', '0,6 часа'],
                ['5 мг/м³', '2,5 мг/м³', '1,6 часа', '0,8 часа'],
                ['2,5 мг/м³', '0,1 мг/м³', '3,6 часа', '1,8 часа'],
              ]}
            />

            <HighlightBox variant="warning">
              Для камер, сильно заражённых плесенью, и камер с устойчивыми запахами продолжительность озонирования может быть увеличена до 36, а в отдельных случаях — до 48 часов.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Озонирование камер с продукцией">
            <Paragraph>
              На основании данных зарубежной практики и результатов применения озонирования на отдельных холодильниках рекомендуются следующие концентрации озона для камер, загруженных продуктами:
            </Paragraph>

            <DataTable
              caption="Рекомендуемые режимы озонирования продукции животного происхождения"
              headers={['Продукт', 'Температура', 'Концентрация', 'Время', 'Периодичность']}
              rows={[
                ['Охлаждённое мясо', '-1...-4°C', '8-10 мг/м³', '4-5 ч', 'Через день'],
                ['Замороженное мясо', '-18°C', '10 мг/м³', '3 ч', 'Ежедневно'],
                ['Тушки птицы (охл.)', '-1...-4°C', '8-10 мг/м³', '2-3 ч', 'Ежедневно'],
                ['Тушки птицы (зам.)', '-18°C', '8-12 мг/м³', '3 ч', 'Ежедневно'],
                ['Колбасные изделия', '+12°C', '3-10 мг/м³', '3-4 ч', 'Через 2-3 дня'],
                ['Сыры', '-4...+4°C', '3-4 мг/м³', '5-7 ч', 'Через 2-3 дня'],
                ['Яйцо', '-1,5...+0,5°C', '3-6 мг/м³', '3-5 ч', 'По мере появления запаха'],
              ]}
            />

            <DataTable
              caption="Рекомендуемые режимы озонирования плодоовощной продукции"
              headers={['Продукт', 'Температура', 'Концентрация', 'Время', 'Периодичность']}
              rows={[
                ['Картофель', '+2...+3°C', '10-15 мг/м³', '6 ч', 'Через 10 дней'],
                ['Морковь', '0...-1°C', '15-30 мг/м³', '6 ч', 'Через 8-10 дней'],
                ['Яблоки', '0...-2°C', '1-3 мг/м³', '0,5-2 ч', 'Ежедневно'],
                ['Лук репчатый', '-1...-3°C', '25-30 мг/м³', '5-6 ч', 'Через 3 дня'],
                ['Виноград', '0...-2°C', '4-6 мг/м³', '3 ч', 'Ежедневно'],
              ]}
            />
          </ArticleSection>

          <ComparisonTable
            title="Сравнение методов дезинфекции холодильных камер"
            headers={['Параметр', 'Озонирование', '«Мокрая» дезинфекция']}
            rows={[
              { parameter: 'Выгрузка продукции', value1: 'Не требуется', value2: 'Обязательна' },
              { parameter: 'Отепление камеры', value1: 'Не требуется', value2: 'Обязательно' },
              { parameter: 'Время простоя', value1: '24 часа', value2: '5-7 суток' },
              { parameter: 'Расход электроэнергии', value1: 'Минимальный', value2: 'Значительный' },
              { parameter: 'Трудозатраты', value1: 'Минимальные', value2: 'Высокие' },
              { parameter: 'Химические остатки', value1: 'Отсутствуют', value2: 'Требуется промывка' },
              { parameter: 'Обработка труднодоступных мест', value1: 'Полная', value2: 'Затруднена' },
            ]}
          />

          <ArticleSection title="Дезодорация холодильников">
            <Paragraph>
              Озонирование незаменимо для борьбы с затхлым запахом, образующимся в холодильниках и морозильных камерах. При дезодорации камеры выдерживают после отключения озонатора в течение суток без проветривания — озон полностью распадается до кислорода.
            </Paragraph>
            <Paragraph>
              Озон окисляет и разрушает органические соединения, вызывающие неприятные запахи. Это позволяет использовать одну камеру для хранения разных видов продукции поочерёдно без риска переноса запахов.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Организация процесса озонирования">
            <Paragraph>
              В озонируемой камере озонатор устанавливают в середине камеры на столе высотой примерно 1,2 м. При двух-трёх озонаторах их размещают в разных точках камеры для равномерного распределения озона. Вентиляторы воздухоохладителей выключают.
            </Paragraph>

            <HighlightBox variant="success">
              <strong>Рекомендация ВНИХИ:</strong> Для повышения эффективности озонирования после достижения рабочей концентрации рекомендуется кратковременно включить вентиляторы для перемешивания озоно-воздушной смеси.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Преимущества для холодильных складов">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Обработка загруженных камер"
                description="Дезинфекция без выгрузки продукции и остановки работы склада"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Работа при минусовых температурах"
                description="Эффективность озонирования повышается при низких температурах"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Устранение запахов"
                description="Полная дезодорация камеры без применения химических средств"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия ресурсов"
                description="Сокращение простоя в 5 раз, экономия электроэнергии и труда"
              />
            </FeatureGrid>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование на вашем холодильном складе?</h2>
          <p className="cta__text">Получите расчёт оборудования с учётом объёма камер и типов хранимой продукции</p>
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
