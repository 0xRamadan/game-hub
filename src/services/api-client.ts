import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cad3d2dd706547a9a950dfb35e3630ff'
    },
});
