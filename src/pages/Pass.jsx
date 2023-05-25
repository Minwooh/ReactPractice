import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  height: 900px;
  background: #fae4ea;
`;
const Whitebox = styled.div`
  position: relative;
  margin: 0 auto;

  width: 572px;
  height: 800px;
  left: 31px;
  top: 20px;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;
const ImageLog = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 35px;
  margin: auto;
  width: 60px;
  height: 60px;
`;
const Congla = styled.div`
  position: relative;
  margin: 0 auto;
  width: 195px;
  height: 80px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  text-align: center;

  color: #000000;
`;
const Name1 = styled.div`
  position: relative;
  display: inline;

  width: 203px;
  height: 23px;

  top: 25px;
  left: 220px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #0075ff;
`;
const Name2 = styled.div`
  position: relative;
  display: inline;
  width: 203px;
  height: 23px;
  top: 25px;
  left: 220px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
`;
const Name3 = styled.div`
  position: relative;
  display: inline;
  width: 203px;
  height: 23px;
  top: 25px;
  left: 220px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;

  color: #000000;
`;
const Content = styled.div`
  position: relative;

  width: 400px;
  height: 259px;
  top: 55px;
  left: 92px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #000000;
`;
const Bongtu = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 35px;
  right: 53px;
  bottom: 80px;
`;

const Pass = () => {
  const location = useLocation();
  const name = location.state;

  return (
    <Background>
      <Whitebox>
        <ImageLog>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 5.png`}
            alt="logo"
            width="65px"
          />
        </ImageLog>
        <Congla>
          합격을
          <br />
          축하합니다!
        </Congla>
        <Name1>{name} </Name1>
        <Name2>님</Name2>
        <Name3>은</Name3>
        <Content>
          동덕여대 멋사 11기에 최종합격 하셨습니다! 🎉 <br />
          긴 선발 과정에 참여하시느라 고생 많으셨습니다.
          <br />
          자세한 사항은 discord를 통해 안내드리겠습니다.
          <br />
          <br />
          https://discord.gg/BSHH7mck
          <br />
          <br /> 3월 17일까지 디스코드에 들어와주세요!
          <br />
          <br /> 3/26(일) 동덕 멋사 OT에서 만나요~ <br />
          *장소 추후 안내 예정 *
        </Content>
        <Bongtu>
          <img
            src={`${process.env.PUBLIC_URL}/images/envelope.png`}
            alt="bongtu"
            width="680px"
          />
        </Bongtu>
      </Whitebox>
    </Background>
  );
};

export default Pass;
