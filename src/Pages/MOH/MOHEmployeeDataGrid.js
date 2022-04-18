import CancelIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    DataGridPro, GridActionsCellItem, GridToolbarContainer, useGridApiRef
} from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { addEmployee, getEmployees, editEmployee } from "../../shared/api";
import { StyledEmployee } from '../../Components/Divs/StyledDivs';

function EditToolbar(props) {
    const { apiRef } = props;

    const handleClick = () => {
        const id = 0;
        const role = "MOH";
        apiRef.current.updateRows([{ id, isNew: true, role }]);
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
        getEmployees("MOH")
            .then((res) => {
                const data1 = []
                res.data.data.map((employee) => {
                    employee.birthDate = employee.birthDate.substring(0, 10)
                    data1.push(employee)
                })
                // console.log(res.data.data);
                setData([...data1.map(({ id, ...res }) => ({ ...res, userId: id, id: res._id ?? id }))]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [rows]);

    const apiRef = useGridApiRef();

    // const MOItotalEmployees = Object.keys(data).length;
    // console.log("Total Employees: ", MOItotalEmployees);

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
        const isValid = await apiRef.current.commitRowChange(id);
        if (isValid) {
            apiRef.current.setRowMode(id, "view");
            const row = apiRef.current.getRow(id);
            const employee = {
                _id: row.id,
                name: row.name,
                gender: row.gender,
                birthDate: row.birthDate,
                role: row.role,
                phone: row.phone,
                id: row.userId,
                email: row.email,
                password: row.password,
            };
            if (edited) {
                try {
                    await editEmployee(employee)
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
                    await addEmployee(employee)
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
            field: 'birthDate', headerName: 'تاريخ الميلاد', type: 'date', width: 150, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'userId', headerName: 'رقم الهوية', width: 150, editable: true, align: 'center',
            headerAlign: 'center'
        },
        {
            field: 'phone', headerName: 'رقم الهاتف', width: 150, editable: true, align: 'center',
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
        </StyledEmployee>
    );
}