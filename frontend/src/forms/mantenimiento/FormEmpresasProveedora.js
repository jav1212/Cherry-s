import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormEmpresaProveedora(){
    const[proveedor , setProveedor] =useState({
        nombre: '',
        region: '',
        rama: ''
    })

    const handleChange = (e) => {
        setProveedor({
            ...proveedor,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , region, rama} = proveedor
        if((nombre === '')||(region === '')||(rama === '')){
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
                        <Form.Label>Region</Form.Label>
                            <Form.Group as='select' type='text' name='region' onChange={handleChange}>
                                <option>Region 1</option>
                                <option>Region 2</option>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rama de Negocio</Form.Label>
                            <Form.Group as='select' type='text' name='rama' onChange={handleChange}>
                                <option>Rama 1</option>
                                <option>Rama 2</option>
                            </Form.Group>
                    </Form.Group>
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}