import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { InsideDivTitle } from "../../Components/Divs/StyledDivs";
import { DataGrid } from "@mui/x-data-grid";
import { StyledTable } from "../../Components/Divs/StyledDivs";
import {
  getCitizenVisits2,
} from "../../shared/api";
import jsPDF from "jspdf";
import "jspdf-autotable";
import webFavicon from "../../Components/Fonts/webLogo4.png";
import Amiri from "../../Components/Fonts/Amiri-normal";
import PrintIcon from "@mui/icons-material/Print";

const ParentDiv = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

const columns = [
  {
    field: "userId",
    headerName: "رقم الجواز",
    sortable: true,
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "passportType",
    headerName: "نوع الجواز",
    sortable: true,
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "destination",
    headerName: "الوجهة",
    sortable: true,
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "goingDate",
    headerName: "تاريخ الذهاب",
    sortable: true,
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "backDate",
    headerName: "تاريخ الرجوع",
    sortable: true,
    width: 120,
    align: "center",
    headerAlign: "center",
  },
];

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open, selectedRow } = props;
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [citizenId, setCitizenId] = useState([]);
  const citizenId2 = selectedRow?.id;
  useEffect(() => {
    setCitizenId(selectedRow?.id);
  }, []);

  useEffect(() => {
    getCitizenVisits2(selectedRow?.id)
      .then((res) => {
        const data1 = [];
        res.data.data.map((visas) => {
          if (visas.backDate !== undefined) {
            visas.backDate = visas.backDate.substring(0, 10);
          }
          visas.goingDate = visas.goingDate.substring(0, 10);
          data1.push(visas);
        });
        setData([
          ...data1.map(({ id, ...res }) => ({
            ...res,
            userId: citizenId,
            id: res._id ?? citizenId,
          })),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedRow, citizenId]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.rect(5, 5, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10, 'S');
    doc.setFont("Amiri", "normal");
    doc.setTextColor(211,24,24);
    doc.setFontSize(20);
    doc.text(200, 20, "قائمة تأشيرات المواطن", "right");
    doc.addImage(webFavicon, 'PNG', 10, 12, 40, 13);
    console.log(data[0].id);
    console.log(data);
    doc.autoTable({
      head: [
        [
          "تاريخ الرجوع",
          "تاريخ الذهاب",
          "الوجهة",
          "نوع الجواز",
          "رقم الجواز",
        ],
      ],
      body: [
        [
          data[0].backDate,
          data[0].goingDate,
          data[0].destination,
          data[0].passportType,
          data[0].citizenId,
        ],
        [
          data[1].backDate,
          data[1].goingDate,
          data[1].destination,
          data[1].passportType,
          data[1].citizenId,
        ],
        [
          data[2].backDate,
          data[2].goingDate,
          data[2].destination,
          data[2].passportType,
          data[2].citizenId,
        ],
      ],
      // body: data.phone,
      styles: { font: "Amiri",halign: "center"},
      margin: {
        top: 35,
      },
      headStyles: { halign: "center", fillColor : [211, 24, 24]},
    });
    doc.save("Citizen-Visas.pdf");
  };

  return (
    <Dialog maxWidth={"xl"} onClose={handleClose} open={open}>
      <InsideDivTitle>
        <h1>قائمة تأشيرات المواطن</h1>
      </InsideDivTitle>
      <List sx={{ height: 550, width: 950 }}>
        <ListItem style={{ justifyContent: "center" }}>
          <ParentDiv>
            <StyledTable dir="rtl" style={{ height: 450 }}>
              <div style={{ height: 450, width: "100%" }}>
                <DataGrid
                  selectedRow={selectedRow}
                  rows={data}
                  columns={columns}
                  pageSize={7}
                  rowsPerPageOptions={[10]}
                  checkboxSelection
                />
              </div>
            </StyledTable>
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
