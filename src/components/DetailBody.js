import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ProductImg = styled.img`
  width: 390px;
  height: 390px;
`;

const ProductBox = styled.div`
  width: 358px;
  height: 116px;
`;

const Rectangle = styled.div`
  width: 390px;
  height: 6px;
  border-radius: 0px;
  background: #f3f3f3;
`;

const ReviewContainer = styled.div``;

const ReviewBox = styled.div``;

const DetailBody = () => {
  let { id } = useParams();
  const [listData, setListData] = useState([]);
  useEffect(() => {
    axios
      .get('https://test.noutecompany.com/product/detail/' + id)
      .then((response) => {
        setListData(response.data);
      })
      .catch(() => {
        console.log('실패!');
      });
  }, []);
  console.log(listData.review);
  return (
    <>
      <ProductImg src={listData.thumb} />
      <ProductBox>
        <div>{listData.brandName}</div>
        <div>{listData.name}</div>
        <div>{listData.price}</div>
        <Rectangle />
      </ProductBox>
      <ReviewContainer>
        <div>구매평</div>
        <Rectangle />
        {/* <ReviewBox>{listData.review[0].content}</ReviewBox> */}
      </ReviewContainer>
    </>
  );
};

export default DetailBody;
