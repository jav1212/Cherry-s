import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'

export default function FormEmpresaProductora(){
    const[convasoreg , setConvasoreg] =useState({
        asociacionreg: '',
        proveedor: '',
        vigencia: ''
    })

    const handleChange = (e) => {
        setConvasoreg({
            ...convasoreg,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const {asociacionreg, proveedor, vigencia} = convasoreg
        if((asociacionreg === '')||(proveedor === '')||(vigencia === '')){
            alert('campo vacio')
            return
        }
    }

    //TODO cambiar los names

    return(
        <>
            <div className='container mt-xxl-5 d-flex align-items-center justify-content-center'>
                <Form className='w-100' onSubmit= {handleSubmit}>
                    <Form.Group>
                        <Form.Label>Asociacion Regional</Form.Label>
                            <Form.Select type='text' name='id_asoc' onChange={handleChange}>
                                <option>Asoc 1</option>
                                <option>Asoc 2</option>
                            </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Proveedor</Form.Label>
                            <Form.Select type='text' name='id_prove' onChange={handleChange}>
                                <option>provee 1</option>
                                <option>provee 1</option>
                            </Form.Select>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}