import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../footer/Pagination';
import styled from 'styled-components';

const Container = styled.div`
  margin: 10px;
`;

const SelectAll = styled.div`
  width: 120px;
  left: 0px;
  top: 0%;
  bottom: 0%;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #000000;
  padding-bottom: 15px;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
`;

const Article = styled.article`
  font-size: 11px;
`;

const ProductImg = styled.img`
  border-radius: 10px;
  width: 174px;
  height: 174px;
`;

const ProductName = styled.div`
  padding-top: 28px;
  height: 18px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 120%;
`;

const ProductPrice = styled.div`
  padding-top: 27px;
  padding-bottom: 27px;
  height: 17px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  color: #000000;
`;

const Sticker = styled.span`
  color: #ff385c;
  padding-left: 5px;
`;

const ProductList = ({ listData, typeNum }) => {
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const offset = (page - 1) * limit + (typeNum - 1) * 12;
  return (
    <Container>
      <SelectAll
        onClick={() => {
          console.log('전체보기');
        }}
      >
        <span>스티커</span>
        <Sticker>전체보기</Sticker>
      </SelectAll>
      <Main>
        {listData.slice(offset, offset + limit).map(({ id }) => (
          <Article
            key={id}
            onClick={() => {
              navigate('/detail/' + id);
            }}
          >
            <ProductImg src={listData[id - 1].thumb} />
            <ProductName>{listData[id - 1].name}</ProductName>
            <ProductPrice>{listData[id - 1].price}원</ProductPrice>
          </Article>
        ))}
      </Main>
      <footer>
        <Pagination total={listData.length} limit={limit} page={page} setPage={setPage} />
      </footer>
    </Container>
  );
};
export default ProductList;
