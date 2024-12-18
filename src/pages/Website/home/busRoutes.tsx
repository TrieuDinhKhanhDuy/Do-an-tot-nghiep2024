  import '../../../styles/Website/locationTable.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '@/components/Breadcrumb';
import { LinearProgress } from '@mui/material';

type Route = {
  id: number;
  route_name: string;
  cycle: number;
  route_price: string;
  length: string;
  description: string;
}

const BusRoutes = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStops = async () => {
      try {
        const res = await axios.get("http://doantotnghiep.test/api/routes");
        setRoutes(res.data.data);
        setLoading(true)
      } catch (error) {
        console.error("Failed to fetch stops", error);
      } finally {
        setLoading(false)
      }
    };
    fetchStops();
  }, []);
  const duongDan = [
    { nhan: "Trang Chủ", duongDan: "/" },
    { nhan: "tuyến đường", duongDan: "/busroutes" },
  ];

  return (
    <>
      {loading ? (<> <LinearProgress /></>) : (<></>)}
      <div className="location-table-container">
        <Breadcrumb items={duongDan} />
        <h2 className="location-table-title">Các tuyến đường</h2>
        <table className="location-table">
          <thead className="location-table-header">
            <tr className="location-table-header-row">
              <th className="location-table-header-cell">ID</th>
              <th className="location-table-header-cell">Tên Tuyến</th>
              <th className="location-table-header-cell">Mô Tả</th>
              <th className="location-table-header-cell">Giá</th>
              <th className="location-table-header-cell">Thời Gian</th>
            </tr>
          </thead>
          <tbody className="location-table-body">
            {routes.map((route) => (
              <tr className="location-table-row" key={route.id}>
                <td className="location-table-cell">{route.id}</td>
                <td className="location-table-cell">{route.route_name}</td>
                <td className="location-table-cell">{route.description}</td>
                <td className="location-table-cell">{route.route_price}</td>
                <td className="location-table-cell">{route.cycle} phút</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BusRoutes;
