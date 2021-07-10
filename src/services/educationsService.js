import axios from "axios";

export default class EducationService{

    add(education){
        return axios.post("http://localhost:8080/api/education/add",education)
    }

    update(education){
        return axios.put("http://localhost:8080/api/education/update",education)
    }

    delete(id){
        return axios.put("http://localhost:8080/api/education/delete?id=",id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/education/getAll")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/education/getById?id="+id)
    }

    getBySchollName(name){
        return axios.get("http://localhost:8080/api/education/getBySchoolName?schoolName="+name)
    }
}