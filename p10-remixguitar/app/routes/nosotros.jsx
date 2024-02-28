import Imagen from '../../public/img/nosotros.jpg'
import Styles from '~/styles/nosotros.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: Styles
        },
        {
            rel: 'preload',
            href: Imagen,
            as: 'image'
        }
    ]
}

export function meta() {
    return [
        {
            title: 'GuitarLA - Nosotros',
            description: 'venta de guitarras y cursos para principiantes, intermedios y avanzados!'
        }
    ]
}
const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
            <img src={Imagen} alt="Imagen sobre nosotros" />

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil ipsum dolore magnam laborum. Beatae voluptates error atque neque minus iste exercitationem nisi facere, quas, expedita eum voluptas ut perspiciatis.</p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros
