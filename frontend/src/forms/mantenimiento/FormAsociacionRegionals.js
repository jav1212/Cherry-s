import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormAsociacionRegional(){
    
    const[asociacion, setAsociacion] =useState({
        nombre: '',
        region: ''
    })

    const handleChange = (e) => {
        setAsociacion({
            ...asociacion,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , id_reg} = asociacion
        if((nombre === '')||(id_reg === '')){
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
                            <Form.Select type='text' name='id_reg' onChange={handleChange}>
                                <option disabled>Selecciona una opcion</option>
                                <option>Region 1</option>
                                <option>Region 2</option>
                                <option>Region 3</option>
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