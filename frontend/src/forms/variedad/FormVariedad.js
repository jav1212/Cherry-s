import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import backstyle from './backstyle.css'

export default function FormVariedad(){

    const [variedad, setVariedad] = useState({
        nombre: '',
        especie: '',
        preco: '',
        descrip: '',
        id_pais: ''
    })

    const handleChange = (e) => {
        setVariedad({
            ...variedad,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {nombre, especie,preco,descrip,id_pais} = variedad
        if((nombre === '')||(especie === '')||(preco === '')||(descrip === '')||(id_pais === '')){
            alert('campo vacio')
            return
        }

        //axios no se que hace el post
    }

    return(
        <>
            <div className=' d-flex align-items-center justify-content-center w-100 h-100'>
                <div className='container back'>
                    <Form className='w-100 text-white d-flex flex-column justify-content-between p-5 gap-3' onSubmit= {handleSubmit}>
                        <h1 className=' text-center'>Registrar Variedad</h1>
                        <Form.Group>
                            <Form.Label className=' fs-5'>Nombre</Form.Label>
                                <Form.Control className='rounded-0 border' type='text' name='nombre' onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className=' fs-5'>Especie</Form.Label>
                                <Form.Select className='rounded-0 border' name='especie' defaultValue='Prunus' onChange={handleChange}>
                                    <option disabled>Selecciona una opcion</option>
                                    <option>Prunus avium</option>
                                    <option>Prunus cerasus</option>
                                </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className=' fs-5'>Precocidad</Form.Label>
                                <Form.Select className='rounded-0 border' name='preco' defaultValue='Temprana' onChange={handleChange}>
                                    <option disabled>Selecciona una opcion</option>
                                    <option>Temprana</option>
                                    <option>Tardia</option>
                                </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className=' fs-5'>Descripcion</Form.Label>
                                <Form.Group className=' w-100' as='textarea' rows={3} name='descrip' onChange={handleChange}>
                                </Form.Group>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className=' fs-5'>Pais Origen</Form.Label>
                                <Form.Select className='rounded-0 border' name='paisorigen' defaultValue='id_pais' onChange={handleChange}>
                                    <option disabled>Selecciona una opcion</option>
                                    <option>Espana</option>
                                    <option>Francia</option>
                                    <option>Chile</option>
                                </Form.Select>
                        </Form.Group>
                        <Form.Group className=' d-flex align-content-center justify-content-center' >
                            <Button className=' w-25 text-black bg-light rounded-0 border border-2 border-dark' type="submit">
                                    Registrar
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}