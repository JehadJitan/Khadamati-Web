import React from 'react';
import './Employee.css'
function Service({ service }) {
    return <div>
        <table>
            <tr>
                <th>تفاصيل الخدمة</th>
                <th>الخدمة</th>
                <th>رقم الخدمة</th>
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
