import React, { useState } from "react";
import {
  ButtomTitleLine,
  TitleDiv,
  StyledCertificate,
} from "../../Components/Divs/StyledDivs";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { addNewBorn } from "../../shared/api";

const Label = styled.label`
  margin-left: 10px;
  margin-bottom: 16.5%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);

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
  const handleSubmit = (e) => {};
  const sendApplication = async (e) => {
    const name = document.getElementsByClassName("name")[0].value;
    const identity_id = document.getElementsByClassName("identity_id")[0].value;
    const father_id = document.getElementsByClassName("father_id")[0].value;
    const gender = document.getElementsByClassName("gender")[0].value;
    const birthDate = document.getElementsByClassName("birthDate")[0].value;
    const placeOfBirth =
      document.getElementsByClassName("placeOfBirth")[0].value;
    const motherName = document.getElementsByClassName("motherName")[0].value;
    const requestDate = document.getElementsByClassName("requestDate")[0].value;

    if (
      name === "" ||
      identity_id === "" ||
      father_id === "" ||
      gender === "" ||
      birthDate === "" ||
      placeOfBirth === "" ||
      motherName === "" ||
      requestDate === ""
    ) {
      alert("خطأ في الإدخال");
    } else {
      const newBorn = {
        // _id: id,
        name: name,
        gender: gender,
        motherName: motherName,
        identity_id: identity_id,
        father_id: father_id,
        placeOfBirth: placeOfBirth,
        birthDate: birthDate,
        requestDate: requestDate,
      };

      try {
        await addNewBorn(newBorn)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
      alert("تم تقديم طلب إصدار شهادة ميلاد بنجاح");
      setSubmitted(true);
    }
  };

  return (
    <TitleDiv>
      <ButtomTitleLine>
        <h1>طلب إصدار شهادة ميلاد جديدة</h1>
      </ButtomTitleLine>
      <StyledCertificate>
        <form
          className="form"
          onSubmit={() => handleSubmit}
          style={{ marginTop: "90px" }}
        >
          <Row>
            <Column>
              <input
                dir="rtl"
                class="identity_id"
                type="text"
                required
                style={{ marginRight: "40%", marginBottom: "15%" }}
              ></input>
              <input
                dir="rtl"
                class="father_id"
                type="text"
                required
                style={{ marginRight: "40%", marginBottom: "15%" }}
              ></input>
              <input
                dir="rtl"
                class="name"
                type="text"
                required
                style={{ marginRight: "40%", marginBottom: "15%" }}
              ></input>
              <input
                dir="rtl"
                class="gender"
                type="text"
                required
                style={{ marginRight: "40%", marginBottom: "15%" }}
              ></input>
              <input
                dir="rtl"
                class="motherName"
                type="text"
                required
                style={{ marginRight: "40%", marginBottom: "15%" }}
              ></input>
              <input
                dir="rtl"
                class="placeOfBirth"
                type="text"
                required
                style={{ marginRight: "40%", marginBottom: "15%" }}
              ></input>
              <input
                type="date"
                class="birthDate"
                required
                style={{ marginRight: "40%", marginBottom: "15%" }}
              ></input>
              <input
                type="date"
                class="requestDate"
                required
                style={{ marginRight: "40%", marginBottom: "15%" }}
              ></input>
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
          <Row>
            <Button
              onClick={sendApplication}
              variant="contained"
              color="success"
              style={{ "margin-left": "10px", "font-family": "Almarai" }}
            >
              تقديم الطلب
            </Button>
          </Row>
        </form>
      </StyledCertificate>
    </TitleDiv>
  );
}

export default NewBirthCertificate;
