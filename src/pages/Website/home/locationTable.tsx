import '../../../styles/Website/locationTable.css';

interface Location {
  id: number;
  name: string;
  address: string;
  phone: number;
}

const locations: Location[] = [
  { id: 1, name: 'Thành phố Tuyên Quang', address: 'Bến xe Tuyên Quang', phone: 345678910 },
  { id: 2, name: 'Km24 Hàm Yên', address: 'Hàm Yên', phone: 345678910 },
  { id: 3, name: 'Hoà Phú', address: 'Hòa Phú', phone: 345678910 },
  { id: 4, name: 'Chiêm Hoá', address: 'Chiêm Hoá', phone: 345678910 },
  { id: 5, name: 'Xuân Vân', address: 'Xuân Vân', phone: 345678910 },
  { id: 6, name: 'Na Hang', address: 'Na Hang', phone: 345678910 },
  { id: 7, name: 'Đài Thị', address: 'Đài Thị', phone: 345678910 },
];

const LocationTable = () => {
  return (
    <>
      <div className="location-table-container">
        <h2 className="location-table-title">Khu Vực Tuyên Quang</h2>
        <table className="location-table">
          <thead className="location-table-header">
            <tr className="location-table-header-row">
              <th className="location-table-header-cell">STT</th>
              <th className="location-table-header-cell">Tên</th>
              <th className="location-table-header-cell">Địa chỉ</th>
              <th className="location-table-header-cell">Số điện thoại</th>
            </tr>
          </thead>
          <tbody className="location-table-body">
            {locations.map((location) => (
              <tr className="location-table-row" key={location.id}>
                <td className="location-table-cell">{location.id}</td>
                <td className="location-table-cell">{location.name}</td>
                <td className="location-table-cell">{location.address}</td>
                <td className="location-table-cell">0{location.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="location-table-container">
        <h2 className="location-table-title">Khu Vực Tuyên Quang</h2>
        <table className="location-table">
          <thead className="location-table-header">
            <tr className="location-table-header-row">
              <th className="location-table-header-cell">STT</th>
              <th className="location-table-header-cell">Tên</th>
              <th className="location-table-header-cell">Địa chỉ</th>
              <th className="location-table-header-cell">Số điện thoại</th>
            </tr>
          </thead>
          <tbody className="location-table-body">
            {locations.map((location) => (
              <tr className="location-table-row" key={location.id}>
                <td className="location-table-cell">{location.id}</td>
                <td className="location-table-cell">{location.name}</td>
                <td className="location-table-cell">{location.address}</td>
                <td className="location-table-cell">0{location.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="location-table-container">
      <h2 className="location-table-title">Khu Vực Tuyên Quang</h2>
      <table className="location-table">
        <thead className="location-table-header">
          <tr className="location-table-header-row">
            <th className="location-table-header-cell">STT</th>
            <th className="location-table-header-cell">Tên</th>
            <th className="location-table-header-cell">Địa chỉ</th>
            <th className="location-table-header-cell">Số điện thoại</th>
          </tr>
        </thead>
        <tbody className="location-table-body">
          {locations.map((location) => (
            <tr className="location-table-row" key={location.id}>
              <td className="location-table-cell">{location.id}</td>
              <td className="location-table-cell">{location.name}</td>
              <td className="location-table-cell">{location.address}</td>
              <td className="location-table-cell">0{location.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default LocationTable;
