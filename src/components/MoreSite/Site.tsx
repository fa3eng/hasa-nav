import { CloseOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styled from 'styled-components';

const SiteWrapper = styled.a`
  position: relative;
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
  &:focus{
    /* 用box-shadow模拟outline 绝了 */
    box-shadow: 0 0 0 2px pink;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f1f3f4;
  overflow: hidden;

  &>img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
  }
`;

const Title = styled.div`
  margin-top: 20px;
`;

const Menu = styled.span`
  position: absolute;
  top: 3px;
  right: 10px;
  z-index: 2;
  transition: all .5s;
  &:hover{
    transition: all .5s;
    cursor: default;
    color: #fd8196;
  };
`;

const MyCloseOutlined = styled(CloseOutlined)`
  font-size: 12px;
`;

interface Props  {
  name: string;
  url: string;
  responseRemove: Function;
}

const MoreSite:React.FC<Props> = (props) => {

  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };

  // todo 暂时还不弄菜单, 未来会添加编辑功能, 目前只有删除
  const handleClick = (name:string) => {
    return (e:React.MouseEvent) => {
      e.preventDefault();
      // 处理数据
      interface SiteList {
        name: string;
        url: string;
      };
      const result = (JSON.parse(localStorage.getItem('siteList') as string) as Array<SiteList>).filter((item)=> {
        return item.name !== name;
      });
      localStorage.setItem('siteList', JSON.stringify(result));
      props.responseRemove();
    }
  };

  return (
    <SiteWrapper href={props.url} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} target="_blank">
      {
        visible ? 
        <Menu onClick={handleClick(props.name)}>
          <MyCloseOutlined/>
        </Menu>:
        <></>
      }
      <LogoWrapper>
        {/* 这里可能还需要做一些检查, 防止没有找到favicon */}
        <img src={`${props.url}/favicon.ico`} alt=""/>
      </LogoWrapper>
      <Title>{props.name}</Title>
    </SiteWrapper>
  );
}

export default MoreSite;
