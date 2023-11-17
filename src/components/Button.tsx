import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type?: 'button' | 'submit';
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', title, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  max-width: 100%;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  transition: 0.3s;
  background-color: transparent;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
