import React from 'react';
// import * as React from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import styled from 'styled-components';
import Test from "./MOIEmployeeTest";
import Test2 from "./MOIServiceTest";

const CustomDiv2 = styled.div`
    margin-top:50px;
    display: flex;
    justify-content: center;
    padding-bottom: 25px;
    border-bottom: 2px solid black;
`;

function Interior() {
    return <div style={{
        "margin-top": 100
    }}>            <CustomDiv2>
            <h1>وزارة الصحة الفلسطينية</h1>
        </CustomDiv2>
        <Test></Test>
        <Test2></Test2>
    </div>;
}

// function Interior() {
//     const { data } = useDemoData({
//         dataSet: 'Commodity',
//         rowLength: 100,
//         maxColumns: 6,
//     });

//     return (
//         <div style={{ height: 400, width: '100%' }}>
//             <DataGrid
//                 {...data}
//                 components={{
//                     Toolbar: GridToolbar,
//                 }}
//             />
//         </div>
//     );
// }

export default Interior;