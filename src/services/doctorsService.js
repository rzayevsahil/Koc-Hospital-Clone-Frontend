import axios from "axios"

export default class DoctorService{

    add(doctor){
        return axios.post("http://localhost:8080/api/doctor/add",doctor)
    }

    update(doctor){
        return axios.post("http://localhost:8080/api/doctor/update",doctor)
    }

    delete(id){
        return axios.post("http://localhost:8080/api/doctor/delete?id="+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/doctor/getAll")
    }

    getByAgeGreaterThan(age){
        return axios.get("http://localhost:8080/api/doctor/getByAgeGreaterThan?age="+age)
    }

    getByAgeLessThan(age){
        return axios.get("http://localhost:8080/api/doctor/getByAgeLessThan?age="+age)
    }

    getByDepartmentId(id){
        return axios.get("http://localhost:8080/api/doctor/getByDepartmentId?departmentId="+id)
    }

    getByGenderId(id){
        return axios.get("http://localhost:8080/api/doctor/getByGenderId?genderId="+id)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/doctor/getById?id="+id)
    }
}