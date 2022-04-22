import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ButtomTitleLine, StyledTable, TitleDiv } from '../../Components/Divs/StyledDivs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { editCovidStatus, getCitizens } from "../../shared/api";

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
    {
        field: 'identity_id',
        headerName: 'رقم الهوية',
        width: 150,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: 'phone',
        headerName: 'رقم الهاتف',
        width: 150,
        align: 'center',
        headerAlign: 'center',
    },
    { field: 'covidStatus', headerName: 'الحالة', width: 150, align: 'center', headerAlign: 'center', },

];

export default function CovidStatus() {

    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId] = useState();
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        getCitizens({})
            .then((res) => {
                const data1 = []
                res.data.data.map((citizen) => {
                    data1.push(citizen)
                })
                setData([...data1.map(({ id, ...res }) => ({ ...res, userId: id, id: res._id ?? id }))]);

            })
            .catch((err) => {
                console.log(err);
            });
    }, [rows, submitted]);

    const [selected, setSelected] = useState(false);

    function mightbe() {

        if (selected) {
            editCovidStatus({ citizenId: id, covidStatus: "مخالط" })
            setSelected(false);
            setSubmitted(!submitted);

        } else {
            console.log("Select row");
        }
    }
    function negative() {
        if (selected) {
            editCovidStatus({ citizenId: id, covidStatus: "سليم" })
            setSelected(false);
            setSubmitted(!submitted);
        } else {
            console.log("Select row");
        }
    }
    const positive = () => {
        if (selected) {
            editCovidStatus({ citizenId: id, covidStatus: "مصاب" })
            setSelected(false);
        } else {
            console.log("Select row");
        }
    }

    return (
        <>
            <TitleDiv>
                <ButtomTitleLine>
                    <h1>في فلسطين COVID-19 نتيجة فاحصين</h1>
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
                        onSelectionModelChange={selected => { setSelected(true); setId(selected[0]) }}
                    />
                </div>
                <Stack direction="row" style={{ 'margin-top': '20px' }}>
                    <Button onClick={positive} variant="contained" color="error" style={{ 'margin-left': '25px', 'font-family': 'Almarai' }}>مصاب</Button>
                    <Button onClick={mightbe} variant="contained" color="warning" style={{ 'margin-left': '25px', 'font-family': 'Almarai' }}>مخالط</Button>
                    <Button onClick={negative} variant="contained" color="success" style={{ 'margin-left': '25px', 'font-family': 'Almarai' }}>سليم</Button>
                </Stack>
            </StyledTable>
        </>
    );
}