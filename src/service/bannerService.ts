import axios from "axios";

export function getBanners(){
    return axios.get('http://doantotnghiep.test/api/banners');
}