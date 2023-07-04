import "./main.css"
import "./table.css"
import ReadInicio from "./Components/ReadInicio"
import ReadVenta from "./Components/ReadVenta";
import ReadProductos from "./Components/ReadProductos";
import ReadFacturas from "./Components/ReadFacturas";
import ReadFormaDePago from "./Components/ReadFormaDePago"
import CreateProducto from "./Components/CreateProducto";
import CreateFormaDePago from "./Components/CreateFormaDePago"
import UpdateProducto from "./Components/UpdateProducto";
import UpdateFormaDePago from "./Components/UpdateFormaDePago"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<ReadInicio />} />
        </Routes>
        <Routes>
          <Route exact path="/readVenta" element={<ReadVenta/>} />
        </Routes>
        <Routes>
          <Route exact path="/readProductos" element={<ReadProductos />} />
        </Routes>
        <Routes>
          <Route exact path="/readFormaDePago" element={<ReadFormaDePago />} />
        </Routes>
        <Routes>
          <Route exact path="/readFacturas" element={<ReadFacturas />} />
        </Routes>
        <Routes>
          <Route exact path="/createProducto" element={<CreateProducto />} />
        </Routes>
        <Routes>
          <Route exact path="/createFormaDePago" element={<CreateFormaDePago />} />
        </Routes>
        <Routes>
          <Route exact path="/updateFormaDePago" element={<UpdateFormaDePago/> } />
        </Routes>
        <Routes>
          <Route exact path="/updateProducto" element={<UpdateProducto/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
