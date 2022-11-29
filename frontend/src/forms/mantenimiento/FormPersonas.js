import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormPersona(){
    const[persona , setPersona] =useState({
        doc_id: '',
        nombre1: '',
        nombre2: '',
        apellido1: '',
        apellido2: ''
    })

    const handleChange = (e) => {
        setPersona({
            ...persona,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {docident, nombre1 , nombre2, apellido1, apellido2} = persona
        if((docident === '')||(nombre1 === '')||
        (nombre2 === '')||(apellido1 === '')||
        (apellido2 === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Documento de identidad</Form.Label>
                            <Form.Control type='text' name='doc_id' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Primer nombre</Form.Label>
                            <Form.Control type='text' name='nombre1' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Segundo nombre</Form.Label>
                            <Form.Control type='text' name='nombre2' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Primer apellido</Form.Label>
                            <Form.Control type='text' name='apellido1' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Segundo apellido</Form.Label>
                            <Form.Control type='text' name='apellido2' onChange={handleChange}/>
                    </Form.Group>
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}