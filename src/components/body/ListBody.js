import { React, useState, useEffect } from 'react';
import { apiRequest } from '../../api/index';
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

  &[aria-current] {
    font-weight: bold;
    color: #ff385c;
  }
`;

const Rectangle = styled.div`
  height: 3px;
  width: 88px;
  left: 0px;
  top: 45px;
  border-radius: 0px;
  background: #f3f3f3;

  &[aria-current] {
    background: #ff385c;
  }
`;

const ListBody = () => {
  const [name, setName] = useState(['다이어리', '스티커', '노트패드', '브러쉬']);
  const [typeNum, setTypeNum] = useState(1);
  const [listData, setListData] = useState([]);
  const [currNum, setCurrNum] = useState(2);

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
                key={name[i]}
                onClick={() => {
                  setTypeNum(i + 1);
                  setCurrNum(i);
                }}
              >
                <MenuDiv key={name[i]} aria-current={currNum === i ? 'currNum' : null}>
                  {name[i]}
                </MenuDiv>
                <Rectangle aria-current={currNum === i ? 'currNum' : null} />
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
