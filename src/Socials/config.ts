import { link } from '@/fields/link'
import { GlobalConfig } from 'payload'

export const Socials: GlobalConfig = {
  slug: 'socials',
  fields: [
    link({
      appearances: false,
      overrides: {
        name: 'facebook',
      },
      disableLabel: true,
    }),
    link({
      appearances: false,
      overrides: {
        name: 'twitter',
      },
      disableLabel: true,
    }),
    link({
      appearances: false,
      overrides: {
        name: 'instagram',
      },
      disableLabel: true,
    }),
    link({
      appearances: false,
      overrides: {
        name: 'linkedin',
      },
      disableLabel: true,
    }),
  ],
}
