import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";




export default function CreateFormaDePago() {
  const [descripcion, setDescripcion] = useState("");
  const [interes, setInteres] = useState(0);

  const postData = () => {
    axios.post('http://localhost:3001/FormaDePago', {
      descripcion,
      interes
    });
  }


  return (
    <div>
      <form class="form">
        <label>Forma de Pago</label> <br />
        <input class="field"
          placeholder="Nueva Forma de Pago"
          onChange={(e) => setDescripcion(e.target.value)}
        /><br />

        <label>Interes</label> <br />
        <input class="field"
          placeholder="Ingrese el interes"
          onChange={(e) => setInteres(parseInt(e.target.value))}
        /> <br />

        <br />
        <Link to="/readFormaDePago">
          <button class="submit" onClick={() => postData()} type="submit">
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