import './Mantenimiento.css'
import Navigation from '../browser/Navigation';
import fondo from './img/mantenimiento.jpg'
import Button from 'react-bootstrap/esm/Button';  

export default function Mantenimiento() {
    return (
        <>
            <figure className='figure w-100'>
                <Navigation/>
                <img className=' img-fluid w-100' src= {fondo} alt='variedades'/>
            </figure>
            <div>
                <h1 className='text-center'>Registros</h1>
            </div>
            <div className=' d-flex flex-wrap align-content-between justify-content-center gap-4 mb-xxl-5'>
                <Button href='/formpais' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Pais</Button>
                <Button href='/formciudad' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Ciudad</Button>
                <Button href='/formregion' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Region</Button>
                <Button href='/formasociacionregional' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Asociacion Regional</Button>
                <Button href='/formempresaproductora' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Empresa Productora</Button>
                <Button href='/formramasnegocio' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Ramas de Negocio</Button>
                <Button href='/formempresaproveedora' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Empresas Proveedoras</Button>
                <Button href='/formprecio' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Cultivos</Button>
                <Button href='/formvariedad' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Produccion anual</Button>
                <Button href='/formprecio' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Convenios con Asociacion Regional</Button>
                <Button href='/formvariedad' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Catalogo</Button>
                <Button href='/formprecio' className=' w-25 text-black bg-light rounded-0 border border-2 border-dark'>Convenios con proveedores</Button>
            </div>
        </>
    )
}