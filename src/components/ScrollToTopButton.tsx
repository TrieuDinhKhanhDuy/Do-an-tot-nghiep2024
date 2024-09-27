import '../styles/Website/ScrollToTopButton.css';


const ScrollToTopButton = () => {

    // Hàm để cuộn lên đầu trang
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 10,
    //         behavior: 'smooth', 
    //     });

    // };


    return (
        <a href="#header_id">
        <div className="scroll-to-top">
            {/* {isVisible && ( */}
            <button className="scroll-to-top__button">
                &#8679;
            </button>
            {/* )} */}
        </div>
        </a>
    );
};

export default ScrollToTopButton;