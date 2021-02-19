import s from '../styles/Main.module.css'
import Posts from './Posts'
import Sidebar from './Sidebar'

const Main = ({ posts }) => {
  return (
    <main className={s.main}>
      <Posts posts={posts} />
      <Sidebar posts={posts} />
    </main>
  )
}

export default Main
