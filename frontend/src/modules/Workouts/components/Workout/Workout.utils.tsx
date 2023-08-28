import Tooltip from '../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../global-styles/ColorsPalette';
import { ActionButton } from './components/WorkoutsActionsPanel/WorkoutsActionsPanel.styled';
import { WorkoutActionConfig } from './Workout.types';

export const generateWorkoutActionButtons = (config: WorkoutActionConfig[]): JSX.Element[] =>
  config.map(({ id, icon, 'data-for': dataFor, 'data-tip': dataTip, onClick }) => {
    return (
      <li key={id}>
        <ActionButton data-tip={dataTip} data-for={dataFor} onClick={onClick}>
          {icon}
        </ActionButton>
        <Tooltip
          id={dataFor}
          effect='solid'
          backgroundColor={colors.mantisDarker}
          textColor={colors.darkBlue}
          border={true}
          borderColor={colors.white}
          arrowColor={colors.mantisDarker}
          place='top'
          offset={{ top: 100, left: 10 }}
        />
      </li>
    );
  });
