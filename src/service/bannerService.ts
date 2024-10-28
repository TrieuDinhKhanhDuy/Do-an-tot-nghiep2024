import axios from "axios";

export function getBanners(){
    return axios.get('http://doantotnghiep_backend.test/api/banners');
}