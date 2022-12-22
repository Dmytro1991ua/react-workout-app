import { v4 as uuidv4 } from 'uuid';

export const WEIGHT_OPTIONS: SelectedOption[] = [
  { id: uuidv4(), value: 'kg' },
  { id: uuidv4(), value: 'lbs' },
];

export const HEIGHT_OPTIONS: SelectedOption[] = [
  { id: uuidv4(), value: 'cm' },
  { id: uuidv4(), value: 'in.' },
];

export const FEET_OPTIONS: SelectedOption[] = [
  { id: uuidv4(), value: '4' },
  { id: uuidv4(), value: '5' },
  { id: uuidv4(), value: '6' },
  { id: uuidv4(), value: '7' },
];

export const INCHES_OPTIONS: SelectedOption[] = [
  { id: uuidv4(), value: '0' },
  { id: uuidv4(), value: '1' },
  { id: uuidv4(), value: '2' },
  { id: uuidv4(), value: '3' },
  { id: uuidv4(), value: '4' },
  { id: uuidv4(), value: '5' },
  { id: uuidv4(), value: '6' },
  { id: uuidv4(), value: '7' },
  { id: uuidv4(), value: '8' },
  { id: uuidv4(), value: '9' },
  { id: uuidv4(), value: '10' },
  { id: uuidv4(), value: '11' },
  { id: uuidv4(), value: '12' },
];

export const FormFieldName = {
  height: 'height',
  weight: 'weight',
  feet: 'feet',
  inches: 'inches',
  weightUnits: 'weightUnits',
  heightUnits: 'heightUnits',
} as const;

export type FieldNameType = 'height' | 'heightUnits' | 'weight' | 'weightUnits' | 'feet' | 'inches';
