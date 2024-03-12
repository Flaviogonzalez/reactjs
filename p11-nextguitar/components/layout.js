import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({children, title = 'Inicio', description = 'GuitarLA - Venta de guitarras y Blog de musica'}) {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta/>
        </Head>

        <Header/>
        {children}
        <Footer/>
    </>
  )
}
