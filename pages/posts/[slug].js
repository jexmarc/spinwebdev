import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import s from '../../styles/PostPage.module.css'

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts`)
  const data = await res.json()

  const paths = data.map((post) => {
    return { params: { slug: post.slug.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/posts?slug=${slug}`
  )
  const data = await res.json()

  return {
    props: { post: data[0] },
  }
}

const PostPage = ({ post }) => {
  return (
    <div className={s.postpage}>
      {post.hero && (
        <div className={s.postimg}>
          <img
            src={
              (post.hero.formats.small &&
                `${process.env.NEXT_PUBLIC_API_HOST}${post.hero.formats.small.url}`) ||
              `${process.env.NEXT_PUBLIC_API_HOST}${post.hero.url}`
            }
          />
        </div>
      )}
      <h2>{post.title && post.title}</h2>
      <div>
        {post.content &&
          unified().use(parse).use(remark2react).processSync(post.content)
            .result}
      </div>
    </div>
  )
}

export default PostPage
