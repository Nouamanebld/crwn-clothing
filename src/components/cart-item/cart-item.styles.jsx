import Styled from 'styled-components';

export const CartItemContainer = Styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartImg = Styled.img`
  width: 30%;
`;

export const ItemDetails = Styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = Styled.span`
  font-size: 16px;
`;
  