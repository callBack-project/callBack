import Link from 'next/link'
import Layout from '../../components/Layout'

const Events = () => (
  <Layout title="Events | Next.js + TypeScript Example">
    <h1>Events</h1>
    <p>All Events</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Events