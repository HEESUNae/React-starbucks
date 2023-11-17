import styled from 'styled-components';

export const StyledDetailPage = styled.div`
  header {
    position: initial;
  }
  .inner {
    h3 {
      font-size: clamp(20px, 2vw, 26px);
    }
    .coffee-info {
      display: flex;
      gap: 20px;
      padding: 20px 0;
      .info {
        display: flex;
        flex-direction: column;
        .desc {
          border-top: 1px solid #ccc;
          margin-top: 10px;
          padding-top: 10px;
        }
        .btn-container {
          margin-top: auto;
          width: 100px;
          &.active {
            button {
              background-color: black;
              color: #fff;
            }
          }
        }
      }
    }
  }
  @media (max-width: 756px) {
    .inner {
      .coffee-info {
        flex-direction: column;

        .info {
          .btn-container {
            margin-top: 20px;
          }
        }
      }
    }
  }
  @media (max-width: 450px) {
    img {
      width: 100%;
    }
  }
`;
