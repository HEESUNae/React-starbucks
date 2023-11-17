import styled from 'styled-components';
import { mainImg } from '../const/image';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigation = useNavigate();
  return (
    <StyledHeader>
      <div className="inner">
        <h1 className="logo">
          <div onClick={() => navigation('/')}>
            <img src={mainImg.logo} alt="스타벅스" />
          </div>
        </h1>
        {location.pathname === '/' && (
          <div className="shop" onClick={() => navigation('/favorite')}>
            <img src={mainImg.shop} alt="" />
            <p>찜목록</p>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  z-index: 999;
  .inner {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        width: 60px;
        height: 60px;
      }
    }
    .shop {
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
  }
`;
