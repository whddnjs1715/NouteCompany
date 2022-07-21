import styled from 'styled-components';
import Header from '../components/Header';
import DetailBody from '../components/DetailBody';

const DetailPage = () => {
  return (
    <Container>
      <Header />
      <DetailBody />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 1479px;
  background: #ffffff;
  border: solid;
`;

export default DetailPage;
