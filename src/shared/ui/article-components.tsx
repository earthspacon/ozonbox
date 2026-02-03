import Image from 'next/image'
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
      <div className="mb-2 text-3xl font-bold md:text-4xl">{value}</div>
      <div className={`mb-1 text-lg font-semibold ${variant === 'neutral' ? 'text-text-primary' : 'text-white/90'}`}>
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

  return <div className={`grid grid-cols-1 ${gridCols[columns]} my-8 gap-4 md:gap-6`}>{children}</div>
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
    <div className={`my-6 rounded-xl border-l-4 p-5 ${variantClasses[variant]}`}>
      <div className="flex items-start gap-3">
        {icon && <div className="mt-0.5 flex-shrink-0">{icon}</div>}
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
      <table className="w-full border-collapse overflow-hidden rounded-xl bg-white shadow-sm">
        {caption && <caption className="text-text-secondary mb-3 px-1 text-left text-sm">{caption}</caption>}
        <thead>
          <tr className="from-primary to-accent bg-gradient-to-r text-white">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left text-sm font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-bg-light'}>
              {row.map((cell, j) => (
                <td key={j} className="border-border border-t px-4 py-3 text-sm">
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
  headers: [string, string, string] | [string, string, string, string]
  rows: { parameter: string; value1: string; value2: string; value3?: string }[]
}

export function ComparisonTable({ title, headers, rows }: ComparisonTableProps) {
  const isFourColumns = headers.length === 4

  return (
    <div className="my-8">
      {title && <h3 className="mb-4 text-xl font-bold">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-xl bg-white shadow-sm">
          <thead>
            <tr>
              <th className="bg-bg-gray border-border border-b px-4 py-3 text-left text-sm font-semibold">
                {headers[0]}
              </th>
              <th className="bg-primary px-4 py-3 text-center text-sm font-semibold text-white">{headers[1]}</th>
              <th className="bg-text-secondary px-4 py-3 text-center text-sm font-semibold text-white">{headers[2]}</th>
              {isFourColumns && (
                <th className="bg-accent px-4 py-3 text-center text-sm font-semibold text-white">{headers[3]}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-bg-light'}>
                <td className="border-border border-t px-4 py-3 text-sm font-medium">{row.parameter}</td>
                <td className="border-border text-primary-dark border-t px-4 py-3 text-center text-sm font-medium">
                  {row.value1}
                </td>
                <td className="border-border text-text-secondary border-t px-4 py-3 text-center text-sm">
                  {row.value2}
                </td>
                {isFourColumns && (
                  <td className="border-border text-accent-dark border-t px-4 py-3 text-center text-sm">
                    {row.value3}
                  </td>
                )}
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
      {title && <h2 className="text-text-primary mb-6 text-2xl font-bold md:text-3xl">{title}</h2>}
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
    <div className="flex items-start gap-4">
      <div className="from-primary to-accent flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-lg font-bold text-white">
        {number}
      </div>
      <div>
        <h4 className="mb-1 text-lg font-semibold">{title}</h4>
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
    <div className="my-8 space-y-6">
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
    <div className="border-border rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {icon && <div className="text-primary mb-3">{icon}</div>}
      <h4 className="mb-2 text-lg font-semibold">{title}</h4>
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

  return <div className={`grid grid-cols-1 ${gridCols[columns]} my-8 gap-4 md:gap-6`}>{children}</div>
}

interface QuoteBlockProps {
  text: string
  source?: string
}

export function QuoteBlock({ text, source }: QuoteBlockProps) {
  return (
    <blockquote className="border-primary my-8 border-l-4 pl-6">
      <p className="text-text-secondary mb-2 text-lg italic">&ldquo;{text}&rdquo;</p>
      {source && <cite className="text-text-light text-sm not-italic">— {source}</cite>}
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
      <div className="relative aspect-auto w-full overflow-hidden rounded-xl">
        <Image src={src} alt={alt} width={800} height={600} className="h-auto w-full" />
      </div>
      {caption && <figcaption className="text-text-secondary mt-3 text-center text-sm">{caption}</figcaption>}
    </figure>
  )
}

export function ArticleContent({ children }: { children: ReactNode }) {
  return <div className="prose prose-lg text-text-primary max-w-none leading-relaxed">{children}</div>
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-text-secondary mb-4 leading-relaxed">{children}</p>
}

interface BulletListProps {
  items: string[]
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="my-4 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full" />
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
          <span className="bg-primary/10 text-primary flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold">
            {i + 1}
          </span>
          <span className="text-text-secondary">{item}</span>
        </li>
      ))}
    </ol>
  )
}

interface SourcesListProps {
  title: string
  items: { title: string; url: string }[]
}

export function SourcesList({ title, items }: SourcesListProps) {
  return (
    <section className="my-12">
      <h2 className="text-text-primary mb-4 text-xl font-bold md:text-2xl">{title}</h2>
      <ol className="list-decimal space-y-2 pl-6">
        {items.map((item, i) => (
          <li key={i} className="text-text-secondary">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </section>
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
    <nav className="flex flex-wrap items-center gap-2 text-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-white/50">/</span>}
          {item.href ? (
            <a href={item.href} className="text-white/80 transition-colors hover:text-white">
              {item.label}
            </a>
          ) : (
            <span className="font-medium text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

interface ArticleHeroProps {
  title: string
  description: string
  image: string
  imageAlt: string
  backLink?: { href: string; label: string }
  breadcrumbs?: BreadcrumbItem[]
  topOffset?: number
}

export function ArticleHero({
  title,
  description,
  image,
  imageAlt,
  backLink,
  breadcrumbs,
  topOffset = 80,
}: ArticleHeroProps) {
  return (
    <section className="flex flex-col" style={{ marginTop: topOffset }}>
      <div className="container">
        {breadcrumbs && (
          <div className="pt-4 md:pt-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}
      </div>
      <div className="relative min-h-[320px] overflow-hidden md:min-h-[400px]">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" aria-hidden />
        <div className="relative z-10 container flex min-h-[320px] flex-col justify-end pt-8 pb-10 md:min-h-[400px] md:pt-12 md:pb-14">
          {backLink && (
            <a
              href={backLink.href}
              className="mb-4 inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>{backLink.label}</span>
            </a>
          )}
          <h1 className="mb-4 text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)] md:text-lg lg:text-xl">
            {description}
          </p>
        </div>
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
      <div className="container max-w-4xl">{children}</div>
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
            <a
              href={secondaryButton.href}
              className="btn btn--secondary btn--large"
              style={{ borderColor: 'white', color: 'white' }}
            >
              {secondaryButton.label}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
