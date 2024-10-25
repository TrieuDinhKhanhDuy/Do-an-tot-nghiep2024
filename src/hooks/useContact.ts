import { addContact } from "@/service/contactService";
import ContactsType from "@/types/IContacts";
import { useNavigate } from "react-router-dom";

export function useContact() {
    const nav = useNavigate();
    function handleAddContact(values: ContactsType){
        addContact(values)
        .then(() => {
            console.log("Đã Thêm")
        })
        .catch(() => console.log("Lỗi"))
    }
    return {
        handleAddContact
    }
}
