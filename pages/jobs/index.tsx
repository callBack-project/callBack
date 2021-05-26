import Link from 'next/link'
import Layout from '../../components/Layout'

const Jobs = () => (
  <Layout title="Jobs | Next.js + TypeScript Example">
    <h1>Jobs</h1>
    <p>All Jobs</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Jobs