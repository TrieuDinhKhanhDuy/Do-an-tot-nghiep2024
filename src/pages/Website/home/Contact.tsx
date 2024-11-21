import Breadcrumb from "@/components/Breadcrumb";
import "../../../styles/Website/Contact.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactsType from "@/types/IContacts";
import { useContact } from "@/hooks/useContact";

const Contact = () => {
    const duongDan = [
        { nhan: 'Trang Chủ', duongDan: '/' },
        { nhan: 'Liên Hệ', duongDan: 'contact' },
    ];

    const contactSchema = z.object({
        name: z.string().nonempty("Họ và tên không được để trống").min(6, "Họ và tên phải có ít nhất 6 ký tự"),
        phone: z.string()
            .nonempty("Số điện thoại không được để trống")
            .regex(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số"),
        email: z.string().nonempty("Email không được để trống").email("Email không hợp lệ"),
        title: z.string().nonempty("Tiêu đề không được để trống"),
        message: z.string().nonempty("Nội dung liên hệ không được để trống"),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactsType>({
        resolver: zodResolver(contactSchema),
    });
    const { handleAddContact } = useContact();

    const onSubmit = (data: ContactsType) => {
        handleAddContact(data);
        reset();
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
                            thành lập ngày 21/02/2004...
                        </p>

                        <form className="contactForm-form needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="contactForm-row">
                                <div className="contactForm-group mgleft-5px">
                                    <label>Họ và tên:</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ và tên"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        {...register("name")}
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                                </div>

                                <div className="contactForm-group">
                                    <label>Số điện thoại:</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập số điện thoại"
                                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                        {...register("phone")}
                                    />
                                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                                </div>
                            </div>

                            <div className="contactForm-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    placeholder="Nhập email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    {...register("email")}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                            </div>

                            <div className="contactForm-group">
                                <label>Tiêu đề:</label>
                                <input
                                    type="text"
                                    placeholder="Nhập tiêu đề"
                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                    {...register("title")}
                                />
                                {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                            </div>

                            <div className="contactForm-group">
                                <label>Nội dung liên hệ:</label>
                                <textarea
                                    placeholder="Nhập nội dung của bạn"
                                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                    {...register("message")}
                                ></textarea>
                                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                            </div>

                            <button type="submit" className="contactForm-button btn btn-primary">
                                GỬI THƯ
                            </button>
                        </form>
                    </div>

                    <div className="contactForm-map">
                        <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style={{ border: '0' }} allowFullScreen={true} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
