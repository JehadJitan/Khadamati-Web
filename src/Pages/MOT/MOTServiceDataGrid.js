import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    randomCreatedDate, randomEmail, randomId, randomPhoneNumber, randomTraderName,
    randomUpdatedDate
} from '@mui/x-data-grid-generator';
import {
    DataGridPro, GridActionsCellItem, GridToolbarContainer, useGridApiRef
} from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';
import * as React from 'react';
import { StyledService } from '../../Components/Divs/StyledDivs';

const rows = [

    {
        id: "1672",
        service: "إصدار رخصة سياقة",
        serviceDes: "تتيح للمواطن تقديم طلب إصدار رخصة سياقة",
        active: "نعم",
        dateStarted: randomCreatedDate(),
        dateEnded: "-",
    },
    {
        id: "1673",
        service: "طلب فقدان رخصة سياقة",
        serviceDes: "تتيح للمواطن تقديم طلب فقدان رخصته الشخصية",
        active: "نعم",
        dateStarted: randomCreatedDate(),
        dateEnded: randomUpdatedDate(),
    },
    {
        id: "1675",
        service: "دفع مخالفات السير",
        serviceDes: "تتيح للمواطن تقديم طلب دفع المخالفات المتراكمة",
        active: "نعم",
        dateStarted: randomCreatedDate(),
        dateEnded: randomUpdatedDate(),
    },
    {
        id: "1676",
        service: "تسجيل لإمتحان تؤوريا",
        serviceDes: "تتيح للمواطن تقديم طلب تقديم إمتحان التؤوريا",
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
            } color="primary" onClick={handleClick}>
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
            field: 'id', headerName: 'رقم الخدمة', width: 100, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'service', headerName: 'الخدمة', width: 200, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'serviceDes', headerName: 'تفاصيل الخدمة', width: 400, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'serviceDes', headerName: 'تفاصيل الخدمة', width: 400, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'active', headerName: 'التفعيل', width: 100, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'dateStarted',
            headerName: 'تاريخ الإنشاء',
            type: 'date',
            width: 150,
            editable: true,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'dateEnded',
            headerName: 'تاريخ الإنتهاء',
            type: 'date',
            width: 150,
            editable: true,
            align: 'center',
            headerAlign: 'center',
        },

        {
            field: 'actions',
            type: 'actions',
            headerName: 'العملية',
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
        </StyledService>
    );
}