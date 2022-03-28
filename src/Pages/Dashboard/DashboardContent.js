import React from "react";
import * as BsIcons from "react-icons/bs";
import styled from "styled-components";
import { ButtomTitleLine, TitleDiv } from "../../Components/Divs/StyledDivs";
import { MOFERowLength } from "../MOF/MOFEmployeeDataGrid";
import { MOIERowLength } from "../MOI/MOIEmployeeDataGrid";
import { MOPRowLength } from "../MOP/MOPEmployeeDataGrid";
// import { MOTRowLength } from "../MOT/MOTEmployeeDataGrid";
import { NumOfUsers } from "../Users/Users";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MOPServiceRowLength } from "../MOP/MOPServiceDataGrid";
import { MOTServiceRowLength } from "../MOT/MOTServiceDataGrid";
import { MOIServiceRowLength } from "../MOI/MOIServiceDataGrid";
import { MOFEServiceRowLength } from "../MOF/MOFServiceDataGrid";
import { MOPRequestLength } from "../MOP/PropertyRequestTable";
import { MOIRequestLength } from "../MOI/InteriorRequestTable";
import { MOTRequestLength } from "../MOT/TransportationRequestTable";
import { MOFRequestLength } from "../MOF/FinanceRequestTable";

const Parent = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const CardParent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  flex-wrap: wrap;
`;

const Right = styled.div`
  width: 210px;
  height: 310px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 5px 10px 18px #888888;
  background-color: #adb5bd;
  margin-left: 80px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Center = styled.div`
  width: 210px;
  height: 160px;
  padding: 20px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 5px 10px 18px #888888;
  background-color: #ffffff;
  margin-left: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 80px;
`;

const Card = styled.div`
  width: 320px;
  height: 100px;
  padding: 20px;
  // border-radius: 25px;
  box-shadow: 5px 10px 18px #888888;
  background-color: #fdc500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Left = styled.div`
  width: 200px;
  height: 300px;
  padding: 20px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 5px 10px 18px #888888;
  background-color: #adb5bd;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Circle = styled.div`
  margin-top: 10px;
  width: 120px;
  height: 120px;
`;

const Title = styled.h1`
  color: #d31818;
  font-size: 20px;
  margin-bottom: 5px;
`;

const DescTitle = styled.h1`
  color: black;
  font-size: 18px;
  margin-right: 10px;
  width: 200px;
  text-align: right;
`;

const NumberTitle = styled.h1`
  color: black;
  font-size: 23px;
  text-align: right;
  font-weight: bold;
`;

const TableParent = styled.div`
  display: flex;
  justify-content: center;
  width: 1050px;
  height: 350px;
  // border-radius: 25px;
  box-shadow: 5px 10px 18px #888888;
  background-color: #ffffff;
  align-items: center;
  margin: 0 auto;
  flex-direction: row;
`;

const STY2 = styled.div`
  margin-top: 30px;
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const CustomeTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  // border-radius: 15px;
  // overflow:hidden
`;

function DashboardContent() {
  const totalEmployees = MOIERowLength + MOFERowLength + 10 + MOPRowLength;
  const numOfCitizens = "5,295,924";
  const Empercentage = (totalEmployees / numOfCitizens) * 100;
  const Usprecentage = (NumOfUsers / numOfCitizens) * 100;

  return (
    <>
      <TitleDiv>
        <ButtomTitleLine>
          <h1>نظرة عامة على لوحة القيادة</h1>
        </ButtomTitleLine>
      </TitleDiv>
      <CardParent>
        <Card style={{ background: "#38b000" }}>
          <STY2 style={{ "margin-top": "35px", color: "black" }}>
            <BsIcons.BsPeopleFill size={60} />
          </STY2>
          <STY2>
            <NumberTitle>1000</NumberTitle>
            <DescTitle>عدد مستخدمين التطبيق </DescTitle>
          </STY2>
        </Card>
        <Card>
          <STY2 style={{ "margin-top": "35px", color: "black" }}>
            <BsIcons.BsPeopleFill size={60} />
          </STY2>
          <STY2>
            <NumberTitle>{totalEmployees}</NumberTitle>
            <DescTitle>عدد الموظفين الحكومية</DescTitle>
          </STY2>
        </Card>
        <Card style={{ background: "#38b6ff" }}>
          <STY2 style={{ "margin-top": "35px", color: "black" }}>
            <BsIcons.BsPeopleFill size={60} />
          </STY2>
          <STY2>
            <NumberTitle>{numOfCitizens}</NumberTitle>
            <DescTitle>العدد الإجمالي للمواطنين</DescTitle>
          </STY2>
        </Card>
      </CardParent>
      <Parent>
        {/* <Parent2>
                    <Left>
                        <BsIcons.BsPeopleFill /><Title>عدد موظفين القطاعات الحكومية</Title>
                        <h2>{totalEmployees}</h2>
                        <Circle>
                            <CircularProgressbar styles={buildStyles({ trailColor: '#f5f5f5', pathColor: '#d31818', textColor: '#d31818' })} value={Empercentage} text={`${Empercentage}%`} />;
                        </Circle>
                    </Left>
                    <Center>

                        <BsIcons.BsPeopleFill /><Title>العدد الإجمالي للمواطنين</Title>
                        <h2>{numOfCitizens}</h2>
                    </Center>
                    <Right>
                        <BsIcons.BsPeopleFill /><Title>عدد مستخدمين تطبيق خدماتي</Title>
                        <h2>{NumOfUsers}</h2>
                        <Circle>
                            <CircularProgressbar styles={buildStyles({ trailColor: '#f5f5f5', pathColor: '#d31818', textColor: '#d31818' })} value={Usprecentage} text={`${Usprecentage}%`} />;
                        </Circle>
                    </Right>
                </Parent2> */}
        <TableParent>
          <CustomeTable>
            <tr>
              <th width="150px">عدد الطلبات</th>
              <th width="150px">عدد الخدمات</th>
              <th width="150px">عدد الموظفين</th>
              <th width="250px">إسم الوزارة</th>
            </tr>

            <tr>
              <td>{MOTRequestLength}</td>
              <td>{MOTServiceRowLength}</td>
              <td>10</td>
              <td style={{ color: "#d31818" }}>وزارة المواصلات</td>
            </tr>
            <tr>
              <td>{MOIRequestLength}</td>
              <td>{MOIServiceRowLength}</td>
              <td>{MOIERowLength}</td>
              <td style={{ color: "#d31818" }}>وزارة الداخلية</td>
            </tr>
            <tr>
              <td>{MOFRequestLength}</td>
              <td>{MOFEServiceRowLength}</td>
              <td>{MOFERowLength}</td>
              <td style={{ color: "#d31818" }}>وزارة المالية</td>
            </tr>
            <tr>
              <td>{MOTRequestLength}</td>
              <td>{MOTServiceRowLength}</td>
              <td>10</td>
              <td style={{ color: "#d31818" }}>وزارة الصحة</td>
            </tr>
            <tr>
              <td>{MOPRequestLength}</td>
              <td>{MOPServiceRowLength}</td>
              <td>{MOPRowLength}</td>
              <td style={{ color: "#d31818" }}>سلطة الأراضي</td>
            </tr>
          </CustomeTable>
        </TableParent>
      </Parent>
    </>
  );
}

export default DashboardContent;
