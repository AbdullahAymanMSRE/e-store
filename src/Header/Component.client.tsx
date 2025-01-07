'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { CMSLink } from '@/components/Link'
import { getLinkHref } from '@/utilities/getLinkHref'

interface HeaderClientProps {
  data: Header
}

const LinkIcon = {
  favorites: {
    icon: <Heart />,
    href: '/favorites',
  },
  cart: {
    icon: <ShoppingCart />,
    href: '/cart',
  },
  account: {
    icon: <User />,
    href: '/account',
  },
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-4 flex justify-between items-center">
        {/* Search Icon */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Search Field */}
        {data.showSearch && (
          <div className="bg-[#F5F5F5] p-4 flex gap-2 items-stretch rounded-xl max-lg:hidden">
            <Search className="text-[#989898]" />
            <input placeholder="Search" className="w-[308px] bg-transparent focus:outline-none" />
          </div>
        )}

        {/* Nav Items */}
        <nav className="flex gap-[52px] items-center max-lg:hidden">
          {data.navItems?.map(({ link }, i) => {
            return <CMSLink key={i} {...link} appearance="link" />
          })}
        </nav>

        {/* Icon Links */}
        <div className="flex items-center gap-6 max-lg:hidden">
          {data.iconLinks?.map((iconLink) => {
            const { icon, href } = LinkIcon[iconLink]
            return (
              <Link href={href} key={href}>
                {icon}
              </Link>
            )
          })}
        </div>

        <button className="lg:hidden">
          <Menu />
        </button>
      </div>
    </header>
  )
}
