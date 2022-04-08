import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOHServiceDataGrid from "./MOHServiceDataGrid";

function HealthService() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>خدمات وزارة الصحة الفلسطينية</h1>
        </ButtomTitleLine>
        <MOHServiceDataGrid></MOHServiceDataGrid>
    </TitleDiv>;
}

export default HealthService;