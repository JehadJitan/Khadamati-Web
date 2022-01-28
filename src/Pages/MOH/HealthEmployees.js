import React from 'react';
import styled from 'styled-components';
import NameList from './NameList';

const EmployeeDiv = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:center;
    margin:auto;
    width:600px;
    height:500px;
    border: 4px solid #d31818;
    margin-top:100px;
    padding: 5px;
    border-radius: 25px;
`;

const Title = styled.h2`
    margin-bottom:0px;
`;

const CustomDiv = styled.div`
    margin-top:50px;
    display: flex;
    justify-content: center;
`;

const ButtonStyle = styled.button`
    color:#dad7cd;
    display:flex;
    height:30px;
    width:120px;
    justify-content:center;
    align-items:center;
    border-radius: 25px;
	text-decoration:none;
    cursor:pointer;
    background-color:#252831;
    font-weight: bold;
    margin:20px;
`;

function HealthEmployees() {
    return (
        <div>
            <CustomDiv>
                <h1>موظفين وزارة الصحة</h1>
            </CustomDiv>
            <EmployeeDiv className='title'>
                <Title>لائحة الموظفين</Title>
                <CustomDiv>
                    <NameList />
                </CustomDiv>
                <CustomDiv>
                    <ButtonStyle>إضافة موظف</ButtonStyle>
                    <ButtonStyle>تعديل موظف</ButtonStyle>
                    <ButtonStyle>حذف موظف</ButtonStyle>
                </CustomDiv>
            </EmployeeDiv>
        </div>
    );
}

export default HealthEmployees;
