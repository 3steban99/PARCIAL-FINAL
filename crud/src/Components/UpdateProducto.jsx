import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

function UpdateProducto() {

  const [id, setID] = useState(null)
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState(0)

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setNombre(localStorage.getItem("Nombre"))
    setPrecio(localStorage.getItem("Precio"))
  }, [])

  function updateAPIData() {
    axios.put(`http://localhost:3001/productos/${id}`, {
      nombre,
      precio
    })
  }

  return (
    <div>
      <form class="form">
        <label>Nombre</label> <br />
        <input class="field"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        /><br />

        <label>Precio</label> <br />
        <input class="field"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(parseInt(e.target.value))}
        /> <br />

        <br />
        <Link to="/readProductos">
          <button onClick={updateAPIData} type="submit">
            <i class="material-icons">done</i>
          </button>
        </Link>

        <Link to="/readProductos">
          <button class="return" type="submit">
            <i class="material-icons">close</i>
          </button>
        </Link>
      </form>
    </div>
  );
}

export default UpdateProducto