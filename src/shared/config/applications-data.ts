/**
 * Application Areas Configuration
 * Defines the hierarchy of ozone application categories and subcategories
 */

export interface ApplicationSubcategory {
  id: string
  image: string
}

export interface ApplicationCategory {
  id: string
  icon: string
  image: string
  subcategories: ApplicationSubcategory[]
}

export const APPLICATION_CATEGORIES: ApplicationCategory[] = [
  {
    id: 'medicine',
    icon: 'IconMedical',
    image: 'https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg',
    subcategories: [
      { id: 'hospitals', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80' },
      {
        id: 'equipment-sterilization',
        image: 'https://images.pexels.com/photos/13697729/pexels-photo-13697729.jpeg',
      },
      { id: 'dental', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80' },
      { id: 'rehabilitation', image: 'https://images.pexels.com/photos/25596776/pexels-photo-25596776.jpeg' },
      { id: 'ambulances', image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80' },
    ],
  },
  {
    id: 'agriculture',
    icon: 'IconPoultry',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80',
    subcategories: [
      { id: 'poultry', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80' },
      { id: 'livestock', image: 'https://images.unsplash.com/photo-1636998980792-63f27ddea4e3?w=800&q=80' },
      { id: 'vegetable-storage', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&q=80' },
      { id: 'greenhouses', image: 'https://images.unsplash.com/photo-1566218246241-934ad8b38ea6?w=800&q=80' },
      { id: 'aquaculture', image: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=800&q=80' },
      { id: 'grain-storage', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80' },
      { id: 'beekeeping', image: 'https://images.unsplash.com/photo-1647427062468-74ff21e8934f?w=800&q=80' },
    ],
  },
  {
    id: 'food-production',
    icon: 'IconFood',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    subcategories: [
      { id: 'bottled-water', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80' },
      { id: 'dairy', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80' },
      { id: 'meat-sausages', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80' },
      { id: 'cheese', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80' },
      { id: 'cold-storage', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80' },
    ],
  },
  {
    id: 'horeca',
    icon: 'IconHotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    subcategories: [
      { id: 'hotels', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80' },
      { id: 'restaurants', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
      { id: 'laundries', image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80' },
      { id: 'tobacco-hookah', image: 'https://images.pexels.com/photos/31346733/pexels-photo-31346733.jpeg' },
      { id: 'secondhand', image: 'https://images.pexels.com/photos/6068975/pexels-photo-6068975.jpeg' },
    ],
  },
  {
    id: 'water-treatment',
    icon: 'IconWater',
    image: 'https://images.pexels.com/photos/35425759/pexels-photo-35425759.jpeg',
    subcategories: [
      { id: 'drinking-water', image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1920&q=80' },
      { id: 'wastewater', image: 'https://images.pexels.com/photos/5131191/pexels-photo-5131191.jpeg' },
      { id: 'pools-spa', image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&q=80' },
      { id: 'iron-removal', image: 'https://images.pexels.com/photos/17882785/pexels-photo-17882785.jpeg' },
    ],
  },
  {
    id: 'disinfection',
    icon: 'IconDisinfection',
    image: 'https://images.pexels.com/photos/5499416/pexels-photo-5499416.jpeg',
    subcategories: [
      { id: 'offices', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
      { id: 'public-transport', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80' },
      { id: 'sports-facilities', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
      { id: 'shopping-malls', image: 'https://images.pexels.com/photos/13425897/pexels-photo-13425897.jpeg' },
    ],
  },
  {
    id: 'cleaning',
    icon: 'IconSpray',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80',
    subcategories: [
      { id: 'odor-removal', image: 'https://images.pexels.com/photos/5207303/pexels-photo-5207303.jpeg' },
      { id: 'fire-smoke', image: 'https://images.pexels.com/photos/12828224/pexels-photo-12828224.jpeg' },
      { id: 'pet-odors', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80' },
      { id: 'car-interiors', image: 'https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg' },
      { id: 'carpet-cleaning', image: 'https://images.pexels.com/photos/8135275/pexels-photo-8135275.jpeg' },
    ],
  },
  {
    id: 'warehouses',
    icon: 'IconWarehouse',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    subcategories: [
      { id: 'mold-prevention', image: 'https://images.pexels.com/photos/27111449/pexels-photo-27111449.jpeg' },
      { id: 'general-storage', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80' },
    ],
  },
  {
    id: 'industry',
    icon: 'IconFactory',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&q=80',
    subcategories: [
      { id: 'oil-removal', image: 'https://images.pexels.com/photos/27490881/pexels-photo-27490881.jpeg' },
      { id: 'manufacturing', image: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg' },
    ],
  },
  {
    id: 'transport',
    icon: 'IconAuto',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    subcategories: [
      { id: 'public-buses', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80' },
      { id: 'railway', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80' },
      { id: 'shipping-containers', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80' },
      { id: 'auto-transport', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80' },
    ],
  },
  {
    id: 'mining-metals',
    icon: 'IconFactory',
    image: 'https://images.unsplash.com/photo-1718752773195-c19c1c329156?w=800&q=80',
    subcategories: [
      {
        id: 'extraction-and-metals',
        image: 'https://images.pexels.com/photos/5139216/pexels-photo-5139216.jpeg',
      },
      {
        id: 'gold-mining-global',
        image: 'https://images.pexels.com/photos/6804254/pexels-photo-6804254.jpeg',
      },
      {
        id: 'cyanide-destruction',
        image: 'https://images.pexels.com/photos/4523602/pexels-photo-4523602.jpeg',
      },
      {
        id: 'metal-storage-surface',
        image: 'https://waykenrm.com/wp-content/uploads/2022/06/metal-surface-finishing.jpg',
      },
    ],
  },
]

// Get category by ID
export function getCategoryById(id: string): ApplicationCategory | undefined {
  return APPLICATION_CATEGORIES.find((cat) => cat.id === id)
}

// Get subcategory by IDs
export function getSubcategoryById(categoryId: string, subcategoryId: string): ApplicationSubcategory | undefined {
  const category = getCategoryById(categoryId)
  return category?.subcategories.find((sub) => sub.id === subcategoryId)
}

// Get all category IDs
export function getAllCategoryIds(): string[] {
  return APPLICATION_CATEGORIES.map((cat) => cat.id)
}

// Featured categories for homepage (top 4)
export const FEATURED_CATEGORIES = ['medicine', 'agriculture', 'food-production', 'horeca']

// Application category IDs shown on home page (same order as cards)
export const HOME_APPLICATION_IDS = [
  'medicine',
  'agriculture',
  'food-production',
  'water-treatment',
  'warehouses',
  'disinfection',
] as const

// All (categoryId, subcategoryId) pairs for static paths
export function getAllSubcategoryPaths(): { categoryId: string; subcategoryId: string }[] {
  return APPLICATION_CATEGORIES.flatMap((cat) =>
    cat.subcategories.map((sub) => ({ categoryId: cat.id, subcategoryId: sub.id })),
  )
}
