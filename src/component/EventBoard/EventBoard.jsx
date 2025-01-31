import PropTypes from "prop-types";
import { Event } from "../Event/Event";
import { ContainerEventBoard } from "./EventBoard.styled";

export const EventBoard = ({ events }) => {
  return (
    <ContainerEventBoard>
      {events.map(({ name, speaker, location, time }) => (
        <Event
          key={name}
          name={name}
          speaker={speaker}
          location={location}
          start={time.start}
          end={time.end}
        />
      ))}
    </ContainerEventBoard>
  );
};

EventBoard.protoTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      optionalProperty: PropTypes.string,
      requiredProperty: PropTypes.number.isRequired,
    })
  ),
};
