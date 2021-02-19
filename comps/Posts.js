import s from '../styles/Posts.module.css'

const Posts = ({ posts }) => {
  return (
    <div className={s.postsarea}>
      {posts.map((post) => (
        <div className={s.postwrap} key={post.id}>
          <h2 className={s.title}>{post.title}</h2>
          <article>{post.content}</article>
        </div>
      ))}
    </div>
  )
}

export default Posts
