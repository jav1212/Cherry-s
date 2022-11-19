import './App.css';

import Navigation from './browser/Navigation';
import Footer from './browser/Footer';
import Home from './pages/Home';
import Variedades from './pages/Variedades';
import Mantenimiento from './pages/Mantenimiento';
import ExportImport from './pages/ExportImport';
import Evaluaciones from './pages/Evaluaciones';
import Recetas from './pages/Recetas';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Multisteps from './forms/Multisteps';
import VariedadForm from './forms/VariedadForm';
import Confirmation from './forms/Confirmation';

function App() {
  return (
    <div>
      <Navigation/>
        <div>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/variedades' element={<Variedades/>} />
                <Route path='/multisteps' element={<Multisteps/>}/>
            <Route path='/mantenimiento' element={<Mantenimiento/>} />
            <Route path='/exportimport' element={<ExportImport/>} />
            <Route path='/evaluaciones' element={<Evaluaciones/>} />
            <Route path='/recetas' element={<Recetas/>} />
          </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
