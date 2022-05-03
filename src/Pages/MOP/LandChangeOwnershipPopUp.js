import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { InsideDivTitle } from "../../Components/Divs/StyledDivs";
import Button from "@mui/material/Button";

const Label = styled.label`
  margin-left: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: end;
`;

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const sendApplication = (e) => {
    const firstCitizen_name =
      document.getElementsByClassName("firstCitizen_name")[0].value;
    const firstCitizen_id =
      document.getElementsByClassName("firstCitizen_id")[0].value;
    const secondCitizen_name =
      document.getElementsByClassName("secondCitizen_name")[0].value;
    const secondCitizen_id =
      document.getElementsByClassName("secondCitizen_id")[0].value;
    const address = document.getElementsByClassName("address")[0].value;
    const pieceId = document.getElementsByClassName("pieceId")[0].value;
    const hodId = document.getElementsByClassName("hodId")[0].value;
    const totalArea = document.getElementsByClassName("totalArea")[0].value;
    const totalPrice = document.getElementsByClassName("totalPrice")[0].value;
    const submitDate = document.getElementsByClassName("submitDate")[0].value;

    const newOwnership = {
      // _id: id,
      oldOwner: firstCitizen_name,
      oldOwnerId : firstCitizen_id,
      owner: secondCitizen_name,
      ownerId: secondCitizen_id,
      address: address,
      hodId: hodId,
      pieceId: pieceId,
      totalArea: totalArea,
      totalPrice: totalPrice,
      submitDate: submitDate,
    };
    console.log(newOwnership);

  //   try {
  //     await addNewBorn(newBorn)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   alert("تم تقديم طلب إصدار شهادة ميلاد بنجاح");
  //   setSubmitted(true);
  // }

  };

  return (
    <Dialog maxWidth={"xl"} onClose={handleClose} open={open}>
      <InsideDivTitle>
        <h1>تقديم طلب نقل ملكية</h1>
      </InsideDivTitle>
      <List sx={{ height: 400, width: 950 }}>
        <form className="form">
          <Row>
            <Column>
              <Input
                className="firstCitizen_name"
                type="text"
                dir="rtl"
                value={props?.owner}
                readOnly
              ></Input>
            </Column>
            <Column style={{ marginRight: "100px" }}>
              <Label>إسم الطرف الأول الرباعي</Label>
            </Column>
            <Column>
              <Input
                className="firstCitizen_id"
                type="text"
                dir="rtl"
                value={props?.ownerId}
                readOnly
              ></Input>
            </Column>
            <Column>
              <Label>رقم هوية الطرف الأول</Label>
            </Column>
          </Row>

          <Row style={{ marginBottom: "30px" }}>
            <Column>
              <Input
                className="secondCitizen_name"
                type="text"
                dir="rtl"
                required
              ></Input>
            </Column>
            <Column style={{ marginRight: "100px" }}>
              <Label>إسم الطرف الثاني الرباعي</Label>
            </Column>
            <Column>
              <Input
                className="secondCitizen_id"
                type="text"
                dir="rtl"
                required
              ></Input>
            </Column>
            <Column>
              <Label>رقم هوية الطرف الثاني</Label>
            </Column>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Column>
              <Input
                value={props?.hodId}
                readOnly
                className="hodId"
                type="text"
                dir="rtl"
              ></Input>
            </Column>
            <Column>
              <Label>رقم الحوض</Label>
            </Column>
            <Column style={{ marginLeft: "20px" }}>
              <Input
                value={props?.pieceId}
                readOnly
                className="pieceId"
                type="text"
                dir="rtl"
              ></Input>
            </Column>{" "}
            <Column>
              <Label>رقم القطعة</Label>
            </Column>
            <Column style={{ marginLeft: "20px" }}>
              <Input
                value={props?.address}
                readOnly
                className="address"
                type="text"
                dir="rtl"
              ></Input>
            </Column>
            <Column>
              <Label>العنوان</Label>
            </Column>
          </Row>
          <Row>
            <Column>
              <Input className="submitDate" type="date" required></Input>
            </Column>
            <Column style={{ marginRight: "30px" }}>
              <Label>تاريخ الطلب</Label>
            </Column>
            <Column style={{ marginRight: "10px" }}>
              <Input
                className="totalPrice"
                type="text"
                dir="rtl"
                required
              ></Input>
            </Column>
            <Column style={{ marginRight: "15px" }}>
              {/* <Label>المساحة</Label> */}
              <Label>سعر البيع</Label>
            </Column>
            <Column>
              <Input
                className="totalArea"
                type="text"
                dir="rtl"
                value={props?.totalArea}
                readOnly
              ></Input>
              {/* <Input class="totalPrice" type="text" dir="rtl" required></Input> */}
            </Column>
            <Column>
              <Label style={{ marginRight: "-50px" }}>المساحة</Label>
            </Column>
          </Row>
          <Button
            onClick={sendApplication}
            variant="contained"
            color="success"
            style={{ "margin-left": "10px", "font-family": "Almarai" }}
          >
            تقديم الطلب
          </Button>
        </form>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
