import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { InsideDivTitle } from "../../Components/Divs/StyledDivs";
import { DataGrid } from "@mui/x-data-grid";
import { StyledTable } from "../../Components/Divs/StyledDivs";
import { getAllLands, getCitizenLands } from "../../shared/api";
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
    field: "address",
    headerName: "العنوان",
    sortable: true,
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "hodId",
    headerName: "رقم الحوض",
    sortable: true,
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "pieceId",
    headerName: "رقم القطعة",
    sortable: true,
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "totalArea",
    headerName: "المساحة",
    sortable: true,
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "submitDate",
    headerName: "تاريخ التسجيل",
    sortable: true,
    width: 150,
    align: "center",
    headerAlign: "center",
  },
];

export default function SimpleDialog(props) {
  const { onClose, selectedValue, open, selectedRow } = props;
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const citizenId2 = selectedRow?.id;
  console.log(selectedRow)

  useEffect(() => {
    getCitizenLands(selectedRow?.id)
    .then((res) => {
        const data1 = [];
        res.data.data.map((land) => {
          land.submitDate = land.submitDate.substring(0,10);
          data1.push(land);
        });
        setData([
          ...data1.map(({ id, ...res }) => ({
            ...res,
            id: id,
            id: res._id ?? id,
          })),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedRow]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.rect(5, 5, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10, 'S');
    doc.setFont("Amiri", "normal");
    doc.setTextColor(211,24,24);
    doc.setFontSize(20);
    doc.text(200, 20, "قائمة أراضي المواطن", "right");
    doc.addImage(webFavicon, 'PNG', 10, 12, 40, 13);
    console.log(data[0].id);
    console.log(data);
    doc.autoTable({
      head: [
        [
          "تاريخ التسجيل",
          "المساحة",
          "رقم القطعة",
          "رقم الحوض",
          "العنوان",
          "إسم المالك",
        ],
      ],
      body: [
        [
          data[0].submitDate,
          data[0].totalArea,
          data[0].pieceId,
          data[0].hodId,
          data[0].address,
          data[0].owner,
        ],
      ],
      // body: data.phone,
      styles: { font: "Amiri",halign: "center"},
      margin: {
        top: 35,
      },
      headStyles: { halign: "center", fillColor : [211, 24, 24]},
    });
    doc.save("Citizen-Lands.pdf");
  };

  return (
    <Dialog maxWidth={"xl"} onClose={handleClose} open={open}>
      <InsideDivTitle>
        <h1>قائمة أراضي المواطن</h1>
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
