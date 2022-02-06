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
import { MOPServiceRowLength } from './MOP/MOPServiceDataGrid';
import { MOTServiceRowLength } from './MOT/MOTServiceDataGrid';
import { MOIServiceRowLength } from './MOI/MOIServiceDataGrid';
import { MOFEServiceRowLength } from './MOF/MOFServiceDataGrid';
import { MOPRequestLength } from './MOP/PropertyRequestTable';
import { MOIRequestLength } from './MOI/InteriorRequestTable';
import { MOTRequestLength } from './MOT/TransportationRequestTable';
import { MOFRequestLength } from './MOF/FinanceRequestTable';

const Parent = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
`;

const Right = styled.div`
    width: 250px;
    height: 350px;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #cccccc;
    margin-left: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Center = styled.div`
    width: 250px;
    height: 180px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 5px 10px 18px #888888;
    background-color: #cccccc;
    margin-left: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`;

const Left = styled.div`
    width: 250px;
    height: 350px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 5px 10px 18px #888888;
    background-color: #cccccc;
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
    font-size: 22px;
    margin-bottom: 5px;
`;

const Parent2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    

`;
const Row1 = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
    flex-direction: column;
`;
const Col0 = styled.div`
width: 200px;
height: 50px;
padding: 5px;
border-radius: 25px;
text-align: center;
box-shadow: 5px 10px 18px #888888;
background-color: #15171c;
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 20px;
`;
const Col1 = styled.div`
width: 200px;
height: 75px;
border-radius: 25px;
text-align: center;
box-shadow: 5px 10px 18px #888888;
background-color: #cccccc;
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 20px;
`;
const Col2 = styled.div`
width: 200px;
height: 75px;
border-radius: 25px;
text-align: center;
box-shadow: 5px 10px 18px #888888;
background-color: #cccccc;
display: flex;
align-items: center;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`;
const Col3 = styled.div`
width: 200px;
height: 75px;
border-radius: 25px;
box-shadow: 5px 10px 18px #888888;
background-color: #cccccc;
text-align: center;
display: flex;
align-items: center;
flex-direction: column;
margin-bottom: 20px;
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
            <Parent2>
                <Row1>
                    <Col0>
                        <Title>سلطة الأراضي</Title>
                    </Col0>
                    <Col1>
                        <Title>عدد الخدمات</Title>
                        <h2>{MOPServiceRowLength}</h2></Col1>
                    <Col2>
                        <Title>عدد الطلبات</Title>
                        <h2>{MOPRequestLength}</h2></Col2>
                    <Col3>
                        <Title>عدد الموظفين</Title>
                        <h2>{MOPRowLength}</h2></Col3>
                </Row1>
                <Row1>
                    <Col0>
                        <Title>وزارة الصحة</Title>
                    </Col0>
                    <Col1>
                        <Title>عدد الخدمات</Title>
                        <h2>{totalEmployees}</h2></Col1>
                    <Col2>
                        <Title>عدد الطلبات</Title>
                        <h2>{totalEmployees}</h2></Col2>
                    <Col3>
                        <Title>عدد الموظفين</Title>
                        <h2>{totalEmployees}</h2></Col3>
                </Row1>
                <Row1>
                    <Col0>
                        <Title>وزارة المالية</Title>
                    </Col0>
                    <Col1>
                        <Title>عدد الخدمات</Title>
                        <h2>{MOFEServiceRowLength}</h2></Col1>
                    <Col2>
                        <Title>عدد الطلبات</Title>
                        <h2>{MOFRequestLength}</h2></Col2>
                    <Col3>
                        <Title>عدد الموظفين</Title>
                        <h2>{MOFERowLength}</h2></Col3>
                </Row1>
                <Row1>
                    <Col0>
                        <Title>وزارة الداخلية</Title>
                    </Col0>
                    <Col1>
                        <Title>عدد الخدمات</Title>
                        <h2>{MOIServiceRowLength}</h2></Col1>
                    <Col2>
                        <Title>عدد الطلبات</Title>
                        <h2>{MOIRequestLength}</h2></Col2>
                    <Col3>
                        <Title>عدد الموظفين</Title>
                        <h2>{MOIERowLength}</h2></Col3>
                </Row1>
                <Row1>
                    <Col0>
                        <Title>وزارة المواصلات</Title>
                    </Col0>
                    <Col1>
                        <Title>عدد الخدمات</Title>
                        <h2>{MOTServiceRowLength}</h2></Col1>
                    <Col2>
                        <Title>عدد الطلبات</Title>
                        <h2>{MOTRequestLength}</h2></Col2>
                    <Col3>
                        <Title>عدد الموظفين</Title>
                        <h2>{MOTRowLength}</h2></Col3>
                </Row1>
            </Parent2>
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
