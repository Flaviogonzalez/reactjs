import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='sombra filtros contenedor'>
      <form action="">
        <div className='campo'>
            <label htmlFor="">Filtras Gastos</label>
            <select id="categoria" value={filtro} onChange={e => setFiltro(e.target.value)}>
                    <option value="">-- todos --</option>
                    <option value="ahorro">ahorro</option>
                    <option value="comida">comida</option>
                    <option value="casa">casa</option>
                    <option value="ocio">ocio</option>
                    <option value="gastos">gastos varios</option>
                    <option value="salud">salud</option>
                    <option value="suscripciones">subscripciones</option>
                </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros
