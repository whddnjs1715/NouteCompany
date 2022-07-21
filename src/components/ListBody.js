import styled from 'styled-components';
import React, { useState } from 'react';

const MenuBar = styled.div`
  position: absolute;
  width: 100%;
  height: 48px;
  top: 52px;
  border: solid;
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
`;

const ListBody = () => {
  const [name, setName] = useState(['다이어리', '다이어리', '다이어리', '다이어리']);

  return (
    <>
      <MenuBar>
        <MenuUl>
          {name.map(function (a, i) {
            return (
              <MenuLi>
                <MenuDiv onClick={() => {}}>{name[i]}</MenuDiv>
              </MenuLi>
            );
          })}
        </MenuUl>
      </MenuBar>
    </>
  );
};

export default ListBody;
