import React from 'react';
import * as BsIcons from 'react-icons/bs';
import styled from 'styled-components';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs'
import { MOFERowLength } from '../MOF/MOFEmployeeDataGrid';
import { MOIERowLength } from '../MOI/MOIEmployeeDataGrid';
import { MOPRowLength } from '../MOP/MOPEmployeeDataGrid';
import { MOTRowLength } from '../MOT/MOTEmployeeDataGrid';
import { NumOfUsers } from '../Users/Users';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { MOPServiceRowLength } from '../MOP/MOPServiceDataGrid';
import { MOTServiceRowLength } from '../MOT/MOTServiceDataGrid';
import { MOIServiceRowLength } from '../MOI/MOIServiceDataGrid';
import { MOFEServiceRowLength } from '../MOF/MOFServiceDataGrid';
import { MOPRequestLength } from '../MOP/PropertyRequestTable';
import { MOIRequestLength } from '../MOI/InteriorRequestTable';
import { MOTRequestLength } from '../MOT/TransportationRequestTable';
import { MOFRequestLength } from '../MOF/FinanceRequestTable';

const Parent = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px;
`;

const Parent3 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin: 50px;
    flex-wrap: wrap;

`;

const Right = styled.div`
    width: 210px;
    height: 310px;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #adb5bd;
    margin-left: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Center = styled.div`
    width: 210px;
    height: 160px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 5px 10px 18px #888888;
    background-color: #ffffff;
    margin-left: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;
`;

const Card = styled.div`
    width: 330px;
    height: 100px;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #fdc500;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right:50px;
`;

const Left = styled.div`
    width: 200px;
    height: 300px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 5px 10px 18px #888888;
    background-color: #adb5bd;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Circle = styled.div`
margin-top: 10px;
width: 120px;
height: 120px;
`;

const Title = styled.h1`
    color: #d31818;
    font-size: 20px;
    margin-bottom: 5px;
`;

const Title4 = styled.h1`
    color: black;
    font-size: 18px;
    margin-right: 10px;
    width:200px;
    text-align: right;
    `;

const Title5 = styled.h1`
    color: black;
    font-size: 23px;
    text-align: right;
    font-weight: bold;

`;

const Parent2 = styled.div`
    display: flex;
    justify-content: center;
    width: 750px;
    height: 300px;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #ffffff;
    align-items: center;
    margin: 0 auto;
    flex-direction: row;

`;

const STY2 = styled.div`
margin-top:30px;
width:200px;
height:100px;
display: flex;
flex-direction: column;
`;

function DashboardContent() {
    const totalEmployees = MOIERowLength + MOFERowLength + MOTRowLength + MOPRowLength;
    const numOfCitizens = 200;
    const Empercentage = (totalEmployees / numOfCitizens) * 100;
    const Usprecentage = (NumOfUsers / numOfCitizens) * 100;

    return (
        <>
            <TitleDiv>
                <ButtomTitleLine>
                    <h1>نظرة عامة على لوحة القيادة</h1>
                </ButtomTitleLine>
            </TitleDiv>
            <Parent3>
                <Card style={{ 'background': '#38b000' }}>
                    <STY2 style={{ 'margin-top': '35px', 'color': 'black' }}>
                        <BsIcons.BsPeopleFill size={60} />
                    </STY2>
                    <STY2>
                        <Title5>100</Title5>
                        <Title4>عدد مستخدمين التطبيق </Title4>
                    </STY2>
                </Card>
                <Card>
                    <STY2 style={{ 'margin-top': '35px', 'color': 'black' }}>
                        <BsIcons.BsPeopleFill size={60} />
                    </STY2>
                    <STY2>
                        <Title5>{totalEmployees}</Title5>
                        <Title4>عدد الموظفين الحكومية</Title4>
                    </STY2>
                </Card>
                <Card style={{ 'background': '#38b6ff' }}>
                    <STY2 style={{ 'margin-top': '35px', 'color': 'black' }}>
                        <BsIcons.BsPeopleFill size={60} />
                    </STY2>
                    <STY2>
                        <Title5>{numOfCitizens}</Title5>
                        <Title4>العدد الإجمالي للمواطنين</Title4>
                    </STY2>
                </Card>
            </Parent3>
            <Parent>
                {/* <Parent2>
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
                </Parent2> */}
                <Parent2>
                    <table border="1" width="700px">
                        <tr>
                            <th width="150px">عدد الطلبات</th>
                            <th width="150px">عدد الخدمات</th>
                            <th width="150px">عدد الموظفين</th>
                            <th width="250px">إسم الوزارة</th>
                        </tr>

                        <tr>
                            <td>{MOTRequestLength}</td>
                            <td>{MOTServiceRowLength}</td>
                            <td>{MOTRowLength}</td>
                            <td style={{ 'color': '#d31818' }}>وزارة المواصلات</td>
                        </tr>
                        <tr>
                            <td>{MOIRequestLength}</td>
                            <td>{MOIServiceRowLength}</td>
                            <td>{MOIERowLength}</td>
                            <td style={{ 'color': '#d31818' }}>وزارة الداخلية</td>
                        </tr>
                        <tr>
                            <td>{MOFRequestLength}</td>
                            <td>{MOFEServiceRowLength}</td>
                            <td>{MOFERowLength}</td>
                            <td style={{ 'color': '#d31818' }}>وزارة المالية</td>
                        </tr>
                        <tr>
                            <td>{MOTRequestLength}</td>
                            <td>{MOTServiceRowLength}</td>
                            <td>{MOTRowLength}</td>
                            <td style={{ 'color': '#d31818' }}>وزارة الصحة</td>
                        </tr>
                        <tr>
                            <td>{MOPRequestLength}</td>
                            <td>{MOPServiceRowLength}</td>
                            <td>{MOPRowLength}</td>
                            <td style={{ 'color': '#d31818' }}>سلطة الأراضي</td>
                        </tr>
                    </table>
                </Parent2>
            </Parent>
        </>
    );
}

export default DashboardContent;
