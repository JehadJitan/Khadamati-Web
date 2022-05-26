import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  TitleDiv,
  StyledTable,
  InsideDivTitle,
  ButtomTitleLine,
} from "../../Components/Divs/StyledDivs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  getCitizen,
  getNewImage,
  getRequest2,
  getCurrentImage,
  acceptNewIdenty,
  activatePassport,
} from "../../shared/api";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import styled from "styled-components";
import jsPDF from "jspdf";
import "jspdf-autotable";
import webFavicon from "../../Components/Fonts/webLogo4.png";
import Amiri from "../../Components/Fonts/Amiri-normal";
import PrintIcon from "@mui/icons-material/Print";
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Column = styled.div`
  padding: 10px;
`;

const columns = [
  {
    field: "citizenId",
    headerName: "رقم الهوية",
    width: 160,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "service",
    headerName: "الخدمة",
    width: 300,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "تاريخ الطلب",
    type: "date",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "الحالة",
    width: 160,
    align: "center",
    headerAlign: "center",
  },
];

function SimpleDialog(props) {
  // const { onClose, selectedValue, open, selectedRow } = props;
  const { onClose, selectedValue, open, selectedRow, handlePopUp } = props;
  console.log(selectedRow);
  const [currentImage, setCurrentImage] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [user, setUser] = useState("");

  const handleClose = () => {
    onClose(selectedValue);
  };

  useEffect(() => {
    getCurrentImage(selectedRow?.citizenId)
      .then((res) => {
        setCurrentImage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getNewImage(selectedRow?.citizenId)
      .then((res) => {
        setNewImage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getCitizen(selectedRow?.citizenId)
      .then((res) => {
        console.log(res);
        setUser(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedRow]);

  const handleClick = async (e) => {
    e.preventDefault();
    if (selectedRow.service === "تجديد هوية فلسطينية") {
      await acceptNewIdenty({selectedRow, status: e.target.name })
        .then((res) => {
          console.log(selectedRow);
          if (res.data.success) {
            alert("Done");
            handlePopUp(true);
            handleClose();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (selectedRow.service === "إصدار جواز سفر فلسطيني") {
      await activatePassport({ selectedRow, status: e.target.name })
        .then((res) => {
          if (res.data.success) {
            alert("Done");
            handlePopUp(true);
            handleClose();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Dialog maxWidth={"xl"} onClose={handleClose} open={open}>
      <InsideDivTitle>
        <h1>تفاصيل طلب المواطن</h1>
      </InsideDivTitle>

      <Row
        style={{
          justifyContent: "right",
          marginRight: "50px",
          marginTop: "10px",
        }}
      >
        {(selectedRow?.service == "تجديد هوية فلسطينية" ||
          selectedRow?.service == "طلب فقدان هوية") && (
          <>
            <input
              size="30"
              type="text"
              value={selectedRow?.service}
              readOnly
              style={{ direction: "rtl", marginLeft: "20px" }}
            ></input>
            <label style={{ marginLeft: "20px" }}>:تفاصيل الخدمة</label>
            <input
              size="15"
              type="text"
              value={selectedRow?.citizenId}
              readOnly
              style={{ direction: "rtl", marginLeft: "20px" }}
            ></input>
            <label style={{ marginLeft: "20px" }}>:رقم الهوية</label>
          </>
        )}
      </Row>
      {(selectedRow?.service == "إصدار جواز سفر فلسطيني" ||
        selectedRow?.service == "تجديد جواز سفر فلسطيني") && (
        <>
          <Row
            style={{
              justifyContent: "right",
              marginRight: "50px",
              marginTop: "10px",
            }}
          >
            <input
              size="30"
              type="text"
              value={selectedRow?.service}
              readOnly
              style={{ direction: "rtl", marginLeft: "20px" }}
            ></input>
            <label style={{ marginLeft: "20px" }}>:تفاصيل الخدمة</label>
            <input
              size="15"
              type="text"
              value={selectedRow?.citizenId}
              readOnly
              style={{ direction: "rtl", marginLeft: "20px" }}
            ></input>
            <label style={{ marginLeft: "20px" }}>:رقم الهوية</label>
          </Row>
          <Row
            style={{
              justifyContent: "right",
              marginRight: "50px",
              marginTop: "20px",
            }}
          >
            <input
              size="19"
              type="text"
              value={selectedRow?.profession}
              readOnly
              // value={user?.profession}
              style={{ direction: "rtl", marginLeft: "20px" }}
            ></input>
            <lable style={{ marginLeft: "20px" }}>:المهنة</lable>
          </Row>
        </>
      )}
      <List sx={{ height: 500, width: 900 }}>
        <ListItem style={{ justifyContent: "center" }}>
          <Row>
            {newImage!==null && (
              <Column>
              <h3 style={{ textAlign: "center", marginBottom: 15 }}>
                الصورة الشخصية الجديدة
              </h3>
              <img
                alt=""
                style={{ width: 300, height: 300 }}
                src={`data:image/jpeg;base64,${newImage}`}
              ></img>
            </Column>
            )}
            <Column>
              <h3 style={{ textAlign: "center", marginBottom: 15 }}>
                الصورة الشخصية القديمة
              </h3>
              <img
                alt=""
                style={{ width: 300, height: 300 }}
                src={`data:image/jpeg;base64,${currentImage}`}
              ></img>
            </Column>
          </Row>
        </ListItem>
        <ListItem style={{ justifyContent: "center" }}>
        {(selectedRow?.status == "pending" &&
           <>
           <Button
            variant="contained"
            color="success"
            style={{ marginRight: "50px", fontFamily: "Almarai" }}
            onClick={handleClick}
            name="accepted"
          >
            موافقة الطلب
          </Button>
          <Button
            variant="contained"
            color="error"
            style={{ marginRight: "15px", fontFamily: "Almarai" }}
            onClick={handleClick}
            name="refused"
          >
            رفض الطلب
          </Button>
          </>)}
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function InteriorRequestTable() {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [popUp, setPopUp] = useState(false);

  //POPUP STUFF

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (selected) {
      console.log("Should view request");
      setOpen(true);
      setSelected(false);
    } else {
      console.log("Select row to view");
    }
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const handlePopUp = (value) => {
    setPopUp(value);
  };

  useEffect(() => {
    getRequest2("MOI")
      .then((res) => {
        const data1 = [];
        res.map((request) => {
          request.date = request.date.substring(0, 10);
          data1.push(request);
        });
        // setData([...res.data.data.map(({ id, ...res }) => ({ ...res, serviceId: id, id: res._id ?? id }))]);
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
  }, [rows, popUp]);

  const [selected, setSelected] = useState(false);
  const [selectedRow, setSelectedRow] = useState();

  const acceptCurrentRequest = () => {
    if (selected) {
      console.log("Should accept request");
      setSelected(false);
    } else {
      console.log("Select row to accept");
    }
  };
  const denyCurrentRequest = () => {
    if (selected) {
      console.log("Should deny request");
      setSelected(false);
    } else {
      console.log("Select row to deny");
    }
  };
  const handleRowSelection = (rowId) => {
    setSelected(true);
    const req = data.filter((row) => {
      return row.id === rowId[0];
    });
    setSelectedRow(req[0]);
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
    doc.text(200, 20, "طلبات وزارة الداخلية", "right");
    doc.addImage(webFavicon, "PNG", 10, 12, 40, 13);
    console.log(data[0].id);
    console.log(data);
    doc.autoTable({
      head: [["الحالة", "تاريخ الطلب", "الخدمة", "رقم الهوية"]],
      body: [
        [data[0].status, data[0].date, data[0].service, data[0].citizenId],
      ],
      // body: data.phone,
      styles: { font: "Amiri", halign: "center" },
      margin: {
        top: 35,
      },
      headStyles: { halign: "center", fillColor: [211, 24, 24] },
    });
    doc.save("MOI-Requests.pdf");
  };

  return (
    <>
      <TitleDiv>
        <ButtomTitleLine>
          <h1>طلبات وزارة الداخلية الفلسطينية</h1>
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
            // onSelectionModelChange={selected => { setSelected(true); setRowId(selected); }}
            onSelectionModelChange={(row) => handleRowSelection(row)}
          />
        </div>
        <Stack direction="row" style={{ marginTop: "20px" }}>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="warning"
            style={{ marginLeft: "25px", fontFamily: "Almarai" }}
          >
            عرض الطلب
          </Button>
          <PrintIcon
            onClick={downloadPdf}
            style={{ marginTop: "7px" }}
          ></PrintIcon>
          <SimpleDialog
            selectedRow={selectedRow}
            open={open}
            onClose={handleClose}
            handlePopUp={handlePopUp}
          />
        </Stack>
      </StyledTable>
    </>
  );
}
