import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ButtomTitleLine, StyledTable, TitleDiv } from '../../Components/Divs/StyledDivs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const columns = [
    { field: 'id', headerName: 'رقم المستخدم', width: 120, align: 'center' },
    {
        field: 'fullName',
        headerName: 'اسم المواطن',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 250,
        align: 'center',
        headerAlign: 'center',
        // valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'idNumber',
        headerName: 'رقم الهوية',
        width: 150,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'dateOfBirth',
        headerName: 'تاريخ الميلاد',
        width: 150,
        align: 'center',
        type: 'date',
        headerAlign: 'center',
    },
    {
        field: 'gender',
        headerName: 'الجنس',
        width: 100,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'address',
        headerName: 'العنوان',
        width: 100,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'dateSubmitted',
        headerName: 'تاريخ التسجيل',
        type: 'date',
        width: 150,
        align: 'center',
        headerAlign: 'center',
    },
    { field: 'status', headerName: 'الحالة', width: 160, align: 'center', headerAlign: 'center', },
];

const rows = [
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 1, dateSubmitted: '12-10-2021', service: 'تجديد رخصة سياقة', idNumber: '1171858', fullName: 'عبدالعزيز بياثنه', gender: 'ذكر', address: 'سردا', dateOfBirth: '19-05-1998', status: 'مفعل' },
    { id: 2, dateSubmitted: '02-05-2020', service: 'إصدار رخصة سياقة', idNumber: '1175684', fullName: 'معتز ريماوي', gender: 'ذكر', address: 'كفر عقب', dateOfBirth: '19-05-1996', status: 'مفعل' },
    { id: 3, dateSubmitted: '19-07-2021', service: 'دفع مخالفات عام 2020', idNumber: '1135684', fullName: 'عدي عودة', gender: 'ذكر', address: 'بيت لحم', dateOfBirth: '28-10-1970', status: 'موقف' },
    { id: 4, dateSubmitted: '29-04-2019', service: 'تجديد رخصة سياقة', idNumber: '1196583', fullName: 'احمد فريج', gender: 'ذكر', address: 'طولكرم', dateOfBirth: '20-12-1967', status: 'موقف' },
    { id: 5, dateSubmitted: '12-11-2021', service: 'تسجيل إمتحان تؤوريا', idNumber: '1145672', fullName: 'بدر طوافشة', gender: 'ذكر', address: 'سنجل', dateOfBirth: '04-04-1999', status: 'مفعل' },
    { id: 6, dateSubmitted: '20-01-2022', service: 'تجديد رخصة سياقة', idNumber: '1186372', fullName: 'نمر التميمي', gender: 'ذكر', address: 'بيرزيت', dateOfBirth: '23-06-2001', status: 'موقف' },
    { id: 7, dateSubmitted: '01-01-2022', service: 'دفع مخالفات عام 2021', idNumber: '1171717', fullName: 'عيسى سلامة', gender: 'ذكر', address: 'بديا', dateOfBirth: '20-09-1998', status: 'مفعل' },
    { id: 8, dateSubmitted: '12-10-2021', service: 'تجديد رخصة سياقة', idNumber: '1198365', fullName: 'محمد بكري', gender: 'ذكر', address: 'رام الله', dateOfBirth: '03-01-2002', status: 'مفعل' },
];

export const NumOfUsers = rows.length;

export default function Users() {
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
                        rows={rows}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
                <Stack direction="row" style={{ 'margin-top': '20px' }}>
                    <Button variant="contained" color="warning" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>حذف حساب</Button>
                    <Button variant="contained" color="error" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>توقيف حساب</Button>
                    <Button variant="contained" color="success" style={{ 'margin-left': '50px', 'font-family': 'Almarai' }}>تفعيل حساب</Button>
                </Stack>
            </StyledTable>
        </>
    );
}