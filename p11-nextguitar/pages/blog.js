import React from 'react'
import Layout from '../components/layout'
import Post from '../components/post'
import styles from '../styles/grid.module.css'


export default function Blog({posts}) {

  return (
    <Layout title='Blog'>
      <main>
        <h2 className='heading'>Blog</h2>

        <div className={styles.grid}>
          {posts?.map(i => (
            <Post key={i.id} post={i.attributes}></Post>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
    
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const { data: posts } = await respuesta.json()
  
  return {
      props: {
          posts
      }
  }
}
