import { useEffect } from 'react';
import Pusher from 'pusher-js';

interface SeatUpdate {
    seat: string; // Hoặc kiểu dữ liệu cụ thể cho seat (e.g., number)
    status: string; // Hoặc Enum nếu trạng thái ghế là cố định
}

const UsePusherSeats = (setSeatsStatus: React.Dispatch<React.SetStateAction<Record<string, string>>>) => {
    useEffect(() => {
        const pusher = new Pusher('8579e6baacda80044680', {
            cluster: 'ap1',
        });

        const channel = pusher.subscribe('seat-channel');

        // Lắng nghe sự kiện cập nhật trạng thái ghế
        channel.bind('update-seat-status', (data: SeatUpdate) => {
            if (data?.seat && data?.status) {
                setSeatsStatus((prev) => ({
                    ...prev,
                    [data.seat]: data.status, // Cập nhật trạng thái ghế
                }));
            }
        });

        // Lắng nghe trạng thái kết nối (tùy chọn)
        pusher.connection.bind('error', (err: any) => {
            console.error('Pusher connection error:', err);
        });

        pusher.connection.bind('connected', () => {
            console.log('Connected to Pusher!');
        });

        pusher.connection.bind('disconnected', () => {
            console.warn('Disconnected from Pusher!');
        });

        // Cleanup: Hủy đăng ký và ngắt kết nối khi unmount
        return () => {
            channel.unbind('update-seat-status'); // Hủy lắng nghe sự kiện
            pusher.unsubscribe('seat-channel');   // Hủy đăng ký kênh
            pusher.disconnect();                  // Ngắt kết nối hoàn toàn
        };
    }, [setSeatsStatus]);
};

export default UsePusherSeats;
