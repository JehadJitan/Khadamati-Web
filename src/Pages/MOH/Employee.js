import React from 'react';
import './Employee.css'
function Employee({ employee }) {
    return <div>
        <table>
            <tr>
                <th>الوظيفه</th>
                <th>رقم الهوية</th>
                <th>العمر</th>
                <th>الإسم الكامل</th>

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
