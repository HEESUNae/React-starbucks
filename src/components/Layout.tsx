import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Footer, Header } from '../const/lazy';

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  return (
    <StyledLayout $location={location.pathname}>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div<{ $location: string }>`
  ${(props) =>
    props.$location !== '/' &&
    css`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `}
`;
