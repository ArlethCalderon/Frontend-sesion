import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './pages/Login'
import ListaCitas from './pages/ListaCitas'
import Usuarios from './pages/Usuarios'
import Navbar from './componentes/Navbar';
import RegistrarCita from './pages/RegistrarCita'


function App() {
  return (
    <div> 
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/listacitas' element={<ListaCitas/>} />
          <Route path='/usuarios' element={<Usuarios/>} />
          <Route path='/registrarcita' element={<RegistrarCita/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
