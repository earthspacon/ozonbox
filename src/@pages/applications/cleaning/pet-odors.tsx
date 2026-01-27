import Image from 'next/image'

import { Layout } from '@/widgets'

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

export function PetOdorsPage() {
  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
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
            <span className="text-text-primary font-medium">Запахи животных</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
            alt="Удаление запаха домашних животных"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 container">
          <AppLink
            href="/applications/cleaning"
            className="mb-6 inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
          >
            <IconArrowLeft style={{ width: 20, height: 20 }} />
            <span>Клининг</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Удаление запаха домашних животных
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            Полное устранение запаха кошачьей и собачьей мочи, меток, шерсти. Разрушение кристаллов мочевой кислоты на
            молекулярном уровне — запах не вернётся.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard value="100%" label="Устранение" description="Кристаллов мочевой кислоты" variant="primary" />
            <StatCard value="4-8 ч" label="Время обработки" description="Стандартная процедура" variant="accent" />
            <StatCard value="2-3" label="Цикла" description="При сильном заражении" variant="primary" />
            <StatCard value="99,9%" label="Бактерий" description="Уничтожается дополнительно" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Запах домашних животных, особенно кошачьей мочи — одна из самых частых причин обращения в клининговые
              компании. Этот запах практически невозможно устранить обычными средствами. Освежители воздуха лишь
              маскируют проблему, а запах возвращается снова и снова, особенно во влажную погоду.
            </Paragraph>
            <Paragraph>
              Причина стойкости запаха — мочевая кислота. В отличие от других компонентов мочи (мочевины и урохрома),
              она не растворяется в воде и кристаллизуется в волокнах ткани. При повышении влажности кристаллы
              активируются и снова выделяют резкий аммиачный запах.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Почему обычные средства не работают:</strong> Большинство чистящих средств удаляют водорастворимые
            компоненты мочи, создавая иллюзию чистоты. Но кристаллы мочевой кислоты остаются в волокнах ткани и
            активируются при повышении влажности. Озон разрушает эти кристаллы химически, что делает результат
            постоянным.
          </HighlightBox>

          <ArticleSection title="Как озон устраняет запах животных">
            <Paragraph>
              Озон — сильнейший окислитель, который разрушает молекулярную структуру мочевой кислоты. Будучи газом, он
              проникает везде, куда могла попасть моча: в обивку мебели, ковры, матрасы, плинтусы, щели в полу.
            </Paragraph>
            <BulletList
              items={[
                'Окисляет кристаллы мочевой кислоты до безопасных соединений',
                'Проникает в пористые материалы на всю глубину',
                'Обрабатывает труднодоступные места (под мебелью, за плинтусами)',
                'Уничтожает бактерии, вызывающие дополнительный запах',
                'Нейтрализует феромоны, которыми животные метят территорию',
                'Не оставляет химических остатков после обработки',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Типы запахов домашних животных">
            <DataTable
              caption="Характеристики различных запахов и методы обработки"
              headers={['Источник запаха', 'Особенности', 'Режим обработки']}
              rows={[
                ['Кошачья моча', 'Самый стойкий, содержит мочевую кислоту', '40-60 мг/м³, 6-8 часов, 2-3 цикла'],
                ['Собачья моча', 'Менее концентрирован, легче удаляется', '20-40 мг/м³, 4-6 часов, 1-2 цикла'],
                ['Метки (территория)', 'Концентрированные, с феромонами', '40-60 мг/м³, 8-12 часов, 2-3 цикла'],
                ['Запах шерсти', 'Органический, от кожного сала', '10-20 мг/м³, 2-4 часа, 1 цикл'],
                ['Запах лотка', 'Смесь мочи и фекалий', '20-40 мг/м³, 4-6 часов, 1-2 цикла'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Процесс озонирования помещения с запахом животных">
            <ProcessList
              steps={[
                {
                  title: 'Локализация источников',
                  description:
                    'Определить все места, где животные оставляли метки. Использовать УФ-фонарик — моча светится в ультрафиолете. Отметить все обнаруженные пятна.',
                },
                {
                  title: 'Предварительная очистка',
                  description:
                    'Обработать видимые пятна ферментным очистителем. Он расщепляет органические компоненты мочи. Дать полностью высохнуть перед озонированием.',
                },
                {
                  title: 'Подготовка помещения',
                  description:
                    'Убрать домашних животных и комнатные растения. Закрыть окна, двери, вентиляцию. Поднять шторы и занавески для лучшего доступа озона.',
                },
                {
                  title: 'Озонирование',
                  description:
                    'Установить озонатор в центре помещения. Включить на 4-8 часов при концентрации 20-60 мг/м³. Для равномерного распределения использовать вентилятор.',
                },
                {
                  title: 'Оценка и повторная обработка',
                  description:
                    'Проветрить помещение 1-2 часа. Оценить результат. При сильном заражении повторить обработку через 24 часа. Обычно требуется 2-3 цикла.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Сравнение методов устранения запаха">
            <ComparisonTable
              title="Озонирование vs традиционные средства"
              headers={['Критерий', 'Озонирование', 'Ферментные/химические средства']}
              rows={[
                { parameter: 'Принцип действия', value1: 'Разрушение молекул', value2: 'Расщепление ферментами' },
                {
                  parameter: 'Глубина проникновения',
                  value1: 'На всю толщину материала',
                  value2: 'Только поверхность',
                },
                {
                  parameter: 'Труднодоступные места',
                  value1: 'Да (газ проникает везде)',
                  value2: 'Нет (только ручная обработка)',
                },
                { parameter: 'Длительность эффекта', value1: 'Постоянно', value2: 'Может потребоваться повторение' },
                {
                  parameter: 'Время обработки',
                  value1: '4-8 часов (автоматически)',
                  value2: '1-24 часа (ручной труд)',
                },
                { parameter: 'Дезинфекция', value1: 'Да (убивает бактерии)', value2: 'Частично' },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Особые случаи обработки">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Квартира с несколькими кошками"
                description="Многократные метки по всему периметру. Требуется 3-4 цикла озонирования с высокой концентрацией"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Деревянный пол"
                description="Моча впитывается в дерево. Озонирование — единственный способ обработать древесину без замены"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Подготовка к продаже/сдаче"
                description="Покупатели чувствительны к запахам. Озонирование — обязательная процедура для квартир с животными"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Мягкая мебель"
                description="Диваны и кресла — любимые места для меток. Можно обработать локально, накрыв плёнкой"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Локальная обработка мебели">
            <Paragraph>
              Если запах локализован в конкретном предмете мебели, можно провести камерное озонирование:
            </Paragraph>
            <BulletList
              items={[
                'Накройте предмет полиэтиленовой плёнкой, создав «камеру»',
                'Придавите края плёнки к полу для герметичности',
                'Подведите шланг от озонатора под плёнку',
                'Включите озонатор на 2-4 часа',
                'Это создаёт высокую концентрацию озона непосредственно в предмете',
                'После обработки — проветривание 30-60 минут',
              ]}
            />

            <HighlightBox variant="success">
              <strong>Совет:</strong> Для усиления эффекта при обработке мягкой мебели слегка увлажните поверхность из
              пульверизатора. Влага активирует кристаллы мочевой кислоты, делая их более доступными для окисления
              озоном.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Профилактика повторного заражения">
            <Paragraph>После озонирования важно предотвратить повторное появление меток:</Paragraph>
            <BulletList
              items={[
                'Устраните причину меток (стресс, болезнь, конфликт с другими животными)',
                'Используйте феромоновые диффузоры для снижения тревожности',
                'Обеспечьте достаточное количество лотков (по правилу N+1, где N — число кошек)',
                'Регулярно чистите лотки — грязный лоток провоцирует метки',
                'При необходимости проведите кастрацию/стерилизацию животного',
                'Для быстрого устранения свежих меток используйте ферментные очистители',
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Техника безопасности:</strong> Озонирование проводится в полном отсутствие животных! Озон токсичен
              для домашних питомцев так же, как и для людей. Верните животных в помещение только после полного
              проветривания (1-2 часа).
            </HighlightBox>
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Избавиться от запаха животных навсегда?</h2>
          <p className="cta__text">Получите консультацию по обработке квартир, мебели и автомобилей</p>
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
