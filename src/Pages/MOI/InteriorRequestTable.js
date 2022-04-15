import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ButtomTitleLine, StyledTable, TitleDiv } from '../../Components/Divs/StyledDivs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { getRequest } from "../../shared/api";


const columns = [
    { field: 'id', headerName: 'رقم الطلب', width: 120, align: 'center' },
    {
        field: 'fullName',
        headerName: 'اسم المواطن',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        align: 'center',
        headerAlign: 'center',
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'idNumber',
        headerName: 'رقم الهوية',
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'service',
        headerName: 'الخدمة',
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'dateSubmitted',
        headerName: 'تاريخ الطلب',
        type: 'date',
        width: 160,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'status', headerName: 'الحالة', width: 160, align: 'center',
        headerAlign: 'center',
    },
];

// const rows = [
//     // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 1, dateSubmitted: '12-10-2021', service: 'تجديد بطاقة هوية', idNumber: '1171858', fullName: 'عبدالعزيز بياثنه', status: 'في الانتظار' },
//     { id: 2, dateSubmitted: '02-05-2020', service: 'إصدار جواز سفر جديد', idNumber: '1175684', fullName: 'معتز ريماوي', status: 'في الانتظار' },
//     { id: 3, dateSubmitted: '19-07-2021', service: 'تجديد بطاقة هوية', idNumber: '1135684', fullName: 'عدي عودة', status: 'في الانتظار' },
//     { id: 4, dateSubmitted: '29-04-2019', service: 'تجديد شهادة ميلاد', idNumber: '1196583', fullName: 'احمد فريج', status: 'في الانتظار' },
//     { id: 5, dateSubmitted: '12-11-2021', service: 'تجديد جواز سفر', idNumber: '1145672', fullName: 'بدر طوافشة', status: 'في الانتظار' },
//     { id: 6, dateSubmitted: '20-01-2022', service: 'تجديد بطاقة هوية', idNumber: '1186372', fullName: 'نمر التميمي', status: 'في الانتظار' },
//     { id: 7, dateSubmitted: '12-10-2021', service: 'تجديد بطاقة هوية', idNumber: '1171717', fullName: 'عيسى سلامة', status: 'في الانتظار' },
//     { id: 8, dateSubmitted: '12-10-2021', service: 'تجديد بطاقة هوية', idNumber: '1198365', fullName: 'محمد بكري', status: 'في الانتظار' },
// ];

export const MOIRequestLength = 10;


export default function InteriorRequestTable() {

    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getRequest("MOI")
            .then((res) => {
                // console.log(res.data.data);
                setData([...res.data.data.map(({ id, ...res }) => ({ ...res, userId: id, id: res._id ?? id }))]);
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
                    <h1>طلبات وزارة الداخلية الفلسطينية</h1>
                </ButtomTitleLine>
            </TitleDiv>
            <StyledTable dir="rtl">
                <div style={{ height: 490, width: '100%' }}>
                    <DataGrid
                        rows={rows}
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