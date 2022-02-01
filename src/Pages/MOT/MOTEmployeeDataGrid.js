import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
    randomCreatedDate, randomEmail, randomId, randomPhoneNumber, randomTraderName,
    randomUpdatedDate
} from '@mui/x-data-grid-generator';
import {
    DataGridPro, GridActionsCellItem, GridToolbarContainer, useGridApiRef
} from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';
import * as React from 'react';

import { StyledEmployee } from '../../Components/Divs/StyledDivs';

// const Title = styled.h2`
// margin-top:10px;
//     // color:#d31818;
//     // margin-bottom:30px;
// `;

const rows = [

    {
        id: "1171858",
        name: "جهاد الجيطان",
        age: 25,
        gender: "ذكر",
        role: "محاسب",
        password: "test123",
        phone: randomPhoneNumber(),
        email: randomEmail(),
        // dateCreated: randomCreatedDate(),
        // lastLogin: randomUpdatedDate(),
    },
    {
        id: "1173019",
        name: "طارق خوري",
        age: 30,
        gender: "ذكر",
        role: "مساعد إداري",
        password: "admin@123",
        phone: randomPhoneNumber(),
        email: randomEmail(),
        // dateCreated: randomCreatedDate(),
        // lastLogin: randomUpdatedDate(),
    },
    {
        id: "1156495",
        name: "عيسى سلامة",
        age: 25,
        gender: "ذكر",
        role: "المبيعات",
        password: "sales@123",
        phone: randomPhoneNumber(),
        email: randomEmail(),
        // dateCreated: randomCreatedDate(),
        // lastLogin: randomUpdatedDate(),
    },
    {
        id: "1165240",
        name: "ميار بطراوي",
        age: 43,
        gender: "انثى",
        role: "المشتريات",
        password: "role@123",
        phone: randomPhoneNumber(),
        email: randomEmail(),
        // dateCreated: randomCreatedDate(),
        // lastLogin: randomUpdatedDate(),
    },
    {
        id: "1123597",
        name: "ديما يونس",
        age: 25,
        gender: "انثى",
        role: "علاقات عامة",
        password: "pr@123",
        phone: randomPhoneNumber(),
        email: randomEmail(),
        // dateCreated: randomCreatedDate(),
        // lastLogin: randomUpdatedDate(),
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
                إضافة موظف جديد
            </Button>
            {/* <Button variant="contained" sx={{
                ':hover': {
                    bgcolor: 'primary.main', // theme.palette.primary.main
                    background: '#d31818',
                }, flex: 1, background: '#344e41', fontFamily: 'Almarai'
            }
            } color="primary" onClick={handleClick}>
                إبحث
            </Button> */}
            {/* <input style={{ "color": "red" }} placeholder="اسم الموظف" label="Multiline Placeholder"></input>
            <label> : البحث عن موظف</label> */}
            {/* <input type="text" id="myInput" placeholder="Search for names.." title="Type in a name"></input> */}
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
            field: 'name', headerName: 'الإسم الكامل', width: 230, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'gender', headerName: 'الجنس', width: 100, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'age', headerName: 'العمر', type: 'number', width: 100, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'id', headerName: 'رقم الهوية', width: 150, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'phone', headerName: 'رقم الهاتف', width: 170, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'role', headerName: 'الوظيفه', width: 150, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'email', headerName: 'البريد الالكتروني', width: 170, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'password', headerName: 'كلمة المرور', width: 150, editable: true, align: 'center',
            headerAlign: 'center'
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
        }
    ];

    return (
        <StyledEmployee dir="rtl">
            {/* <Title>لائحة الموظفين</Title> */}
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
        </StyledEmployee>
    );
}