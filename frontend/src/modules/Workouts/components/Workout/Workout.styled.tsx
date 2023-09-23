import styled from 'styled-components';
import { Heart, HeartFill } from 'styled-icons/bootstrap';
import { Edit } from 'styled-icons/boxicons-regular';
import { DeleteDismiss } from 'styled-icons/fluentui-system-filled';

import { colors } from '../../../../global-styles/ColorsPalette';
import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';

const CommonIconStyles = `
   width: 1.8rem;
   height: 1.8rem;
   color: ${colors.mantis};
   margin-right: 0.4rem;
   transition: all 0.3s ease-in-out;
   cursor: pointer;

   &:hover {
    transform: scale(1.1);
   }

   @media(width >= 28em) {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0;
   }
}`;

export const WorkoutSection = styled(FormAndFallbackMessageWrapper)`
  grid-template-columns: 1fr 1fr;
  border: none;
  padding: 1.2rem 0.5rem;
  position: relative;
  cursor: pointer;

  &.running {
    border-left: 5px solid ${colors.mantis};
    border-right: 5px solid ${colors.mantis};
  }

  &.cycling {
    border-left: 5px solid ${colors.tomato};
    border-right: 5px solid ${colors.tomato};
  }

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 2.5rem 1rem;
  }
`;

export const Header = styled.ul`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.mantisDarker};
  padding-bottom: 0.5rem;

  @media (width >= 48em) {
    height: 4rem;
  }
`;

export const WorkoutTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  font-family: 'Akaya Telivigala', cursive;
  color: ${colors.white};
  letter-spacing: 0.02rem;
  margin-right: 0.5rem;

  @media (width >= 28em) {
    letter-spacing: 0.1rem;
  }

  @media (min-width: 120em) {
    font-size: 2.2rem;
  }
`;

export const RemoveBtn = styled(DeleteDismiss)`
  ${CommonIconStyles}
  color: ${colors.tomato};
`;

export const EditBtn = styled(Edit)`
  ${CommonIconStyles}
  color: ${colors.mantis};
`;

export const AddToFavorite = styled(Heart)`
  ${CommonIconStyles}
  fill: ${colors.tomato};
`;

export const RemoveFromFavorite = styled(HeartFill)`
  ${CommonIconStyles}
  fill: ${colors.tomato};
`;

export const Details = styled.div`
  display: flex;
  align-items: baseline;
`;

export const WorkoutIcon = styled.span`
  font-size: 1.8rem;
  margin-right: 0.2rem;
  height: 0.28rem;
`;

export const WeatherDetailsIcon = styled('img')`
  width: 2.8rem;
  height: 2.8rem;
  margin-top: 0.6rem;
  cursor: pointer;

  @media (width >= 28em) {
    width: 4rem;
    height: 4rem;
  }
`;

export const WorkoutValue = styled.span`
  font-size: 1.3rem;
  margin-right: 0.5rem;
  color: ${colors.white};

  @media (width >= 28em) {
    font-size: 1.5rem;
  }
`;

export const WorkoutUnit = styled.span`
  font-size: 0.9rem;
  color: ${colors.powderAsh};
  text-transform: uppercase;
  font-weight: 800;

  @media (width >= 28em) {
    font-size: 1.1rem;
  }
`;

export const ModalContentTitle = styled('h2')`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const ModalContentSubtitle = styled('h2')`
  font-size: 1.5rem;
  opacity: 0.8;
`;
