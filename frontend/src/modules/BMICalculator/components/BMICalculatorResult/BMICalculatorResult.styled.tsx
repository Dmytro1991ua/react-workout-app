import styled from 'styled-components';
import { fadeInDown } from '../../../../global-styles/Global.styled';
import { Subtitle } from '../../BMICalculator.styled';

export const SectionWrapper = styled('div')`
  padding: 2rem 0 0 0;
  transition: all 0.8s ease-out;
  animation: ${fadeInDown} 0.8s ease-in-out;
`;

export const SectionHeader = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ResultSubtitle = styled(Subtitle)`
  margin-bottom: 1rem;
`;

export const Image = styled('img')`
  max-width: 100%;
  height: auto;
  min-height: 30rem;
  object-fit: cover;
`;
