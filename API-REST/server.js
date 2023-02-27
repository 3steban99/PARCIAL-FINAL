const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')

//const producto = require('./routes')
//const forma = require('./routes')



const app = express()
app.set('port', process.env.PORT || 3001)
const dbOptions={
    host:'localhost',
    port: 3306,
    user:'root',
    password:'',
    database:'kiosco'
}

app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())


// RUTAS ---------
app.get('/', (req, res)=>{
    res.send('Bienvenido a mi API')
});


// ----------PRODUCTOS -----------


app.get('/Productos', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Productos', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

app.post('/Productos', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO Productos set ?', [req.body],(err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

app.delete('/Productos/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM Productos WHERE id = ?', [req.params.id],(err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

app.put('/Productos/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE Productos set ? WHERE id = ?', [req.body, req.params.id],(err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

// ---------- FORMA DE PAGO -----------

app.get('/FormaDePago', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM FormaDePago', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

app.post('/FormaDePago', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO FormaDePago set ?', [req.body],(err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

app.delete('/FormaDePago/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM FormaDePago WHERE id = ?', [req.params.id],(err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

app.put('/FormaDePago/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE FormaDePago set ? WHERE id = ?', [req.body, req.params.id],(err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})



// ---------- FACTURA -----------

app.get('/Factura', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Factura', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

app.post('/Factura', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO Factura set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

// app.delete('/Factura/:id', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('DELETE FROM Factura WHERE id = ?', [req.params.id],(err, rows)=>{
//             if(err) return res.send(err)

//             res.send(rows)
//         })
//     })
// })

// app.put('/Factura/:id', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('UPDATE Factura set ? WHERE id = ?', [req.body, req.params.id],(err, rows)=>{
//             if(err) return res.send(err)

//             res.send(rows)
//         })
//     })
// })


// ---------- Detalle Factura -----------

app.get('/DetalleFactura', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM DetalleFactura', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

app.post('/DetalleFactura', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO DetalleFactura set ?', [req.body],(err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

// app.delete('/DetalleFactura/:id', (req, res)=>{
//     req.getConnection((err, conn)=>{
//         if(err) return res.send(err)

//         conn.query('DELETE FROM DetalleFactura WHERE id = ?', [req.params.id],(err, rows)=>{
//             if(err) return res.send(err)

//             res.send(rows)
//         })
//     })
// })

app.put('/DetalleFactura/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE DetalleFactura set ? WHERE id = ?', [req.body, req.params.id],(err, rows)=>{
            if(err) return res.send(err)

            res.send(rows)
        })
    })
})

//server corriendo---------
app.listen(app.get('port'), ()=>{
    console.log('server corriendo en el puerto', app.get('port'))
})