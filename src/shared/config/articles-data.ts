/**
 * Articles configuration: metadata for ozone-related articles.
 * Full content is loaded per-article via i18n namespace article-{slug}.
 */

export interface ArticleMeta {
  id: string
  slug: string
  image: string
  date: string
  sourceName: string
  sourceUrl: string
}

export const ARTICLES: ArticleMeta[] = [
  {
    id: 'ozoneGrainProtection',
    slug: 'ozone-grain-protection',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
    date: '2003-01-30',
    sourceName: 'Purdue University News',
    sourceUrl: 'https://www.purdue.edu/uns/html4ever/030130.Mason.ozone.html',
  },
  {
    id: 'ozoneVocStudy',
    slug: 'ozone-voc-study',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    date: '2024-01-01',
    sourceName:
      'В.В. Лунин, В.Г. Самойлович, С.Н. Ткаченко, И.С. Ткаченко. Озон и другие экологически чистые окислители: Наука и технологии',
    sourceUrl: '',
  },
  {
    id: 'aopWastewaterAgriculture',
    slug: 'aop-wastewater-agriculture',
    image:
      'https://plus.unsplash.com/premium_photo-1697729926156-651f285a0ce3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '2025-01-27',
    sourceName:
      'В.В. Лунин, В.Г. Самойлович, С.Н. Ткаченко, И.С. Ткаченко. Озон и другие экологически чистые окислители: Наука и технологии',
    sourceUrl: '',
  },
  {
    id: 'grainDryingOzone',
    slug: 'grain-drying-ozone',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
    date: '2025-01-20',
    sourceName:
      'В.В. Лунин, В.Г. Самойлович, С.Н. Ткаченко, И.С. Ткаченко. Озон и другие экологически чистые окислители: Наука и технологии (30-й Всероссийский семинар)',
    sourceUrl: '',
  },
  {
    id: 'ozoneFoodInteraction',
    slug: 'ozone-food-interaction',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
    date: '2025-01-16',
    sourceName:
      'В.В. Лунин, В.Г. Самойлович, С.Н. Ткаченко, И.С. Ткаченко. Теория и практика получения и применения озона',
    sourceUrl: '',
  },
  {
    id: 'concentratedOzoneAgriculture',
    slug: 'concentrated-ozone-agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    date: '2025-01-20',
    sourceName:
      'В.В. Лунин, В.Г. Самойлович, С.Н. Ткаченко, И.С. Ткаченко. Озон и другие экологически чистые окислители: Наука и технологии (30-й Всероссийский семинар)',
    sourceUrl: '',
  },
  {
    id: 'ozonePoultryFarming',
    slug: 'ozone-poultry-farming',
    image: 'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?w=800&q=80',
    date: '2025-01-16',
    sourceName:
      'В.В. Лунин, В.Г. Самойлович, С.Н. Ткаченко, И.С. Ткаченко. Теория и практика получения и применения озона',
    sourceUrl: '',
  },
  {
    id: 'ozoneCovid19Treatment',
    slug: 'ozone-covid-19-treatment',
    image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80',
    date: '2020-03-13',
    sourceName: 'А. Шварц, Г. Мартинес-Санчес. Биорадикалы и антиоксиданты, 2020 (ISCO3)',
    sourceUrl: 'https://cyberleninka.ru/article/n/potentsialnoe-ispolzovanie-ozona-pri-infektsii-sars-cov2-covid-19',
  },
  {
    id: 'ozoneSeedTreatmentResearch',
    slug: 'ozone-seed-treatment-research',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80',
    date: '2025-02-04',
    sourceName:
      'Институт растениеводства им. В.Я. Юрьева УААН, ННЦ «Харьковский физико-технический институт»',
    sourceUrl: 'https://www.kaufmanntec.ru/publics/2/',
  },
  {
    id: 'ozoneVirusDisinfection',
    slug: 'ozone-virus-disinfection',
    image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=80',
    date: '2025-02-04',
    sourceName: 'Scientific review: Ozone disinfection mechanisms',
    sourceUrl: '',
  },
  {
    id: 'poolVentilationDehumidifiers',
    slug: 'pool-ventilation-dehumidifiers',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    date: '2025-02-04',
    sourceName: 'ASHRAE HVAC Applications Handbook: Indoor Swimming Pools',
    sourceUrl: '',
  },
  {
    id: 'ozoneCucumberGreenhouse',
    slug: 'ozone-cucumber-greenhouse',
    image: 'https://images.unsplash.com/photo-1719760665741-db956bf17911?w=800&q=80',
    date: '2025-02-04',
    sourceName: 'Кировская ООС ВНИИО РАСХН, ЗАО «Агрокомбинат Красногорский»',
    sourceUrl: '',
  },
  {
    id: 'ozoneDriedFruitsStorage',
    slug: 'ozone-dried-fruits-storage',
    image: 'https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=800&q=80',
    date: '2025-02-04',
    sourceName: 'Scientific Review: Ozone Treatment for Dried Fruits Preservation',
    sourceUrl: '',
  },
  {
    id: 'ozoneGoldSilverMining',
    slug: 'ozone-gold-silver-mining',
    image: 'https://images.unsplash.com/photo-1718752773195-c19c1c329156?w=800&q=80',
    date: '2025-02-04',
    sourceName: 'Scientific review: Ozone applications in precious metal extraction',
    sourceUrl: '',
  },
  {
    id: 'ozoneCancerRiskReduction',
    slug: 'ozone-cancer-risk-reduction',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    date: '2025-02-04',
    sourceName: 'IARC Monographs on the Evaluation of Carcinogenic Risks to Humans',
    sourceUrl: '',
  },
  {
    id: 'ozoneFoodWarehouseMeat',
    slug: 'ozone-food-warehouse-meat',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
    date: '2025-02-04',
    sourceName: 'Scientific review: Ozone applications in food storage and meat preservation',
    sourceUrl: '',
  },
]

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug)
}
