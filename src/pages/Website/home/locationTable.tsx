import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/Website/locationTable.css";
import Breadcrumb from "@/components/Breadcrumb";
import { LinearProgress } from "@mui/material";

interface Stop {
  id: number;
  stop_name: string;
  parent_id: number | null;
  image: string;
  is_active: boolean;
  description: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

const StopsTable: React.FC = () => {
  const [stops, setStops] = useState<Stop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStops = async () => {
      try {
        const res = await axios.get("http://doantotnghiep.test/api/home");
        setStops(res.data);
        setLoading(true)
      } catch (error) {
        console.error("Failed to fetch stops", error);
      } finally {
        setLoading(false)
      }
    };
    fetchStops();
  }, []);

  // Group stops by parent_id
  const groupedStops = stops.reduce((acc, stop) => {
    if (stop.parent_id === null) {
      acc[stop.id] = { parent: stop, children: [] };
    } else {
      acc[stop.parent_id] = acc[stop.parent_id] || { parent: null, children: [] };
      acc[stop.parent_id].children.push(stop);
    }
    return acc;
  }, {} as Record<number, { parent: Stop | null; children: Stop[] }>);

  const duongDan = [
    { nhan: "Trang Chủ", duongDan: "/" },
    { nhan: "tuyến đường", duongDan: "/locationtable" },
  ];

  return (
    <>
      {loading ? (<> <LinearProgress /></>) : (<></>)}
      <div className="location-table-container">
        <Breadcrumb items={duongDan} />
        {Object.values(groupedStops).map(({ parent, children }) => (
          <div key={parent?.id || "unknown"} style={{ marginBottom: "20px" }}>
            {parent && (
              <h2 className="location-table-title">
                {parent.stop_name} (Mã điểm: {parent.id})
              </h2>
            )}
            <table className="location-table">
              <thead className="location-table-header">
                <tr className="location-table-header-row">
                  <th className="location-table-header-cell">ID</th>
                  <th className="location-table-header-cell">Tên điểm dừng</th>
                  <th className="location-table-header-cell">Hoạt động</th>
                  <th className="location-table-header-cell">Thông tin</th>
                </tr>
              </thead>
              <tbody className="location-table-body">
                {children.map((child) => (
                  <tr className="location-table-row" key={child.id}>
                    <td className="location-table-cell">{child.id}</td>
                    <td className="location-table-cell">{child.stop_name}</td>
                    <td className="location-table-cell">{child.is_active ? "Yes" : "No"}</td>
                    <td
                      className="location-table-cell"
                      dangerouslySetInnerHTML={{ __html: child.description }}
                    ></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default StopsTable;
