import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import Post from "../components/post";
import styles from '../styles/grid.module.css'
import Curso from "../components/curso";

export default function Home({guitarras, posts, curso}) {

  return (
    <>
      <Layout title={'Inicio'} description={'absolutamente'}>
        <main className="contenedor">
          <h2 className="heading">Nuestra coleccion</h2>

          <div className={styles.grid}>
          {guitarras?.map(guitarra => (<Guitarra key={guitarra.id} guitarra={guitarra.attributes}/>))}
          </div>
        </main>

        <Curso curso={curso}/>

        <section className="contenedor">
          <h2 className="heading">Nuestros blogs</h2>

          <div className={styles.grid}>
          {posts?.map(i => (
            <Post key={i.id} post={i.attributes}></Post>
          ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=media`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])

  const [{data: guitarras}, {data: posts}, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}