import styled from 'styled-components';

export const ProfileFormWrapper = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  @media (width >= 35em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
