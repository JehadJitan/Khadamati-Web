import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOTServiceDataGrid from './MOTServiceDataGrid'
function TransportationService() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>خدمات وزارة المواصلات الفلسطينية</h1>
        </ButtomTitleLine>
        <MOTServiceDataGrid />
    </TitleDiv>;
}

export default TransportationService;
