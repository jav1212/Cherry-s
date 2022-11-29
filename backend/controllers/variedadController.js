import pool from "../database/database.js"
import insertQuery from "../utils/insertQuery.js"
import selectQuery from "../utils/selectQuery.js"

const variedadGet = (req, res) => {
    selectQuery("id, nombre", "paises", '', '', (err, result) => { 
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const variedadPost = (req, res) => {
    const {id_pais, nombre, especie, preco, descrip} = req.body

    const valores = id_pais + ", '"+ nombre + "', '" + especie + "', '" + preco + "', '" + descrip + "'" 

    insertQuery('variedadescrz', '', ' (id, id_pais, nombre, especie, preco, descrip)', valores, (err, result) => {
        if (err)
            res.status(500).json(err)
        res.json(result)
    })
}

const precioVariedadGet = (req, res) => {
    let paises = []
    let variedades = []

    selectQuery("id, nombre", "paises", '', '', (err, result) => { 
        if (err)
            res.status(500).send(err)

        paises = result

        selectQuery("id, nombre", "variedadescrz", '', '', (err, result) => { 
            if (err)
                res.status(500).send(err)
            variedades = result

            res.json({paises, variedades})
        })
    }) 
}

const precioVarActualGet = (req, res) => {
    const {id_pais, id_crz, calibre} = req.body

    const condicion = " WHERE id_pais = "+ id_pais + " AND id_crz = "+ id_crz + " AND calibre = '" + calibre + "' AND fe_f IS NULL"

    selectQuery("id, precio, calibre", "paisescrzs", condicion, '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const precioVariedadPost = (req, res) => {
    const {id_pais, id_crz, precio, calibre} = req.body

    const condicion = " WHERE id_pais = " + id_pais + " AND id_crz = "+ id_crz
    const valores = id_pais + ", " + id_crz + ", " + precio + ", '" + calibre + "', CURDATE()" 

    insertQuery('paisescrzs', condicion ,' (id, id_pais, id_crz, precio, calibre, fe_i)', valores, (err, result) => {
        if (err)
            res.status(500).json(err)
        else
            res.json(result)
    })
}

const cancelarPrecioPost = (req, res) => {
    const {id_pais, id_crz, id} = req.body

    pool.query("UPDATE paisescrzs SET fe_f = CURDATE() WHERE id_pais = "+ id_pais + " AND id_crz = "+ id_crz + " AND id = "+ id , (err, result) => {
        if (err)
            res.status(500).json(err)
        res.json(result)
    })
}

export const variedadController = {
    variedadGet, variedadPost, precioVariedadGet, precioVarActualGet, precioVariedadPost, cancelarPrecioPost
}