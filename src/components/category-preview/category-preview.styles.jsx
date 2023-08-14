import Styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = Styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = Styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
