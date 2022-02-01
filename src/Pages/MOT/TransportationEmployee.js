import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOTEmployeeDataGrid from './MOTEmployeeDataGrid'
function TransportationEmployee() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>موظفين وزارة المواصلات الفلسطينية</h1>
        </ButtomTitleLine>
        <MOTEmployeeDataGrid />
    </TitleDiv>;
}

export default TransportationEmployee;
