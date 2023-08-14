import Styled from 'styled-components';

export const CategoryContainer = Styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 50px 20px;
`;

export const CategoryTitle = Styled.h2`
font-size: 38px;
margin-bottom: 25px;
text-align: center;
`;
