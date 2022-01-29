import React from 'react';
import Service from './Service';

function ServiceList() {
    const services = [{
        id: 89647,
        service: 'تجديد التأمين الصحي',
        description: 'تتيح للمواطن القدرة على تقديم طلب تجديد التأمين الصحي الكترونيا',
        active: 'نعم',
        startDate: '12-1-2020',
        endDate: '-'
    },
    {
        id: 89648,
        service: 'دفع رسوم التأمين الصحي',
        description: 'تتيح للمواطن القدرة على دفع رسوم التأمين الكترونيا',
        active: 'نعم',
        startDate: '12-1-2020',
        endDate: '-'
    },
    {
        id: 89649,
        service: 'إصدار شهادة تطعيم كورونا',
        description: 'تتيح للمواطن القدرة على إصدار شهادة تطعيم مصدقة من الدولة',
        active: 'نعم',
        startDate: '12-1-2020',
        endDate: '-'
    }
    ]
    const servicesList = services.map(service =>
        <Service service={service}></Service>
    );
    return <div>
        {servicesList}
    </div>;
}

export default ServiceList;
