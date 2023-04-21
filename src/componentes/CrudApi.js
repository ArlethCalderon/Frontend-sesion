import { useState } from "react"
import CrudForm from "./CrudForm.js"
import { helpHTTP } from "../helper/helpHttp"
import { useEffect } from "react"
import ListaCitas from "../pages/ListaCitas.js"

const CrudApi = () => {

    let api = helpHTTP()
    let url = 'http://localhost:5000/users'

    const [db, setDb] = useState ([])
    const [dataToEdit,setDataToEdit] =useState (null)

    useEffect(() => {
        api.get(url).then(response => {
        //console.log(response))
        if (!response.err) {
            setDb(response)
        }else {
            setDb(null)
        }
    })

    }, [])
    
    const createData=(data)=>{
        //data.id=initialDb.length;
        // console.log(data)
        setDb([...db,data])
    };
    const updateData=(data)=>{
        let newData = db.map (item => item.id==data.id?data:item)
        setDb(newData)
    }
    const deleteData=(id)=>{
        let eliminar = db.filter(item => item.id!==id)
        setDb (eliminar)
    }
    return (
        <div>
            <h1>CRUD App</h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>

            <ListaCitas data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
        </div>
    )
}
export default CrudApi