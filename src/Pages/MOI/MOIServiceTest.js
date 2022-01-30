import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { fontWeight } from '@mui/system';
import {
    randomCreatedDate, randomEmail, randomId, randomPhoneNumber, randomTraderName,
    randomUpdatedDate
} from '@mui/x-data-grid-generator';
import {
    DataGridPro, GridActionsCellItem, GridToolbarContainer, useGridApiRef
} from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';
import * as React from 'react';
import { FcLeft } from 'react-icons/fc';
import styled from 'styled-components';


const ServiceDiv = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:center;
    margin:auto;
    width:100%;
    height:550px;
    // border: 4px solid #d31818;
    margin-top:30px;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 5px 10px 18px #888888;
    background-color: #ffffff;
`;

const rows = [

    {
        id: "1672",
        service: "إصدار هوية مواطن",
        serviceDes: "تتيح للمواطن تقديم طلب إصدار هوية جديدة",
        active: "نعم",
        dateStarted: randomCreatedDate(),
        dateEnded: "-",
    },
    {
        id: "1673",
        service: "تجديد رخصة سياقة",
        serviceDes: "تتيح للمواطن تقديم طلب تجديد رخصة سياقة",
        active: "نعم",
        dateStarted: randomCreatedDate(),
        dateEnded: randomUpdatedDate(),
    },
    {
        id: "1675",
        service: "تجديد رخصة سياقة",
        serviceDes: "تتيح للمواطن تقديم طلب تجديد رخصة سياقة",
        active: "نعم",
        dateStarted: randomCreatedDate(),
        dateEnded: randomUpdatedDate(),
    },
    {
        id: "1676",
        service: "إصدار شهادة ميلاد جديدة",
        serviceDes: "تتيح للمواطن تقديم طلب إصدار شهادة ميلاد جديدة",
        active: "لا",
        dateStarted: "-",
        dateEnded: "-",
    },
];

function EditToolbar(props) {
    const { apiRef } = props;

    const handleClick = () => {
        const id = randomId();
        apiRef.current.updateRows([{ id, isNew: true }]);
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
            } color="primary" endIcon={<AddIcon />} onClick={handleClick}>
                إضافة خدمة جديدة
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
    };

    const handleSaveClick = (id) => async (event) => {
        event.stopPropagation();
        // Wait for the validation to run
        const isValid = await apiRef.current.commitRowChange(id);
        if (isValid) {
            apiRef.current.setRowMode(id, 'view');
            const row = apiRef.current.getRow(id);
            apiRef.current.updateRows([{ ...row, isNew: false }]);
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
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 200,
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
        {
            field: 'dateEnded',
            headerName: 'تاريخ الإنتهاء',
            type: 'date',
            width: 200,
            editable: true,
        },
        {
            field: 'dateStarted',
            headerName: 'تاريخ الإنشاء',
            type: 'date',
            width: 200,
            editable: true,
        },
        { field: 'active', headerName: 'التفعيل', width: 100, editable: true },
        { field: 'serviceDes', headerName: 'تفاصيل الخدمة', width: 300, editable: true },
        { field: 'service', headerName: 'الخدمة', width: 200, editable: true },
        { field: 'id', headerName: 'رقم الخدمة', width: 100, editable: true },
    ];

    return (
        <ServiceDiv>
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
                    rows={rows}
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
        </ServiceDiv>
    );
}