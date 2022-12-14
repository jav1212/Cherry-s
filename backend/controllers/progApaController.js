import pool from "../database/database.js"
import selectQuery from "../utils/selectQuery.js"

const personaPost = (req, res) => {
    const {doc_id, nombre1, apellido1, nombre2, apellido2} = req.body
    
    let valores = "(" + doc_id + ", '" + nombre1 + "', '" + apellido1 + "'"
    let columnas = " (doc_id, nombre1, apellido1"

    if (nombre2 != ''){
        valores = valores + ", '" + nombre2 + "'"
        columnas = columnas + ", nombre2"
    }

    if (apellido2 != ''){
        valores = valores + ", '" + apellido2 + "'"
        columnas = columnas + ", apellido2"
    }

    valores = valores + ")"
    columnas = columnas + ")"


    pool.query("INSERT INTO personas " + columnas + " VALUES " + valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const progApaGet = (req, res) => {
    let personas = []
    let productoras = []

    selectQuery("(doc_id, nombre1, apellido1)", "personas", "", '', (err, result) => {
        if (err)
            res.status(500).send(err)
        
        personas = result

        selectQuery("e.id, e.nombre", "empresasproductoras e", '', '', (err, result) => { //
            if (err)
                res.status(500).send(err)

            productoras = result

            res.json({personas, productoras})
        })

    })
}

const variedadPost = (req, res) => {
    const {id_prod} = req.body

    const condicion = " WHERE c.id_prod = " + id_prod + " AND v.id = c.id_crz"

    selectQuery("v.nombre, v.id", "variedadescrz v, cultivos c", condicion, " GROUP BY v.id", (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const progApaPost = (req, res) => {
    const {id_per, id_crz, id_prod, aporte_anual} = req.body
    
    let columnas = "(id_per, id_crz, id_prod, fe_i"
    let valores = "(" + id_per + ", " + id_crz + ", " + id_prod + ", CURDATE()"
    
    if (aporte_anual != ''){
        valores = valores  + ", " + aporte_anual
        columnas = columnas + ", aporte_anual"
    }
    
    valores = valores + ")"
    columnas = columnas + ")"
        
    pool.query("INSERT INTO apadrinamientos " + columnas + " VALUES "+ valores, (err, result) =>{
        if (err)
            res.status(500).send(err)
        res.json(result)
    })    
}

const cancelarProgApaPerPost = (req, res) => {
    const {id_prod} = req.body

    const condicion = " WHERE a.id_prod = " + id_prod + " AND p.doc_id = a.id_per"

    selectQuery("p.doc_id, p.nombre1, p.apellido1", " apadrinamientos a, personas p", condicion, "GROUP BY p.doc_id", (err, result) => {
        if (err)
            res.status(500).send(err)
        res.send(result)
    })
}

const cancelarProgApaCrzPost = (req, res) => {
    const {id_prod, id_per} = req.body

    const condicion = " WHERE a.id_prod = " + id_prod + " AND a.id_per = " + id_per + " AND a.id_crz = v.id"

    selectQuery("v.id, v.nombre", " variedadescrz v, apadrinamientos a", condicion, "GROUP BY v.id", (err, result) => {
        if (err)
            res.status(500).send(err)
        res.send(result)
    })
}

const cancelarProgApaPost = (req, res) => {
    const {id_prod, id_per, id_crz} = req.body

    pool.query("UPDATE apadrinamientos SET fecha_fin = CURDATE() WHERE id_per = " + id_per + " AND id_crz = " + id_crz + " AND id_prod = " + id_prod, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    } )
}

const productoraGet = (req, res) => {
    selectQuery("e.id, e.nombre", "empresasproductoras e", '', '', (err, result) => { //
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

export const progApaController = {
    personaPost, progApaGet, variedadPost, productoraGet, progApaPost, cancelarProgApaPerPost, cancelarProgApaCrzPost, cancelarProgApaPost 
}