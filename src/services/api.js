import axios from "axios";

//http://viacep.com.br/ws/

const api = axios.create({
    baseURL:"http://viacep.com.br/ws/"
});

export default api;