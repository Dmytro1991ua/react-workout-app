import styled from 'styled-components';
import { ArrowheadLeftOutline, ArrowheadRightOutline } from 'styled-icons/evaicons-outline';

import Button from '../../components/Button/Button';
import { colors } from '../../global-styles/ColorsPalette';
import { fadeInDown } from '../../global-styles/Global.styled';

const commonIconStyles = {
  width: '1.5rem',
  height: '1.5rem',
};

export const WorkoutsDetailsSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${colors.darkBlue};
  height: 100%;
  padding: 8.5rem 1.6rem 0 1.6rem;
  overflow: auto;
  transition: all 0.3s ease-out;
  animation: ${fadeInDown} 0.4s ease-in-out;
`;

export const TableWrapper = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    border: 5px solid ${colors.mantisDarker};
  }

  th {
    padding: 0 1.5rem;
    background-color: ${colors.mantis};
    color: ${colors.white};
    margin-top: 0;
  }

  td,
  th {
    border: 1px solid ${colors.mantisDarker};
    padding: 1.5rem;
  }

  tr {
    background-color: ${colors.lighterGrey};
  }

  tr:nth-child(even) {
    background-color: ${colors.gray95};
  }

  tr:hover {
    background-color: ${colors.darkGrey};
    cursor: pointer;
  }
`;

export const TableCellWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TablePaginationContainer = styled('div')`
  display: flex;
  align-items: center;
  color: ${colors.white};
  margin-top: 1rem;
`;

export const TablePaginationActions = styled(TablePaginationContainer)`
  margin-top: 0;
  margin-left: auto;
`;

export const PreviousButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  margin-left: 1rem;
  border-radius: 0.7rem;
`;

export const NextButton = styled(PreviousButton)`
  margin-left: 1.5rem;
  margin-right: 1rem;
`;

export const GoToPageButton = styled(Button)`
  padding: 0.2rem 0.7rem;
  border-radius: 0.7rem;
`;

export const SearchInputWrapper = styled('div')`
  color: ${colors.white};
  margin: 1.5rem 0;
  text-align: center;
`;

export const PreviousButtonIcon = styled(ArrowheadLeftOutline)`
  ${commonIconStyles};
`;

export const NextButtonIcon = styled(ArrowheadRightOutline)`
  ${commonIconStyles};
`;
