import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons'

const SearchBar = styled.form`
  position: relative;
  >input {
    width: 561px;
    height: 44px;
    padding: 0px 50px;
    border: none;
    border-radius: 22px;
    font-size: 17px;
    outline: none;
    box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);
  }
  >button {
    display: none;
  }
`;

const MySearchOutlined = styled(SearchOutlined)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  font-size: 19px;
  color: gray;
`;

const Search: React.FC = () => {

  const localStorage = window.localStorage;
  if(localStorage.getItem('enginData') === null){
    // 确保localStorage存在
    localStorage.setItem('enginData', JSON.stringify({
      action: '',
      name: ''
    }));
  }
  const enginData = localStorage.getItem('enginData');
  const [value, setValue] = useState('');
  const [engin, setEngin] = useState(JSON.parse(enginData as string));

  useEffect(() => {
    if ((!localStorage.getItem('enginData')) || engin.action === '') {
      const enginTemp = {
        action: 'https://www.google.com/search',
        name: 'q'
      };
      setEngin(enginTemp);
      localStorage.setItem('enginData', JSON.stringify(enginTemp));
      
    } else {
      localStorage.setItem('enginData', JSON.stringify(engin));
    }
  }, [engin]);

  // 切换搜索引擎
  // todo 这里以后应该要支持自定义搜索引擎
  const handleClick = (e:React.MouseEvent) => {
    const result = value.split(' ');
    if (result[0] === ':gg' || result[0] === '：gg') {
      setEngin({
        action: 'https://www.google.com/search',
        name: 'q'
      });
      setValue(result.slice(1).join(' '));
      if(result.slice(1).join(' ').trim() === ''){
        e.preventDefault();
      }
    } else if (result[0] === ':bd' || result[0] === '：bd') {
      setEngin({
        action: 'https://www.baidu.com/s',
        name: 'wd'
      });
      setValue(result.slice(1).join(' '));
      if(result.slice(1).join(' ').trim() === ''){
        e.preventDefault();
      }
    } else if(value.trim() === ''){
      e.preventDefault();
    }
    console.log(value.trim());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 处理引擎名字
  const handleName = (name:string) => {
    return name.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace('.com', '')
        .replace(/\/.*/, '');
  };

  return (
    <>
      <SearchBar action={engin.action} method="GET" name="searchForm">
        <MySearchOutlined />
        <input 
        type="text" 
        name={engin.name} 
        value={value} 
        onChange={handleChange} 
        autoComplete="off"
        autoFocus={true}
        spellCheck="false"
        placeholder={`在 ${handleName(engin.action)} 上搜索，或者使用 :xx 切换引擎`}
        />

        <button type="submit" onClick={handleClick}>搜索</button>
      </SearchBar>
    </>
  )
};

export default Search;