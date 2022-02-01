import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ButtomTitleLine, StyledTable, TitleDiv } from '../../Components/Divs/StyledDivs';

const columns = [
    { field: 'id', headerName: 'رقم الطلب', width: 100, align: 'center' },
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
        width: 140,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'service',
        headerName: 'الخدمة',
        width: 220,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'dateSubmitted',
        headerName: 'تاريخ الطلب',
        type: 'date',
        width: 140,
        align: 'center',
        headerAlign: 'center',
    },
    { field: 'status', headerName: 'الحالة', width: 160, align: 'center' },
];

const rows = [
    // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 1, dateSubmitted: '12-10-2021', service: 'دفع رسوم التأمين الصحي', idNumber: '1171858', fullName: 'عبدالعزيز بياثنه' },
    { id: 2, dateSubmitted: '02-05-2020', service: 'دفع رسوم إصدار هوية جديدة', idNumber: '1175684', fullName: 'معتز ريماوي' },
    { id: 3, dateSubmitted: '19-07-2021', service: 'دفع رسوم تجديد جواز سفر ', idNumber: '1135684', fullName: 'عدي عودة' },
    { id: 4, dateSubmitted: '29-04-2019', service: 'دفع ضريبة عام 2020', idNumber: '1196583', fullName: 'احمد فريج' },
    { id: 5, dateSubmitted: '12-11-2021', service: 'دفع رسوم إصدار رخصة سياقة', idNumber: '1145672', fullName: 'بدر طوافشة' },
    { id: 6, dateSubmitted: '20-01-2022', service: 'دفع رسوم إصدار شهادة ميلاد جديدة', idNumber: '1186372', fullName: 'نمر التميمي' },
    { id: 7, dateSubmitted: '12-10-2021', service: 'دفع رسوم طلب بدل فاقد لهوية ', idNumber: '1171717', fullName: 'عيسى سلامة' },
    { id: 8, dateSubmitted: '12-10-2021', service: 'دفع رسوم -----', idNumber: '1198365', fullName: 'محمد بكري' },
];

export default function InteriorRequestTable() {
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
                        rows={rows}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
            </StyledTable>
        </>
    );
}