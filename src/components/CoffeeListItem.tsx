import React from 'react';
import styled from 'styled-components';
import { listType } from '../@type/coffee';
import { Button } from '../const/lazy';

interface CoffeeListItemProps {
  item: listType;
  onClick: () => void;
}

const CoffeeListItem: React.FC<CoffeeListItemProps> = ({ item, onClick }) => {
  return (
    <StyledCoffeeListItem>
      <figure>
        <img src={item.imageUrl} alt="" />
      </figure>
      <p className="coffee-name">{item.name}</p>
      <Button title="상세보기" onClick={onClick} />
    </StyledCoffeeListItem>
  );
};

export default CoffeeListItem;

const StyledCoffeeListItem = styled.li`
  img {
    width: 100%;
  }
  .coffee-name {
    padding: 10px;
    text-align: center;
  }
`;
