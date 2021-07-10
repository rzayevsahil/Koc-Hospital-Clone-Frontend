import axios from "axios";

export default class PatientService{
 
    add(patient){
        return axios.post("http://localhost:8080/api/patient/add",patient) 
    }
    
    update(patient){
        return axios.put("http://localhost:8080/api/patient/update",patient)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/patient/delete?id=",id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/patient/getAll")
    }

    getByAgeGreatThan(age){
        return axios.get("http://localhost:8080/api/patient/getByAgeGreaterThan?age="+age)
    }

    getByName(name){
        return axios.get("http://localhost:8080/api/patient/getByName?name="+name)
    }

    getByEmail(email){
        return axios.get("http://localhost:8080/api/patient/getByEmail?email="+email)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/patient/getById?id="+id)
    }
}