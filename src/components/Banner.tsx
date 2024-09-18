import banner from '../assets/image/banner.png'; 

const Banner = () => {
  return (
    <img src={banner} alt="banner"  style={{width : "100%", maxHeight: "700px" , objectFit : "cover"}}/>
  );
};

export default Banner;
