declare interface MainPalette {
  black: string;
  white: string;
  powderAsh: string;
  darkBlue: string;
  mantis: string;
  mantisDarker: string;
  lighterBlue: string;
  brightGreen: string;
  tomato: string;
  errorBg: string;
  error: string;
}

declare interface SelectedOption {
  id: number | string;
  value: string;
}

declare interface WorkoutItem {
  id: string;
  date: string;
  coordinates: LatLngTuple;
  selectedValue: string;
  distance: number;
  duration: number;
  cadence?: string;
  elevationGain?: string;
  pace?: number;
  description?: string;
  speed?: number;
}
