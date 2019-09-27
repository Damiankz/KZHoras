import React, { useState } from "react";
import styled from "styled-components";
import Event from "./Event";

export default function Day({ empty, events, day, date }) {
  const [newEvents, setNewEvents] = useState(events);
  return (
    <DayEntry empty={empty} day={day}>
      <h4>{date>-1 && `${date + 1 } - `} {day}</h4>
      {events &&
        events.map((e, i) => {
          return <Event key={i}{...e} />;
        })}
    </DayEntry>
  );
}

const DayEntry = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  background: ${props => (props.empty || ['Sunday', 'Saturday'].indexOf(props.day) != -1 ? "#afafaf" : "white")};
  h4 {
    margin: 4px 0;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
`;
