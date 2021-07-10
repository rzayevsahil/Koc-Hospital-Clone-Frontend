import axios from "axios";

export default class AddressService{

    add(adress){
        return axios.post("http://localhost:8080/api/adress/add",adress)
    }

    update(adress){
        return axios.put("http://localhost:8080/api/adress/update",adress)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/adress/delete?id="+id)
    }

    getAll(){
        return axios.get("http://localhost:8080/api/adress/getAll")
    }

    getByCityName(name){
        return axios.get("http://localhost:8080/api/adress/getByCityName?cityName="+name)
    }

    getByStreetName(name){
        return axios.get("http://localhost:8080/api/adress/getByStreetName?streetName="+name)
    }

    getByPostCode(postCode){
        return axios.get("http://localhost:8080/api/adress/getByPostCode?postCode="+postCode)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/adress/getById?id="+id)
    }
}