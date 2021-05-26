import Link from 'next/link'
import Layout from '../../components/Layout'

const Companies = () => (
  <Layout title="Companies | Next.js + TypeScript Example">
    <h1>Companies</h1>
    <p>All Companies</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Companies