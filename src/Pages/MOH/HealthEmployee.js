import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOHEmployeeDataGrid from "./MOHEmployeeDataGrid";

function HealthEmployee() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>موظفين وزارة الصحة الفلسطينية</h1>
        </ButtomTitleLine>
        <MOHEmployeeDataGrid></MOHEmployeeDataGrid>
    </TitleDiv>;
}

export default HealthEmployee;