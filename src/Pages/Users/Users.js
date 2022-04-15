import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ButtomTitleLine, StyledTable, TitleDiv } from '../../Components/Divs/StyledDivs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { getCitizens } from "../../shared/api";
import { useHistory } from "react-router-dom";

const columns = [
    {
        field: 'name',
        headerName: 'اسم المواطن',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 250,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'gender',
        headerName: 'الجنس',
        width: 100,
        align: 'center',
        headerAlign: 'center',
    },
    // {
    //     field: 'password',
    //     headerName: 'كلمة المرور',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 100,
    //     align: 'center',
    //     headerAlign: 'center',
    // },
    // {
    //     field: 'email',
    //     headerName: 'البريد الالكتروني',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 180,
    //     align: 'center',
    //     headerAlign: 'center',
    // },
    {
        field: 'identity_id',
        headerName: 'رقم الهوية',
        width: 150,
        align: 'center',
        headerAlign: 'center',
    },
    { field: 'placeOfBirth', headerName: 'مكان الولادة', width: 160, align: 'center', headerAlign: 'center', },
    { field: 'motherName', headerName: 'إسم الأم', width: 160, align: 'center', headerAlign: 'center', },
    {
        field: 'birthDate',
        headerName: 'تاريخ الميلاد',
        width: 200,
        align: 'center',
        type: 'date',
        headerAlign: 'center',
    },
    {
        field: 'phone',
        headerName: 'رقم الهاتف',
        width: 150,
        align: 'center',
        headerAlign: 'center',
    },
    { field: 'status', headerName: 'الحالة', width: 150, align: 'center', headerAlign: 'center', },
    // { field: 'image', headerName: 'صورة شخصيه', width: 160, align: 'center', headerAlign: 'center', },

];

export default function Users() {

    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getCitizens({})
            .then((res) => {
                // console.log(res.data.data);
                setData([...res.data.data.map(({ id, ...res }) => ({ ...res, userId: id, id: res._id ?? id }))]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [rows]);

    const [selected, setSelected] = useState(false);

    function activateAccount() {
        if (selected) {
            console.log("Should be activated now");
            setSelected(false);
        } else {
            console.log("Select row to activate");
        }
    }

    function deactivateAccount() {

        if (selected) {
            console.log("Should be deactivated now");
            setSelected(false);
        } else {
            console.log("Select row to deactivate");
        }
    }
    function deleteAccount() {
        if (selected) {
            console.log("Should be deleted now");
            setSelected(false);
        } else {
            console.log("Select row to delete");
        }
    }
    let history = useHistory();

    const showAccount = () => {
        if (selected) {
            history.push('/DB/userInfo');
            console.log("Should re-direct to another page now");
            setSelected(false);
        } else {
            console.log("Select row to re-direct");
        }
    }

    return (
        <>
            <TitleDiv>
                <ButtomTitleLine>
                    <h1>مستخدمين تطبيق خدماتي</h1>
                </ButtomTitleLine>
            </TitleDiv>
            <StyledTable dir="rtl">
                <div style={{ height: 490, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        // onSelectionChange={(newSelection) => {

                        //     console.log("yes");
                        // }}
                        // onSelectionModelChange={itm => console.log("yes")}
                        onSelectionModelChange={selected => setSelected(true)}
                    />
                </div>
                <Stack direction="row" style={{ 'margin-top': '20px' }}>
                    <Button onClick={showAccount} variant="contained" color="primary" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>عرض حساب</Button>
                    <Button onClick={deleteAccount} variant="contained" color="warning" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>حذف حساب</Button>
                    <Button onClick={deactivateAccount} variant="contained" color="error" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>توقيف حساب</Button>
                    <Button onClick={activateAccount} variant="contained" color="success" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>تفعيل حساب</Button>
                </Stack>
            </StyledTable>
        </>
    );
}