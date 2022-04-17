import { v4 as uuidv4 } from 'uuid';

import CyclingSliderImg from '../../../../assets/images/slider/cycling.jpg';
import AerobicsSliderImg from '../../../../assets/images/slider/aerobics.jpg';
import BattleRopesSliderImg from '../../../../assets/images/slider/battle-ropes.jpg';
import GymWorkoutSliderImg from '../../../../assets/images/slider/gym-workout.jpg';
import RunningSliderImg from '../../../../assets/images/slider/running.jpg';
import SwimmingSliderImg from '../../../../assets/images/slider/swimming.jpg';
import YogaSliderImg from '../../../../assets/images/slider/yoga.jpg';

export const SliderConfig: SliderConfiguration[] = [
  {
    id: uuidv4(),
    label: 'Running',
    tag: 'div',
    href: 'https://en.wikipedia.org/wiki/Running',
    target: '_blank',
    rel: 'noreferrer',
    ImgSrc: RunningSliderImg,
    alt: 'running',
  },
  {
    id: uuidv4(),
    label: 'Cycling',
    tag: 'div',
    href: 'https://en.wikipedia.org/wiki/Cycling',
    target: '_blank',
    rel: 'noreferrer',
    ImgSrc: CyclingSliderImg,
    alt: 'cycling',
  },
  {
    id: uuidv4(),
    label: 'Yoga',
    tag: 'div',
    href: 'https://en.wikipedia.org/wiki/Yoga',
    target: '_blank',
    rel: 'noreferrer',
    ImgSrc: YogaSliderImg,
    alt: 'yoga',
  },
  {
    id: uuidv4(),
    label: 'Swimming',
    tag: 'div',
    href: 'https://en.wikipedia.org/wiki/Swimming_(sport)',
    target: '_blank',
    rel: 'noreferrer',
    ImgSrc: SwimmingSliderImg,
    alt: 'swimming',
  },
  {
    id: uuidv4(),
    label: 'Gym Workout',
    tag: 'div',
    href: 'https://en.wikipedia.org/wiki/Weight_training',
    target: '_blank',
    rel: 'noreferrer',
    ImgSrc: GymWorkoutSliderImg,
    alt: 'gym workout',
  },
  {
    id: uuidv4(),
    label: 'Battle Ropes',
    tag: 'div',
    href: 'https://en.wikipedia.org/wiki/Battling_ropes',
    target: '_blank',
    rel: 'noreferrer',
    ImgSrc: BattleRopesSliderImg,
    alt: 'battle ropes',
  },
  {
    id: uuidv4(),
    label: 'Aerobics',
    tag: 'div',
    href: 'https://en.wikipedia.org/wiki/Aerobics',
    target: '_blank',
    rel: 'noreferrer',
    ImgSrc: AerobicsSliderImg,
    alt: 'aerobics',
  },
];
