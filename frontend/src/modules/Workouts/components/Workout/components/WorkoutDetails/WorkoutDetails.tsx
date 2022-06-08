import React, { ReactElement } from 'react';
import { Details, WorkoutIcon, WorkoutUnit, WorkoutValue } from '../../Workout.styled';

interface WorkoutDetailsProps {
  selectedValue: string;
  distance: number;
  duration: number;
  cadence?: string;
  elevationGain?: string;
  pace?: number;
  speed?: number;
}

const WorkoutDetails = ({
  selectedValue,
  distance,
  duration,
  cadence,
  elevationGain,
  pace,
  speed,
}: WorkoutDetailsProps): ReactElement => {
  return (
    <>
      <Details>
        <WorkoutIcon>{selectedValue === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</WorkoutIcon>
        <WorkoutValue>{distance}</WorkoutValue>
        <WorkoutUnit>km</WorkoutUnit>
      </Details>
      <Details>
        <WorkoutIcon>⏱</WorkoutIcon>
        <WorkoutValue>{duration}</WorkoutValue>
        <WorkoutUnit>min</WorkoutUnit>
      </Details>
      <Details>
        <WorkoutIcon>⚡️</WorkoutIcon>
        <WorkoutValue>{selectedValue === 'running' ? pace : speed}</WorkoutValue>
        <WorkoutUnit>{selectedValue === 'running' ? 'min/km' : 'km/h'}</WorkoutUnit>
      </Details>
      <Details>
        <WorkoutIcon>{selectedValue === 'running' ? '🦶🏼' : '⛰'}</WorkoutIcon>
        <WorkoutValue>{selectedValue === 'running' ? cadence : elevationGain}</WorkoutValue>
        <WorkoutUnit>{selectedValue === 'running' ? 'spm' : 'm'}</WorkoutUnit>
      </Details>
    </>
  );
};

export default WorkoutDetails;
