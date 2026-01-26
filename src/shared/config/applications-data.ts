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
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    subcategories: [
      { id: 'hospitals', image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80' },
      {
        id: 'equipment-sterilization',
        image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80',
      },
      { id: 'dental', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80' },
      { id: 'rehabilitation', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80' },
      { id: 'ambulances', image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80' },
    ],
  },
  {
    id: 'agriculture',
    icon: 'IconPoultry',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80',
    subcategories: [
      { id: 'poultry', image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80' },
      { id: 'livestock', image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80' },
      { id: 'vegetable-storage', image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&q=80' },
      { id: 'greenhouses', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80' },
      { id: 'aquaculture', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80' },
      { id: 'grain-storage', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80' },
      { id: 'beekeeping', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80' },
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
      { id: 'tobacco-hookah', image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800&q=80' },
      { id: 'secondhand', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
    ],
  },
  {
    id: 'water-treatment',
    icon: 'IconWater',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80',
    subcategories: [
      { id: 'drinking-water', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80' },
      { id: 'wastewater', image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80' },
      { id: 'pools-spa', image: 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&q=80' },
      { id: 'iron-removal', image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&q=80' },
    ],
  },
  {
    id: 'disinfection',
    icon: 'IconDisinfection',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
    subcategories: [
      { id: 'offices', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
      { id: 'public-transport', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80' },
      { id: 'sports-facilities', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
      { id: 'shopping-malls', image: 'https://images.unsplash.com/photo-1519558260268-cde7e03a0152?w=800&q=80' },
    ],
  },
  {
    id: 'cleaning',
    icon: 'IconSpray',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    subcategories: [
      { id: 'odor-removal', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80' },
      { id: 'fire-smoke', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
      { id: 'pet-odors', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80' },
      { id: 'car-interiors', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80' },
      { id: 'carpet-cleaning', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
    ],
  },
  {
    id: 'warehouses',
    icon: 'IconFactory',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    subcategories: [
      { id: 'mold-prevention', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80' },
      { id: 'general-storage', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80' },
    ],
  },
  {
    id: 'industry',
    icon: 'IconFactory',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&q=80',
    subcategories: [
      { id: 'oil-removal', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80' },
      { id: 'manufacturing', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80' },
    ],
  },
  {
    id: 'transport',
    icon: 'IconAuto',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    subcategories: [
      { id: 'public-buses', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80' },
      { id: 'railway', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80' },
      { id: 'shipping-containers', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80' },
      { id: 'auto-transport', image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80' },
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

// Get all subcategory paths for static generation
export function getAllSubcategoryPaths(): { category: string; subcategory: string }[] {
  const paths: { category: string; subcategory: string }[] = []
  APPLICATION_CATEGORIES.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      paths.push({ category: cat.id, subcategory: sub.id })
    })
  })
  return paths
}

// Featured categories for homepage (top 4)
export const FEATURED_CATEGORIES = ['medicine', 'agriculture', 'food-production', 'horeca']
