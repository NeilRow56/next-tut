'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navLinks = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Articles',
    href: '/articles/breaking-news-123'
  },
  {
    name: 'Order product',
    href: '/order-product'
  },
  {
    name: 'Users',
    href: '/users'
  },
  {
    name: 'Register',
    href: '/register'
  }
  // {
  //   name: 'Login',
  //   href: '/login'
  // },
  // {
  //   name: 'Forgot Password',
  //   href: '/forgot-password'
  // }
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <div className='container mx-auto flex h-[35px] w-full items-center justify-between text-blue-600'>
      {navLinks.map(link => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== '/')
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              'text-sm hover:text-green-600',

              isActive ? 'text-red-600' : 'text-muted-foreground'
            )}
          >
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}
