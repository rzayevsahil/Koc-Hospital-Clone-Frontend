import axios from "axios";

export default class AppoinmentsService{

    add(appoinment){
        return axios.post("http://localhost:8080/api/appoinment/add",appoinment)
    }

    update(appoinment){
        return axios.put("http://localhost:8080/api/appoinment/update",appoinment)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/appoinment/delete?id="+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/appoinment/getAll")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/appoinment/getById?id="+id)
    }

    getAllByOrderDataDesc(){
        return axios.get("http://localhost:8080/api/appoinment/getAllByOrderDataDesc")
    }

    getAllByOrderByAsc(){
        return axios.get("http://localhost:8080/api/appoinment/getAllByOrderByAsc")
    }
}