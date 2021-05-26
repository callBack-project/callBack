import Link from 'next/link'
import Layout from '../../components/Layout'

const InterviewExperience = () => (
  <Layout title="InterviewExperience | Next.js + TypeScript Example">
    <h1>Interview Experience</h1>
    <p>All Interview Experience</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default InterviewExperience