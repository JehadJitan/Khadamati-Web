import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  ButtomTitleLine,
  StyledTable,
  TitleDiv,
} from "../../Components/Divs/StyledDivs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { editCovidStatus, getCitizens } from "../../shared/api";
import jsPDF from "jspdf";
import "jspdf-autotable";
import webFavicon from "../../Components/Fonts/webLogo4.png";
import Amiri from "../../Components/Fonts/Amiri-normal";
import PrintIcon from "@mui/icons-material/Print";

const columns = [
  {
    field: "name",
    headerName: "اسم المواطن",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 250,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "gender",
    headerName: "الجنس",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "identity_id",
    headerName: "رقم الهوية",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "رقم الهاتف",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "covidStatus",
    headerName: "الحالة",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
];

export default function CovidStatus() {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getCitizens({})
      .then((res) => {
        const data1 = [];
        res.data.data.map((citizen) => {
          data1.push(citizen);
        });
        setData([
          ...data1.map(({ id, ...res }) => ({
            ...res,
            userId: id,
            id: res._id ?? id,
          })),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rows, submitted]);

  const [selected, setSelected] = useState(false);

  function mightbe() {
    if (selected) {
      editCovidStatus({ citizenId: id, covidStatus: "مخالط" });
      setSelected(false);
      setSubmitted(!submitted);
    } else {
      console.log("Select row");
    }
  }
  function negative() {
    if (selected) {
      editCovidStatus({ citizenId: id, covidStatus: "سليم" });
      setSelected(false);
      setSubmitted(!submitted);
    } else {
      console.log("Select row");
    }
  }
  const positive = () => {
    if (selected) {
      editCovidStatus({ citizenId: id, covidStatus: "مصاب" });
      setSelected(false);
    } else {
      console.log("Select row");
    }
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.rect(5, 5, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 10, 'S');
    doc.setFont("Amiri", "normal");
    doc.setTextColor(211,24,24);
    doc.setFontSize(20);
    doc.text(200, 20, "في فلسطين COVID-19 نتيجة فاحصين", "right");
    doc.addImage(webFavicon, 'PNG', 10, 12, 40, 13);
    console.log(data[0].id);
    console.log(data);
    doc.autoTable({
      head: [
        [
          "الحالة",
          "رقم الهاتف",
          "رقم الهوية",
          "الجنس",
          "إسم المواطن",
        ],
      ],
      body: [
        [
          data[0].covidStatus,
          data[0].phone,
          data[0].identity_id,
          data[0].gender,
          data[0].name,
        ],
        [
          data[1].covidStatus,
          data[1].phone,
          data[1].identity_id,
          data[1].gender,
          data[1].name,
        ],
      ],
      // body: data.phone,
      styles: { font: "Amiri",halign: "center"},
      margin: {
        top: 35,
      },
      headStyles: { halign: "center", fillColor : [211, 24, 24]},
    });
    doc.save("Covid-Results.pdf");
  };

  return (
    <>
      <TitleDiv>
        <ButtomTitleLine>
          <h1>في فلسطين COVID-19 نتيجة فاحصين</h1>
        </ButtomTitleLine>
      </TitleDiv>
      <StyledTable dir="rtl">
        <div style={{ height: 410, width: "100%" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(selected) => {
              setSelected(true);
              setId(selected[0]);
            }}
          />
        </div>
        <Stack direction="row" style={{ "margin-top": "20px" }}>
          <Button
            onClick={positive}
            variant="contained"
            color="error"
            style={{ "margin-left": "25px", "font-family": "Almarai" }}
          >
            مصاب
          </Button>
          <Button
            onClick={mightbe}
            variant="contained"
            color="warning"
            style={{ "margin-left": "25px", "font-family": "Almarai" }}
          >
            مخالط
          </Button>
          <Button
            onClick={negative}
            variant="contained"
            color="success"
            style={{ "margin-left": "25px", "font-family": "Almarai" }}
          >
            سليم
          </Button>
          <PrintIcon
            onClick={downloadPdf}
            style={{ marginTop: "7px" }}
          ></PrintIcon>
        </Stack>
      </StyledTable>
    </>
  );
}
