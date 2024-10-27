import { addContact } from "@/service/contactService";
import ContactsType from "@/types/IContacts";
import { toast } from "react-toastify";

export function useContact() {
    
    
    function handleAddContact(values: ContactsType) {
        addContact(values)
            .then(() => {
                toast.success("Gửi liên hệ thành công!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(() => {
                toast.error("Gửi liên hệ thất bại!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }

    return {
        handleAddContact,
    };
}
