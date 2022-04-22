import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { randomId } from "@mui/x-data-grid-generator";
import {
  DataGridPro,
  GridActionsCellItem,
  GridToolbarContainer,
  useGridApiRef,
} from "@mui/x-data-grid-pro";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { StyledService } from "../../Components/Divs/StyledDivs";
import { addService, editService, getService } from "../../shared/api";

function EditToolbar(props) {
  const { apiRef } = props;

  const handleClick = () => {
    const type = "MOP";
    const id = randomId();
    apiRef.current.updateRows([{ id, isNew: true, type }]);
    apiRef.current.setRowMode(id, "edit");
    // Wait for the grid to render with the new row
    setTimeout(() => {
      apiRef.current.scrollToIndexes({
        rowIndex: apiRef.current.getRowsCount() - 1,
      });

      apiRef.current.setCellFocus(id, "name");
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
        إضافة خدمة جديدة
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

  useEffect(() => {
    getService("MOP")
      .then((res) => {
        const data1 = [];
        res.data.data.map((service) => {
          service.startDate = service.startDate.substring(0, 10);
          data1.push(service);
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

  const apiRef = useGridApiRef();

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
    const row = apiRef.current.getRow(id);
    console.log({ row });
    const isValid = await apiRef.current.commitRowChange(id);
    if (isValid) {
      const row2ND = apiRef.current.getRow(id);
      console.log({ row2ND });
      apiRef.current.setRowMode(id, "view");
      const row = apiRef.current.getRow(id);
      console.log({ row });
      // apiRef.current.updateRows([{ id: 0, _action: "delete" }])
      const service = {
        _id: row.id,
        name: row.name,
        id: row.serviceId,
        startDate: row.startDate,
        endDate: row.endDate,
        activated: row.activated,
        type: row.type,
        ministryName: row.ministryName,
        description: row.description,
        price: row.price,
      };
      if (edited) {
        try {
          await editService(service)
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
          await addService(service)
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
      field: "serviceId",
      headerName: "رقم الخدمة",
      width: 100,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "الخدمة",
      width: 200,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "type",
      headerName: "الوزارة",
      width: 80,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "تفاصيل الخدمة",
      width: 370,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "السعر",
      width: 80,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "activated",
      headerName: "التفعيل",
      width: 100,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "startDate",
      headerName: "تاريخ الإنشاء",
      type: "date",
      width: 120,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "endDate",
      headerName: "تاريخ الإنتهاء",
      type: "date",
      width: 120,
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
    <StyledService dir="rtl">
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
        />
      </Box>
    </StyledService>
  );
}
