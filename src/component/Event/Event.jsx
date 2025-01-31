import { ThemeProvider } from "@emotion/react";
import {
  FaUserAlt,
  FaRegCalendarAlt,
  FaLocationArrow,
  FaClock,
} from "react-icons/fa";
import PropTypes from "prop-types";

import { ContainerEvent, TitleEvent, InfoEvent } from "./Event.styled";

export const Event = ({ name, speaker, location, start, end }) => {
  return (
    <ContainerEvent>
      <TitleEvent>{name}</TitleEvent>
      <InfoEvent>
        <FaLocationArrow />
        {location}
      </InfoEvent>
      <InfoEvent>
        <FaUserAlt />
        {speaker}
      </InfoEvent>
      <InfoEvent>
        <FaRegCalendarAlt />
        {start}
      </InfoEvent>
      <ThemeProvider>
        <InfoEvent>
          <FaClock />
          {end}
        </InfoEvent>
      </ThemeProvider>
    </ContainerEvent>
  );
};

Event.proTotype = {
  name: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
