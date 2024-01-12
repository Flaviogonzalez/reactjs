 const ticker = [
    { id: 1, nombre: 'Autopistas del Sol', ticker: 'AUSO' },
    { id: 2, nombre: 'Boldt', ticker: 'BOLT' },
    { id: 3, nombre: 'Central Costanera', ticker: 'CADO' },
    { id: 4, nombre: 'Capex', ticker: 'CAPX' },
    { id: 5, nombre: 'Carboclor', ticker: 'CARC' },
    { id: 6, nombre: 'Central Costanera', ticker: 'CECO2' },
    { id: 7, nombre: 'Celulosa Argentina', ticker: 'CELU' },
    { id: 8, nombre: 'Central Puerto', ticker: 'CEPU' },
    { id: 9, nombre: 'Consultatio Global', ticker: 'CGPA2' },
    { id: 10, nombre: 'Consultatio', ticker: 'CTIO' },
    { id: 11, nombre: 'Distribuidora de Gas Cuyana', ticker: 'DGCU2' },
    { id: 12, nombre: 'Domec', ticker: 'DOME' },
    { id: 13, nombre: 'DyCASA', ticker: 'DYCA' },
    { id: 14, nombre: 'Ferrum', ticker: 'FERR' },
    { id: 15, nombre: 'Grupo América', ticker: 'GAMI' },
    { id: 16, nombre: 'Garovaglio y Zorraquín', ticker: 'GARO' },
    { id: 17, nombre: 'Grupo Clarín', ticker: 'GCLA' },
    { id: 18, nombre: 'Grimoldi', ticker: 'GRIM' },
    { id: 19, nombre: 'Havanna', ticker: 'HAVA' },
    { id: 20, nombre: 'Indupa', ticker: 'INAG' },
    { id: 21, nombre: 'Integra', ticker: 'INTR' },
    { id: 22, nombre: 'Irsa Propiedades Comerciales', ticker: 'IRCP' },
    { id: 23, nombre: 'Irsa Inversiones y Representaciones', ticker: 'IRSA' },
    { id: 24, nombre: 'Ledesma', ticker: 'LEDE' },
    { id: 25, nombre: 'Longvie', ticker: 'LONG' },
    { id: 26, nombre: 'MetroGAS', ticker: 'METR' },
    { id: 27, nombre: 'Molinos Río de la Plata', ticker: 'MOLI' },
    { id: 28, nombre: 'Morixe Hermanos', ticker: 'MORI' },
    { id: 29, nombre: 'Molinos Tassara', ticker: 'MTR' },
    { id: 30, nombre: 'Transener', ticker: 'OEST' },
    { id: 31, nombre: 'Sociedad Comercial del Plata', ticker: 'PATA' },
    { id: 32, nombre: 'Richmond', ticker: 'RICH' },
    { id: 33, nombre: 'Rigolleau', ticker: 'RIGO' },
    { id: 34, nombre: 'San Miguel', ticker: 'SAMI' },
    { id: 35, nombre: 'Semino', ticker: 'SEMI' },
    { id: 36, nombre: 'TGLT', ticker: 'TGLT2' },
    { id: 37, nombre: 'Molinos Agro', ticker: 'MOLA' },
    { id: 38, nombre: 'Aluar', ticker: 'ALUA' },
    { id: 39, nombre: 'Bolsas y Mercados Argentinos', ticker: 'BYMA' },
    { id: 40, nombre: 'Central Puerto', ticker: 'CEPU' },
    { id: 41, nombre: 'Sociedad Comercial del Plata', ticker: 'COME' },
    { id: 42, nombre: 'Cresud', ticker: 'CRES' },
    { id: 43, nombre: 'Cablevisión Holding', ticker: 'CVH' },
    { id: 44, nombre: 'Edenor', ticker: 'EDN' },
    { id: 45, nombre: 'Hargreaves Services', ticker: 'HARG' },
    { id: 46, nombre: 'Loma Negra', ticker: 'LOMA' },
    { id: 47, nombre: 'Mirgor', ticker: 'MIRG' },
    { id: 48, nombre: 'Pampa Energía', ticker: 'PAMP' },
    { id: 49, nombre: 'Telecom Argentina', ticker: 'TECO2' },
    { id: 50, nombre: 'Transener', ticker: 'TGNO4' },
    { id: 51, nombre: 'Transportadora de Gas del Sur', ticker: 'TGSU2' },
    { id: 52, nombre: 'Transener', ticker: 'TRAN' },
    { id: 53, nombre: 'Ternium Argentina', ticker: 'TXAR' },
    { id: 54, nombre: 'YPF', ticker: 'YPFD' }
  ]
  
export const tickers = ticker.map(ticker => ({
  ...ticker,
  precio: (Math.random() * (15000 - 1) + 1).toFixed(2) // Genera un precio aleatorio entre 1 y 1000
}));

const cantidadAccionesTotales = tickers.length; // Total de acciones disponibles
const accionesSeleccionadas = Math.floor(Math.random() * cantidadAccionesTotales) + 1; // Número aleatorio de acciones seleccionadas

const tickersSeleccionados = [];

while (tickersSeleccionados.length < accionesSeleccionadas) {
  const indiceAleatorio = Math.floor(Math.random() * cantidadAccionesTotales);
  if (!tickersSeleccionados.includes(indiceAleatorio)) {
    tickersSeleccionados.push(indiceAleatorio);
  }
}

export const comprasDeAcciones = tickersSeleccionados.map(indice => {
  const ticker = tickers[indice];
  const cantidadAcciones = (Math.floor(Math.random() * 100) + 1).toFixed(0); // Cantidad aleatoria entre 1 y 100
  const precioCompra = (Math.random() * (1000 - 1) + 1).toFixed(2); // Precio de compra aleatorio entre 1 y 100
  const fechaCompra = new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
    .toLocaleDateString('es-AR');

  return {
    ticker: ticker.ticker,
    fechaCompra,
    precioCompra,
    cantidadAcciones,
    precioFinal: (precioCompra * cantidadAcciones).toFixed(2)
  };
});

  