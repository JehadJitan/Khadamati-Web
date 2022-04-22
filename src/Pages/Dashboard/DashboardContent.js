import React, { useEffect, useState } from "react";
import * as BsIcons from 'react-icons/bs';
import * as GoIcons from 'react-icons/go';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import styled from 'styled-components';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs'
import 'react-circular-progressbar/dist/styles.css';
import styledTable from './DashStyle.css';
import { getDashboardContent } from '../../shared/api';

const Parent = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const CardParent = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin-left: 5%;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
`;

const Card = styled.div`
    width: 21.5%;
    height: 80px;
    padding: 3%;
    box-shadow: 5px 10px 18px #888888;
    background-color: #fdc500;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-left: 1px solid #d31818;
    border-right: 1px solid #d31818;
    justify-content: center;
`;


const DescTitle = styled.h1`
    color: black;
    font-size: 15px;
    width:200px;
    text-align: right;
    `;

const NumberTitle = styled.h1`
    color: black;
    font-size: 25px;
    text-align: right;
    font-weight: bold;
    color:#d31818;
`;

const TableParent = styled.div`
    display: flex;
    justify-content: center;
    width: 1050px;
    height: 350px;
    // border-radius: 25px;
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

const CustomeTable = styled.table`
border-collapse: collapse;
width: 100%;
height:100%;
`;

function DashboardContent() {

    const [citizens, setCitizens] = useState();
    const [employees, setEmployees] = useState();
    const [services, setServices] = useState();
    const [requests, setRequests] = useState();

    const [moiEmployee, setMoiEmployee] = useState();
    const [mohEmployee, setMohEmployee] = useState();
    const [mofEmployee, setMofEmployee] = useState();
    const [motEmployee, setMotEmployee] = useState();
    const [mopEmployee, setMopEmployee] = useState();

    const [moiService, setMoiService] = useState();
    const [mohService, setMohService] = useState();
    const [mofService, setMofService] = useState();
    const [motService, setMotService] = useState();
    const [mopService, setMopService] = useState();

    const [moiRequest, setMoiRequest] = useState();
    const [mohRequest, setMohRequest] = useState();
    const [mofRequest, setMofRequest] = useState();
    const [motRequest, setMotRequest] = useState();
    const [mopRequest, setMopRequest] = useState();

    useEffect(() => {
        getDashboardContent()
            .then((res) => {
                setCitizens(res.data.data[0]);
                setEmployees(res.data.data[1]);
                setServices(res.data.data[2]);
                setRequests(res.data.data[3]);

                setMoiEmployee(res.data.data[4]);
                setMohEmployee(res.data.data[5]);
                setMofEmployee(res.data.data[6]);
                setMotEmployee(res.data.data[7]);
                setMopEmployee(res.data.data[8]);

                setMoiService(res.data.data[9]);
                setMohService(res.data.data[10]);
                setMofService(res.data.data[11]);
                setMotService(res.data.data[12]);
                setMopService(res.data.data[13]);

                setMoiRequest(res.data.data[14]);
                setMohRequest(res.data.data[15]);
                setMofRequest(res.data.data[16]);
                setMotRequest(res.data.data[17]);
                setMopRequest(res.data.data[18]);
            });
    }, []);
    const numOfCitizens = '5,295,924';
    const totalEmployees = employees;
    const totalUsers = citizens;
    const totalServices = services;
    const totalRequests = requests;

    const totalMoiEmployee = moiEmployee;
    const totalMohEmployee = mohEmployee;
    const totalMofEmployee = mofEmployee;
    const totalMotEmployee = motEmployee;
    const totalMopEmployee = mopEmployee;

    const totalMoiService = moiService;
    const totalMohService = mohService;
    const totalMofService = mofService;
    const totalMotService = motService;
    const totalMopService = mopService;

    const totalMoiRequest = moiRequest;
    const totalMohRequest = mohRequest;
    const totalMofRequest = mofRequest;
    const totalMotRequest = motRequest;
    const totalMopRequest = mopRequest;

    // const Empercentage = (totalEmployees / numOfCitizens) * 100;
    // const Usprecentage = (NumOfUsers / numOfCitizens) * 100;

    return (
        <>
            <TitleDiv>
                <ButtomTitleLine>
                    <h1>نظرة عامة على لوحة القيادة</h1>
                </ButtomTitleLine>
            </TitleDiv>
            <CardParent>
                    <Card style={{ 'background': '#eceff1' }}>
                        <STY2 style={{ 'margin-top': '25%', 'color': 'black' }}>
                            <GoIcons.GoGitPullRequest size={45} />
                        </STY2>
                        <STY2>
                            <NumberTitle>{totalRequests}</NumberTitle>
                            <DescTitle>العدد الإجمالي للطلبات</DescTitle>
                        </STY2>
                    </Card>
                    <Card style={{ 'background': '#ffffff' }}>
                    <STY2 style={{ 'margin-top': '25%', 'color': 'black' }}>
                            <MdIcons.MdMiscellaneousServices size={45} />
                        </STY2>
                        <STY2>
                            <NumberTitle>{totalServices}</NumberTitle>
                            <DescTitle>العدد الإجمالي للخدمات</DescTitle>
                        </STY2>
                    </Card>
                    <Card style={{ 'background': '#eceff1' }}>
                    <STY2 style={{ 'margin-top': '25%', 'color': 'black' }}>
                            <IoIcons.IoIosPeople size={45} />
                        </STY2>
                        <STY2>
                            <NumberTitle>{totalUsers}</NumberTitle>
                            <DescTitle>عدد مستخدمين التطبيق </DescTitle>
                        </STY2>
                    </Card>
                    <Card style={{ 'background': '#ffffff' }}>
                    <STY2 style={{ 'margin-top': '27.5%', 'color': 'black' }}>
                            <FaIcons.FaUserTie size={40} />
                        </STY2>
                        <STY2>
                            <NumberTitle>{totalEmployees}</NumberTitle>
                            <DescTitle>عدد الموظفين الحكومية</DescTitle>
                        </STY2>
                    </Card>
                    <Card style={{ 'background': '#eceff1' }}>
                    <STY2 style={{ 'margin-top': '25%', 'color': 'black' }}>
                            <BsIcons.BsPeopleFill size={45} />
                        </STY2>
                        <STY2>
                            <NumberTitle>{numOfCitizens}</NumberTitle>
                            <DescTitle>العدد الإجمالي للمواطنين</DescTitle>
                        </STY2>
                    </Card>
            </CardParent>
            <Parent>
                <TableParent>
                    <CustomeTable>
                        <tr>
                            <th width="150px">عدد الطلبات</th>
                            <th width="150px">عدد الخدمات</th>
                            <th width="150px">عدد الموظفين</th>
                            <th width="250px">إسم الوزارة</th>
                        </tr>

                        <tr>
                            <td>{totalMotRequest}</td>
                            <td>{totalMotService}</td>
                            <td>{totalMotEmployee}</td>
                            <td style={{ 'color': '#d31818' }}>وزارة المواصلات</td>
                        </tr>
                        <tr>
                            <td>{totalMoiRequest}</td>
                            <td>{totalMoiService}</td>
                            <td>{totalMoiEmployee}</td>
                            <td style={{ 'color': '#d31818' }}>وزارة الداخلية</td>
                        </tr>
                        <tr>
                            <td>{totalMofRequest}</td>
                            <td>{totalMofService}</td>
                            <td>{totalMofEmployee}</td>
                            <td style={{ 'color': '#d31818' }}>وزارة المالية</td>
                        </tr>
                        <tr>
                            <td>{totalMohRequest}</td>
                            <td>{totalMohService}</td>
                            <td>{totalMohEmployee}</td>
                            <td style={{ 'color': '#d31818' }}>وزارة الصحة</td>
                        </tr>
                        <tr>
                            <td>{totalMopRequest}</td>
                            <td>{totalMopService}</td>
                            <td>{totalMopEmployee}</td>
                            <td style={{ 'color': '#d31818' }}>سلطة الأراضي</td>
                        </tr>
                    </CustomeTable>
                </TableParent>
            </Parent>
        </>
    );
}

export default DashboardContent;
