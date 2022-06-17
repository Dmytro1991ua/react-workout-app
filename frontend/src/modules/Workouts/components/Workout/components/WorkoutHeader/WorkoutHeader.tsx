import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tooltip from '../../../../../../components/Tooltip/Tooltip';
import { colors } from '../../../../../../global-styles/ColorsPalette';
import { toastService } from '../../../../../../services/Toast.service';
import { ActionButton } from '../WorkoutsActionsPanel/WorkoutsActionsPanel.styled';
import { AddToFavorite, EditBtn, Header, RemoveBtn, RemoveFromFavorite, WorkoutTitle } from './../../Workout.styled';

interface WorkoutHeaderProps {
  description?: string;
  onOpenModal: () => void;
  onOpenWeatherInfoModal: () => void;
  onWorkoutEdit: (id: string) => void;
  onAddingToFavorites: (id: string) => void;
  workout: WorkoutItem;
}

const WorkoutHeader = ({
  description,
  onOpenModal,
  onWorkoutEdit,
  workout,
  onAddingToFavorites,
  onOpenWeatherInfoModal,
}: WorkoutHeaderProps): ReactElement => {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState<string | null>(null);

  const isWorkoutInFavorites = workout.isFavorite === true;

  const getCurrentWeatherIcon = useCallback(async (): Promise<void> => {
    try {
      const currentWeatherIcon = `${process.env.REACT_APP_WEATHER_API_ICON}/wn/${workout.weatherInfo?.weatherInfo[0].icon}.png`;

      setCurrentWeatherIcon(currentWeatherIcon);
    } catch {
      toastService.error('Failed to get current weather icon');
    }
  }, [workout.weatherInfo?.weatherInfo]);

  useEffect(() => {
    getCurrentWeatherIcon();
  }, [getCurrentWeatherIcon]);

  const config = [
    {
      id: uuidv4(),
      icon: isWorkoutInFavorites ? <RemoveFromFavorite /> : <AddToFavorite />,
      'data-tip': 'Add to favorite',
      'data-for': 'addToFavoriteButton',
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onAddingToFavorites(workout._id ?? uuidv4());
      },
    },
    {
      id: uuidv4(),
      icon: <RemoveBtn />,
      'data-tip': 'Delete Workout',
      'data-for': 'deleteButton',
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onOpenModal();
      },
    },
    {
      id: uuidv4(),
      icon: <EditBtn />,
      'data-tip': 'Edit Workout',
      'data-for': 'editButton',
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onWorkoutEdit(workout._id ?? uuidv4());
      },
    },
    {
      id: uuidv4(),
      icon: workout.weatherInfo ? (
        <img
          style={{ marginTop: '0.6rem', marginLeft: '-1rem', cursor: 'pointer' }}
          src={currentWeatherIcon ?? ''}
          alt={`${workout.weatherInfo?.city}'s city current weather icon`}
        />
      ) : null,
      'data-tip': 'Workout weather details',
      'data-for': 'weatherIcon',
      onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        onOpenWeatherInfoModal();
      },
    },
  ];

  return (
    <Header>
      <WorkoutTitle>{description}</WorkoutTitle>
      {config.map((item) => {
        return (
          <li key={item.id}>
            <ActionButton data-tip={item['data-tip']} data-for={item['data-for']} onClick={(e) => item.onClick(e)}>
              {item.icon}
            </ActionButton>
            <Tooltip
              id={item['data-for']}
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
      })}
    </Header>
  );
};

export default WorkoutHeader;
