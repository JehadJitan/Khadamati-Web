import * as React from 'react';
import { ButtomTitleLine, StyledReport, TitleDiv, InsideDivTitle } from '../../Components/Divs/StyledDivs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function createData(year, month, total, total2, total3, city) {
    return { year, month, total, total2, total3, city };
}
const rows = [
    createData(40, 40, 40, 50, 90, 'جنين'),
    createData(40, 40, 40, 50, 90, 'طولكرم'),
    createData(40, 40, 40, 50, 90, 'قلقيلية'),
    createData(40, 40, 40, 50, 90, 'رام الله'),
    createData(40, 40, 40, 50, 90, 'بيت لحم'),
    createData(40, 40, 40, 50, 90, 'الخليل'),
    createData(40, 40, 40, 50, 90, 'اريحا'),
];

function InteriorReports() {
    return (
        <TitleDiv>
            <ButtomTitleLine>
                <h1>تقارير وزارة الداخلية الفلسطينية</h1>
            </ButtomTitleLine>
            <StyledReport>
                <InsideDivTitle>
                    <h1>الهويات الفلسطينية</h1>
                </InsideDivTitle>
                <TableContainer style={{ width: 850 }} component={Paper} >
                    <Table sx={{ minWidth: 850, direction: "rtl" }} size="small" aria- label="accedent table">
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">المحافظة</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">عدد الإصدارات الشهرية</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">عدد الإصدارات السنوية</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">عدد التجديدات الشهرية</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">عدد التجديدات السنوية</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">مجمل العدد</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={{ 'font-family': 'Almarai', backgroundColor: '#6c757d', color: 'white', }} align="center" component="th" scope="row">
                                        {row.city}
                                    </TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">{row.month}</TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">{row.year}</TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">{row.total}</TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">{row.year}</TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">160</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack direction="row" style={{ 'margin-top': '20px' }}>
                    <Button variant="contained" color="error" style={{ 'font-family': 'Almarai' }}>طباعة تقرير الهويات</Button>
                </Stack>
            </StyledReport>
            <StyledReport>
                <InsideDivTitle>
                    <h1> الجوازات الفلسطينية</h1>
                </InsideDivTitle>
                <TableContainer style={{ width: 850 }} component={Paper} >
                    <Table sx={{ minWidth: 850, direction: "rtl" }} size="small" aria- label="accedent table">
                        <TableHead>
                            <TableRow >
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">المحافظة</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">عدد الإصدارات الشهرية</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">عدد الإصدارات السنوية</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">عدد التجديدات الشهرية</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">عدد التجديدات السنوية</TableCell>
                                <TableCell style={{ backgroundColor: '#6c757d', color: 'white', 'font-family': 'Almarai' }} align="center">مجمل العدد</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={{ 'font-family': 'Almarai', backgroundColor: '#6c757d', color: 'white', }} align="center" component="th" scope="row">
                                        {row.city}
                                    </TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">{row.month}</TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">{row.year}</TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">{row.total}</TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">{row.total}</TableCell>
                                    <TableCell style={{ 'font-family': 'Almarai' }} align="center">160</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack direction="row" style={{ 'margin-top': '20px' }}>
                    <Button variant="contained" color="error" style={{ 'font-family': 'Almarai' }}>طباعة تقرير الجوازات</Button>
                </Stack>
            </StyledReport>
        </TitleDiv >
    );
}

export default InteriorReports;
