import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
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
            <a>Interviews</a>
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
    </div>
  )
}

export default Navbar