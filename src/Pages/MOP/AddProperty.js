import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOPPropertyDataGrid from "./MOPPropertyDataGrid";

function InteriorProperty() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>إضافة ممتلكات جديدة للمواطنين</h1>
        </ButtomTitleLine>
        <MOPPropertyDataGrid></MOPPropertyDataGrid>
    </TitleDiv>;
}

export default InteriorProperty;