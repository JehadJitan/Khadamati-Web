import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { InsideDivTitle } from "../../Components/Divs/StyledDivs";
import { DataGrid } from "@mui/x-data-grid";
import { StyledTable } from "../../Components/Divs/StyledDivs";
import { getCitizenRealEstate } from "../../shared/api";

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
    field: "type",
    headerName: "نوع العقار",
    sortable: true,
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "typeName",
    headerName: "اسم العقار",
    sortable: true,
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "typeNum",
    headerName: "رقم العقار",
    sortable: true,
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "totalArea",
    headerName: "المساحة",
    sortable: true,
    width: 100,
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
  const [citizenId, setCitizenId] = useState([]);

  useEffect(() => {
    getCitizenRealEstate(selectedRow?.id)
    .then((res) => {
        const data1 = [];
        res.data.data.map((realEstate) => {
          realEstate.submitDate = realEstate.submitDate.substring(0,10);
          data1.push(realEstate);
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

  return (
    <Dialog maxWidth={"xl"} onClose={handleClose} open={open}>
      <InsideDivTitle>
        <h1>قائمة عقارات المواطن</h1>
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
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
