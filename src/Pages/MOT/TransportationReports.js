import * as React from "react";
import {
  ButtomTitleLine,
  StyledReport,
  TitleDiv,
  InsideDivTitle,
} from "../../Components/Divs/StyledDivs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function createData(year, month, slight, mid, danger, city) {
  return { year, month, slight, mid, danger, city };
}

const rows = [
  createData(100, 8, 40, 50, 10, "نابلس"),
  createData(100, 8, 40, 50, 10, "جنين"),
  createData(100, 8, 40, 50, 10, "طولكرم"),
  createData(100, 8, 40, 50, 10, "قلقيلية"),
  createData(100, 8, 40, 50, 10, "رام الله"),
  createData(100, 8, 40, 50, 10, "بيت لحم"),
  createData(100, 8, 40, 50, 10, "الخليل"),
  createData(100, 8, 40, 50, 10, "اريحا"),
];

function TransportationReports() {
  return (
    <TitleDiv>
      <ButtomTitleLine>
        <h1>تقارير وزارة المواصلات الفلسطينية</h1>
      </ButtomTitleLine>
      <StyledReport>
        <InsideDivTitle>
          <h1>مجمل الحوادث بالمدن الفلسطينية</h1>
        </InsideDivTitle>
        <TableContainer style={{ width: 850 }} component={Paper}>
          <Table
            sx={{ minWidth: 850, direction: "rtl" }}
            size="small"
            aria-
            label="accedent table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  المحافظة
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  عدد الحوادث الشهري
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  عدد الحوادث السنوي
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  عدد الحوادث الطفيفة
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  عدد الحوادث المتوسطة
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  عدد الحوادث الحرجة
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{
                      "font-family": "Almarai",
                      backgroundColor: "#6c757d",
                      color: "white",
                    }}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {row.city}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.month}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.year}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.slight}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.mid}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.danger}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack direction="row" style={{ "margin-top": "20px" }}>
          <Button
            variant="contained"
            color="error"
            style={{ "font-family": "Almarai" }}
          >
            طباعة تقرير الحوادث
          </Button>
        </Stack>
      </StyledReport>
      <StyledReport>
        <InsideDivTitle>
          <h1>مجمل المركبات بالمدن الفلسطينية</h1>
        </InsideDivTitle>
        <TableContainer style={{ width: 850 }} component={Paper}>
          <Table
            sx={{ minWidth: 850, direction: "rtl" }}
            size="small"
            aria-
            label="accedent table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  المحافظة
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  خصوصي
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  عمومي
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  تجاري
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  المركبات المرخصة
                </TableCell>
                <TableCell
                  style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    "font-family": "Almarai",
                  }}
                  align="center"
                >
                  المركبات الغير مرخصة
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{
                      "font-family": "Almarai",
                      backgroundColor: "#6c757d",
                      color: "white",
                    }}
                    align="center"
                    component="th"
                    scope="row"
                  >
                    {row.city}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.month}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.year}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.slight}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.mid}
                  </TableCell>
                  <TableCell
                    style={{ "font-family": "Almarai" }}
                    align="center"
                  >
                    {row.danger}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack direction="row" style={{ "margin-top": "20px" }}>
          <Button
            variant="contained"
            color="error"
            style={{ "font-family": "Almarai" }}
          >
            طباعة تقرير المركبات
          </Button>
        </Stack>
      </StyledReport>
    </TitleDiv>
  );
}

export default TransportationReports;
