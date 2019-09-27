import React, { useState } from "react";
import styled from "styled-components";
import Event from "./Event";

export default function Day({ empty, events, day }) {
  const [newEvents, setNewEvents] = useState(events);
  return (
    <DayEntry empty={empty}>
      <h4>{day}</h4>
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
  background: ${props => (props.empty ? "grey" : "red")};
  h4 {
    margin: 4px 0;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
`;
