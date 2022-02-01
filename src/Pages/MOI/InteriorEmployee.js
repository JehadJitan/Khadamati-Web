import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOIEmployeeDataGrid from "./MOIEmployeeDataGrid";

function InteriorEmployee() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>موظفين وزارة الداخلية الفلسطينية</h1>
        </ButtomTitleLine>
        <MOIEmployeeDataGrid></MOIEmployeeDataGrid>
    </TitleDiv>;
}

export default InteriorEmployee;