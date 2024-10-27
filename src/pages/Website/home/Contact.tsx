import Breadcrumb from "@/components/Breadcrumb";
import "../../../styles/Website/Contact.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactsType from "@/types/IContacts";
import { useContact } from "@/hooks/useContact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const contactSchema = z.object({
        name: z.string().nonempty("Họ và tên không được để trống").min(6, "Họ và tên phải có ít nhất 6 ký tự"),
        phone: z.string()
            .nonempty("Số điện thoại không được để trống")
            .regex(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số"),
        email: z.string().nonempty("Email không được để trống").email("Email không hợp lệ"),
        title: z.string().nonempty("Tiêu đề không được để trống"),
        message: z.string().nonempty("Nội dung liên hệ không được để trống"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<ContactsType>({
        resolver: zodResolver(contactSchema),
    });
    const { handleAddContact } = useContact();
    
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Liên Hệ', duongDan: 'contact' },
    ];

    const onSubmit = (data: ContactsType) => {
        handleAddContact(data);
        toast.success("Gửi liên hệ thành công!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="contactForm-container">
                <h2 className="contactForm-title">LIÊN HỆ</h2>

                <div className="contactForm-content">
                    <div className="contactForm-info">
                        <h3>CÔNG TY CPTM HONG NHUNG</h3>
                        <p>
                            Công ty CP Thương mại và du lịch Hồng Nhung được
                            thành lập ngày 21/02/2004. Với 7 chi nhánh, 24 văn
                            phòng tại 4 tỉnh thành: Hà Nội, Thái Nguyên, Tuyên
                            Quang, Bắc Kạn, gần 700 lao động và gần 400 phương
                            tiện, đồng hành với hơn 10 triệu hành trình mỗi năm,
                            Hà Lan đã và đang đổi mới mạnh mẽ hơn nữa để nâng
                            cao hiệu quả, sức cạnh tranh của doanh nghiệp thị
                            trường Tỉnh Thái Nguyên và trên cả nước.
                        </p>

                        <form className="contactForm-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="contactForm-row">
                                <div className="contactForm-group mgleft-5px">
                                    <label>Họ và tên:</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ và tên"
                                        {...register("name")}
                                    />
                                    {errors.name && <p className="error" style={{color:"red"}}>{errors.name.message}</p>}
                                </div>

                                <div className="contactForm-group">
                                    <label>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập số điện thoại"
                                        {...register("phone")}
                                    />
                                    {errors.phone && <p className="error" style={{color:"red"}}>{errors.phone.message}</p>}
                                </div>
                            </div>

                            <div className="contactForm-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    placeholder="Nhập email"
                                    {...register("email")}
                                />
                                {errors.email && <p className="error" style={{color:"red"}}>{errors.email.message}</p>}
                            </div>

                            <div className="contactForm-group">
                                <label>Tiêu đề:</label>
                                <input
                                    type="text"
                                    placeholder="Nhập tiêu đề"
                                    {...register("title")}
                                />
                                {errors.title && <p className="error" style={{color:"red"}}>{errors.title.message}</p>}
                            </div>

                            <div className="contactForm-group">
                                <label>Nội dung liên hệ:</label>
                                <textarea
                                    placeholder="Nhập nội dung của bạn"
                                    {...register("message")}
                                ></textarea>
                                {errors.message && <p className="error" style={{color:"red"}}>{errors.message.message}</p>}
                            </div>

                            <button type="submit" className="contactForm-button">
                                GỬI THƯ
                            </button>
                        </form>
                    </div>

                    <div className="contactForm-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1063645750455!2d105.77569377572404!3d21.02842968062079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b2f431c099%3A0xe44043bacd461128!2zQuG6v24gWGUgTeG7uSDEkMOsbmg!5e0!3m2!1svi!2s!4v1728287236739!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            style={{ border: '0' }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Contact;
