import { Link } from "react-router-dom";


function ReadInicio(){

    return (
        <div className="main-inicio">
            <div className="main-header">
                <h2>MaxiKiosco</h2>
            </div>
            <div class="main-body" >
                <ul>
                    <li>
                        <Link to="/readVenta">
                            <button>
                                <i class="material-icons">shopping_cart</i>
                            </button>
                        </Link> <br />
                        <label>Ventas</label>
                    </li>
                    <li>
                        <Link to="/readProductos">
                            <button>
                                <i class="material-icons">inventory</i>
                            </button>
                        </Link><br />
                        <label>Productos</label>
                    </li>
                    <li>
                        <Link to="/readFacturas">
                            <button>
                                <i class="material-icons">receipt</i>
                            </button>
                        </Link><br />
                        <label>Facturas</label>
                    </li>
                    <li>
                        <Link to="/readFormaDePago">
                            <button>
                                <i class="material-icons">wallet</i>
                            </button>
                        </Link><br />
                        <label>Formas de Pago</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ReadInicio;