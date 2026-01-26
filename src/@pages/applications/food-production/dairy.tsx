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

export function DairyPage() {
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
            <span className="text-text-primary font-medium">Молочное производство</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1920&q=80"
            alt="Молочное производство"
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
            Озонирование в молочном производстве
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            Дезинфекция оборудования, ёмкостей и помещений без химии. Увеличение сроков хранения молочной продукции и соответствие требованиям HACCP.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-bg-light">
        <div className="container">
          <StatGrid columns={4}>
            <StatCard
              value="99,9%"
              label="Эффективность"
              description="Обеззараживание оборудования и ёмкостей"
              variant="primary"
            />
            <StatCard
              value="30-50%"
              label="Продление срока"
              description="Хранения кисломолочной продукции"
              variant="accent"
            />
            <StatCard
              value="2-3"
              label="мг/л озона"
              description="Концентрация для дезинфекции оборудования"
              variant="primary"
            />
            <StatCard
              value="0"
              label="Химии"
              description="Полный отказ от моющих средств"
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
              Молочная промышленность предъявляет высочайшие требования к микробиологической безопасности. Патогенные микроорганизмы — листерия, сальмонелла, E.coli — способны выживать даже после пастеризации, размножаясь в молокопроводах и на поверхности оборудования.
            </Paragraph>
            <Paragraph>
              Озонирование позволяет решить эту проблему комплексно: дезинфицировать танки-охладители, доильные аппараты, молокопроводы и ёмкости для хранения без применения химических моющих средств. Озон эффективен против термофильных бактерий, устойчивых к высоким температурам.
            </Paragraph>
          </ArticleSection>

          <HighlightBox variant="info">
            <strong>HACCP:</strong> Озонирование признано критической контрольной точкой (ККТ) в системе анализа опасностей, позволяя контролировать микробиологическую безопасность на всех этапах производства молочной продукции.
          </HighlightBox>

          <ArticleSection title="Применение озона на молочных производствах">
            <DataTable
              caption="Режимы озонирования оборудования молочного завода"
              headers={['Объект обработки', 'Метод', 'Концентрация', 'Эффективность']}
              rows={[
                ['Доильные аппараты', 'Озонированная вода', '2-3 мг/л', '99,9%'],
                ['Танки-охладители', 'Вода + воздух', '3-5 мг/л', '99,99%'],
                ['Молокопроводы', 'Прокачка озонированной воды', '2-3 мг/л', '99,9%'],
                ['Ёмкости для хранения', 'Газообразный озон', '5-10 мг/м³', '99,99%'],
                ['Холодильные камеры', 'Газообразный озон', '3-6 мг/м³', '99,5%'],
              ]}
            />
          </ArticleSection>

          <ArticleSection title="Преимущества перед традиционными методами">
            <BulletList items={[
              'Уничтожение термофильных бактерий, устойчивых к пастеризации',
              'Профилактика листериоза — критически важно для мягких сыров и творога',
              'Отсутствие химических остатков на поверхности оборудования',
              'Возможность обработки труднодоступных мест молокопроводов',
              'Дезинфекция при низких температурах — не требуется прогрев',
              'Автоматизация процесса — снижение влияния человеческого фактора',
            ]} />
          </ArticleSection>

          <ComparisonTable
            title="Сравнение методов санитарной обработки"
            headers={['Параметр', 'Озонирование', 'Химическая CIP-мойка']}
            rows={[
              { parameter: 'Эффективность против листерии', value1: '99,99%', value2: '95-99%' },
              { parameter: 'Химические остатки', value1: 'Отсутствуют', value2: 'Требуется промывка' },
              { parameter: 'Термофильные бактерии', value1: 'Уничтожаются', value2: 'Частично выживают' },
              { parameter: 'Время обработки', value1: '15-30 минут', value2: '45-90 минут' },
              { parameter: 'Расход воды', value1: 'Минимальный', value2: 'Значительный' },
              { parameter: 'Экологичность', value1: 'Полная', value2: 'Требуется утилизация' },
            ]}
          />

          <ArticleSection title="Хранение молочной продукции">
            <Paragraph>
              Озонирование холодильных камер для хранения молочной продукции предотвращает развитие плесени, подавляет размножение психрофильных бактерий и увеличивает срок хранения творога, сметаны, йогуртов на 30-50%.
            </Paragraph>

            <DataTable
              caption="Режимы озонирования при хранении молочной продукции"
              headers={['Продукт', 'Температура', 'Концентрация', 'Увеличение срока']}
              rows={[
                ['Творог', '+2...+6°C', '3-4 мг/м³', '+40%'],
                ['Сметана', '+2...+6°C', '2-3 мг/м³', '+35%'],
                ['Йогурт', '+2...+6°C', '2-3 мг/м³', '+30%'],
                ['Масло сливочное', '-6...-12°C', '3-5 мг/м³', '+50%'],
                ['Мягкие сыры', '+4...+8°C', '3-6 мг/м³', '+45%'],
              ]}
            />

            <HighlightBox variant="success">
              При холодильном хранении озонирование не только подавляет микрофлору, но и предотвращает появление постороннего запаха продукции, что особенно важно для длительного хранения масла.
            </HighlightBox>
          </ArticleSection>

          <ArticleSection title="Профилактика листериоза">
            <Paragraph>
              Listeria monocytogenes — один из наиболее опасных патогенов в молочной промышленности. Бактерия способна размножаться при температуре холодильника (+4°C), выживать в биоплёнках на поверхности оборудования и вызывать тяжёлые заболевания с летальным исходом.
            </Paragraph>
            <Paragraph>
              Озон эффективно разрушает биоплёнки листерии и уничтожает клетки бактерий. При концентрации 0,5-1,0 мг/л озона в воде достигается 99,99% инактивация L. monocytogenes в течение 5 минут контакта.
            </Paragraph>
          </ArticleSection>

          <ArticleSection title="Преимущества для молочного производства">
            <FeatureGrid columns={2}>
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Соответствие HACCP"
                description="Озонирование — критическая контрольная точка в системе безопасности пищевой продукции"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Экономия на химии"
                description="Снижение расходов на моющие и дезинфицирующие средства до 80%"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Увеличение срока хранения"
                description="Продление срока годности кисломолочной продукции на 30-50%"
              />
              <FeatureCard
                icon={<IconCheck style={{ width: 24, height: 24 }} />}
                title="Безопасность продукции"
                description="Гарантированное уничтожение листерии и термофильных бактерий"
              />
            </FeatureGrid>
          </ArticleSection>

        </div>
      </article>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta__title">Внедрить озонирование на вашем молочном заводе?</h2>
          <p className="cta__text">Получите расчёт оборудования и рекомендации по интеграции в систему CIP-мойки</p>
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
