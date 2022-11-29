import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

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
             <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group controlId='formNombre'>
                        <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' name='nombre' onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId='formEspecie'>
                        <Form.Label>Especie</Form.Label>
                            <Form.Select type='text' name='especie' defaultValue='Prunus' onChange={handleChange}>
                                <option disabled>Selecciona una opcion</option>
                                <option>Prunus avium</option>
                                <option>Prunus cerasus</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group controlId='formPrecocidad'>
                        <Form.Label>Precocidad</Form.Label>
                            <Form.Select type='text' name='preco' defaultValue='Temprana' onChange={handleChange}>
                                <option disabled>Selecciona una opcion</option>
                                <option>Temprana</option>
                                <option>Tardia</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group controlId='formDescripcion'>
                        <Form.Label>Descripcion</Form.Label>
                            <Form.Group className=' w-100' as='textarea' rows={3} name='descrip' onChange={handleChange}>
                            </Form.Group>
                    </Form.Group>
                    <Form.Group controlId='formPaisOri'>
                        <Form.Label>Pais Origen</Form.Label>
                            <Form.Select type='text' name='paisorigen' defaultValue='id_pais' onChange={handleChange}>
                                <option disabled>Selecciona una opcion</option>
                                <option>Espana</option>
                                <option>Francia</option>
                                <option>Chile</option>
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