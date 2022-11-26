import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormRegion(){

    const[region , setRegion] =useState({
        nombre: '',
        pais: ''
    })

    const handleChange = (e) => {
        setRegion({
            ...region,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , pais} = region
        if((nombre === '')||(pais === '')){
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
                        <Form.Label>Pais</Form.Label>
                            <Form.Group as='select' type='text' name='pais' onChange={handleChange}>
                                <option>Espana</option>
                                <option>Alemania</option>
                                <option>Chile</option>
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