
export type DbRecord = {
  bus_id: number;
  route_id: number;
  trip_id: number;
  time_start: string;
  route_name: string;
  fare: string;
  name_bus: string;
  total_seats: number;
  date: string;
  start_stop_name: string;
  end_stop_name: string;
  start_stop_id: string;
  end_stop_id: string;
  image: string;
  id_end_stop: string;
  id_start_stop: string;
  available_seats: number;

  //user
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type DbRecordForm = {
  emailCheck:boolean;
  promoCode:string;
  seat: string;
  location_start: string;
  location_end: string;
  total_price:number;
  note:string;

  //user
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}
