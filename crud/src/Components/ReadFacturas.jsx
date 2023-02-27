import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReadFacturas() {
  const [dtFact, setDtFact] = useState([])
  const [dtDet, setDtDet] = useState([])
  const [dtForPago, setDtForPago] = useState([])
  const [dtProd, setDtProd] = useState([])
  const [detMostrar, setDetMostrar] = useState([])
  
  useEffect(() => {
    BFactura()
    DetFac()
    getForPago()
    getProd()
  }, []);

  function BFactura() {
    axios.get('http://localhost:3001/Factura')
    .then((response) => {
      setDtFact(response.data)
    });
  }

  function DetFac(){
  axios.get('http://localhost:3001/DetalleFactura')
  .then((response) => {
    setDtDet(response.data)
  });
  }

  function getForPago(){
    axios.get("http://localhost:3001/FormaDePago")
    .then((response) => {
      setDtForPago(response.data)
    })
  }

  function getProd(){
    axios.get("http://localhost:3001/Productos")
    .then((response) => {
      setDtProd(response.data)
    })
  }

  function getSubTotal(id){
    let subTotal = 0
    dtDet.map((elem) => {
      if(elem.facturaId === id){
        subTotal = subTotal + elem.monto
      }
    })

    return subTotal
  }

  function getTotal(facturaId, descuento, formaPagoId){
    let total = 0
    let subTotal = getSubTotal(facturaId)
    let interes = getInteres(formaPagoId)

    total = ((subTotal - ((descuento * subTotal) / 100)) * (100 + interes)) / 100

    return total
  }

  function getInteres(id){
    let interes = 0
    dtForPago.map((elem) => {
      if(elem.id === id){
        interes = elem.interes
      }
    })

    return interes
  }

  function getDetFactMostrar(id){
    const vector = []

    dtDet.map((elem) => {
      if(elem.facturaId === id){
        vector.push(elem)
      }
    })

    setDetMostrar(vector)
  }

  function getProdMostrar(id, caso){
    let nombre = ''
    let precio = 0

    dtProd.map((elem) => {
      if(elem.id === id){
        nombre = elem.nombre
        precio = elem.precio
      }
    })

    return caso === 'Nombre' ? nombre : precio
  }


    
  return (
    <div class="read-container">
      <div class="datatable-container">
        <div class="header-tools">
          <div class="tools">
            <ul>
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
              <td>Nro</td>
              <td>Fecha</td>
              <td>SubTotal</td>
              <td>Descuento</td>
              <td>Interes</td>
              <td>Total</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {dtFact.map((elem) => (
              <tr>
                <td>{elem.id}</td>
                <td>{elem.fecha}</td>
                <td>{getSubTotal(elem.id)}</td>
                <td>{elem.descuento}</td>
                <td>{getInteres(elem.formaPagoId)}</td>
                <td>{getTotal(elem.id, elem.descuento, elem.formaPagoId)}</td>
                <td>
                  <button onClick={() => getDetFactMostrar(elem.id)}>DETALLE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="datatable-container">
        <table class="datatable">
          <thead>
            <tr>
              <td>Producto</td>
              <td>Precio</td>
              <td>Cantidad</td>
              <td>Monto</td>
            </tr>
          </thead>
          <tbody>
            {detMostrar.map((elem) => (
              <tr>
                <td>{getProdMostrar(elem.productoId, 'Nombre')}</td>
                <td>{getProdMostrar(elem.productoId, 'Precio')}</td>
                <td>{elem.cantidad}</td>
                <td>{elem.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}



export default ReadFacturas;