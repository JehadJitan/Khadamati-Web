import React from 'react';
import Employee from './Employee';

function NameList() {
    const employees = [{
        name: 'جهاد الجيطان',
        age: 22,
        id: 1171858,
        role: 'رئيس قسم المحاسبة'
    },
    {
        name: 'طارق خوري',
        age: 25,
        id: 1173019,
        role: 'مساعد إداري'
    },
    {
        name: 'عيسى سلامة',
        age: 30,
        id: 1177896,
        role: 'مدير عام وزارة الصحة'
    }
    ]
    const employeeList = employees.map(employee =>
        <Employee employee={employee}></Employee>
    );
    return <div>
        {employeeList}
    </div>;
}

export default NameList;
