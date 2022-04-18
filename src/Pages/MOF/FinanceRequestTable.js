import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ButtomTitleLine, StyledTable, TitleDiv } from '../../Components/Divs/StyledDivs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { getRequest } from "../../shared/api";


const columns = [
    // { field: 'id', headerName: 'رقم الطلب', width: 120, align: 'center' },
    // {
    //     field: 'name',
    //     headerName: 'اسم المواطن',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     align: 'center',
    //     headerAlign: 'center',
    //     // valueGetter: (params) =>
    //     //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
    {
        field: 'citizenId',
        headerName: 'رقم الهوية',
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'service',
        headerName: 'الخدمة',
        width: 300,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'date',
        headerName: 'تاريخ الطلب',
        type: 'date',
        width: 200,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'status', headerName: 'الحالة', width: 160, align: 'center',
        headerAlign: 'center',
    },
];

export default function FinanceRequestTable() {

    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getRequest("MOF")
            .then((res) => {
                const data1 = []
                res.map((request) => {
                    request.date = request.date.substring(0, 10);
                    data1.push(request);
                })
                // setData([...res.data.data.map(({ id, ...res }) => ({ ...res, serviceId: id, id: res._id ?? id }))]);
                setData([...data1.map(({ id, ...res }) => ({ ...res, userId: id, id: res._id ?? id }))]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [rows]);

    const [selected, setSelected] = useState(false);

    return (
        <>
            <TitleDiv>
                <ButtomTitleLine>
                    <h1>طلبات وزارة المالية الفلسطينية</h1>
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
                    />
                </div>
                <Stack direction="row" style={{ 'margin-top': '20px' }}>
                    <Button variant="contained" color="error" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>موافقة الطلب</Button>
                    <Button variant="contained" color="success" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>رفض الطلب</Button>
                </Stack>
            </StyledTable>
        </>
    );
}