import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReadProductos() {
  const [APIProducto, setAPIProducto] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/Productos").then((resp) => {
      setAPIProducto(resp.data);
    });
  }, []);

  function setData(data){
    let { id, nombre, precio,} = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Nombre", nombre);
    localStorage.setItem("Precio", precio);
  }

  function onDelete(id) { 
    axios.delete(`http://localhost:3001/Productos/${id}`).then(() => { 
      getData();
    })
  }

  function getData() { 
      axios.get("http://localhost:3001/Productos").then((resp) => {
        setAPIProducto(resp.data);
      });
  }


  return (
    <>
      <div class="datatable-container">
        <div class="header-tools">
          <div class="tools">
            <ul>
              <li>
                <Link to="/createProducto">
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
              <td>Nombre</td>
              <td>Precio</td>
            </tr>
          </thead>
          <tbody>
            {APIProducto.map((elem) => (
              <tr>
                <td>{elem.nombre}</td>
                <td>{elem.precio}</td>
                <td>
                  <Link to="/updateProducto">
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

export default ReadProductos;