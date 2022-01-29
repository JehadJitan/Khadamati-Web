import React from 'react';
import styled from 'styled-components';
import ServiceList from './ServiceList';

const ServiceDiv = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:center;
    margin:auto;
    width:1100px;
    height:650px;
    // border: 4px solid #d31818;
    margin-top:100px;
    padding: 5px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #ffffff;
`;

const Title = styled.h2`
    margin-top:20px;
    color:#d31818;
`;

const CustomDiv = styled.div`
    margin-top:50px;
    display: flex;
    justify-content: center;
`;

const CustomDiv2 = styled.div`
    margin-top:50px;
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
    border-bottom: 2px solid black;
`;

const ButtonStyle = styled.button`
    color:#dad7cd;
    display:flex;
    height:40px;
    width:150px;
    justify-content:center;
    align-items:center;
    border-radius: 25px;
	text-decoration:none;
    cursor:pointer;
    background-color:#252831;
    font-weight: bold;
    font-size:15px;
    margin:10px;

    &:hover {
        background-color: #d31818;
  }
`;
const GeneralDiv = styled.div`
    margin-top:100px;
`;
function Health() {
    return (
        <GeneralDiv>
            <CustomDiv2>
                <h1>خدمات وزارة الصحة الفلسطينية</h1>
            </CustomDiv2>
            <ServiceDiv className='title'>
                <Title>لائحة الخدمات</Title>
                <CustomDiv>
                    <ServiceList />
                </CustomDiv>
                <CustomDiv>
                    <ButtonStyle>إضافة خدمة</ButtonStyle>
                    <ButtonStyle>تعديل خدمة</ButtonStyle>
                    <ButtonStyle>حذف خدمة</ButtonStyle>
                </CustomDiv>
            </ServiceDiv>

        </GeneralDiv>
    );
}

export default Health;
