import React from 'react';
import Employee from './Employee';

function NameList() {
    const employees = [{
        name: 'جهاد الجيطان',
        gender: 'ذكر',
        age: 22,
        id: 1171858,
        phone: 594222110,
        role: 'رئيس قسم المحاسبة',
        email: 'example@gmail.com',
        password: 'example123'

    },
    {
        name: 'طارق خوري',
        gender: 'انثى',
        age: 34,
        id: 1173019,
        phone: 594222110,
        role: 'رئيس قسم المحاسبة',
        email: 'example34@gmail.com',
        password: '123example'
    },
    {
        name: 'عيسى سلامة',
        gender: 'ذكر',
        age: 50,
        id: 1179534,
        phone: 524779538,
        role: 'رئيس قسم المحاسبة',
        email: 'example50@gmail.com',
        password: 'test12345'
    }
    ]

    return <div>
        <Employee employees={employees} />
    </div>;
}

export default NameList;
