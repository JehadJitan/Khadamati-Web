import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ButtomTitleLine, StyledTable, TitleDiv, InsideDivTitle } from '../../Components/Divs/StyledDivs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { getRequest2 } from "../../shared/api";
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Dialog from '@mui/material/Dialog';
import person1 from './person1.jpg';
import person2 from './person2.jpg';
import styled from 'styled-components';

const Row = styled.div`
display: flex;
justify-content:center;
margin-top:10px;
`;
const Column = styled.div`
padding: 10px;
`;

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

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog maxWidth={'xl'} onClose={handleClose} open={open}>
            <InsideDivTitle>
                <h1>تفاصيل طلب المواطن</h1>
            </InsideDivTitle>
            <Row style={{ 'justify-content': 'right', 'marginRight': '50px', 'marginTop': '30px' }}>
                <input size="40" type="text" readOnly style={{ 'direction': 'rtl', 'margin-left': '20px' }}></input>
                <label style={{ 'margin-left': '20px' }}>:تفاصيل الخدمة</label>
                <input size="15" type="text" readOnly style={{ 'direction': 'rtl', 'margin-left': '20px' }}></input>
                <label style={{ 'margin-left': '20px' }}>:رقم الهوية</label>
            </Row>
            <List sx={{ height: 500, width: 900, }}>
                <ListItem style={{ 'justifyContent': 'center' }}>
                    <Row>
                        <Column>
                            <h3 style={{ 'text-align': 'center', 'margin-bottom': '15px' }}>الصورة الشخصية الجديدة</h3>
                            <img style={{ 'width': '300px', 'height': '300px' }} src={person1}></img>
                        </Column>
                        <Column>
                            <h3 style={{ 'text-align': 'center', 'margin-bottom': '15px' }}>الصورة الشخصية القديمة</h3>
                            <img style={{ 'width': '300px', 'height': '300px' }} src={person2}></img>
                        </Column>

                    </Row>
                </ListItem>
                <ListItem style={{ 'justifyContent': 'center' }}>
                    <Button variant="contained" color="error" style={{ 'margin-right': '50px', 'font-family': 'Almarai' }}>موافقة الطلب</Button>
                    <Button variant="contained" color="success" style={{ 'margin-right': '15px', 'font-family': 'Almarai' }}>رفض الطلب</Button>
                </ListItem>
            </List>
        </Dialog >
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function InteriorRequestTable() {

    //POPUP STUFF

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (selected) {
            console.log("Should view request");
            setOpen(true);
            setSelected(false);
        } else {
            console.log("Select row to view");
        }
    };

    const handleClose = (value) => {
        setOpen(false);
    };

    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getRequest2("MOI")
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

    const acceptCurrentRequest = () => {
        if (selected) {
            console.log("Should accept request");
            setSelected(false);
        } else {
            console.log("Select row to accept");
        }
    }
    const denyCurrentRequest = () => {
        if (selected) {
            console.log("Should deny request");
            setSelected(false);
        } else {
            console.log("Select row to deny");
        }
    }
    // let history = useHistory();

    const viewCurrentRequest = () => {
        if (selected) {
            console.log("Should view request");
            setSelected(false);
        } else {
            console.log("Select row to view");
        }
    }

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
                        rows={data}
                        columns={columns}
                        pageSize={7}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        onSelectionModelChange={selected => { setSelected(true) }}

                    />
                </div>
                <Stack direction="row" style={{ 'margin-top': '20px' }}>
                    <Button onClick={handleClickOpen} variant="contained" color="warning" style={{ 'margin-left': '25px', 'font-family': 'Almarai' }}>عرض الطلب</Button>
                    <SimpleDialog
                        open={open}
                        onClose={handleClose}
                    />
                </Stack>
            </StyledTable>
        </>
    );
}