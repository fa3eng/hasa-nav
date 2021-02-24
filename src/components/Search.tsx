import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SearchBar = styled.form`
  
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
  const handleClick = () => {
    const result = value.split(' ');
    if (result[0] === ':gg') {
      setEngin({
        action: 'https://www.google.com/search',
        name: 'q'
      });
      setValue(result.slice(1).join(' '));
    } else if (result[0] === ':bd') {
      setEngin({
        action: 'https://www.baidu.com/s',
        name: 'wd'
      });
      setValue(result.slice(1).join(' '));
    }    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchBar action={engin.action} method="GET" target="_blank" name="searchForm">
        <input type="text" name={engin.name} value={value} onChange={handleChange} />
        <button type="submit" onClick={handleClick}>搜索</button>
      </SearchBar>
    </>
  )
};

export default Search;