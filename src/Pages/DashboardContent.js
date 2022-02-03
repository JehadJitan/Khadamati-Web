import React from 'react';
import * as BsIcons from 'react-icons/bs';
import styled from 'styled-components';
import { ButtomTitleLine, TitleDiv } from '../Components/Divs/StyledDivs'
import { MOFERowLength } from './MOF/MOFEmployeeDataGrid';
import { MOIERowLength } from './MOI/MOIEmployeeDataGrid';
import { MOPRowLength } from './MOP/MOPEmployeeDataGrid';
import { MOTRowLength } from './MOT/MOTEmployeeDataGrid';
import { NumOfUsers } from './Users/Users';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Parent = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px;
`;

const Right = styled.div`
    width: 250px;
    height: 350px;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #cfe1b9;
    margin-left: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Center = styled.div`
    width: 250px;
    height: 350px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 5px 10px 18px #888888;
    background-color: #cfe1b9;
    margin-left: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Left = styled.div`
    width: 250px;
    height: 350px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 5px 10px 18px #888888;
    background-color: #cfe1b9;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Circle = styled.div`
margin-top: 20px;
width: 150px;
height: 150px;

`;

const Title = styled.h1`
    color: #d31818;
    font-size: 25px;
    margin-bottom: 5px;
`;

function DashboardContent() {
    const totalEmployees = MOIERowLength + MOFERowLength + MOTRowLength + MOPRowLength;
    const numOfCitizens = 400;
    const Empercentage = (totalEmployees / numOfCitizens) * 100;
    const Usprecentage = (NumOfUsers / numOfCitizens) * 100;

    return (
        <>
            <TitleDiv>
                <ButtomTitleLine>
                    <h1>نظرة عامة على لوحة القيادة</h1>
                </ButtomTitleLine>
            </TitleDiv>
            <Parent>
                <Left>
                    <BsIcons.BsPeopleFill /><Title>عدد موظفين القطاعات الحكومية</Title>
                    <h2>{totalEmployees}</h2>
                    <Circle>
                        <CircularProgressbar styles={buildStyles({ trailColor: '#f5f5f5', pathColor: '#d31818', textColor: '#d31818' })} value={Empercentage} text={`${Empercentage}%`} />;
                    </Circle>
                </Left>
                <Center>

                    <BsIcons.BsPeopleFill /><Title>العدد الإجمالي للمواطنين</Title>
                    <h2>{numOfCitizens}</h2>
                </Center>
                <Right>
                    <BsIcons.BsPeopleFill /><Title>عدد مستخدمين تطبيق خدماتي</Title>
                    <h2>{NumOfUsers}</h2>
                    <Circle>
                        <CircularProgressbar styles={buildStyles({ trailColor: '#f5f5f5', pathColor: '#d31818', textColor: '#d31818' })} value={Usprecentage} text={`${Usprecentage}%`} />;
                    </Circle>
                </Right>
            </Parent>
        </>
    );
}

export default DashboardContent;
