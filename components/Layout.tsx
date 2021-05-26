import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/companies">
          <a>Companies</a>
        </Link>{' '}
        |{' '}
        <Link href="/jobs">
          <a>Jobs</a>
        </Link>{' '}
        |{' '}
        <Link href="/interview-experience">
          <a>Interview-Experience</a>
        </Link>{' '}
        |{' '}
        <Link href="/events">
          <a>Events</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Members</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>copyright 2021 (Footer)</span>
    </footer>
  </div>
)

export default Layout
