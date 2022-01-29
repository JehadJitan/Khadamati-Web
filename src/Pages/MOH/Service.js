import React from 'react';
import './TableStyle.css';

function Service({ service }) {
    return <div>
        <table border="1" width="1050">
            <tr>
                <th width="15%">تاريخ الإنتهاء</th>
                <th width="15%">تاريخ الإنشاء</th>
                <th width="10%">مفعلة؟</th>
                <th width="30%">تفاصيل الخدمة</th>
                <th width="25%">الخدمة</th>
                <th width="15%">رقم الخدمة</th>
            </tr>
            <tr>
                <td>{service.endDate}</td>
                <td>{service.startDate}</td>
                <td>{service.active}</td>
                <td>{service.description}</td>
                <td>{service.service}</td>
                <td>{service.id}</td>
            </tr>
        </table>
    </div>;
}

export default Service;
