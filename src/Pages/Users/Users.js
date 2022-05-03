import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  ButtomTitleLine,
  StyledTable,
  TitleDiv,
} from "../../Components/Divs/StyledDivs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { editStatus, getCitizens } from "../../shared/api";
import ViewAccountPopUp from "./viewAccountPopup";
import ViewVisasPopUp from "./viewVisasPopup";

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
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "placeOfBirth",
    headerName: "مكان الولادة",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "motherName",
    headerName: "إسم الأم",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "birthDate",
    headerName: "تاريخ الميلاد",
    width: 120,
    align: "center",
    type: "date",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "رقم الهاتف",
    width: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "الحالة",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
];

export default function Users() {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [open, setOpen] = React.useState(false);
  const [openVisas, setOpenVisas] = React.useState(false);

  useEffect(() => {
    getCitizens({})
      .then((res) => {
        const data1 = [];
        res.data.data.map((citizen) => {
          citizen.birthDate = citizen.birthDate.substring(4, 15);
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

  const handleRowSelection = (rowId) => {
    setSelected(true);
    const req = data.filter((row) => {
      return row.id === rowId[0];
    });
    setSelectedRow(req[0]);
    console.log(req[0]);
  };

  const viewVisas = () => {
    if (selected) {
      console.log("Should view visas");
      setOpenVisas(true);
      setSelected(false);
    } else {
      console.log("Select row to view visas for");
    }
  }

  function activateAccount() {
    if (selected) {
      console.log("Should be activated now");
      editStatus({ citizenId: id, status: "success" });
      setSelected(false);
      setSubmitted(!submitted);
    } else {
      console.log("Select row to activate");
    }
  }

  function deactivateAccount() {
    if (selected) {
      console.log("Should be deactivated now");
      editStatus({ citizenId: id, status: "deactivated" });
      setSelected(false);
      setSubmitted(!submitted);
    } else {
      console.log("Select row to deactivate");
    }
  }
  function deleteAccount() {
    if (selected) {
      console.log("Should be deleted now");

      setSelected(false);
    } else {
      console.log("Select row to delete");
    }
  }

  return (
    <>
      <TitleDiv>
        <ButtomTitleLine>
          <h1>مستخدمين تطبيق خدماتي</h1>
        </ButtomTitleLine>
      </TitleDiv>
      <StyledTable dir="rtl">
        <div style={{ height: 410, width: "100%" }}>
          <DataGrid
            selectedRow={selectedRow}
            rows={data}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(selected) => {
              setSelected(true);
              setId(selected[0]);
              handleRowSelection(selected);
            }}
          />
        </div>
        <Stack direction="row" style={{ marginTop: "20px" }}>
        <Button
            onClick={viewVisas}
            variant="contained"
            color="secondary"
            style={{ marginLeft: "25px", fontFamily: "Almarai" }}
          >
            عرض تأشيرات السفر
          </Button>
          <Button
            onClick={handleClickOpen}
            variant="contained"
            color="primary"
            style={{ marginLeft: "25px", fontFamily: "Almarai" }}
          >
            عرض حساب
          </Button>
          <Button
            onClick={deleteAccount}
            variant="contained"
            color="warning"
            style={{ marginLeft: "25px", fontFamily: "Almarai" }}
          >
            حذف حساب
          </Button>
          <Button
            onClick={deactivateAccount}
            variant="contained"
            color="error"
            style={{ marginLeft: "25px", fontFamily: "Almarai" }}
          >
            توقيف حساب
          </Button>
          <Button
            onClick={activateAccount}
            variant="contained"
            color="success"
            style={{ marginLeft: "25px", fontFamily: "Almarai" }}
          >
            تفعيل حساب
          </Button>
        </Stack>
      </StyledTable>
      <ViewAccountPopUp
        selectedRow={selectedRow}
        open={open}
        onClose={handleClose}
        fullName={selectedRow?.name}
        idNumber={selectedRow?.identity_id}
        emailAddress={selectedRow?.email}
        birthDate={selectedRow?.birthDate}
        motherName={selectedRow?.motherName}
        phoneNumber={selectedRow?.phone}
        gender={selectedRow?.gender}
        placeOfBirth={selectedRow?.placeOfBirth}
      />
      <ViewVisasPopUp
        selectedRow={selectedRow}
        open={openVisas}
        onClose={() => setOpenVisas(false)}
        idNumber={selectedRow?.identity_id}
        passportType={selectedRow?.passportType}
        goingDate={selectedRow?.goingDate}
        backDate={selectedRow?.backDate}
        destination={selectedRow?.destination}
      />
    </>
  );
}
