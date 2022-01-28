import React from 'react';
import './TableStyle.css'

function Employee({ employee }) {
    return <div>
        <table border="1" width="550">
            <tr>
                <th width="30%">الوظيفه</th>
                <th width="20%">رقم الهوية</th>
                <th width="10%">العمر</th>
                <th width="40%">الإسم الكامل</th>

            </tr>
            <tr>
                <td>{employee.role}</td>
                <td>{employee.id}</td>
                <td>{employee.age}</td>
                <td>{employee.name}</td>
            </tr>
        </table>
    </div>;
}

export default Employee;
