import type { Page, Post } from '@/payload-types'

export const getLinkHref = ({
  type,
  reference,
  url,
}: {
  type?: 'custom' | 'reference' | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  url?: string | null
}) =>
  type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
    ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
        reference.value.slug
      }`
    : url
