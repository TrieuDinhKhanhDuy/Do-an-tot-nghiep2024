import ContactsType from "@/types/IContacts";
import axios from "axios";

export function addContact(data : ContactsType){
    return axios.post('http://doantotnghiep_backend.test/api/contacts', data);
}