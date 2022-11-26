import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormPrecio(){

    const [precio, setPrecio] = useState({
        pais: '',
        variedad: '',
        monto: '',
        calibre: ''
    })

    const handleChange = (e) => {
        setPrecio({
            ...precio,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {pais,variedad,monto,calibre} = precio
        if((pais === '')||(variedad === '')||(monto === '')||(calibre === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Pais</Form.Label>
                            <Form.Group as='select' type='text' name='pais' onChange={handleChange}>
                                <option>Espana</option>
                                <option>Francia</option>
                                <option>Chile</option>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Variedad</Form.Label>
                            <Form.Group className=' mt-4' as='select' type='text' name='variedad' onChange={handleChange}>
                                <option>Burlat</option>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio del Kg</Form.Label>
                            <Form.Control type='text' name='monto' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Calibre</Form.Label>
                            <Form.Group className='mt-4' as='select' type='text' name='calibre' onChange={handleChange}>
                                <option>Small</option>
                                <option>Large</option>
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