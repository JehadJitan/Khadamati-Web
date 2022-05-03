import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  ButtomTitleLine,
  StyledTable,
  TitleDiv,
} from "../../Components/Divs/StyledDivs";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { getCitizens } from "../../shared/api";
import PopUp from "./ViewPropertiesPopUp";
import RealEstatePopUp from "./ViewRealEstatePopUp";

const columns = [
  {
    field: "name",
    headerName: "اسم المواطن",
    sortable: true,
    width: 250,
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
    headerName: "العنوان",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "رقم الهاتف",
    width: 120,
    align: "center",
    headerAlign: "center",
  },
];

export default function CitizensProperty() {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [open, setOpen] = React.useState(false);
  const [openRealEstate, setOpenRealEstate] = React.useState(false);

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

  const handleClickOpenLands = () => {
    if (selected) {
      console.log("Should open lands");
      console.log(data);
      setOpen(true);
      setSelected(false);
      setSubmitted(!submitted);
    } else {
      console.log("Select row to view");
    }
  };

  const handleClickOpenRealEstate = () => {
    if (selected) {
      console.log("Should open real estate");
      console.log(data);
      setOpenRealEstate(true);
      setSelected(false);
      setSubmitted(!submitted);
    } else {
      console.log("Select row to view");
    }
    console.log("hehehehehehe");
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

  return (
    <>
      <TitleDiv>
        <ButtomTitleLine>
          <h1>عرض ممتلكات المواطنين</h1>
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
            onClick={handleClickOpenLands}
            variant="contained"
            color="success"
            style={{ marginLeft: "25px", fontFamily: "Almarai" }}
          >
            عرض أراضي
          </Button>
          <Button
            onClick={handleClickOpenRealEstate}
            variant="contained"
            color="success"
            style={{ marginLeft: "25px", fontFamily: "Almarai" }}
          >
            عرض عقارات
          </Button>
        </Stack>
      </StyledTable>
      <PopUp selectedRow={selectedRow} open={open} onClose={handleClose}  ownerId={selectedRow?.ownerId}/>
      <RealEstatePopUp
        selectedRow={selectedRow}
        open={openRealEstate}
        onClose={() => setOpenRealEstate(false)}
        ownerId={selectedRow?.ownerId}
      />
    </>
  );
}
