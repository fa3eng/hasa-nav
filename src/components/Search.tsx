import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = styled.form`
  
`;

const Search:React.FC = () => {
  const [value, setValue] = useState('');
  const [engin, setEngin] = useState({
    action: '',
    name: ''
  });

  const handleClick = () => {
    // 对输入的字符进行处理
    const result =  value.split(' ');
    // 确认搜索引擎
    if(result[0] === ':gg'){
      setEngin({
        action: 'https://www.google.com/search',
        name: 'q'
      });
      setValue(result.slice(1).join(' '));
    } else if(result[0] === ':bd'){
      setEngin({
        action: 'https://www.baidu.com/s',
        name: 'wd'
      });
      setValue(result.slice(1).join(' '));
    }
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchBar action={engin.action||'https://www.google.com/search'} method="GET" target="_blank" name="searchForm">
        <input type="text" name={engin.name || 'q'} value={value} onChange={handleChange} />
        <button type="submit" onClick={handleClick}>搜索</button>
      </SearchBar>
    </>
  )
};

export default Search;