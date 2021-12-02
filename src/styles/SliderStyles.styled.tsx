import styled from 'styled-components';

import { colors } from './GlobalStyles';

export const Image = styled.img`
  max-width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  margin-bottom: 1rem;
`;

export const SliderTitle = styled.h3`
  font-size: 2.5rem;
  font-family: 'Akaya Telivigala', cursive;
  letter-spacing: 0.1rem;
  color: ${colors.white};
`;
