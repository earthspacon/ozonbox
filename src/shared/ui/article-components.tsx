import { ReactNode } from 'react'

interface StatCardProps {
  value: string
  label: string
  description?: string
  variant?: 'primary' | 'accent' | 'neutral'
}

export function StatCard({ value, label, description, variant = 'primary' }: StatCardProps) {
  const variantClasses = {
    primary: 'bg-gradient-to-br from-primary to-primary-dark text-white',
    accent: 'bg-gradient-to-br from-accent to-accent-dark text-white',
    neutral: 'bg-bg-light border border-border text-text-primary',
  }

  return (
    <div className={`rounded-2xl p-6 ${variantClasses[variant]}`}>
      <div className="text-3xl md:text-4xl font-bold mb-2">{value}</div>
      <div className={`text-lg font-semibold mb-1 ${variant === 'neutral' ? 'text-text-primary' : 'text-white/90'}`}>
        {label}
      </div>
      {description && (
        <div className={`text-sm ${variant === 'neutral' ? 'text-text-secondary' : 'text-white/70'}`}>
          {description}
        </div>
      )}
    </div>
  )
}

interface StatGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4
}

export function StatGrid({ children, columns = 3 }: StatGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4 md:gap-6 my-8`}>{children}</div>
}

interface HighlightBoxProps {
  children: ReactNode
  variant?: 'info' | 'success' | 'warning'
  icon?: ReactNode
}

export function HighlightBox({ children, variant = 'info', icon }: HighlightBoxProps) {
  const variantClasses = {
    info: 'bg-accent/10 border-accent/30 text-accent-dark',
    success: 'bg-primary/10 border-primary/30 text-primary-dark',
    warning: 'bg-warning/10 border-warning/30 text-warning',
  }

  return (
    <div className={`rounded-xl border-l-4 p-5 my-6 ${variantClasses[variant]}`}>
      <div className="flex items-start gap-3">
        {icon && <div className="flex-shrink-0 mt-0.5">{icon}</div>}
        <div className="text-base leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

interface DataTableProps {
  headers: string[]
  rows: (string | number)[][]
  caption?: string
}

export function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
        {caption && (
          <caption className="text-left text-sm text-text-secondary mb-3 px-1">{caption}</caption>
        )}
        <thead>
          <tr className="bg-gradient-to-r from-primary to-accent text-white">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left font-semibold text-sm">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-bg-light'}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-sm border-t border-border">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface ComparisonTableProps {
  title?: string
  headers: [string, string, string]
  rows: { parameter: string; value1: string; value2: string }[]
}

export function ComparisonTable({ title, headers, rows }: ComparisonTableProps) {
  return (
    <div className="my-8">
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-sm bg-bg-gray border-b border-border">
                {headers[0]}
              </th>
              <th className="px-4 py-3 text-center font-semibold text-sm bg-primary text-white">
                {headers[1]}
              </th>
              <th className="px-4 py-3 text-center font-semibold text-sm bg-text-secondary text-white">
                {headers[2]}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-bg-light'}>
                <td className="px-4 py-3 text-sm border-t border-border font-medium">{row.parameter}</td>
                <td className="px-4 py-3 text-sm border-t border-border text-center text-primary-dark font-medium">
                  {row.value1}
                </td>
                <td className="px-4 py-3 text-sm border-t border-border text-center text-text-secondary">
                  {row.value2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface SectionProps {
  title?: string
  children: ReactNode
  className?: string
}

export function ArticleSection({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`my-12 md:my-16 ${className}`}>
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-6 text-text-primary">{title}</h2>}
      {children}
    </section>
  )
}

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-text-secondary">{description}</p>
      </div>
    </div>
  )
}

interface ProcessListProps {
  steps: { title: string; description: string }[]
}

export function ProcessList({ steps }: ProcessListProps) {
  return (
    <div className="space-y-6 my-8">
      {steps.map((step, i) => (
        <ProcessStep key={i} number={i + 1} title={step.title} description={step.description} />
      ))}
    </div>
  )
}

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      {icon && <div className="text-primary mb-3">{icon}</div>}
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-text-secondary text-sm">{description}</p>
    </div>
  )
}

interface FeatureGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ children, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return <div className={`grid grid-cols-1 ${gridCols[columns]} gap-4 md:gap-6 my-8`}>{children}</div>
}

interface QuoteBlockProps {
  text: string
  source?: string
}

export function QuoteBlock({ text, source }: QuoteBlockProps) {
  return (
    <blockquote className="my-8 pl-6 border-l-4 border-primary">
      <p className="text-lg italic text-text-secondary mb-2">"{text}"</p>
      {source && <cite className="text-sm text-text-light not-italic">— {source}</cite>}
    </blockquote>
  )
}

interface ImageWithCaptionProps {
  src: string
  alt: string
  caption?: string
}

export function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
  return (
    <figure className="my-8">
      <div className="rounded-xl overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && <figcaption className="text-sm text-text-secondary mt-3 text-center">{caption}</figcaption>}
    </figure>
  )
}

export function ArticleContent({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-lg max-w-none text-text-primary leading-relaxed">
      {children}
    </div>
  )
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-text-secondary leading-relaxed">{children}</p>
}

interface BulletListProps {
  items: string[]
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="my-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
          <span className="text-text-secondary">{item}</span>
        </li>
      ))}
    </ul>
  )
}

interface NumberedListProps {
  items: string[]
}

export function NumberedList({ items }: NumberedListProps) {
  return (
    <ol className="my-4 space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
            {i + 1}
          </span>
          <span className="text-text-secondary">{item}</span>
        </li>
      ))}
    </ol>
  )
}

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-bg-light border-b border-border">
      <div className="container py-4">
        <nav className="flex items-center gap-2 text-sm flex-wrap">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-text-light">/</span>}
              {item.href ? (
                <a href={item.href} className="text-text-secondary hover:text-primary transition-colors">
                  {item.label}
                </a>
              ) : (
                <span className="text-text-primary font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  )
}

interface ArticleHeroProps {
  title: string
  description: string
  image: string
  imageAlt: string
  backLink?: { href: string; label: string }
}

export function ArticleHero({ title, description, image, imageAlt, backLink }: ArticleHeroProps) {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>
      <div className="container relative z-10">
        {backLink && (
          <a href={backLink.href} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>{backLink.label}</span>
          </a>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  )
}

interface ArticleContainerProps {
  children: ReactNode
}

export function ArticleContainer({ children }: ArticleContainerProps) {
  return (
    <article className="py-12 md:py-20">
      <div className="container max-w-4xl">
        {children}
      </div>
    </article>
  )
}

interface CTASectionProps {
  title: string
  description: string
  primaryButton: { label: string; href: string }
  secondaryButton?: { label: string; href: string }
}

export function CTASection({ title, description, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="cta">
      <div className="container">
        <h2 className="cta__title">{title}</h2>
        <p className="cta__text">{description}</p>
        <div className="cta__actions">
          <a href={primaryButton.href} className="btn btn--white btn--large">
            {primaryButton.label}
          </a>
          {secondaryButton && (
            <a href={secondaryButton.href} className="btn btn--secondary btn--large" style={{ borderColor: 'white', color: 'white' }}>
              {secondaryButton.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
