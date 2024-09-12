import React from 'react';
import banner from '../assets/image/banner.png'; // Thay đổi đường dẫn nếu cần

type Props = {};

const Banner = (props: Props) => {
  return (
    <img src={banner} alt="banner"  style={{width : "100%" , objectFit : "cover"}}/>
  );
};

export default Banner;
