import React from 'react'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'


export default function Nosotros() {
  return (
    <Layout title='Nosotros'>
      <main>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>
          <Image alt='imagen sobre nosotros' src={'/img/nosotros.jpg'} width={1000} height={800}/>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, quod nostrum, ratione eum eligendi sint autem quasi, quibusdam eius dolorem obcaecati ab deserunt aliquam quo porro modi omnis dolorum! Laboriosam?
          </div>
        </div>
      </main>
    </Layout>
  )
}
