import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ChangeOwnershipPopUp from "./LandChangeOwnershipPopUp";

import {
  DataGridPro,
  GridActionsCellItem,
  GridToolbarContainer,
  useGridApiRef,
} from "@mui/x-data-grid-pro";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  editLand,
  addLandProperty,
  getLandBasedOnCitizenId,
  getAllLands,
} from "../../shared/api";
import { StyledEmployee } from "../../Components/Divs/StyledDivs";

function EditToolbar(props) {
  const { apiRef } = props;

  const handleClick = () => {
    const id = 0;
    apiRef.current.updateRows([{ id, isNew: true }]);
    apiRef.current.setRowMode(id, "edit");
    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      });

      apiRef.current.setCellFocus(id, "owner");
    });
  };

  return (
    <GridToolbarContainer>
      <Button
        variant="contained"
        sx={{
          ":hover": {
            bgcolor: "primary.main", // theme.palette.primary.main
            background: "#d31818",
          },
          flex: 1,
          background: "#344e41",
          fontFamily: "Almarai",
        }}
        color="primary"
        onClick={handleClick}
      >
        إضافة ملكية جديدة
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  apiRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
};

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [edited, setEdited] = useState(false);
  const [selected, setSelected] = useState(false);
  const [selectedRow, setSelectedRow] = useState();
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    getAllLands({})
      .then((res) => {
        const data1 = [];
        res.data.data.map((land) => {
          land.submitDate = land.submitDate.substring(0, 10);
          data1.push(land);
        });
        // setData(da)
        setData([
          ...data1.map(({ id, ...res }) => ({
            ...res,
            ownerId: id,
            id: res._id ?? id,
          })),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rows, open]);

  const apiRef = useGridApiRef();

  const handleChangeOwnership = () => {
    if (selected) {
      console.log("Should view request");
      console.log(data);
      setOpen(true);
      setSelected(false);
      setSubmitted(!submitted);
    } else {
      console.log("Select row to view");
    }
  };

  const handlePopUp = (value) => {
    setPopUp(value);
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

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleCellFocusOut = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, "edit");
    setEdited(true);
  };

  const handleSaveClick = (id) => async (event) => {
    event.stopPropagation();
    // Wait for the validation to run
    const isValid = await apiRef.current.commitRowChange(id);
    if (isValid) {
      apiRef.current.setRowMode(id, "view");
      const row = apiRef.current.getRow(id);
      const land = {
        _id: row.id,
        owner: row.owner,
        id: row.ownerId,
        address: row.address,
        hodId: row.hodId,
        pieceId: row.pieceId,
        totalArea: row.totalArea,
        submitDate: row.submitDate,
      };
      if (edited) {
        try {
          await editLand(land)
            .then((res) => {
              console.log(res);
              setEdited(false);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await addLandProperty(land)
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (err) {
          console.log(err);
        }
      }
      console.log(JSON.stringify(row));
      apiRef.current.updateRows([{ ...row, isNew: false }]);
    }
  };

  const handleDeleteClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.updateRows([{ id, _action: "delete" }]);
  };

  const handleCancelClick = (id) => (event) => {
    event.stopPropagation();
    apiRef.current.setRowMode(id, "view");

    const row = apiRef.current.getRow(id);
    if (row.isNew) {
      apiRef.current.updateRows([{ id, _action: "delete" }]);
    }
  };

  const columns = [
    {
      field: "owner",
      headerName: "الإسم الكامل",
      width: 220,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ownerId",
      headerName: "رقم الهوية",
      width: 120,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "address",
      headerName: "العنوان",
      width: 250,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "pieceId",
      headerName: "رقم القطعة",
      width: 120,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "hodId",
      headerName: "رقم الحوض",
      width: 120,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "totalArea",
      headerName: "المساحة بالمتر مربع",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "submitDate",
      headerName: "تاريخ التسجيل",
      width: 120,
      type: "date",
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "العملية",
      width: 100,
      align: "center",
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = apiRef.current.getRowMode(id) === "edit";

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <StyledEmployee dir="rtl">
      <Box
        sx={{
          height: 450,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
      >
        <DataGridPro
          sx={{
            width: "100%",
            marginTop: "10px",
          }}
          selectedRow={selectedRow}
          rows={data}
          columns={columns}
          apiRef={apiRef}
          editMode="row"
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          onCellFocusOut={handleCellFocusOut}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: { apiRef },
          }}
          onSelectionModelChange={(selected) => {
            setSelected(true);
            setId(selected[0]);
            handleRowSelection(selected);
          }}
        />
      </Box>
      <ListItem style={{ justifyContent: "center" }}>
        <Button
          onClick={handleChangeOwnership}
          variant="contained"
          color="error"
          style={{ "margin-left": "25px", "font-family": "Almarai" }}
        >
          تقديم طلب نقل ملكية
        </Button>
      </ListItem>
      <ChangeOwnershipPopUp
        selectedRow={selectedRow}
        handlePopUp={handlePopUp}
        open={open}
        onClose={handleClose}
        address={selectedRow?.address}
        hodId={selectedRow?.hodId}
        pieceId={selectedRow?.pieceId}
        owner={selectedRow?.owner}
        ownerId={selectedRow?.ownerId}
        totalArea={selectedRow?.totalArea}
      />
    </StyledEmployee>
  );
}
