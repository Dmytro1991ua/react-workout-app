import {
  WorkoutDetails,
  WorkoutIcon,
  WorkoutSection,
  WorkoutTitle,
  WorkoutUnit,
  WorkoutValue,
} from "../styles/WorkoutStyles";

const Workout = ({ workout }) => {
  const {
    description,
    selectedValue,
    distance,
    duration,
    speed,
    pace,
    cadence,
     elevationGain,
    id
  } = workout;
  return (
    <WorkoutSection className={selectedValue === "running" ? "running" : "cycling"} id={id}>
      <WorkoutTitle>{description}</WorkoutTitle>
      <WorkoutDetails>
        <WorkoutIcon>{selectedValue === "running" ? "🏃‍♂️" : "🚴‍♀️"}</WorkoutIcon>
        <WorkoutValue>{distance}</WorkoutValue>
        <WorkoutUnit>km</WorkoutUnit>
      </WorkoutDetails>
      <WorkoutDetails>
        <WorkoutIcon>⏱</WorkoutIcon>
        <WorkoutValue>{duration}</WorkoutValue>
        <WorkoutUnit>min</WorkoutUnit>
      </WorkoutDetails>
      <WorkoutDetails>
        <WorkoutIcon>⚡️</WorkoutIcon>
        <WorkoutValue>
          {selectedValue === "running" ? pace : speed}
        </WorkoutValue>
        <WorkoutUnit>
          {selectedValue === "running" ? "min/km" : "km/h"}
        </WorkoutUnit>
      </WorkoutDetails>
      <WorkoutDetails>
        <WorkoutIcon>{selectedValue === "running" ? "🦶🏼" : "⛰"}</WorkoutIcon>
        <WorkoutValue>
          {selectedValue === "running" ? cadence : elevationGain}
        </WorkoutValue>
        <WorkoutUnit>{selectedValue === "running" ? "spm" : "m"}</WorkoutUnit>
      </WorkoutDetails>
    </WorkoutSection>
  );
};

export default Workout;
