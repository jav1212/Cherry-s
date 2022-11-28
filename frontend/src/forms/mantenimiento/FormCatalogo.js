import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormCatalogo(){
    const[catalogo , setCatalogo] =useState({
        empresaprod: '',
        empresaprov: ''
    })

    const handleChange = (e) => {
        setCatalogo({
            ...catalogo,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {empresaprod, empresaprov} = catalogo
        if((empresaprod === '')||(empresaprov === '')){
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
                                <option>Produc 1</option>
                                <option>Produc 2</option>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Empresa Proveedora</Form.Label>
                            <Form.Group as='select' type='text' name='id_prove' onChange={handleChange}>
                                <option>Provee 1</option>
                                <option>Provee 2</option>
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