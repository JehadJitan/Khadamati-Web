import React from 'react';
import Employee from './Employee';
import Service from './Service';

function ServiceList() {
    const services = [{
        id: 89647,
        service: 'تجديد التأمين الصحي',
        description: 'تتيح للمواطن القدرة على تقديم طلب تجديد التأمين الصحي الكترونيا'
    },
    {
        id: 89648,
        service: 'دفع رسوم التأمين الصحي',
        description: 'تتيح للمواطن القدرة على دفع رسوم التأمين الكترونيا'
    },
    {
        id: 89649,
        service: 'إصدار شهادة تطعيم كورونا',
        description: 'تتيح للمواطن القدرة على إصدار شهادة تطعيم مصدقة من الدولة'
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
