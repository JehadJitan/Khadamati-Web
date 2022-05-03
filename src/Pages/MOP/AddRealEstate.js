import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOPRealEstateDataGrid from "./MOPRealEstateDataGrid";

function RealEstate() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>إضافة عقارات جديدة للمواطنين</h1>
        </ButtomTitleLine>
        <MOPRealEstateDataGrid></MOPRealEstateDataGrid>
    </TitleDiv>;
}

export default RealEstate;