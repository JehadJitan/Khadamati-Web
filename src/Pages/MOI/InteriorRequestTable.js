import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  ButtomTitleLine,
  StyledTable,
  TitleDiv,
  InsideDivTitle,
} from "../../Components/Divs/StyledDivs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { getRequest2, getCurrentImage, getNewImage } from "../../shared/api";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import p1 from "./p1.jpg";
import p2 from "./p2.jpg";
import styled from "styled-components";

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
  const { onClose, selectedValue, open, selectedRow } = props;
  console.log(selectedRow);
  const [currentImage, setCurrentImage] = useState("");
  const [newImage, setNewImage] = useState("");

  const handleClose = () => {
    onClose(selectedValue);
  };

  useEffect(() => {
    getCurrentImage(selectedRow.citizenId)
      .then((res) => {
        setCurrentImage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getNewImage(selectedRow.citizenId)
      .then((res) => {
        setNewImage(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              size="30"
              type="text"
              readOnly
              style={{ direction: "rtl", marginLeft: "20px" }}
            ></input>
            <lable style={{ marginLeft: "20px" }}>:المهنة</lable>
          </Row>
        </>
      )}
      <List sx={{ height: 500, width: 900 }}>
        <ListItem style={{ justifyContent: "center" }}>
          <Row>
            <Column>
              <h3 style={{ textAlign: "center", marginBottom: 15 }}>
                الصورة الشخصية الجديدة
              </h3>
              <img
                alt=""
                style={{ width: 300, height: 300 }}
                src={`data:image/jpeg;base64,${currentImage}`}
              ></img>
            </Column>
            {console.log(currentImage)}
            <Column>
              <h3 style={{ textAlign: "center", marginBottom: 15 }}>
                الصورة الشخصية القديمة
              </h3>
              <img
                alt=""
                style={{ width: 300, height: 300 }}
                src={`data:image/jpeg;base64,${newImage}`}
              ></img>
            </Column>
          </Row>
        </ListItem>
        <ListItem style={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            color="success"
            style={{ marginRight: "50px", fontFamily: "Almarai" }}
          >
            موافقة الطلب
          </Button>
          <Button
            variant="contained"
            color="error"
            style={{ marginRight: "15px", fontFamily: "Almarai" }}
          >
            رفض الطلب
          </Button>
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

  //POPUP STUFF

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if (selected) {
      console.log("Should view request");
      console.log(data);
      setOpen(true);
      setSelected(false);
    } else {
      console.log("Select row to view");
    }
  };

  const handleClose = (value) => {
    setOpen(false);
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
  }, [rows]);

  const [selected, setSelected] = useState(false);
  const [rowId, setRowId] = useState();
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

  return (
    <>
      <TitleDiv>
        <ButtomTitleLine>
          <h1>طلبات وزارة الداخلية الفلسطينية</h1>
        </ButtomTitleLine>
      </TitleDiv>
      <StyledTable dir="rtl">
        <div style={{ height: 490, width: "100%" }}>
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
        <Stack direction="row" style={{ "margin-top": "20px" }}>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="warning"
            style={{ "margin-left": "25px", "font-family": "Almarai" }}
          >
            عرض الطلب
          </Button>
          <SimpleDialog
            selectedRow={selectedRow}
            open={open}
            onClose={handleClose}
          />
        </Stack>
      </StyledTable>
    </>
  );
}
