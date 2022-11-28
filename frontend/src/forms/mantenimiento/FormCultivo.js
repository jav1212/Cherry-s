import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormCultivo(){
    const[cultivo , setCultivo] =useState({
        nombre: '',
        calibre: '',
        dispini: '',
        dispfin: '',
        prodesperada: '',
        maximo: '',
        productora: '',
        variedad: ''
    })

    const handleChange = (e) => {
        setCultivo({
            ...cultivo,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , calibre, dispini,
                dispfin, prodesperada, maximo,
                productora, variedad} = cultivo
        if((nombre === '')||(calibre === '')||
        (dispini === '')||(dispfin === '')||
        (prodesperada === '')||(maximo === '')||
        (maximo === '')){
            alert('campo vacio')
            return
        }
    }
}