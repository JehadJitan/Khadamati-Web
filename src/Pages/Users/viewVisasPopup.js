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
        console.log(res);
        console.log(res.data.data);
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
            id: res.citizenId ?? citizenId,
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
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
