import React, { ReactElement } from 'react';
import ReactTooltip, { Effect, Offset, Place } from 'react-tooltip';

interface TooltipProps {
  effect?: Effect;
  backgroundColor?: string;
  textColor?: string;
  border?: boolean;
  borderColor?: string;
  arrowColor?: string;
  id?: string;
  place?: Place;
  offset?: Offset;
}

const Tooltip = (props: TooltipProps): ReactElement => {
  return (
    <ReactTooltip
      id={props.id}
      effect={props.effect}
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      border={props.border}
      borderColor={props.borderColor}
      arrowColor={props.borderColor}
      place={props.place}
      offset={props.offset}
    />
  );
};

export default Tooltip;
