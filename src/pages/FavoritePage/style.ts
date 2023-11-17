import styled from 'styled-components';

export const StyledFavoritePage = styled.div`
  header {
    position: initial;
    .inner {
      padding: 0 20px;
    }
  }
  main {
    .inner {
      .btn-container {
        width: 160px;
        margin-top: 20px;
      }
      ul {
        display: grid;
        gap: 20px;
        margin-top: 30px;
        li {
          display: flex;
          align-items: center;
          gap: 20px;
          .info {
            flex: 1;
            .en-name {
              color: #666;
              margin: 5px 0 0;
            }
          }
          figure {
            cursor: pointer;
            height: 100px;
            width: 100px;
          }
        }
      }
    }
  }
`;
