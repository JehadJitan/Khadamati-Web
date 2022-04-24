import React from 'react';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs';
import VisaReg from "./visaRegestryDataGrid";

function visaRegistry() {
    return <TitleDiv>
        <ButtomTitleLine>
            <h1>تسجيل تأشيرة مواطن</h1>
        </ButtomTitleLine>
        <VisaReg></VisaReg>
    </TitleDiv>;
}

export default visaRegistry;