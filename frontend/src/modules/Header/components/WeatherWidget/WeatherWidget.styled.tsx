import styled from 'styled-components';
import MorningImg from '../../../../assets/weatherWidget/morning-small-min.jpg';
import AfternoonImg from '../../../../assets/weatherWidget/afternoon-small-min.jpg';
import EveningImg from '../../../../assets/weatherWidget/evening-small-min.jpg';
import { colors } from '../../../../global-styles/ColorsPalette';

function changeBackgroundImageBasedOnCurrentTime() {
  const hours = new Date().getHours();

  return hours < 12 ? `${MorningImg}` : hours < 18 ? `${AfternoonImg}` : `${EveningImg}`;
}

export const WeatherWidgetWrapper = styled('section')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 50%), rgba(0, 0, 0, 50%)),
    url(${changeBackgroundImageBasedOnCurrentTime});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 53%;
  width: 100%;
  min-width: 25rem;
  min-height: 7rem;
  border-radius: 3rem;
  color: ${colors.white};

  @media (min-width: 28em) {
    min-width: 26rem;
  }
`;

export const WeatherWidgetTop = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
`;

export const WeatherTemperature = styled('h2')`
  font-size: 3rem;
  margin-right: 1.5rem;
`;

export const CityWeatherLabelWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CityWeatherLabel = styled('h3')`
  font-size: 1.2rem;
  text-transform: capitalize;
`;

export const WeatherIcon = styled('img')`
  position: absolute;
  top: -42%;
  right: -11%;
  display: flex;
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;

export const MobileWidgetContainer = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background-color: ${colors.darkBlue};
  color: ${colors.white};
`;

export const MobileWidgetTitle = styled('h2')`
  font-size: 1.6rem;
`;

export const MobileWidgetSubtitle = styled('p')`
  font-size: 1.2rem;
`;
