import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOIServiceDataGrid from "./MOIServiceDataGrid";

function InteriorService() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>خدمات وزارة الداخلية الفلسطينية</h1>
        </ButtomTitleLine>
        <MOIServiceDataGrid></MOIServiceDataGrid>
    </TitleDiv>;
}

export default InteriorService;