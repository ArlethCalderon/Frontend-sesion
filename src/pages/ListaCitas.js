import React from "react";
import { useState } from "react";
import Navbar from "../componentes/Navbar";
import { useEffect } from "react";
import RegistrarCita from '../pages/RegistrarCita'
import EditarCita from "./EditarCita";
import { useNavigate } from "react-router-dom";

const ListaCitas = (props) => {

  const navigate = useNavigate()
  const [cita, setCita] = useState([])
  const [id, setId] = useState()
  const [load, setLoad] = useState(false)
  const [editar, setEditar] = useState({
    idCita: null,
    nombre: "",
    telefono: 0,
    correo: "",
    servicio: ""
  })


  useEffect(() => {
    fetch ('https://localhost:44326/api/cita')
    .then(res => res.json())
    .then(res => {
      setCita(res)
      setLoad(false)
    })
  }, [load])

  const EliminarCita = async(idCita) => {
    await fetch ('https://localhost:44326/api/cita/' + idCita,
    { 
      method: 'DELETE'
    })
    .then(() => setLoad(true))
  }

  const EditarCita = async(dato) => {
      setEditar({ 
        idCita: dato.idCita,
        nombre: dato.nombre,
        telefono: 10,
        correo: dato.correo,
        servicio: dato.servicio
      })
      
    
  }

  const GuardarEditar = async() => {
    await fetch('https://localhost:44326/api/cita/' + editar.idCita,
    {
     method: 'PUT',
     headers: {
      'Content-Type': 'application/json'
     },
     body: JSON.stringify(editar)
    })
    .then(()=> setLoad(true))

 
  }


  
  return (
    
    <div >
      <Navbar/>
    <h3 class="center"> Bienvenido/a, {props.usuario} </h3>
     <button onClick={() => navigate('/registrarcita')}>Añadir Cita</button>
    <table className="table container mt-3">

      <thead>
      <tr>
        <th colSpan="9" className="text-center">Lista de citas</th>
      </tr>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Teléfono</th>
          <th scope="col">Correo</th>
          <th scope="col">Servicio</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        

       {cita.map(dato => (
        <tr>
          
          <td >{dato.idCita}</td>
          <td >{dato.nombre}</td>
          <td >{dato.telefono}</td>
          <td >{dato.correo}</td>
          <td >{dato.servicio}</td>
		     <td>
         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => EditarCita(dato)}>
            Editar Cita
             </button>
          <button onClick={() => EliminarCita(dato.idCita)} type="button" class="btn btn-danger">Eliminar</button>
         </td>
        </tr>
      )) } 

      </tbody>
    </table>

   

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Cita</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <input type="text"
            className="form-control"
            name="nombre"
            id="nombre"
            defaultValue={editar.nombre}
            placeholder="Nombre" 
            onChange={(e) => setEditar({...editar, nombre: e.target.value})}/>

        <input type="number"
            className="form-control"
            name="nombre"
            id="nombre"
            placeholder="Telefono" defaultValue={editar.telefono} 
            onChange={(e) => setEditar({...editar, telefono: e.target.value})}/>

        <input type="text"
            className="form-control"
            name="nombre"
            id="nombre"
            placeholder="Correo" defaultValue={editar.correo}
            onChange={(e) => setEditar({...editar, correo: e.target.value})}/>

        <input type="text"
            className="form-control"
            name="nombre"
            id="nombre"
            placeholder="Servicio" defaultValue={editar.servicio} 
            onChange={(e) => setEditar({...editar, servicio: e.target.value})}/>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onClick={GuardarEditar}>Guardar datos</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ListaCitas;
