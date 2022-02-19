import { TimesCircle } from '@styled-icons/fa-solid';
import styled from 'styled-components';

import { colors } from '../../../../global-styles/Global.styled';
import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';

export const WorkoutSection = styled(FormAndFallbackMessageWrapper)`
  grid-template-columns: 1fr 1fr;
  border: none;
  padding: 1.5rem 2rem;
  position: relative;

  &.running {
    border-left: 5px solid ${colors.mantis};
  }

  &.cycling {
    border-left: 5px solid ${colors.tomato};
  }

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 2.5rem 2.2rem;
  }
`;

export const WorkoutHeader = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.mantisDarker};
  padding-bottom: 0.5rem;
`;

export const WorkoutTitle = styled.h3`
  font-size: 2.3rem;
  font-weight: 700;
  font-family: 'Akaya Telivigala', cursive;
  color: ${colors.white};
  letter-spacing: 0.1rem;
  //grid-column: 1 / -1;
`;

export const RemoveBtn = styled(TimesCircle)`
  width: 2rem;
  height: 2rem;
  color: ${colors.tomato};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  @media (min-width: 48em) {
    width: 3rem;
    height: 3rem;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const WorkoutDetails = styled.div`
  display: flex;
  align-items: baseline;
`;

export const WorkoutIcon = styled.span`
  font-size: 1.8rem;
  margin-right: 0.2rem;
  height: 0.28rem;
`;

export const WorkoutValue = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  color: ${colors.white};
`;

export const WorkoutUnit = styled.span`
  font-size: 1.1rem;
  color: ${colors.powderAsh};
  text-transform: uppercase;
  font-weight: 800;
`;
