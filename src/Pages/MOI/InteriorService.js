import React from 'react';
import styled from 'styled-components';
import Test from "./MOIServiceTest";

const CustomDiv2 = styled.div`
    margin-top:50px;
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
    border-bottom: 2px solid black;
    color:#d31818;
`;



function InteriorService() {
    return <div style={{
        "margin-top": 100
    }}>            <CustomDiv2>
            <h1>خدمات وزارة الداخلية الفلسطينية</h1>
        </CustomDiv2>
        <Test></Test>
    </div>;
}

export default InteriorService;