import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const SiteWrapper = styled.a`
  display: flex;
  flex-flow: column;
  align-items:center;
  width: 112px;
  height: 112px;
  margin-bottom: 10px;
  padding: 10px 0 3px 0;
  color: black;
  border-radius: 7px;
  &:hover{
    background-color: #e8e8e9;
    color: black;
  };
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f1f3f4;
  overflow: hidden;

  &>span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
  }
`;

const Title = styled.div`
  margin-top: 20px;
`;


interface Props {
  onClick (): void,
};

const AddSite:React.FC<Props> = (props) => {
  return (
    <SiteWrapper {...props}>
      <LogoWrapper>
        <PlusOutlined />
      </LogoWrapper>
      <Title>添加</Title>
    </SiteWrapper>
  );
}

export default AddSite;
