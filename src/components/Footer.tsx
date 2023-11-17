import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        @2023 Hwang Hee Sun Portfolio <br />이 홈페이지는 스타벅스의 이미지를 활용하여 개인 포트폴리오 용도로
        만들어졌습니다.
      </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: #2c2a29;
  color: #eee;
  text-align: center;
  padding: 20px;
  margin-top: auto;
  p {
    line-height: 1.5;
    font-size: 12px;
  }
`;
