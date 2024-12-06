import "../../../styles/Website/UserProfile.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { ChangePasswordType } from "@/types/IUser";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import LeftBar from '@/components/leftBar_user';
import Breadcrumb from "@/components/Breadcrumb";
import { logoutKhongThongBao } from "@/service/authService";

const UserChangePassword = () => {

  const [email, setEmail] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const updateUserSchema = z.object({
    password: z.string().nonempty("Mật Khẩu không được để trống").min(8, "Mật Khẩu phải có ít nhất 8 ký tự"),
    password_confirmation: z.string().min(8, "Xác nhận mật khẩu là bắt buộc"),
    otp: z.string().nonempty("Otp không được để trống"),
    email: z.string().nonempty("Email không được để trống").email("Email không hợp lệ"),
  }).refine((data) => data.password === data.password_confirmation, {
    path: ["password_confirmation"],
    message: "Xác nhận mật khẩu không khớp",
  });

  const { register, handleSubmit, formState: { errors, touchedFields } } = useForm<ChangePasswordType>({
    resolver: zodResolver(updateUserSchema),
  });
  const { ChangePassword, GetOtp } = useAuth();

  const handleGetOtp = () => {
    if (countdown === 0) {
      GetOtp({ email });
      setIsOtpSent(true);
      startCountdown(300);
    }
  }

  const startCountdown = (seconds: number) => {
    setCountdown(seconds);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsOtpSent(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const onSubmit = (data: ChangePasswordType) => {
    ChangePassword(data);
    logoutKhongThongBao('all')
  };
  const duongDan = [
    { nhan: "Trang Chủ", duongDan: "/" },
    { nhan: "Cài Đặt", duongDan: "/usersetting" },
    { nhan: "Sửa Mật Khẩu", duongDan: "changepassword" },
  ];
  useEffect(() => {
    const storedUser = sessionStorage.getItem("userId");

    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData.email) setEmail(userData.email);
      } catch (error) {
        console.error("Lỗi khi đọc dữ liệu từ sessionStorage:", error);
      }
    }
  }, []);

  return (
    <>
      <Breadcrumb items={duongDan} />
      <div className=" tickets-container">
        <div className="bus-comp-container">
          <LeftBar />
          <div className="bus-comp-list " >
            <form className="contactForm-form needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
              <h1>Thay đổi mật khẩu: </h1>

              <div className="contactForm-group">
                <label className="block text-sm font-medium text-gray-700">Mật khẩu mới</label>
                <div className="">
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    className={`form-input mt-1 block w-full px-3 py-2 rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.password && !errors.password ? 'border-green-500' : ''}`}
                    {...register("password")}
                  />

                </div>
                {errors.password && <div className="text-sm text-red-500">{errors.password.message}</div>}
              </div>

              <div className="contactForm-group">
                <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                <div className="">
                  <input
                    type="password"
                    placeholder="Nhập tiêu đề"
                    className={`form-input mt-1 block w-full px-3 py-2 rounded-md border ${errors.password_confirmation ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.password_confirmation && !errors.password_confirmation ? 'border-green-500' : ''}`}
                    {...register("password_confirmation")}
                  />

                </div>
                {errors.password_confirmation && <div className="text-sm text-red-500">{errors.password_confirmation.message}</div>}
              </div>
              <div className="contactForm-group">
                <label className="block text-sm font-medium text-gray-700">Mã OTP sẽ được gửi về Gmail: </label>
                <div className="">
                  <input
                    readOnly
                    value={email}
                    type="email"
                    className={`form-input mt-1 block w-full px-3 py-2 rounded-md border`}
                    {...register("email")}
                  />

                </div>
              </div>
              <div className="contactForm-row grid grid-cols-1 md:grid-cols-2 gap-4  bookingForm-input-top" >
                <div className="contactForm-group">
                  <label className="block text-sm font-medium text-gray-700">OTP:</label>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Nhập Otp"
                      className={`form-input mt-1 block w-full px-3 py-2 rounded-md border ${errors.otp ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 ${touchedFields.otp && !errors.otp ? 'border-green-500' : ''}`}
                      {...register("otp")}
                    />

                  </div>
                  {errors.otp && <div className="text-sm text-red-500">{errors.otp.message}</div>}
                </div>
                <div className="schedule-time-route btn-otp">
                  {isOtpSent ? (
                    <span className="otp-text">
                      Mã OTP đã được gửi - {countdown}s
                    </span>
                  ) : (
                    <span className="otp-text">Ấn để gửi mã OTP.</span>
                  )}
                  <span
                    className={`btn-sendotp ${countdown > 0 ? 'disabled' : ''}`}
                    onClick={handleGetOtp}
                  >
                    Gửi mã
                  </span>
                </div>
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
      </div>
    </>
  );
};

export default UserChangePassword;
