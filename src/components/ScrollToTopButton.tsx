import '../styles/Website/ScrollToTopButton.css';


const ScrollToTopButton = () => {

    return (
        <a href="#header_id">
            <div className="scroll-to-top">
                <button className="scroll-to-top__button">
                    &#8679;
                </button>
            </div>
        </a>
    );
};

export default ScrollToTopButton;