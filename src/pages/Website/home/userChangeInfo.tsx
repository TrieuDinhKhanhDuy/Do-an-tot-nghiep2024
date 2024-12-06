import "../../../styles/Website/myTicket.css";
import Breadcrumb from "@/components/Breadcrumb";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { UserType } from "@/types/IUser";
import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { logout } from "@/service/authService";
import LeftBar from "@/components/leftBar_user";


const UserChangeInfo = () => {
    const updateUserSchema = z.object({
        name: z.string().nonempty("Họ và tên không được để trống").min(6, "Họ và tên phải có ít nhất 6 ký tự"),
        address: z.string().nonempty("Địa chỉ không được để trống"),
        phone: z.string().nonempty("Số điện thoại không được để trống").regex(/^[0-9]{10}$/, "Số điện thoại phải có 10 chữ số"),
        email: z.string().nonempty("Email không được để trống").email("Email không hợp lệ"),
    });

    const { register, handleSubmit, setValue, formState: { errors, touchedFields } } = useForm<UserType>({
        resolver: zodResolver(updateUserSchema),
    });
    const { UpdateUser } = useAuth();

    const onSubmit = (data: UserType) => {
        UpdateUser(data);
        logout('all')
    };
    const duongDan = [
        { nhan: "Trang Chủ", duongDan: "/" },
        { nhan: "Cài Đặt", duongDan: "/usersetting" },
        { nhan: "Sửa Thông Tin", duongDan: "changeinfo" },
    ];

    useEffect(() => {
        const storedUser = sessionStorage.getItem("userId");
        
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                if (userData.name) setValue("name", userData.name);
                if (userData.email) setValue("email", userData.email);
                if (userData.address) setValue("address", userData.address);
                if (userData.phone) setValue("phone", userData.phone);
            } catch (error) {
                console.error("Lỗi khi đọc dữ liệu từ sessionStorage:", error);
            }
        }
    }, [setValue]);



    return (
        <>
            <Breadcrumb items={duongDan} />

            <div className="tickets-container">
                <div className="bus-comp-container">
                <LeftBar/>


                    <div className="bus-comp-list" >
                        <form className="contactForm-form needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <h1>Thông tin của tôi: </h1>
                            <div className="contactForm-row grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="contactForm-group">
                                    <label className="block text-sm font-medium text-gray-700">Họ và tên:</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            // value={}
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

                            <div className="contactForm-group hidden">
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
                                <label className="block text-sm font-medium text-gray-700">Địa chỉ:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Nhập tiêu đề"
                                        className={`form-input mt-1 block w-full px-3 py-2 rounded-md border ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.address && !errors.address ? 'border-green-500' : ''}`}
                                        {...register("address")}
                                    />
                                    {touchedFields.address && !errors.address && (
                                        <FaCheck className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500" />
                                    )}
                                    {touchedFields.address && errors.address && (
                                        <FaTimes className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500" />
                                    )}
                                </div>
                                {errors.address && <div className="text-sm text-red-500">{errors.address.message}</div>}
                            </div>


                            <button
                                type="submit"
                                className="mt-4 w-full  text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                style={{ background: "#405187" }}
                            >
                                Đổi Thông Tin
                            </button>
                        </form>

                    </div>
                </div>
            </div >
        </>
    );
};

export default UserChangeInfo;
