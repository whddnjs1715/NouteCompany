import styled from 'styled-components';

const Header = () => {
  return (
    <TopBar>
      <Logo />
    </TopBar>
  );
};

const TopBar = styled.div`
  width: 390px;
  height: 52px;
  left: 0px;
  top: 0px;
`;

const Logo = styled.img.attrs({
  src: `https://cdn.imweb.me/thumbnail/20220104/316394e1ccbd7.png`,
})`
  position: absolute;
  height: 28px;
  width: 145.54832458496094px;
  left: 122px;
  top: 13px;
`;

export default Header;
