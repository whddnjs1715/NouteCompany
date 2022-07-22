import styled from 'styled-components';
import Header from '../components/header/Header';
import DetailBody from '../components/body/DetailBody';

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
`;

export default DetailPage;
