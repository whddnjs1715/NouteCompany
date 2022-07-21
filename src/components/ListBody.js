import { React, useState, useEffect } from 'react';
import { apiRequest } from '../api/index';
import styled from 'styled-components';
import ProductList from './ProductList';

const MenuBar = styled.div`
  width: 100%;
  height: 48px;
  top: 52px;
  padding: 10px 10px 10px 20px;
`;

const MenuUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const MenuLi = styled.li`
  float: left;
  background: #ffffff;
  width: 88px;
  height: 48px;
  left: 46px;
`;

const MenuDiv = styled.div`
  padding: 10px;
  color: #000000;
  align: Center;
`;

const Rectangle = styled.div`
  height: 3px;
  width: 88px;
  left: 0px;
  top: 45px;
  border-radius: 0px;
  background: #f3f3f3;
`;

const ListBody = () => {
  // 다이어리 1, 스티커 2, 노트패드 3, 브러쉬 4
  const [name, setName] = useState(['다이어리', '스티커', '노트패드', '브러쉬']);
  const [typeNum, setTypeNum] = useState(1);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    apiRequest(typeNum)
      .then((response) => {
        setListData(response.data);
      })
      .catch(() => {
        console.log('Fail!!');
      });
  }, [typeNum]);
  return (
    <>
      <MenuBar>
        <MenuUl>
          {name.map(function (a, i) {
            return (
              <MenuLi
                key={i + 10}
                onClick={() => {
                  setTypeNum(i + 1);
                }}
              >
                <MenuDiv key={i}>{name[i]}</MenuDiv>
                <Rectangle key={i + 20} />
              </MenuLi>
            );
          })}
        </MenuUl>
      </MenuBar>
      <ProductList listData={listData} typeNum={typeNum} />
    </>
  );
};

export default ListBody;
