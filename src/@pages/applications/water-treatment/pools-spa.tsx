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

export function PoolsSpaPage() {
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
            <span className="text-text-primary font-medium">Бассейны и SPA</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=1920&q=80"
            alt="Бассейн"
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
            Озонирование бассейнов и SPA
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Кристально чистая вода без запаха хлорки. Не раздражает глаза и кожу даже при длительном купании.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="7×"
              label="Меньше хлора"
              description="Снижение концентрации хлора"
              variant="primary"
            />
            <StatCard
              value="0"
              label="Раздражения"
              description="Глаз и кожи при купании"
              variant="accent"
            />
            <StatCard
              value="3000×"
              label="Сильнее хлора"
              description="По бактерицидному действию"
              variant="primary"
            />
            <StatCard
              value="Голубая"
              label="Вода"
              description="Приятный естественный оттенок"
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
              Хлорирование бассейнов — традиционный метод обеззараживания, однако он имеет существенные недостатки: резкий запах «хлорки», раздражение глаз и слизистых, сухость кожи, обесцвечивание волос и купальников. Озонирование позволяет получить воду высочайшего качества, практически исключив эти проблемы.
            </Paragraph>
            <Paragraph>
              Озон — сильнейший окислитель, превосходящий хлор по бактерицидному действию в 3000 раз. Он уничтожает бактерии, вирусы, споры и простейших, разрушает плотные оболочки микроводорослей. При этом вода приобретает приятный голубоватый оттенок.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>СанПиН 2.1.2.1188-03:</strong> Озонирование рекомендовано как современный метод обеззараживания воды бассейнов, позволяющий снизить концентрацию хлора до минимально необходимого уровня.
          </HighlightBox>

          <ArticleSection title="Преимущества озонирования воды в бассейнах">
            <ComparisonTable
              headers={['Параметр', 'Озон + мин. хлор', 'Только хлор']}
              rows={[
                { parameter: 'Запах воды', value1: 'Нет запаха', value2: 'Резкий запах хлорки' },
                { parameter: 'Раздражение глаз', value1: 'Нет', value2: 'Да, при длительном купании' },
                { parameter: 'Раздражение кожи', value1: 'Нет', value2: 'Сухость, шелушение' },
                { parameter: 'Воздействие на волосы', value1: 'Минимальное', value2: 'Обесцвечивание, сухость' },
                { parameter: 'Цвет воды', value1: 'Голубоватый, прозрачный', value2: 'Может зеленеть' },
                { parameter: 'Побочные продукты', value1: 'Нет (распад до O₂)', value2: 'Трихлорамины (токсичны)' },
                { parameter: 'Эффективность против вирусов', value1: 'Очень высокая', value2: 'Средняя' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Технология озонирования бассейнов">
            <Paragraph>
              Озон подаётся в циркуляционную воду после фильтрации, перед возвратом в чашу бассейна. Рекомендуемая доза озона для бассейнов — 0,7-0,9 г/м³ циркуляционной воды. Время контакта в контактной ёмкости — 6-7 минут.
            </Paragraph>

            <DataTable
              caption="Параметры озонирования бассейнов"
              headers={['Параметр', 'Значение', 'Примечание']}
              rows={[
                ['Доза озона', '0,7-0,9 г/м³', 'На объём циркуляционной воды'],
                ['Время контакта', '6-7 минут', 'В контактной ёмкости'],
                ['Остаточный озон на выходе', '< 0,1 мг/л', 'Перед входом в чашу'],
                ['Остаточный хлор', '0,1-0,3 мг/л', 'Для пролонгированного эффекта'],
                ['pH воды', '7,2-7,6', 'Оптимальный диапазон'],
              ]}
            />

            <HighlightBox variant="success">
              При совместном использовании озона и хлора достаточно поддерживать содержание хлора на уровне 0,1 мг/л вместо обычных 0,7 мг/л. Это практически исключает раздражающее действие на кожу и глаза.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Что уничтожает озон в воде бассейна">
            <BulletList items={[
              'Бактерии: кишечная палочка, синегнойная палочка, стафилококки',
              'Вирусы: энтеровирусы, аденовирусы, ротавирусы',
              'Простейшие: криптоспоридии, лямблии (устойчивы к хлору!)',
              'Микроводоросли: разрушает плотные клеточные оболочки',
              'Органические загрязнения: пот, моча, косметика, кремы',
              'Хлорамины: разрушает вредные побочные продукты хлорирования',
            ]} />

            <Paragraph>
              Особенно важно, что озон эффективен против криптоспоридий — паразитов, вызывающих диарею. Они крайне устойчивы к хлору (для их уничтожения нужно 10 000 мг/л×мин хлора), но уязвимы для озона.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Озонирование для разных типов бассейнов">
            <DataTable
              caption="Рекомендуемые системы озонирования"
              headers={['Тип бассейна', 'Объём', 'Производительность озонатора']}
              rows={[
                ['Частный бассейн', '25-60 м³', '2-5 г/ч'],
                ['Бассейн фитнес-клуба', '100-300 м³', '10-30 г/ч'],
                ['Гостиничный бассейн', '200-500 м³', '20-50 г/ч'],
                ['Общественный бассейн', '500-2000 м³', '50-200 г/ч'],
                ['Аквапарк', '2000+ м³', 'Индивидуальный расчёт'],
                ['SPA, джакузи', '2-10 м³', '1-3 г/ч'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества для владельцев бассейнов">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Комфорт посетителей"
                description="Нет запаха хлорки, раздражения глаз и кожи. Приятное купание."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия на химии"
                description="Расход хлора снижается в 5-7 раз, экономия на реагентах."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Соответствие СанПиН"
                description="Метод рекомендован санитарными правилами для бассейнов."
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Чистая вода"
                description="Кристально прозрачная вода голубого оттенка — показатель качества."
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Особенности для SPA и джакузи">
            <Paragraph>
              В SPA и джакузи повышенная температура воды (32-40°C) создаёт благоприятные условия для размножения бактерий, включая легионеллу. Озонирование особенно эффективно в этих условиях:
            </Paragraph>
            <BulletList items={[
              'Уничтожение легионеллы — опасного возбудителя пневмонии',
              'Разрушение биоплёнок в трубопроводах и форсунках',
              'Устранение запаха «затхлой воды» в редко используемых джакузи',
              'Профилактика грибковых инфекций (микозов)',
              'Отсутствие раздражения при длительных SPA-процедурах',
            ]} />
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Хотите чистую воду без хлорки?</h2>
          <p className="cta__text">Получите бесплатную консультацию и расчёт системы озонирования для вашего бассейна</p>
          <div className="cta__actions">
            <AppLink href="/contacts" className="btn btn--white btn--large">
              Получить консультацию
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
