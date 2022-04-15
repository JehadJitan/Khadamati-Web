import React from 'react';
import styled from 'styled-components';
import { ButtomTitleLine, TitleDiv } from '../../Components/Divs/StyledDivs'
import mainLogo from './icon.png'

const ParentDiv = styled.div`
margin:50px;
direction: rtl;
display: flex;
justify-content: center;

`;
const RightDiv = styled.div`
padding:30px;
width:450px;
height:350px;
background:#543920;
display:flex;
flex-direction: column;
border-radius: 25px;
box-shadow: 2px 10px 18px #888888;
background-color: #cccccc;

`;

const LeftDiv = styled.div`
margin-right:50px;
padding:30px;
width:450px;
height:350px;
background:#543920;
display:flex;
flex-direction: column;
border-radius: 25px;
box-shadow: 2px 10px 18px #888888;
background-color: #cccccc;
justify-content:center;
align-items: center;

`;

const Label = styled.label`
margin-left:10px;
`;

const InnerDiv = styled.div`
margin-bottom:25px;
`;

function profileSetting() {

    return (
        <>
            <TitleDiv>
                <ButtomTitleLine>
                    <h1>تفاصيل حساب مواطن</h1>
                </ButtomTitleLine>
                <ParentDiv>
                    <RightDiv>
                        <InnerDiv>
                            <Label>اسم المواطن</Label>
                            <input type='text'></input>
                        </InnerDiv>
                        <InnerDiv>
                            <Label>رقم الهوية</Label>
                            <input type='text'></input>
                        </InnerDiv>
                        <InnerDiv>
                            <Label>البريد الإلكتروني</Label>
                            <input type='text'></input>
                        </InnerDiv>
                        <InnerDiv>
                            <Label>تاريخ الميلاد</Label>
                            <input type='text' style={{ 'margin-right': '25px' }}></input>
                        </InnerDiv>
                        <InnerDiv>
                            <Label>رقم الهاتف</Label>
                            <input type='text' style={{ 'margin-right': '28px' }}></input>
                        </InnerDiv>
                        <InnerDiv>
                            <span>لتغيير كلمة المرور إضغط <a style={{ 'color': '#d31818' }} href='#'>هنا</a></span>
                        </InnerDiv>
                    </RightDiv>
                    <LeftDiv>
                        <img src={mainLogo} alt="khadamatiLogo" width={200} style={{ 'margin-bottom': '25px' }} />
                        <span>لتغيير الصورة الشخصية إضغط <a style={{ 'color': '#d31818' }} href='#'>هنا</a></span>

                    </LeftDiv>
                </ParentDiv>
            </TitleDiv>
        </>
    );
}

export default profileSetting;
