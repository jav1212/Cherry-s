import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormEmpresaProveedora(){
    const[proveedor , setProveedor] =useState({
        nombre: '',
        id_cdad: '',
        rama_neg: ''
    })

    const handleChange = (e) => {
        setProveedor({
            ...proveedor,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , id_cdad, rama_neg} = proveedor
        if((nombre === '')||(id_cdad === '')||(rama_neg === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' name='nombre' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ciudad</Form.Label>
                            <Form.Select type='text' name='id_cdad' onChange={handleChange}>
                                <option>Ciudad 1</option>
                                <option>Ciudad 2</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rama de Negocio</Form.Label>
                            <Form.Select type='text' name='rama_neg' onChange={handleChange}>
                                <option>Rama 1</option>
                                <option>Rama 2</option>
                            </Form.Select>
                    </Form.Group>
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}