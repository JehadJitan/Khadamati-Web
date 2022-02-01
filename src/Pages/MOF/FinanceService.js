import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOFServiceDataGrid from "./MOFServiceDataGrid";

function FinanceService() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>خدمات وزارة المالية الفلسطينية</h1>
        </ButtomTitleLine>
        <MOFServiceDataGrid></MOFServiceDataGrid>
    </TitleDiv>;
}

export default FinanceService;
