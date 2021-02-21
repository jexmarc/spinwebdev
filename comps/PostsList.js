import Link from 'next/link'
import s from '../styles/PostsList.module.css'
import { motion } from 'framer-motion'

const PostsList = ({ posts }) => {
  const urlhost = `${process.env.NEXT_PUBLIC_API_HOST}`
  const truncateTxt = (str, length = 100, end = '...') => {
    return str.length > length
      ? str.substring(0, length - end.length) + end
      : str
  }

  return (
    <div className={s.postsarea}>
      {posts.map((post) => (
        <motion.div
          whileHover={{
            scale: 1.01,
            backgroundColor: '#d9ffdd',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '0px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '25px',
          }}
          className={s.postwrap}
          key={post.id}
        >
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a>
              {post.hero && (
                <div className={s.herowrap}>
                  <img
                    src={urlhost + post.hero.formats.thumbnail.url}
                    alt={post.hero.name}
                  />
                </div>
              )}
              <h2 className={s.title}>{post.title}</h2>
              <h4>{new Date(post.published_at).toLocaleString()}</h4>
              <article>{truncateTxt(post.content, 250)}</article>
            </a>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default PostsList
