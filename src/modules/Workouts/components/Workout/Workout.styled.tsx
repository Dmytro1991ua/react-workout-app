import styled from 'styled-components';
import { Heart } from 'styled-icons/bootstrap';
import { Edit } from 'styled-icons/boxicons-regular';
import { DeleteDismiss } from 'styled-icons/fluentui-system-filled';
import { colors } from '../../../../global-styles/ColorsPalette';

import { FormAndFallbackMessageWrapper } from '../../CommonStyles.styled';

const CommonIconStyles = `
   width: 2.2rem;
   height: 2.2rem;
   color: ${colors.mantis};
   transition: all 0.3s ease-in-out;
   cursor: pointer;

   &:hover {
    transform: scale(1.1);
   }
}`;

export const WorkoutSection = styled(FormAndFallbackMessageWrapper)`
  grid-template-columns: 1fr 1fr;
  border: none;
  padding: 1.5rem 2rem;
  position: relative;

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
    padding: 2.5rem 2.2rem;
  }
`;

export const Header = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.mantisDarker};
  padding-bottom: 0.5rem;
`;

export const WorkoutTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  font-family: 'Akaya Telivigala', cursive;
  color: ${colors.white};
  letter-spacing: 0.1rem;

  @media (min-width: 62em) {
    font-size: 1.8rem;
  }

  @media (min-width: 75em) {
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

export const Details = styled.div`
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

export const ModalContentTitle = styled('h2')`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const ModalContentSubtitle = styled('h2')`
  font-size: 1.5rem;
  opacity: 0.8;
`;
