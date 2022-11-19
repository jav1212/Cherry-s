import './Variedades.css'
import fondo from './img/variedades.jpg'
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

export default function Variedades() {
    return (
        <>
            <img className=' img-fluid w-100' src= {fondo} alt='variedades'/>
            <div className='div-bg1 d-flex align-items-center'>
                <div className='container d-flex align-items-center justify-content-between'>
                    <p className=' mb-0 text-white'>Puedes agregar variedades a tus cultivos</p>
                    <Button as={Link} to='/multisteps'
                        className=' w-auto text-white text-black bg-transparent rounded-0 border border-2 border-white'>
                            <Link to={'/multisteps'}></Link>
                            Registrar
                    </Button>
                </div>
            </div>

        </>
    )
}