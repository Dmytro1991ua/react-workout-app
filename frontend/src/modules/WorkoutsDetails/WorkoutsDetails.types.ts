import { ActionButtonLabel } from './WorkoutsDetails.enums';

export type ActionButtonConfig = {
  id: string;
  backgroundColor: keyof MainPalette;
  hoverColor: keyof MainPalette;
  color: keyof MainPalette;
  label?: ActionButtonLabel;
  icon?: JSX.Element;
  disabled?: boolean;
  isButtonWithIcon?: boolean;
  onClick?: () => void | Promise<void>;
};

export type ActionButtonConfigProps = {
  isPreviousPage: boolean;
  isNextPage: boolean;
  pageCount: number;
  onGoBackPage: (updater: number | ((pageIndex: number) => number)) => void;
  onGoToPage: (updater: number | ((pageIndex: number) => number)) => void;
  onPreviousPage: () => void | Promise<void>;
  onNextPage: () => void | Promise<void>;
};
