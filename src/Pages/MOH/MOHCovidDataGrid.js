import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    randomId
} from '@mui/x-data-grid-generator';
import {
    DataGridPro, GridActionsCellItem, GridToolbarContainer, useGridApiRef
} from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { StyledService } from '../../Components/Divs/StyledDivs';
import { addService, editService, getService } from '../../shared/api';

export const MOIServiceRowLength = 10;

function EditToolbar(props) {
    const { apiRef } = props;

    const handleClick = () => {
        const type = "MOH";
        const id = randomId();
        apiRef.current.updateRows([{ id, isNew: true, type }]);
        apiRef.current.setRowMode(id, 'edit');
        // Wait for the grid to render with the new row
        setTimeout(() => {
            apiRef.current.scrollToIndexes({
                rowIndex: apiRef.current.getRowsCount() - 1,
            });

            apiRef.current.setCellFocus(id, 'name');
        });
    };

    return (
        <GridToolbarContainer >
            <Button variant="contained" sx={{
                ':hover': {
                    bgcolor: 'primary.main', // theme.palette.primary.main
                    background: '#d31818',
                }, flex: 1, background: '#344e41', fontFamily: 'Almarai'
            }
            } color="primary" onClick={handleClick}>
                إضافة مواطن جديد
            </Button>
        </GridToolbarContainer >
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
        getService("MOH")
            .then((res) => {
                // console.log(res.data.data);
                setData([...res.data.data.map(({ id, ...res }) => ({ ...res, serviceId: id, id: res._id ?? id }))]);
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
        apiRef.current.setRowMode(id, 'edit');
        setEdited(true);
    };

    const handleSaveClick = (id) => async (event) => {
        event.stopPropagation();
        // Wait for the validation to run
        const row = apiRef.current.getRow(id);
        console.log({ row })
        const isValid = await apiRef.current.commitRowChange(id);
        if (isValid) {
            const row2ND = apiRef.current.getRow(id);
            console.log({ row2ND })
            apiRef.current.setRowMode(id, "view");
            const row = apiRef.current.getRow(id);
            console.log({ row })
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
            // console.log(JSON.stringify(row));
            // apiRef.current.updateRows([{ ...row, isNew: false }]);
        }
    };

    const handleDeleteClick = (id) => (event) => {
        event.stopPropagation();
        apiRef.current.updateRows([{ id, _action: 'delete' }]);
    };

    const handleCancelClick = (id) => (event) => {
        event.stopPropagation();
        apiRef.current.setRowMode(id, 'view');

        const row = apiRef.current.getRow(id);
        if (row.isNew) {
            apiRef.current.updateRows([{ id, _action: 'delete' }]);
        }
    };

    const columns = [
        {
            field: 'userId', headerName: 'رقم الهوية', width: 150, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'citizenName', headerName: 'اسم المواطن', width: 250, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'vaccineType', headerName: 'نوع الجرعة', width: 150, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'vaccineNumber', headerName: 'رقم الجرعة', width: 100, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'vaccineDate',
            headerName: 'تاريخ الجرعة',
            type: 'date',
            width: 200,
            editable: true,
            align: 'center',
            headerAlign: 'center',
        },

        {
            field: 'actions',
            type: 'actions',
            headerName: 'العملية',
            width: 100,
            align: 'center',
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const isInEditMode = apiRef.current.getRowMode(id) === 'edit';

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
                    height: 500,
                    width: '100%',
                    '& .actions': {
                        color: 'text.secondary',
                    },
                    '& .textPrimary': {
                        color: 'text.primary',
                    },
                }}
            >
                <DataGridPro
                    sx={{
                        width: '100%',
                        marginTop: '10px',
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