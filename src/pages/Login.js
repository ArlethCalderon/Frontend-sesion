import { useState } from "react"
import "../App.css"
import ListaCitas from "./ListaCitas"


const Login = () => {

const [miLogin, setLogin] = useState("false")
const [usuario, setUsuario] = useState ("")
const [pass, setPass] = useState("")

function iniciarSesion (e) {
    e.preventDefault() 
    var txtusuario = document.getElementById("txtusuario").value
    var txtpass = document.getElementById("txtpass").value

    if(usuario.length === 0 || pass.length=== 0){
        alert("Datos incompletos")
    }else {
        if (usuario=== "admin" && pass === "123") {
            setLogin("true")
            document.getElementById("form-login").style.display ="none"
        }else {
            setLogin("false")
            alert ("Usuario y/o contraseña incorrecta")
            document.getElementById ("txtusuario").value = ""
            document.getElementById("txtpass").value = ""
            document.getElementById("txtusuario").focus()
        }
    }
}



return(


    <div className="container col-6 text-center">
       <img src={require ("../image/logoiobella.png")}/>
      
      <br/>
      <br/>
      <br/>
      <br/>
      

      <div class="card" >
      <div class="card-body">
      
      <form id="form-login"className="row gx-2 gy-2 align-items-center">
      <h3 style={{backgroundColor: "#9370db"}} > Iniciar sesión</h3>
      <div className="row mb-3" >
    <label for="inputEmail3" class="col-sm-0 col-form-label">Usuario</label>
    <div class="col-sm-3" style={{marginLeft:"250px"}} >
      <input type="text" class="form-control" id="txtusuario" onChange={ (e) => setUsuario(e.target.value)} required/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-0 col-form-label">Contraseña</label>
    <div class="col-sm-3" style={{marginLeft:"250px"}} >
      <input type="password" class="form-control" id="txtpass" onChange={(e) => setPass (e.target.value)} required/>
    </div>
    <label class="form-check-label" for="exampleCheck1">¿Olvidaste tu contraseña? <a href="recuperarcontraseña" class="link-primary">Recuperar contraseña</a></label>
    
  </div>
  <div class="col-auto" style={{marginLeft:"290px"}} >
    <button type="submit" class="btn btn-dark" value="login" onClick={iniciarSesion} >Iniciar</button>
    
  </div>
</form>
</div>
</div>


{miLogin === "true" && <ListaCitas usuario = {usuario}/> }

</div>

    
    )
}
export default Login