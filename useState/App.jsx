import { useState } from "react";

function App (){

  const [tarea, setTarea] = useState("")
  const [lista, setLista] = useState([])

function Agregar (){

  if (tarea !== ""){
    setLista([...lista, tarea])
    setTarea("")
  }
}
function Eliminar (index){

  const nuevaLista = lista.filter((_, i) => i !== index)
  setLista(nuevaLista)
}

  return(

    <div>
      <h1>Mi lista de tareas</h1>
      <input
      value={tarea}
      onChange={(e) => setTarea(e.target.value)}
      placeholder="Escribir una tarea"
      />
      <button onClick={Agregar}>Agregar</button>
      <ul>
        {lista.map((item, index) => (

          <li key={index}>{item}
          <button onClick={() => Eliminar(index)}>eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
 
}

export default App
