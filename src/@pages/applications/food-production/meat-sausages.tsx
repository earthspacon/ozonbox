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

export function MeatSausagesPage() {
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
            <span className="text-text-primary font-medium">Мясо и колбасы</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1920&q=80"
            alt="Мясное производство"
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
            Озонирование в мясном производстве
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Хранение мясной продукции и созревание колбас. Увеличение срока хранения в 2-5 раз, подавление плесени и сохранение органолептических свойств.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="2-5x"
              label="Срок хранения"
              description="Увеличение срока хранения охлаждённого мяса"
              variant="primary"
            />
            <StatCard
              value="96-99%"
              label="Обеззараживание"
              description="Эффективность дезинфекции камер созревания"
              variant="accent"
            />
            <StatCard
              value="3-8"
              label="мг/м³ озона"
              description="Концентрация для камер созревания колбас"
              variant="primary"
            />
            <StatCard
              value="100%"
              label="Органолептика"
              description="Сохранение вкуса, цвета и аромата"
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
              В процессе созревания колбас и хранения мясной продукции активно развиваются бактерии, плесневые грибы и дрожжи. Это приводит к порче продукта, изменению вкуса, потере массы и сокращению срока хранения. Озонирование — эффективный, экологичный и безопасный метод дезинфекции.
            </Paragraph>
            <Paragraph>
              Обеззараживающее действие озона в 15-20 раз, а на споровые формы бактерий примерно в 300-600 раз сильнее действия хлора. При этом озон полностью распадается до кислорода, не оставляя химических остатков на поверхности продукции.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>Инструкция Минторга СССР 1977 г.:</strong> Озонирование рекомендовано для приёмки, хранения и выпуска колбасных изделий и копчёностей. Метод позволяет проводить дезинфекцию камер вместе с загруженной продукцией.
          </HighlightBox>

          <ArticleSection title="Хранение охлаждённого мяса">
            <Paragraph>
              При хранении охлаждённого мяса озонирование при концентрации 8-10 мг/м³ обеспечивает полное уничтожение мезофильной и холодоустойчивой микрофлоры на поверхности туш при температуре 1-4°C. Срок хранения охлаждённого мяса увеличивается в 2-5 раз.
            </Paragraph>

            <DataTable
              caption="Режимы озонирования при хранении мяса"
              headers={['Продукт', 'Температура', 'Концентрация', 'Время обработки', 'Периодичность']}
              rows={[
                ['Охлаждённое мясо', '-1...-4°C', '8-10 мг/м³', '4-5 часов', 'Через день'],
                ['Замороженное мясо', '-18°C', '10 мг/м³', '3 часа', 'Ежедневно'],
                ['Тушки птицы охлаждённые', '-1...-4°C', '8-10 мг/м³', '2-3 часа', 'Ежедневно'],
                ['Тушки птицы замороженные', '-18°C', '8-12 мг/м³', '3 часа', 'Ежедневно'],
                ['Субпродукты', '-1...-4°C', '8-10 мг/м³', '3-4 часа', 'Ежедневно'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Камеры созревания колбас">
            <Paragraph>
              В камерах созревания сырокопчёных и сыровяленых колбас озон подавляет развитие слизистых и плесневых налётов, предотвращает появление посторонних запахов. При умеренной концентрации озон не вызывает обесцвечивания оболочки и фарша.
            </Paragraph>

            <DataTable
              caption="Режимы озонирования камер созревания колбас"
              headers={['Тип колбас', 'Концентрация', 'Время обработки', 'Температура', 'Эффективность']}
              rows={[
                ['Сырокопчёные', '3-8 мг/м³', '3 часа', '+12...+14°C', '96-99%'],
                ['Варёно-копчёные', '3-7 мг/м³', '2 часа', '+10...+12°C', '95-98%'],
                ['Сыровяленые', '5-10 мг/м³', '2-3 часа', '+10...+15°C', '96-99%'],
                ['Полукопчёные', '3-6 мг/м³', '2 часа', '+10...+12°C', '95-98%'],
              ]}
            />

            <HighlightBox variant="success">
              <strong>Рекомендуемый режим:</strong> Ежедневная обработка в течение 1-3 часов. В период обработки в камере не должно быть персонала. Производительность озонатора: 1 г/час на 20-25 м³ объёма помещения.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Преимущества озонирования">
            <BulletList items={[
              'Обеззараживание поверхности продукта — уничтожение бактерий, спор плесени и дрожжей',
              'Сохранение органолептических свойств — не изменяет вкус и аромат, предотвращает горечь',
              'Снижение потерь массы — уменьшает усушку за счёт стабилизации микрофлоры',
              'Дезинфекция камеры вместе с продукцией — обработка возможна при полной загрузке',
              'Экономия времени и средств — сокращение частоты ручной санитарной обработки',
              'Автоматизация — обработка по таймеру без участия персонала',
            ]} />
          </ArticleSection>

          <ComparisonTable
            title="Сравнение методов дезинфекции камер созревания"
            headers={['Параметр', 'Озонирование', 'Традиционная обработка']}
            rows={[
              { parameter: 'Выгрузка продукции', value1: 'Не требуется', value2: 'Обязательна' },
              { parameter: 'Химические остатки', value1: 'Отсутствуют', value2: 'Требуется промывка' },
              { parameter: 'Труднодоступные места', value1: 'Обрабатываются газом', value2: 'Недоступны' },
              { parameter: 'Время простоя', value1: '1-3 часа/день', value2: '24-48 часов' },
              { parameter: 'Влияние на продукт', value1: 'Отсутствует', value2: 'Возможно' },
              { parameter: 'Автоматизация', value1: 'Полная', value2: 'Ручная работа' },
            ]}
          />

          <ArticleSection title="Нормативная база">
            <Paragraph>
              Применение озона для дезинфекции мясной продукции регламентировано рядом нормативных документов с советского периода:
            </Paragraph>
            <BulletList items={[
              '1973 г. — Инструкция «Дезинфекция и дезодорация в холодильниках способом озонирования» (Минторг СССР)',
              '1977 г. — Инструкция по приёмке, хранению и выпуску колбасных изделий и копчёностей',
              '1998 г. — Озон внесён в перечень дезинфектантов (рег. №0039-98/21, Минздрав РФ)',
              'СанПиН 2.3.4.545-96 — Производство колбасных изделий',
            ]} />
          </ArticleSection>

          <ArticleSection title="Преимущества для мясокомбинатов">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Увеличение срока хранения"
                description="Продление срока годности охлаждённого мяса в 2-5 раз без заморозки"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Подавление плесени"
                description="Эффективность 96-99% против плесневых грибов на колбасах"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экологичность"
                description="Полный распад озона до кислорода без химических остатков"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Непрерывность производства"
                description="Обработка без выгрузки продукции и остановки процесса"
              />
            </FeatureGrid>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование на вашем мясокомбинате?</h2>
          <p className="cta__text">Получите расчёт оборудования для камер созревания и холодильных складов</p>
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
