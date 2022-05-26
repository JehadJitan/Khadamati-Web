import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  ButtomTitleLine,
  StyledTable,
  TitleDiv,
  InsideDivTitle,
} from "../../Components/Divs/StyledDivs";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { getTransferredLands } from "../../shared/api";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

export const StyledParent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 530px;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  background-color: #ffffff;
  direction: rtl;
  overflow:scroll;
  overflow-x: hidden;
`;

export const StyledToolBar = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: center;
//   margin: auto;
  display: inline-block; 
  width: 100%;
  height: 70px;
  margin-top: 30px;
  padding: 10px;
  // box-shadow: 5px 10px 18px #888888;
  background-color: #fff;
  direction: rtl;
`;

export const StyledView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  background-color: #ffffff;
  direction: rtl;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  color: #d31818;
`;

export const StyledTextInToolbar = styled.label`
//   font-size: 17px;
  color: #d31818;
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  `;

export const StyledLabelText = styled.label`
  margin-bottom: 10px;
`;

export default function InteriorRequestTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getTransferredLands({})
      .then((res) => {
        const data1 = [];
        res.data.data.map((transLands) => {
          transLands.submitDate = transLands.submitDate.substring(0, 10);
          data1.push(transLands);
        });
        setData(data1);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var text = e.target.value;
    setInputText(text);
    // console.log(text);
  };

  const filteredData = data.filter((value) => {
    if (inputText == value.oldOwnerId) {
      return value.toString().includes(value.oldOwnerId);
    } else {
      return value;
    }
  });

  return (
    <>
      <TitleDiv>
        <ButtomTitleLine>
          <h1>أرشيف طلبات نقل ملكية أراضي</h1>
        </ButtomTitleLine>
      </TitleDiv>
      <StyledToolBar>
        <TextField 
        style={{'float': 'right',   'margin-top': '5px', 'margin-right': '20px'}}
          id="outlined-password-input"
          label="البحث عن طريق هوية المالك الجديد"
          type="text"
          textAlign="center"
          autoComplete="current-password"
          onChange={inputHandler}
          size="small"
          color="error"
        />
        <StyledTextInToolbar>
            العدد الإجمالي للطلبات هو: {filteredData.length}
        </StyledTextInToolbar>
      </StyledToolBar>
      <StyledParent>

      {filteredData.map((request) => {
        return (
          <StyledView>
            <StyledColumn>
              <StyledLabel>إسم المالك الأول:</StyledLabel>
              <StyledLabel>رقم هوية المالك الأول:</StyledLabel>
            </StyledColumn>
            <StyledColumn>
              <StyledLabelText>{request.oldOwner}</StyledLabelText>
              <StyledLabelText>{request.oldOwnerId}</StyledLabelText>
            </StyledColumn>
            <StyledColumn>
              <StyledLabel>إسم المالك الجيديد:</StyledLabel>
              <StyledLabel>رقم هوية المالك الجيديد:</StyledLabel>
            </StyledColumn>
            <StyledColumn>
              <StyledLabelText>{request.owner}</StyledLabelText>
              <StyledLabelText>{request.ownerId}</StyledLabelText>
            </StyledColumn>
            <StyledColumn>
              <StyledLabel>رقم القطعة:</StyledLabel>
              <StyledLabel>رقم الحوض:</StyledLabel>
            </StyledColumn>
            <StyledColumn>
              <StyledLabelText>{request.pieceId}</StyledLabelText>
              <StyledLabelText>{request.hodId}</StyledLabelText>
            </StyledColumn>
            <StyledColumn>
              <StyledLabel>سعر البيع:</StyledLabel>
              <StyledLabel>المساحة الإجمالية:</StyledLabel>
            </StyledColumn>
            <StyledColumn>
              <StyledLabelText>{request.totalPrice}</StyledLabelText>
              <StyledLabelText>{request.totalArea}</StyledLabelText>
            </StyledColumn>
            <StyledColumn>
              <StyledLabel>تاريخ البيع:</StyledLabel>
            </StyledColumn>
            <StyledColumn>
              <StyledLabelText>{request.submitDate}</StyledLabelText>
            </StyledColumn>
          </StyledView>
        );
      })}
            </StyledParent>
    </>
  );
}
