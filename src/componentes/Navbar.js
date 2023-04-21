import {Link} from 'react-router-dom'


const Navbar = (cerrarSesion) => {


    return (
      <nav class="navbar navbar-expand-lg navbar-purple-300 bg-purple-300">
      <div class="container-fluid">
        <Link to='/'>
          <img src={require ("../image/logoiobella.png")}  width='70' />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">

          <ul class="nav navbar-nav mx-auto">
            <li class="nav-item">
              <Link className="nav-link" to ='/listacitas'>Mostrar Citas</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link"to ='/usuarios'>Mostrar admin</Link>
            </li>    
            <li class="nav-item">
            <Link className="nav-link"to ='/registrarcita'>Registrar Cita</Link>
            </li>    
            <li class="nav-item">
              <a className="nav-link  h5  text-center"  style={{color:"white"}}  href=" "  onClick={cerrarSesion } >Cerrar Sesión</a>
            </li>
      
          </ul>
        </div>
      </div>
    </nav>

    )
}
export default Navbar