import React from 'react';
import styled from 'styled-components';
import ServiceList from './ServiceList';

const ServiceDiv = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:center;
    margin:auto;
    width:600px;
    height:550px;
    // border: 4px solid #d31818;
    margin-top:100px;
    padding: 5px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #ffffff;
`;

const Title = styled.h2`
    margin-bottom:0px;
    color:#d31818;
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

function Health() {
    return (
        <div>
            <CustomDiv>
                <h1>خدمات وزارة الصحة</h1>
            </CustomDiv>
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

        </div>
    );
}

export default Health;
