import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormFormaPago(){
    const[forma , setForma] =useState({
        empresa: '',
        tipo: '',
        maxenvio: '',
        maxpago: '',
        numero: '',
        porcion: ''
    })

    const handleChange = (e) => {
        setForma({
            ...forma,
            [e.target.name] : e.target.value,
        })
        console.log(forma)
    }

    const handleSubmit = () => {
        const {empresa , tipo, maxenvio,
            maxpago, numero, porcion} = forma
        if((empresa === '')||(tipo === '')||
        (maxenvio === '')||(maxpago === '')||
        (numero === '')||(porcion === '')){
            alert('campo vacio')
            return
        }
    }

    const handleOption = () => {
        const {empresa , tipo, maxenvio,
            maxpago, numero, porcion} = forma

           // console.log(forma)
        if((forma.tipo === 'Contado')){
            alert('seleccionaste contado')
        }
    }

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Empresa</Form.Label>
                        <Form.Select type='text' name='id_prod' onChange={handleChange}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Empresa 1</option>
                            <option>Empresa 2</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Select type='text' name='tipo' onChange={(e) => {handleChange(e); handleOption(); }}>
                            <option disabled>Selecciona una opcion</option>
                            <option>Contado</option>
                            <option>Cuotas</option>
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