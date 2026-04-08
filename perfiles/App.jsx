import Perfil from "./Perfil"

function App (){

  return(

    <div>
      <Perfil nombre="Diego" edad= {17} ciudad = "Bogota"/>
      <Perfil nombre="Maria" edad= {22} ciudad = "Medellin"/>
      <Perfil nombre="Carlos" edad= {25} ciudad = "Cali"/>
    </div>
  )
}

export default App
