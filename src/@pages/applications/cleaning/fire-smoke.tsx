import { useTranslate } from '@tolgee/react'
import Image from 'next/image'

import { Layout } from '@/widgets/layout'

import { getCategoryNamespace, NAMESPACES } from '@/shared/config/tolgee'
import { AppLink } from '@/shared/ui/app-link'
import {
  ArticleSection,
  BulletList,
  ComparisonTable,
  CTASection,
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

export function FireSmokePage() {
  const { t } = useTranslate()
  const ns = getCategoryNamespace('cleaning')

  return (
    <Layout>
      <Seo
        title={t('subcategories.fire-smoke.title', { ns })}
        description={t('subcategories.fire-smoke.shortDesc', { ns })}
      />
      {/* Breadcrumbs */}
      <div className="bg-bg-light border-border border-b">
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm">
            <AppLink href="/applications" className="text-text-secondary hover:text-primary transition-colors">
              {t('nav.applications', { ns: NAMESPACES.common })}
            </AppLink>
            <span className="text-text-light">/</span>
            <AppLink href="/applications/cleaning" className="text-text-secondary hover:text-primary transition-colors">
              {t('title', { ns })}
            </AppLink>
            <span className="text-text-light">/</span>
            <span className="text-text-primary font-medium">{t('subcategories.fire-smoke.title', { ns })}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt={t('subcategories.fire-smoke.title', { ns })}
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
            <span>{t('title', { ns })}</span>
          </AppLink>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t('subcategories.fire-smoke.title', { ns })}
          </h1>
          <p className="max-w-3xl text-xl text-white/80 md:text-2xl">
            {t('subcategories.fire-smoke.shortDesc', { ns })}
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-bg-light py-12">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="24-72 ч"
              label="Время обработки"
              description="В зависимости от степени повреждения"
              variant="primary"
            />
            <StatCard value="40-80" label="мг/м³" description="Концентрация озона" variant="accent" />
            <StatCard value="2-3" label="Цикла" description="Для сильного задымления" variant="primary" />
            <StatCard value="100%" label="Устранение" description="Запаха гари без ремонта" variant="accent" />
          </StatGrid>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <ArticleSection>
            <Paragraph>
              Запах гари после пожара — один из самых стойких и сложных для устранения. Продукты горения проникают
              глубоко в строительные материалы: штукатурку, бетон, кирпич, дерево. Мельчайшие частицы сажи впитываются в
              текстиль, мягкую мебель, ковры, обои. Традиционная уборка и проветривание не помогают — запах возвращается
              снова и снова.
            </Paragraph>
            <Paragraph>
              Многие владельцы помещений после пожара вынуждены делать полный капитальный ремонт с заменой отделки.
              Однако озонирование позволяет решить проблему быстрее и дешевле — без демонтажа стен и замены мебели.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Почему запах гари такой стойкий:</strong> При горении органических материалов образуются
            полициклические ароматические углеводороды (ПАУ), сажа, смолы. Эти вещества имеют микроскопический размер
            частиц (0,1-1 мкм) и глубоко проникают в поры строительных материалов. Обычная уборка удаляет только
            поверхностный слой.
          </HighlightBox>

          <ArticleSection title="Как озон устраняет запах гари">
            <Paragraph>
              Озон — газ, который проникает везде, куда проникли частицы дыма и сажи. Он окисляет органические
              соединения на молекулярном уровне, разрушая химические связи в молекулах продуктов горения. В результате
              образуются безопасные соединения — вода и углекислый газ.
            </Paragraph>
            <BulletList
              items={[
                'Проникает в микропоры бетона, штукатурки, кирпича',
                'Обрабатывает деревянные конструкции изнутри',
                'Достигает скрытых полостей за обшивкой стен',
                'Проходит через текстиль и обивку мебели',
                'Очищает системы вентиляции и воздуховоды',
                'Обрабатывает книги, документы, одежду',
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Этапы обработки помещения после пожара">
            <ProcessList
              steps={[
                {
                  title: 'Предварительная уборка',
                  description:
                    'Удалить видимую копоть и сажу со всех поверхностей. Протереть стены, потолки, полы. Пропылесосить мягкую мебель и ковры. Вынести сильно повреждённые предметы.',
                },
                {
                  title: 'Герметизация помещения',
                  description:
                    'Закрыть все окна и двери. Заклеить вентиляционные отверстия. Загерметизировать щели. Это необходимо для поддержания высокой концентрации озона.',
                },
                {
                  title: 'Первый цикл озонирования',
                  description:
                    'Установить озонатор, покинуть помещение. Обработка при концентрации 40-80 мг/м³ в течение 8-24 часов. Озон должен полностью заполнить объём помещения.',
                },
                {
                  title: 'Проветривание и оценка',
                  description:
                    'Проветрить помещение 2-4 часа до полного исчезновения запаха озона. Оценить результат. При необходимости провести дополнительную влажную уборку.',
                },
                {
                  title: 'Повторные циклы (при необходимости)',
                  description:
                    'При сильном задымлении требуется 2-3 цикла обработки с перерывами на проветривание. Каждый цикл дополнительно снижает концентрацию запаха.',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Режимы обработки в зависимости от степени повреждения">
            <DataTable
              caption="Рекомендуемые параметры озонирования после пожара"
              headers={['Степень повреждения', 'Концентрация', 'Время цикла', 'Количество циклов']}
              rows={[
                ['Лёгкое задымление', '20-40 мг/м³', '4-8 часов', '1'],
                ['Среднее задымление', '40-60 мг/м³', '12-24 часа', '1-2'],
                ['Сильное задымление', '60-80 мг/м³', '24-48 часов', '2-3'],
                ['Очень сильное', '80+ мг/м³', '48-72 часа', '3+'],
              ]}
            />

            <HighlightBox variant="warning">
              <strong>Важно:</strong> Озон не удаляет сажу физически — он устраняет только запах. Перед озонированием
              обязательна механическая уборка. Также озон не восстанавливает повреждённые материалы — обгоревшие
              поверхности требуют ремонта.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Сравнение методов устранения запаха гари">
            <ComparisonTable
              title="Озонирование vs другие методы"
              headers={['Критерий', 'Озонирование', 'Капитальный ремонт']}
              rows={[
                { parameter: 'Стоимость', value1: 'Низкая', value2: 'Очень высокая' },
                { parameter: 'Срок выполнения', value1: '1-3 дня', value2: '2-4 недели' },
                { parameter: 'Эффективность', value1: '95-100%', value2: '100%' },
                { parameter: 'Сохранение отделки', value1: 'Да', value2: 'Нет (замена)' },
                { parameter: 'Сохранение мебели', value1: 'Да', value2: 'Зависит от повреждений' },
                {
                  parameter: 'Необходимость выселения',
                  value1: 'На время обработки',
                  value2: 'На весь период ремонта',
                },
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Что можно обработать озоном">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Строительные конструкции"
                description="Стены, потолки, перекрытия, деревянные балки. Озон проникает на глубину до нескольких сантиметров"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Мягкая мебель"
                description="Диваны, кресла, матрасы, подушки. Озон обрабатывает наполнитель и обивку одновременно"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Ковры и текстиль"
                description="Ковровые покрытия, шторы, одежда в шкафах. Можно обработать прямо в помещении"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Книги и документы"
                description="Бумажные носители впитывают запах гари. Озонирование позволяет сохранить архивы"
              />
            </FeatureGrid>
          </ArticleSection>

          <ArticleSection title="Когда озонирование не поможет">
            <Paragraph>
              Озонирование — не универсальное решение. Есть случаи, когда требуется дополнительная обработка или ремонт:
            </Paragraph>
            <BulletList
              items={[
                'Обгоревшие поверхности — требуют механической очистки или замены',
                'Пропитанные водой после тушения материалы — сначала просушка',
                'Расплавленный пластик — источник запаха не устраняется озоном',
                'Глубоко прокопчённый гипсокартон — может потребоваться замена',
                'Системы вентиляции со скопившейся сажей — требуют механической чистки',
              ]}
            />

            <HighlightBox variant="success">
              <strong>Рекомендация:</strong> Для достижения максимального эффекта комбинируйте озонирование с
              профессиональной уборкой. Сначала — механическое удаление копоти, затем — озонирование для устранения
              въевшегося запаха.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Экономический эффект">
            <Paragraph>
              Озонирование позволяет существенно сэкономить на восстановлении помещения после пожара:
            </Paragraph>
            <DataTable
              caption="Сравнение затрат на восстановление (условный пример для квартиры 60 м²)"
              headers={['Статья расходов', 'С озонированием', 'Без озонирования']}
              rows={[
                ['Демонтаж отделки', '—', '50 000 ₽'],
                ['Новая отделка', '—', '200 000 ₽'],
                ['Химчистка мебели', '15 000 ₽', '15 000 ₽'],
                ['Озонирование', '20 000 ₽', '—'],
                ['Новая мебель (замена)', '—', '150 000 ₽'],
                ['ИТОГО', '35 000 ₽', '415 000 ₽'],
              ]}
            />
          </ArticleSection>
        </div>
      </article>

      {/* CTA Section */}
      <CTASection
        title={t('cta.applications.title', { ns: NAMESPACES.common })}
        description={t('cta.applications.text', { ns: NAMESPACES.common })}
        primaryButton={{
          label: t('hero.getConsultation', { ns: NAMESPACES.common }),
          href: '/contacts',
        }}
        secondaryButton={{
          label: t('header.phone', { ns: NAMESPACES.common }),
          href: 'tel:+998942909977',
        }}
      />
    </Layout>
  )
}
