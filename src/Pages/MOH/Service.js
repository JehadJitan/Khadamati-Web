import React from 'react';
import './TableStyle.css';

function Service({ service }) {
    return <div>
        <table border="1" width="550">
            <tr>
                <th width="50%">تفاصيل الخدمة</th>
                <th width="30%">الخدمة</th>
                <th width="20%">رقم الخدمة</th>
            </tr>
            <tr>
                <td>{service.description}</td>
                <td>{service.service}</td>
                <td>{service.id}</td>
            </tr>
        </table>
    </div>;
}

export default Service;
