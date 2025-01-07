import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'showSearch',
      type: 'checkbox',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 4,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'iconLinks',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Favorites',
          value: 'favorites',
        },
        {
          label: 'Cart',
          value: 'cart',
        },
        {
          label: 'Account',
          value: 'account',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
