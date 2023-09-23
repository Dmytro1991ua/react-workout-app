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
  transition: all 0.3s ease-out;
  animation: ${fadeInDown} 0.4s ease-in-out;

  section {
    margin: auto;
    max-width: 100rem;
    text-align: center;
    padding: 3.5rem;
  }
`;

export const TableWrapper = styled.div`
  overflow: auto;
  border: 5px solid ${colors.mantisDarker};
  max-height: 50rem;

  .table {
    border: 1px solid ${colors.mantisDarker};
    border-collapse: collapse;

    .tr {
      display: contents;

      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th {
      background-color: ${colors.mantis} !important;
      border-bottom: none !important;
    }

    .th,
    .td {
      padding: 5px;
      border: 1px solid ${colors.mantisDarker};
      background-color: white;
      overflow: hidden;
      text-align: center;

      :last-child {
        border-right: 0;
      }
    }

    &.sticky {
      overflow: scroll;

      .header {
        position: sticky;
        top: 0;
        z-index: 1;
        color: ${colors.white};
        box-shadow: 0px 3px 3px ${colors.mantisDarker};
      }

      .body {
        position: relative;
        z-index: 0;
      }

      [data-sticky-td] {
        position: sticky;
        background-color: ${colors.gray95};
        width: 10rem !important;

        @media (width >= 30em) {
          width: 15rem !important;
        }

        &:nth-child(2) {
          left: 0 !important;
          border-right: none;

          @media (width >= 30em) {
            left: 15rem !important;
          }
        }
      }

      [data-sticky-last-left-td] {
        box-shadow: 2px 0px 3px ${colors.mantisDarker};
      }

      [data-sticky-first-right-td] {
        box-shadow: -2px 0px 3px ${colors.mantisDarker};
      }
    }
  }
`;

export const TableCellWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TablePaginationContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  margin-top: 1rem;
  padding: 1rem 0;

  @media (width >= 62em) {
    flex-direction: row;
    padding: 0;
  }
`;

export const TablePaginationInputsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (width >= 62em) {
    flex-direction: row;
  }
`;

export const TablePaginationActions = styled(TablePaginationContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;

  @media (width >= 62em) {
    margin-left: auto;
    margin-top: 0;
  }
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

export const ActionButton = styled(Button)`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  margin-left: 1rem;
  border-radius: 0.7rem;

  &:first-child {
    margin-left: 1rem;
  }

  &:not(:first-child) {
    margin-right: 1rem;
  }
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
