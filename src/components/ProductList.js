import { useState } from 'react';
import Pagination from './Pagination';
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
  font-size: 18px;
  line-height: 120%;
  letter-spacing: -0.05em;
  color: #000000;
  padding-bottom: 15px;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
`;

const Article = styled.article``;

const ProductImg = styled.img`
  border-radius: 10px;
  width: 174px;
  height: 174px;
  radius: 10px;
`;

const ProductList = ({ listData }) => {
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <Container>
      <SelectAll>
        <span>스티커</span>
        <span>전체보기</span>
      </SelectAll>
      <Main>
        {listData.slice(offset, offset + limit).map(({ id }) => (
          <Article key={id}>
            <ProductImg src={listData[id].thumb} width="10%" />
            <div>{listData[id].name}</div>
            <div>{listData[id].price}</div>
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
