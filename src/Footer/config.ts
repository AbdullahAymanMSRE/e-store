import type { GlobalConfig } from 'payload'

import { revalidateFooter } from './hooks/revalidateFooter'
import footerColumn from '@/fields/FooterColumn'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'textUnderLogo',
      type: 'textarea',
    },
    footerColumn({
      name: 'firstColumn',
    }),
    footerColumn({
      name: 'secondColumn',
    }),
    {
      name: 'socials',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Facebook',
          value: 'facebook',
        },
        {
          label: 'Twitter',
          value: 'twitter',
        },
        {
          label: 'Instagram',
          value: 'instagram',
        },
        {
          label: 'LinkedIn',
          value: 'linkedin',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
