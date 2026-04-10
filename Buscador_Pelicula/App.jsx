import { useState, useEffect } from "react";

function App (){

  const [busqueda, setBusqueda] = useState ("")
  const [resultados, setResultados] = useState ([])
  const [cargando, setCargando] = useState (false)

async function buscar (){
  setCargando(true)
  const respuesta = await fetch(`https://api.tvmaze.com/search/shows?q=${busqueda}`)
  const datos = await respuesta.json()
  setResultados(datos)
  setCargando(false && resultados.length == 0)
}
  
  return(

    <div>
      <h1>Pelicula</h1>
      {cargando &&
      <p className="buscando">Buscando...</p>}
      {!cargando && resultados.length === 0 && 
      <p className="sin-resultados">No se encontraron resultados</p>}
      <div className="buscador">
      <input
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value )}
      placeholder="Escribir pelicula"
      />
      <button onClick={buscar}>Busqueda</button>
      </div>
      <ul className="resultados">
      {resultados.map((item, index) => (
      <li className="tarjeta" key={index}>
        {item.show.image &&<img src={item.show.image.medium} alt={item.show.name} />}
        <p>Nombre:{item.show.name}</p>
        <p>Lenguage:{item.show.language}</p>
        <p>Estreno:{item.show.premiered}</p>
        <p>Géneros: {item.show.genres.join(", ")}</p>
        </li>
      ))}
      </ul>

    
    </div>
  )
 
}

export default App
