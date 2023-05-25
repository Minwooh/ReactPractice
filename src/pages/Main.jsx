import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  height: 130vh;
  background: #902443;
`;

const Whitebox = styled.div`
  margin: auto;
  width: 80%;
  height: 100vh;
  top: 10%;

  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const Logoimage = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 35px;
  margin: auto;
  width: 45px;
  height: 45px;
`;

const Title = styled.div`
  position: relative;
  margin: 0 auto;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  color: #5e162b;
`;

const Name = styled.div`
  position: relative;
  display: inline;
  width: 52px;
  height: 26px;

  left: 290px;
  top: 80px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;
const NameInput = styled.input`
  position: relative;
  width: 260px;
  height: 35px;
  left: 70px;

  background: #cd99a6;
  border-radius: 50px;
`;
const Phonenum = styled.div`
  position: relative;
  display: inline;
  width: 74px;
  height: 26px;
  right: 10px;
  top: 140px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;
const PhoneInput = styled.input`
  position: relative;
  width: 260px;
  height: 35px;
  left: 40px;

  background: #cd99a6;
  border-radius: 50px;
`;

const Button = styled.button`
  position: relative;
  margin-left: 45%;
  width: 95px;
  height: 36px;
  top: 340px;

  background: #902443;
  border-radius: 10px;
  color: #ffffff;
`;

const Logo = styled.footer`
  position: relative;
  margin: 0 auto;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

function Main() {
  const navigate = useNavigate();
  const go = () => {
    navigate("/Fail");
  };
  return (
    <Background>
      <Whitebox>
        <Logoimage>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 5.png`}
            alt="logo"
            width="60px"
          />
        </Logoimage>
        <Title>
          동덕여자대학교 멋쟁이사자처럼
          <br />
          11기 아기사자 합격자 발표
        </Title>
        <Name>
          성함
          <NameInput></NameInput>
        </Name>
        <Phonenum>
          전화번호
          <PhoneInput></PhoneInput>
        </Phonenum>

        <Button onClick={go}>입력</Button>
      </Whitebox>
      <Logo>DONGDUK x LIKELION</Logo>
    </Background>
  );
}
export default Main;
