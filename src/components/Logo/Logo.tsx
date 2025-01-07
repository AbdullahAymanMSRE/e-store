import { cn } from '@/utilities/cn'
import React from 'react'

interface Props {
  className?: string
}

export const Logo = (props: Props) => {
  return <h1 className={cn('font-poppins max-lg:text-2xl text-3xl ', props.className)}>Apood</h1>
}
