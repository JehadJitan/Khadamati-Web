import React, { useEffect, useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as GoIcons from "react-icons/go";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import styled from "styled-components";
import { ButtomTitleLine, TitleDiv } from "../../Components/Divs/StyledDivs";
import "react-circular-progressbar/dist/styles.css";
import { getDashboardContent, jawwalPay } from "../../shared/api";

const Parent = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const CardParent = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-left: 5%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
`;

const Card = styled.div`
  width: 21.5%;
  height: 80px;
  padding: 3%;
  box-shadow: 5px 10px 18px #888888;
  background-color: #fdc500;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 1px solid #d31818;
  border-right: 1px solid #d31818;
  justify-content: center;
`;

const DescTitle = styled.h1`
  color: black;
  font-size: 15px;
  width: 200px;
  text-align: right;
`;

const NumberTitle = styled.h1`
  color: black;
  font-size: 25px;
  text-align: right;
  font-weight: bold;
  color: #d31818;
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
`;

function DashboardContent() {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [edited, setEdited] = useState(false);
  const [iframeLink, setiframeLink] = useState("");

  useEffect(() => {
    jawwalPay({})
      .then((res) => {
        console.log(res.data.data);
        setiframeLink(res.data.data);
        const data1 = [];
        res.data.data.map((employee) => {
          employee.birthDate = employee.birthDate.substring(0, 10);
          data1.push(employee);
        });
        // console.log(res.data.data);
        setData([
          ...data1.map(({ id, ...res }) => ({
            ...res,
            userId: id,
            id: res._id ?? id,
          })),
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [rows]);

  return (
    <>
      <iframe
        src={iframeLink}
        title="Jawwal Pay"
        style={{ width: "100%", height: "650px" }}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default DashboardContent;
