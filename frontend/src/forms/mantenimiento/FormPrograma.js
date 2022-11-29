import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormPrograma(){
    const[programa , setPrograma] =useState({
        empresaprod: '',
        variedad: '',
        persona: ''
    })

    const handleChange = (e) => {
        setPrograma({
            ...programa,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {empresaprod, variedad, persona} = programa
        if((empresaprod === '')||(variedad === '')||(persona === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Empresa Productora</Form.Label>
                            <Form.Group as='select' type='text' name='id_prod' onChange={handleChange}>
                                <option>Empresa 1</option>
                                <option>Empresa 2</option>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Variedad</Form.Label>
                            <Form.Group as='select' type='text' name='id_crz' onChange={handleChange}>
                                <option>Variedad 1</option>
                                <option>Variedad 2</option>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Personas</Form.Label>
                            <Form.Group as='select' type='text' name='id_per' onChange={handleChange}>
                                <option>Persona 1</option>
                                <option>Persona 2</option>
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