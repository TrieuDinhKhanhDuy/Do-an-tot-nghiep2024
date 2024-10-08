import React, { FC } from 'react';
import { DatePicker, Space } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

interface CustomDatePickerProps {
    value?: Dayjs | null;
    onChange?: (date: Dayjs | null, dateString: string | string[]) => void;
    placeholder?: string;
    format?: string;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ 
    value, 
    onChange, 
    placeholder = 'Chọn ngày', 
    format = 'DD/MM/YYYY' 
}) => {
    return (
        <Space direction="vertical">
            <DatePicker 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
                format={format} 
                style={{ width: '100%' }} 
            />
        </Space>
    );
};

export default CustomDatePicker;
