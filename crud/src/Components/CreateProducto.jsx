import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";


export default function CreateProducto() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [dtProd, setDtProd] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/Productos")
    .then((response) => {
      setDtProd(response.data)
    })
  }, []);


  const  postData= () => {
    const existingData = dtProd.find((item) => item.nombre === nombre)
    if (existingData){
      alert('Este producto ya esta cargado')
    }
    else{
      if (nombre === ""){
        alert('campos vacio')
      }
      else{
        axios.post('http://localhost:3001/Productos', {
      nombre,
      precio
    });
      }
    }
  };



  return (
    <div>
      <form class="form">
        <label>Nombre</label> <br />
        <input class="field"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        /> <br />

        <label>Precio</label> <br />
        <input class="field"
          placeholder="Precio"
          onChange={(e) => setPrecio(parseInt(e.target.value))}
        /> <br />

        <br />
        <Link to="/readProductos">
          <button onClick={postData} type="submit">
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