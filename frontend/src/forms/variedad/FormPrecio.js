import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormPrecio(){

    const [preciopais, setPreciopais] = useState({
        id_pais: '',
        id_cereza: '',
        precio: '',
        calibre: ''
    })

    const handleChange = (e) => {
        setPreciopais({
            ...preciopais,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {id_pais,id_cereza,precio,calibre} = preciopais
        if((id_pais === '')||(id_cereza === '')||(precio === '')||(calibre === '')){
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
                            <Form.Select type='text' name='id_pais' onChange={handleChange}>
                                <option disabled>Selecciona una opcion</option>
                                <option>Espana</option>
                                <option>Francia</option>
                                <option>Chile</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Variedad</Form.Label>
                            <Form.Select type='text' name='id_cereza' onChange={handleChange}>
                                <option disabled>Selecciona una opcion</option>
                                <option>Burlat</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio del Kg</Form.Label>
                            <Form.Control type='text' name='precio' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Calibre</Form.Label>
                            <Form.Select type='text' name='calibre' onChange={handleChange}>
                                <option disabled>Selecciona una opcion</option>
                                <option>Small</option>
                                <option>Large</option>
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