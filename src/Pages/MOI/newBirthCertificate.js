import React from 'react';
import { ButtomTitleLine, TitleDiv, StyledCertificate } from '../../Components/Divs/StyledDivs';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const Label = styled.label`
margin-left:10px;
margin-bottom:25px;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-bottom:25px;
margin-top:100px;
`;

const Column = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: end;
`;

const handleSubmit = e => {
    const arr = [];
    const name = document.getElementsByClassName("name")[0].value;
    const identity_id = document.getElementsByClassName("identity_id")[0].value;
    const father_id = document.getElementsByClassName("father_id")[0].value;
    const gender = document.getElementsByClassName("gender")[0].value;
    const birthDate = document.getElementsByClassName("birthDate")[0].value;
    const placeOfBirth = document.getElementsByClassName("placeOfBirth")[0].value;
    const motherName = document.getElementsByClassName("motherName")[0].value;
    arr.push(name);
    arr.push(identity_id);
    arr.push(father_id);
    arr.push(gender);
    arr.push(birthDate);
    arr.push(placeOfBirth);
    arr.push(motherName);
    console.log(arr);
}

const sendApplication = e => {
    const arr = [];
    const name = document.getElementsByClassName("name")[0].value;
    const identity_id = document.getElementsByClassName("identity_id")[0].value;
    const father_id = document.getElementsByClassName("father_id")[0].value;
    const gender = document.getElementsByClassName("gender")[0].value;
    const birthDate = document.getElementsByClassName("birthDate")[0].value;
    const placeOfBirth = document.getElementsByClassName("placeOfBirth")[0].value;
    const motherName = document.getElementsByClassName("motherName")[0].value;
    arr.push(name);
    arr.push(identity_id);
    arr.push(father_id);
    arr.push(gender);
    arr.push(birthDate);
    arr.push(placeOfBirth);
    arr.push(motherName);
    console.log(arr);
}

function newBirthCertificate() {

    return <TitleDiv>
        <ButtomTitleLine>
            <h1>طلب إصدار شهادة ميلاد جديدة</h1>
        </ButtomTitleLine>
        <StyledCertificate>
            <form className="form" onSubmit={() => handleSubmit}>
                <Row>
                    <Column>
                        <input dir="rtl" class='identity_id' type='text' style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='father_id' type='text' style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='name' type='text' style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='gender' type='text' style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='motherName' type='text' style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='placeOfBirth' type='text' style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input type='date' class='birthDate' style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                    </Column>
                    <Column>
                        <Label>رقم هوية المواطن</Label>
                        <Label>رقم هوية والد المواطن</Label>
                        <Label>إسم المواطن الرباعي</Label>
                        <Label>الجنس</Label>
                        <Label>اسم الأم</Label>
                        <Label>مكان الولادة</Label>
                        <Label>تاريخ الميلاد</Label>

                    </Column>
                </Row>
                <Button onClick={sendApplication} variant="contained" color="success" style={{ 'margin-left': '10px', 'font-family': 'Almarai' }}>تقديم الطلب</Button>
            </form>
        </StyledCertificate>
    </TitleDiv >;
}

export default newBirthCertificate;