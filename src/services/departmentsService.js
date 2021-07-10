import axios from "axios";

export default class DepartmentService{

    add(department){
        return axios.post("http://localhost:8080/api/department/add",department)
    }

    update(department){
        return axios.put("http://localhost:8080/api/department/update",department)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/department/delete?id=",id)
    }
    
    getAll(){
        return axios.get("http://localhost:8080/api/department/getAll")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/department/getById?id="+id)
    }

    getByName(name){
        return axios.get("http://localhost:8080/api/department/getByName?name="+name)
    }

}