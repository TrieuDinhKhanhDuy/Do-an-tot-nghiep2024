
import "../styles/Website/headerFix.css"
import logoBlue from "../assets/image/logofixpading.png"

const HeaderFix = () => {
    return (
        <>
            <header className="header">
                <div className="header__top">
                    {/* Logo section */}
                    <div className="header__logo">
                        <img src={logoBlue} className="header__logo-img" />
                    </div>

                    {/* Right side actions (e.g. Help, Login, Register, Language) */}
                    <div className="header__top-actions">
                        <ul className="header__top-list">
                            <li><a href="/">Trợ giúp</a></li>
                            <li><a href="/">Đăng nhập</a></li>
                            <li><a href="/">Đăng ký</a></li>
                            <li><a href="/">VIETNAM - Tiếng Việt</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="header__nav">
                <ul className="header__nav-list">
                    <li><a href="/">Giới thiệu</a></li>
                    <li><a href="/">Tra cứu</a></li>
                    <li><a href="/">Tin tức</a></li>
                    <li><a href="/">Liên hệ</a></li>
                </ul>
            </div>
        </>
    );
};

export default HeaderFix;
