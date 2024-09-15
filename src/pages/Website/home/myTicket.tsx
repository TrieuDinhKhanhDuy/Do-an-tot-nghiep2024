import "../../../styles/Website/myTicket.css"

interface Ticket {
    route: string;
    time: string;
    date: string;
    status: string;
    price: string;
    buttonLabel: string;
    statusClass: string; // To control color
  }
  

const MyTicket = () => {

    const tickets: Ticket[] = [
        {
            route: 'Mỹ Đình - Tuyên Quang',
            time: '08:10',
            date: '31/09/2024',
            status: 'Đã đặt vé',
            price: '120.000đ',
            buttonLabel: 'Chi tiết',
            statusClass: 'status-confirmed',
        },
        {
            route: 'Mỹ Đình - Lai Châu',
            time: '10:10',
            date: '31/10/2024',
            status: 'Vé hết hạn',
            price: '120.000đ',
            buttonLabel: 'Chi tiết',
            statusClass: 'status-expired',
        },
        {
            route: 'Mỹ Đình - Lai Châu',
            time: '10:10',
            date: '31/10/2024',
            status: 'Đã hủy',
            price: '120.000đ',
            buttonLabel: 'Chi tiết',
            statusClass: 'status-cancelled',
        },
        {
            route: 'Mỹ Đình - Tuyên Quang',
            time: '08:10',
            date: '31/09/2024',
            status: 'Đã đặt vé',
            price: '120.000đ',
            buttonLabel: 'Chi tiết',
            statusClass: 'status-confirmed',
        },
        {
            route: 'Mỹ Đình - Tuyên Quang',
            time: '08:10',
            date: '31/09/2024',
            status: 'Đã đặt vé',
            price: '120.000đ',
            buttonLabel: 'Chi tiết',
            statusClass: 'status-confirmed',
        },
    ];
    return (
        <>
            <div className="tickets-container">
                {/* Table */}<h2>Vé của tôi</h2>
                <table className="tickets-table">
                    
                    <thead>
                        <tr>
                            <th>Tuyến đi</th>
                            <th>Thời gian</th>
                            <th>Ngày</th>
                            <th>Trạng thái</th>
                            <th>Giá vé</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket, index) => (
                            <tr key={index}>
                                <td>{ticket.route}</td>
                                <td>
                                    <span className="time-icon">🕒</span> {ticket.time}
                                </td>
                                <td>{ticket.date}</td>
                                <td>
                                    <span className={`status ${ticket.statusClass}`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td>{ticket.price}</td>
                                <td>
                                    <button className="detail-button">{ticket.buttonLabel}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="pagination">
                    <button className="page-btn">«</button>
                    <button className="page-number active">1</button>
                    <button className="page-number">2</button>
                    <button className="page-number">3</button>
                    <button className="page-number">4</button>
                    <button className="page-number">5</button>
                    <button className="page-btn">»</button>
                </div>
            </div>
        </>
    )
}

export default MyTicket