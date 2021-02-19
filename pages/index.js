import Head from 'next/head'
import Footer from '../comps/Footer'
import Header from '../comps/Header'
import Main from '../comps/Main'
import s from '../styles/Home.module.css'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className="s.container">
      <Head>
        <title>Spin Web Dev - Marc Gallagher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main posts={posts} />
      <Footer />
      <span className={s.webgrab}>
        X<span>+</span>
      </span>
      <span className={s.webline}></span>
      <div className={s.spinhand}>
        <img src="./spinhand.svg" alt="spinweb hand" />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://167.71.81.155/posts`)
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
