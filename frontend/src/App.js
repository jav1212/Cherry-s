import './App.css';

import Home from './pages/Home';
import Variedades from './pages/Variedades';
import Mantenimiento from './pages/Mantenimiento';
import ExportImport from './pages/ExportImport';
import Evaluaciones from './pages/Evaluaciones';
import Recetas from './pages/Recetas';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import FormVariedad from './forms/variedad/FormVariedad';
import FormPrecio from './forms/variedad/FormPrecio';
import FormPais from './forms/mantenimiento/FormPais';
import FormCiudad from './forms/mantenimiento/FormCiudad';
import FormRegion from './forms/mantenimiento/FormRegion';
import FormAsociacionRegional from './forms/mantenimiento/FormAsociacionRegionals';
import FormEmpresaProductora from './forms/mantenimiento/FormEmpresaProductora';

function App() {
  return (
    <div>
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/variedades' element={<Variedades/>} />
                    <Route path='/formvariedad' element={<FormVariedad/>}/>
                    <Route path='/formprecio' element={<FormPrecio/>}/>
                <Route path='/mantenimiento' element={<Mantenimiento/>} />
                    <Route path='/formpais' element={<FormPais/>}/>
                    <Route path='/formciudad' element={<FormCiudad/>}/>
                    <Route path='/formregion' element={<FormRegion/>}/>
                    <Route path='/formasociacionregional' element={<FormAsociacionRegional/>}/>
                    <Route path='/formempresaproductora' element={<FormEmpresaProductora/>}/>
                <Route path='/exportimport' element={<ExportImport/>} />
                <Route path='/evaluaciones' element={<Evaluaciones/>} />
                <Route path='/recetas' element={<Recetas/>} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
