type Route = {
    id: number;
    route_name: string;
    start_route_id: number;
    end_route_id: number;
    cycle: number;
    route_price: string;
    length: string;
    is_active: boolean;
    description: string;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
  };
  
  type Bus = {
    id: number;
    name_bus: string;
    model: string;
    license_plate: string;
    total_seats: number;
    gps_code: string;
    image: string;
    phone: string;
    description: string;
    is_active: boolean;
    deleted_at: string | null;
    created_at: string;
    updated_at: string;
  };
  
  type DbRecord = {
    id: number;
    route_id: number;
    bus_id: number;
    time_start: string;
    direction: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    is_active: boolean;
    route: Route;
    bus: Bus;
  };
export default DbRecord  