import Link from 'next/link'
import ProductPage from './components/ProductPage'

export default function Home() {
  return (
<main>
  <h1>Hey there</h1>
  <Link href="/users">Users</Link>
  <ProductPage />
  </main>
  )
}
