
import React from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Registrar = () => {

  const navigate = useNavigate()

  const [citaAgendada, setCitaAgendada] = useState({
    idCita: Date.now(),
    nombre: "",
    telefono: 0,
    correo: "",
    servicio: ""
  })

  const Registrar = async () => {
    await fetch('https://localhost:44326/api/cita', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(citaAgendada)
    })
    .then(() => {
       navigate ('/listacitas')
     })
    
  }
  
  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">
        <div className="card col-lg-6">
          <h2 className="text-center">Registrar Cita</h2>
          <div className="card-body">
            <form className="from-group" >
              <div>
                <label className="form-label" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre"
                  onChange={(e) => setCitaAgendada({...citaAgendada, nombre: e.target.value})}
                                  />
              </div>

              <div>
                <label className="form-label" htmlFor="telefono">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="telefono"
                  id="telefono"
                  placeholder="Telefono"
                  onChange={(e) => setCitaAgendada({...citaAgendada, telefono: e.target.value})}
                  
                />
              </div>
              
              <div>
                <label className="form-label" htmlFor="correo">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  id="correo"
                  placeholder="example@gmail.com"
                  onChange={(e) => setCitaAgendada({...citaAgendada, correo: e.target.value})}
                  
                />
              </div>
            
              <div>
                <label className="form-label" htmlFor="servicio">
                  Servicio
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="servicio"
                  id="servicio"
                  placeholder="Servicio"
                  onChange={(e) => setCitaAgendada({...citaAgendada, servicio: e.target.value})}
                  
                />
              </div>
             
            </form>

            <div className="d-grip gap-2">
                <button onClick={Registrar}>Registrar</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
