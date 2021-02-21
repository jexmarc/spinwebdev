import s from '../styles/Main.module.css'
import PostsList from './PostsList'
import Sidebar from '../comps/Sidebar'

const Main = ({ posts }) => {
  return (
    <main className={s.main}>
      <PostsList posts={posts} />
      <Sidebar posts={posts} />
    </main>
  )
}

export default Main
