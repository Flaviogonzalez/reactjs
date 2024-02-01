import React, { useState, useEffect } from 'react';

const MiComponente = () => { // ESPERO ACORDARME Q HACIA ESTE CODIGO 🙏 LA LOGICA DE LOS DIOSES
  const [indice, setIndice] = useState(0);
  const [animar, setAnimar] = useState(false);
  const [bloquearScroll, setBloquearScroll] = useState(false);

  const array = [
    { nombre: "Objeto1", color: "red" },
    { nombre: "Objeto2", color: "blue" },
    { nombre: "Objeto3", color: "green" },
    { nombre: "Objeto4", color: "yellow" },
    { nombre: "Objeto5", color: "purple" },
    { nombre: "Objeto6", color: "orange" },
    { nombre: "Objeto7", color: "pink" },
    { nombre: "Objeto8", color: "brown" },
    { nombre: "Objeto9", color: "cyan" },
    { nombre: "Objeto10", color: "gray" },
  ];
  const handleWheel = (event) => {
    if (bloquearScroll) return;

    const delta = event.deltaY;
    let paso = delta > 0 ? 1 : -1;

    setIndice((prevIndice) => {
      const longitudArray = array.length;
      let nuevoIndice = (prevIndice + paso + longitudArray) % longitudArray;
      nuevoIndice = nuevoIndice < 0 ? nuevoIndice + longitudArray : nuevoIndice;

      setAnimar(true);
      setBloquearScroll(true);

      setTimeout(() => {
        setAnimar(false);
        setBloquearScroll(false);
      }, 1000);

      return nuevoIndice;
    });
  };

  useEffect(() => {
    return () => {
      setBloquearScroll(false);
    };
  }, []);

  return ( // lo de las clases es medio codigo innecesario pero bueno lo dejo ahi 👍
    <div className="contenedor" onWheel={handleWheel}>

      <div className={`elemento-actual ${animar ? 'animar-elemento' : ''}`}> 
        {array.map((item, index) => (
          <div key={index} className={indice === index  ? `mostrar ${item.color}` : 'ocultar'}>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiComponente;
