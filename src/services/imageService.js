import axios from "axios";

export default class ImageService{

    add(imageFile){
        return axios.post("http://localhost:8080/api/image/add",imageFile)
    }

    update(image){
        return axios.put("http://localhost:8080/api/image/update",image)
    }

    delete(id){
        return axios.delete("http://localhost:8080/api/image/delete?id="+id)
    }
}