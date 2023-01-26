import Head from 'next/head'
import NavBar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Article from '@/components/Article'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dev Savers</title>
        <meta name="description" content="List of Productivity-Boosting Tools and Frameworks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="copyright" content="Saurav Hathi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-stone-800 text-white">
        <NavBar />
        <Hero />
        <Article />
        <Footer />
      </main>
    </>
  )
}
