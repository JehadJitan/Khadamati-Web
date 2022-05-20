import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { InsideDivTitle } from "../../Components/Divs/StyledDivs";
import {getCurrentImage} from "../../shared/api";
import jsPDF from "jspdf";
import "jspdf-autotable";
import webFavicon from "../../Components/Fonts/webLogo4.png";
import Amiri from "../../Components/Fonts/Amiri-normal";
import PrintIcon from "@mui/icons-material/Print";
const Row = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-bottom: 2px;
`;

const ParentDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

const LeftDiv = styled.div`
  width: 50%;
  height: 100%;
  background-color: #274c77;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px 0px 0px 10px;
`;
const RightDiv = styled.div`
  width: 50%;
  height: 100%;
  background-color: #e7ecef;
  display: flex;
  justify-content: start;
  padding: 40px;
  flex-direction: column;
  border-radius: 0px 10px 10px 0px;
`;

const Label = styled.label`
  margin-left: 20px;
  display: flex;
  justify-content: end;
  margin-bottom: 30px;
`;

const Input = styled.input`
  height: 25px;
  direction: rtl;
  margin-bottom: 30px;
`;

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open, selectedRow } = props;

  const [currentImage, setCurrentImage] = useState();

  const handleClose = () => {
    onClose(selectedValue);
  };

  useEffect(() => {
    getCurrentImage(selectedRow?.id)
      .then((res) => {
        setCurrentImage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedRow]);

  const downloadPdf = () => {
    const pdfImage = `data:image/jpeg;base64,${currentImage}`;
    const doc = new jsPDF();
    doc.rect(5, 5, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10, 'S');
    doc.setFont("Amiri", "normal");
    doc.setTextColor(211,24,24);
    doc.setFontSize(20);
    doc.text(200, 20, "تفاصيل حساب مواطن", "right");
    doc.addImage(webFavicon, 'PNG', 10, 12, 40, 13);
    doc.addImage(pdfImage, 'JPEG', 70, 40, 80, 80);
    doc.autoTable({
      head: [
        [
          "البريد الالكتروني",
          "رقم الهاتف",
          "مكان الولادة",
          "تاريخ الولادة",
          "اسم الأم",
          "الجنس",
          "رقم الهوية",
          "اسم المواطن",
        ],
      ],
      body: [
        [
          props?.emailAddress,
          props?.phoneNumber,
          props?.placeOfBirth,
          props?.birthDate,
          props?.motherName,
          props?.gender,
          props?.idNumber,
          props?.fullName,
        ],
      ],
      // body: data.phone,
      styles: { font: "Amiri",halign: "center"},
      margin: {
        top: 130,
      },
      headStyles: { halign: "center", fillColor : [211, 24, 24]},
    });
    doc.save("Citizen-Info.pdf");
  };

  return (
    <Dialog maxWidth={"xl"} onClose={handleClose} open={open}>
      <InsideDivTitle>

        <h1>تفاصيل حساب مواطن</h1>
      </InsideDivTitle>
      <List sx={{ height: 550, width: 950 }}>
        <ListItem style={{ justifyContent: "center" }}>
          <ParentDiv>
            <LeftDiv>
              <img
                src={`data:image/jpeg;base64,${currentImage}`}
                alt="khadamatiLogo"
                width={300}
                style={{ "margin-bottom": "25px", 'border-radius': "50%" }}
              />
              <span style={{ color: "#e7ecef" }}>
                لتغيير الصورة الشخصية إضغط{" "}
                <a style={{ color: "#d31818" }} href="#">
                  {" "}
                  هنا{" "}
                </a>
              </span>
            </LeftDiv>
            <RightDiv>
              <Row>
                <Column>
                  <Input readonly type="text" value={props?.fullName}></Input>
                  <Input readonly type="text" value={props.idNumber}></Input>
                  <Input readonly type="text" value={props.gender}></Input>
                  <Input readonly type="text" value={props.motherName}></Input>
                  <Input readonly type="text" value={props.birthDate}></Input>
                  <Input
                    readonly
                    type="text"
                    value={props.placeOfBirth}
                  ></Input>
                  <Input readonly type="text" value={props.phoneNumber}></Input>
                  <Input
                    readonly
                    type="text"
                    value={props.emailAddress}
                  ></Input>
                </Column>

                <Column>
                  <Label>اسم المواطن</Label>
                  <Label>رقم الهوية</Label>
                  <Label>الجنس</Label>
                  <Label>اسم الأم</Label>
                  <Label>تاريخ الولادة</Label>
                  <Label>مكان الولادة</Label>
                  <Label>رقم الهاتف</Label>
                  <Label>البريد الألكتروني</Label>
                </Column>
              </Row>
            </RightDiv>
          </ParentDiv>
        </ListItem>
      </List>
      <PrintIcon
              onClick={downloadPdf}
              style={{ marginTop: "7px" }}
            ></PrintIcon>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
