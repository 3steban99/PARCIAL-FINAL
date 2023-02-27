import axios from "axios";
import React, { useState , useEffect } from "react";
import { Link} from "react-router-dom";
const client = axios.create({ baseURL: "http://localhost:3001" })


function ReadVenta(){
    const fecha = new Date().toLocaleDateString();
    const [idUltimaFactura, setIdUltimaFactura] = useState();
    const [prod, setProd] = useState([])
    const [items, setItems] = useState([]);
    const [productoFiltrado, setProductoFiltrado] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [descuento, setDescuento] = useState(0)
    const [formaPago, setFormaPago] = useState(0)

    useEffect(() => {
        getData()
    }, [])

    async function traerNumeroFactura() {
        try {
            const response = await axios.get("http://localhost:3001/Factura")
            let facturas = response.data;
            setIdUltimaFactura(facturas[facturas.length - 1].id);            
        } catch (err) {
            console.log(`Error cargar Numero de Factura: ${err}`);
        }
    }

    async function getData(){
        try {
            const response = await client.get("http://localhost:3001/Productos")
            traerNumeroFactura(idUltimaFactura)
            setProd(response.data)
            setProductoFiltrado(response.data)
        }
        catch (err) {
            console.log(`Error cargar Productos: ${err}`);
        }
    }

    function setData(elem){
        const item = {
            productoId: elem.id,
            nombre: elem.nombre,
            precio: elem.precio,
            cantidad: cantidad,
            monto: (cantidad * elem.precio)
        }
        setItems([...items, item])
    }

    function filtrar(filtro)
    {
        setProductoFiltrado(prod.filter(elem => elem.nombre.match(new RegExp(filtro,'i'))))
    }

    function onDelete(index){
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    }

    async function Facturar(){
        try {
            await client.post("http://localhost:3001/Factura", {fecha: fecha, formaPagoId: formaPago, descuento: descuento})
                
            //let actualNumeroFactura = response.data.id

            RecorrerDetalle(idUltimaFactura+1)
        }
        catch (err) {
            console.log(`Error guardar factura: ${err}`);
        }
    } 

    function RecorrerDetalle(id) {
        items.map((elem) => (
            FacturarDetalle(elem, id)
        ))
    }

    async function FacturarDetalle(elem, id){
        try {
            await client.post("http://localhost:3001/DetalleFactura", {
                productoId: elem.productoId, cantidad: elem.cantidad, monto: elem.monto, facturaId: id})

            setItems([])
            }
        catch (err) {
            console.log(`Error guardar detalle factura: ${err}`);
        }
    }
    
    return (
        <>
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
                                <li>
                                    <button onClick={() => Facturar()}>
                                        <i class="material-icons">receipt</i>
                                    </button>
                                </li>
                                <li>FACTURAR</li>
                            </ul>
                        </div>
                    </div>
                    <div class = "header-tools">
                        <div class="tools">
                            <ul>
                                <li>Descuento</li>
                                <input type="number" className="inputDescuento" onChange={(e) => setDescuento(parseInt(e.target.value))} />
                                <li className="formaPago">Forma de Pago</li>
                                <select id="selFormaPago" onClick={(e) =>setFormaPago(e.target.value)}>
                                    <option value={3}>Contado</option>
                                    <option value={1}>Tarjeta</option>
                                </select>
                            </ul>
                        </div>
                    </div>
                    <table class="datatable">
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                                <td>Monto</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((elem, index) => (
                                <tr>
                                    <td>{elem.nombre}</td>
                                    <td>{elem.precio}</td>
                                    <td>{elem.cantidad}</td>
                                    <td>{elem.monto}</td>
                                    <td>
                                        <button onClick={() => onDelete(index)}>
                                            <i class="material-icons">delete</i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div class="datatable-container">
                    <div class="header-tools">
                        <div class="search">
                            <input type="text" onChange={(e) => filtrar(e.target.value)} class="search-input" />
                        </div>
                    </div>
                    <table class="datatable">
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {productoFiltrado.map((elem) => (
                                <tr>
                                    <td>{elem.nombre}</td>
                                    <td>{elem.precio}</td>
                                    <td>
                                        <input type="number" onChange={(e) => setCantidad(parseInt(e.target.value))} />
                                    </td>
                                    <td>
                                        <button onClick={() => setData(elem)}>
                                            <i class="material-icons">add_circle</i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ReadVenta;