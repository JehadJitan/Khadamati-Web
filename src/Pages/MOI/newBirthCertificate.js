import React, { useState } from 'react';
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

function NewBirthCertificate() {

    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        document.getElementsByClassName("name")[0].value = "";
        document.getElementsByClassName("identity_id")[0].value = "";
        document.getElementsByClassName("father_id")[0].value = "";
        document.getElementsByClassName("gender")[0].value = "";
        document.getElementsByClassName("birthDate")[0].value = "";
        document.getElementsByClassName("placeOfBirth")[0].value = "";
        document.getElementsByClassName("motherName")[0].value = "";
        document.getElementsByClassName("requestDate")[0].value = "";
        setSubmitted(false);

    }
    const handleSubmit = e => {
        // const arr = [];
        // const name = document.getElementsByClassName("name")[0].value;
        // const identity_id = document.getElementsByClassName("identity_id")[0].value;
        // const father_id = document.getElementsByClassName("father_id")[0].value;
        // const gender = document.getElementsByClassName("gender")[0].value;
        // const birthDate = document.getElementsByClassName("birthDate")[0].value;
        // const placeOfBirth = document.getElementsByClassName("placeOfBirth")[0].value;
        // const motherName = document.getElementsByClassName("motherName")[0].value;
        // arr.push(name);
        // arr.push(identity_id);
        // arr.push(father_id);
        // arr.push(gender);
        // arr.push(birthDate);
        // arr.push(placeOfBirth);
        // arr.push(motherName);
        // console.log(arr);
        // alert("تم تقديم طلب إصدار شهادة ميلاد لرقم الهوية", identity_id);
        // setSubmitted(true);
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
        const requestDate = document.getElementsByClassName("requestDate")[0].value;

        arr.push(name);
        arr.push(identity_id);
        arr.push(father_id);
        arr.push(gender);
        arr.push(birthDate);
        arr.push(placeOfBirth);
        arr.push(motherName);
        arr.push(requestDate);
        if (name === '' || identity_id === '' || father_id === '' || gender === '' || birthDate === '' || placeOfBirth === '' || motherName === '' || requestDate === '') {
            alert("خطأ في الإدخال");
        } else {
            console.log(arr);
            alert("تم تقديم طلب إصدار شهادة ميلاد بنجاح");
            setSubmitted(true);
        }
    }

    return <TitleDiv>
        <ButtomTitleLine>
            <h1>طلب إصدار شهادة ميلاد جديدة</h1>
        </ButtomTitleLine>
        <StyledCertificate>
            <form className="form" onSubmit={() => handleSubmit} style={{ 'marginTop': '30px' }}>
                <Row>
                    <Column>
                        <input dir="rtl" class='identity_id' type='text' required style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='father_id' type='text' required style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='name' type='text' required style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='gender' type='text' required style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='motherName' type='text' required style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input dir="rtl" class='placeOfBirth' type='text' required style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input type='date' class='birthDate' required style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>
                        <input type='date' class='requestDate' required style={{ 'margin-right': '25px', 'margin-bottom': '25px' }}></input>

                    </Column>
                    <Column>
                        <Label>رقم هوية المواطن</Label>
                        <Label>رقم هوية والد المواطن</Label>
                        <Label>إسم المواطن الرباعي</Label>
                        <Label>الجنس</Label>
                        <Label>اسم الأم</Label>
                        <Label>مكان الولادة</Label>
                        <Label>تاريخ الميلاد</Label>
                        <Label>تاريخ الطلب</Label>

                    </Column>
                </Row>
                <Button onClick={sendApplication} variant="contained" color="success" style={{ 'margin-left': '10px', 'font-family': 'Almarai' }}>تقديم الطلب</Button>
            </form>
        </StyledCertificate>
    </TitleDiv >;
}

export default NewBirthCertificate;