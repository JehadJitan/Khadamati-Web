import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOPEmployeeDataGrid from "./MOPEmployeeDataGrid";

function PropertyEmployee() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>موظفين سلطة الأراضي الفلسطينية</h1>
        </ButtomTitleLine>
        <MOPEmployeeDataGrid />
    </TitleDiv>;
}

export default PropertyEmployee;
