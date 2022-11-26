import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormAsociacionRegional(){
    
    const[asociacion, setAsociacion] =useState({
        nombre: '',
        region: '',
        tipoasesor: ''
    })

    const handleChange = (e) => {
        setAsociacion({
            ...asociacion,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , region, tipoasesor} = asociacion
        if((nombre === '')||(region === '')||(tipoasesor === '')){
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
                                <option>Region 3</option>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo de asesoramiento</Form.Label>
                            <Form.Group as='select' type='text' name='tipoasesor' onChange={handleChange}>
                                <option>asesor 1</option>
                                <option>asesor 2</option>
                                <option>asesor 3</option>
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