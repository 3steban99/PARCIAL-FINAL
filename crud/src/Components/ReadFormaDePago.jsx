import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ReadFormaDePago() {
  const [APIPago, setAPIPago] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/FormaDePago").then((resp) => {
      setAPIPago(resp.data);
    });
  }, []);

  function setData(data) {
    let { id, descripcion, interes, } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Descripcion", descripcion);
    localStorage.setItem("Interes", interes);
  }

  function onDelete(id) {
    axios.delete(`http://localhost:3001/FormaDePago/${id}`).then(() => {
      getData();
    })
  }

  function getData() {
    axios.get("http://localhost:3001/FormaDePago").then((resp) => {
      setAPIPago(resp.data);
    });
  }


  return (
    <>
      <div class="datatable-container">

        <div class="header-tools">

          <div class="tools">
            <ul>
              <li>
                <Link to="/createFormaDePago">
                  <button>
                    <i class="material-icons">add_circle</i>
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button>
                    <i class="material-icons">undo</i>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <table class="datatable">
          <thead>
            <tr>
              <td>Detalle</td>
              <td>Interes</td>
              <td>Editar</td>
              <td>Eliminar</td>
            </tr>
          </thead>
          <tbody>
            {APIPago.map((elem) => (
              <tr>
                <td>{elem.descripcion}</td>
                <td>{elem.interes}</td>
                <td>
                  <Link to="/updateFormaDePago">
                    <button onClick={() => setData(elem)}>
                      <i class="material-icons">edit</i>
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => onDelete(elem.id)}>
                    <i class="material-icons">delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>

  );
}

export default ReadFormaDePago;