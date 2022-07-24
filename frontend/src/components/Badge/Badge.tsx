import React, { ReactElement, ReactNode } from 'react';

import { colors } from './../../global-styles/ColorsPalette';
import { BadgeWrapper } from './Badge.styled';

interface BadgeProps {
  backgroundColor: keyof MainPalette;
  icon: ReactNode;
  iconColor?: keyof MainPalette;
}

const Badge = ({ backgroundColor, icon, iconColor }: BadgeProps): ReactElement => {
  const badgeWrapperColor = colors[backgroundColor];
  const badgeIconColor = iconColor && colors[iconColor];

  return (
    <BadgeWrapper backgroundColor={badgeWrapperColor} iconColor={badgeIconColor}>
      {icon}
    </BadgeWrapper>
  );
};

export default Badge;
