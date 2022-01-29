import React from 'react';
import './TableStyle.css'

function Employee({ employee }) {
    return <div>
        <table border="1" width="1050">
            <tr>
                <th width="10%">كلمة السر</th>
                <th width="20%">البريد الالكتروني</th>
                <th width="20%">الوظيفه</th>
                <th width="10%">رقم الهاتف</th>
                <th width="10%">رقم الهوية</th>
                <th width="5%">العمر</th>
                <th width="5%">الجنس</th>
                <th width="20%">الإسم الكامل</th>
            </tr>
            <tr>
                <td>{employee.password}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
                <td>{employee.phone}</td>
                <td>{employee.id}</td>
                <td>{employee.age}</td>
                <td>{employee.gender}</td>
                <td>{employee.name}</td>
            </tr>
        </table>
    </div>;
}

export default Employee;
