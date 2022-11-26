import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormPais(){

    const[pais , setPais] =useState({
        nombre: '',
        continente: ''
    })

    const handleChange = (e) => {
        setPais({
            ...pais,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , continente} = pais
        if((nombre === '')||(continente === '')){
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
                        <Form.Label>Continente</Form.Label>
                            <Form.Group as='select' type='text' name='continente' onChange={handleChange}>
                                <option>Africa</option>
                                <option>Europa</option>
                                <option>America</option>
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