import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import MOHCovidDataGrid from "./MOHCovidDataGrid";

function covidVaccine() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>قائمة المتطعمين في دولة فلسطين</h1>
        </ButtomTitleLine>
        <MOHCovidDataGrid></MOHCovidDataGrid>
    </TitleDiv>;
}

export default covidVaccine;