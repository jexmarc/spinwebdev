import Head from 'next/head'
import Main from '../comps/Main'

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts`)
  const posts = await res.json()
  posts.sort((a, b) => b.published_at - a.published_at)
  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Spin Web Dev - Home : Marc Gallagher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main posts={posts} />
    </>
  )
}
