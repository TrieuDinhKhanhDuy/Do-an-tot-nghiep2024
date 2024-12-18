import '../styles/Website/popularRoutes.css';
import laiChauImg from '../assets/image/routeBannerLaichau.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { RoutePopularType } from '../types/IBus';
import { LinearProgress } from '@mui/material';

const PopularRoutes = () => {
    const [popular, setPopular] = useState<RoutePopularType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchPromotions = async () => {

            try {
                const response = await axios.get(`http://doantotnghiep.test/api/popular`);
                setPopular(response.data.data);
                setLoading(true);
            } catch (error) {
                setError('Error fetching promotions');
            } finally {
                setLoading(false);
            }
        };
        fetchPromotions()
    }, []);
    const today = new Date().toISOString().split('T')[0];
    const handleChose = (popular: RoutePopularType) => {
        window.location.href = (`/list?start=${popular.start_route_id}&end=${popular.end_route_id}&date=${today}`)
    }

    return (
        <>
            {loading ? (<><LinearProgress /> </>) : (<></>)}
            <div className="popular-routes-container">
                <h2 className='link-h2'>Các tuyến phổ biến</h2>
                <div className="popular-routes">

                    {popular.map((item) => (
                        <><div className="route-card">
                            <div className="route-image">
                                <img src={laiChauImg} alt="lai chau img" />
                            </div>
                            <h4>{item.route_name}</h4>
                            <div className="route-list">
                                <div className="route-item">
                                    <div className="flex-route-price">

                                        <div className="route-destination">{item.start_stop}</div>

                                        <div className="route-price">{item.route_price}</div>
                                        {/* <div className="route-info">{item.length}Km</div> */}

                                    </div>
                                    <div className="flex-route-price">
                                        <div className="route-destination">{item.end_stop}</div>
                                        <div className="route-info">{item.length}Km</div>
                                    </div>
                                </div>
                                <div className="route-item" onClick={() => handleChose(item)}>
                                    <div className="flex-route-price btn-searchNow">
                                        Đặt Ngay
                                    </div>
                                </div>
                            </div>
                        </div></>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PopularRoutes;
