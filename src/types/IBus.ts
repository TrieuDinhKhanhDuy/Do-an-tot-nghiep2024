  
  type DbRecord = {
    bus_id: number;
    route_id: number;
    trip_id: number;
    time_start: string;        // "06:00:00" format
    route_name: string;        // e.g., "Na Hang - Hà Nội"
    fare: string;              // "200000.00", could be converted to a number if needed
    name_bus: string;          // e.g., "Xe giường nằm"
    total_seats: number;       // e.g., 40
    date: string;              // "2024-11-02", can be formatted as a date
    start_stop_name: string;   // e.g., "Chiêm Hóa"
    end_stop_name: string;     // e.g., "Ngã tư Kim Anh"
    start_stop_id: string;     // e.g., "12", assuming this is a string
    end_stop_id: string;       // e.g., "21", assuming this is a string
    bus_image: string;
    id_end_stop: string;
    id_start_stop: string;
  };
  
export default DbRecord  