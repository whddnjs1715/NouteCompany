import { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Btn = styled.button`
  height: 17px;
  left: 25.81%;
  right: 64.52%;
  top: 7px;
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  letter-spacing: -0.05em;
  color: #000000;
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

const Button = styled.button`
  background: #f3f3f3;
  border-radius: 4px;
  height: 30px;
  left: 12.1%;
  right: 75.81%;
  top: 30px;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }
`;

function Pagination({ page, setPage }) {
  const [numPages, setNumPages] = useState(3);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((a, i) => (
            <Btn
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Btn>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

export default Pagination;
