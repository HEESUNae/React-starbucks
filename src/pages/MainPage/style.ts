import styled from 'styled-components';
import { mainImg } from '../../const/image';

export const StyledMainPage = styled.div`
  .main-page {
    background: url(${mainImg.cafe}) no-repeat 0 50%;
    background-attachment: fixed;
    background-size: cover;
    .main-visual {
      position: relative;
      height: 100vh;
      .picter {
        max-width: 942px;
        max-height: 607px;
      }
      .inner {
        height: 100%;
      }
      figure {
        position: absolute;
        width: clamp(10rem, 16vw, 16vw);
        max-width: 300px;
        max-height: 312px;
        img {
          width: 100%;
          height: 100%;
        }
        &.coffee01 {
          bottom: 350px;
          left: 2vw;
          animation: topTobottom 3s ease-in-out infinite;
        }
        &.coffee02 {
          bottom: 50px;
          right: 16vw;
          animation: topTobottom 4s ease-in-out infinite;
        }
        &.coffee03 {
          bottom: 200px;
          left: 16vw;
          animation: topTobottom 4s ease-in-out infinite;
        }
        &.coffee04 {
          bottom: 270px;
          right: 2vw;
          animation: topTobottom 3s ease-in-out infinite;
        }
      }
    }
    .main-coffee {
      background-color: #1e3932;
      position: relative;
      .inner {
        display: flex;
        align-items: center;
        .sec-title {
          font-size: clamp(20px, 3vw, 40px);
        }
        .info {
          color: #fff;
          p {
            margin: 16px 0;
          }
        }
      }
      .picter {
        width: 40vw;
        position: absolute;
        top: 10%;
        right: -40vw;
        img {
          width: 100%;
        }
      }
    }
    .main-recommend {
      background-color: #f6f5ef;
      .info {
        text-align: center;
        .sec-title {
          color: #2c2a29;
        }
      }
      ul {
        display: grid;
        gap: 20px;
        margin-top: clamp(5vw, 3vw, 7vw);
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      }
    }
  }
  @keyframes topTobottom {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
