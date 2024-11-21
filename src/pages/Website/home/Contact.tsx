


import Breadcrumb from "@/components/Breadcrumb";
import "../../../styles/Website/Contact.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ContactsType from "@/types/IContacts";
import { useContact } from "@/hooks/useContact";
import { FaCheck, FaTimes } from 'react-icons/fa'

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

    const { register, handleSubmit, formState: { errors, touchedFields }, reset } = useForm<ContactsType>({
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
                            thành lập ngày 21/02/2004. Với 7 chi nhánh, 24 văn
                            phòng tại 4 tỉnh thành: Hà Nội, Thái Nguyên, Tuyên
                            Quang, Bắc Kạn, gần 700 lao động và gần 400 phương
                            tiện, đồng hành với hơn 10 triệu hành trình mỗi năm,
                            Hà Lan đã và đang đổi mới mạnh mẽ hơn nữa để nâng
                            cao hiệu quả, sức cạnh tranh của doanh nghiệp thị
                            trường Tỉnh Thái Nguyên và trên cả nước. Cùng với
                            việc đầu tư phát triển, mở rộng mạng lưới, tuyến
                            mới, lộ trình mới và đầu tư cơ sở vật chất, những
                            dòng xe chất lượng cao. Hà Lan còn tập trung và đẩy
                            mạnh áp dụng công nghệ và chuyển đổi số vào hoạt
                            động sản xuất kinh doanh. Địa chỉ: 271 – 273 Dương
                            Tự Minh, P.Tân Long, Tp.Thái Nguyên. Xe hợp đồng:
                            0989 759 759. Chuyển phát nhanh: 1900 0092. Tuyển
                            dụng: 0977 306 567. Email:
                            phungthihongnhung21@gmail.com.
                        </p>

                        <form className="contactForm-form needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="contactForm-row grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="contactForm-group">
            <label className="block text-sm font-medium text-gray-700">Họ và tên:</label>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    className={`form-input mt-1 block w-full px-3 py-2 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.name && !errors.name ? 'border-green-500' : ''}`}
                    {...register("name")}
                />
                {touchedFields.name && !errors.name && (
                    <FaCheck className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" />
                )}
                {touchedFields.name && errors.name && (
                    <FaTimes className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500" />
                )}
            </div>
            {errors.name && <div className="text-sm text-red-500">{errors.name.message}</div>}
        </div>

        <div className="contactForm-group">
            <label className="block text-sm font-medium text-gray-700">Số điện thoại:</label>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    className={`form-input mt-1 block w-full px-3 py-2 rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.phone && !errors.phone ? 'border-green-500' : ''}`}
                    {...register("phone")}
                />
                {touchedFields.phone && !errors.phone && (
                    <FaCheck className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" />
                )}
                {touchedFields.phone && errors.phone && (
                    <FaTimes className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500" />
                )}
            </div>
            {errors.phone && <div className="text-sm text-red-500">{errors.phone.message}</div>}
        </div>
    </div>

    <div className="contactForm-group">
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <div className="relative">
            <input
                type="email"
                placeholder="Nhập email"
                className={`form-input mt-1 block w-full px-3 py-2 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.email && !errors.email ? 'border-green-500' : ''}`}
                {...register("email")}
            />
            {touchedFields.email && !errors.email && (
                <FaCheck className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" />
            )}
            {touchedFields.email && errors.email && (
                <FaTimes className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500" />
            )}
        </div>
        {errors.email && <div className="text-sm text-red-500">{errors.email.message}</div>}
    </div>

    <div className="contactForm-group">
        <label className="block text-sm font-medium text-gray-700">Tiêu đề:</label>
        <div className="relative">
            <input
                type="text"
                placeholder="Nhập tiêu đề"
                className={`form-input mt-1 block w-full px-3 py-2 rounded-md border ${errors.title ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.title && !errors.title ? 'border-green-500' : ''}`}
                {...register("title")}
            />
            {touchedFields.title && !errors.title && (
                <FaCheck className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" />
            )}
            {touchedFields.title && errors.title && (
                <FaTimes className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500" />
            )}
        </div>
        {errors.title && <div className="text-sm text-red-500">{errors.title.message}</div>}
    </div>

    <div className="contactForm-group">
        <label className="block text-sm font-medium text-gray-700">Nội dung liên hệ:</label>
        <div className="relative">
            <textarea
                placeholder="Nhập nội dung của bạn"
                className={`form-textarea mt-1 block w-full px-3 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.message && !errors.message ? 'border-green-500' : ''}`}
                {...register("message")}
            />
            {touchedFields.message && !errors.message && (
                <FaCheck className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" />
            )}
            {touchedFields.message && errors.message && (
                <FaTimes className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500" />
            )}
        </div>
        {errors.message && <div className="text-sm text-red-500">{errors.message.message}</div>}
    </div>

    <button
        type="submit"
        className="mt-4 w-full  text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{background:"#405187"}}
    >
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
        </>
    );
};

export default Contact;
