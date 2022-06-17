import React, { ReactElement, ReactNode } from 'react';

import { colors } from '../../global-styles/ColorsPalette';
import { CustomButton } from './Buton.styled';

export interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  fullWidth?: boolean;
  children?: ReactNode;
  backgroundColor?: keyof MainPalette;
  hoverColor?: keyof MainPalette;
  color?: keyof MainPalette;
  onClick?: () => Promise<void> | void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  type,
  fullWidth,
  onClick,
  backgroundColor,
  hoverColor,
  color,
  disabled,
  className,
}: ButtonProps): ReactElement => {
  const getButtonBackgroundColorBasedOnProps = backgroundColor && colors[backgroundColor];
  const getButtonHoverColorBasedOnProps = hoverColor && colors[hoverColor];
  const getButtonColorBasedOnProps = color && colors[color];

  return (
    <CustomButton
      type={type}
      fullWidth={fullWidth}
      backgroundColor={getButtonBackgroundColorBasedOnProps}
      hoverColor={getButtonHoverColorBasedOnProps}
      color={getButtonColorBasedOnProps}
      disabled={disabled}
      className={className}
      onClick={
        disabled || !onClick
          ? undefined
          : (e) => {
              e.preventDefault();
              e.stopPropagation();
              onClick();
            }
      }
    >
      {children}
    </CustomButton>
  );
};

export default Button;
