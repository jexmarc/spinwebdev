import s from '../styles/Sidebar.module.css'

const Sidebar = ({ posts }) => {
  return (
    <div className={s.sidebar}>
      <section>
        <h2 className={s.header2}>Bio</h2>
        <p>
          And so it began and continued thus: BASIC to FORTRAN to PASCAL to
          COBOL to C to C++ to Perl to SysAdmin to Java to Python to JavaScript
          to CSS to SASS to React to Svelte to...
        </p>
      </section>
      <section>
        <h2 className={s.header2}>Recent Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Sidebar
