import { Field } from 'payload'
import { link } from './link'

type FooterColumnType = (options: { name: string }) => Field

const footerColumn: FooterColumnType = ({ name }) => ({
  name,
  type: 'group',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
})

export default footerColumn
