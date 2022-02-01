import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOFEmployeeDataGrid from "./MOFEmployeeDataGrid";

function FinanceEmployee() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>موظفين وزارة المالية الفلسطينية</h1>
        </ButtomTitleLine>
        <MOFEmployeeDataGrid />
    </TitleDiv>;
}

export default FinanceEmployee;
