import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormEnvio(){
    const[envio , setEnvio] =useState({
        empresaprod: '',
        empresaclient: '',
        detcontrato: '',
        fechaenvio: '',
        fecharecoleccion: '',
        porcentajeaceptacion: ''
    })

    const handleChange = (e) => {
        setEnvio({
            ...envio,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        const {empresaprod , empresaclient, detcontrato,
            fechaenvio, fecharecoleccion, porcentajeaceptacion} = envio
        if((empresaprod === '')||(empresaclient === '')||
        (detcontrato === '')||(fechaenvio === '')||
        (fecharecoleccion === '')||(porcentajeaceptacion === '')){
            alert('campo vacio')
            return
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Empresa productora</Form.Label>
                        <Form.Select type='text' name='id_prod_cont' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Empresa 1</option>
                            <option>Empresa 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Empresa cliente</Form.Label>
                        <Form.Select type='text' name='id_client_cont' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Empresa 1</option>
                            <option>Empresa 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contrato</Form.Label>
                        <Form.Select type='text' name='id_cont' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Contrato 1</option>
                            <option>Contrato 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha de envio</Form.Label>
                        <Form.Control type='date' name='fe_env' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha de recoleccion</Form.Label>
                        <Form.Control type='date' name='fe_recolec' onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cantidad en kg</Form.Label>
                        <Form.Control type='text' name='cantidad' onChange={handleChange} />
                    </Form.Group>
                    <Button className='mt-4'variant="primary" type="submit">
                            Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}