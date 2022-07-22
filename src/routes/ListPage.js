import styled from 'styled-components';
import Header from '../components/header/Header';
import ListBody from '../components/body/ListBody';

const ListPage = () => {
  return (
    <Container>
      <Header />
      <ListBody />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 847px;
`;

export default ListPage;
