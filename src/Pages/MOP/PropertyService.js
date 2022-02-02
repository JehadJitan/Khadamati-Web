import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOPServiceDataGrid from "./MOPServiceDataGrid";

function PropertyService() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>خدمات سلطة الأراضي  الفلسطينية</h1>
        </ButtomTitleLine>
        <MOPServiceDataGrid></MOPServiceDataGrid>
    </TitleDiv>;
}

export default PropertyService;
