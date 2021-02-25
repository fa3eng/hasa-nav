import React, { useState } from 'react';
import styled from 'styled-components'
import Site from './Site'
import AddSite from './AddSite'

const MoreSiteWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  width: 573px;
  margin-top: 40px;
`

const MoreSite:React.FC = () => {

  // 持久化处理
  const localStorage = window.localStorage;
  if(!localStorage.getItem('siteList')){
    localStorage.setItem('siteList', JSON.stringify(
      [
        {
          name: '',
          url: ''
        }
      ]
    ));
  }
  const [siteList, setSiteList] = useState(localStorage.getItem('siteList'));

  // 添加元素 感觉有点丑? 未来可能会重构把它放进组件里面, 外面就留一个简单的函数调用就行
  const handleClick = () => {
    const name = window.prompt('name');
    const url =  window.prompt('url');
    if((name?.trim() !== '' || url?.trim() !== '') && (name !== null || url !== null)){
      // 修改本地数据
      const currentSiteList = JSON.parse(localStorage.getItem('siteList') as string);
      currentSiteList.push({name, url});
      localStorage.setItem('siteList', JSON.stringify(currentSiteList));
      // 修改组件状态, 更新页面
      setSiteList(localStorage.getItem('siteList'));
    } else {
      alert('输入错误, 请重试');
    }
  };

  // 响应删除元素
  const responseRemove = () => {
    setSiteList(localStorage.getItem('siteList'));
  }

  interface SiteList {
    name: string;
    url: string;
  };

  return (
    <MoreSiteWrapper>
      {
        (JSON.parse(localStorage.getItem('siteList') as string) as Array<SiteList>).map((item)=> {
          if(item.url !== ''){
            return <Site name={item.name} url={item.url} key={Math.random()*10} responseRemove={responseRemove}/>
          }
        })
      }

      <AddSite onClick={handleClick} />
    </MoreSiteWrapper>
  );
}

export default MoreSite;
