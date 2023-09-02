import { actionButtonsConfig } from './WorkoutsDetails.configs';
import { ActionButton, GoToPageButton } from './WorkoutsDetails.styled';
import { ActionButtonConfigProps } from './WorkoutsDetails.types';

export const generateActionButtons = ({
  isNextPage,
  isPreviousPage,
  pageCount,
  onGoToPage,
  onGoBackPage,
  onNextPage,
  onPreviousPage,
}: ActionButtonConfigProps): JSX.Element[] => {
  const actionButtons = actionButtonsConfig({
    isNextPage,
    isPreviousPage,
    pageCount,
    onGoToPage,
    onGoBackPage,
    onNextPage,
    onPreviousPage,
  });

  return actionButtons.map(
    ({ backgroundColor, color, hoverColor, id, disabled, icon, label, isButtonWithIcon, onClick }) => {
      if (isButtonWithIcon) {
        return (
          <GoToPageButton
            key={id}
            onClick={onClick}
            disabled={disabled}
            backgroundColor={backgroundColor}
            hoverColor={hoverColor}
            color={color}
          >
            {icon}
          </GoToPageButton>
        );
      }

      return (
        <ActionButton
          key={id}
          onClick={onClick}
          disabled={disabled}
          backgroundColor={backgroundColor}
          hoverColor={hoverColor}
          color={color}
        >
          {label}
        </ActionButton>
      );
    }
  );
};
