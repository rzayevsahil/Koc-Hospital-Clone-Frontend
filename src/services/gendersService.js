import axios from "axios";

export default class GenderService{

    add(gender){
        return axios.post("http://localhost:8080/api/gender/add",gender)
    }

    update(gender){
        return axios.put("http://localhost:8080/api/gender/update",gender)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/gender/delete?id="+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/gender/getAll")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/gender/getById?id="+id)
    }
}