import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormEmpresaProductora(){
    const[empresa , setEmpresa] =useState({
        nombre: '',
        tipo: '',
        direccion: '',
        region: '',
        asociacionreg: '',
        cooperativa: ''
    })

    const handleChange = (e) => {
        setEmpresa({
            ...empresa,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre , tipo, direccion, region, asociacionreg, cooperativa} = empresa
        if((nombre === '')||(tipo === '')||(direccion === '')||(region === '')||(asociacionreg === '')||(cooperativa === '')){
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
                        <Form.Label>Tipo de empresa</Form.Label>
                            <Form.Select type='text' name='tipo' onChange={handleChange}>
                                <option>Empresa</option>
                                <option>Cooperativa</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Direccion</Form.Label>
                            <Form.Group className='w-100' as='textarea' rows={3} name='direc' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Region</Form.Label>
                            <Form.Select type='text' name='id_reg' onChange={handleChange}>
                                <option>region 1</option>
                                <option>region 2</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Asociacion Regional</Form.Label>
                            <Form.Select type='text' name='id_asoc' onChange={handleChange}>
                                <option>asociacion 1</option>
                                <option>asociacion 2</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cooperativa</Form.Label>
                            <Form.Select type='text' name='id_coop' onChange={handleChange}>
                                <option>cooperativa 1</option>
                                <option>cooperativa 2</option>
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