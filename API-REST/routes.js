// const express = require('express');
// const producto = express.Router();
// const forma = express.Router();


// //PRODUCTOS

// producto.get('/', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('SELECT * FROM Productos', (err, rows)=>{
//             if(err) return res.send(err)

//             res.json(rows)
//         })
//     })
// })

// producto.post('/', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('INSERT INTO Productos set ?', [req.body],(err, rows)=>{
//             if(err) return res.send(err)

//             res.send(rows)
//         })
//     })
// })

// producto.delete('/:id', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('DELETE FROM Productos WHERE id = ?', [req.params.id],(err, rows)=>{
//             if(err) return res.send(err)

//             res.send(rows)
//         })
//     })
// })

// producto.put('/:id', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('UPDATE Productos set ? WHERE id = ?', [req.body, req.params.id],(err, rows)=>{
//             if(err) return res.send(err)

//             res.send(rows)
//         })
//     })
// })

// //FORMA DE PAGO

// forma.get('/', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('SELECT * FROM FormaDePago', (err, rows)=>{
//             if(err) return res.send(err)

//             res.json(rows)
//         })
//     })
// })


// //FACTURA



// //DETALLE FACTURA


// module.exports = producto
// module.exports = forma




