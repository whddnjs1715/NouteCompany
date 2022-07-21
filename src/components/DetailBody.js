import { React, useState, useEffect, useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Pagination from './Pagination';
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
  const [reviewList, setReviewList] = useState([]);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [textLimit, setTextLimit] = useState(10);
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    axios
      .get('https://test.noutecompany.com/product/detail/' + id)
      .then((response) => {
        setListData(response.data);
        setReviewList(response.data.review);
      })
      .catch(() => {
        console.log('실패!');
      });
  }, []);

  const Modal = ({ isTrue, index }) => {
    return (
      <>
        {isTrue ? (
          <>{reviewList[index].content}</>
        ) : (
          <>
            {reviewList[index].content.substring(0, 15)}
            <div>...</div>
          </>
        )}
      </>
    );
  };
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
        <ReviewBox>
          {reviewList &&
            reviewList.map(function (a, i) {
              return (
                <>
                  <div>{reviewList[i].dateTime}</div>
                  <div>{reviewList[i].writer}</div>
                  <div>
                    {reviewList[i].content.length > textLimit ? (
                      <>
                        <Modal isTrue={isTrue} index={i} />
                        <button
                          onClick={() => {
                            setIsTrue(true);
                          }}
                        >
                          더보기
                        </button>
                      </>
                    ) : (
                      reviewList[i].content
                    )}
                  </div>
                  <Rectangle />
                </>
              );
            })}
        </ReviewBox>
      </ReviewContainer>
      <footer>
        <Pagination total={reviewList.length} limit={limit} page={page} setPage={setPage} />
      </footer>
    </>
  );
};

export default DetailBody;
