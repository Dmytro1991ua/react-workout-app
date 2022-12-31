export interface QuizIntroductionActionButton {
  id: string;
  label: string;
  backgroundColor: keyof MainPalette;
  color: keyof MainPalette;
  hoverColor: keyof MainPalette;
  onClick: () => void;
}
