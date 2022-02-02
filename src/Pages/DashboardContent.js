import React from 'react';
import * as BsIcons from 'react-icons/bs';
import styled from 'styled-components';
import { MOFERowLength } from './MOF/MOFEmployeeDataGrid';
import { MOIERowLength } from './MOI/MOIEmployeeDataGrid';
import { MOPRowLength } from './MOP/MOPEmployeeDataGrid';
import { MOTRowLength } from './MOT/MOTEmployeeDataGrid';
import { NumOfUsers } from './Users/Users';

const Parent = styled.div`
    display: flex;
    justify-content: center;
    margin: 150px;
`;

const Right = styled.div`
    width: 500px;
    height: 150px;
    padding: 20px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #ffffff;
    margin-left: 80px;
    text-align: center;
`;

const Center = styled.div`
    width: 500px;
    height: 150px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 5px 10px 18px #888888;
    background-color: #ffffff;
    margin-left: 80px;
`;

const Left = styled.div`
    width: 500px;
    height: 150px;
    padding: 20px;
    border-radius: 25px;
    text-align: center;
    box-shadow: 5px 10px 18px #888888;
    background-color: #ffffff;
`;

const Title = styled.h1`
    color: #d31818;
`;

function DashboardContent() {
    return (
        <Parent>
            <Left>
                <BsIcons.BsPeopleFill /><Title>عدد المواطنين</Title>
                <h2>5,297,327</h2>
            </Left>
            <Center>
                <BsIcons.BsPeopleFill /><Title>عدد الموظفين</Title>
                <h2>{MOIERowLength + MOFERowLength + MOTRowLength + MOPRowLength}</h2>
            </Center>
            <Right>
                <BsIcons.BsPeopleFill /><Title>عدد المستخدمين</Title>
                <h2>{NumOfUsers}</h2>
            </Right>
        </Parent>
    );
}

export default DashboardContent;
