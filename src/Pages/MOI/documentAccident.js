import React, { useState, useEffect } from "react";
import {
  ButtomTitleLine,
  TitleDiv,
} from "../../Components/Divs/StyledDivs";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { addNewAccident } from "../../shared/api";
import jsPDF from "jspdf";
import "jspdf-autotable";
import webFavicon from "../../Components/Fonts/webLogo4.png";
import Amiri from "../../Components/Fonts/Amiri-normal";
import PrintIcon from "@mui/icons-material/Print";

export const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 500px;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 5px 10px 18px #888888;
  background-color: #ffffff;
  direction: rtl;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLabel = styled.label`
  margin-bottom: 50px;
  color: #d31818;
  font-size:17px;
`;

export const StyledLabelText = styled.label`
  margin-bottom: 50px;
`;
export const StyledInputText = styled.input`
  margin-bottom: 50px;
`;

function DocumentAccendent() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    document.getElementsByClassName("causedMan_id")[0].value = "";
    document.getElementsByClassName("affectedMan_id")[0].value = "";
    document.getElementsByClassName("city")[0].value = "";
    document.getElementsByClassName("date")[0].value = "";
    document.getElementsByClassName("causedMan_drivingId")[0].value = "";
    document.getElementsByClassName("affectedMan_drivingId")[0].value = "";
    document.getElementsByClassName("address")[0].value = "";
    document.getElementsByClassName("timeOfAccedent")[0].value = "";
    document.getElementsByClassName("causedMan_carId")[0].value = "";
    document.getElementsByClassName("affectedMan_carId")[0].value = "";
    document.getElementsByClassName("weatherCondition")[0].value = "";
    document.getElementsByClassName("injuries")[0].value = "";
    setSubmitted(false);
  }
  const sendApplication = async (e) => {
    
    const causedMan_id = document.getElementById("causedMan_id").value;
    const affectedMan_id = document.getElementById("affectedMan_id").value;
    const city = document.getElementById("city").value;
    const date = document.getElementById("date").value;
    const causedMan_drivingId = document.getElementById("causedMan_drivingId").value;
    const affectedMan_drivingId =
      document.getElementById("affectedMan_drivingId").value;
    const address = document.getElementById("address").value;
    const timeOfAccedent = document.getElementById("timeOfAccedent").value;
    const causedMan_carId = document.getElementById("causedMan_carId").value;
    const affectedMan_carId = document.getElementById("affectedMan_carId").value;
    const weatherCondition = document.getElementById("weatherCondition").value;
    const injuries = document.getElementById("injuries").value;
    if (
        causedMan_id === "" ||
        affectedMan_id === "" ||
        city === "" ||
        date === "" ||
        causedMan_drivingId === "" ||
        affectedMan_drivingId === "" ||
        address === "" ||
        timeOfAccedent === "" ||
        causedMan_carId === "" ||
        affectedMan_carId === "" ||
        weatherCondition === "" ||
        injuries === ""
    ) {
      alert("خطأ في الإدخال");
    } else {
      const newAccident = {
        // _id: id,
        causedMan_id: causedMan_id,
        affectedMan_id: affectedMan_id,
        city: city,
        date: date,
        causedMan_drivingId: causedMan_drivingId,
        affectedMan_drivingId: affectedMan_drivingId,
        address: address,
        timeOfAccedent: timeOfAccedent,
        causedMan_carId: causedMan_carId,
        affectedMan_carId: affectedMan_carId,
        weatherCondition: weatherCondition,
        injuries: injuries,
      };
      console.log(newAccident);

      try {
        await addNewAccident(newAccident)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
      alert("تم توثيق الحادث الجديد");
      setSubmitted(true);
    }
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.rect(
      5,
      5,
      doc.internal.pageSize.width - 10,
      doc.internal.pageSize.height - 10,
      "S"
    );
    doc.setFont("Amiri", "normal");
    doc.setTextColor(211, 24, 24);
    doc.setFontSize(20);
    doc.text(200, 20, "تفاصيل حادث سير جديد", "right");
    doc.addImage(webFavicon, "PNG", 10, 12, 40, 13);
    doc.autoTable({
      head: [
        [
          "الإصابات",
          "التاريخ",
          "المحافظة",
          "سيارة المتضرر",
          "سيارة المتسبب",
          "رخصة المتضرر",
          "رخصة المتسبب",
          "هوية المتضرر",
          "هوية المتسبب",
        ],
      ],
      body: [
        [
          document.getElementById("injuries").value,
          document.getElementById("date").value,
          document.getElementById("city").value,
          document.getElementById("affectedMan_carId").value,
          document.getElementById("causedMan_carId").value,
          document.getElementById("affectedMan_drivingId").value,
          document.getElementById("causedMan_drivingId").value,
          document.getElementById("affectedMan_id").value,
          document.getElementById("causedMan_id").value,
        ],
      ],
      styles: { font: "Amiri", halign: "center" },
      margin: {
        top: 50,
      },
      headStyles: { halign: "center", fillColor: [211, 24, 24] },
    });
    doc.save("Accident-Document.pdf");
  };

  return (
    <>
      <TitleDiv>
        <ButtomTitleLine>
          <h1>توثيق حادث سير جديد</h1>
        </ButtomTitleLine>
      </TitleDiv>
      <StyledView>
        <StyledRow style={{"marginTop" : '10px'}}>
        <StyledColumn>
          <StyledLabel>رقم هوية المتسبب:</StyledLabel>
          <StyledLabel>رقم هوية المتضرر:</StyledLabel>
          <StyledLabel>المحافظة:</StyledLabel>
          <StyledLabel>التاريخ:</StyledLabel>
        </StyledColumn>
        <StyledColumn>
          <StyledInputText dir="rtl" id="causedMan_id" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="affectedMan_id" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="city" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="date" type="Date" required></StyledInputText>
        </StyledColumn>
        <StyledColumn>
          <StyledLabel>رقم رخصة المتسبب:</StyledLabel>
          <StyledLabel>رقم رخصة المتضرر:</StyledLabel>
          <StyledLabel>مكان الحادث:</StyledLabel>
          <StyledLabel>وقت الحادث:</StyledLabel>
        </StyledColumn>
        <StyledColumn>
        <StyledInputText dir="rtl" id="causedMan_drivingId" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="affectedMan_drivingId" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="address" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="timeOfAccedent" type="text" required></StyledInputText>
        </StyledColumn>
        <StyledColumn>
          <StyledLabel>رقم سيارة المتسبب:</StyledLabel>
          <StyledLabel>رقم سيارة المتضرر:</StyledLabel>
          <StyledLabel>حالة الطقس:</StyledLabel>
          <StyledLabel>عدد الإصابات:</StyledLabel>
        </StyledColumn>
        <StyledColumn>
        <StyledInputText dir="rtl" id="causedMan_carId" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="affectedMan_carId" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="weatherCondition" type="text" required></StyledInputText>
          <StyledInputText dir="rtl" id="injuries" type="text" required></StyledInputText>
        </StyledColumn>
        </StyledRow>
        <StyledRow>
        <Button
          onClick={sendApplication}
          variant="contained"
          color="error"
          style={{ "marginLeft" : "20px", "fontFamily": "Almarai", "marginTop": "30px"}}
          >
          توثيق الحادث
        </Button>
        <PrintIcon onClick={downloadPdf} style={{ marginTop: "37px" }}></PrintIcon>
        </StyledRow>
      </StyledView>
    </>
  );
}
export default DocumentAccendent;