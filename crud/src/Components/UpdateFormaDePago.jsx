import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

function UpdateFormaDePago() {

  const [id, setID] = useState(null)
  const [descripcion, setDescripcion] = useState("")
  const [interes, setInteres] = useState(0)

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setDescripcion(localStorage.getItem("Descripcion"))
    setInteres(localStorage.getItem("Interes"))
  }, [])

  function updateAPIData(){
    axios.put(`http://localhost:3001/formaDePago/${id}`, {
      descripcion,
      interes:parseInt(interes)
    })
  }

  return (
    <div>
      <form class="form">
      <label>Forma de Pago</label> <br/>
          <input class="field"
            placeholder="Editar Forma de Pago"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            /><br/>

            <label>Interes</label> <br/>
            <input class="field"
            placeholder="Editar Interes"
            value={interes}
            onChange={(e) => setInteres(e.target.value)}
          /><br/>

          <br/>
        <Link to="/readFormaDePago">
          <button onClick={updateAPIData} type="submit">
              <i class="material-icons">done</i>
          </button>
        </Link>

        <Link to="/readFormaDePago">
          <button class="return" type="submit">
          <i class="material-icons">close</i>
          </button> 
        </Link>
      </form>
    </div>
  );
}

export default UpdateFormaDePago